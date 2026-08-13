import { NextResponse } from "next/server";

import {

  getRecoveryLog,

} from "@/lib/recovery/recoveryEngine";

export async function GET() {

  return NextResponse.json({

    success: true,

    recoveries: getRecoveryLog(),

    totalRecoveries: getRecoveryLog().length,

  });

}
