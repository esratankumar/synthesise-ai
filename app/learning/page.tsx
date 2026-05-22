"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useState } from "react";

interface Memory {

  question: string;
  answer: string;

}

export default function LearningPage() {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [memory, setMemory] =
    useState<Memory[]>([]);

  const [status, setStatus] =
    useState("Idle");

  const trainAI = () => {

    if (!question || !answer) {

      alert("Please fill all fields.");

      return;

    }

    setStatus("Learning...");

    const newMemory = {

      question,
      answer,

    };

    setTimeout(() => {

      setMemory((prev) => [

        ...prev,
        newMemory,

      ]);

      setQuestion("");
      setAnswer("");

      setStatus("Knowledge Updated");

    }, 1500);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Self-Learning System
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Train and evolve your AI intelligence system.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-14">

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-cyan-400 mb-8">
              AI Memory Training
            </h2>

            <input
              type="text"
              placeholder="Enter AI Question"
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 rounded-2xl p-4 text-white mb-6"
            />

            <textarea
              placeholder="Enter AI Answer"
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 rounded-2xl p-4 text-white mb-6 h-40"
            />

            <button
              onClick={trainAI}
              className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
            >
              Train AI
            </button>

            <p className="text-green-400 text-xl mt-8">
              Status: {status}
            </p>

          </div>

          <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-purple-400 mb-8">
              AI Intelligence Stats
            </h2>

            <div className="space-y-6">

              <div className="bg-black rounded-2xl p-5">

                <p className="text-zinc-400 text-lg">
                  Total Learned Memories
                </p>

                <p className="text-5xl font-bold text-cyan-400">
                  {memory.length}
                </p>

              </div>

              <div className="bg-black rounded-2xl p-5">

                <p className="text-zinc-400 text-lg">
                  AI Learning Status
                </p>

                <p className="text-3xl font-bold text-green-400">
                  Adaptive Intelligence Active
                </p>

              </div>

              <div className="bg-black rounded-2xl p-5">

                <p className="text-zinc-400 text-lg">
                  AI Evolution Level
                </p>

                <p className="text-4xl font-bold text-yellow-400">
                  Level {memory.length + 1}
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="bg-zinc-900 border border-green-500 rounded-3xl p-8">

          <h2 className="text-4xl font-bold text-green-400 mb-8">
            AI Learned Knowledge
          </h2>

          <div className="space-y-6">

            {memory.length === 0 ? (

              <p className="text-zinc-400 text-xl">
                No AI knowledge learned yet.
              </p>

            ) : (

              memory.map((item, index) => (

                <div
                  key={index}
                  className="bg-black rounded-2xl p-6"
                >

                  <p className="text-cyan-400 text-xl mb-3">
                    Q: {item.question}
                  </p>

                  <p className="text-zinc-300 text-lg">
                    A: {item.answer}
                  </p>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </main>

  );

}
