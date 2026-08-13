import { createEnterpriseFromTrend } from "./enterpriseCreator";

export function incubateStartup() {

  const result = createEnterpriseFromTrend();

  if (!result.created) {

    return {

      incubated: false,

      reason: result.reason,

      enterprise: result.enterprise,

    };

  }

  const startup = {

    ...result.enterprise,

    brandName: result.enterprise.name + " Labs",

    businessModel: "AI SaaS",

    firstProduct:

      "AI " + result.enterprise.name + " Toolkit",

    assignedAgents: 3,

    initialBudget: 10000,

    stage: "Incubation",

  };

  return {

    incubated: true,

    startup,

  };

}
