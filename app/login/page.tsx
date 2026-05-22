"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    if (email && password) {

      localStorage.setItem("user", email);

      router.push("/dashboard");

    }

  };

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">

      <div className="bg-zinc-900 border border-cyan-500 rounded-3xl p-10 w-full max-w-xl">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8 text-center">
          SYNTHESISE AI
        </h1>

        <p className="text-zinc-400 text-center mb-10">
          Login to your AI intelligence platform
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 mb-6 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-cyan-500 rounded-2xl px-6 py-4 mb-8 text-white outline-none"
        />

        <button
          onClick={login}
          className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold py-4 rounded-2xl"
        >
          Login
        </button>

      </div>

    </main>

  );

}
