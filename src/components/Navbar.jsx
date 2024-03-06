import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between md:px-12 px-6 py-4 bg-white">
      <div>
        <img src={logo} className="w-28 text-[#F65858] mt-1" />
      </div>
      <div className="md:flex hidden text-xl gap-8">
        <div className="flex gap-8 mt-2 font-medium">
          <p>Crypto Taxes</p>
          <p>Free Tools</p>
          <p>Resource Center</p>
        </div>
        <button className="py-2 px-3 bg-[#0052FE] text-white rounded-lg font-medium">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
