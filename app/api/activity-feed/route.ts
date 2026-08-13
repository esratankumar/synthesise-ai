import { NextResponse } from "next/server";
import { getEvents } from "@/lib/enterprise/eventBus";

const events = [
  "CEO Agent approved new product.",
  "Trend Agent discovered AI Healthcare.",
  "Revenue Agent increased forecast.",
  "Marketing Agent launched campaign.",
  "Product Agent created AI Toolkit.",
  "Knowledge Graph updated.",
  "Decision Engine ranked opportunities.",
  "Portfolio Manager optimized assets.",
];

function randomEvent() {
  return events[Math.floor(Math.random() * events.length)];
}

export async function GET() {

  return NextResponse.json(getEvents());

}
