import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const HomeProduct = () => {
  const products = [
    { src: "/assets/Image.png", name: "Library stool chair", price: "$20" },
    { src: "/assets/Image copy.png", name: "Library stool chair", price: "$20" },
    { src: "/assets/Image3.png", name: "Library stool chair", price: "$20" },
    { src: "/assets/Image4.png", name: "Library stool chair", price: "$20" },
  ];

  const categories = [
    { src: "/assets/image.png", name: "Category Name", productsCount: "3,584 Products" },
    { src: "/assets/image.png", name: "Category Name", productsCount: "3,584 Products" },
    { src: "/assets/image.png", name: "Category Name", productsCount: "3,584 Products" },
  ];

  const products1 = [
    { src: "/assets/Image.png", name: "Library stool chair", price: "$20" },
    { src: "/assets/Image copy.png", name: "Library stool chair", price: "$20" },
    { src: "/assets/Image3.png", name: "Library stool chair", price: "$20" },
    { src: "/assets/Image4.png", name: "Library stool chair", price: "$20" },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product, index) => (
          <div key={index} className="w-full rounded-[6px]">
            <Image
              src={product.src}
              alt="loading"
              width={312}
              height={312}
              className="w-full h-auto object-cover"
            />
            <div className="text-green-400 flex justify-between items-center mt-2">
              {product.name}
              <CiShoppingCart className="bg-green-500 text-white rounded-[6px] w-[44px] h-[44px] p-2" />
            </div>
            <p className="font-bold text-black">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Top Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {categories.map((category, index) => (
          <div key={index} className="w-full rounded-lg overflow-hidden relative">
            <Image
              src={category.src}
              alt="Loading"
              width={424}
              height={424}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm">{category.productsCount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-16">
        <div className="w-full lg:w-[700px] flex-shrink-0">
          <Image src="/assets/Image1.png" alt="Loading" width={700} height={700} className="w-full h-auto object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full">
              <Image src="/assets/Image3.png" alt="loading" width={312} height={312} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Our Products Section */}
      <h1 className="text-2xl font-bold text-center mt-16">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products1.map((product, index) => (
          <div key={index} className="w-full rounded-[6px]">
            <Image
              src={product.src}
              alt="loading"
              width={312}
              height={312}
              className="w-full h-auto object-cover"
            />
            <div className="text-green-400 flex justify-between items-center mt-2">
              {product.name}
              <CiShoppingCart className="bg-[#029FAE] text-white rounded-[6px] w-[44px] h-[44px] p-2" />
            </div>
            <p className="font-bold text-black">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Second Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products1.map((product, index) => (
          <div key={index} className="w-full rounded-[6px]">
            <Image
              src={product.src}
              alt="loading"
              width={312}
              height={312}
              className="w-full h-auto object-cover"
            />
            <div className="text-green-400 flex justify-between items-center mt-2">
              {product.name}
              <div
                className={`${
                  index === 0 ? "bg-[#029FAE]" : "bg-gray-200"
                } flex justify-center items-center rounded-[6px] w-[44px] h-[44px]`}
              >
                <CiShoppingCart className="text-black w-5 h-5" />
              </div>
            </div>
            <p className="font-bold text-black">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
