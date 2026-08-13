import { publish } from "@/lib/enterprise/eventBus";

export interface Opportunity {
  niche: string;
  score: number;
}

const defaultOpportunities: Opportunity[] = [
  {
    niche: "AI Agents",
    score: 94,
  },
  {
    niche: "AI Automation",
    score: 90,
  },
  {
    niche: "AI Education",
    score: 84,
  },
];

export function evaluateOpportunities(
  opportunities: Opportunity[] = defaultOpportunities
) {

  const ranked =
    [...opportunities].sort(
      (a, b) => b.score - a.score
    );

  const best = ranked[0];

  publish({
    type: "Opportunity Engine",
    message: `Best opportunity: ${best.niche}`,
    payload: best,
    timestamp: new Date().toLocaleTimeString(),
  });

  return {
    best,
    ranked,
    recommendation: `Prioritize ${best.niche}`,
  };

}

export function analyzeOpportunities(
  opportunities: Opportunity[] = defaultOpportunities
) {
  return evaluateOpportunities(opportunities);
}

export async function getOpportunities() {
  return defaultOpportunities;
}
