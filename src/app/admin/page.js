"use client";

import { addProduct, logout } from "@/actions/actions";
import Link from "next/link";
import { useActionState } from "react";

const Admin = () => {
  const [state, action, isLoading] = useActionState(addProduct, null);
  return (
    <main className="mx-auto flex max-w-6xl flex-col border bg-gray-50 sm:h-screen">
      <div className="flex items-center justify-between border border-x-0 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-xl font-semibold">Hello, Admin</h1>
        <Link
          href="/admin/products"
          className="text-sm font-medium text-blue-500"
        >
          See All Products
        </Link>
        <button
          onClick={() => logout()}
          className="text-sm font-medium text-blue-500"
        >
          Admin Logout
        </button>
      </div>
      <form action={action} className="flex flex-col pb-5 sm:gap-10">
        <div className="flex flex-col-reverse items-start gap-5 p-4 sm:flex-row sm:p-6">
          <div className="w-full rounded-md border bg-white sm:w-2/3">
            <div className="flex flex-col gap-3">
              <div className="w-full border border-x-0 border-t-0 p-3">
                <h2 className="text-base font-medium">General Information</h2>
              </div>
              <div className="flex flex-col gap-5 p-3 pb-5">
                <div className="flex flex-col gap-1">
                  <label className="mb-2 block text-sm font-normal">
                    Product Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                  />
                </div>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Price
                    </label>
                    <input
                      required
                      type="number"
                      name="price"
                      placeholder="Price"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Dimension
                    </label>
                    <input
                      required
                      type="text"
                      name="dimension"
                      placeholder="Dimension"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Display
                    </label>
                    <input
                      required
                      type="text"
                      name="display"
                      placeholder="Display"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Chipset
                    </label>
                    <input
                      required
                      type="text"
                      name="chipset"
                      placeholder="Chipset"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Memory
                    </label>
                    <input
                      required
                      type="number"
                      name="memory"
                      placeholder="Memory"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Battery
                    </label>
                    <input
                      required
                      type="number"
                      name="battery"
                      placeholder="Battery"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Front Camera
                    </label>
                    <input
                      required
                      type="number"
                      name="front_camera"
                      placeholder="Front Camera"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <label className="mb-2 block text-sm font-normal">
                      Rear Camera
                    </label>
                    <input
                      required
                      type="number"
                      name="rear_camera"
                      placeholder="Rear Camera"
                      className="w-full rounded-md border px-2 py-1 outline-none placeholder:text-sm placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md border bg-white sm:w-1/3">
            <div className="flex flex-col gap-3">
              <div className="w-full border border-x-0 border-t-0 p-3">
                <h2 className="text-base font-medium">Product Image</h2>
              </div>
              <label className="block p-3">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  name="photo"
                  className="block w-full text-sm text-gray-500 file:me-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 file:disabled:pointer-events-none file:disabled:opacity-50"
                />
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-1/5"
        >
          {isLoading ? "Loading..." : "Add Product"}
        </button>
      </form>
    </main>
  );
};

export default Admin;
