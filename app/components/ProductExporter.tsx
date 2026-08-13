"use client";

import { useEffect, useState } from "react";

export default function ProductExporter() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    fetch("/api/export-product")
      .then((res) => res.json())
      .then((json) => setData(json));

  }, []);

  if (!data) {

    return (

      <div className="rounded-3xl bg-zinc-900 p-6">

        Loading Product Export Center...

      </div>

    );

  }

  return (

    <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">

      <h2 className="text-2xl font-bold mb-4">

        📦 Product Export Center

      </h2>

      <div className="text-lg font-semibold text-green-400 mb-6">

        {data.product}

      </div>

      <div className="grid gap-3">

        {data.exports.map(

          (item: string, index: number) => (

            <div

              key={index}

              className="rounded-xl bg-zinc-800 p-4 flex justify-between"

            >

              <span>{item}</span>

              <span className="text-green-400">

                ✓ Ready

              </span>

            </div>

          )

        )}

      </div>

    </div>

  );

}
