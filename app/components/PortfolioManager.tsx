"use client";

import { useEffect, useState } from "react";

export default function PortfolioManager() {

  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {

    fetch("/api/portfolio-manager")
      .then(r => r.json())
      .then(data => setPortfolio(data.portfolio));

  }, []);

  return (

    <div className="rounded-3xl bg-zinc-900 p-6">

      <h2 className="text-2xl font-bold mb-5">
        📊 AI Portfolio Manager
      </h2>

      <div className="grid gap-4">

        {portfolio.map((item:any,index) => (

          <div
            key={index}
            className="rounded-xl border border-zinc-800 p-4"
          >

            <div className="font-semibold">
              {item.name}
            </div>

            <div>
              Revenue Score:
              {" "}
              {item.revenueScore}
            </div>

            <div>
              Monthly Revenue:
              {" "}
              ${item.monthlyRevenue}
            </div>

            <div className="font-bold text-green-400">
              {item.action}
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
