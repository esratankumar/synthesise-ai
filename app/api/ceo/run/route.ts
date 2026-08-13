import { NextResponse } from "next/server";

import { runCEO } from "@/lib/ceo/ceoAgent";

export async function GET(){

  return NextResponse.json({

    ceo: runCEO()

  });

}
