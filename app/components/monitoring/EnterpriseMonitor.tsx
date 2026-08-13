"use client";

import { useEffect, useState } from "react";

export default function EnterpriseMonitor() {

  const [status, setStatus] = useState<any>(null);

  async function load() {

    const res =
      await fetch("/api/monitoring");

    const data =
      await res.json();

    setStatus(data.monitoring);

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  if (!status)
    return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Enterprise Monitoring

      </h2>

      <div className="space-y-2 text-sm">

        <div>Health: {status.health}</div>

        <div>Recovery Records: {status.modules.recovery}</div>

        <div>Performance Records: {status.modules.performance}</div>

        <div>Memory Records: {status.modules.memory}</div>

        <div>Activity Events: {status.modules.activity}</div>

        <div>

          Uptime:

          {" "}

          {Math.round(status.uptime)}

          s

        </div>

        <div>

          Updated:

          {" "}

          {status.timestamp}

        </div>

      </div>

    </div>

  );

}
