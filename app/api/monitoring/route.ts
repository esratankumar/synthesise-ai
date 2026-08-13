import { NextResponse } from "next/server";

import { getEnterpriseStatus }
from "@/lib/monitoring/enterpriseMonitor";

export async function GET() {

  return NextResponse.json({

    success: true,

    monitoring: getEnterpriseStatus(),

  });

}
