import Navigation from "@/components/Navigation";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex h-screen flex-col bg-[#4440FF] text-white">
      <Navigation title={"Bandingin"} url={"/login"} urlName={"Login"} />
      <section className="mx-auto my-10 flex flex-col items-center justify-center gap-8 sm:max-w-7xl sm:gap-0 md:flex-row">
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src="/bandingin.svg"
            alt="Bandingin Image"
            className="aspect-square h-[450px]"
          />
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <div className="flex flex-col gap-8 px-3 sm:px-0">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold sm:text-3xl">
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
              className="rounded-md border px-5 py-1 text-center text-base font-medium hover:bg-[#4946f8] sm:w-1/4"
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
