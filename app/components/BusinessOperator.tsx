"use client";

import { useEffect, useState } from "react";

export default function BusinessOperator() {

const [data,setData] = useState<any>(null);

useEffect(() => {

fetch("/api/business-operator")
.then(res => res.json())
.then(setData);

}, []);

if(!data)
return <div>Loading Operator...</div>;

return (

<div className="rounded-3xl bg-zinc-900 p-6">

<h2 className="text-2xl font-bold mb-4">
🤖 Autonomous Business Operator
</h2>

<div className="text-green-400 text-xl mb-6">
Monthly Revenue:
${data.monthlyRevenue.toLocaleString()}
</div>

<div className="grid gap-4">

{data.decisions.map(
(item:any,index:number)=>(

<div
key={index}
className="rounded-xl bg-zinc-800 p-4"
>

<div className="font-semibold">
{item.product}
</div>

<div className="text-blue-400">
Action:
{item.action}
</div>

<div className="text-zinc-400">
{item.reason}
</div>

</div>

))
}

</div>

</div>

);

}
