"use client";

import { useEffect, useState } from "react";

export default function TrendIntelligence() {
  const [trends, setTrends] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/trend-intelligence")
      .then((r) => r.json())
      .then((d) => setTrends(d.trends || []));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        📈 Trend Intelligence
      </h2>

      {trends.map((t, i) => (
        <div
          key={i}
          className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900"
        >
          <div className="font-semibold">
            {t.trend}
          </div>

          <div className="text-sm mt-2">
            Demand: {t.demand}/100
          </div>

          <div className="text-sm">
            Competition: {t.competition}
          </div>

          <div className="text-sm">
            Revenue: {t.revenue}
          </div>
        </div>
      ))}
    </div>
  );
}
