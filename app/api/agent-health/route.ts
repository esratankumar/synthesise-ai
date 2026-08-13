import { NextResponse } from "next/server";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const statuses = ["Healthy", "Busy", "Idle"];

const agents = [
  "CEO Agent",
  "Trend Agent",
  "Revenue Agent",
  "Product Agent",
];

export async function GET() {
  return NextResponse.json({
    agents: agents.map((name) => ({
      name,
      status: statuses[random(0, statuses.length - 1)],
      health: random(90, 100),
      workload: random(10, 95),
      lastActivity: new Date().toLocaleTimeString(),
    })),
  });
}
