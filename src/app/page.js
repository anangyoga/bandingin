import { AICard } from "@/components/AICard";
import { GadgetCard } from "@/components/GadgetCard";
import Link from "next/link";
import React from "react";

// const products = [
//   {
//     id: 1,
//     productName: "iphone 16",
//     price: 13000000,
//     dimension: "147.6 x 71.6 x 7.8 mm (170g)",
//     display: "Super Retina XDR OLED",
//     chipset: "Apple A18",
//     memory: 8,
//     battery: 3561,
//     frontCamera: 48,
//     rearCamera: 12,
//   },
//   {
//     id: 2,
//     productName: "iphone 16 Pro",
//     price: 18000000,
//     dimension: "149.6 x 71.5 x 8.3 mm (199g)",
//     display: "LTPO Super Retina XDR OLED",
//     chipset: "Apple A18 Pro",
//     memory: 8,
//     battery: 3582,
//     frontCamera: 48,
//     rearCamera: 12,
//   },
// ];

export default function Page() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col border bg-gray-50">
      <div className="flex items-center justify-between border border-x-0 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-xl font-semibold">Admin</h1>
        <Link href="/admin" className="text-sm font-medium text-blue-500">
          Add Product
        </Link>
      </div>
      <div className="mx-20 flex flex-col items-center rounded-xl border-black p-4">
        <div className="flex gap-20">
          <GadgetCard />
          <GadgetCard />
        </div>
        <button className="mx-auto flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-1/5">
          Generate
        </button>
      </div>
      <AICard />
    </div>
  );
}
