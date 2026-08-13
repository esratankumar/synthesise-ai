import { NextResponse } from "next/server";

import {

generateTasks,

getTasks

} from "@/lib/tasks/taskPrioritizer";

export async function POST(){

  generateTasks();

  return NextResponse.json({

    success:true

  });

}

export async function GET(){

  return NextResponse.json({

    tasks:getTasks()

  });

}
