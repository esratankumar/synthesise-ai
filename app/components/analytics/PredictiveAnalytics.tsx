"use client";

import { useEffect, useState } from "react";

export default function PredictiveAnalytics() {

  const [prediction, setPrediction] = useState<any>(null);

  async function loadPrediction() {

    const res =
      await fetch("/api/predictive-analytics");

    const data =
      await res.json();

    setPrediction(data.prediction);

  }

  useEffect(() => {

    loadPrediction();

    const timer =
      setInterval(loadPrediction, 5000);

    return () => clearInterval(timer);

  }, []);

  if (!prediction) return null;

  return (

    <div className="rounded-2xl bg-zinc-900 p-6 mt-6">

      <h2 className="text-xl font-bold mb-4">

        Predictive Enterprise Analytics

      </h2>

      <div className="space-y-2 text-sm">

        <div>
          Predicted Revenue:
          {" "}
          {prediction.predictedRevenue}
        </div>

        <div>
          Growth:
          {" "}
          {prediction.businessGrowth}
        </div>

        <div>
          Enterprise Health:
          {" "}
          {prediction.enterpriseHealth}
        </div>

        <div>
          AI Confidence:
          {" "}
          {prediction.aiConfidence}
        </div>

        <div>
          Recommendation:
          {" "}
          {prediction.recommendation}
        </div>

      </div>

    </div>

  );

}
