"use client";

import { useEffect, useState } from "react";

export default function ProductGeneratorV7() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const res = await fetch(
      "/api/product-generator-v7"
    );

    const data = await res.json();

    setProducts(data.products || []);
  }

  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-bold">
        🚀 Product Factory V7
      </h2>

      {products.map((product, index) => (
        <div
          key={index}
          className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6"
        >

          <h3 className="text-xl font-bold">
            {product.productName}
          </h3>

          <div className="mt-2">
            Price: {product.price}
          </div>

          <div className="text-green-400">
            Revenue Score:
            {" "}
            {product.revenueScore}
          </div>

          <div className="mt-4">
            {product.description}
          </div>

          <div className="mt-4">
            Forecast:
            {" "}
            {product.forecast}
          </div>

        </div>
      ))}
    </div>
  );
}
