"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Product {
  title: string;
  price: number;
  category: string;
  description: string;
}

const marketplaceProducts: Product[] = [

  {
    title: "AI Startup Blueprint",
    price: 49,
    category: "Business",
    description:
      "Complete AI startup launch system.",
  },

  {
    title: "AI Automation Pack",
    price: 79,
    category: "Automation",
    description:
      "Powerful automation workflows for businesses.",
  },

  {
    title: "Viral Content Generator",
    price: 29,
    category: "Marketing",
    description:
      "Generate viral AI-powered content ideas.",
  },

  {
    title: "AI Analytics Toolkit",
    price: 99,
    category: "Analytics",
    description:
      "Advanced AI business intelligence tools.",
  },

];

export default function MarketplacePage() {

  const [purchases, setPurchases] =
    useState<string[]>([]);

  useEffect(() => {

    const savedPurchases =
      localStorage.getItem("marketplacePurchases");

    if (savedPurchases) {

      setPurchases(
        JSON.parse(savedPurchases)
      );

    }

  }, []);

  const buyProduct = (
    productTitle: string
  ) => {

    const updatedPurchases = [

      ...purchases,
      productTitle,

    ];

    setPurchases(updatedPurchases);

    localStorage.setItem(
      "marketplacePurchases",
      JSON.stringify(updatedPurchases)
    );

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Marketplace System
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Buy and sell AI products inside the SYNTHESISE AI ecosystem.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {marketplaceProducts.map(
            (product, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
              >

                <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                  {product.title}
                </h2>

                <p className="text-green-400 text-3xl font-bold mb-4">
                  ${product.price}
                </p>

                <p className="text-yellow-400 text-lg mb-4">
                  Category: {product.category}
                </p>

                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                <button
                  onClick={() =>
                    buyProduct(product.title)
                  }
                  className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
                >
                  Purchase Product
                </button>

              </div>

            )
          )}

        </div>

        <div className="bg-zinc-900 border border-green-500 rounded-3xl p-8 mt-16">

          <h2 className="text-4xl font-bold text-green-400 mb-8">
            Purchased Products
          </h2>

          <div className="space-y-4">

            {purchases.map(
              (purchase, index) => (

                <p
                  key={index}
                  className="text-2xl text-white"
                >
                  ✅ {purchase}
                </p>

              )
            )}

          </div>

        </div>

      </div>

    </main>

  );

}
