export const GadgetCard = ({
  productName,
  price,
  dimension,
  display,
  chipset,
  memory,
  battery,
  frontCamera,
  rearCamera,
}) => {
  return (
    <>
      <div className="m-6 flex w-full flex-col items-center rounded-md border bg-white p-2">
        <div>
          <h1 className="mb-2 text-2xl">{productName}</h1>
          <p className="bd-spec">Price: {price}</p>
          <p className="bd-spec">Dimension: {dimension}</p>
          <p className="bd-spec">Display: {display}</p>
          <p className="bd-spec">Chipset: {chipset}</p>
          <p className="bd-spec">Memory: {memory}</p>
          <p className="bd-spec">Battery: {battery}</p>
          <p className="bd-spec">Front Camera: {frontCamera}</p>
          <p className="bd-spec">Rear Camera: {rearCamera}</p>
        </div>
        <button className="bg-blue-6mx-auto sm:w-1/500 my-2 flex w-3/4 items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 p-2 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          ReviewIn
        </button>
      </div>
    </>
  );
};
