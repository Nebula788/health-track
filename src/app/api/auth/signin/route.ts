import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "test@test.com" && password === "123456") {
    return NextResponse.json({ message: "OK" });
  }

  return NextResponse.json(
    { message: "Имэйл эсвэл нууц үг буруу" },
    { status: 401 }
  );
}
