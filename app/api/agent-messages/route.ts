import { NextResponse } from "next/server";

import {
  getMessages,
} from "@/lib/communication/persistentMessageBus";

export async function GET() {
  return NextResponse.json({
    messages: getMessages(),
  });
}
