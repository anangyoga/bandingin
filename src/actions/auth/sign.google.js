"use server";

import { google } from "@/lib/arctic";
import { generateState, generateCodeVerifier } from "arctic";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginWithGoogle() {
  // Generate state & codeVerifier
  const state = generateState();
  const codeVerifier = generateCodeVerifier();

  // Match Code
  cookies().set("codeVerifier", codeVerifier);

  // url authorization
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  // redirect user to Google URL authorization
  redirect(url.href);
}
