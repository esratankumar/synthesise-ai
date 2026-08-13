"use client";

import UserMenu from "./UserMenu";

interface Props {
  onMenu: () => void;
}

export default function MobileHeader({ onMenu }: Props) {
  return (
    <header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">

      <button
        onClick={onMenu}
        className="text-2xl"
      >
        ☰
      </button>

      <h1 className="font-bold text-xl text-cyan-400">
        Synthesise AI
      </h1>

<UserMenu />
    </header>
  );
}
