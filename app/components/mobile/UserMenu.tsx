"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function logout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-cyan-600 text-white font-bold"
      >
        AI
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-zinc-900 shadow-lg border border-zinc-700 z-50">

          <button
            className="w-full text-left px-4 py-3 hover:bg-zinc-800"
          >
            Profile
          </button>

          <button
            className="w-full text-left px-4 py-3 hover:bg-zinc-800"
          >
            Settings
          </button>

          <button
            onClick={logout}
            className="w-full text-left px-4 py-3 text-red-500 hover:bg-zinc-800"
          >
            Logout
          </button>

        </div>
      )}
    </div>
  );
}
