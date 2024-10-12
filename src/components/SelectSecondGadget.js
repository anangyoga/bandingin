import React from "react";

const SelectSecondGadget = ({ products }) => {
  return (
    <div className="m-6 flex w-full flex-col items-center rounded-md border bg-white p-2 text-black">
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
