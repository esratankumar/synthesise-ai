"use client";

import { useEffect, useState } from "react";

export default function MarketingEngine() {

  const [campaigns, setCampaigns] =

    useState<any[]>([]);

  async function load() {

    const res =

      await fetch("/api/marketing-engine");

    const data =

      await res.json();

    setCampaigns(data.campaigns);

  }

  async function launch() {

    await fetch(

      "/api/marketing-engine",

      {

        method: "POST",

      }

    );

    load();

  }

  useEffect(() => {

    load();

    const timer =

      setInterval(load, 5000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Autonomous Marketing Engine

      </h2>

      <button

        onClick={launch}

        className="bg-pink-600 px-4 py-2 rounded"

      >

        Launch Campaign

      </button>

      <div className="mt-4 space-y-3">

        {campaigns.map((campaign) => (

          <div

            key={campaign.id}

            className="rounded-lg bg-zinc-800 p-3"

          >

            <div>

              <strong>{campaign.campaign}</strong>

            </div>

            <div>

              Platform: {campaign.platform}

            </div>

            <div>

              Audience: {campaign.audience}

            </div>

            <div>

              Status: {campaign.status}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}
