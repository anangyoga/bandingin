import Link from "next/link";

const Page = () => {
  return (
    <main className="flex h-screen flex-col bg-[#4440FF] text-white">
      <nav className="flex items-center justify-between px-40 py-4">
        <Link href="/">
          <h1 className="text-3xl font-bold">Bandingin</h1>
        </Link>
        <div>
          <Link
            href="/login"
            className="rounded-md border px-5 py-1 text-base font-medium hover:bg-[#4946f8]"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="mx-auto my-10 flex items-center justify-center sm:max-w-7xl">
        <div className="flex w-1/2 items-center justify-center">
          <img
            src="/bandingin.svg"
            alt="Bandingin Image"
            className="aspect-square h-[450px]"
          />
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-semibold">
                Temukan Gadget Impian dalam Sekejap!
              </h2>
              <p className="text-lg font-light leading-tight">
                Bingung pilih gadget yang mau dibeli? Bandingin aja pakai Ai.
                Bandingin 2 gadget impian biar kamu lebih mudah tentukan
                pilihan.
              </p>
            </div>
            <Link
              href={"/login"}
              className="w-1/4 rounded-md border px-5 py-1 text-center text-base font-medium hover:bg-[#4946f8]"
            >
              Coba Bandingin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
