import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    product: {
      name: "AI Agent Business Kit",

      salesPage: {
        headline:
          "Launch Your AI Agent Business In 7 Days",

        body:
          "Discover the complete system for finding clients, delivering AI Agent solutions and scaling to recurring revenue."
      },

      whop: {
        title: "AI Agent Business Kit",

        description:
          "Everything you need to launch a profitable AI Agent business."
      },

      emails: [
        {
          subject:
            "Your AI Agent Business Starts Today",

          body:
            "Welcome to the AI Agent Business Kit. Here's how to get your first client."
        },

        {
          subject:
            "How One Freelancer Made $5,000",

          body:
            "See how AI Agent services helped generate recurring revenue."
        },

        {
          subject:
            "Last Chance To Join",

          body:
            "Enrollment closes tonight."
        }
      ],

      social: {
        twitter:
          "🚀 Launching my AI Agent Business Kit today. Learn how to build a profitable AI service business.",

        linkedin:
          "AI Agents are transforming businesses. Here's the exact framework I use."
      },

      leadMagnet:
        "10 AI Agent Prompts Every Freelancer Needs",

      pdfOutline: [
        "Introduction",
        "AI Agent Setup",
        "Finding Clients",
        "Service Delivery",
        "Scaling"
      ]
    }
  });
}
