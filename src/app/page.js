import React from "react";
import Generator from "@/components/Generator";
import { getAllProducts } from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const products = await getAllProducts();

  const sessionId = (await cookies()).get("sessionId")?.value;

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

  return (
    <>
      <Generator products={products} userData={userData} />
    </>
  );
}
