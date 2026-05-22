"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function ProfilePage() {

  const [user, setUser] = useState("");

  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(savedUser);
    }

  }, []);

  return (

    <main className="min-h-screen bg-black text-white flex">

      <Sidebar />
      <ThemeToggle />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          User Profile
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Manage your SYNTHESISE AI account.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-10 max-w-3xl">

          <div className="mb-8">

            <h2 className="text-2xl text-cyan-400 font-bold mb-2">
              Email Address
            </h2>

            <p className="text-zinc-300 text-lg">
              {user || "No user logged in"}
            </p>

          </div>

          <div className="mb-8">

            <h2 className="text-2xl text-cyan-400 font-bold mb-2">
              Membership
            </h2>

            <p className="text-green-400 text-lg">
              Premium AI Explorer
            </p>

          </div>

          <div className="mb-8">

            <h2 className="text-2xl text-cyan-400 font-bold mb-2">
              AI Activity
            </h2>

            <p className="text-zinc-300 text-lg">
              Active AI trend researcher and startup explorer.
            </p>

          </div>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            className="bg-red-500 hover:bg-red-400 transition text-black font-bold px-8 py-4 rounded-2xl"
          >
            Logout
          </button>

        </div>

      </div>

    </main>

  );

}
