import { NextResponse } from "next/server";

import {

  getEnterprises,

  addEnterprise,

  getPortfolioRevenue,

} from "@/lib/multienterprise/enterpriseRegistry";

export async function GET() {

  return NextResponse.json({

    enterprises: getEnterprises(),

    totalRevenue: getPortfolioRevenue(),

  });

}

export async function POST(req: Request) {

  const body = await req.json();

  const enterprise = addEnterprise(body);

  return NextResponse.json({

    success: true,

    enterprise,

  });

}
