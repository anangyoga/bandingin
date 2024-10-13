import { cookies } from "next/headers";
import { google } from "@/lib/arctic";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const codeVerifier = (await cookies()).get("codeVerifier")?.value;

  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });

  const userData = await res.json();

  const findUser = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (findUser) {
    const session = await prisma.session.create({
      data: {
        userId: findUser.id,
      },
    });

    (await cookies()).set("sessionId", session.id);
    redirect("/bandingin");
  }

  const newUser = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      role: "user",
    },
  });

  const session = await prisma.session.create({
    data: {
      userId: newUser.id,
    },
  });

  (await cookies()).set("sessionId", session.id);
  redirect("/bandingin");
}
