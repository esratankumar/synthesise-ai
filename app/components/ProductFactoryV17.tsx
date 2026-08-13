"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV17() {

  const [data,setData] =
    useState<any>(null);

  useEffect(() => {

    fetch("/api/product-factory-v17")
      .then(r=>r.json())
      .then(setData);

  },[]);

  if(!data){
    return (
      <div>
        Loading Empire Intelligence...
      </div>
    );
  }

  return (

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold mb-4">
        🧠 Self-Improving Empire Engine
      </h2>

      <div className="rounded-xl bg-green-900/20 border border-green-500 p-4 mb-5">

        <div className="font-bold text-green-400">
          Winning Niche
        </div>

        <div className="text-xl">
          {data.winner.niche}
        </div>

        <div>
          Revenue:
          ${data.winner.revenue}
        </div>

      </div>

      <div className="space-y-3">

        {data.products.map(
          (item:any,index:number)=>(
            <div
              key={index}
              className="rounded-xl bg-zinc-800 p-4"
            >
              <div>
                {item.niche}
              </div>

              <div>
                Revenue:
                ${item.revenue}
              </div>

              <div>
                Score:
                {item.score}
              </div>
            </div>
          )
        )}

      </div>

      <div className="mt-5 rounded-xl bg-purple-900/20 border border-purple-500 p-4">

        <div className="font-bold">
          AI Recommendation
        </div>

        <div>
          {data.recommendation}
        </div>

      </div>

    </div>

  );
}
