"use client";

import { useState } from "react";

export default function Register() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");

  async function register(){

    const res=await fetch("/api/auth/register",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        name,
        email,
        password
      })

    });

    const data=await res.json();

    setMessage(data.message);

  }

  return(

<div className="min-h-screen flex items-center justify-center bg-black text-white">

<div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8">

<h1 className="text-3xl font-bold mb-6">

Create Account

</h1>

<input
className="w-full p-3 mb-4 rounded bg-zinc-800"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="w-full p-3 mb-4 rounded bg-zinc-800"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="w-full p-3 mb-6 rounded bg-zinc-800"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={register}
className="w-full p-3 rounded bg-blue-600"
>

Register

</button>

<p className="mt-6 text-green-400">

{message}

</p>

</div>

</div>

);

}
