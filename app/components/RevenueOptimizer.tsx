"use client";

import { useEffect, useState } from "react";

export default function RevenueOptimizer() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("/api/revenue-optimizer")
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <div className="rounded-3xl bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold mb-4">
        Revenue Optimization Engine
      </h2>

      <div className="text-green-400 text-xl mb-6">
        Total Revenue: $
        {data.totalRevenue.toLocaleString()}
      </div>

      <div className="grid gap-4">
        {data.recommendations.map(
          (item: any, i: number) => (
            <div
              key={i}
              className="border border-zinc-800 rounded-2xl p-4"
            >
              <div className="font-bold">
                {item.product}
              </div>

              <div>
                Revenue: $
                {item.revenue.toLocaleString()}
              </div>

              <div>
                Conversion Rate:
                {item.conversionRate}%
              </div>

              <div className="text-cyan-400 mt-2">
                Recommendation:
                {item.recommendation}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
