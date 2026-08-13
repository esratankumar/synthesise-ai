import { NextResponse } from "next/server";

import {
  buildDecisionPipeline,
} from "@/lib/decision/decisionPipeline";

export async function GET() {

  const decisions =
    buildDecisionPipeline();

  return NextResponse.json({

    success: true,

    module: "Enterprise Decision Pipeline",

    decisions,

    nextAction:
      decisions[0],

    timestamp:
      new Date().toLocaleTimeString(),

  });

}
