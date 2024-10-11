"use client";

import { loginWithGoogle } from "@/actions/auth/sign.google";

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center px-3">
      <div className="flex w-full flex-col gap-3 rounded-lg border p-5 text-center sm:w-[385px]">
        <h1 className="text-lg font-semibold">Welcome to Bandingin</h1>
        <form className="space-y-3 pb-2.5">
          {/* Untuk layouting elemen kecil-kecilan kaya Form cukup pakai Flexbox. Untuk layouting halaman, baru pakai Grid */}
          <div className="flex flex-col items-start gap-1">
            <label className="text-sm">Email</label>
            <input
              required
              placeholder="Email"
              className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
            ></input>
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="text-sm">Password</label>
            <input
              required
              placeholder="Password"
              className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
            ></input>
          </div>
          <button className="mx-auto flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            Login
          </button>
        </form>
        <hr />
        {/* NOTE: kalau cuma button, gak perlu pake Form. Cukup button aja, nanti pakai onClick. dan harus jadi Client Component jadi di atas ada 'use client'. Di dalam onClick, panggil functionnya harus pakai ()=> namaFunction(). Kalau langsung namaFunction kaya di action, dia bakal Error. */}
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
