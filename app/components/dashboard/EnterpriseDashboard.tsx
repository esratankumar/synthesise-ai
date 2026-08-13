"use client";

import Sidebar from "../layout/Sidebar";

import TopBar from "../layout/TopBar";

import DashboardCard from "../shared/DashboardCard";

export default function EnterpriseDashboard(){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 p-8 space-y-8">

<TopBar/>

<div className="grid md:grid-cols-4 gap-5">

<DashboardCard

title="AI Trends"

value="126"

/>

<DashboardCard

title="Products"

value="42"

/>

<DashboardCard

title="Revenue"

value="$18k"

/>

<DashboardCard

title="Portfolio"

value="12 Assets"

/>

</div>

</div>

</div>

);

}
