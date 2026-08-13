"use client";

import { useEffect, useState } from "react";

export default function StrategicPlanner() {

  const [strategy, setStrategy] = useState<any>(null);

  async function load() {

    const res =
      await fetch("/api/strategy");

    const data =
      await res.json();

    setStrategy(data.strategy);

  }

  useEffect(() => {

    load();

    const timer =
      setInterval(load, 30000);

    return () => clearInterval(timer);

  }, []);

  if (!strategy) return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        AI CEO Strategic Plan

      </h2>

      <p>

        <strong>Objective:</strong>

        {" "}

        {strategy.objective}

      </p>

      <h3 className="mt-4 font-semibold">

        Next 30 Days

      </h3>

      <ul className="list-disc ml-5">

        {strategy.next30Days.map(

          (item:string,index:number)=>

            <li key={index}>{item}</li>

        )}

      </ul>

      <h3 className="mt-4 font-semibold">

        Next Quarter

      </h3>

      <ul className="list-disc ml-5">

        {strategy.nextQuarter.map(

          (item:string,index:number)=>

            <li key={index}>{item}</li>

        )}

      </ul>

      <div className="mt-4">

        <strong>Recommendation:</strong>

        {" "}

        {strategy.recommendation}

      </div>

      <div>

        <strong>AI Confidence:</strong>

        {" "}

        {strategy.confidence}

      </div>

    </div>

  );

}
