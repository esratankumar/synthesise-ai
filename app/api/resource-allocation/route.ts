import { NextResponse } from "next/server";

import {
  allocateResources,
} from "@/lib/multienterprise/resourceAllocator";

export async function GET() {

  return NextResponse.json({

    success: true,

    allocations: allocateResources(),

  });

}
