"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";	

export default function WorkspacePage() {

  const [project, setProject] = useState("");
  const [projects, setProjects] = useState<string[]>([]);
useEffect(() => {

  const savedProjects = localStorage.getItem("projects");

  if (savedProjects) {

    setProjects(JSON.parse(savedProjects));

  }

}, []);

  const createProject = () => {

  if (!project) return;

  const updatedProjects = [...projects, project];

  setProjects(updatedProjects);

  localStorage.setItem(
    "projects",
    JSON.stringify(updatedProjects)
  );

  setProject("");

};

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Workspace
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Create and manage your AI startup projects.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-10">

          <input
            type="text"
            placeholder="Enter AI project name..."
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <button
            onClick={createProject}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Create Project
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 hover:scale-105 transition"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {item}
              </h2>

              <p className="text-zinc-300 text-lg leading-relaxed">
                AI startup research workspace and opportunity tracker.
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
