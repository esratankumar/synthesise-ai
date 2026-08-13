import { NextResponse } from "next/server";

import {

rankOpportunities

} from "@/lib/decision/decisionEngine";

export async function GET(){

return NextResponse.json({

ranking:

rankOpportunities()

});

}
