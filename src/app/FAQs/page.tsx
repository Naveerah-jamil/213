import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-50">
      <div className="w-full px-4"> {/* Added px-4 for padding on smaller screens */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="font-Helvetica font-bold text-center xl:text-[48px] text-[36px] leading-[56px] pt-[30px]">
              Questions Look Here
            </p>
            <p className="font-Helvetica font-bold text-center lg:text-[16px] text-[14px] leading-[24px] text-[#4F4F4F] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </p>
          </div>
        </div>
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"> {/* 1 column on small screens, 2 on medium+ */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-auto rounded-lg bg-[#F7F7F7] shadow-sm"
            >
              <p className="font-[Inter] text-base font-normal leading-6 text-left p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
                modi ullam amet debitis libero veritatis enim repellat optio natus
                eum delectus deserunt, odit expedita eos molestiae ipsa totam
                quidem?
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
