"use client";

import { useEffect, useState } from "react";

export default function StartupStudio() {

  const [studio,setStudio] = useState<any>(null);

  useEffect(()=>{

    fetch("/api/startup-studio")
      .then(r=>r.json())
      .then(setStudio);

  },[]);

  if(!studio){

    return (
      <div className="p-4">
        Loading Startup Studio...
      </div>
    );

  }

  return(

    <div className="rounded-3xl bg-zinc-900 p-6">

      <h2 className="text-3xl font-bold mb-6">

        🚀 Autonomous Startup Studio

      </h2>

      <div className="text-green-400 mb-6">

        Status: {studio.status}

      </div>

      <div className="space-y-4">

        {

          studio.workflow.map(

            (step:any,index:number)=>(

              <div
                key={index}
                className="rounded-xl border border-zinc-800 p-4"
              >

                <div className="font-semibold">

                  {step.agent}

                </div>

                <div className="text-zinc-400">

                  {step.output}

                </div>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}
