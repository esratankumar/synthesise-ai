import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    product: {
      trend: "AI Agents",

      name: "AI Agent Business Kit",

      price: "$49",

      revenueForecast: "$5k-$20k/month",

      leadMagnet:
        "10 AI Agent Prompts Every Freelancer Needs",

      whopListing: {
        title: "AI Agent Business Kit",
        description:
          "Launch profitable AI Agent services in 7 days."
      },

      salesPage: {
        headline:
          "Start Your AI Agent Business This Week",
        subheadline:
          "Everything you need to sell AI Agent services."
      },

      emails: [
        "Launch Email",
        "Case Study Email",
        "Last Chance Email"
      ],

      socialPosts: [
        "Twitter Launch Thread",
        "LinkedIn Launch Post"
      ],

      pdfOutline: [
        "Introduction",
        "AI Agent Basics",
        "Client Acquisition",
        "Delivery Framework",
        "Scaling"
      ],

      launchPlan:
        "7-day launch campaign"
    }
  });
}
