import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ideas: [
      {
        niche: "AI Agents",
        product:
          "AI Agent Prompt Vault",
        buyer:
          "Freelancers",
        price: "$29",
        revenueScore: 93,
        platform: "Whop",
        launchPlan: [
          "Build prompt pack",
          "Create landing page",
          "Launch on Whop",
        ],
      },
      {
        niche: "AI Marketing",
        product:
          "Marketing Templates",
        buyer:
          "Small Businesses",
        price: "$49",
        revenueScore: 89,
        platform: "Whop",
        launchPlan: [
          "Create templates",
          "Package PDFs",
          "Launch product",
        ],
      },
    ],
  });
}
