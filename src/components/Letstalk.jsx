import React from "react";

export default function Letstalk() {
  const handleButtonClick = () => {
    window.open(
      "https://rachhadiyayash.github.io/Portfolio/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="max-w-6xl my-8 mx-4 md:mx-auto flex flex-col md:flex-row items-center justify-between py-16">
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 p-4">
        <p className="my-2 text-white text-4xl md:text-5xl font-bold text-center md:text-left">
          Questions?
          <br />
        </p>
        <p className="my-2 text-white text-4xl md:text-5xl font-bold text-center md:text-left">
          Let's talk
        </p>
        <p className="my-6 text-gray text-center md:text-left w-1/2">
          Contact us through our 24/7 live chat. We're always happy to help!
        </p>
        <button
          onClick={handleButtonClick}
          className="my-6 bg-primary rounded-md px-4 py-2"
        >
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 flex justify-end items-center">
        <img
          src="/1000x800.gif"
          alt="Contact Us"
          className="w-full max-w-[500px] md:h-[350px] h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
