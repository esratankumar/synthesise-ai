"use client";

import EnterpriseStatus from "../components/EnterpriseStatus";

import LogoutButton from "../components/auth/LogoutButton";

import QuickActions from "../components/QuickActions";

import BusinessTimeline from "../components/BusinessTimeline";

import KnowledgeGraphViewer from "../components/KnowledgeGraphViewer";

import RevenueDashboard from "../components/RevenueDashboard";

import CEODashboard from "../components/CEODashboard";

import AgentMonitor from "../components/AgentMonitor";

import Sidebar from "../components/layout/Sidebar";

import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function ControlCenter(){

return(

<div className="flex min-h-screen bg-black text-white">

<Sidebar/>

<div className="flex-1 p-8">

<h1 className="text-4xl font-bold">

Enterprise Control Center

</h1>

<p className="text-zinc-400 mt-2">

Synthesise AI Enterprise 6.0

</p>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

<AgentMonitor/>

<CEODashboard/>

<RevenueDashboard/>

<KnowledgeGraphViewer/>

<Card title="Tasks"/>

<Card title="Products"/>

<Card title="Marketplace"/>

<BusinessTimeline/>

</div>

<div className="grid md:grid-cols-2 gap-6 mt-8">

<EnterpriseStatus/>

<QuickActions/>

</div>

</div>

</div>

);

}

function Card({

title

}:{title:string}){

return(

<div className="rounded-2xl bg-zinc-900 p-6">

<h2 className="text-xl font-semibold">

{title}

</h2>

<div className="flex justify-end mb-6">

<LogoutButton/>

</div>

<p className="text-zinc-500 mt-4">

Loading...

</p>

</div>

);

}
