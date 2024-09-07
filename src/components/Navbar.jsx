export default function Navbar() {
  return (
    <div className="max-w-7xl flex justify-between items-center md:mx-auto  mx-4 pt-8 pb-16 ">
      <div>
        <p className="text-white text-xl font-bold px-4">Wallet</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-white hidden md:block">Sign up</p>
        <button className="bg-secondary text-[#333333] py-1 px-4 rounded-lg hidden md:block">
          Log in
        </button>
      </div>
    </div>
  );
}
