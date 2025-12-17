import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "sua-chave-secreta-super-segura";

async function getUserFromToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    return decoded.userId;
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  const userId = await getUserFromToken();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const lastPunch = await prisma.punch.findFirst({
      where: { userId },
      orderBy: { timestamp: "desc" },
    });

    let newType = "ENTRY";
    if (lastPunch && lastPunch.type === "ENTRY") {
      newType = "EXIT";
    }

    const punch = await prisma.punch.create({
      data: {
        userId,
        type: newType,
        timestamp: new Date(),
      },
    });

    return NextResponse.json({ success: true, punch });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao bater ponto" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const userId = await getUserFromToken();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const punches = await prisma.punch.findMany({
    where: {
      userId,
      timestamp: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    orderBy: { timestamp: "desc" },
  });

  return NextResponse.json(punches);
}
