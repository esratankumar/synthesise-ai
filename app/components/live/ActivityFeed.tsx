"use client";

import { useEffect, useState } from "react";

interface Activity {
  type: string;
  message: string;
  timestamp: string;
}

export default function ActivityFeed() {
  const [feed, setFeed] = useState<Activity[]>([]);

  async function loadActivity() {
    const res = await fetch("/api/activity-feed");
    const data = await res.json();

    setFeed(data);
  }

  useEffect(() => {
    loadActivity();

    const timer = setInterval(loadActivity, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        Live Activity Feed
      </h2>

      <div className="space-y-3">

        {feed.length === 0 ? (
          <p className="text-zinc-400">
            Waiting for enterprise events...
          </p>
        ) : (
          feed.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-zinc-800 p-3"
            >
              <div className="text-xs text-cyan-400">
                {new Date(item.timestamp).toLocaleTimeString()}
              </div>

              <div className="text-sm font-semibold">
                {item.type}
              </div>

              <div className="text-sm">
                {item.message}
              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
}
