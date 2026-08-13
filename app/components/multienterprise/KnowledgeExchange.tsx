"use client";

import { useEffect, useState } from "react";

export default function KnowledgeExchange() {

  const [knowledge, setKnowledge] =

    useState<any[]>([]);

  async function load() {

    const res =
      await fetch("/api/knowledge-exchange");

    const data =
      await res.json();

    setKnowledge(data.knowledge);

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Cross-Enterprise Knowledge Sharing

      </h2>

      {knowledge.length === 0 ? (

        <p>No shared knowledge yet.</p>

      ) : (

        knowledge.map((item, index) => (

          <div

            key={index}

            className="rounded-lg bg-zinc-800 p-3 mb-3"

          >

            <div>

              <strong>

                {item.source}

              </strong>

              {" → "}

              <strong>

                {item.target}

              </strong>

            </div>

            <div>

              Topic: {item.topic}

            </div>

            <div>

              {item.insight}

            </div>

            <div className="text-xs text-zinc-400">

              {item.timestamp}

            </div>

          </div>

        ))

      )}

    </div>

  );

}
