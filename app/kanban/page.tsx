"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Task {
  text: string;
  status: string;
}

export default function KanbanPage() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {

    const savedTasks =
      localStorage.getItem("kanbanTasks");

    if (savedTasks) {

      setTasks(JSON.parse(savedTasks));

    }

  }, []);

  const saveTasks = (updatedTasks: Task[]) => {

    setTasks(updatedTasks);

    localStorage.setItem(
      "kanbanTasks",
      JSON.stringify(updatedTasks)
    );

  };

  const addTask = () => {

    if (!task) return;

    const updatedTasks = [
      ...tasks,
      {
        text: task,
        status: "Todo",
      },
    ];

    saveTasks(updatedTasks);

    setTask("");

  };

  const moveTask = (
    index: number,
    newStatus: string
  ) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].status = newStatus;

    saveTasks(updatedTasks);

  };

  const renderColumn = (status: string) => (

    <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-6 min-h-[500px]">

      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        {status}
      </h2>

      <div className="space-y-4">

        {tasks.map((item, index) => (

          item.status === status && (

            <div
              key={index}
              className="bg-black border border-cyan-500 rounded-2xl p-4"
            >

              <p className="text-zinc-200 text-lg mb-4">
                {item.text}
              </p>

              <div className="flex flex-wrap gap-2">

                <button
                  onClick={() =>
                    moveTask(index, "Todo")
                  }
                  className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-4 py-2 rounded-xl"
                >
                  Todo
                </button>

                <button
                  onClick={() =>
                    moveTask(index, "In Progress")
                  }
                  className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-4 py-2 rounded-xl"
                >
                  In Progress
                </button>

                <button
                  onClick={() =>
                    moveTask(index, "Completed")
                  }
                  className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-4 py-2 rounded-xl"
                >
                  Completed
                </button>

              </div>

            </div>

          )

        ))}

      </div>

    </div>

  );

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Kanban Board
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Organize and manage AI startup workflows.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-10">

          <input
            type="text"
            placeholder="Enter new workflow task..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <button
            onClick={addTask}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Add Workflow Task
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {renderColumn("Todo")}

          {renderColumn("In Progress")}

          {renderColumn("Completed")}

        </div>

      </div>

    </main>

  );

}
