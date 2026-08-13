"use client";
import { useEffect, useState } from "react";
import OpportunityDetector from "./OpportunityDetector";
import OpportunityGenerator from "./OpportunityGenerator";
import TrendIntelligence from "./TrendIntelligence";
import RevenueDashboard from "./RevenueDashboard";
import BusinessBuilder from "./BusinessBuilder";
import ProductGenerator from "./ProductGenerator";
import ProductGeneratorV7 from "./ProductGeneratorV7";
import ProductFactoryV8 from "./ProductFactoryV8";
import ProductFactoryV9 from "./ProductFactoryV9";
import ProductFactoryV10 from "./ProductFactoryV10";
import ProductFactoryV11 from "./ProductFactoryV11";
import ProductFactoryV12 from "./ProductFactoryV12";
import ProductFactoryV13 from "./ProductFactoryV13";
import ProductFactoryV14 from "./ProductFactoryV14";
import ProductFactoryV15 from "./ProductFactoryV15";
import ProductFactoryV16 from "./ProductFactoryV16";
import ProductFactoryV17 from "./ProductFactoryV17";
import PortfolioManager from "./PortfolioManager";
import RevenueOptimizer from "./RevenueOptimizer";
import BusinessOperator from "./BusinessOperator";
import MultiAgentEmpire from "./MultiAgentEmpire";
import StartupStudio from "./StartupStudio";
import ProductExporter from "./ProductExporter";
import ExportAssets from "./ExportAssets";
import EnterpriseDashboard from "./dashboard/EnterpriseDashboard";

export default function NewsFeed() {
const [news, setNews] = useState([]);
const [loading, setLoading] = useState(true);

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

useEffect(() => {
loadNews();

const interval = setInterval(
  loadNews,
  60000
);

return () => clearInterval(interval);

}, []);

return (
<div className="space-y-8 p-6">

  {/* HERO */}

  <div className="rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-8">
    <h1 className="text-4xl font-bold">
      Synthesise AI Intelligence Hub
    </h1>

    <p className="mt-3 text-lg text-white/90">
      Discover AI breakthroughs, startups,
      funding rounds, research papers and
      emerging opportunities in real-time.
    </p>

    <input
      placeholder="Search AI news, startups, tools..."
      className="mt-6 w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 outline-none"
    />
  </div>

  {/* STATS */}

  <div className="grid md:grid-cols-4 gap-4">

    <div className="rounded-2xl bg-zinc-900 p-5">
      <div className="text-zinc-400 text-sm">
        Live Articles
      </div>
      <div className="text-3xl font-bold">
        {news.length}
      </div>
    </div>

    <div className="rounded-2xl bg-zinc-900 p-5">
      <div className="text-zinc-400 text-sm">
        AI Startups
      </div>
      <div className="text-3xl font-bold">
        120+
      </div>
    </div>

    <div className="rounded-2xl bg-zinc-900 p-5">
      <div className="text-zinc-400 text-sm">
        Funding Deals
      </div>
      <div className="text-3xl font-bold">
        35+
      </div>
    </div>

    <div className="rounded-2xl bg-zinc-900 p-5">
      <div className="text-zinc-400 text-sm">
        AI Tools
      </div>
      <div className="text-3xl font-bold">
        500+
      </div>
    </div>

  </div>

  {/* CATEGORIES */}

  <div className="flex gap-3 overflow-x-auto">

    {[
      "AI Models",
      "AI Agents",
      "Startups",
      "Funding",
      "Research",
      "Video AI",
      "Open Source",
      "Enterprise AI",
    ].map((item) => (
      <button
        key={item}
        className="rounded-full bg-zinc-800 px-4 py-2 whitespace-nowrap"
      >
        {item}
      </button>
    ))}

  </div>

  {/* TRENDING STARTUPS */}

  {/* LIVE NEWS */}

<div>
  <h2 className="text-2xl font-bold mb-4">
    🚀 Trending AI Startups
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    {[
      "OpenAI",
      "Anthropic",
      "Perplexity",
      "Mistral",
      "Runway",
      "Cohere",
    ].map((startup) => (
      <div
        key={startup}
        className="rounded-2xl bg-zinc-900 p-5 border border-zinc-800"
      >
        <div className="font-semibold">
          {startup}
        </div>

        <div className="text-zinc-400 text-sm mt-2">
          Trending AI Company
        </div>
      </div>
    ))}

  </div>
</div>
 
<div>
  <OpportunityDetector />
  <OpportunityGenerator />
<ProductGenerator />
<ProductGeneratorV7 />
<ProductFactoryV8 />
<ProductFactoryV9 />
<ProductFactoryV10 />
<ProductFactoryV11 />
<ProductFactoryV12 />
<ProductFactoryV13 />
<ProductFactoryV14 />
<ProductFactoryV15 />
<ProductFactoryV16 />
<ProductFactoryV17 />
<PortfolioManager />
  <TrendIntelligence />
  <RevenueDashboard />
<BusinessOperator />
<MultiAgentEmpire />
<StartupStudio />
<ExportAssets />
<ProductExporter />
<RevenueOptimizer />
<BusinessBuilder />
<EnterpriseDashboard />

<h2 className="text-2xl font-bold mb-4">
      Live AI News Feed
    </h2>
    {loading && (
      <div className="text-zinc-400">
        Loading...
</div>
    )}

    {!loading && (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

        {news.map((item: any, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:bg-zinc-800 transition"
          >
            <div className="text-xs text-zinc-500">
              {new URL(item.url)
                .hostname
                .replace("www.", "")}
            </div>

            <div className="font-semibold mt-2">
              {item.title}
            </div>

            <div className="text-sm text-zinc-400 mt-3">
              {item.content?.slice(0, 180)}
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-3 py-2 rounded-xl bg-white text-black"
            >
              Read Article →
            </a>
          </div>
        ))}

      </div>
    )}

  </div>

</div>

);
}
