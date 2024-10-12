import React from "react";

const SelectFirstGadget = ({ products }) => {
  return (
    <div className="m-6 flex w-full flex-col items-center rounded-md border bg-white p-2 text-black">
      <div>
        <select name="firstGadget" className="text-sm font-medium">
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
