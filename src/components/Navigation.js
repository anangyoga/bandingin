import React from "react";
import Link from "next/link";
import { logout } from "@/actions/actions";

const Navigation = ({ title, url, urlName, userData }) => {
  return (
    <nav
      className={`flex items-center justify-between px-3 py-4 md:px-10 lg:px-40 ${userData ? "border bg-white" : "border border-x-0 border-t-0 border-white bg-[#4440FF]"}`}
    >
      {title && (
        <Link href="/">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        </Link>
      )}
      {userData && (
        <h1 className="text-xl font-semibold">Halo, {userData.user.name}!</h1>
      )}

      {urlName && (
        <Link
          href={url}
          className="rounded-md border px-4 py-1 text-base font-medium hover:bg-[#4946f8] sm:px-5 sm:font-medium"
        >
          {urlName}
        </Link>
      )}

      {userData && (
        <button
          onClick={() => logout()}
          className="w-fit rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navigation;
