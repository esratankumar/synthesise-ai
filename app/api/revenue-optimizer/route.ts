import { NextResponse } from "next/server";
import { optimizePortfolioRevenue } from "@/lib/revenue/revenueOptimizer";

export async function GET() {
  const portfolio = [
    {
      product: "AI Agent Business Kit",
      revenue: 18000,
      conversionRate: 7.2,
      traffic: 4500,
    },
    {
      product: "AI Marketing Toolkit",
      revenue: 9500,
      conversionRate: 4.5,
      traffic: 5200,
    },
    {
      product: "AI Education Vault",
      revenue: 4200,
      conversionRate: 2.8,
      traffic: 3900,
    },
  ];

const recommendations = optimizePortfolioRevenue(portfolio);

  return NextResponse.json({
    totalRevenue: portfolio.reduce(
      (a, b) => a + b.revenue,
      0
    ),
    recommendations,
  });
}
