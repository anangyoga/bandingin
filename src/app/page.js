import { getAllProducts } from "@/actions/actions";
import Form from "@/components/Form";
import React from "react";

export default async function Page() {
  const products = await getAllProducts();
  return (
    <>
      <Form getAllProducts={products} />
    </>
  );
}
