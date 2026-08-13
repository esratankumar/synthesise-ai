"use client";

export default function TopBar() {

  return (

    <div className="border-b border-zinc-800 bg-zinc-950 p-5 flex justify-between">

      <div className="font-bold text-2xl">

        Synthesise AI Enterprise

      </div>

      <input

        className="rounded-xl bg-zinc-900 px-5 py-2 w-96"

        placeholder="Search AI..."

      />

    </div>

  );

}
