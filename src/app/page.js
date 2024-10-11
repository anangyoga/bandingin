import { AICard } from "@/components/AICard";
import { GadgetCard } from "@/components/GadgetCard";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page() {
  const sessionId = cookies().get("sessionId")?.value;

  if (!sessionId) {
    redirect("/login");
  }

  const userData = await prisma.session.findFirst({
    where: {
      id: sessionId,
    },
    include: {
      user: true,
    },
  });

  if (!userData) {
    redirect("/login");
  }

  async function logout() {
    "use server";

    await prisma.session.delete({
      where: {
        id: sessionId,
      },
    });

    await cookies().delete("sessionId");

    redirect("/login");
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col border bg-gray-50">
      <div className="flex items-center justify-between border border-x-0 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-xl font-semibold">Halo!! {userData.user.name}</h1>
        <form action={logout}>
          <button className="w-fit rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            Logout
          </button>
        </form>
      </div>
      <div className="mx-20 flex flex-col items-center rounded-xl border-black p-4">
        <div className="flex gap-20">
          <GadgetCard />
          <GadgetCard />
        </div>
        <button className="mx-auto flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-1/5">
          Generate
        </button>
      </div>
      <AICard />
    </div>
  );
}
