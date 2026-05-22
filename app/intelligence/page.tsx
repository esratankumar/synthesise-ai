"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Trend {
  title: string;
  category: string;
  growth: string;
  insight: string;
}

const simulatedTrends: Trend[] = [

  {
    title: "AI Automation Agencies",
    category: "Business",
    growth: "+340%",
    insight:
      "AI-powered automation services are rapidly growing globally.",
  },

  {
    title: "Faceless YouTube Channels",
    category: "Content Creation",
    growth: "+280%",
    insight:
      "Short-form faceless content continues dominating social platforms.",
  },

  {
    title: "AI Health Startups",
    category: "Healthcare",
    growth: "+410%",
    insight:
      "Healthcare AI solutions are attracting strong investor interest.",
  },

  {
    title: "AI Productivity Apps",
    category: "Software",
    growth: "+250%",
    insight:
      "AI productivity tools are becoming mainstream for businesses.",
  },

];

export default function IntelligencePage() {

  const [loading, setLoading] =
    useState(true);

  const [trends, setTrends] =
    useState<Trend[]>([]);

  useEffect(() => {

    setTimeout(() => {

      setTrends(simulatedTrends);

      setLoading(false);

    }, 2500);

  }, []);

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Live Internet Intelligence
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Monitor real-time startup trends and internet intelligence.
        </p>

        {loading ? (

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-14 text-center">

            <p className="text-cyan-400 text-3xl animate-pulse">
              SYNTHESISE AI is scanning the internet...
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-8">

            {trends.map((trend, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
              >

                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                  {trend.title}
                </h2>

                <p className="text-green-400 text-lg font-bold mb-3">
                  Growth: {trend.growth}
                </p>

                <p className="text-yellow-400 text-lg mb-4">
                  Category: {trend.category}
                </p>

                <p className="text-zinc-300 text-lg leading-relaxed">
                  {trend.insight}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>

  );

}
