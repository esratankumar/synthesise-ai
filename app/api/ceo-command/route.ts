import { NextResponse } from "next/server";
import { assignTask } from "@/lib/enterprise/collaborationEngine";

export async function POST(req: Request) {

  const body = await req.json();

assignTask({
  from: "CEO Agent",
  to: "Trend Agent",
  action: "Scan latest AI opportunities",
});

  return NextResponse.json({
    success: true,
    command: body.command,
    message: `${body.command} executed successfully.`,
    timestamp: new Date().toLocaleTimeString(),
  });

}
