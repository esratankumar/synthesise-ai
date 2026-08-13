"use client";

import { useEffect, useState } from "react";

export default function EnterpriseOS() {

  const [os, setOS] = useState<any>(null);

  async function load() {

    const res =
      await fetch("/api/enterprise-os");

    setOS(await res.json());

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  if (!os) return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-2xl font-bold mb-4">

        Enterprise Operating System

      </h2>

      <div>

        Status: {os.status}

      </div>

      <div>

        CEO Decision:

        {" "}

        {os.ceo.action}

      </div>

      <div>

        Top Trend:

        {" "}

        {os.trends.topTrend.niche}

      </div>

      <div>

        Total Revenue:

        {" "}

        {os.revenue.monthly}

      </div>

      <div>

        Enterprises:

        {" "}

        {os.portfolio.enterprises.length}

      </div>

      <div>

        Last Sync:

        {" "}

        {os.timestamp}

      </div>

    </div>

  );

}
