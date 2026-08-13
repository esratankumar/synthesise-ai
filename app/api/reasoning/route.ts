import { NextResponse } from "next/server";

import {
  explainEntity,
  findProductsFromTrend,
  findRevenueFromProduct,
} from "@/lib/reasoning/reasoningEngine";

export async function GET() {

  return NextResponse.json({

    trendProducts:
      findProductsFromTrend("AI Agents"),

    revenue:
      findRevenueFromProduct(
        "AI Agent Business Kit"
      ),

    graph:
      explainEntity("AI Agent Business Kit")

  });

}
