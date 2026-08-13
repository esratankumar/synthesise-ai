"use client";

import { useEffect, useState } from "react";

export default function OpportunityGenerator() {
  const [data, setData] = useState<any[]>([]);

  async function load() {
    try {
      const res = await fetch(
        "/api/opportunity-generator"
      );

      const json = await res.json();

      setData(json.opportunities || []);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-2xl font-bold">
        💰 Opportunity Generator
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5"
          >
            <div className="font-bold text-lg">
              {item.niche}
            </div>

            <div className="mt-3 space-y-1">
              {item.products?.map(
                (p: string, i: number) => (
                  <div key={i}>
                    • {p}
                  </div>
                )
              )}
            </div>

            <div className="mt-4 text-sm">
              Demand: {item.demand}
            </div>

            <div className="text-sm">
              Competition: {item.competition}
            </div>

            <div className="text-green-400 mt-2">
              {item.revenue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
