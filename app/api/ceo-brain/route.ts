import { NextResponse } from "next/server";

import {
  executeCEODecision,
} from "@/lib/ceo/ceoBrain";

export async function GET(req: Request) {

  const origin = new URL(req.url).origin;

  const result =
    await executeCEODecision(origin);

  return NextResponse.json({

    success: true,

    autonomous: true,

    workflowCompleted: true,

    result,

    timestamp: new Date().toLocaleTimeString(),

  });

}
