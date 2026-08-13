import { NextResponse } from "next/server";
import { tavily } from "@tavily/core";

const tvly = tavily({
  apiKey: process.env.TAVILY_API_KEY!,
});

export async function GET() {
  try {
    const search = await tvly.search(
      "latest AI news today",
      {
        maxResults: 10,
        searchDepth: "basic",
      }
    );

    return NextResponse.json({
      news: search.results,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
