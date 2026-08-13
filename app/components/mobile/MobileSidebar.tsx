"use client";

import Link from "next/link";

const menu = [
  "Dashboard",
  "Assistant",
  "Trends",
  "Products",
  "Revenue",
  "Portfolio",
  "Marketplace",
  "Settings",
];

interface Props {
  open: boolean;
  close: () => void;
}

export default function MobileSidebar({
  open,
  close,
}: Props) {

  if (!open) return null;

  return (

<div className="fixed inset-0 bg-black/60 z-50">

<div className="w-72 h-full bg-zinc-950 p-6">

<div className="flex justify-between mb-8">

<h2 className="text-cyan-400 font-bold text-xl">
Synthesise AI
</h2>

<button onClick={close}>
✕
</button>

</div>

<div className="space-y-4">

{menu.map(item=>(

<Link

key={item}

href={"/"+item.toLowerCase()}

onClick={close}

className="block rounded-xl bg-zinc-900 p-4"

>

{item}

</Link>

))}

</div>

</div>

</div>

);

}
