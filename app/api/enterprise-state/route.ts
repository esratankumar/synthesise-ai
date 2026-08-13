import { NextResponse } from "next/server";
import { getState } from "@/lib/enterprise/enterpriseState";

export async function GET() {
  return NextResponse.json(getState());
}
