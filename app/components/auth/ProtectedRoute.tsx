"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({

children,

}:{

children:React.ReactNode;

}){

const router=useRouter();

const [allowed,setAllowed]=useState(false);

useEffect(()=>{

const token=localStorage.getItem("auth_token");

if(!token){

router.replace("/login");

return;

}

setAllowed(true);

},[router]);

if(!allowed){

return(

<div className="min-h-screen flex items-center justify-center">

Loading...

</div>

);

}

return<>{children}</>;

}
