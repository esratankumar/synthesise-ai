"use client";

import { useEffect, useState } from "react";

export default function MultiAgentEmpire() {

const [data,setData] = useState<any>(null);

useEffect(() => {

fetch("/api/agents")
.then(res => res.json())
.then(setData);

}, []);

if(!data)
return (
<div className="p-4">
Loading Agents...
</div>
);

return (

<div className="rounded-3xl bg-zinc-900 p-6">

<h2 className="text-2xl font-bold mb-4">
👑 Multi-Agent Empire System
</h2>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

{data.agents.map(
(agent:any,index:number)=>(
<div
key={index}
className="rounded-2xl border border-zinc-800 p-4"
>

<div className="font-semibold">
{agent.name}
</div>

<div className="text-green-400">
{agent.status}
</div>

<div className="text-zinc-400 text-sm mt-2">
{agent.task}
</div>

</div>
))
}

</div>

</div>

);

}
