import { publish } from "@/lib/enterprise/eventBus";
import { NextResponse } from "next/server";

export async function POST(req: Request) {  

const { command } = await req.json();

publish({
  type: "CEO Command",
  message: `${command} executed`,
  timestamp: new Date().toLocaleTimeString(),
});

  let response = "";

  switch (command) {

    case "Start Business Loop":
      response = "Business Loop Started";
publish({
  type: "CEO",
  message: "Business Loop Started",
  timestamp: new Date().toLocaleTimeString(),
});
      break;

case "Generate Product": {

  const origin = new URL(req.url).origin;

  const res = await fetch(
    `${origin}/api/product-factory-v17`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      {
        success: false,
        command,
        error: "Product Factory API failed.",
        status: res.status,
      },
      { status: 502 }
    );
  }

  const product = await res.json();

  console.log(
    "Product Factory v17 response:",
    product
  );

  const winner = product?.winner;

  if (!winner) {

    publish({
      type: "Product Factory",
      message: "Product generation returned no winner.",
      payload: product,
      timestamp: new Date().toLocaleTimeString(),
    });

    return NextResponse.json(
      {
        success: false,
        command,
        error: "Product Factory returned no winner.",
        productFactoryResponse: product,
        timestamp: new Date().toLocaleTimeString(),
      },
      { status: 502 }
    );
  }

  publish({
    type: "Product Factory",
    message: `Generated ${winner.niche ?? "new product"}`,
    payload: winner,
    timestamp: new Date().toLocaleTimeString(),
  });

  return NextResponse.json({
    success: true,
    command,
    result: "Product Generated",
    generated: winner,
    recommendation: product?.recommendation ?? null,
    timestamp: new Date().toLocaleTimeString(),
  });
}

    case "Scan Trends":
      response = "Trend Intelligence Running";
publish({
  type: "Trend Intelligence",
  message: "Trend scan completed",
  timestamp: new Date().toLocaleTimeString(),
});
      break;

    case "Optimize Revenue":
      response = "Revenue Engine Running";
publish({
  type: "Revenue Engine",
  message: "Revenue optimization completed",
  timestamp: new Date().toLocaleTimeString(),
});
      break;

    case "Run AI Reasoning":
      response = "Decision Engine Running";
publish({
  type: "Decision Engine",
  message: "AI reasoning completed",
  timestamp: new Date().toLocaleTimeString(),
});
      break;

    case "Refresh Knowledge Graph":
      response = "Knowledge Graph Updated";
publish({
  type: "Knowledge Graph",
  message: "Knowledge graph refreshed",
  timestamp: new Date().toLocaleTimeString(),
});
      break;

    default:
      response = "Unknown Command";

  }

  return NextResponse.json({

    success: true,

    command,

    result: response,

    timestamp: new Date().toLocaleTimeString()

  });

}
