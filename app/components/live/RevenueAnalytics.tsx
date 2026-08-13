"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueAnalytics() {
  const [data, setData] = useState<any[]>([]);

  async function load() {
    const res = await fetch("/api/revenue-analytics");
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    load();

    const timer = setInterval(load, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        Revenue Analytics
      </h2>

      <div style={{ width: "100%", height: 320 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
