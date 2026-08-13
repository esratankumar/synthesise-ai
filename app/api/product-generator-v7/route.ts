import { NextResponse } from "next/server";

const products = [
  {
    trend: "AI Agents",

    productName: "AI Agent Prompt Vault",

    audience: [
      "Freelancers",
      "Agencies",
      "Marketers"
    ],

    price: "$49",

    revenueScore: 94,

    description:
      "500+ ready-to-use AI Agent prompts for automation and productivity.",

    salesPage:
      "Build AI systems faster with 500+ tested prompts.",

    whopListing:
      "Instant access to AI Agent Prompt Vault.",

    emailSequence: [
      "Launch Email",
      "Benefits Email",
      "Last Chance Email"
    ],

    socialPosts: [
      "Twitter Launch Thread",
      "LinkedIn Launch Post"
    ],

    seoKeywords: [
      "AI Agents",
      "Prompt Engineering",
      "Automation"
    ],

    launchPlan: [
      "Day 1 - Launch",
      "Day 2 - Content",
      "Day 3 - Promotion"
    ],

    forecast: "$5000/month"
  }
];

export async function GET() {
  return NextResponse.json({
    products
  });
}
