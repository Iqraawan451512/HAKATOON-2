 "use client"
 import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";
import { useState } from "react"; // To toggle the menu visibility on mobile

function Header_2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  // Toggle menu visibility for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <nav className="bg-white h-20 flex items-center justify-between border-b border-[#e5e5e5] px-4">
        {/* Logo */}
        <h1 className="logo font-sans font-bold text-[1.6rem] ml-[1rem] text-[#003049] hover:text-blue-400 cursor-pointer">Bandage</h1>

        {/* Desktop and tablet navigation */}
        <ol className="hidden sm:flex gap-5 font-serif text-[1rem]">
          <Link href="/"><li className="text-gray-400 hover:text-blue-800 font-semibold">Home</li></Link>
          <Link href="/shop"><li className="text-gray-400 hover:text-blue-800 font-semibold">Shop</li></Link>
          <Link href="/about"><li className="text-gray-400 hover:text-blue-800 font-semibold">About</li></Link>
          <Link href="/blog"><li className="text-gray-400 hover:text-blue-800 font-semibold">Blog</li></Link>
          <Link href="/contact"><li className="text-gray-400 hover:text-blue-800 font-semibold">Contact</li></Link>
          <Link href="/pages"><li className="text-gray-400 hover:text-blue-800 font-semibold">Pages</li></Link>
        </ol>

        {/* Desktop login / register and icons */}
        <div className="hidden sm:flex items-center gap-3">
          <p className="flex font-bold text-sky-400">
            <MdSupervisorAccount className="text-[1.4rem] hover:text-blue-900 cursor-pointer " />
            <Link href="/"><span className="hover:text-blue-900 cursor-pointer">Login</span></Link>
            <span> / </span>
            <Link href="/"><span className="hover:text-blue-900 cursor-pointer">Register</span></Link>
          </p>
          <IoMdSearch className="text-[1.3rem] text-sky-400 hover:text-blue-800 cursor-pointer" />
          <MdOutlineShoppingCart className="text-[1.3rem] text-sky-400 hover:text-blue-800 cursor-pointer" />
          <p className="text-sky-400 hover:text-blue-800 cursor-pointer">1</p>
          <FaRegHeart className="text-[1.1rem] text-sky-400 hover:text-blue-800 cursor-pointer" />
          <p className="text-sky-400 hover:text-blue-800 cursor-pointer">1</p>
        </div>

        {/* Mobile hamburger icon */}
        <div className="sm:hidden flex-col flex items-center" onClick={toggleMenu}>
          <div className="w-5 h-1 bg-sky-900 mb-1"></div>
          <div className="w-5 h-1 bg-sky-900 mb-1"></div>
          <div className="w-5 h-1 bg-sky-900"></div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#14213d] text-white py-4`}>
        <ol className="flex flex-col items-center">
          <Link href="/"><li className="py-2 hover:text-sky-400">Home</li></Link>
          <Link href="/shop"><li className="py-2 hover:text-sky-400">Shop</li></Link>
          <Link href="/about"><li className="py-2 hover:text-sky-400">About</li></Link>
          <Link href="/blog"><li className="py-2 hover:text-sky-400">Blog</li></Link>
          <Link href="/contact"><li className="py-2 hover:text-sky-400">Contact</li></Link>
          <Link href="/pages"><li className="py-2 hover:text-sky-400">Pages</li></Link>
        </ol>
      </div>
    </main>
  );
}

export default Header_2;
