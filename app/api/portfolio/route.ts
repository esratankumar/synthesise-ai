import { NextResponse } from "next/server";

import {

  getPortfolio,

} from "@/lib/multienterprise/portfolioManager";

export async function GET() {

  return NextResponse.json({

    success: true,

    portfolio:
      getPortfolio(),

  });

}
