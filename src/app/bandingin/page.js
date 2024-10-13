import Generator from "@/components/Generator";
import { getAllProducts } from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const products = await getAllProducts();

  const sessionId = (await cookies()).get("sessionId")?.value;

  if (!sessionId) {
    redirect("/");
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
};

export default Page;
