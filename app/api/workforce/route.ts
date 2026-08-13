import { NextResponse } from "next/server";

import {

  getAgents,

  assignAgentTask,

} from "@/lib/workforce/workforceManager";

export async function GET() {

  return NextResponse.json({

    agents: getAgents(),

  });

}

export async function POST() {

  const agent = assignAgentTask(

    "Marketing",

    "Launch AI Campaign"

  );

  return NextResponse.json({

    success: true,

    agent,

  });

}
