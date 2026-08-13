"use client";

import { useState } from "react";

export default function EnterpriseCreator() {

  const [result, setResult] = useState<any>(null);

  async function createEnterprise() {

    const res = await fetch(

      "/api/create-enterprise",

      {

        method: "POST",

      }

    );

    const data = await res.json();

    setResult(data.result);

  }

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Autonomous Enterprise Creation

      </h2>

      <button

        onClick={createEnterprise}

        className="bg-blue-600 px-4 py-2 rounded"

      >

        Generate Enterprise

      </button>

      {result && (

        <div className="mt-4">

          <div>

            Created:

            {" "}

            {String(result.created)}

          </div>

          <div>

            Enterprise:

            {" "}

            {result.enterprise?.name}

          </div>

          <div>

            Status:

            {" "}

            {result.enterprise?.status}

          </div>

        </div>

      )}

    </div>

  );

}
