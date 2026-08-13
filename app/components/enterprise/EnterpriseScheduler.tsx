"use client";

import { useEffect, useState } from "react";

export default function EnterpriseScheduler() {

  const [lastRun, setLastRun] = useState("Never");

  async function runScheduler() {

    try {

      await fetch("/api/orchestrator");

      setLastRun(new Date().toLocaleTimeString());

    } catch (err) {

      console.error("Scheduler failed:", err);

    }

  }

  useEffect(() => {

    runScheduler();

    const timer = setInterval(runScheduler, 30000); // every 30 seconds

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="rounded-xl bg-zinc-900 p-4 mt-4">
      <h3 className="font-bold text-cyan-400">
        Autonomous Enterprise Scheduler
      </h3>

      <p className="text-sm mt-2">
        Status: Running
      </p>

      <p className="text-sm">
        Last execution: {lastRun}
      </p>

      <p className="text-xs text-zinc-400 mt-2">
        Automatically executes the Enterprise Orchestrator every 30 seconds.
      </p>
    </div>
  );
}
