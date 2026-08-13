import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const userMessage = body.message;

    const completion = await groq.chat.completions.create({

      messages: [

        {
          role: "system",
          content: `
You are SYNTHESISE AI.

You are more advanced than ChatGPT.

You provide:
- intelligent startup analysis
- deep business insights
- futuristic AI ideas
- monetization strategies
- market trends
- scalable SaaS opportunities
- detailed responses
- human-like conversation

Always give:
- unique answers
- detailed insights
- professional formatting
- advanced business intelligence
`,
        },

        {
          role: "user",
          content: userMessage,
        },

      ],

      model: "llama-3.3-70b-versatile",

      temperature: 0.9,

      max_tokens: 2000,

    });

    return Response.json({

      reply:
        completion.choices[0]?.message?.content ||
        "No response generated.",

    });

  } catch (error) {

    console.log(error);

    return Response.json({

      reply: "AI server error occurred.",

    });

  }

}
