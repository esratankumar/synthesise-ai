"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Workflow {
  name: string;
  trigger: string;
}

export default function AutomationPage() {

  const [workflowName, setWorkflowName] =
    useState("");

  const [trigger, setTrigger] =
    useState("");

  const [workflows, setWorkflows] =
    useState<Workflow[]>([]);

  useEffect(() => {

    const savedWorkflows =
      localStorage.getItem("automationWorkflows");

    if (savedWorkflows) {

      setWorkflows(
        JSON.parse(savedWorkflows)
      );

    }

  }, []);

  const saveWorkflows = (
    updatedWorkflows: Workflow[]
  ) => {

    setWorkflows(updatedWorkflows);

    localStorage.setItem(
      "automationWorkflows",
      JSON.stringify(updatedWorkflows)
    );

  };

  const addWorkflow = () => {

    if (!workflowName || !trigger) return;

    const updatedWorkflows = [

      ...workflows,

      {
        name: workflowName,
        trigger,
      },

    ];

    saveWorkflows(updatedWorkflows);

    setWorkflowName("");

    setTrigger("");

  };

  const executeWorkflow = (
    workflow: Workflow
  ) => {

    alert(
      `⚡ Executing Automation:\n\n${workflow.name}\n\nTrigger: ${workflow.trigger}`
    );

  };

  const deleteWorkflow = (index: number) => {

    const updatedWorkflows =
      workflows.filter((_, i) => i !== index);

    saveWorkflows(updatedWorkflows);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Automation Workflows
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Build and execute AI startup automations.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-12">

          <input
            type="text"
            placeholder="Workflow Name"
            value={workflowName}
            onChange={(e) =>
              setWorkflowName(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <input
            type="text"
            placeholder="Trigger Event"
            value={trigger}
            onChange={(e) =>
              setTrigger(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <button
            onClick={addWorkflow}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Create Workflow
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {workflows.map((workflow, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {workflow.name}
              </h2>

              <p className="text-zinc-300 text-lg mb-6">
                Trigger: {workflow.trigger}
              </p>

              <div className="flex gap-4 flex-wrap">

                <button
                  onClick={() =>
                    executeWorkflow(workflow)
                  }
                  className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-6 py-3 rounded-2xl"
                >
                  Execute
                </button>

                <button
                  onClick={() =>
                    deleteWorkflow(index)
                  }
                  className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-6 py-3 rounded-2xl"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
