"use client";

import { useState } from "react";

export default function BusinessLauncher() {

  const [business, setBusiness] =

    useState<any>(null);

  async function launch() {

    const res = await fetch(

      "/api/business-launch",

      {

        method: "POST",

      }

    );

    setBusiness(await res.json());

  }

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Autonomous Business Launch

      </h2>

      <button

        onClick={launch}

        className="bg-purple-600 px-4 py-2 rounded"

      >

        Launch Business

      </button>

      {business?.launched && (

        <div className="mt-4 space-y-2">

          <div>

            <strong>Company:</strong>

            {" "}

            {business.company}

          </div>

          <div>

            <strong>Product:</strong>

            {" "}

            {business.product}

          </div>

          <div>

            <strong>Marketing:</strong>

            {" "}

            {business.marketing}

          </div>

          <div>

            <strong>Revenue:</strong>

            {" "}

            {business.revenue}

          </div>

          <div>

            <strong>AI Agents:</strong>

            {" "}

            {business.agents}

          </div>

          <div>

            <strong>Status:</strong>

            {" "}

            {business.status}

          </div>

        </div>

      )}

    </div>

  );

}
