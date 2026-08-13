import { NextResponse } from "next/server";

import {

  getPerformance,

  getAverageScores,

  recordPerformance,

} from "@/lib/performance/performanceOptimizer";

export async function GET() {

  return NextResponse.json({

    performance: getPerformance(),

    analytics: getAverageScores(),

  });

}

export async function POST(req: Request) {

  const body = await req.json();

  recordPerformance(body);

  return NextResponse.json({

    success: true,

  });

}
