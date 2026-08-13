"use client";

import { useEffect, useState } from "react";

export default function CEODashboard() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/ceo/run")
      .then(res => res.json())
      .then(res => setData(res.ceo));
  }, []);

  if (!data) {
    return (
      <div className="rounded-2xl bg-zinc-900 p-6">
        <h2 className="text-xl font-bold">
          CEO Executive Dashboard
        </h2>

        <p className="mt-4 text-zinc-400">
          Loading...
        </p>
      </div>
    );
  }

  return (

    <div className="rounded-2xl bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">

        CEO Executive Dashboard

      </h2>

      <div className="mt-6 space-y-3">

        <p>

          👑 <strong>Decision</strong>

        </p>

        <p className="text-zinc-300">

          {data.decision}

        </p>

        <hr className="border-zinc-700"/>

        <p>

          📋 Pending Tasks

        </p>

        <p>

          {data.pendingTasks}

        </p>

        <hr className="border-zinc-700"/>

        <p>

          ❤️ Enterprise Status

        </p>

        <p className="text-green-400">

          Running

        </p>

      </div>

    </div>

  );

}
