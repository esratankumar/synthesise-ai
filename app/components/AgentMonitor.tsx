"use client";

import { useEffect, useState } from "react";

export default function AgentMonitor() {

  const [agents, setAgents] = useState<any[]>([]);

  useEffect(() => {

    fetch("/api/agents")

      .then(res => res.json())

      .then(data => {

        setAgents(data.agents || []);

      });

  }, []);

  const active = agents.filter(
    (a) => a.status === "Active"
  ).length;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">

        Live Agent Monitor

      </h2>

      <div className="mt-6 space-y-2">

        <p>Total Agents: {agents.length}</p>

        <p>Active: {active}</p>

        <p>Idle: {agents.length - active}</p>

        <p>System Health: Healthy</p>

      </div>

      <div className="mt-6">

        {agents.map((agent) => (

          <div
            key={agent.name}
            className="border-b border-zinc-700 py-2"
          >

            <div className="font-semibold">

              {agent.name}

            </div>

            <div className="text-sm text-zinc-400">

              {agent.task}

            </div>

            <div className="text-xs">

              {agent.status}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
