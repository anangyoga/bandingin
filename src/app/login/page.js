"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { loginWithGoogle } from "@/actions/auth/sign.google";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/login/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      redirect("/admin");
    } else {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <main className="flex h-screen items-center justify-center bg-[#4440FF] px-3">
      <div className="flex w-full flex-col gap-3 rounded-lg border p-5 text-center sm:w-[385px]">
        <h1 className="text-lg font-semibold text-white">
          Welcome to Bandingin
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 pb-2.5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-start gap-1">
              <label className="text-sm text-white">Email</label>
              <input
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-md border px-2 py-1 text-sm outline-none placeholder:text-sm placeholder:text-slate-400"
              ></input>
            </div>
            <div className="flex flex-col items-start gap-1">
              <label className="text-sm text-white">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-md border px-2 py-1 text-sm outline-none placeholder:text-sm placeholder:text-slate-400"
              ></input>
            </div>
          </div>
          <button className="mx-auto flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:opacity-90 focus:bg-gray-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            Login
          </button>
        </form>

        <Link
          href={"/register"}
          className="text-sm font-semibold text-white focus:font-bold focus:outline-none"
        >
          Not a user? Register your email.
        </Link>

        <hr />

        <button
          onClick={() => loginWithGoogle()}
          className="text-sm font-semibold text-white focus:font-bold focus:outline-none"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
