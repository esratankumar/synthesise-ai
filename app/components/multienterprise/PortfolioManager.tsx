"use client";

import { useEffect, useState } from "react";

export default function PortfolioManager() {

  const [portfolio, setPortfolio] =

    useState<any>(null);

  async function load() {

    const res =
      await fetch("/api/portfolio");

    const data =
      await res.json();

    setPortfolio(data.portfolio);

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  if (!portfolio) return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Enterprise Portfolio Manager

      </h2>

      <div className="mb-4">

        <strong>

          Total Portfolio Revenue

        </strong>

        {" "}

        ${portfolio.totalRevenue}

      </div>

      {portfolio.enterprises.map(

        (enterprise: any) => (

          <div

            key={enterprise.id}

            className="rounded-lg bg-zinc-800 p-3 mb-3"

          >

            <div className="font-semibold">

              {enterprise.name}

            </div>

            <div>

              Revenue:

              ${enterprise.monthlyRevenue}

            </div>

            <div>

              Health:

              {enterprise.health}%

            </div>

            <div>

              AI Priority:

              {enterprise.priority}

            </div>

          </div>

        )

      )}

    </div>

  );

}
