"use client";
import client from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/components/redux/cartSlice";
import { addToWishlist } from "@/components/redux/WishListSlice"; // Import addToWishlist

interface Product {
  _id: string;
  title: string;
  slug: string;
  price: number;
  imageUrl: string;
  
  
  
  description: string;
  material: string;
  dimensions: string;
}

const ProductPage = ({ params: { id } }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "products" && _id == $id] {
        _id, title, "slug": slug.current, price, 
        "imageUrl": image.asset->url,
        description, material, dimensions
      }[0]`;

      const data: Product | null = await client.fetch(query, { id });
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (product) {
      const cartItem = { 
        id: product._id, // Convert `_id` to `id`
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1 // Ensure this property exists if required in `CartItem`
      };
      
      dispatch(add(cartItem));
      alert("✅ Item added to cart!");
    }
  };
 
  

  const handleAddToWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent page refresh
    if (product) {
      dispatch(addToWishlist(product)); // Add product to wishlist
      alert("✅ Item added to wishlist!"); // Optional, remove for production
    }
  };

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-500">❌ Product not found</h1>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.imageUrl || "https://dummyimage.com/400x400"}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">SOFA STORE</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
            <p className="leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <div className="flex justify-between mb-4">
                <div>
                  <span className="font-bold text-lg">Material:</span>
                  <p>{product.material}</p>
                </div>
                <div>
                  <span className="font-bold text-lg">Dimensions:</span>
                  <p>{product.dimensions}</p>
                </div>
              </div>
            </div>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
              <button
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add to Cart
              </button>
              {/* Wishlist Button */}
              <button
                onClick={handleAddToWishlist}
                className="ml-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
