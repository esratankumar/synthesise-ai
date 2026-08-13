"use client";

import Link from "next/link";

const menu = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Assistant", href: "/assistant" },
  { name: "Trends", href: "/trends" },
  { name: "Products", href: "/products" },
  { name: "Revenue", href: "/revenue" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Settings", href: "/settings" },
  { name: "Control Center", href:"/control-center" },
];

export default function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-8">
        Synthesise AI
      </h1>

      <nav className="space-y-3">

        {menu.map((item) => (

          <Link
            key={item.name}
            href={item.href}
            className="block rounded-xl bg-zinc-900 p-4 hover:bg-zinc-800 transition"
          >

            {item.name}

          </Link>

        ))}

      </nav>

    </div>
  );
}
