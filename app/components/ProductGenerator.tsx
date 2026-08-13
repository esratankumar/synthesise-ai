"use client";

import { useEffect, useState } from "react";

export default function ProductGenerator() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const res = await fetch("/api/product-generator");
    const data = await res.json();

    setProducts(data.products || []);
  }

  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-bold">
        🚀 One-Click Product Generator
      </h2>

      {products.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
        >
          <div className="text-lg font-bold">
            {item.productName}
          </div>

          <div className="text-zinc-400">
            {item.productType}
          </div>

          <div className="mt-2">
            Buyer:
            {" "}
            {item.buyerPersona}
          </div>

          <div>
            Price:
            {" "}
            {item.price}
          </div>

          <div className="text-green-400">
            Revenue Score:
            {" "}
            {item.revenueScore}
          </div>
        </div>
      ))}
    </div>
  );
}
