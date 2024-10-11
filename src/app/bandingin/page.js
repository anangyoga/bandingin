import Link from "next/link";

const Page = () => {
  return (
    <main className="flex h-screen flex-col bg-[#4440FF] text-white">
      <nav className="flex items-center justify-between px-56 py-4">
        <Link href="/">
          <h1 className="text-3xl font-bold">Bandingin</h1>
        </Link>
        <div>
          <Link
            href="/login"
            className="rounded-md border px-5 py-2 text-lg font-medium hover:bg-[#4946f8]"
          >
            Login
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default Page;
