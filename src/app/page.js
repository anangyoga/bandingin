import { AICard } from "@/components/AICard";
import { GadgetCard } from "@/components/GadgetCard";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

// const products = [
//   {
//     id: 1,
//     productName: "iphone 16",
//     price: 13000000,
//     dimension: "147.6 x 71.6 x 7.8 mm (170g)",
//     display: "Super Retina XDR OLED",
//     chipset: "Apple A18",
//     memory: 8,
//     battery: 3561,
//     frontCamera: 48,
//     rearCamera: 12,
//   },
//   {
//     id: 2,
//     productName: "iphone 16 Pro",
//     price: 18000000,
//     dimension: "149.6 x 71.5 x 8.3 mm (199g)",
//     display: "LTPO Super Retina XDR OLED",
//     chipset: "Apple A18 Pro",
//     memory: 8,
//     battery: 3582,
//     frontCamera: 48,
//     rearCamera: 12,
//   },
// ];

export default async function Page() {
  // sessionId from cookie
  const sessionId = cookies().get("sessionId")?.value;

  // if it doesn't exist sessionId (not logged in yet)
  if (!sessionId) {
    // redirect to login page
    redirect("/login");
  }

  // if exist perform a search for user data associated with that session
  const userData = await prisma.session.findFirst({
    where: {
      // Search session by id from cookie
      id: sessionId,
    },
    include: {
      // user information connected to the session
      user: true,
    },
  });

  // If user data is not found
  if (!userData) {
    // redirect to login page
    redirect("/login");
  }

  // Function logout to delete the session and delete the sessionId cookie
  async function logout() {
    "use server";

    // delete session from database
    await prisma.session.delete({
      where: {
        // according to sessionId
        id: sessionId,
      },
    });

    // Remove 'sessionId' from cookies
    await cookies().delete("sessionId");

    // after logout, redirect to login page
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
