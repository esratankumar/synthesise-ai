import fs from "fs";
import path from "path";

const STORAGE = path.join(process.cwd(), "storage");

function file(collection: string) {
  return path.join(STORAGE, `${collection}.json`);
}

export function load(collection: string) {
  try {
    return JSON.parse(
      fs.readFileSync(file(collection), "utf8")
    );
  } catch {
    return [];
  }
}

export function save(collection: string, data: any[]) {
  fs.writeFileSync(
    file(collection),
    JSON.stringify(data, null, 2)
  );
}

export function insert(collection: string, item: any) {
  const data = load(collection);

  data.push({
    ...item,
    id: Date.now().toString(),
  });

  save(collection, data);

  return item;
}

export function remove(collection: string, id: string) {
  const data = load(collection);

  save(
    collection,
    data.filter((x: any) => x.id !== id)
  );
}
