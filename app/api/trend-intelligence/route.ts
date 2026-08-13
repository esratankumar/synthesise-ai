import { NextResponse } from "next/server";
import { tavily } from "@tavily/core";
import { assignTask } from "@/lib/enterprise/collaborationEngine";

const tvly = tavily({
  apiKey: process.env.TAVILY_API_KEY!,
});

const TRENDS = [
  "AI agents",
  "AI video generation",
  "AI education",
  "AI healthcare",
  "AI startups",
  "AI automation",
  "AI coding",
  "AI marketing",
];

export async function GET() {
  try {
    const results = [];

    for (const trend of TRENDS) {
      const search = await tvly.search(trend, {
        maxResults: 5,
        searchDepth: "basic",
      });

assignTask({
  from: "Trend Agent",
  to: "Product Factory",
  action: "Generate product from discovered trend",
});

      const demand =
        Math.min(
          100,
          search.results.length * 15 +
          Math.floor(Math.random() * 25)
        );

      const competition =
        demand > 80
          ? "High"
          : demand > 50
          ? "Medium"
          : "Low";

      const revenue =
        demand > 80
          ? "High"
          : demand > 50
          ? "Medium"
          : "Low";

      results.push({
        trend,
        demand,
        competition,
        revenue,
      });
    }

    results.sort(
      (a, b) => b.demand - a.demand
    );

    return NextResponse.json({
      trends: results,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
