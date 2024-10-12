import React from "react";

const GeneratorResult = ({ state }) => {
  return (
    <div className="flex flex-col py-4 md:px-10 lg:px-40">
      <label className="mb-2 block text-2xl font-semibold">
        AI Recommendation
      </label>
      <div className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400">
        <p>Performa: {state?.performa}</p>
        <p>
          Perbandingan harga Berdasarkan Performa:{" "}
          {state?.perbandingan_harga_berdasarkan_performa}
        </p>
        <p>Perkiraan Harga Bekas: {state?.perkiraan_harga_bekas}</p>
        <p>Kesimpulan: {state?.kesimpulan}</p>
      </div>
    </div>
  );
};

export default GeneratorResult;
