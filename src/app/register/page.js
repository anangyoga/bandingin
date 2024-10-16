import Navigation from "@/components/Navigation";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="flex h-screen flex-col bg-[#4440FF] text-white">
      <Navigation title={"Bandingin"} url={"/login"} urlName={"Login"} />
      <section className="flex h-screen items-center justify-center bg-[#4440FF] px-3">
        <div className="flex w-full flex-col gap-3 rounded-lg border p-5 text-center sm:w-[385px]">
          <h1 className="text-lg font-semibold text-white">Register</h1>

          <form className="flex flex-col gap-5 pb-2.5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-start gap-1">
                <label className="text-sm text-white">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border px-2 py-1 text-sm text-black outline-none placeholder:text-sm placeholder:text-slate-400"
                ></input>
              </div>
              <div className="flex flex-col items-start gap-1">
                <label className="text-sm text-white">Email</label>
                <input
                  required
                  type="text"
                  placeholder="Email"
                  className="w-full rounded-md border px-2 py-1 text-sm text-black outline-none placeholder:text-sm placeholder:text-slate-400"
                ></input>
              </div>
              <div className="flex flex-col items-start gap-1">
                <label className="text-sm text-white">Password</label>
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-md border px-2 py-1 text-sm text-black outline-none placeholder:text-sm placeholder:text-slate-400"
                ></input>
              </div>
            </div>
            <button className="mx-auto flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:opacity-90 focus:bg-gray-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              Register
            </button>
          </form>
          <Link
            href={"/login"}
            className="text-sm font-semibold text-white focus:font-bold focus:outline-none"
          >
            Have an account? Go to login.
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
