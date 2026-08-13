import { NextResponse } from "next/server";
import { assignTask } from "@/lib/enterprise/collaborationEngine";

const opportunities = [
  {
    niche: "AI Agents",
    demand: 94,
  },
  {
    niche: "AI Marketing",
    demand: 90,
  },
  {
    niche: "AI Education",
    demand: 82,
  },
];

function scoreOpportunity(item: any) {
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

  let platform = "Gumroad";

  if (overallScore > 85)
    platform = "Whop";

  if (item.niche.includes("Education"))
    platform = "Etsy";

  return {
    niche: item.niche,
    demand: item.demand,
    competition,
    difficulty,
    revenuePotential,
    overallScore,
    recommendedPlatform:
      platform,
  };
}

export async function GET() {
  return NextResponse.json({
    opportunities:
      opportunities.map(
        scoreOpportunity
      ),
  });
}
