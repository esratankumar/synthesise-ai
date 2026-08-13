import { getPortfolio } from "./portfolioManager";

export function allocateResources() {

  const portfolio = getPortfolio();

  const allocations = portfolio.enterprises.map((enterprise) => {

    let aiAgents = 2;
    let budget = 5000;
    let priority = "Normal";

    if (enterprise.priority === "Expand") {
      aiAgents = 5;
      budget = 20000;
      priority = "High";
    } else if (enterprise.priority === "Maintain") {
      aiAgents = 3;
      budget = 10000;
      priority = "Medium";
    }

    return {
      id: enterprise.id,
      name: enterprise.name,
      aiAgents,
      budget,
      priority,
    };

  });

  return allocations;

}
