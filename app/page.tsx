"use client";

import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {

  const [search, setSearch] = useState("");
  const [typingText, setTypingText] = useState("");
  const [loading, setLoading] = useState(false);

  const typeText = (text: string) => {

    let index = 0;

    setTypingText("");

    const interval = setInterval(() => {

      setTypingText((prev) => prev + text.charAt(index));

      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setLoading(false);
      }

    }, 20);

  };

  const generateResponse = () => {

    const query = search.toLowerCase();

    setLoading(true);

    if (query.includes("startup")) {

      typeText(`
🚀 TOP AI STARTUP IDEAS FOR 2026

1. AI Influencer Agency
🔥 Trend Score: 96%

2. Faceless YouTube Automation
🔥 Trend Score: 94%

3. AI SaaS Platforms
🔥 Trend Score: 98%

💰 Monetization:
Subscriptions, SaaS, Automation Services

🌎 Best Platforms:
YouTube, TikTok, Whop, Gumroad

⚡ Conclusion:
This niche has massive future growth potential.
`);

    }

    else if (query.includes("youtube")) {

      typeText(`
🎥 YOUTUBE AUTOMATION OPPORTUNITY

• Faceless Shorts
• AI Voiceovers
• Viral Storytelling
• Automated Editing

🔥 Growth Potential: Exploding
💰 Monetization Potential: Very High
`);

    }

    else if (query.includes("money")) {

      typeText(`
💸 AI MONEY OPPORTUNITIES

• AI SaaS
• Affiliate Marketing
• AI Content Agency
• AI Automation Services

📈 Profitability Score: 9.8/10
`);

    }

    else {

      typeText(`
⚡ SYNTHESISE AI detected a high-growth market opportunity with strong future scalability.
`);

    }

  };

  const trendData = [
    { month: "Jan", score: 20 },
    { month: "Feb", score: 35 },
    { month: "Mar", score: 50 },
    { month: "Apr", score: 70 },
    { month: "May", score: 90 },
    { month: "Jun", score: 120 },
  ];

  const ideas = [
    {
      title: "AI Influencer Agency",
      desc: "AI-generated influencers are becoming billion-dollar assets.",
      score: "96%",
      color: "text-cyan-400",
    },
    {
      title: "Faceless YouTube Automation",
      desc: "AI automation is scaling YouTube channels globally.",
      score: "94%",
      color: "text-green-400",
    },
    {
      title: "AI SaaS Platforms",
      desc: "Subscription-based AI software is dominating markets.",
      score: "98%",
      color: "text-fuchsia-400",
    },
    {
      title: "AI Digital Products",
      desc: "AI ebooks and prompt products are exploding worldwide.",
      score: "93%",
      color: "text-yellow-400",
    },
  ];

  return (

    <main className="min-h-screen bg-black text-white flex">

      <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 hidden md:flex flex-col">

        <h1 className="text-3xl font-bold text-cyan-400 mb-10">
          SYNTHESISE AI
        </h1>

        <nav className="space-y-4">

          <div className="bg-zinc-900 p-4 rounded-2xl">
            🚀 AI Dashboard
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            📈 Trend Intelligence
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            💰 Startup Ideas
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            🤖 AI Automation
          </div>

        </nav>

      </aside>

      <section className="flex-1 p-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-6xl font-bold text-cyan-400 mb-4">
            SYNTHESISE AI
          </h1>

          <p className="text-zinc-400 text-xl mb-10">
            Futuristic AI-powered business intelligence platform.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="bg-zinc-900 border border-cyan-500 p-8 rounded-3xl">
              <h2 className="text-zinc-400 mb-4">AI Opportunities</h2>
              <p className="text-5xl font-bold text-cyan-400">842</p>
            </div>

            <div className="bg-zinc-900 border border-green-500 p-8 rounded-3xl">
              <h2 className="text-zinc-400 mb-4">Trend Accuracy</h2>
              <p className="text-5xl font-bold text-green-400">97%</p>
            </div>

            <div className="bg-zinc-900 border border-purple-500 p-8 rounded-3xl">
              <h2 className="text-zinc-400 mb-4">Market Growth</h2>
              <p className="text-5xl font-bold text-purple-400">+340%</p>
            </div>

          </div>

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-12">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Ask SYNTHESISE AI
            </h2>

            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Ask about startups, YouTube, money..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none"
              />

              <button
                onClick={generateResponse}
                className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-2xl"
              >
                Analyze
              </button>

            </div>

            {(loading || typingText) && (

              <div className="mt-8 bg-black border border-zinc-700 rounded-2xl p-6">

                {loading ? (

                  <p className="text-cyan-400 text-xl animate-pulse">
                    SYNTHESISE AI is analyzing global trends...
                  </p>

                ) : (

                  <p className="text-zinc-200 text-lg leading-relaxed whitespace-pre-line">
                    {typingText}
                  </p>

                )}

              </div>

            )}

          </div>

          <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8 mb-12">

            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              AI Trend Analytics
            </h2>

            <div className="w-full h-[320px]">

            <ResponsiveContainer width="100%" height={320}>

                <LineChart data={trendData}>

                  <XAxis dataKey="month" stroke="#ffffff" />

                  <YAxis stroke="#ffffff" />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#06b6d4"
                    strokeWidth={4}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {ideas.map((idea, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >

                <h2 className="text-3xl font-bold mb-4">
                  {idea.title}
                </h2>

                <p className="text-zinc-400 text-lg leading-8 mb-6">
                  {idea.desc}
                </p>

                <p className={`text-2xl font-bold ${idea.color}`}>
                  Opportunity Score: {idea.score}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}
