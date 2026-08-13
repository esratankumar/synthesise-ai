"use client";

export default function QuickActions(){

async function startEmpire(){

await fetch("/api/empire/start");

alert("Business Loop Started");

}

return(

<div className="rounded-2xl bg-zinc-900 p-6">

<h2 className="text-xl font-bold">

Quick Actions

</h2>

<div className="mt-6 space-y-4">

<button

onClick={startEmpire}

className="w-full rounded-xl bg-blue-600 p-3"

>

Start Business Loop

</button>

<button

className="w-full rounded-xl bg-purple-600 p-3"

>

Generate Products

</button>

<button

className="w-full rounded-xl bg-green-600 p-3"

>

Publish Marketplace

</button>

</div>

</div>

);

}
