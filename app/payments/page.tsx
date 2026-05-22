"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Transaction {
  product: string;
  amount: number;
  status: string;
}

export default function PaymentsPage() {

  const [transactions, setTransactions] =
    useState<Transaction[]>([]);

  const [processing, setProcessing] =
    useState(false);

  useEffect(() => {

    const savedTransactions =
      localStorage.getItem("transactions");

    if (savedTransactions) {

      setTransactions(
        JSON.parse(savedTransactions)
      );

    }

  }, []);

  const processPayment = (
    product: string,
    amount: number
  ) => {

    setProcessing(true);

    setTimeout(() => {

      const newTransaction = {

        product,
        amount,
        status: "Success",

      };

      const updatedTransactions = [

        newTransaction,
        ...transactions,

      ];

      setTransactions(
        updatedTransactions
      );

      localStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransactions)
      );

      setProcessing(false);

    }, 2000);

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Payment Gateway System
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Manage payments, subscriptions, and AI monetization.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              Starter Plan
            </h2>

            <p className="text-5xl font-bold text-white mb-8">
              $19
            </p>

            <button
              onClick={() =>
                processPayment(
                  "Starter Plan",
                  19
                )
              }
              className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl w-full"
            >
              Buy Now
            </button>

          </div>

          <div className="bg-zinc-900 border border-green-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-400 mb-4">
              Pro Plan
            </h2>

            <p className="text-5xl font-bold text-white mb-8">
              $49
            </p>

            <button
              onClick={() =>
                processPayment(
                  "Pro Plan",
                  49
                )
              }
              className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-8 py-4 rounded-2xl w-full"
            >
              Buy Now
            </button>

          </div>

          <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Enterprise
            </h2>

            <p className="text-5xl font-bold text-white mb-8">
              $99
            </p>

            <button
              onClick={() =>
                processPayment(
                  "Enterprise Plan",
                  99
                )
              }
              className="bg-purple-500 hover:bg-purple-400 transition text-black font-bold px-8 py-4 rounded-2xl w-full"
            >
              Buy Now
            </button>

          </div>

        </div>

        {processing && (

          <div className="bg-yellow-900 border border-yellow-500 rounded-3xl p-8 mb-14 text-center">

            <p className="text-yellow-300 text-3xl animate-pulse">
              Processing Payment...
            </p>

          </div>

        )}

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

          <h2 className="text-4xl font-bold text-cyan-400 mb-10">
            Transaction History
          </h2>

          <div className="space-y-6">

            {transactions.map(
              (transaction, index) => (

                <div
                  key={index}
                  className="bg-black border border-zinc-700 rounded-2xl p-6"
                >

                  <p className="text-2xl font-bold text-white mb-2">
                    {transaction.product}
                  </p>

                  <p className="text-green-400 text-xl mb-2">
                    ${transaction.amount}
                  </p>

                  <p className="text-cyan-400 text-lg">
                    Status: {transaction.status}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </main>

  );

}
