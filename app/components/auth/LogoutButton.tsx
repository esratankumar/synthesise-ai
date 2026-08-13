"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton(){

const router=useRouter();

function logout(){

localStorage.removeItem("auth_token");

localStorage.removeItem("user");

router.push("/login");

}

return(

<button

onClick={logout}

className="rounded-lg bg-red-600 px-4 py-2"

>

Logout

</button>

);

}
