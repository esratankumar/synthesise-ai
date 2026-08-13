import { NextResponse } from "next/server";
import { runProductFactory } from "@/lib/services/productService";

export async function GET() {

  return NextResponse.json({

    success: true,

    module: "Product Factory",

    data: runProductFactory(),

    timestamp: new Date().toLocaleTimeString(),

  });

}
