import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user || user.role !== "admin") {
    return new Response("Unauthorized", { status: 401 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return new Response("Unauthorized", { status: 401 });
  }

  const session = await prisma.session.create({
    data: {
      userId: user.id,
    },
  });

  (await cookies()).set("sessionId", session.id);

  return new Response("Success", { status: 200 });
}
