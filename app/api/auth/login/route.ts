import { NextResponse } from "next/server";

import { getUsers } from "@/lib/auth/userStorage";
import { verifyPassword } from "@/lib/auth/password";
import { signToken } from "@/lib/auth/jwt";

export async function POST(request: Request) {

  try {

    const { email, password } = await request.json();

    const users = getUsers();

    const user = users.find(
      (u: any) =>
        u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {

      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );

    }

    const valid = await verifyPassword(
      password,
      user.password
    );

    if (!valid) {

      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );

    }

    const token = signToken({

      id: user.id,

      email: user.email,

      role: user.role

    });

    return NextResponse.json({

      success: true,

      message: "Login successful.",

      token,

      user: {

        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role

      }

    });

  } catch (error) {

    return NextResponse.json(
      {
        message: "Login failed.",
        error: String(error)
      },
      { status: 500 }
    );

  }

}
