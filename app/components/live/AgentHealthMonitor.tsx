"use client";

import { useEffect, useState } from "react";

export default function AgentHealthMonitor() {
  const [agents, setAgents] = useState<any[]>([]);

  async function loadAgents() {
    const res = await fetch("/api/agent-health");
    const data = await res.json();
    setAgents(data.agents);
  }

  useEffect(() => {
    loadAgents();

    const timer = setInterval(loadAgents, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        Agent Health Monitor
      </h2>

      <div className="space-y-4">

        {agents.map((agent) => (
          <div
            key={agent.name}
            className="rounded-lg bg-zinc-800 p-4"
          >
            <div className="font-semibold">
              {agent.name}
            </div>

            <div>Status: {agent.status}</div>

            <div>Health: {agent.health}%</div>

            <div>Workload: {agent.workload}%</div>

            <div className="text-xs text-zinc-400">
              Last Activity: {agent.lastActivity}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
