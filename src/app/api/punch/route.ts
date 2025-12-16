import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Batendo ponto para:", body.userId);

  return NextResponse.json({ success: true, message: "Ponto registrado!" });
}
