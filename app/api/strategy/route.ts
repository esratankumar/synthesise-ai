import { NextResponse } from "next/server";

import { generateStrategy }
from "@/lib/strategy/strategicPlanner";

export async function GET() {

  return NextResponse.json({

    success: true,

    strategy: generateStrategy(),

  });

}
