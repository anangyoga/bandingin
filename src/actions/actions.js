"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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
