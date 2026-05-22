"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface RevenueSource {
  product: string;
  revenue: number;
  growth: string;
}

const revenueData: RevenueSource[] = [

  {
    product: "AI Startup Reports",
    revenue: 4200,
    growth: "+18%",
  },

  {
    product: "AI Automation Services",
    revenue: 9600,
    growth: "+42%",
  },

  {
    product: "Digital AI Products",
    revenue: 7200,
    growth: "+26%",
  },

  {
    product: "Premium AI Memberships",
    revenue: 15000,
    growth: "+58%",
  },

];

export default function RevenuePage() {

  const [totalRevenue, setTotalRevenue] =
    useState(0);

  useEffect(() => {

    const total =
      revenueData.reduce(
        (sum, item) =>
          sum + item.revenue,
        0
      );

    setTotalRevenue(total);

  }, []);

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Revenue Engine
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Monitor monetization, digital products, and AI business growth.
        </p>

        <div className="bg-zinc-900 border border-green-500 rounded-3xl p-12 mb-16">

          <h2 className="text-4xl font-bold text-green-400 mb-6">
            Total Revenue
          </h2>

          <p className="text-8xl font-bold text-white">
            ${totalRevenue.toLocaleString()}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {revenueData.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {item.product}
              </h2>

              <p className="text-5xl font-bold text-white mb-4">
                ${item.revenue.toLocaleString()}
              </p>

              <p className="text-green-400 text-2xl font-bold">
                Growth: {item.growth}
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
