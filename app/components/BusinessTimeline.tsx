"use client";

import { useEffect, useState } from "react";

export default function BusinessTimeline() {

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {

    fetch("/api/timeline")
      .then(res => res.json())
      .then(data => {

        setEvents(data.timeline || []);

      });

  }, []);

  return (

    <div className="rounded-2xl bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">

        Business Loop Timeline

      </h2>

      <div className="mt-6 space-y-3 max-h-80 overflow-y-auto">

        {events.length === 0 ? (

          <p className="text-zinc-500">

            No events yet.

          </p>

        ) : (

          events.map((event) => (

            <div
              key={event.id}
              className="border-b border-zinc-700 pb-3"
            >

              <div className="text-sm text-zinc-500">

                {event.time}

              </div>

              <div className="font-semibold">

                {event.agent}

              </div>

              <div>

                {event.action}

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}
