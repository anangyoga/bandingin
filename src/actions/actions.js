"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addProduct(prevState, formData) {
  const {
    name,
    price,
    dimension,
    display,
    chipset,
    memory,
    battery,
    front_camera,
    rear_camera,
  } = {
    name: formData.get("name"),
    price: parseInt(formData.get("price")),
    dimension: formData.get("dimension"),
    display: formData.get("display"),
    chipset: formData.get("chipset"),
    memory: parseInt(formData.get("memory")),
    battery: parseInt(formData.get("battery")),
    front_camera: parseInt(formData.get("front_camera")),
    rear_camera: parseInt(formData.get("rear_camera")),
  };

  const newProduct = await prisma.product.create({
    data: {
      name,
      price,
      dimension,
      display,
      chipset,
      memory,
      battery,
      front_camera,
      rear_camera,
    },
  });

  return newProduct;
}

export async function getAllProducts() {
  const allProducts = await prisma.product.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return allProducts;
}

export async function deleteProduct(id) {
  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/admin/product");
}

export async function generateAi(prevState, formData) {
  console.log("clicked");
  const firstGadget = formData.get("firstGadget");
  const secondGadget = formData.get("secondGadget");

  const firstGadgetDetails = await prisma.product.findFirst({
    where: {
      name: firstGadget,
    },
  });

  const secondGadgetDetails = await prisma.product.findFirst({
    where: {
      name: secondGadget,
    },
  });

  console.log(firstGadgetDetails, "firstGadgetDetails");
  console.log(secondGadgetDetails, "secondGadgetDetails");
  console.log(firstGadget, "apa ini firstGadget");
  console.log(secondGadget, "apa ini secondGadget");
}

export async function logout() {
  const sessionId = await cookies().get("sessionId")?.value;

  await prisma.session.delete({
    where: {
      id: sessionId,
    },
  });

  await cookies().delete("sessionId");

  redirect("/bandingin");
}
