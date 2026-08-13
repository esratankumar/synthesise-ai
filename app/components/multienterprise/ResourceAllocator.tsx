"use client";

import { useEffect, useState } from "react";

export default function ResourceAllocator() {

  const [allocations, setAllocations] = useState<any[]>([]);

  async function load() {

    const res =
      await fetch("/api/resource-allocation");

    const data =
      await res.json();

    setAllocations(data.allocations);

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Enterprise Resource Allocation

      </h2>

      {allocations.map((enterprise) => (

        <div
          key={enterprise.id}
          className="rounded-lg bg-zinc-800 p-3 mb-3"
        >

          <div className="font-semibold">

            {enterprise.name}

          </div>

          <div>

            AI Agents: {enterprise.aiAgents}

          </div>

          <div>

            Budget: ${enterprise.budget}

          </div>

          <div>

            Priority: {enterprise.priority}

          </div>

        </div>

      ))}

    </div>

  );

}
