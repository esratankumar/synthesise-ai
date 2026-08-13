import { NextResponse } from "next/server";

const statuses = ["Online", "Working", "Idle", "Analyzing", "Monitoring"];

const tasks = [
  "Monitoring Business",
  "Scanning AI Trends",
  "Optimizing Revenue",
  "Launching Campaign",
  "Finding Opportunities",
  "Building Products",
  "Researching Competitors",
  "Training AI Models",
];

const messages = [
  "Trend Agent discovered AI SaaS opportunity.",
  "Revenue Agent predicts +18% monthly growth.",
  "CEO Agent approved new product.",
  "Marketing Agent launched new campaign.",
  "AI detected a viral niche.",
  "Business Operator completed automation.",
  "Portfolio updated successfully.",
  "New startup idea generated.",
];

export async function GET() {
  const agents = [
    "CEO Agent",
    "Trend Agent",
    "Revenue Agent",
    "Product Agent",
  ].map((name, index) => ({
    id: index + 1,
    name,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    task: tasks[Math.floor(Math.random() * tasks.length)],
  }));

  return NextResponse.json({
    timestamp: new Date().toLocaleTimeString(),

    agents,

    messages: Array.from({ length: 3 }, () =>
      messages[Math.floor(Math.random() * messages.length)]
    ),

    tasks: [
      "Market Analysis",
      "Keyword Research",
      "Revenue Forecast",
      "Portfolio Optimization",
    ],

    businessLoop: {
      stage: tasks[Math.floor(Math.random() * tasks.length)],
      progress: Math.floor(Math.random() * 101),
    },
  });
}
