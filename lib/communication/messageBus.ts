export interface AgentMessage {
  from: string;
  to: string;
  type: string;
  content: string;
  timestamp: number;
}

const messages: AgentMessage[] = [];

export function sendMessage(
  from: string,
  to: string,
  type: string,
  content: string
) {
  messages.push({
    from,
    to,
    type,
    content,
    timestamp: Date.now(),
  });
}

export function getMessages() {
  return messages;
}

export function getMessagesForAgent(agent: string) {
  return messages.filter(
    (m) => m.to === agent || m.to === "all"
  );
}

export function clearMessages() {
  messages.length = 0;
}
