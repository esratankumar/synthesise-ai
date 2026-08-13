import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      trend: "AI Agents",

      productName:
        "AI Agent Business Kit",

      audience:
        "Freelancers & Agencies",

      price: "$49",

      revenueScore: 96,

      digitalProduct:
        "500 AI Agent workflows + prompts",

      landingPage:
        "Build AI businesses in hours instead of weeks.",

      whopListing:
        "Launch profitable AI Agent services using proven systems.",

      email1:
        "Introducing AI Agent Business Kit",

      email2:
        "See how agencies use AI Agents",

      email3:
        "Final chance to join",

      socialPost:
        "🚀 Launch AI Agent services with our new kit.",

      forecast:
        "$8,000/month"
    }
  ];

  return NextResponse.json({
    products
  });
}
