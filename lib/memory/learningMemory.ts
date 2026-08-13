export interface MemoryRecord {

  id: string;

  action: string;

  outcome: string;

  score: number;

  timestamp: string;

}

const memory: MemoryRecord[] = [];

export function remember(record: Omit<MemoryRecord, "id">) {

  memory.unshift({

    id: Date.now().toString(),

    ...record,

  });

  if (memory.length > 1000) {

    memory.pop();

  }

}

export function getMemory() {

  return memory;

}

export function getBestActions() {

  return [...memory]

    .sort((a, b) => b.score - a.score)

    .slice(0, 10);

}
