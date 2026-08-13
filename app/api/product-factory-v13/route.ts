import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    product: {
      name: "AI Agent Business Kit",

      modules: [
        {
          title: "Module 1",
          content: "Introduction to AI Agents"
        },
        {
          title: "Module 2",
          content: "Finding High-Paying Clients"
        },
        {
          title: "Module 3",
          content: "Service Delivery Framework"
        },
        {
          title: "Module 4",
          content: "Scaling Your Business"
        }
      ],

      promptPack: [
        "Client Discovery Prompt",
        "Proposal Generator Prompt",
        "AI Agent Workflow Prompt"
      ],

      templates: [
        "Client Proposal Template",
        "Onboarding Template",
        "Service Agreement Template"
      ],

      checklists: [
        "Launch Checklist",
        "Client Acquisition Checklist",
        "Delivery Checklist"
      ],

      bonus: [
        "50 AI Agent Niches",
        "100 Outreach Messages"
      ]
    }
  });
}
