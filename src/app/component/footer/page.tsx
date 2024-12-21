import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

function Footer() {
    return (
        <main>
            {/* Top section with social media icons */}
            <div className="bg-gray-100 mt-[4rem] h-20 w-full font-serif text-[0.8rem] font-semibold text-[#13315c]  space-x-4 flex flex-row sm:flex-row justify-center sm:justify-between items-center px-4">
                {/* Logo */}
                <p className="logo font-sans font-bold text-[1.6rem] text-[#003049]  hover:text-blue-800 text-center sm:text-left">
                    Bandage
                </p>

                {/* Social media icons */}
                <div className="flex space-x-3 mt-4  sm:mt-0 sm:ml-4 justify-center">
                    <FaInstagram className="text-blue-400 hover:text-red-400 text-[1rem] sm:ml-2" />
                    <FaFacebook className="text-blue-400 hover:text-blue-800 text-[1rem]" />
                    <IoLogoTwitter className="text-blue-400 hover:text-gray-700 text-[1rem]" />
                </div>
            </div>

            {/* Footer sections */}
            <div className="bg-white h-auto w-full flex flex-wrap justify-evenly  py-1">
                {/* Company Info */}
                <div className="w-full sm:w-1/2 lg:w-28 mb-4 mt-10">
                    <ul className="font-sans font-semibold text-[#ced4da]">
                        <li className="text-[1rem] font-bold text-black">Company Info</li>
                        <li>About us</li>
                        <li>Carrier</li>
                        <li>We are Hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="w-full sm:w-1/2 lg:w-28 mb-4 mt-10">
                    <ul className="font-sans font-semibold text-[#ced4da]">
                        <li className="text-[1rem] font-bold text-black">Legal</li>
                        <li>About us</li>
                        <li>Carrier</li>
                        <li>We are Hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Features */}
                <div className="w-full sm:w-1/2 lg:w-28  mt-10 mb-4">
                    <ul className="font-sans font-semibold text-[#ced4da]">
                        <li className="text-[1rem] font-bold text-black">Features</li>
                        <li>Business Marketing</li>
                        <li>User Analytics</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="w-full sm:w-1/2 lg:w-28  mt-10 mb-4">
                    <ul className="font-sans font-semibold text-[#ced4da]">
                        <li className="text-[1rem] font-bold text-black">Resources</li>
                        <li>iOS & Android</li>
                        <li>Watch Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div className="w-full sm:w-1/2 lg:w-28 mb-4 mt-10">
                    <h1 className="text-[1rem] font-bold text-black">Get In Touch</h1>
                    <div className="flex mt-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border-2 bg-gray-200 h-10 border-gray-400 w-[10rem] "
                        />
                        <button className="bg-blue-500 text-white h-10 w-[6rem] ">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-[0.6rem] mt-2"></p>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="bg-gray-100 pt-[1rem] pl-[12rem] h-[3rem] mt-[5rem] text-[0.8rem] font-semibold text-[#adb5bd]">
                <p>Made with Love Finland. All rights reserved.</p>
            </div>
        </main>
    );
}

export default Footer;
