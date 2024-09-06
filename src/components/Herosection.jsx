import React from "react";

export default function Herosection() {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between mx-auto gap-y-4 py-4 my-6 px-6">
      <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start h-full text-center md:text-left">
        <p className="text-white font-bold text-4xl md:text-7xl my-4 md:my-8">
          SaaS Landing
          <br />
          Page Template
        </p>
        <p className="text-[#808080] text-base md:text-xl my-4 md:my-8 mx-auto md:mx-0 w-[90%] md:w-[440px]">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <button className="bg-[#F8D57E] w-[150px] rounded-md px-3 py-2 mx-auto md:mx-0 mt-6 md:mt-10">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-full">
        <img
          src="/1000x892.gif"
          alt="SaaS Template"
          className="w-[90%] md:w-[500px] h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
