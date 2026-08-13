import { NextResponse } from "next/server";

export async function GET() {

  const products = [

    {
      name: "AI Agent Business Kit",
      revenueScore: 94,
      monthlyRevenue: 12000
    },

    {
      name: "AI Marketing Toolkit",
      revenueScore: 89,
      monthlyRevenue: 8500
    },

    {
      name: "AI Prompt Bundle",
      revenueScore: 72,
      monthlyRevenue: 2500
    },

    {
      name: "AI Ebook Pack",
      revenueScore: 51,
      monthlyRevenue: 500
    }

  ];

  const portfolio = products.map(product => ({

    ...product,

    action:
      product.revenueScore > 90
        ? "Scale"
        : product.revenueScore > 75
        ? "Grow"
        : product.revenueScore > 60
        ? "Improve"
        : "Retire"

  }));

  return NextResponse.json({
    portfolio
  });

}
