import { getState } from "@/lib/enterprise/enterpriseState";
import { publish } from "@/lib/enterprise/eventBus";

export interface EnterpriseDecision {

  priority: number;

  action: string;

  reason: string;

}

export function buildDecisionPipeline() {

  const state = getState();

  const decisions: EnterpriseDecision[] = [];

  if (state.revenue < 30000) {

    decisions.push({
      priority: 100,
      action: "Generate Product",
      reason: "Revenue below target",
    });

  }

  if (state.notifications > 20) {

    decisions.push({
      priority: 90,
      action: "Review Alerts",
      reason: "Too many enterprise alerts",
    });

  }

  decisions.push({
    priority: 80,
    action: "Scan Trends",
    reason: "Continuous market intelligence",
  });

  decisions.push({
    priority: 70,
    action: "Optimize Revenue",
    reason: "Maintain revenue growth",
  });

  decisions.sort(
    (a, b) => b.priority - a.priority
  );

  publish({
    type: "Decision Pipeline",
    message: `Top decision: ${decisions[0].action}`,
    payload: decisions[0],
    timestamp: new Date().toLocaleTimeString(),
  });

  return decisions;

}
