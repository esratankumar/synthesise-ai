"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useState } from "react";

export default function PushPage() {

  const [permission, setPermission] =
    useState("default");

  const requestPermission = async () => {

    const result =
      await Notification.requestPermission();

    setPermission(result);

  };

const sendNotification = async (
  title: string,
  body: string
) => {

  if (
    Notification.permission === "granted"
  ) {

    try {

      if ("serviceWorker" in navigator) {

        const registration =
          await navigator.serviceWorker.getRegistration();

        if (registration) {

          registration.showNotification(
            title,
            { body }
          );

        } else {

          alert(title + "\n\n" + body);

        }

      } else {

        alert(title + "\n\n" + body);

      }

    } catch (error) {

      alert(title + "\n\n" + body);

    }

  } else {

    alert("Notification permission not enabled.");

  }

};
  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Push Notification System
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Send real-time AI alerts and business intelligence notifications.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-10 mb-16">

          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            Notification Permission
          </h2>

          <p className="text-2xl text-white mb-8">
            Status:
            <span className="text-green-400 font-bold">
              {" "}{permission}
            </span>
          </p>

          <button
            onClick={requestPermission}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Enable Notifications
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-green-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-400 mb-4">
              Trend Alert
            </h2>

            <p className="text-zinc-300 text-lg mb-8">
              Notify users about viral startup trends.
            </p>

            <button
              onClick={() =>
                sendNotification(
                  "🚀 Startup Trend Alert",
                  "AI automation startups are growing rapidly."
                )
              }
              className="bg-green-500 hover:bg-green-400 transition text-black font-bold px-8 py-4 rounded-2xl w-full"
            >
              Send Alert
            </button>

          </div>

          <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Revenue Alert
            </h2>

            <p className="text-zinc-300 text-lg mb-8">
              Notify users about business revenue growth.
            </p>

            <button
              onClick={() =>
                sendNotification(
                  "💰 Revenue Update",
                  "Your AI business revenue increased by 28%."
                )
              }
              className="bg-purple-500 hover:bg-purple-400 transition text-black font-bold px-8 py-4 rounded-2xl w-full"
            >
              Send Alert
            </button>

          </div>

          <div className="bg-zinc-900 border border-yellow-500 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              AI Agent Alert
            </h2>

            <p className="text-zinc-300 text-lg mb-8">
              Notify users about autonomous AI activity.
            </p>

            <button
              onClick={() =>
                sendNotification(
                  "🤖 AI Agent Activated",
                  "Marketing Agent completed automation tasks."
                )
              }
              className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-8 py-4 rounded-2xl w-full"
            >
              Send Alert
            </button>

          </div>

        </div>

      </div>

    </main>

  );

}
