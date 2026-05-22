"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function AssistantPage() {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
const [history, setHistory] = useState<string[]>([]);

  const askAI = () => {

    const query = question.toLowerCase();

    if (query.includes("youtube")) {

      setResponse(`
🎥 AI YOUTUBE AUTOMATION

• Faceless Shorts Channels
• AI Voiceovers
• Viral AI Content
• Automation Pipelines

💰 Monetization:
- Adsense
- Sponsorships
- Affiliate Marketing

🔥 Trend Score: 9.6/10
      `);
setHistory((prev) => [
  ...prev,
  `🤖 AI: ${question}`,
]);

    }

    else if (query.includes("startup")) {

      setResponse(`
🚀 AI STARTUP IDEAS

• AI Automation Agency
• AI Resume Builder
• AI Healthcare Platform
• AI Influencer System

📈 Market Potential:
Extremely High

💰 Revenue Potential:
$10K-$100K/month
      `);
setHistory((prev) => [
  ...prev,
  `🤖 AI: ${question}`,
]);
    }

    else if (query.includes("money")) {

      setResponse(`
💸 AI MONEY OPPORTUNITIES

• AI SaaS
• Digital Products
• AI Consulting
• Affiliate Marketing
• AI Automation Services

🔥 Fastest Growing Industry in 2026
      `);
setHistory((prev) => [
  ...prev,
  `🤖 AI: ${question}`,
]);
    }

    else {

      setResponse(`
🤖 SYNTHESISE AI ANALYSIS

AI detected strong opportunity in:
${question}

📈 Trend Potential: High
💰 Monetization: Strong
🚀 Growth Forecast: Explosive
      `);
setHistory((prev) => [
  ...prev,
  `🤖 AI: ${question}`,
]);
    }
setHistory((prev) => [
  ...prev,
  `🧠 USER: ${question}`,
]);
  };

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          AI Assistant
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Ask SYNTHESISE AI about trends, startups, business ideas, and opportunities.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8">

          <input
            type="text"
            placeholder="Ask SYNTHESISE AI..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 text-white outline-none mb-6"
          />

          <button
            onClick={askAI}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Analyze
          </button>
{history.length > 0 && (

  <div className="mb-8 bg-zinc-900 border border-cyan-500 rounded-3xl p-6">

    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
      AI Memory
    </h2>

    <div className="space-y-3">

      {history.map((item, index) => (

        <div
          key={index}
          className="text-zinc-300 border-b border-zinc-700 pb-2"
        >
          {item}
        </div>

      ))}

    </div>

  </div>

)}

          {response && (

            <div className="mt-10 bg-black border border-cyan-500 rounded-3xl p-8">

              <pre className="whitespace-pre-wrap text-lg leading-relaxed text-zinc-200">
                {response}
              </pre>

            </div>

          )}

        </div>

      </div>

    </main>

  );

}
