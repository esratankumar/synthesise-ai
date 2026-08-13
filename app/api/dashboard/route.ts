import { NextResponse } from "next/server";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET() {
  return NextResponse.json({
    trends: random(120, 140),
    products: random(50, 70),
    revenue: random(22000, 25000),
    agents: random(6, 8),
    tasks: random(28, 40),
    knowledge: random(180, 220),
    decisions: random(70, 90),
    opportunity: random(90, 100),
    updated: new Date().toLocaleTimeString(),
  });
}
