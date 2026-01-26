import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Бүх талбарыг бөглөнө үү" },
      { status: 400 }
    );
  }

  console.log("REGISTER:", { name, email });

  return NextResponse.json({
    message: "Амжилттай бүртгэгдлээ",
  });
}
