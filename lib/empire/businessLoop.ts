import { runCEO } from "@/lib/ceo/ceoAgent";
import { generateTasks } from "@/lib/tasks/taskPrioritizer";
import { rankOpportunities } from "@/lib/decision/decisionEngine";
import { addTimelineEvent } from "@/lib/timeline/timelineEngine";

export async function runBusinessLoop() {

  const ceo = runCEO();

  const ranking = rankOpportunities();

  const tasks = generateTasks();

addTimelineEvent(
  "CEO Agent",
  "Selected best opportunity"
);

addTimelineEvent(
  "Product Agent",
  "Generated product tasks"
);

addTimelineEvent(
  "Revenue Agent",
  "Updated revenue forecast"
);

  return {

    status: "Enterprise Running",

    ceo,

    ranking,

    tasks

  };

}
