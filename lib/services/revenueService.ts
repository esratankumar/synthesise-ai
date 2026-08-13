import { assignTask } from "@/lib/enterprise/collaborationEngine";

const opportunities = [
  { niche: "AI Agents", demand: 94 },
  { niche: "AI Marketing", demand: 90 },
  { niche: "AI Education", demand: 82 },
];

export function runRevenueEngine() {

  return opportunities.map((item) => {

    const competition =
      Math.floor(Math.random() * 50) + 30;

    const difficulty =
      Math.floor(Math.random() * 40) + 20;

    const revenuePotential =
      item.demand - difficulty + 20;

    const overallScore =
      Math.round(
        (item.demand +
          revenuePotential -
          competition) / 2
      );

    assignTask({
      from: "Revenue Engine",
      to: "Knowledge Graph",
      action: "Store revenue intelligence",
    });

    return {
      niche: item.niche,
      demand: item.demand,
      competition,
      difficulty,
      revenuePotential,
      overallScore,
    };

  });

}

export async function getRevenue() {

  return {
    monthly: "$18k",
    yearly: "$216k",
    growth: "22%",
  };

}
