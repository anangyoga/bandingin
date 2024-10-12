import React from "react";

const SelectSecondGadget = ({ products }) => {
  return (
    <div className="flex w-full flex-col items-center rounded-md border bg-white p-2 text-black sm:m-6">
      <div>
        <select name="secondGadget" className="text-sm font-medium" required>
          <option value="" selected disabled>
            Select a gadget
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

export default SelectSecondGadget;
