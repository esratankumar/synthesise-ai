import { NextResponse } from "next/server";

import {

  runMarketingEngine,

  getCampaigns,

} from "@/lib/marketing/marketingEngine";

export async function GET() {

  return NextResponse.json({

    campaigns: getCampaigns(),

  });

}

export async function POST() {

  const campaign = runMarketingEngine();

  return NextResponse.json({

    success: true,

    campaign,

  });

}
