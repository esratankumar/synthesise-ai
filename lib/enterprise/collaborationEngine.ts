import { publish } from "@/lib/enterprise/eventBus";

export interface AgentTask {
  from: string;
  to: string;
  action: string;
}

const queue: AgentTask[] = [];

export function assignTask(task: AgentTask) {
  queue.push(task);

  publish({
    type: "Agent Collaboration",
    message: `${task.from} → ${task.to}: ${task.action}`,
    timestamp: new Date().toLocaleTimeString(),
  });
}

export function getTasks() {
  return queue;
}

export function clearTasks() {
  queue.length = 0;
}
