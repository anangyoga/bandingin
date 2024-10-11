"use client";

import React from "react";
import { AICard } from "@/components/AICard";
import SelectFirstGadget from "./SelectFirstGadget";
import SelectSecondGadget from "./SelectSecondGadget";
import { useActionState } from "react";
import { generateAi } from "@/actions/actions";
import GeneratorHeader from "./GeneratorHeader";

const Generator = ({ products, userData }) => {
  const [state, action] = useActionState(generateAi, null);

  return (
    <div className="mx-auto flex max-w-6xl flex-col border bg-gray-50">
      <GeneratorHeader userData={userData} />
      <form
        action={action}
        className="mx-20 flex flex-col items-center rounded-xl border-black p-4"
      >
        <div className="flex gap-20">
          <SelectFirstGadget products={products} />
          <SelectSecondGadget products={products} />
        </div>
        <button
          type="submit"
          className="mx-auto flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-1/5"
        >
          Generate
        </button>
      </form>
      <AICard />
    </div>
  );
};

export default Generator;
