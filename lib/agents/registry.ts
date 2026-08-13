export interface Agent {
  id: string;
  name: string;
  role: string;
  status: "idle" | "running" | "completed";
}

export const agents: Agent[] = [
  {
    id: "ceo",
    name: "CEO Agent",
    role: "Coordinates all AI agents",
    status: "idle",
  },
  {
    id: "trend",
    name: "Trend Agent",
    role: "Finds trending opportunities",
    status: "idle",
  },
  {
    id: "product",
    name: "Product Agent",
    role: "Creates digital products",
    status: "idle",
  },
  {
    id: "revenue",
    name: "Revenue Agent",
    role: "Calculates revenue potential",
    status: "idle",
  },
  {
    id: "marketing",
    name: "Marketing Agent",
    role: "Creates launch campaigns",
    status: "idle",
  },
  {
    id: "marketplace",
    name: "Marketplace Agent",
    role: "Publishes products",
    status: "idle",
  },
];
