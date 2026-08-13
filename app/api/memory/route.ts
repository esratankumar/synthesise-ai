import { NextResponse } from "next/server";

import {
  recall,
} from "@/lib/memory/memoryBus";

export async function GET() {
  return NextResponse.json({
    memory: recall(),
  });
}
