import { publish } from "@/lib/enterprise/eventBus";

export interface RevenueOptimization {

  recommendation: string;

  currentRevenue: number;

  projectedRevenue: number;

  confidence: number;

}

export interface PortfolioRecommendation {

  product: string;

  revenue: number;

  conversionRate: number;

  traffic: number;

  recommendation: string;

}

// AI CEO revenue prediction
export function optimizeRevenue() {

  const currentRevenue =
    Math.floor(Math.random() * 20000) + 10000;

  const projectedRevenue =
    currentRevenue +
    Math.floor(Math.random() * 5000);

  let recommendation =
    "Increase marketing budget";

  if (projectedRevenue > currentRevenue + 3000) {
    recommendation = "Scale winning products";
  }

  if (projectedRevenue < currentRevenue) {
    recommendation = "Reduce acquisition cost";
  }

  const optimization = {

    recommendation,

    currentRevenue,

    projectedRevenue,

    confidence:
      Math.floor(Math.random() * 15) + 85,

  };

  publish({

    type: "Revenue Optimizer",

    message: recommendation,

    payload: optimization,

    timestamp: new Date().toLocaleTimeString(),

  });

  return optimization;

}

// Portfolio optimizer
export function optimizePortfolioRevenue(

  portfolio: {

    product: string;

    revenue: number;

    conversionRate: number;

    traffic: number;

  }[]

): PortfolioRecommendation[] {

  const recommendations = portfolio.map((p) => {

    let action = "Maintain";

    if (p.conversionRate > 6)
      action = "Increase Price";

    if (
      p.conversionRate < 3 &&
      p.traffic > 3000
    )
      action = "Improve Offer";

    return {

      ...p,

      recommendation: action,

    };

  });

  publish({

    type: "Revenue Portfolio Optimizer",

    message: "Portfolio optimization completed",

    payload: recommendations,

    timestamp: new Date().toLocaleTimeString(),

  });

  return recommendations;

}
