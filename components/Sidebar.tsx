import Link from "next/link";

export default function Sidebar() {

  return (

    <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 min-h-screen">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        SYNTHESISE AI
      </h1>

      <nav className="space-y-4">

        <Link
          href="/dashboard"
          className="block bg-zinc-900 hover:bg-cyan-500 hover:text-black transition p-4 rounded-2xl"
        >
          🚀 Dashboard
        </Link>

        <Link
          href="/trends"
          className="block bg-zinc-900 hover:bg-cyan-500 hover:text-black transition p-4 rounded-2xl"
        >
          📈 Trends
        </Link>

        <Link
          href="/startups"
          className="block bg-zinc-900 hover:bg-cyan-500 hover:text-black transition p-4 rounded-2xl"
        >
          💰 Startups
        </Link>

        <Link
          href="/tools"
          className="block bg-zinc-900 hover:bg-cyan-500 hover:text-black transition p-4 rounded-2xl"
        >
          🤖 AI Tools
        </Link>

        <Link
          href="/profile"
          className="block bg-zinc-900 hover:bg-cyan-500 hover:text-black transition p-4 rounded-2xl"
        >
          👤 Profile
        </Link>

      </nav>

    </aside>

  );

}
