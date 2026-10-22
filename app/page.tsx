
"use client";

import { useState, type FormEvent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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
    category: "CREATOR ECONOMY",
    desc: "Create and manage virtual influencers for brands and online businesses.",
    score: "96%",
    icon: "🎭",
    color: "text-cyan-300",
    border: "border-cyan-400/20",
  },
  {
    title: "Faceless YouTube Automation",
    category: "CONTENT SYSTEMS",
    desc: "Build video content workflows using scripting, voiceovers and editing tools.",
    score: "94%",
    icon: "▶️",
    color: "text-emerald-300",
    border: "border-emerald-400/20",
  },
  {
    title: "AI SaaS Platforms",
    category: "SOFTWARE",
    desc: "Solve a specific customer problem with a focused AI-powered application.",
    score: "98%",
    icon: "⚡",
    color: "text-fuchsia-300",
    border: "border-fuchsia-400/20",
  },
  {
    title: "AI Digital Products",
    category: "DIGITAL COMMERCE",
    desc: "Develop ebooks, templates, guides and useful downloadable resources.",
    score: "93%",
    icon: "💎",
    color: "text-amber-300",
    border: "border-amber-400/20",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateResponse = async (event?: FormEvent) => {
    event?.preventDefault();

    const prompt = search.trim();

    if (!prompt) {
      setError("Please enter a question first.");
      setAnswer("");
      return;
    }

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || `Request failed (${response.status}).`
        );
      }

      if (
        typeof data.result !== "string" ||
        !data.result.trim()
      ) {
        throw new Error("The AI returned an empty response.");
      }

      setAnswer(data.result);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050711] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-2xl shadow-lg shadow-cyan-500/10">
              ◈
            </div>
            <div>
              <h1 className="text-xl font-black tracking-[0.12em] sm:text-2xl">
                SYNTHESISE <span className="text-cyan-300">AI</span>
              </h1>
              <p className="text-xs text-slate-400">
                INTELLIGENCE FOR YOUR NEXT MOVE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-300 sm:self-auto">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            AI WORKSPACE
          </div>
        </header>

        <section className="py-10 sm:py-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Discover. Analyse. Build.
          </p>
          <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            Turn emerging trends into{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              real opportunities.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore AI business concepts, evaluate potential markets and
            create practical action plans with your AI research assistant.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm text-slate-400">Opportunity Library</p>
            <p className="mt-3 text-3xl font-black">842</p>
            <p className="mt-2 text-xs text-cyan-300">
              Curated demo opportunities
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm text-slate-400">Trend Accuracy</p>
            <p className="mt-3 text-3xl font-black">97%</p>
            <p className="mt-2 text-xs text-violet-300">
              Illustrative demo metric
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm text-slate-400">Market Growth</p>
            <p className="mt-3 text-3xl font-black">+340%</p>
            <p className="mt-2 text-xs text-emerald-300">
              Illustrative demo metric
            </p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-cyan-400/20 bg-[#0b1020]/90 p-5 shadow-2xl shadow-cyan-950/20 sm:p-7">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                ✳
              </div>
              <div>
                <h3 className="text-xl font-bold">Ask SYNTHESISE AI</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Get a tailored answer from the AI assistant.
                </p>
              </div>
            </div>

            <form onSubmit={generateResponse}>
              <label
                htmlFor="ai-question"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                What would you like to discover?
              </label>

              <textarea
                id="ai-question"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Example: Give me exactly 3 AI business ideas I can start with free tools. Explain customers, monetisation, first steps and risks."
                rows={5}
                maxLength={6000}
                disabled={loading}
                className="w-full resize-y rounded-2xl border border-white/10 bg-[#050711] p-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-60"
              />

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  {search.length}/6000 characters
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-bold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Analysing..." : "✦ Analyse Opportunity"}
                </button>
              </div>
            </form>

            {loading && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300" />
                <p className="text-sm text-cyan-200">
                  SYNTHESISE AI is preparing your response...
                </p>
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-400/30 bg-red-400/5 p-4"
              >
                <p className="font-semibold text-red-300">
                  Request unsuccessful
                </p>
                <p className="mt-2 break-words text-sm leading-6 text-red-200">
                  {error}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Check your API configuration or try again.
                </p>
              </div>
            )}

            {answer && (
              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-[#070b16] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="text-lg">✦</span>
                  <h4 className="font-bold text-cyan-200">
                    AI Analysis
                  </h4>
                </div>
                <div className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-200">
                  {answer}
                </div>
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                Intelligence overview
              </p>
              <h3 className="mt-2 text-xl font-bold">Trend Analytics</h3>
              <p className="mt-2 text-sm text-slate-400">
                Sample trend index for dashboard demonstration.
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trendData}
                  margin={{ top: 10, right: 8, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="#ffffff"
                    strokeOpacity={0.07}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#64748b"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#64748b"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0b1020",
                      border: "1px solid #334155",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                    labelStyle={{ color: "#67e8f9" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    name="Sample trend index"
                    stroke="#22d3ee"
                    strokeWidth={3}
                    dot={{ fill: "#22d3ee", r: 4 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold">How to read this chart</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                These are sample values, not verified live market data.
                Real trend research can be added through connected data
                sources.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Explore the landscape
              </p>
              <h3 className="mt-2 text-2xl font-black">
                AI Opportunity Radar
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Example ideas and illustrative scores
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ideas.map((idea) => (
              <article
                key={idea.title}
                className={`rounded-2xl border ${idea.border} bg-white/[0.035] p-5 transition duration-200 hover:-translate-y-1 hover:bg-white/[0.06]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
                    {idea.icon}
                  </div>
                  <span
                    className={`rounded-full border border-white/10 px-3 py-1 text-sm font-bold ${idea.color}`}
                  >
                    {idea.score}
                  </span>
                </div>

                <p className="mt-5 text-[10px] font-bold tracking-[0.2em] text-slate-500">
                  {idea.category}
                </p>
                <h4 className="mt-2 text-lg font-bold">{idea.title}</h4>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
                  {idea.desc}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSearch(
                      `Analyse the business opportunity "${idea.title}". Explain the target customers, monetisation methods, free tools, first three steps, competition, and key risks.`
                    )
                  }
                  className={`mt-5 w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-cyan-300/40 hover:bg-cyan-300/5 ${idea.color}`}
                >
                  Prepare analysis →
                </button>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 py-6 text-center">
          <p className="text-sm font-bold tracking-[0.15em] text-slate-300">
            SYNTHESISE <span className="text-cyan-300">AI</span>
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Business intelligence workspace · Validate opportunities
            before investing time or money.
          </p>
        </footer>
      </div>
    </main>
  );
}