import { runTrendIntelligence } from "@/lib/services/trendService";
import { runProductFactory } from "@/lib/services/productService";
import { runRevenueEngine } from "@/lib/services/revenueService";
import { evaluateOpportunities } from "@/lib/services/opportunityService";

import { publish } from "@/lib/enterprise/eventBus";

export async function runEnterpriseOrchestrator() {

  const trendResult =
    runTrendIntelligence();

  const opportunityResult =
    evaluateOpportunities(
      trendResult.trends.map((t) => ({
        niche: t.niche,
        score: t.score,
      }))
    );

  const productResult =
    runProductFactory();

  const revenueResult =
    runRevenueEngine();

  publish({
    type: "Enterprise Orchestrator",
    message: "Full enterprise workflow executed",
    timestamp: new Date().toLocaleTimeString(),
  });

  return {

    trendResult,

    opportunityResult,

    productResult,

    revenueResult,

    completed: true,

  };

}
