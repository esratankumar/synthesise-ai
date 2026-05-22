
"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

const revenueData = [

  {
    month: "Jan",
    revenue: 4000,
  },

  {
    month: "Feb",
    revenue: 7000,
  },

  {
    month: "Mar",
    revenue: 12000,
  },

  {
    month: "Apr",
    revenue: 18000,
  },

  {
    month: "May",
    revenue: 26000,
  },

  {
    month: "Jun",
    revenue: 40000,
  },

];

export default function AnalyticsPage() {

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Analytics Engine
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Monitor startup growth and AI business intelligence.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-xl mb-4">
              Total Revenue
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              $40K
            </p>

          </div>

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-xl mb-4">
              Active Clients
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              182
            </p>

          </div>

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-xl mb-4">
              AI Growth Score
            </h2>

            <p className="text-5xl font-bold text-cyan-400">
              98%
            </p>

          </div>

        </div>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

          <h2 className="text-4xl font-bold text-cyan-400 mb-10">
            Revenue Growth
          </h2>

          <div className="w-full h-[400px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={revenueData}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#06b6d4"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </main>

  );

}
