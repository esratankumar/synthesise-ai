"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV16() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/product-factory-v16")
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data) {
    return (
      <div>
        Loading Empire Engine...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold mb-4">
        👑 Product Factory V16
      </h2>

      <div className="text-green-400 mb-4">
        Trend: {data.trend}
      </div>

      <div className="rounded-xl bg-zinc-800 p-4 mb-3">
        Product: {data.product.name}
      </div>

      <div className="rounded-xl bg-zinc-800 p-4 mb-3">
        Price: {data.product.price}
      </div>

      <div className="rounded-xl bg-zinc-800 p-4 mb-3">
        Assets Created:
        <ul>
          {data.assets.map(
            (a:string)=>(
              <li key={a}>
                • {a}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="rounded-xl bg-zinc-800 p-4 mb-3">
        Emails:
        {data.emails.length}
      </div>

      <div className="rounded-xl bg-zinc-800 p-4 mb-3">
        Social Posts:
        {data.social.length}
      </div>

      <div className="rounded-xl bg-zinc-800 p-4 mb-3">
        Launch Plan:
        {data.launchPlan.duration}
      </div>

      <div className="rounded-xl bg-zinc-800 p-4">

        Revenue Forecast

        <div>
          Low:
          {data.revenueForecast.low}
        </div>

        <div>
          Medium:
          {data.revenueForecast.medium}
        </div>

        <div>
          High:
          {data.revenueForecast.high}
        </div>

      </div>

    </div>
  );
}
