"use client";

export default function DashboardCard({

title,

value,

}:{

title:string;

value:string;

}){

return(

<div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

<div className="text-zinc-400">

{title}

</div>

<div className="text-3xl font-bold mt-3">

{value}

</div>

</div>

);

}
