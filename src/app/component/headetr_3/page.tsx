import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

function Header_3() {
  return (
    <main>
      <div className="bg-[#2d6a4f] opacity-[0.8] h-12 w-full font-serif text-[0.8rem] font-semibold text-white pt-3">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-between">
            <li className="flex items-center">
              <CiPhone className="text-white ml-3 text-[1.3rem]" />
              <span className="ml-2 hover:text-slate-500">(225) 555-0118</span>
            </li>
            <li className="flex items-center ml-4">
              <CiMail className="text-white text-[1rem]" />
              <span className="ml-2 hover:text-slate-500">michell.rivera@example.com</span>
            </li>
            <li className="hidden sm:flex items-center ml-auto hover:text-slate-500">
              Follow Us and get a chance to Win 80% off
            </li>
            <li className="flex gap-2 ml-auto">
              <span className="flex items-center">
                <span>Follow Us:</span>
                <FaInstagram className="ml-2 mt-1 hover:text-red-400" />
                <FaYoutube className="ml-2 mt-1 hover:text-red-600" />
                <FaFacebook className="ml-2 mt-1 hover:text-blue-800" />
                <IoLogoTwitter className="ml-2 mt-1 hover:text-gray-400" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Header_3;
