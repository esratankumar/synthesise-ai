"use client";

import { useEffect, useState } from "react";

interface Notification {
  time: string;
  event: string;
}

export default function EnterpriseNotifications() {
  const [notification, setNotification] =
    useState<Notification | null>(null);

  async function loadNotification() {
    const res = await fetch("/api/activity-feed");
    const data = await res.json();

    setNotification(data);
  }

  useEffect(() => {
    loadNotification();

    const timer = setInterval(loadNotification, 5000);

    return () => clearInterval(timer);
  }, []);

  if (!notification) return null;

  return (
    <div className="rounded-xl border border-cyan-500 bg-cyan-950 p-4 mb-6">

      <div className="flex items-center justify-between">

        <div>

          <div className="font-semibold text-cyan-300">
            Enterprise Notification
          </div>

          <div className="mt-1 text-sm text-white">
            {notification.event}
          </div>

        </div>

        <div className="text-xs text-cyan-400">
          {notification.time}
        </div>

      </div>

    </div>
  );
}
