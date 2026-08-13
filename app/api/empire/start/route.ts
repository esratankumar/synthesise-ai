import { NextResponse } from "next/server";

import { runBusinessLoop } from "@/lib/empire/businessLoop";

export async function GET(){

const result=await runBusinessLoop();

return NextResponse.json(result);

}
