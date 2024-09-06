import React from "react";

export default function Navbar() {
  return (
    <div className=" container flex justify-between items-center mx-auto py-4 ">
      <div>
        <p className="text-white text-xl font-bold px-4">Wallet</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-white hidden md:block">Sign up</p>
        <button className="bg-[#BFAFF2] text-[#333333] py-1 px-4 rounded-lg hidden md:block">
          Log in
        </button>
      </div>
    </div>
  );
}
