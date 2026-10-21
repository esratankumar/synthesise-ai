import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { tavily } from "@tavily/core";

const getGroq = () => new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
const getTvly = () => tavily({
  apiKey: process.env.TAVILY_API_KEY!,
});

/* ---------------- RATE LIMIT MEMORY (simple in-memory) ---------------- */
const requestMap = new Map<string, number>();

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/* ---------------- SMART MODEL ROUTER ---------------- */
function chooseModel(input: string) {
  const heavyKeywords = [
    "analyze",
    "reason",
    "build system",
    "architecture",
    "debug",
    "optimize",
    "design",
    "explain deeply",
  ];

  const isComplex = heavyKeywords.some((k) =>
    input.toLowerCase().includes(k)
  );

  return isComplex
    ? "llama-3.3-70b-versatile"
    : "llama-3.1-8b-instant";
}

/* ---------------- MEMORY COMPRESSOR ---------------- */
function compressMemory(memory: string) {
  if (!memory) return "";

  // keep only last 500 chars (simple version)
  return memory.slice(-500);
}

/* ---------------- MAIN API ---------------- */
export async function POST(req: Request) {
  try {
const body = await req.json();

console.log(
  "FULL BODY:",
  JSON.stringify(body, null, 2)
);

console.log(
  "MESSAGES COUNT:",
  body.messages?.length
);

console.log(
  "LAST MESSAGE:",
  JSON.stringify(
    body.messages?.[body.messages.length - 1],
    null,
    2
  )
);
console.log("BODY RECEIVED");
console.log(body);
    const messages = body.messages || [];
    const memory = compressMemory(body.memory || "");

const lastUserMessage =
  [...messages]
    .reverse()
    .find((m: any) => m.role === "user");

const userMessage =
  lastUserMessage?.content?.trim() || "";
console.log("MESSAGES COUNT:", messages.length);
console.log("LAST USER:", userMessage);
console.log("RAW USER MESSAGE:", JSON.stringify(userMessage));
console.log("USER MESSAGE LENGTH:", userMessage.length);

let webContext = "";
let sourceLinks = "";
let searchResults: any[] = [];

console.log("USER MESSAGE:", userMessage);

const needsWebSearch =
  /latest|today|news|current|recent|trend|trending|who is|what is|search|find|update|updates|release|released/i.test(
    userMessage
  );
console.log("WEB SEARCH CHECK:", needsWebSearch);

if (needsWebSearch) {
  try {
const search = await getTvly().search(userMessage, {
  maxResults: 12,
  searchDepth: "advanced",
  topic: "news",

includeDomains: [
  "reuters.com",
  "techcrunch.com",
  "theverge.com",
  "openai.com",
  "blog.google",
  "anthropic.com",
  "microsoft.com",
  "nvidia.com",
  "wired.com",
  "wsj.com",
  "venturebeat.com",
  "mit.edu",
  "cnbc.com"
],

});

search.results = search.results.filter(
  (r: any) =>
    !r.url.includes("reddit.com") &&
    !r.url.includes("web.archive.org") &&
    !r.url.includes("substack.com") &&
    !r.url.includes("/video/")
);
searchResults = search.results.slice(0, 8);
sourceLinks = search.results
  .map(
    (r: any) =>
      `• ${r.title}\n${r.url}`
  )
  .join("\n\n");

webContext = search.results
  .slice(0, 8)
  .map(
    (r: any) =>
      `${r.title}\n${r.content}`
  )
  .join("\n\n")
  .slice(0, 6000);
console.log(
  "WEB CONTEXT LENGTH:",
  webContext.length
);
  } catch (err) {
    console.error("Tavily Error:", err);
  }
}
    /* ---------------- DUPLICATE REQUEST BLOCK ---------------- */
    const hash = `${userMessage}-${messages.length}`;

    const now = Date.now();
    if (requestMap.has(hash)) {
      const last = requestMap.get(hash)!;
      if (now - last < 2000) {
        return NextResponse.json(
          { error: "Duplicate request blocked" },
          { status: 429 }
        );
      }
    }
    requestMap.set(hash, now);

    /* ---------------- CONTEXT LIMIT ---------------- */
const recentMessages = messages.slice(-8);
const systemPrompt = `
You are SYNTHESISE AI.

CRITICAL RULES:

- Summarize ALL major news items found.
- Include 5 to 10 headlines whenever available.
- Do not omit relevant stories.
- If Live Web Results exist, answer ONLY using those results.
- Never invent news.
- Never invent statistics.
- Never invent dates.
- Do NOT create examples.
- Do NOT make assumptions.
- Summarize the web results exactly.
- Mention the source title when possible.
- Never create percentages, statistics, surveys, or trends unless they appear in the search results.
- Format answers using bullet points.
- Keep summaries under 5 news items.
- Each item should be 1-2 sentences only.
- Avoid repeating source names in the answer body.
- If web results are empty, say:
  "No reliable web results found."

LIVE WEB RESULTS:

${webContext}
`;

const finalMessages = [
  {
    role: "system",
    content: `
You are SYNTHESISE AI.

Rules:
- Never invent facts.
- Use ONLY the provided search results.
- If information is missing, say so.
- Summarize the search results accurately.
- Ignore speculation and rumors.
- Prefer Reuters, TechCrunch, OpenAI, Google, Microsoft and Nvidia sources.
- Never present predictions as facts.
- Do not infer details not explicitly stated in the source.
- Quote only information directly present in search results.
- At the end show Sources.
`,
  },
{
  role: "user",
  content: `
Question:
${userMessage}

Search Results:
${webContext}

Sources:
${sourceLinks}

IMPORTANT:
Only answer using the search results above.
Do not use prior knowledge.
If the answer is not in the search results, say:
"I could not find that information in current web results."
`,
},
];

    /* ---------------- MODEL SELECTION ---------------- */
    let model = chooseModel(userMessage);
console.log("MODEL:", model);
const run = async (selectedModel: string) => {
  return await getGroq().chat.completions.create({
    model: selectedModel,
    messages: [
      ...recentMessages,
      ...finalMessages,
    ],
    temperature: 0.7,
    max_tokens: 800,
    stream: true,
  });
};
    let completion;

    /* ---------------- RETRY + FALLBACK SYSTEM ---------------- */
    try {
console.log("CALLING GROQ...");
completion = await run(model);
console.log("GROQ CONNECTED");
    } catch (err: any) {
      if (err?.status === 429) {
        await sleep(3000);

        // fallback to cheaper model
        model = "llama-3.1-8b-instant";
        completion = await run(model);
      } else {
        throw err;
      }
    }

    /* ---------------- STREAM HANDLER ---------------- */
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion as any) {
            const content = chunk?.choices?.[0]?.delta?.content;

            if (!content) continue;

            controller.enqueue(encoder.encode(content));
          }
        } catch (err) {
          console.error("Stream error:", err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
headers: {
  "Content-Type": "text/plain; charset=utf-8",
  "X-Model-Used": model,
  "X-Search-Results": encodeURIComponent(
    JSON.stringify(searchResults)
  ),
},

    });
  } 
catch (error: any) {
  console.error("FULL API ERROR:");
  console.error(error);
  console.error(error?.message);
  console.error(error?.stack);

  return NextResponse.json(
    {
      error: "Internal server error",
      message: error?.message,
    },
    { status: 500 }
  );
}
}
