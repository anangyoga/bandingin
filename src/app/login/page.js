"use client";

import { loginWithGoogle } from "@/actions/auth/sign.google";

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-[280px] space-y-5 rounded-lg border text-center">
        <h1 className="font-bold">Login</h1>
        <form className="space-y-3">
          <div className="grid grid-cols-1 place-items-start">
            <label className="">Email</label>
            <input
              placeholder="email"
              className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
            ></input>
          </div>
          <div className="grid grid-cols-1 place-items-start">
            <label className="">Password</label>
            <input
              placeholder="password"
              className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
            ></input>
          </div>
          <button className="mx-auto flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-1/5">
            Login
          </button>
        </form>

        <button
          onClick={() => loginWithGoogle()}
          className="font-bold text-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
