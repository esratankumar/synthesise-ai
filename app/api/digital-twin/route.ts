import { NextResponse } from "next/server";

import { getDigitalTwin }
from "@/lib/digitalTwin/digitalTwin";

export async function GET() {

  return NextResponse.json(

    getDigitalTwin()

  );

}
