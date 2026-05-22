"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Memory {
  title: string;
  content: string;
}

export default function MemoryPage() {

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [memories, setMemories] =
    useState<Memory[]>([]);

  useEffect(() => {

    const savedMemories =
      localStorage.getItem("aiMemories");

    if (savedMemories) {

      setMemories(
        JSON.parse(savedMemories)
      );

    }

  }, []);

  const saveMemories = (
    updatedMemories: Memory[]
  ) => {

    setMemories(updatedMemories);

    localStorage.setItem(
      "aiMemories",
      JSON.stringify(updatedMemories)
    );

  };

  const addMemory = () => {

    if (!title || !content) return;

    const updatedMemories = [

      ...memories,

      {
        title,
        content,
      },

    ];

    saveMemories(updatedMemories);

    setTitle("");
    setContent("");

  };

  const deleteMemory = (
    index: number
  ) => {

    const updatedMemories =
      memories.filter((_, i) => i !== index);

    saveMemories(updatedMemories);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Memory System
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Store persistent AI memories and long-term intelligence.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-16">

          <input
            type="text"
            placeholder="Memory Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 mb-6 outline-none"
          />

          <textarea
            placeholder="Memory Content"
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 mb-6 outline-none h-40"
          />

          <button
            onClick={addMemory}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Save Memory
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {memories.map((memory, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {memory.title}
              </h2>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                {memory.content}
              </p>

              <button
                onClick={() =>
                  deleteMemory(index)
                }
                className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-6 py-3 rounded-2xl"
              >
                Delete Memory
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
