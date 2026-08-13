import { NextResponse } from "next/server";

import {
  launchBusiness,
} from "@/lib/business/businessLauncher";

export async function POST() {

  return NextResponse.json(

    launchBusiness()

  );

}
