import OpenAI from "openai";
import { NextResponse } from "next/server";

const getOpenAI = () => new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = body.prompt;

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are SYNTHESISE AI, a futuristic AI business intelligence engine.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });

  } catch (error: any) {
    console.log("OPENAI ERROR:", error);

    return NextResponse.json({
      result:
        error?.message ||
        error?.error?.message ||
        "Unknown AI server error",
    });
  }
}
