import { NextResponse } from "next/server";

import { runEmpire } from "@/lib/orchestrator/orchestrator";

export async function GET() {

  const result = await runEmpire();

  return NextResponse.json(result);

}
