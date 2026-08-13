import { NextResponse } from "next/server";

import {
  getGraph,
  getStatistics,
  addRelation,
} from "@/lib/graph/knowledgeGraph";

export async function GET() {

  return NextResponse.json({

    graph: getGraph(),

    statistics: getStatistics(),

    collaboration: {

      activeAgents: 6,

      synchronized: true,

      sharedTasks: 18,

      lastSync: new Date().toLocaleTimeString(),

    },

  });

}

export async function POST() {

  addRelation(
    "AI Agents",
    "AI Agent Business Kit",
    "creates"
  );

  return NextResponse.json({

    success: true,

    graph: getGraph(),

    statistics: getStatistics(),

  });

}
