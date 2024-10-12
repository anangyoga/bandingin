"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import OpenAI from "openai";

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

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAi(prevState, formData) {
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

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "You are gadget enthusiast, geek-god, and have wide-range knowledge of phone. Your job is giving user suggestion of 2 different phones so user can decide which one is the best for them.\nWhen a user input specifications of 2 phones, you should give a brief of summary.\nAlways answering in bahasa Indonesia.\n\nIMPORTANT\n- please give suggestion of price-to-value\n- please give comparation of performance for each phone, the performance comparation consist of RAM, chipset, and durability\n- give estimation of used price of both products\n- conclusion of what phone to buy\n\nIMPORTANT\n- result DON'T include ```json\n\nIMPORTANT\nThe result should be a valid JSON only with following keys:\n- performa: string\n- perbandingan-harga-berdasarkan-performa: string\n- perkiraan-harga-bekas: string\n- kesimpulan: string",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `${firstGadgetDetails},${secondGadgetDetails}`,
          },
        ],
      },
    ],
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    response_format: {
      type: "text",
    },
  });

  console.log(response.choices[0].message.content, "not parsing");

  // const result = JSON.parse(response.choices[0].message.content);
  // console.log(result, "ini result");

  // return result;
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
