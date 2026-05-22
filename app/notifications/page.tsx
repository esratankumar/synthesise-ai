"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect, useState } from "react";

export default function NotificationsPage() {

  const [notifications, setNotifications] =
    useState<string[]>([]);

  useEffect(() => {

    const savedNotifications =
      localStorage.getItem("notifications");

    if (savedNotifications) {

      setNotifications(
        JSON.parse(savedNotifications)
      );

    } else {

      const defaultNotifications = [

        "🚀 New AI startup trend detected",
        "📈 AI market demand increased by 34%",
        "🔥 Viral AI opportunity discovered",
        "🧠 AI assistant generated new insights",

      ];

      setNotifications(defaultNotifications);

      localStorage.setItem(
        "notifications",
        JSON.stringify(defaultNotifications)
      );

    }

  }, []);

  const deleteNotification = (index: number) => {

    const updatedNotifications =
      notifications.filter((_, i) => i !== index);

    setNotifications(updatedNotifications);

    localStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );

  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Notifications
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Stay updated with AI intelligence alerts.
        </p>

        <div className="space-y-6">

          {notifications.map((notification, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >

              <div>

                <h2 className="text-2xl font-bold text-cyan-400">
                  {notification}
                </h2>

              </div>

              <button
                onClick={() =>
                  deleteNotification(index)
                }
                className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-6 py-3 rounded-2xl"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}
