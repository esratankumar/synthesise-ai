import { load } from "./storageEngine";

export function query(
  collection: string,
  options?: {
    search?: string;
    field?: string;
    sort?: string;
    page?: number;
    limit?: number;
  }
) {
  let data = load(collection);

if (options?.search && options?.field) {

const field = options.field;
const search = options.search.toLowerCase();

data = data.filter((item: any) =>
  String(item[field] ?? "")
    .toLowerCase()
    .includes(search)
);
}
  if (options?.sort) {
    data.sort((a: any, b: any) => {
      if (a[options.sort!] > b[options.sort!]) return 1;
      if (a[options.sort!] < b[options.sort!]) return -1;
      return 0;
    });
  }

  const total = data.length;

  const page = options?.page ?? 1;
  const limit = options?.limit ?? 20;

  const start = (page - 1) * limit;

  return {
    total,
    page,
    limit,
    results: data.slice(start, start + limit),
  };
}
