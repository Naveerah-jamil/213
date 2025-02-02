import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center bg-[#007580] p-4 sm:p-6 lg:p-8 sm:w-full lg:w-[550px] lg:ml-[190px] h-auto">
          <div className="max-w-[495px] text-left">
            <h1 className="font-[Inter] text-[20px] sm:text-[28px] sm:ml-[20px] sm:mr-[20px] lg:text-[32px] font-bold leading-[38.73px] text-white">
              About Us - Comforty
            </h1>
            <p className="font-[Inter] text-[16px] sm:text-[18px] font-normal leading-[21.7px] text-white mt-4">
              At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
            </p>
            <Link href="/">
              <div className="w-[179px] h-[56px] px-[32px] py-[16px] bg-green-700 text-white mt-4 mx-auto lg:mx-0 text-center">
                View
              </div>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center w-full lg:w-[550px] sm:ml-[20px] sm:mr-[20px] h-auto">
          <Image
            src="/assets/image.png"
            alt="loading"
            width={672}
            height={478}
            className="object-cover w-full max-w-[672px]"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-10 text-center px-4 sm:px-6 lg:px-8">
        <p className="font-[Inter] font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[35.2px]">
          What makes our Brand Different
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:pl-[100px] lg:grid-cols-4 gap-4 w-full max-w-[1050px] mx-auto mt-10">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-full max-w-[309px] h-auto bg-[#F9F9F9] flex flex-col items-center p-6 gap-[10px] text-center mx-auto"
            >
              <h3 className="font-[Inter] text-[18px] sm:text-[20px] leading-[28px] text-[#007580]">
                Next day as standard
              </h3>
              <p className="font-[Inter] text-[14px] sm:text-[16px] leading-[24px] text-[#007580]">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="mt-10 text-left px-4 sm:px-6 lg:px-[150px]">
        <p className="font-[Inter] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-[35.2px] lg:pl-[100px]">
          Our Popular Products
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-10 px-4 sm:px-6 lg:px-[150px] lg:mr-[150px]">
       {/* First Product */}
<div className="w-full max-w-[608px] h-auto">
  <Image
    src="/assets/couch.png"
    alt="The Poplar suede sofa"
    width={608}
    height={375}
    className="object-cover w-full"
  />
  <div className="mt-2">
    <p className="font-[Inter] text-[18px] sm:text-[20px] leading-[28px]">
      The Poplar suede sofa
    </p>
    <p className="font-[Inter] text-[16px] sm:text-[18px] leading-[27px]">
      $99.00
    </p>
  </div>
</div>

{/* Additional Products */}
<div className="lg:flex space-x-4 mt-4">
  {[...Array(2)].map((_, index) => (
    <div key={index} className="w-full max-w-[305px] h-auto">
      <Image
        src="/assets/image2.png"
        alt="The Dandy chair"
        width={305}
        height={375}
        className="object-cover w-full"
      />
      <div className="mt-2">
        <p className="font-[Inter] text-[18px] sm:text-[20px] leading-[28px]">
          The Dandy chair
        </p>
        <p className="font-[Inter] text-[16px] sm:text-[18px] leading-[27px]">
          $99.00
        </p>
      </div>
    </div>
  ))}
</div>

        
      </div>
    </div>
  );
};

export default page;
