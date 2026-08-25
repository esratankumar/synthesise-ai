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

    <main className="min-h-screen bg-black text-white flex w-full overflow-x-hidden relative">
       <Sidebar />
      <ThemeToggle />

      <div className="flex-1 min-w-0 w-full p-4 sm:p-6 md:p-10 overflow-y-auto overflow-x-hidden pt-20 md:pt-10">

<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cyan-400 mb-5 pr-20 md:pr-0">
          AI CEO Command Center
        </h1>

        <p className="text-zinc-400 text-lg sm:text-xl mb-6 md:mb-14">
          Monitor and control your complete AI business ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-16">

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-4 sm:p-5 md:p-8 h-auto">

            <h2 className="text-zinc-400 text-base md:text-xl mb-2 md:mb-4">
              Total Revenue
            </h2>

            <p className="text-4xl md:text-5xl font-bold text-green-400">
              $74,320
            </p>

          </div>

          <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-4 sm:p-5 md:p-8 h-auto">

            <h2 className="text-zinc-400 text-base md:text-xl mb-2 md:mb-4">
              Active AI Agents
            </h2>

            <p className="text-4xl md:text-5xl font-bold text-purple-400">
              12
            </p>

          </div>

          <div className="bg-zinc-900 border border-yellow-500 rounded-3xl p-4 sm:p-5 md:p-8 h-auto">

            <h2 className="text-zinc-400 text-base md:text-xl mb-2 md:mb-4">
              Marketplace Sales
            </h2>

            <p className="text-4xl md:text-5xl font-bold text-yellow-400">
              284
            </p>

          </div>

          <div className="bg-zinc-900 border border-green-500 rounded-3xl p-4 sm:p-5 md:p-8 h-auto">

            <h2 className="text-zinc-400 text-base md:text-xl mb-2 md:mb-4">
              Automation Tasks
            </h2>

            <p className="text-4xl md:text-5xl font-bold text-cyan-400">
              1,492
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">

<div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-5 sm:p-6 md:p-8 min-h-[420px] min-w-0 overflow-hidden">

  <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">
    Revenue Analytics
  </h2>

  <div className="w-full">

    <div className="flex items-end justify-between gap-3 h-[260px] border-b border-zinc-700">

      {revenueData.map((item) => {

        const maxRevenue = 7400;
        const barHeight = Math.max(
          10,
          (item.revenue / maxRevenue) * 220
        );

        return (
          <div
            key={item.month}
            className="flex-1 h-full flex flex-col items-center justify-end"
          >

            <div className="text-sm text-zinc-400 mb-2">
              ${item.revenue.toLocaleString()}
            </div>

            <div
              className="w-full max-w-[55px] bg-cyan-500 rounded-t-xl"
              style={{ height: `${barHeight}px` }}
            />

            <div className="text-sm text-zinc-400 mt-3">
              {item.month}
            </div>

          </div>
        );

      })}

    </div>

  </div>

</div>

          <div className="bg-zinc-900 border border-green-500 rounded-3xl p-4 sm:p-5 md:p-8 h-auto">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-5 md:mb-8">
              AI Systems Status
            </h2>

            <div className="space-y-3 md:space-y-6">

              {aiSystems.map((system, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-black rounded-2xl p-3 md:p-5"
                >

                  <p className="text-base sm:text-lg md:text-2xl text-white">
                    {system.name}
                  </p>

                  <p className="text-green-400 text-sm sm:text-base md:text-xl font-bold">
                    ● {system.status}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-5 sm:p-6 md:p-10 mt-6 md:mt-0">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-5 md:mb-8">
            AI CEO Insights
          </h2>

          <div className="space-y-3 md:space-y-6 text-xl text-zinc-300">

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
