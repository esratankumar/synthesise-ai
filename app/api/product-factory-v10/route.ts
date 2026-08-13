import { NextResponse } from "next/server";

export async function GET() {

  const products = [
    {
      trend: "AI Agents",

      score: 94,

      productName:
        "AI Agent Business Kit",

      audience:
        "Freelancers, Agencies",

      pricing:
        "$49",

      revenue:
        "$5k-$20k/month",

      salesPage:
        "Learn how to launch AI Agent services in 7 days.",

      whop:
        "Complete AI Agent Business Kit",

      emails: [
        "Launch Email",
        "Case Study Email",
        "Last Chance Email"
      ],

      social: [
        "Twitter Launch Post",
        "LinkedIn Launch Post"
      ],

      launchPlan:
        "7-day launch strategy"
    }
  ];

  return NextResponse.json({
    products
  });
}
