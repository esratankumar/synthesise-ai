"use client";

import { useEffect, useState } from "react";

type ExportItem = {
  type: string;
  filename: string;
  status: string;
};

type ExportData = {
  name: string;
  exports: ExportItem[];
};

export default function ExportAssets() {
  const [data, setData] = useState<ExportData | null>(null);

  useEffect(() => {
    fetch("/api/export-assets")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return (
      <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">
        <div className="text-xl font-bold">
          📦 Export Center
        </div>

        <div className="mt-4 text-zinc-400">
          Loading export assets...
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">

      <h2 className="text-3xl font-bold mb-2">
        📦 Product Export Center
      </h2>

      <div className="text-green-400 text-lg font-semibold mb-6">
        {data.name}
      </div>

      <div className="grid gap-3">

        {data.exports.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4 flex justify-between items-center"
          >

            <div>

              <div className="font-semibold">

                {item.type}

              </div>

              <div className="text-zinc-400 text-sm">

                {item.filename}

              </div>

            </div>

            <div className="text-green-400 font-semibold">

              ✓ {item.status}

            </div>

          </div>

        ))}

      </div>

      <button
        className="mt-6 w-full rounded-2xl bg-white text-black py-4 font-bold hover:bg-zinc-200 transition"
      >
        ⬇ Download Complete Product Bundle
      </button>

    </div>
  );
}
