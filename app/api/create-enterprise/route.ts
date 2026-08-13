import { NextResponse } from "next/server";

import {

  createEnterpriseFromTrend,

} from "@/lib/multienterprise/enterpriseCreator";

export async function POST() {

  const result =

    createEnterpriseFromTrend();

  return NextResponse.json({

    success: true,

    result,

  });

}
