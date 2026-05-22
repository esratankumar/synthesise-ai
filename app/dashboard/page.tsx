import Sidebar from "@/components/Sidebar";
export default function DashboardPage() {

  return (

<main className="min-h-screen bg-black text-white flex">

<Sidebar />

<div className="flex-1 p-10">
      <h1 className="text-6xl font-bold text-cyan-400 mb-6">
        AI Dashboard
      </h1>

      <p className="text-zinc-400 text-xl mb-10">
        Real-time AI business intelligence overview.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-8 rounded-3xl border border-cyan-500">
          <h2 className="text-zinc-400 mb-4">AI Opportunities</h2>
          <p className="text-5xl font-bold text-cyan-400">842</p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-green-500">
          <h2 className="text-zinc-400 mb-4">Trend Accuracy</h2>
          <p className="text-5xl font-bold text-green-400">97%</p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-purple-500">
          <h2 className="text-zinc-400 mb-4">Market Growth</h2>
          <p className="text-5xl font-bold text-purple-400">+340%</p>
        </div>

      </div>

    </div>

</main>

  );

}
