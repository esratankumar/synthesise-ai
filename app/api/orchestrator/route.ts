import { NextResponse } from "next/server";

import {
  runEnterpriseOrchestrator,
} from "@/lib/orchestrator/enterpriseOrchestrator";

export async function GET() {

  const result =
    await runEnterpriseOrchestrator();

  return NextResponse.json({

    success: true,

    module: "Enterprise Orchestrator",

    result,

    timestamp:
      new Date().toLocaleTimeString(),

  });

}
