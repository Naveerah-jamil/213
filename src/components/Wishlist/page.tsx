// src/components/Wishlist.tsx
"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist, setWishlist } from "@/components/redux/WishListSlice"
import { RootState } from "../redux/store";

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

  const handleAddToWishlist = (product: any) => {
    dispatch(addToWishlist(product));
  };

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      <div>
        {wishlist.length === 0 ? (
          <p>No items in your wishlist.</p>
        ) : (
          wishlist.map((product: any) => (
            <div key={product._id} className="flex justify-between items-center mb-4">
              <span>{product.title}</span>
              <button
                onClick={() => handleRemoveFromWishlist(product._id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
