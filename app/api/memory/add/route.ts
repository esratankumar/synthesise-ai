import { NextResponse } from "next/server";

import {
  remember,
} from "@/lib/memory/memoryBus";

export async function GET() {

  remember(
    "trend",
    "AI Agents Business Kit"
  );

  return NextResponse.json({
    success: true,
  });
}
