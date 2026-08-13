"use client";

import { useEffect, useState } from "react";

export default function WorkforceManager() {

  const [agents, setAgents] = useState<any[]>([]);

  async function load() {

    const res = await fetch("/api/workforce");

    const data = await res.json();

    setAgents(data.agents);

  }

  async function assignTask() {

    await fetch("/api/workforce", {

      method: "POST",

    });

    load();

  }

  useEffect(() => {

    load();

    const timer = setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        AI Workforce Manager

      </h2>

      <button

        onClick={assignTask}

        className="bg-blue-600 px-4 py-2 rounded"

      >

        Assign Task

      </button>

      <div className="mt-4 space-y-3">

        {agents.map((agent) => (

          <div

            key={agent.id}

            className="rounded-lg bg-zinc-800 p-3"

          >

            <div><strong>{agent.name}</strong></div>

            <div>Role: {agent.role}</div>

            <div>Status: {agent.status}</div>

            <div>Task: {agent.currentTask || "None"}</div>

          </div>

        ))}

      </div>

    </div>

  );

}
