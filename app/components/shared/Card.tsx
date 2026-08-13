"use client";

import { ReactNode } from "react";

interface CardProps {

title: string;

children: ReactNode;

}

export default function Card({

title,

children,

}: CardProps) {

return (

<div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

<h2 className="text-xl font-bold mb-5">

{title}

</h2>

{children}

</div>

);

}
