import { getAllProducts } from "@/actions/actions";

export const GadgetCard = async () => {
  const products = await getAllProducts();
  console.log(products);

  return (
    <form className="m-6 flex w-full flex-col items-center rounded-md border bg-white p-2">
      {products.map((product) => (
        <div key={product.id}>
          <select>
            <option>{product.name}</option>
          </select>
          <input
            defaultValue={`Price: Rp. ${product.price}`}
            name="price"
            className="info-specification"
          />
          <input
            defaultValue={`Dimension: ${product.dimension} MM`}
            name="dimension"
            className="info-specification"
          />
          <input
            defaultValue={`Display: ${product.display}`}
            name="display"
            className="info-specification"
          />
          <input
            defaultValue={`Chipset: ${product.chipset}`}
            name="chipset"
            className="info-specification"
          />
          <input
            defaultValue={`Memory: ${product.memory} GB`}
            name="memory"
            className="info-specification"
          />
          <input
            defaultValue={`Battery: ${product.battery} mAh`}
            name="battery"
            className="info-specification"
          />
          <input
            defaultValue={`Front Camera: ${product.front_camera} MP`}
            name="front_camera"
            className="info-specification"
          />
          <input
            defaultValue={`Rear Camera: ${product.rear_camera} MP`}
            name="rear_camera"
            className="info-specification"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-6mx-auto sm:w-1/500 my-2 flex w-3/4 items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 p-2 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
      >
        ReviewIn
      </button>
    </form>
  );
};
