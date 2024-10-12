import React from "react";

const GeneratorResult = ({ state }) => {
  return (
    <div className="flex flex-col py-4 md:px-10 lg:px-40">
      <label className="mb-2 block text-lg font-semibold">
        AI Recommendation
      </label>
      <div className="flex w-full flex-col gap-2.5 rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400">
        <p>
          <span className="font-medium">Performa</span>: {state?.performa}
        </p>
        <p>
          <span className="font-medium">
            Perbandingan harga Berdasarkan Performa
          </span>
          : {state?.perbandingan}
        </p>
        <p>
          <span className="font-medium">Perkiraan Harga Bekas:</span>{" "}
          {state?.perkiraan}
        </p>
        <p>
          <span className="font-medium">Kesimpulan:</span> {state?.kesimpulan}
        </p>
      </div>
    </div>
  );
};

export default GeneratorResult;
