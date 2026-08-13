import { load } from "@/lib/storage/storageEngine";

function revenueValue(revenue: string) {

  if (!revenue) return 20;

  if (revenue.includes("20k")) return 100;

  if (revenue.includes("5k")) return 70;

  if (revenue.includes("1k")) return 40;

  return 20;
}

function difficultyValue(level: string) {

  if (level === "Easy") return 100;

  if (level === "Medium") return 70;

  if (level === "Hard") return 40;

  return 50;
}

export function rankOpportunities() {

  const opportunities = load("opportunities");

  return opportunities.map((item: any) => {

    const score =

      (item.demand ?? 50) * 0.35 +

      (100 - (item.competition ?? 50)) * 0.20 +

      revenueValue(item.revenue) * 0.25 +

      difficultyValue(item.difficulty) * 0.10 +

      (item.portfolioFit ?? 50) * 0.10;

    return {

      ...item,

      businessScore: Math.round(score)

    };

  }).sort(

    (a: any, b: any) =>

      b.businessScore - a.businessScore

  );

}
