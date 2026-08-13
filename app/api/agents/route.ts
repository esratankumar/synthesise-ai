import { NextResponse } from "next/server";
import { agents } from "@/lib/agents/registry";

export async function GET() {
  return NextResponse.json({
    system: "Multi-Agent Empire System",
    agents,
  });
}
