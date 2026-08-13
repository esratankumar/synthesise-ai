import { load, save } from "@/lib/storage/storageEngine";

export function generateTasks() {

  const opportunities = load("opportunities");

  const tasks = opportunities.map((item: any) => ({

    id: Date.now().toString() + Math.random(),

    title: "Build " + item.name,

    agent: "Product Agent",

    priority:

      item.demand >= 90
        ? "HIGH"
        : item.demand >= 70
        ? "MEDIUM"
        : "LOW",

    status: "Pending"

  }));

  save("tasks", tasks);

  return tasks;

}

export function getTasks() {

  return load("tasks");

}
