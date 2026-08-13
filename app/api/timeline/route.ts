import { NextResponse } from "next/server";

import { getTimeline } from "@/lib/timeline/timelineEngine";

export async function GET() {

  return NextResponse.json({

    timeline: getTimeline()

  });

}
