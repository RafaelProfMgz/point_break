import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { hash } from "bcryptjs";

const schema = z.object({
  companyName: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = schema.parse(body);

    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "Email já cadastrado" },
        { status: 400 }
      );
    }
    const hashedPassword = await hash(data.password, 10);

    const result = await prisma.$transaction(async (tx: any) => {
      const company = await tx.company.create({
        data: { name: data.companyName },
      });

      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword,
          role: "ADMIN",
          companyId: company.id,
        },
      });
      return user;
    });

    return NextResponse.json(
      { success: true, userId: result.id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
