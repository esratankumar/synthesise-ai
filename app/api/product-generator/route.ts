import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        trend: "AI Agents",
        productName: "AI Agent Prompt Vault",
        productType: "Prompt Bundle",
        buyerPersona: "Freelancers & Agencies",
        price: "$49",
        revenueScore: 94,

        whopListing:
          "500+ ready-to-use AI Agent prompts for productivity, marketing and automation.",

        salesPage:
          "Save hours every week using proven AI Agent prompts used by professionals.",

        emails: [
          "Email 1: Problem Awareness",
          "Email 2: Solution Introduction",
          "Email 3: Product Benefits",
          "Email 4: Limited Time Offer",
        ],

        socialPosts: [
          "Twitter Launch Post",
          "LinkedIn Launch Post",
          "Facebook Launch Post",
        ],
      },

      {
        trend: "AI Marketing",
        productName: "AI Marketing Templates Pack",
        productType: "Template Bundle",
        buyerPersona: "Small Businesses",
        price: "$39",
        revenueScore: 90,

        whopListing:
          "Ready-made marketing templates powered by AI.",

        salesPage:
          "Create professional campaigns in minutes.",

        emails: [
          "Awareness Email",
          "Value Email",
          "Launch Email",
        ],

        socialPosts: [
          "Twitter Post",
          "LinkedIn Post",
        ],
      },
    ],
  });
}
