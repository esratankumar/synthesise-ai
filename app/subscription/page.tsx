"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const plans: Plan[] = [

  {
    name: "Starter",
    price: "$19/month",
    features: [
      "AI Dashboard",
      "Basic AI Agents",
      "Startup Analytics",
    ],
  },

  {
    name: "Pro",
    price: "$49/month",
    features: [
      "Advanced AI Agents",
      "Automation Workflows",
      "AI Memory System",
      "Live Intelligence",
    ],
  },

  {
    name: "Enterprise",
    price: "$99/month",
    features: [
      "Unlimited AI Agents",
      "Multi-Model AI",
      "Voice Commands",
      "AI Revenue Engine",
      "Priority Access",
    ],
  },

];

export default function SubscriptionPage() {

  const [activePlan, setActivePlan] =
    useState<string>("None");

  useEffect(() => {

    const savedPlan =
      localStorage.getItem("activePlan");

    if (savedPlan) {

      setActivePlan(savedPlan);

    }

  }, []);

  const subscribeToPlan = (
    planName: string
  ) => {

    setActivePlan(planName);

    localStorage.setItem(
      "activePlan",
      planName
    );

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI SaaS Subscription System
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Unlock premium AI features and manage subscriptions.
        </p>

        <div className="bg-green-900 border border-green-500 rounded-3xl p-8 mb-16">

          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Active Subscription
          </h2>

          <p className="text-5xl font-bold text-white">
            {activePlan}
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 flex flex-col"
            >

              <h2 className="text-4xl font-bold text-cyan-400 mb-4">
                {plan.name}
              </h2>

              <p className="text-5xl font-bold text-white mb-8">
                {plan.price}
              </p>

              <div className="space-y-4 mb-10 flex-1">

                {plan.features.map((feature, i) => (

                  <p
                    key={i}
                    className="text-zinc-300 text-lg"
                  >
                    ✅ {feature}
                  </p>

                ))}

              </div>

              <button
                onClick={() =>
                  subscribeToPlan(plan.name)
                }
                className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
              >
                Subscribe
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
