import { NextResponse } from "next/server";

export async function GET() {

  const workflow = [

    {
      agent: "Trend Scout",
      output: "AI Voice Agents"
    },

    {
      agent: "Opportunity Agent",
      output: "AI Voice Agent Business Kit"
    },

    {
      agent: "Product Builder",
      output: "Generated Product"
    },

    {
      agent: "Marketing Agent",
      output: "Launch Campaign Ready"
    },

    {
      agent: "Sales Agent",
      output: "Sales Page Ready"
    },

    {
      agent: "Revenue Agent",
      output: "$12k Monthly Estimate"
    },

    {
      agent: "Portfolio Manager",
      output: "Added to Portfolio"
    }

  ];

  return NextResponse.json({

    startupName:
      "Synthesise AI Startup Studio",

    status:
      "Autonomous",

    workflow

  });

}
