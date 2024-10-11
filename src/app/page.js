"use client";

import { generateAi } from "@/actions/actions";
import { AICard } from "@/components/AICard";
import { GadgetCard } from "@/components/GadgetCard";
import Link from "next/link";
import React from "react";
import { useActionState } from "react";

export default function Page() {
  const [state, action] = useActionState(generateAi, null);
  return (
    <div className="mx-auto flex max-w-6xl flex-col border bg-gray-50">
      <div className="flex items-center justify-between border border-x-0 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-xl font-semibold">Admin</h1>
        <Link href="/admin" className="text-sm font-medium text-blue-500">
          Add Product
        </Link>
      </div>
      <form
        action={action}
        className="mx-20 flex flex-col items-center rounded-xl border-black p-4"
      >
        <div className="flex gap-20">
          <GadgetCard />
          <GadgetCard />
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
}
