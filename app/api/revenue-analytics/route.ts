import { NextResponse } from "next/server";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
  ];

  const revenue = months.map((month) => ({
    month,
    revenue: random(18000, 28000),
  }));

  return NextResponse.json(revenue);
}
