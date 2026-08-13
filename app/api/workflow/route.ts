import { NextResponse } from "next/server";

import {
  executeWorkflow,
} from "@/lib/workflow/workflowEngine";

export async function GET(req: Request) {

  const origin =
    new URL(req.url).origin;

  const result =
    await executeWorkflow(origin);

  return NextResponse.json({

    success: true,

    module: "Dynamic Workflow Engine",

    result,

    timestamp:
      new Date().toLocaleTimeString(),

  });

}
