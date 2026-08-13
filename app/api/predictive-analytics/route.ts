import { NextResponse } from "next/server";

import {
  generatePrediction,
} from "@/lib/analytics/predictiveAnalytics";

export async function GET() {

  return NextResponse.json({

    success: true,

    prediction:
      generatePrediction(),

  });

}
