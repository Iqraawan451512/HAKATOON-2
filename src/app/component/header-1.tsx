"use client"
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { useState } from "react"; // Import useState to toggle the menu

function Header_1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <div className="bg-[#14213d] text-white font-serif py-3">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          {/* Left Section: Contact Information */}
          <ul className="hidden sm:flex items-center space-x-6">
            <li className="flex items-center">
              <CiPhone className="text-white text-[1.3rem]" />
              <span className="ml-2 hover:text-slate-500">(225) 555-0118</span>
            </li>
            <li className="flex items-center">
              <CiMail className="text-white text-[1rem]" />
              <span className="ml-2 hover:text-slate-500">michell.rivera@example.com</span>
            </li>
          </ul>

          {/* Center Section: Promotional Message */}
          <div className="text-center sm:text-left text-xs sm:text-sm mb-3 sm:mb-0">
            <span className="block sm:inline-block text-white hover:text-slate-500">
              Follow Us <span className="ml-[1rem]"> and get a chance to Win 80% off</span> 
            </span>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-white ml-[5rem] ">Follow Us:</span>
            <div className="flex gap-2 ml-4">
              <FaInstagram className="hover:text-red-400" />
              <FaYoutube className="hover:text-red-600" />
              <FaFacebook className="hover:text-blue-800" />
              <IoLogoTwitter className="hover:text-gray-400" />
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="sm:hidden flex flex-col justify-center items-center" onClick={toggleMenu}>
            <div className="w-5 h-[0.2rem] bg-white mb-1"></div>
            <div className="w-5 h-[0.2rem] bg-white mb-1"></div>
            <div className="w-5 h-[0.2rem] bg-white mb-1"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#14213d] py-3`}>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="tel:(225)555-0118" className="text-white hover:text-slate-500">Call: (225) 555-0118</a>
            </li>
            <li>
              <a href="mailto:michell.rivera@example.com" className="text-white hover:text-slate-500">Email: michell.rivera@example.com</a>
            </li>
            <li>
              <a href="#follow" className="text-white hover:text-slate-500">Follow Us</a>
            </li>
            <li>
              <a href="#instagram" className="text-white hover:text-slate-500 gap-2 flex">Facebook<FaInstagram className="hover:text-red-400" /></a>
            </li>
            <li>
              <a href="#youtube" className="text-white hover:text-slate-500  gap-2 flex">Youtube<FaYoutube className="hover:text-red-600" /></a>
            </li>
            <li>
              <a href="#facebook" className="text-white hover:text-slate-500  gap-2 flex">Facebook<FaFacebook className="hover:text-blue-800" />
              </a>
            </li>
            <li>
              <a href="#twitter" className="text-white hover:text-slate-500 gap-2 flex">Twitter<IoLogoTwitter className="hover:text-gray-400" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Header_1;
