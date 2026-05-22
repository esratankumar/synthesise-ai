"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useState } from "react";

export default function StartupsPage() {

  const [savedIdeas, setSavedIdeas] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const saveIdea = (title: string) => {

    if (!savedIdeas.includes(title)) {

      const updated = [...savedIdeas, title];

      setSavedIdeas(updated);

      localStorage.setItem(
        "savedIdeas",
        JSON.stringify(updated)
      );

    }

  };

  const startups = [

    {
      title: "AI Automation Agency",
      description:
        "Build AI workflows and automation systems for businesses.",
      score: "96%",
    },

    {
      title: "Faceless YouTube Automation",
      description:
        "Create AI-generated YouTube Shorts channels using automation.",
      score: "94%",
    },

    {
      title: "AI Resume Optimization SaaS",
      description:
        "Help users optimize resumes using artificial intelligence.",
      score: "92%",
    },

    {
      title: "AI Healthcare Content Platform",
      description:
        "Generate healthcare content using AI tools and automation.",
      score: "95%",
    },

  ];

  const filteredStartups = startups.filter((startup) =>
    startup.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
<ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Startups
        </h1>

        <p className="text-zinc-400 text-xl mb-4">
          Discover high-growth AI startup opportunities before they explode.
        </p>

        <p className="text-green-400 text-lg mb-8">
          Saved Opportunities: {savedIdeas.length}
        </p>

        <input
          type="text"
          placeholder="Search AI startups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-cyan-500 rounded-2xl px-6 py-4 mb-10 text-white outline-none"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {filteredStartups.map((startup, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 hover:scale-105 transition"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {startup.title}
              </h2>

              <p className="text-zinc-300 text-lg mb-6">
                {startup.description}
              </p>

              <div className="text-green-400 text-xl font-bold mb-6">
                Opportunity Score: {startup.score}
              </div>

              <button
                onClick={() => saveIdea(startup.title)}
                className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-6 py-3 rounded-2xl"
              >
                Save Opportunity
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
