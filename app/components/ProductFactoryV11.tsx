"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV11() {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("/api/product-factory-v11")
      .then((r) => r.json())
      .then((data) => setProduct(data.product));
  }, []);

  if (!product)
    return <div>Loading Product Factory V11...</div>;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-3xl font-bold mb-4">
        🚀 Product Factory V11
      </h2>

      <div className="text-2xl font-semibold">
        {product.name}
      </div>

      <div className="mt-3">
        💰 Price: {product.price}
      </div>

      <div>
        📈 Revenue: {product.revenueForecast}
      </div>

      <div className="mt-5">
        <h3 className="font-bold">
          Lead Magnet
        </h3>

        <div>{product.leadMagnet}</div>
      </div>

      <div className="mt-5">
        <h3 className="font-bold">
          Sales Headline
        </h3>

        <div>
          {product.salesPage.headline}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-bold">
          Launch Plan
        </h3>

        <div>{product.launchPlan}</div>
      </div>
    </div>
  );
}
