import {
  addEnterprise,
  getEnterprises,
} from "./enterpriseRegistry";

import {
  runTrendIntelligence,
} from "@/lib/services/trendService";

export function createEnterpriseFromTrend() {

  const { topTrend } = runTrendIntelligence();

  const enterprises = getEnterprises();

  const exists = enterprises.find(

    (enterprise) =>

      enterprise.name === topTrend.niche

  );

  if (exists) {

    return {

      created: false,

      reason: "Enterprise already exists",

      enterprise: exists,

    };

  }

  const enterprise = {

    id: "enterprise-" + Date.now(),

    name: topTrend.niche,

    status: "Planning" as const,

    industry: "Artificial Intelligence",

    monthlyRevenue: 0,

  };

  addEnterprise(enterprise);

  return {

    created: true,

    enterprise,

  };

}
