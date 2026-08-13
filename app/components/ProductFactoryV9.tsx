"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV9() {

  const [products, setProducts] =
    useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {

    const res =
      await fetch(
        "/api/product-factory-v9"
      );

    const data =
      await res.json();

    setProducts(
      data.products || []
    );
  }

  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold">
        🚀 Product Factory V9
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {products.map(
          (product, index) => (

            <div
              key={index}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="text-xl font-bold">
                {product.productName}
              </h3>

              <div className="mt-2 text-zinc-400">
                {product.trend}
              </div>

              <div className="mt-3">
                Audience:
                {" "}
                {product.audience}
              </div>

              <div>
                Price:
                {" "}
                {product.price}
              </div>

              <div className="text-green-400">
                Revenue Score:
                {" "}
                {product.revenueScore}
              </div>

              <div className="mt-4 text-sm">
                {product.whopListing}
              </div>

              <div className="mt-4 text-cyan-400">
                Forecast:
                {" "}
                {product.monthlyForecast}
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}
