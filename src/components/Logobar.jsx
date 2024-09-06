import React from "react";

export default function Logobar() {
  return (
    <div className="relative mx-auto my-32 px-6 py-5">
      {/* Top Horizontal Line */}
      <hr className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl border-[#555555]" />

      {/* Content */}
      <div className="flex flex-wrap justify-center items-center md:gap-32 gap-8 my-8 relative z-10">
        <img
          src="/icons8-adidas-trefoil.svg"
          alt="Adidas Logo"
          className="w-24 h-24"
        />
        <img
          src="/icons8-apple-logo.svg"
          alt="Apple Logo"
          className="w-24 h-24"
        />
        <img src="/icons8-bmw.svg" alt="BMW Logo" className="w-24 h-24" />
        <img src="/icons8-slack.svg" alt="Slack Logo" className="w-24 h-24" />
        <img
          src="/icons8-google-old.svg"
          alt="Google Logo"
          className="w-24 h-24"
        />
      </div>

      <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl  border-[#555555]" />
    </div>
  );
}
