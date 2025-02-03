"use client";
import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/components/redux/store";
import { remove } from "@/components/redux/cartSlice"; // Importing the correct remove action

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // Total Price Calculation
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full min-h-screen flex flex-col bg-white px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <p className="font-[Inter] font-medium text-[22px] sm:text-[24px] lg:text-[28px] leading-[33px] sm:leading-[36px] text-center lg:text-left lg:pl-[190px] pt-[20px]">
        Bag
      </p>
      <main className="container mx-auto flex flex-col lg:flex-row mt-8 gap-6">
        {/* Cart Details */}
        <div className="bg-white flex flex-col w-full lg:w-7/12 rounded-lg p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col space-y-6 lg:pl-[150px]">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md"
                  />
                  <div className="ml-4 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-sm lg:text-base text-[#111111] font-Inter font-[400]">
                        ${item.price}
                      </p>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#757575] font-Inter font-[400]">
                      {item.description}
                    </p>
                    <div className="flex justify-between w-full text-xs sm:text-sm text-[#757575]">
                      <p>Quantity: {item.quantity}</p>
                      <button
                        onClick={() => dispatch(remove(item.id))} // Updated to remove item
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
        {/* Summary */}
        <div className="w-full lg:w-4/12 bg-white rounded-lg p-4 sm:p-6 mt-6 lg:mt-0">
          <h2 className="font-Inter font-medium text-[18px] sm:text-[21px] leading-[28px] sm:leading-[33px] mb-6">
            Summary
          </h2>
          {/* Subtotal */}
          <div className="flex justify-between py-2 text-xs sm:text-sm text-[#757575]">
            <p>Subtotal:</p>
            <p className="font-medium">${totalPrice.toFixed(2)}</p>
          </div>
          {/* Estimated Delivery */}
          <div className="flex justify-between py-2 text-xs sm:text-sm text-[#757575]">
            <p>Estimated Delivery:</p>
            <p className="font-medium">Free</p>
          </div>
          {/* Total */}
          <div className="flex justify-between py-2 text-xs sm:text-sm text-[#757575] border-t border-b">
            <p className="font-medium">Total:</p>
            <p className="font-medium">${totalPrice.toFixed(2)}</p>
          </div>
          {/* Checkout Button */}
          <button className="bg-[#029FAE] text-white w-full h-[50px] sm:h-[60px] rounded-[25px] sm:rounded-[30px] mt-6">
            <p className="font-Inter font-medium text-[14px] sm:text-[15px] leading-[24px] text-center">
              Member Checkout
            </p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
