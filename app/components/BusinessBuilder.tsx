"use client";

import { useEffect, useState } from "react";

export default function BusinessBuilder() {
  const [ideas, setIdeas] =
    useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "/api/business-builder"
    );

    const data = await res.json();

    setIdeas(data.ideas || []);
  }

  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-bold">
        🚀 Business Builder
      </h2>

      {ideas.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl bg-zinc-900 p-5 border border-zinc-800"
        >
          <div className="font-bold text-lg">
            {item.product}
          </div>

          <div>
            Buyer:
            {" "}
            {item.buyer}
          </div>

          <div>
            Price:
            {" "}
            {item.price}
          </div>

          <div className="text-green-400">
            Revenue Score:
            {" "}
            {item.revenueScore}
          </div>

          <div className="text-blue-400">
            Platform:
            {" "}
            {item.platform}
          </div>

          <ul className="mt-3 list-disc ml-5">
            {item.launchPlan.map(
              (
                step: string,
                idx: number
              ) => (
                <li key={idx}>
                  {step}
                </li>
              )
            )}
          </ul>

        </div>
      ))}

    </div>
  );
}
