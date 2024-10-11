"use server";

import { getAllProducts } from "@/actions/actions";

export const GadgetCard = async () => {
  const products = await getAllProducts();

  return (
    <div className="m-6 flex w-full flex-col items-center rounded-md border bg-white p-2">
      <div>
        <select name="phone">
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
