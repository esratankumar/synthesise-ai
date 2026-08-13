import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

const FILE = path.join(process.cwd(), "data", "messages.json");

export function sendMessage(
  from: string,
  to: string,
  type: string,
  content: string
) {
  let messages = [];

  try {
    messages = JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    messages = [];
  }

  messages.push({
    id: uuid(),
    from,
    to,
    type,
    content,
    timestamp: Date.now(),
  });

  fs.writeFileSync(FILE, JSON.stringify(messages, null, 2));
}

export function getMessages() {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    return [];
  }
}
