"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

export default function OSPage() {

  const [agentCount, setAgentCount] =
    useState(0);

  const [workflowCount, setWorkflowCount] =
    useState(0);

  const [pluginCount, setPluginCount] =
    useState(0);

  useEffect(() => {

    const agents =
      JSON.parse(
        localStorage.getItem("aiAgents") || "[]"
      );

    const workflows =
      JSON.parse(
        localStorage.getItem("automationWorkflows") || "[]"
      );

    const plugins =
      JSON.parse(
        localStorage.getItem("installedPlugins") || "[]"
      );

    setAgentCount(agents.length);

    setWorkflowCount(workflows.length);

    setPluginCount(plugins.length);

  }, []);

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Operating System
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Central intelligence dashboard for your AI ecosystem.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-4">
              AI Agents
            </h2>

            <p className="text-7xl font-bold text-white">
              {agentCount}
            </p>

          </div>

          <div className="bg-zinc-900 border border-green-500 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-green-400 mb-4">
              Workflows
            </h2>

            <p className="text-7xl font-bold text-white">
              {workflowCount}
            </p>

          </div>

          <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-purple-400 mb-4">
              Plugins
            </h2>

            <p className="text-7xl font-bold text-white">
              {pluginCount}
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-6">
              AI Ecosystem Status
            </h2>

            <div className="space-y-4 text-xl">

              <p className="text-green-400">
                ✅ AI Agent System Online
              </p>

              <p className="text-green-400">
                ✅ Automation Workflows Active
              </p>

              <p className="text-green-400">
                ✅ AI App Store Connected
              </p>

              <p className="text-green-400">
                ✅ Voice Commands Running
              </p>

              <p className="text-green-400">
                ✅ CRM Intelligence Active
              </p>

            </div>

          </div>

          <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-purple-400 mb-6">
              SYNTHESISE AI Core
            </h2>

            <div className="space-y-4 text-xl">

              <p className="text-zinc-300">
                AI Intelligence Level:
                <span className="text-cyan-400 font-bold">
                  {" "}Advanced
                </span>
              </p>

              <p className="text-zinc-300">
                System Stability:
                <span className="text-green-400 font-bold">
                  {" "}99.9%
                </span>
              </p>

              <p className="text-zinc-300">
                Active Ecosystem:
                <span className="text-purple-400 font-bold">
                  {" "}Operational
                </span>
              </p>

              <p className="text-zinc-300">
                AI Automation:
                <span className="text-yellow-400 font-bold">
                  {" "}Enabled
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}
