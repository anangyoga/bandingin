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

      <section className="mx-auto flex items-center justify-center sm:max-w-7xl">
        <div className="w-1/2">
          <img
            src="/bandingin.svg"
            alt="Bandingin Image"
            className="aspect-square h-[500px]"
          />
        </div>
        <div className="w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel
          omnis blanditiis, iste fugit sunt eos vitae aut exercitationem
          dignissimos facilis atque amet tempora doloribus molestiae fugiat
          eaque, perspiciatis excepturi.
        </div>
      </section>
    </main>
  );
};

export default Page;
