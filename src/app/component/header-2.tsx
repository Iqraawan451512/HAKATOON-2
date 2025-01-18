"use client"
import { useState } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <nav className="bg-white flex items-center h-[5rem] gap-10 border-b border-[#e5e5e5] px-4  top-10 left-0 right-0">
      {/* Logo */}
      <h1 className="logo font-sans font-bold text-[1.6rem] ml-[1rem] md:ml-[4rem] text-[#003049] hover:text-blue-400 cursor-pointer">
        Bandage
      </h1>

      {/* Desktop and tablet navigation */}
      <ol className="hidden md:ml-[15rem] sm:flex gap-5 font-serif text-[1rem]">
        <Link href="/">
          <li className="text-gray-400 hover:text-blue-800 font-semibold">Home</li>
        </Link>
        <Link href="/shop">
          <li className="text-gray-400 hover:text-blue-800 font-semibold">Shop</li>
        </Link>
        <Link href="/about">
          <li className="text-gray-400 hover:text-blue-800 font-semibold">About</li>
        </Link>
        <Link href="/blog">
          <li className="text-gray-400 hover:text-blue-800 font-semibold">Blog</li>
        </Link>
        <Link href="/contact">
          <li className="text-gray-400 hover:text-blue-800 font-semibold">Contact</li>
        </Link>
        <Link href="/pages">
          <li className="text-gray-400 hover:text-blue-800 font-semibold">Pages</li>
        </Link>
      </ol>

      {/* Desktop login / register and icons */}
      <div className="  flex flex-row gap-3 ">
        <p className="flex font-bold text-sky-400">
          <MdSupervisorAccount className="text-[1.4rem] hover:text-blue-900 cursor-pointer " />
          <Link href="/">
            <span className="hover:text-blue-900 cursor-pointer ml-1">Login</span>
          </Link>
          <span> / </span>
          <Link href="/">
            <span className="hover:text-blue-900 cursor-pointer">Register</span>
          </Link>
        </p>
        <IoMdSearch className="text-[1.3rem] text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex " />
        <MdOutlineShoppingCart className="text-[1.3rem] text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex " />
        <p className="text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex ">1</p>
        <FaRegHeart className="text-[1.1rem] text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex " />
        <p className="text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex ">1</p>
      </div>

      {/* Mobile hamburger icon */}
      <div
        className="sm:hidden flex-col flex items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="w-6 h-1 bg-sky-900 mb-1"></div>
        <div className="w-6 h-1 bg-sky-900 mb-1"></div>
        <div className="w-6 h-1 bg-sky-900"></div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-20 left-0 right-0 bg-[#14213d] text-white ml-5 py-4`}
        style={{ zIndex: 40 }} // Ensure menu appears above the header
      >
        <ol className="flex flex-col items-center">
          <Link href="/">
            <li className="py-2 hover:text-sky-400">Home</li>
          </Link>
          <Link href="/shop">
            <li className="py-2 hover:text-sky-400">Shop</li>
          </Link>
          <Link href="/about">
            <li className="py-2 hover:text-sky-400">About</li>
          </Link>
          <Link href="/blog">
            <li className="py-2 hover:text-sky-400">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="py-2 hover:text-sky-400">Contact</li>
          </Link>
          <Link href="/pages">
            <li className="py-2 hover:text-sky-400">Pages</li>
          </Link>
        </ol>
      </div>
    </nav>
  );
}

export default Header;
