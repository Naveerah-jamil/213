"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist, setWishlist } from "@/components/redux/WishListSlice";
import { RootState } from "../../components/redux/store";
import Image from "next/image"; // For displaying product images

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      dispatch(setWishlist(JSON.parse(storedWishlist)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <p className="font-[Inter] font-medium text-[22px] sm:text-[24px] lg:text-[28px] leading-[33px] sm:leading-[36px] text-center lg:text-left lg:pl-[190px] pt-[20px]">
        Wishlist
      </p>
      <main className="container mx-auto flex flex-col lg:flex-row mt-8 gap-6">
        {/* Wishlist Details */}
        <div className="bg-white flex flex-col w-full lg:w-7/12 rounded-lg p-4 sm:p-6">
          {wishlist.length === 0 ? (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          ) : (
            <div className="flex flex-col space-y-6">
              {wishlist.map((product) => (
                <div key={product._id} className="flex items-center border-b py-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={150}
                    height={150}
                    className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md"
                  />
                  <div className="ml-4 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-sm lg:text-base text-[#111111] font-Inter font-[400]">
                        ${product.price}
                      </p>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">
                        {product.title}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#757575] font-Inter font-[400]">
                      {product.description}
                    </p>
                    <div className="flex justify-between w-full text-xs sm:text-sm text-[#757575]">
                      <button
                        onClick={() => handleRemoveFromWishlist(product._id)}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
