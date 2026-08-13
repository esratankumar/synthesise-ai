"use client";

import { useEffect, useState } from "react";

export default function DigitalTwin() {

  const [twin, setTwin] = useState<any>(null);

  async function load() {

    const res =
      await fetch("/api/digital-twin");

    const data =
      await res.json();

    setTwin(data);

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  if (!twin)
    return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold">

        Enterprise Digital Twin

      </h2>

      <div className="mt-4">

        <div>
          Revenue:
          ${twin.enterprise.revenue}
        </div>

        <div>
          Notifications:
          {twin.enterprise.notifications}
        </div>

        <div>
          Workflow:
          {twin.enterprise.businessLoop}
        </div>

      </div>

      <h3 className="mt-6 font-semibold">

        AI Workforce

      </h3>

      <div className="space-y-2 mt-3">

        {twin.workforce.map((agent: any) => (

          <div
            key={agent.id}
            className="rounded bg-zinc-800 p-3"
          >

            <strong>{agent.name}</strong>

            <div>{agent.role}</div>

            <div>{agent.status}</div>

            <div>{agent.currentTask}</div>

          </div>

        ))}

      </div>

    </div>

  );

}
