"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV15() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/product-factory-v15")
      .then((r) => r.json())
      .then((d) => setData(d.marketplace));
  }, []);

  if (!data) {
    return <div>Loading Marketplace Publisher...</div>;
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold mb-4">
        🛒 Product Factory V15
      </h2>

      <div className="text-xl font-semibold">
        {data.productName}
      </div>

      <div className="mt-3 text-green-400">
        Price: {data.price}
      </div>

      <div className="mt-6 space-y-3">

        <div className="rounded-xl bg-zinc-800 p-4">
          <div className="font-semibold">
            WHOP Listing
          </div>

          <div>{data.whopListing.title}</div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          <div className="font-semibold">
            Gumroad Listing
          </div>

          <div>{data.gumroadListing.title}</div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          <div className="font-semibold">
            Upsell
          </div>

          <div>
            {data.upsell.name} ({data.upsell.price})
          </div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          <div className="font-semibold">
            Bundle
          </div>

          <div>
            {data.bundle.name} ({data.bundle.price})
          </div>
        </div>

        <div className="rounded-xl bg-zinc-800 p-4">
          <div className="font-semibold">
            Affiliate Program
          </div>

          <div>
            Commission: {data.affiliate.commission}
          </div>
        </div>

      </div>

      <div className="mt-6 text-green-400 font-bold">
        {data.status}
      </div>

    </div>
  );
}
