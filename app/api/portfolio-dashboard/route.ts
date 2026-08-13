import { NextResponse } from "next/server";

import { getPortfolio } from "@/lib/multienterprise/portfolioManager";
import { allocateResources } from "@/lib/multienterprise/resourceAllocator";
import { getKnowledge } from "@/lib/multienterprise/knowledgeExchange";

export async function GET() {

  const portfolio = getPortfolio();

  const resources = allocateResources();

  const knowledge = getKnowledge();

  return NextResponse.json({

    totalEnterprises:
      portfolio.enterprises.length,

    totalRevenue:
      portfolio.totalRevenue,

    healthiest:
      portfolio.healthiest,

    resources,

    knowledge,

  });

}
