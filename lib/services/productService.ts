import { publish } from "@/lib/enterprise/eventBus";

const products = [
  {
    niche: "AI Agents",
    revenue: 22000,
    score: 96,
  },
  {
    niche: "AI Marketing",
    revenue: 12000,
    score: 89,
  },
  {
    niche: "AI Education",
    revenue: 8000,
    score: 82,
  },
  {
    niche: "AI Video Generation",
    revenue: 15000,
    score: 91,
  },
];

export function runProductFactory() {

  const winner =
    [...products].sort(
      (a, b) => b.score - a.score
    )[0];

  publish({
    type: "Product Factory",
    message: `Generated ${winner.niche}`,
    payload: winner,
    timestamp: new Date().toLocaleTimeString(),
  });

  return {
    winner,
    products,
    recommendation: `Generate more products in ${winner.niche}`,
  };

}
