const memory: string[] = [];

export function remember(text: string) {

  memory.push(text);

}

export function recall() {

  return memory;

}
