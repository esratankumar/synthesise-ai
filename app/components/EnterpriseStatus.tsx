"use client";

import { useEffect, useState } from "react";

export default function EnterpriseStatus(){

const [status,setStatus]=useState("Starting...");

const [time,setTime]=useState("");

useEffect(()=>{

setStatus("Enterprise Running");

setTime(new Date().toLocaleString());

},[]);

return(

<div className="rounded-2xl bg-green-900 p-6">

<h2 className="text-2xl font-bold">

Enterprise Status

</h2>

<p className="mt-4">

Status

</p>

<p className="text-green-300">

{status}

</p>

<p className="mt-4">

Last Update

</p>

<p>

{time}

</p>

</div>

);

}
