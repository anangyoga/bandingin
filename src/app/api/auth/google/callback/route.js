import { cookies } from "next/headers";
import { google } from "@/lib/arctic";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function GET(req) {
  // search any query params
  const { searchParams } = new URL(req.url);
  // code from google
  const code = searchParams.get("code");
  // codeVerifier from cookies
  const codeVerifier = cookies().get("codeVerifier")?.value;

  // validate the codeVerifier and code => jwt (accesToken)
  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  // get user info
  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      // KEY
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });

  const userData = await res.json();

  //check if user exist in our DB
  const findUser = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  // if exist create sessionId
  if (findUser) {
    const session = await prisma.session.create({
      data: {
        userId: findUser.id,
      },
    });

    // save session to cookies
    cookies().set("sessionId", session.id);
    redirect("/"); // move to homepage ("/home")
  }

  // if not exist create user
  const newUser = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      role: "user",
    },
  });

  // create session Id
  const session = await prisma.session.create({
    data: {
      userId: newUser.id,
    },
  });

  // save session to cookies
  cookies().set("sessionId", session.id);
  redirect("/"); // move to homepage ("/home")
}
