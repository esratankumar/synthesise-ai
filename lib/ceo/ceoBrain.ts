import { getState, updateState } from "@/lib/enterprise/enterpriseState";
import { publish } from "@/lib/enterprise/eventBus";
import {getBestActions, remember,} from "@/lib/memory/learningMemory";
import { executeWithRecovery } from "@/lib/recovery/recoveryEngine";

export interface CEODecision {
  priority: "LOW" | "MEDIUM" | "HIGH";
  action: string;
  reason: string;
}

export function runCEOBrain(): CEODecision {

  const state = getState();

const memory = getBestActions();

if (memory.length > 0) {

  const best = memory[0];

  publish({
    type: "AI CEO",
    message: `Using learned experience: ${best.action}`,
    payload: best,
    timestamp: new Date().toLocaleTimeString(),
  });

updateState({
  businessLoop: best.action,
});

remember({
  action: best.action,
  outcome: "Memory-Based Decision",
  score: best.score,
  timestamp: new Date().toLocaleTimeString(),
});
return {
  priority: "HIGH",
  action: best.action,
  reason: `Selected from AI memory (score ${best.score})`,
};
}
  
let decision: CEODecision;

  if (state.revenue < 30000) {

    decision = {
      priority: "HIGH",
      action: "Generate Product",
      reason: "Revenue below target",
    };

  } else if (state.notifications > 20) {

    decision = {
      priority: "MEDIUM",
      action: "Review Enterprise Alerts",
      reason: "Too many notifications",
    };

  } else {

    decision = {
      priority: "LOW",
      action: "Scan Trends",
      reason: "Enterprise operating normally",
    };

  }

  publish({
    type: "AI CEO",
    message: `${decision.action} | ${decision.reason}`,
    timestamp: new Date().toLocaleTimeString(),
  });

    updateState({
    businessLoop: decision.action,
  });

remember({

  action: decision.action,

  outcome: "Decision Executed",

  score: 80,

  timestamp: new Date().toLocaleTimeString(),

});
  return decision;

}

export async function executeCEODecision(origin: string) {

  const decision = runCEOBrain();

  const executedSteps: string[] = [];

await executeWithRecovery(
  "Trend Intelligence",
  async () => fetch(`${origin}/api/trend-intelligence`)
);
executedSteps.push("Trend Intelligence");

await executeWithRecovery(
  "Product Factory",
  async () => fetch(`${origin}/api/product-factory-v17`)
);
executedSteps.push("Product Factory");

await executeWithRecovery(

  "Revenue Engine",

  async () => {

    return await fetch(`${origin}/api/revenue-engine`);

  }

);

executedSteps.push("Revenue Engine");

await executeWithRecovery(
  "Knowledge Graph",
  async () => fetch(`${origin}/api/graph/auto`)
);
executedSteps.push("Knowledge Graph");


  publish({
    type: "AI CEO Execution",
    message: "Enterprise workflow completed",
    payload: executedSteps,
    timestamp: new Date().toLocaleTimeString(),
  });

  updateState({
    businessLoop: "Enterprise Workflow Completed",
  });

  return {
    decision,
    executedSteps,
  };

}
