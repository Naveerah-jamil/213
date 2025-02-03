'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);  // Cart items
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items); // Wishlist items

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#272343] flex justify-between items-center h-[45px] px-4 md:px-8 lg:px-16 xl:px-[175px] text-white">
        <div className="text-sm md:text-base hidden sm:block">
          Free shipping on all orders over $50
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="/FAQs">FAQs</Link>
          <Link href="/">Need Help</Link>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="w-full bg-[#F0F2F3] flex justify-between items-center h-[84px] px-4 md:px-8 lg:px-16 xl:px-[175px]">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/Logo Icon.png"
            alt="Logo Image"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-lg md:text-2xl font-bold">Comforty</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-between w-[200px]">
          <Link href="/LogIn" className="text-sm md:text-lg">Log in</Link>

          {/* Cart Link */}
          <Link href="/Cart" className="flex items-center space-x-2 text-sm md:text-lg">
            <MdShoppingCart />
            <span>{cartItems.length}</span>
          </Link>

          {/* Wishlist Link */}
          <Link href="/Wishlist" className="text-sm md:text-lg">
            <span>Wishlist</span>
            <span>({wishlistItems.length})</span> {/* Show number of items in wishlist */}
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full bg-white flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 xl:px-[175px] py-4 border-t border-gray-300">
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base text-gray-500">
          <li>
            <Link href="/HomePage">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/ProductPage">Product</Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/Aboutus">About</Link>
          </li>
        </ul>

        {/* Contact Info */}
        <Link href="/Contactus">
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-sm md:text-base text-gray-500">
            <span>Contact:</span>
            <p>(080) 234516</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
