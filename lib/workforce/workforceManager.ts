import { publish } from "@/lib/enterprise/eventBus";

export interface AIAgent {

  id: string;

  name: string;

  role: string;

  status: "Idle" | "Working" | "Offline";

  currentTask: string;

}

const agents: AIAgent[] = [

  {
    id: "trend-001",
    name: "Trend Agent",
    role: "Trend Intelligence",
    status: "Idle",
    currentTask: "",
  },

  {
    id: "product-001",
    name: "Product Agent",
    role: "Product Factory",
    status: "Idle",
    currentTask: "",
  },

  {
    id: "marketing-001",
    name: "Marketing Agent",
    role: "Marketing",
    status: "Idle",
    currentTask: "",
  },

  {
    id: "revenue-001",
    name: "Revenue Agent",
    role: "Revenue Optimization",
    status: "Idle",
    currentTask: "",
  },

];

export function assignAgentTask(

  role: string,

  task: string

) {

  const agent = agents.find(

    (a) => a.role === role

  );

  if (!agent) {

    return null;

  }

  agent.status = "Working";

  agent.currentTask = task;

  publish({

    type: "AI Workforce",

    message: `${agent.name} assigned: ${task}`,

    payload: agent,

    timestamp: new Date().toLocaleTimeString(),

  });

  return agent;

}

export function completeAgentTask(

  id: string

) {

  const agent = agents.find(

    (a) => a.id === id

  );

  if (!agent) {

    return null;

  }

  agent.status = "Idle";

  agent.currentTask = "";

  return agent;

}

export function getAgents() {

  return agents;

}
