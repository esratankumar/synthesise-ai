import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  let response = "";

  if (query?.toLowerCase().includes("youtube")) {
    response =
      "Faceless YouTube Automation is trending because creators are scaling channels using AI voiceovers, AI video editing, and automated scripts.";
  } else if (query?.toLowerCase().includes("business")) {
    response =
      "Top AI business ideas include AI SaaS tools, faceless content automation, AI consulting, and digital product generation platforms.";
  } else if (query?.toLowerCase().includes("health")) {
    response =
      "AI healthcare platforms are rapidly growing due to demand for AI diagnostics, medical content automation, and virtual healthcare assistants.";
  } else {
    response =
      "SYNTHESISE AI detected a high-growth opportunity with strong monetization potential and future scalability.";
  }

  return NextResponse.json({
    result: response,
  });
}
