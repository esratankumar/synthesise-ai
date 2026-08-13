import { publish } from "@/lib/enterprise/eventBus";

export interface TrendItem {
  niche: string;
  score: number;
  growth: number;
}

const defaultTrends: TrendItem[] = [
  {
    niche: "AI Agents",
    score: 98,
    growth: 42,
  },
  {
    niche: "AI Automation",
    score: 95,
    growth: 37,
  },
  {
    niche: "AI Healthcare",
    score: 91,
    growth: 28,
  },
  {
    niche: "AI Education",
    score: 88,
    growth: 23,
  },
];

export function runTrendIntelligence(
  trends: TrendItem[] = defaultTrends
) {

  const topTrend =
    [...trends].sort(
      (a, b) => b.score - a.score
    )[0];

  publish({
    type: "Trend Intelligence",
    message: `Discovered ${topTrend.niche}`,
    payload: topTrend,
    timestamp: new Date().toLocaleTimeString(),
  });

  return {
    topTrend,
    trends,
    recommendation:
      `Focus on ${topTrend.niche}`,
  };

}
