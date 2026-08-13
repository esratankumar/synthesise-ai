import { load, save } from "@/lib/storage/storageEngine";

export function runCEO() {

  const opportunities = load("opportunities");

  const tasks = load("tasks");

  const decisions = load("reports");

  if (opportunities.length === 0) {

    return {

      message: "No opportunities available."

    };

  }

  const best = opportunities.sort(

    (a:any,b:any)=>

      (b.demand??0)-(a.demand??0)

  )[0];

  const pending = tasks.filter(

    (t:any)=>t.status==="Pending"

  );

  const report = {

    id: Date.now().toString(),

    decision:

      "Focus company resources on: " + best.name,

    pendingTasks: pending.length,

    timestamp: new Date().toISOString()

  };

  decisions.push(report);

  save("reports", decisions);

  return report;

}
