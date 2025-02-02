import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeProduct from "@/components/HomeProduct";

const Main = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1050px] h-auto lg:h-[850px] bg-[#F0F2F3] flex flex-col lg:flex-row mx-auto px-[20px]">
          {/* Left Section */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-[50px] lg:pt-[0px]">
            <h1 className="font-Inter font-light text-[14px] leading-[14px] tracking-[12%]">
              Welcome to Chairy
            </h1>
            <div className="font-Inter font-bold text-[28px] sm:text-[36px] lg:text-[50px] leading-[36px] sm:leading-[46px] lg:leading-[66px] tracking-[12%] text-[#272343] mt-6">
              Best Furniture <br /> Collection for your <br />
              interior.
            </div>
            <div className="w-[171px] h-[52px] mt-[30px] sm:mt-[40px] lg:mt-[70px] rounded-[8px] bg-[#029FAE] flex items-center justify-center">
              <button className="text-[16px] leading-[17.6px] font-Inter text-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end items-center mt-[20px] sm:mt-[30px] lg:mt-0">
            <Image
              src="/assets/Product Image.png"
              alt="chair"
              width={438}
              height={584}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <ul className="w-full max-w-[1050px] flex justify-between items-center mx-auto flex-wrap gap-y-6 py-6 px-[20px]">
        {["zapier", "pipedrive", "cib_bank", "zapier", "burnt_toast", "zapier"].map(
          (logo, index) => (
            <li key={index} className="flex justify-center w-[30%] md:w-auto">
              <Link href="/">
                <Image
                  src={`/assets/${logo}.png`}
                  alt={`${logo} Logo`}
                  width={85}
                  height={85}
                />
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Home Product Component */}
      <HomeProduct />
    </div>
  );
};

export default Main;
