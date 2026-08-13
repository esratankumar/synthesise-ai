import { getState } from "@/lib/enterprise/enterpriseState";
import { publish } from "@/lib/enterprise/eventBus";

export interface WorkflowStep {

  name: string;

  enabled: boolean;

}

export async function executeWorkflow(origin: string) {

  const state = getState();

  const executed: string[] = [];

  async function runStep(
    name: string,
    endpoint: string,
    enabled = true
  ) {

    if (!enabled) return;

    try {

      await fetch(`${origin}${endpoint}`);

      executed.push(name);

      publish({
        type: "Workflow",
        message: `${name} completed`,
        timestamp: new Date().toLocaleTimeString(),
      });

    } catch {

      publish({
        type: "Workflow",
        message: `${name} failed`,
        timestamp: new Date().toLocaleTimeString(),
      });

    }

  }

  await runStep(
    "Trend Intelligence",
    "/api/trend-intelligence"
  );

  await runStep(
    "Opportunity Engine",
    "/api/opportunities"
  );

  await runStep(
    "Product Factory",
    "/api/product-factory-v17",
    state.revenue < 30000
  );

  await runStep(
    "Revenue Engine",
    "/api/revenue-engine"
  );

  await runStep(
    "Knowledge Graph",
    "/api/graph/auto"
  );

  await runStep(
    "Business Operator",
    "/api/business-operator"
  );

  return {

    completed: true,

    executed,

    total: executed.length,

  };

}
