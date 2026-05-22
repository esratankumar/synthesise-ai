"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function ToolsPage() {

  const [search, setSearch] = useState("");

  const tools = [

    {
      name: "ChatGPT",
      category: "AI Chatbot",
      pricing: "Freemium",
      description:
        "Advanced conversational AI for content, coding, and automation.",
    },

    {
      name: "Midjourney",
      category: "AI Image Generation",
      pricing: "Paid",
      description:
        "Generate cinematic AI artwork and realistic visuals.",
    },

    {
      name: "Runway ML",
      category: "AI Video Editing",
      pricing: "Freemium",
      description:
        "AI-powered video generation and editing platform.",
    },

    {
      name: "ElevenLabs",
      category: "AI Voice",
      pricing: "Freemium",
      description:
        "Generate ultra realistic AI voices and narrations.",
    },

    {
      name: "Claude AI",
      category: "AI Assistant",
      pricing: "Freemium",
      description:
        "Powerful AI assistant for research and writing.",
    },

    {
      name: "Perplexity AI",
      category: "AI Search",
      pricing: "Freemium",
      description:
        "AI-powered intelligent search engine platform.",
    },

  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Tools Marketplace
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Discover powerful AI tools transforming the future.
        </p>

        <input
          type="text"
          placeholder="Search AI tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-cyan-500 rounded-2xl px-6 py-4 mb-10 text-white outline-none"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {filteredTools.map((tool, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 hover:scale-105 transition"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {tool.name}
              </h2>

              <div className="text-green-400 font-bold mb-2">
                {tool.category}
              </div>

              <div className="text-yellow-400 font-bold mb-4">
                {tool.pricing}
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed">
                {tool.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
