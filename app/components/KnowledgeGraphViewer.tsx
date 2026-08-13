"use client";

import { useEffect, useState } from "react";

export default function KnowledgeGraphViewer() {

  const [graph, setGraph] = useState<any[]>([]);

  useEffect(() => {

    fetch("/api/graph")
      .then(res => res.json())
      .then(data => {
        setGraph(data.graph || []);
      });

  }, []);

  return (

    <div className="rounded-2xl bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">

        Knowledge Graph

      </h2>

      <div className="mt-6">

        <p>

          🔗 Total Relations: {graph.length}

        </p>

        <p className="text-green-400 mt-2">

          Graph Healthy

        </p>

      </div>

      <div className="mt-6 space-y-3 max-h-72 overflow-y-auto">

        {graph.length === 0 ? (

          <p className="text-zinc-500">

            No relationships yet.

          </p>

        ) : (

          graph.map((edge: any) => (

            <div
              key={edge.id}
              className="border-b border-zinc-700 pb-2"
            >

              <div>

                <strong>{edge.from}</strong>

              </div>

              <div className="text-blue-400">

                ↓ {edge.relation} ↓

              </div>

              <div>

                <strong>{edge.to}</strong>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}
