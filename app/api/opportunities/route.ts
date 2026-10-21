import { NextResponse } from "next/server";
import { tavily } from "@tavily/core";

const getTvly = () => tavily({
  apiKey: process.env.TAVILY_API_KEY!,
});

const KEYWORDS = [
  "AI agents",
  "AI startups",
  "AI tools",
  "AI automation",
  "AI marketing",
  "AI education",
  "AI healthcare",
  "AI video generation",
];

export async function GET() {
  try {
    const opportunities = [];

    for (const keyword of KEYWORDS) {
      const search = await getTvly().search(keyword, {
        maxResults: 3,
        searchDepth: "basic",
      });

      opportunities.push({
        niche: keyword,
        articles: search.results.length,
        score:
          Math.floor(
            search.results.length * 10 +
            Math.random() * 50
          ),
      });
    }

    opportunities.sort(
      (a, b) => b.score - a.score
    );

    return NextResponse.json({
      opportunities,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
