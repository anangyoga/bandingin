"use client";

import React from "react";
import SelectFirstGadget from "./SelectFirstGadget";
import SelectSecondGadget from "./SelectSecondGadget";
import { useActionState } from "react";
import { generateAi } from "@/actions/actions";
import Navigation from "./Navigation";
import GeneratorResult from "./GeneratorResult";

const Generator = ({ products, userData }) => {
  const [state, action] = useActionState(generateAi, null);

  console.log(state, "state");
  console.log(typeof state, "typeof state");

  return (
    <div className="flex h-screen flex-col bg-[#4440FF] text-white">
      <Navigation userData={userData} />
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
          className="mx-auto flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-1/5"
        >
          Generate
        </button>
      </form>
      {/* {state && <GeneratorResult state={state} />} */}
    </div>
  );
};

export default Generator;
