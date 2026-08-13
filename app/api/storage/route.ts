import { NextResponse } from "next/server";
import { load } from "@/lib/storage/storageEngine";

export async function GET() {
  try {
    return NextResponse.json({
      products: load("products"),
      trends: load("trends"),
      agents: load("agents"),
      revenue: load("revenue"),
      portfolio: load("portfolio"),
      opportunities: load("opportunities"),
      marketplace: load("marketplace"),
      analytics: load("analytics"),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to load enterprise storage.",
      },
      { status: 500 }
    );
  }
}
