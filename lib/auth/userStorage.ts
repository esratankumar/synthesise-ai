import fs from "fs";
import path from "path";

const FILE = path.join(process.cwd(), "storage", "users.json");

export function getUsers() {

  if (!fs.existsSync(FILE)) {

    fs.writeFileSync(FILE, "[]");

  }

  return JSON.parse(

    fs.readFileSync(FILE, "utf8")

  );

}

export function saveUsers(users: any[]) {

  fs.writeFileSync(

    FILE,

    JSON.stringify(users, null, 2)

  );

}
