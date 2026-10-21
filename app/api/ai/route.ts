
import OpenAI from "openai";
import { NextResponse } from "next/server";

const getOpenAI = () =>
  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const SYSTEM_PROMPT = `
You are SYNTHESISE AI, an intelligent business opportunity
research assistant.

Your job is to give useful, specific, practical answers about
AI businesses, startups, online income, market trends, and
business opportunities.

Rules:
1. Answer the exact question asked. Follow the requested number
   of ideas, steps, examples, or comparisons.
2. Avoid generic responses, vague claims, and filler.
3. For business ideas, explain:
   - What the business does
   - Who the target customers are
   - How it can earn money
   - Free tools a beginner can start with
   - Three clear first steps
   - Main challenges and risks
4. If the user asks for no-investment ideas, prioritize free
   tools and organic customer acquisition. Explain that some
   services may later have paid limits.
5. Do not promise profits or guaranteed success.
6. Never invent market statistics or claim to have verified
   live trends unless reliable data is actually available.
   Clearly label estimates and uncertainty.
7. Use clear headings, numbered lists, and readable text.
8. Respond in plain text or Markdown. Do not return JSON
   inside the answer.
9. Be concise but provide enough detail to make the answer
   actionable.
10. Match the user's language when possible.
`;

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const prompt =
      typeof body.prompt === "string" ? body.prompt.trim() : "";

    if (!prompt) {
      return NextResponse.json(
        { error: "Please enter a question." },
        { status: 400 }
      );
    }

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const result = completion.choices[0]?.message?.content?.trim();

    if (!result) {
      return NextResponse.json(
        { error: "The AI returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ result });
  } catch (error: unknown) {
    console.error("SYNTHESISE AI ERROR:", error);

    const message =
      error instanceof Error
        ? error.message
        : "An unexpected AI server error occurred.";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

