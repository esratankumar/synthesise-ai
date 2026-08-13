"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

const router = useRouter();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");

  async function login(){

    const res = await fetch("/api/auth/login",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        email,
        password
      })

    });

    const data = await res.json();

if (data.token) {

  localStorage.setItem(
    "auth_token",
    data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(data.user)
  );

  setMessage("Login successful!");

  router.push("/dashboard");

} else {

  setMessage(data.message);

}
  }

  return(

<div className="min-h-screen flex items-center justify-center bg-black text-white">

<div className="w-full max-w-md rounded-2xl bg-zinc-900 p-8">

<h1 className="text-3xl font-bold mb-6">

Login

</h1>

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
onClick={login}
className="w-full p-3 rounded bg-blue-600"
>

Login

</button>

<p className="mt-6 text-green-400">

{message}

</p>


</div>

</div>

);

}
