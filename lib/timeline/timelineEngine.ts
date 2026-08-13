import { load, save } from "@/lib/storage/storageEngine";

export function addTimelineEvent(agent: string, action: string) {

  const timeline = load("timeline");

  timeline.unshift({

    id: Date.now().toString(),

    time: new Date().toLocaleTimeString(),

    agent,

    action

  });

  save("timeline", timeline);

}

export function getTimeline() {

  return load("timeline");

}
