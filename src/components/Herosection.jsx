import React from "react";

export default function Herosection() {
  const handleButtonClick = () => {
    window.open(
      "https://rachhadiyayash.github.io/Portfolio/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between md:mx-auto mx-4 py-4 gap-4">
      <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start h-full text-center md:text-left">
        <p className="text-white font-bold text-4xl md:text-7xl my-4 md:my-8">
          SaaS Landing
          <br />
          Page Template
        </p>
        <p className="text-gray text-base md:text-xl my-4 md:my-8 mx-auto md:mx-0 w-[90%] md:w-[440px]">
          This is a template Figma file, turned into code using Anima. Learn
          more
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-primary w-[150px] rounded-md px-3 py-2 mx-auto md:mx-0 mt-6 md:mt-10"
        >
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2 flex items-center md:justify-end justify-center">
        <img
          src="/1000x892.gif"
          alt="SaaS Template"
          className="w-[90%] md:w-[500px] h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
