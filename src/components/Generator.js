"use client";

import React from "react";
import SelectFirstGadget from "./SelectFirstGadget";
import SelectSecondGadget from "./SelectSecondGadget";
import { useActionState } from "react";
import { generateAi } from "@/actions/actions";
import Navigation from "./Navigation";
import GeneratorResult from "./GeneratorResult";

const Generator = ({ products, userData }) => {
  const [state, action, isPending] = useActionState(generateAi, null);

  return (
    <div className="flex h-screen flex-col bg-gray-50 text-black">
      <Navigation userData={userData} />
      <form
        action={action}
        className="flex flex-col items-center border-black p-4"
      >
        <div className="flex gap-20">
          <SelectFirstGadget products={products} />
          <SelectSecondGadget products={products} />
        </div>
        <button
          type="submit"
          className="mx-auto flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-1/12"
        >
          {isPending ? "Generating..." : "Generate"}
        </button>
      </form>
      {state && <GeneratorResult state={state} isPending={isPending} />}
    </div>
  );
};

export default Generator;
