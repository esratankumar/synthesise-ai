import { NextResponse } from "next/server";

import {
  onTrendDiscovered,
  onProductCreated,
  onRevenueGenerated,
  onAgentCompletedTask,
} from "@/lib/graph/graphAutomation";

const trends = [
  "AI Agents",
  "AI Healthcare",
  "AI Finance",
  "AI Education",
  "AI Robotics",
  "AI Marketing",
];

const products = [
  "AI Agent Business Kit",
  "Healthcare Copilot",
  "Finance Assistant",
  "Education Suite",
  "Robot OS",
  "Marketing Studio",
];

const revenues = [
  "$20k Monthly Revenue",
  "$15k Monthly Revenue",
  "$30k Monthly Revenue",
  "$12k Monthly Revenue",
  "$40k Monthly Revenue",
];

const agents = [
  "Trend Agent",
  "CEO Agent",
  "Revenue Agent",
  "Knowledge Agent",
  "Product Agent",
];

function random<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export async function GET() {

  const trend = random(trends);
  const product = random(products);
  const revenue = random(revenues);
  const agent = random(agents);

  onTrendDiscovered(
    trend,
    product
  );

  onProductCreated(
    product,
    "Marketplace"
  );

  onRevenueGenerated(
    product,
    revenue
  );

  onAgentCompletedTask(
    agent,
    `Working on ${trend}`
  );

  return NextResponse.json({
    success: true,
    trend,
    product,
    revenue,
    agent,
    timestamp: new Date().toLocaleTimeString(),
  });

}
