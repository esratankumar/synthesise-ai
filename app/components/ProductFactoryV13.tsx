"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV13() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/product-factory-v13")
      .then((r) => r.json())
      .then((d) => setData(d.product));
  }, []);

  if (!data)
    return <div>Loading Product Builder...</div>;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold mb-4">
        🏗 Product Factory V13
      </h2>

      <div className="text-xl font-semibold">
        {data.name}
      </div>

      <div className="mt-6">
        <h3 className="font-bold mb-2">
          Course Modules
        </h3>

        {data.modules.map(
          (module: any, index: number) => (
            <div
              key={index}
              className="p-3 mb-2 rounded-xl bg-zinc-800"
            >
              <div className="font-semibold">
                {module.title}
              </div>

              <div className="text-zinc-400">
                {module.content}
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-bold">
          Prompt Pack
        </h3>

        {data.promptPack.map(
          (item: string, index: number) => (
            <div key={index}>
              • {item}
            </div>
          )
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-bold">
          Templates
        </h3>

        {data.templates.map(
          (item: string, index: number) => (
            <div key={index}>
              • {item}
            </div>
          )
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-bold">
          Bonus Resources
        </h3>

        {data.bonus.map(
          (item: string, index: number) => (
            <div key={index}>
              • {item}
            </div>
          )
        )}
      </div>

    </div>
  );
}
