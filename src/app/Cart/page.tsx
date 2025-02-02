import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <p className="font-[Inter] font-medium text-[22px] sm:text-[24px] lg:text-[28px] leading-[33px] sm:leading-[36px] text-center lg:text-left lg:pl-[190px] pt-[20px]">
        Bag
      </p>
      <main className="container mx-auto flex flex-col lg:flex-row mt-8 gap-6">
        {/* Cart Details */}
        <div className="bg-white flex flex-col w-full lg:w-7/12 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col space-y-6 lg:pl-[150px]">
            {/* Cart Item 1 */}
            <div className="flex items-center border-b py-4">
              <Image
                src="/assets/Image3.png"
                alt="Library Stool Chair"
                width={150}
                height={150}
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md"
              />
              <div className="ml-4 w-full">
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base text-[#111111] font-Inter font-[400]">
                    $5654
                  </p>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    Library Stool Chair
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#757575] font-Inter font-[400]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex justify-between w-full text-xs sm:text-sm text-[#757575]">
                  <p>Size: L</p>
                  <p>Quantity: 1</p>
                </div>
              </div>
            </div>

            {/* Cart Item 2 */}
            <div className="flex items-center border-b py-4">
              <Image
                src="/assets/image2.png"
                alt="Library Stool Chair"
                width={150}
                height={150}
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md"
              />
              <div className="ml-4 w-full">
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base text-[#111111] font-Inter font-[400]">
                    $5654
                  </p>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    Library Stool Chair
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#757575] font-Inter font-[400]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex justify-between w-full text-xs sm:text-sm text-[#757575]">
                  <p>Size: L</p>
                  <p>Quantity: 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-4/12 bg-white rounded-lg p-4 sm:p-6 mt-6 lg:mt-0">
          <h2 className="font-Inter font-medium text-[18px] sm:text-[21px] leading-[28px] sm:leading-[33px] mb-6">
            Summary
          </h2>
          <p className="flex justify-between py-2 text-xs sm:text-sm text-[#757575]">
            Subtotal: <span>$198.60</span>
          </p>
          <p className="flex justify-between py-2 text-xs sm:text-sm text-[#757575]">
            Estimated Delivery: <span>Free</span>
          </p>
          <p className="flex justify-between py-2 text-xs sm:text-sm text-[#757575] border-t border-b">
            Total: <span>$198.60</span>
          </p>
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
