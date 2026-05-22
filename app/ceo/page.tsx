"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

const revenueData = [

  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2400 },
  { month: "Mar", revenue: 3800 },
  { month: "Apr", revenue: 5200 },
  { month: "May", revenue: 7400 },

];

const aiSystems = [

  {
    name: "AI Agents",
    status: "Online",
  },

  {
    name: "Marketplace",
    status: "Online",
  },

  {
    name: "Push Notifications",
    status: "Online",
  },

  {
    name: "Revenue Engine",
    status: "Online",
  },

  {
    name: "AI Memory",
    status: "Online",
  },

];

export default function CEOPage() {

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

<div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI CEO Command Center
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Monitor and control your complete AI business ecosystem.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mb-16">

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-xl mb-4">
              Total Revenue
            </h2>

            <p className="text-5xl font-bold text-green-400">
              $74,320
            </p>

          </div>

          <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-xl mb-4">
              Active AI Agents
            </h2>

            <p className="text-5xl font-bold text-purple-400">
              12
            </p>

          </div>

          <div className="bg-zinc-900 border border-yellow-500 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-xl mb-4">
              Marketplace Sales
            </h2>

            <p className="text-5xl font-bold text-yellow-400">
              284
            </p>

          </div>

          <div className="bg-zinc-900 border border-green-500 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-xl mb-4">
              Automation Tasks
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              1,492
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">

<div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 min-h-[420px]">
            <h2 className="text-4xl font-bold text-cyan-400 mb-8">
              Revenue Analytics
            </h2>

<div className="w-full min-h-[300px]">
<ResponsiveContainer width="99%" height={300}>
                <BarChart data={revenueData}>

                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />

                  <Bar
                    dataKey="revenue"
                    fill="#06b6d4"
                    radius={[10, 10, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

          <div className="bg-zinc-900 border border-green-500 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-green-400 mb-8">
              AI Systems Status
            </h2>

            <div className="space-y-6">

              {aiSystems.map((system, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-black rounded-2xl p-5"
                >

                  <p className="text-2xl text-white">
                    {system.name}
                  </p>

                  <p className="text-green-400 text-xl font-bold">
                    ● {system.status}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-10">

          <h2 className="text-4xl font-bold text-purple-400 mb-8">
            AI CEO Insights
          </h2>

          <div className="space-y-6 text-xl text-zinc-300">

            <p>
              🚀 AI marketplace revenue increased by 38% this month.
            </p>

            <p>
              🤖 AI agents completed 1,492 automation tasks.
            </p>

            <p>
              📈 Viral AI startup opportunities are trending globally.
            </p>

            <p>
              💰 Subscription growth rate improved significantly.
            </p>

          </div>

        </div>

      </div>

    </main>

  );

}
