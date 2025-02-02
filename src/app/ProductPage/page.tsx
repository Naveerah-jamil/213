"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { createClient } from "@sanity/client";

// ✅ Sanity Client Setup
const client = createClient({
  projectId: "6re7yhas", // Apna Sanity Project ID daalo
  dataset: "production", // Apna dataset name
  useCdn: false, // ❌ `false` rakho taaki fresh data mile
  apiVersion: "2023-01-01", // ✅ Sanity API version
});

// ✅ TypeScript Interface
interface Product {
  _id: string;
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
}

// ✅ Sanity Fetch Function
const fetchProducts = async (): Promise<Product[]> => {
  try {
    const query = `*[_type == "products"] {
      _id, title, "slug": slug.current, price, 
      "imageUrl": image.asset->url
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
};

// ✅ ProductList Component (UI)
const ProductList = ({ products }: { products: Product[] }) => (
  <div className="ml-[80px] mr-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {products.map((product, index) => (
      <div
        key={product._id}
        className="w-full bg-white shadow-md rounded-[6px] hover:shadow-lg transition-shadow"
      >
        <Link href={`/Product/${product._id}`} className="block">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={312}
            height={312}
            className="rounded-t-[6px] w-full h-auto object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-black">{product.title}</p>
              <div
                className={`${
                  index === 0 ? "bg-[#029FAE]" : "bg-[#F0F2F3]"
                } flex justify-center items-center rounded-[6px] w-[44px] h-[44px]`}
              >
                <CiShoppingCart className="text-black w-[18.5px] h-[18.5px]" />
              </div>
            </div>
            <p className="font-bold text-black mt-2">${product.price}</p>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

// ✅ Page Component (Data Fetch + UI Render + Search Bar)
const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set initial filtered products to all products
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Filter products based on search query
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">All Products</h1>
      
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products..."
          className="border rounded-md px-4 py-2 w-1/2 sm:w-1/3"
        />
      </div>
      
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Page;