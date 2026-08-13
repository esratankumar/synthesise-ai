import { NextResponse } from "next/server";

const trends = [
  {
    trend: "AI Agents",
    score: 94,
  },
  {
    trend: "AI Marketing",
    score: 90,
  },
  {
    trend: "AI Education",
    score: 82,
  },
  {
    trend: "AI Video Generation",
    score: 78,
  },
];

function generateBusinessIdea(
  trend: string,
  score: number
) {
  return {
    niche: trend,
    opportunityScore: score,

    product: {
      name: `${trend} Business Toolkit`,
      type: "Digital Product",

      targetAudience:
        score > 85
          ? "Businesses"
          : "Freelancers",

      price:
        score > 90
          ? "$49"
          : "$29",

      difficulty:
        score > 85
          ? "Medium"
          : "Easy",

      estimatedRevenue:
        score > 90
          ? "$5k-$20k/month"
          : "$1k-$5k/month",

      salesAngle: `Save time and increase productivity using ${trend}.`,
    },
  };
}

export async function GET() {
  const opportunities =
    trends.map((item) =>
      generateBusinessIdea(
        item.trend,
        item.score
      )
    );

  return NextResponse.json({
    opportunities,
  });
}
