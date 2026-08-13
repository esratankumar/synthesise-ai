import { NextResponse } from "next/server";

import {

  remember,

  getMemory,

  getBestActions,

} from "@/lib/memory/learningMemory";

export async function GET() {

  return NextResponse.json({

    success: true,

    total: getMemory().length,

    bestActions: getBestActions(),

    memory: getMemory(),

  });

}

export async function POST(req: Request) {

  const body = await req.json();

  remember({

    action: body.action,

    outcome: body.outcome,

    score: body.score,

    timestamp: new Date().toLocaleTimeString(),

  });

  return NextResponse.json({

    success: true,

  });

}
