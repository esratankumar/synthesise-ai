import { getPerformance } from "@/lib/performance/performanceOptimizer";
import { getBestActions } from "@/lib/memory/learningMemory";

export function generatePrediction() {

  const performance = getPerformance();

  const memory = getBestActions();

  const confidence =
    Math.min(
      100,
      60 +
      performance.length +
      memory.length
    );

  return {

    predictedRevenue:
      "$" + (20000 + confidence * 350),

    businessGrowth:
      confidence > 90
        ? "Very High"
        : confidence > 75
        ? "High"
        : confidence > 60
        ? "Medium"
        : "Low",

    enterpriseHealth:
      confidence,

    recommendation:
      confidence > 90
        ? "Scale Product Factory"
        : confidence > 75
        ? "Increase Marketing"
        : "Discover New Trends",

    aiConfidence:
      confidence + "%",

  };

}
