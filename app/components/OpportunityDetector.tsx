"use client";

import { useEffect, useState } from "react";

type Opportunity = {
niche: string;
score: number;
articles: number;
};

export default function OpportunityDetector() {
const [data, setData] = useState<Opportunity[]>([]);

async function load() {
try {
const res = await fetch(
"/api/opportunities"
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
<div className="space-y-4">

  <h2 className="text-2xl font-bold">
    ⚡ Opportunity Detector
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

    {data.map((item, index) => (
      <div
        key={index}
        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
      >
        <div className="text-zinc-400 text-sm">
          {item.niche}
        </div>

        <div className="text-3xl font-bold mt-2">
          {item.score}
        </div>

        <div className="text-xs text-zinc-500 mt-2">
          {item.articles} articles found
        </div>
      </div>
    ))}

  </div>
</div>

);
}
