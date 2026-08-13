import { NextResponse } from "next/server";

import { sendMessage } from "@/lib/communication/persistentMessageBus";

export async function GET() {

  sendMessage(
    "Trend Agent",
    "Product Agent",
    "trend",
    "AI Agents are trending"
  );

  sendMessage(
    "Product Agent",
    "Revenue Agent",
    "product",
    "Created AI Agent Business Kit"
  );

  sendMessage(
    "Revenue Agent",
    "CEO Agent",
    "revenue",
    "Estimated revenue: $20k/month"
  );

  return NextResponse.json({
    success: true,
  });
}
