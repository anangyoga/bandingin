import { getAllProducts } from "@/actions/actions";
import Link from "next/link";

const Page = async () => {
  const products = await getAllProducts();
  console.log(products, "products");
  return (
    <div className="mx-auto flex max-w-6xl flex-col border bg-gray-50 sm:h-screen">
      <div className="flex items-center justify-between border border-x-0 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-xl font-semibold">All Products</h1>
        <Link href="/admin" className="text-sm font-medium text-blue-500">
          Back to Dashboard
        </Link>
      </div>
      <div className="flex items-center justify-center px-4 py-10">
        <ul className="w-1/2">
          {products.map((product) => (
            <li key={product.id} className="flex items-center justify-between">
              <p>{product.name}</p>
              <button className="text-sm font-medium text-red-500">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
