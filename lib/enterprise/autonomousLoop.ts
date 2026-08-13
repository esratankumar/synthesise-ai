import { publish } from "@/lib/enterprise/eventBus";

let running = false;

export async function runEnterpriseLoop() {
  if (running) return;

  running = true;

  publish({
    type: "Enterprise",
    message: "Autonomous Enterprise Loop Started",
    timestamp: new Date().toLocaleTimeString(),
  });

  try {
    await fetch("http://localhost:3000/api/trend-intelligence");
    await fetch("http://localhost:3000/api/product-factory-v17");
    await fetch("http://localhost:3000/api/revenue-engine");
    await fetch("http://localhost:3000/api/graph");
    await fetch("http://localhost:3000/api/reasoning");

    publish({
      type: "Enterprise",
      message: "Enterprise Cycle Completed",
      timestamp: new Date().toLocaleTimeString(),
    });

  } catch (error) {
    publish({
      type: "Enterprise",
      message: "Enterprise Loop Failed",
      payload: String(error),
      timestamp: new Date().toLocaleTimeString(),
    });
  } finally {
    running = false;
  }
}
