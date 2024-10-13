import React from "react";

const SelectFirstGadget = ({ products }) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center rounded-md border bg-white p-2 text-black sm:m-6">
      <div>
        <select name="firstGadget" className="text-sm font-medium" required>
          <option value="" selected disabled>
            Pilih gadget...
          </option>
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

export default SelectFirstGadget;
