import { NextResponse } from "next/server";

const trends = [
  "AI Agents",
  "AI Marketing",
  "AI Education",
  "AI Healthcare",
  "AI Video Generation",
];

function generateProduct(trend: string) {

  return {
    trend,

    productName:
      `${trend} Master Kit`,

    audience:
      "Creators, Freelancers, Agencies",

    price:
      trend.includes("Video")
        ? "$79"
        : "$49",

    revenueScore:
      Math.floor(
        80 + Math.random() * 20
      ),

    whopListing:
      `Complete ${trend} toolkit for building profitable digital products.`,

    landingPage:
      `Learn how to use ${trend} to create income-producing assets.`,

    emailSequence: [
      `Welcome to ${trend} Master Kit`,
      `Success stories using ${trend}`,
      `Last chance offer`
    ],

    socialPost:
      `🚀 New ${trend} Master Kit is live.`,

    monthlyForecast:
      `$${Math.floor(
        5000 + Math.random() * 15000
      )}/month`
  };
}

export async function GET() {

  const products =
    trends.map(generateProduct);

  return NextResponse.json({
    products
  });
}
