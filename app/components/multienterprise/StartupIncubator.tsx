"use client";

import { useState } from "react";

export default function StartupIncubator() {

  const [startup, setStartup] =

    useState<any>(null);

  async function incubate() {

    const res = await fetch(

      "/api/startup-incubator",

      {

        method: "POST",

      }

    );

    setStartup(await res.json());

  }

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        AI Startup Incubator

      </h2>

      <button

        onClick={incubate}

        className="bg-green-600 px-4 py-2 rounded"

      >

        Incubate Startup

      </button>

      {startup?.incubated && (

        <div className="mt-4 space-y-2">

          <div>

            <strong>Brand:</strong>

            {" "}

            {startup.startup.brandName}

          </div>

          <div>

            <strong>Business Model:</strong>

            {" "}

            {startup.startup.businessModel}

          </div>

          <div>

            <strong>First Product:</strong>

            {" "}

            {startup.startup.firstProduct}

          </div>

          <div>

            <strong>AI Agents:</strong>

            {" "}

            {startup.startup.assignedAgents}

          </div>

          <div>

            <strong>Budget:</strong>

            {" "}

            ${startup.startup.initialBudget}

          </div>

          <div>

            <strong>Stage:</strong>

            {" "}

            {startup.startup.stage}

          </div>

        </div>

      )}

    </div>

  );

}
