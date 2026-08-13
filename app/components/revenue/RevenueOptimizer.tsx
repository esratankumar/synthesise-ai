"use client";

import { useEffect, useState } from "react";

export default function RevenueOptimizer() {

  const [data, setData] = useState<any>(null);

  async function load() {

    const res = await fetch("/api/revenue-optimizer");

    const json = await res.json();

    setData(json);

  }

  useEffect(() => {

    load();

  }, []);

  if (!data) {

    return (
      <div className="rounded-xl bg-zinc-900 p-6">
        Loading Revenue Optimizer...
      </div>
    );

  }

  return (

    <div className="rounded-xl bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">
        Revenue Optimizer
      </h2>

      <p className="mt-2">
        Total Revenue: ${data.totalRevenue}
      </p>

      <div className="mt-4 space-y-2">

        {data.recommendations?.map((item: any) => (

          <div
            key={item.product}
            className="rounded bg-zinc-800 p-3"
          >

            <strong>{item.product}</strong>

            <div>
              Recommendation: {item.recommendation}
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
