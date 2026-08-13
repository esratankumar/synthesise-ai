import { NextResponse } from "next/server";

import {

  incubateStartup,

} from "@/lib/multienterprise/startupIncubator";

export async function POST() {

  return NextResponse.json(

    incubateStartup()

  );

}
