export interface MemoryItem {
  id: string;
  type: string;
  content: string;
  timestamp: number;
}

const memoryStore: MemoryItem[] = [];

export function remember(
  type: string,
  content: string
) {
  memoryStore.push({
    id: Date.now().toString(),
    type,
    content,
    timestamp: Date.now(),
  });
}

export function recall() {
  return memoryStore;
}

export function recallByType(type: string) {
  return memoryStore.filter(
    (item) => item.type === type
  );
}

export function clearMemory() {
  memoryStore.length = 0;
}
