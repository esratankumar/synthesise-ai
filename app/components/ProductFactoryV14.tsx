"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV14() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/product-factory-v14")
      .then((r) => r.json())
      .then((d) => setData(d.exportProduct));
  }, []);

  if (!data)
    return <div>Loading Export Engine...</div>;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold mb-4">
        📦 Product Factory V14
      </h2>

      <div className="text-xl font-semibold">
        {data.name}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <div className="rounded-xl bg-zinc-800 p-4">
          📘 Ebook
          <div>{data.ebook.pages} pages</div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          🎁 Lead Magnet
          <div>{data.leadMagnet.pages} pages</div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          ⚡ Prompt Pack
          <div>{data.promptPack.prompts} prompts</div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          📄 Templates
          <div>{data.templates.count}</div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          ✅ Checklists
          <div>{data.checklist.count}</div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          📝 Worksheets
          <div>{data.worksheets.count}</div>
        </div>

      </div>

      <div className="mt-6 text-green-400 font-bold">
        Ready For Sale: {data.readyForSale ? "YES" : "NO"}
      </div>

    </div>
  );
}
