"use client";

import Sidebar from "./Sidebar";

import TopBar from "./TopBar";

import Footer from "./Footer";

export default function EnterpriseShell({

children,

}:{

children:React.ReactNode;

}){

return(

<div className="flex min-h-screen bg-black text-white">

<Sidebar/>

<div className="flex-1 flex flex-col">

<TopBar/>

<div className="flex-1 p-8">

{children}

</div>

<Footer/>

</div>

</div>

);

}
