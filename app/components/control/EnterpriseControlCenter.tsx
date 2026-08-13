"use client";

import { useEffect, useState } from "react";

export default function EnterpriseControlCenter() {
  const [data, setData] = useState<any>(null);

  async function loadData() {
    const res = await fetch("/api/control-center");
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    loadData();

    const timer = setInterval(loadData, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!data) {
    return (
      <div className="rounded-xl bg-zinc-900 p-6">
        Loading Enterprise Control Center...
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 space-y-6">

      <h2 className="text-2xl font-bold">
        Enterprise Control Center
      </h2>

      <div>
        <h3 className="font-semibold mb-2">
          Live Agents
        </h3>

        {data.agents.map((agent: any) => (
          <div
            key={agent.id}
            className="mb-2 rounded-lg bg-zinc-800 p-3"
          >
            <strong>{agent.name}</strong>

            <br />

            {agent.status}

            <br />

            {agent.task}
          </div>
        ))}
      </div>

      <div>

        <h3 className="font-semibold mb-2">
          Live Messages
        </h3>

        {data.messages.map((m: string, i: number) => (
          <div key={i}>
            • {m}
          </div>
        ))}

      </div>

      <div>

        <h3 className="font-semibold mb-2">
          Active Tasks
        </h3>

        {data.tasks.map((t: string, i: number) => (
          <div key={i}>
            ✓ {t}
          </div>
        ))}

      </div>

      <div>

        <h3 className="font-semibold">
          Business Loop
        </h3>

        <p>
          {data.businessLoop.stage}
        </p>

        <p>
          {data.businessLoop.progress}%
        </p>

      </div>

    </div>
  );
}
