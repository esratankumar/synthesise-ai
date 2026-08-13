"use client";

import { useState } from "react";

export default function CEOCommandPanel() {

  const [result, setResult] = useState("");

  async function execute(command: string) {

    const res = await fetch("/api/enterprise-action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command }),
    });

    const data = await res.json();

if(data.generated){

  setResult(

`${data.result}

Product:
${data.generated.title}

Niche:
${data.generated.niche}

Revenue:
$${data.generated.revenue}

Score:
${data.generated.score}

${data.recommendation}`

  );

}else{

  setResult(
    data.result +
    " • " +
    data.timestamp
  );

}
  }

  const commands = [
    "Start Business Loop",
    "Generate Product",
    "Scan Trends",
    "Optimize Revenue",
    "Run AI Reasoning",
    "Refresh Knowledge Graph",
  ];

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">
        CEO Command Panel
      </h2>

      <div className="grid gap-3 md:grid-cols-2">

        {commands.map((command) => (
          <button
            key={command}
            onClick={() => execute(command)}
            className="rounded-lg bg-blue-600 px-4 py-3 hover:bg-blue-500"
          >
            {command}
          </button>
        ))}

      </div>

      {result && (
        <div className="mt-6 rounded-lg bg-zinc-800 p-4 text-green-400">
          {result}
        </div>
      )}

    </div>
  );
}
