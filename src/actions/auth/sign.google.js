"use server";

import { google } from "@/lib/arctic";
import { generateState, generateCodeVerifier } from "arctic";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginWithGoogle() {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  (await cookies()).set("codeVerifier", codeVerifier);

  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  redirect(url.href);
}
