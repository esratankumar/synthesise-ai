"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Agent {

  name: string;
  role: string;
  status: string;
  task: string;

}

export default function AgentsPage() {

  const [agents, setAgents] =
    useState<Agent[]>([

      {
        name: "Marketing Agent",
        role: "Growth Automation",
        status: "Idle",
        task: "Waiting for tasks",
      },

      {
        name: "Sales Agent",
        role: "Revenue Optimization",
        status: "Idle",
        task: "Waiting for tasks",
      },

      {
        name: "Content Agent",
        role: "Content Creation",
        status: "Idle",
        task: "Waiting for tasks",
      },

      {
        name: "Analytics Agent",
        role: "Business Intelligence",
        status: "Idle",
        task: "Waiting for tasks",
      },

    ]);

  const activateAgent = (
    index: number
  ) => {

    const updatedAgents = [...agents];

    updatedAgents[index].status =
      "Running";

    updatedAgents[index].task =
      "Executing AI business automation";

    setAgents(updatedAgents);

  };

  useEffect(() => {

    const interval = setInterval(() => {

      setAgents((prevAgents) =>

        prevAgents.map((agent) => ({

          ...agent,

          task:
            agent.status === "Running"
              ? "AI processing business tasks..."
              : "Waiting for tasks",

        }))

      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Autonomous Business Agents
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Deploy autonomous AI employees to automate business operations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {agents.map((agent, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                {agent.name}
              </h2>

              <p className="text-yellow-400 text-xl mb-3">
                Role: {agent.role}
              </p>

              <p className="text-green-400 text-xl mb-3">
                Status: {agent.status}
              </p>

              <p className="text-zinc-300 text-lg mb-8">
                {agent.task}
              </p>

              <button
                onClick={() =>
                  activateAgent(index)
                }
                className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
              >
                Activate Agent
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
