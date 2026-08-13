"use client";

export default function WelcomeBanner() {
  const user =
    JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="rounded-2xl bg-gradient-to-r from-cyan-700 to-blue-700 p-6 text-white">

      <h1 className="text-3xl font-bold">
        Welcome back
      </h1>

      <p className="mt-2">
        {user.email || "CEO"}
      </p>

      <p className="mt-4 text-sm opacity-80">
        Your AI business empire is running smoothly.
      </p>

    </div>
  );
}
