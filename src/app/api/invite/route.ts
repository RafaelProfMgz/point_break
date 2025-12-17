import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { z } from "zod";
import crypto from "crypto";
import { Resend } from "resend";
import { InviteEmail } from "@/components/emails/InviteEmail";

const JWT_SECRET = process.env.JWT_SECRET || "sua-chave-secreta";
const resend = new Resend(process.env.RESEND_API_KEY);

const inviteSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET) as { companyId: string };
    const { email } = inviteSchema.parse(await req.json());

    const company = await prisma.company.findUnique({
      where: { id: decoded.companyId },
    });

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return NextResponse.json(
        { error: "Usuário já possui conta." },
        { status: 400 }
      );
    }

    const inviteExists = await prisma.invite.findFirst({
      where: { email, companyId: decoded.companyId },
    });
    if (inviteExists) {
      return NextResponse.json(
        { error: "Convite já enviado anteriormente." },
        { status: 400 }
      );
    }

    const inviteToken = crypto.randomUUID();

    await prisma.invite.create({
      data: {
        email,
        token: inviteToken,
        companyId: decoded.companyId,
      },
    });

    const origin = new URL(req.url).origin;
    const inviteLink = `${origin}/join/${inviteToken}`;

    const data = await resend.emails.send({
      from: "Point Break <onboarding@resend.dev>",
      to: email,
      subject: `Convite para ${company?.name || "Point Break"}`,
      react: InviteEmail({ inviteLink, companyName: company?.name || "" }),
    });

    if (data.error) {
      return NextResponse.json(
        { error: "Erro ao enviar e-mail" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Convite enviado por e-mail!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
