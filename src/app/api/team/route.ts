import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "sua-chave-secreta-super-segura";

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET) as { companyId: string };
    const companyId = decoded.companyId;

    const users = await prisma.user.findMany({
      where: { companyId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    const invites = await prisma.invite.findMany({
      where: { companyId, status: "PENDING" },
    });

    const activeMembers = users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      status: "active",
      avatar: u.name.substring(0, 2).toUpperCase(),
    }));

    const pendingMembers = invites.map((i) => ({
      id: i.id,
      name: "Convidado",
      email: i.email,
      role: "USER",
      status: "invited",
      avatar: "?",
    }));

    return NextResponse.json([...activeMembers, ...pendingMembers]);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar time" }, { status: 500 });
  }
}
