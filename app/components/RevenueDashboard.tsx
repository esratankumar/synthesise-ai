"use client";

import { useEffect, useState } from "react";

export default function RevenueDashboard() {

  const [revenue, setRevenue] = useState<any[]>([]);

  useEffect(() => {

    fetch("/api/storage")
      .then(res => res.json())
      .then(data => {
        setRevenue(data.revenue || []);
      });

  }, []);

  const total = revenue.reduce(
    (sum, item) => sum + (item.amount || 0),
    0
  );

  const topProduct =
    revenue.length > 0
      ? revenue.sort(
          (a, b) => (b.amount || 0) - (a.amount || 0)
        )[0]
      : null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6">

      <h2 className="text-xl font-bold">

        Revenue Analytics

      </h2>

      <div className="mt-6 space-y-3">

        <p>💵 Total Revenue</p>

        <p className="text-2xl font-bold">

          ${total.toLocaleString()}

        </p>

        <hr className="border-zinc-700"/>

        <p>📊 Revenue Records</p>

        <p>{revenue.length}</p>

        <hr className="border-zinc-700"/>

        <p>🏆 Top Product</p>

        <p>

          {topProduct
            ? topProduct.product
            : "No revenue yet"}

        </p>

        <hr className="border-zinc-700"/>

        <p className="text-green-400">

          Financial System Healthy

        </p>

      </div>

    </div>

  );

}
