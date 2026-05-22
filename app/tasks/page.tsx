"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

export default function TasksPage() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {

    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {

      setTasks(JSON.parse(savedTasks));

    }

  }, []);

  const saveTasks = (updatedTasks: Task[]) => {

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

  };

  const addTask = () => {

    if (!task) return;

    const updatedTasks = [
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ];

    saveTasks(updatedTasks);

    setTask("");

  };

  const toggleTask = (index: number) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    saveTasks(updatedTasks);

  };

  const deleteTask = (index: number) => {

    const updatedTasks =
      tasks.filter((_, i) => i !== index);

    saveTasks(updatedTasks);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Task Manager
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Manage your AI startup execution workflow.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-10">

          <input
            type="text"
            placeholder="Enter new AI task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <button
            onClick={addTask}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Add Task
          </button>

        </div>

        <div className="space-y-6">

          {tasks.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >

              <div>

                <h2
                  className={`text-2xl font-bold ${
                    item.completed
                      ? "line-through text-green-400"
                      : "text-cyan-400"
                  }`}
                >
                  {item.text}
                </h2>

              </div>

              <div className="flex gap-4">

                <button
                  onClick={() => toggleTask(index)}
                  className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-6 py-3 rounded-2xl"
                >
                  {item.completed
                    ? "Undo"
                    : "Complete"}
                </button>

                <button
                  onClick={() => deleteTask(index)}
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
