"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV8() {

  const [products, setProducts] =
    useState<any[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    const res = await fetch(
      "/api/product-factory-v8"
    );

    const data = await res.json();

    setProducts(
      data.products || []
    );
  }

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        🚀 Product Factory V8
      </h2>

      {products.map(
        (product, index) => (

          <div
            key={index}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >

            <h3 className="text-xl font-bold">
              {product.productName}
            </h3>

            <div className="mt-2">
              Trend:
              {" "}
              {product.trend}
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

            <div className="mt-4">
              {product.digitalProduct}
            </div>

            <div className="mt-4 text-zinc-400">
              Forecast:
              {" "}
              {product.forecast}
            </div>

          </div>
        )
      )}
    </div>
  );
}
