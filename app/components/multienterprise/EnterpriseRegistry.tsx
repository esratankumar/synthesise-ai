"use client";

import { useEffect, useState } from "react";

export default function EnterpriseRegistry() {

  const [portfolio, setPortfolio] = useState<any>(null);

  async function load() {

    const res = await fetch("/api/enterprise-registry");

    const data = await res.json();

    setPortfolio(data);

  }

  useEffect(() => {

    load();

    const timer = setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  if (!portfolio) return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Enterprise Registry

      </h2>

      <div className="mb-4">

        <strong>Total Portfolio Revenue:</strong>{" "}

        ${portfolio.totalRevenue}

      </div>

      <div className="space-y-3">

        {portfolio.enterprises.map((enterprise: any) => (

          <div

            key={enterprise.id}

            className="rounded-lg bg-zinc-800 p-3"

          >

            <div className="font-semibold">

              {enterprise.name}

            </div>

            <div>Status: {enterprise.status}</div>

            <div>Industry: {enterprise.industry}</div>

            <div>

              Monthly Revenue: ${enterprise.monthlyRevenue}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
