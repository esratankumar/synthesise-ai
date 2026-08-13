export interface EnterpriseEvent {
  type: string;
  message: string;
  payload?: any;
  timestamp: string;
}

const events: EnterpriseEvent[] = [];

export function publish(event: EnterpriseEvent) {
  events.unshift(event);

  if (events.length > 100) {
    events.pop();
  }
}

export function getEvents() {
  if (events.length === 0) {
    publish({
      type: "system",
      message: "Synthesise AI Enterprise started successfully.",
      timestamp: new Date().toLocaleTimeString(),
    });

    publish({
      type: "trend",
      message: "Trend Agent discovered a new AI opportunity.",
      timestamp: new Date().toLocaleTimeString(),
    });

    publish({
      type: "revenue",
      message: "Revenue Engine optimized monthly forecast.",
      timestamp: new Date().toLocaleTimeString(),
    });

    publish({
      type: "product",
      message: "Product Factory generated a new AI product.",
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  return events;
}
