"use client";

import { useEffect, useState } from "react";

export default function MultiEnterpriseDashboard() {

  const [data, setData] = useState<any>(null);

  async function load() {

    const res =
      await fetch("/api/portfolio-dashboard");

    const json =
      await res.json();

    setData(json);

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  if (!data) return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">

        Multi-Enterprise Dashboard

      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        <div className="rounded-lg bg-zinc-800 p-4">

          <div className="text-sm">Enterprises</div>

          <div className="text-xl font-bold">

            {data.totalEnterprises}

          </div>

        </div>

        <div className="rounded-lg bg-zinc-800 p-4">

          <div className="text-sm">Portfolio Revenue</div>

          <div className="text-xl font-bold">

            ${data.totalRevenue}

          </div>

        </div>

        <div className="rounded-lg bg-zinc-800 p-4">

          <div className="text-sm">Best Enterprise</div>

          <div className="text-xl font-bold">

            {data.healthiest?.name}

          </div>

        </div>

        <div className="rounded-lg bg-zinc-800 p-4">

          <div className="text-sm">Knowledge Shared</div>

          <div className="text-xl font-bold">

            {data.knowledge.length}

          </div>

        </div>

      </div>

      <h3 className="font-bold mb-2">

        Resource Allocation

      </h3>

      {data.resources.map((item:any)=>(

        <div
          key={item.id}
          className="rounded-lg bg-zinc-800 p-3 mb-2"
        >

          <strong>{item.name}</strong>

          <div>Agents: {item.aiAgents}</div>

          <div>Budget: ${item.budget}</div>

          <div>Priority: {item.priority}</div>

        </div>

      ))}

    </div>

  );

}
