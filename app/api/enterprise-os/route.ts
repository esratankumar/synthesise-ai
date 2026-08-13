import { NextResponse } from "next/server";

import {
  runEnterpriseOS,
} from "@/lib/enterprise/enterpriseOS";

export async function GET() {

  return NextResponse.json(

    await runEnterpriseOS()

  );

}
