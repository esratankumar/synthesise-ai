"use client";

import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  url: string;
  content?: string;
  score?: number;
};
export default function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  loadNews();

  const interval = setInterval(
    loadNews,
    300000
  );

  return () => clearInterval(interval);
}, []);
  async function loadNews() {
    try {
      const res = await fetch("/api/news-feed");

      const data = await res.json();

      setNews(data.news || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

return (
  <div className="space-y-6">

    {/* HERO */}
    <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-6">
      <h1 className="text-3xl font-bold">
        AI Intelligence Hub
      </h1>

      <p className="text-zinc-100 mt-2">
        Real-time AI news, startups, funding, research and breakthroughs.
      </p>

      <input
        placeholder="Search AI news..."
        className="mt-4 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none"
      />
    </div>

    {/* CATEGORIES */}
    <div className="flex gap-2 overflow-x-auto pb-2">
      {[
        "AI Models",
        "AI Agents",
        "Startups",
        "Funding",
        "Video AI",
        "Research",
      ].map((cat) => (
        <button
          key={cat}
          className="px-4 py-2 rounded-full bg-zinc-800 text-sm whitespace-nowrap"
        >
          {cat}
        </button>
      ))}
    </div>

    {/* LOADING */}
    {loading && (
      <div className="text-zinc-400">
        Loading AI news...
      </div>
    )}

    {/* NEWS GRID */}
    {!loading && (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

        {news.map((item: any, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 hover:bg-zinc-800 transition"
          >
            <div className="text-xs text-zinc-400 mb-2">
              {new URL(item.url).hostname.replace("www.", "")}
            </div>

            <div className="font-semibold text-white mb-2">
              {item.title}
            </div>

            <div className="text-sm text-zinc-400 mb-4">
              {item.content?.slice(0, 180)}
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-black text-sm"
            >
              Open Article →
            </a>
          </div>
        ))}

      </div>
    )}

  </div>
);

}
