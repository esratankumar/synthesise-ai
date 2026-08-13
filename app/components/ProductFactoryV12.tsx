"use client";

import { useEffect, useState } from "react";

export default function ProductFactoryV12() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/product-factory-v12")
      .then((r) => r.json())
      .then((d) => setData(d.product));
  }, []);

  if (!data)
    return <div>Loading V12...</div>;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold mb-4">
        ⚡ Product Factory V12
      </h2>

      <div className="text-xl font-semibold">
        {data.name}
      </div>

      <div className="mt-5">
        <h3 className="font-bold">
          Sales Page
        </h3>

        <div className="mt-2">
          {data.salesPage.headline}
        </div>

        <div className="text-zinc-400 mt-2">
          {data.salesPage.body}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-bold">
          WHOP Listing
        </h3>

        <div>
          {data.whop.description}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-bold">
          Launch Emails
        </h3>

        {data.emails.map(
          (email: any, index: number) => (
            <div
              key={index}
              className="mt-2 p-3 rounded-xl bg-zinc-800"
            >
              {email.subject}
            </div>
          )
        )}
      </div>

      <div className="mt-5">
        <h3 className="font-bold">
          Social Launch Assets
        </h3>

        <div className="mt-2">
          {data.social.twitter}
        </div>

        <div className="mt-2">
          {data.social.linkedin}
        </div>
      </div>

    </div>
  );
}
