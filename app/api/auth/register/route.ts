import { NextResponse } from "next/server";

import { getUsers, saveUsers } from "@/lib/auth/userStorage";
import { hashPassword } from "@/lib/auth/password";

export async function POST(request: Request) {

  try {

    const { name, email, password } = await request.json();

    if (!name || !email || !password) {

      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );

    }

    const users = getUsers();

    const exists = users.find(
      (u: any) =>
        u.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {

      return NextResponse.json(
        { message: "Email already exists." },
        { status: 409 }
      );

    }

    const hashedPassword = await hashPassword(password);

    users.push({

      id: Date.now().toString(),

      name,

      email,

      password: hashedPassword,

      role: "user",

      createdAt: new Date().toISOString()

    });

    saveUsers(users);

    return NextResponse.json({

      success: true,

      message: "Account created successfully."

    });

  } catch (error) {

    return NextResponse.json(
      {
        message: "Registration failed.",
        error: String(error)
      },
      { status: 500 }
    );

  }

}
