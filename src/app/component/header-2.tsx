"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import ShoppingCartModal from "./ShoppingCartModal";

// Define the CartItem type
interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Use the CartItem type here instead of any[]
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [isRegisterCardOpen, setIsRegisterCardOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state_count, setCount] = useState(5);

  function handleClick() {
    setCount(state_count + 1);
    setCount(state_count + 1);
    setCount(state_count + 1);
    setCount(state_count + 1);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegisterClick = () => {
    setIsRegisterCardOpen(true);
  };

  const closeRegisterCard = () => {
    setIsRegisterCardOpen(false);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration Info:", { name, email, password });

    setName("");
    setEmail("");
    setPassword("");
    setIsRegisterCardOpen(false);
  };

  return (
    <nav className="bg-white flex items-center h-[5rem] gap-10 border-b border-[#e5e5e5] px-4 top-10 left-0 right-0">
      <h1 className="logo font-sans font-bold text-[1.6rem] ml-[1rem] md:ml-[4rem] text-[#003049] hover:text-blue-400 cursor-pointer">
        Bandage
      </h1>

      {/* Main Navigation */}
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

      {/* Right Section: Icons */}
      <div className="flex flex-row gap-3 ml-auto">
        <p className="flex font-bold text-sky-400">
          <MdSupervisorAccount className="text-[1.4rem] hover:text-blue-900 cursor-pointer" />

          {/* Login Button */}
          <Link href={"/login"}>
            <span className="hover:text-blue-900 text-blue-400 cursor-pointer ml-1">
              Login
            </span>
          </Link>
          <span> / </span>

          {/* Register Button */}
          <span onClick={handleRegisterClick} className="hover:text-blue-900 cursor-pointer">
            Register
          </span>
        </p>

        {/* Icons: Search, Cart, Wishlist */}
        <Link href={"./cart"}>
          <MdOutlineShoppingCart
            className="text-[1.3rem] text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex"
          />
        </Link>
        <p className="text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex">
          {cartItems.length}
        </p>

        <button onClick={handleClick}>
          <FaRegHeart className="text-[1.1rem] text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex" />
        </button>
        <p className="text-sky-400 hover:text-blue-800 cursor-pointer hidden sm:flex">
          {state_count}
        </p>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="sm:hidden flex-col flex items-center cursor-pointer" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-sky-900 mb-1"></div>
        <div className="w-6 h-1 bg-sky-900 mb-1"></div>
        <div className="w-6 h-1 bg-sky-900"></div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-20 left-0 right-0 bg-[#14213d] text-white ml-5 py-4`}
        style={{ zIndex: 40 }}
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

      {/* Cart Modal - Shows Cart Items */}
      {isCartOpen && (
        <ShoppingCartModal
          cartItems={cartItems}
          setIsCartOpen={setIsCartOpen}
          setCartItems={setCartItems}
        />
      )}

      {/* Register Modal */}
      {isRegisterCardOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold text-center mb-2">Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Register
              </button>
            </form>
            <button
              onClick={closeRegisterCard}
              className="w-full mt-2 py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
