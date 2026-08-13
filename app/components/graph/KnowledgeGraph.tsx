"use client";

import { useEffect, useState } from "react";

export default function KnowledgeGraph() {

  const [graph, setGraph] = useState<any[]>([]);
const [lastUpdate, setLastUpdate] = useState("");
  const [stats, setStats] = useState<any>(null);

async function loadGraph() {
  await fetch("/api/graph/auto");

  const res = await fetch("/api/graph");
  const data = await res.json();

  setGraph(data.graph);
  setLastUpdate(new Date().toLocaleTimeString());
}

useEffect(() => {
  loadGraph();

  const timer = setInterval(() => {
    loadGraph();
  }, 5000);

  return () => clearInterval(timer);
}, []);

  return (

    <div className="rounded-2xl bg-zinc-900 p-6">

      <h2 className="text-2xl font-bold mb-4">
        Live Enterprise Knowledge Graph
      </h2>

      {stats && (

        <div className="mb-6 grid grid-cols-3 gap-4">

          <div className="rounded-lg bg-zinc-800 p-3">
            <div className="text-xs text-zinc-400">Nodes</div>
            <div className="text-xl font-bold">
              {stats.totalNodes}
            </div>
          </div>

          <div className="rounded-lg bg-zinc-800 p-3">
            <div className="text-xs text-zinc-400">Relations</div>
            <div className="text-xl font-bold">
              {stats.totalRelations}
            </div>
          </div>

          <div className="rounded-lg bg-zinc-800 p-3">
            <div className="text-xs text-zinc-400">Last Update</div>
          <div className="text-white font-bold">
           {lastUpdate || "--"}
           </div>
          </div>

        </div>

      )}

      <div className="space-y-2">

        {graph.map((edge, index) => (

          <div
           key={`${edge.id}-${index}`}
            className="rounded-lg bg-zinc-800 p-3"
          >

            <span className="font-semibold text-cyan-400">
              {edge.from}
            </span>

            {"  →  "}

            <span className="text-yellow-400">
              {edge.relation}
            </span>

            {"  →  "}

            <span className="font-semibold text-green-400">
              {edge.to}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}
