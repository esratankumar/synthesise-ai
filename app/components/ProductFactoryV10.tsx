"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV10() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    try {
      const res = await fetch("/api/product-factory-v10");
      const data = await res.json();

      setProducts(data.products || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          🚀 Product Factory V10
        </h2>

        <p className="text-zinc-400 mt-2">
          AI-generated digital product opportunities
        </p>
      </div>

      {loading && (
        <div className="text-zinc-400">
          Generating products...
        </div>
      )}

      {!loading && (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="flex justify-between items-center">
                <div className="text-xs text-zinc-400">
                  {product.niche}
                </div>

                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                  {product.revenueScore}
                </div>
              </div>

              <h3 className="text-xl font-bold mt-3">
                {product.productName}
              </h3>

              <div className="mt-4 text-sm text-zinc-300">
                {product.description}
              </div>

              <div className="mt-5 space-y-2">
                <div>
                  💰 Price:
                  <span className="font-semibold ml-2">
                    {product.price}
                  </span>
                </div>

                <div>
                  🎯 Buyer:
                  <span className="font-semibold ml-2">
                    {product.buyerPersona}
                  </span>
                </div>

                <div>
                  📈 Revenue:
                  <span className="font-semibold ml-2">
                    {product.revenuePotential}
                  </span>
                </div>
              </div>

              <button
                className="mt-5 w-full rounded-xl bg-white text-black px-4 py-3 font-medium"
              >
                Generate Full Product →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
