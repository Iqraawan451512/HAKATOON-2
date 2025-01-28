"use client"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Footer from "../component/footer/page";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For Hamburger and Close icon
function Pages(){
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
          
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };
    return(
<main>
    <div className="div-0ne">
{/****header section */}
<div className="div-nav">
      {/* Navigation Container */}
      <ul className="flex  lg:ml-[15rem]  md:flex-row md:justify-between  gap-2 md:gap-2 font-bold mt-12 px-4">

        {/* Brand Name */}
        <Link href="/">
          <li className="text-2xl font-sans text-gray-800 hover:text-blue-400 cursor-pointer">
            Bandage
          </li>
        </Link>

        {/* Hamburger Icon - Visible only on small screens */}
        <div className="md:hidden flex md:ml-[15rem]">
          <button onClick={toggleMenu} className="text-gray-800 ">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle between hamburger and close icon */}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex lg:flex-col md:flex-col gap-4 md:gap-8 mt-4 md:mt-0  ${isMenuOpen ? 'block' : 'hidden md:block'} `}>
         <ul className="flex gap-4 ">
          <Link href="/shop-2">
            <li className="text-slate-500 text-sm hover:text-blue-400 cursor-pointer">
              Product
            </li>
          </Link>
          <Link href="/about">
            <li className="text-slate-500 text-sm hover:text-blue-400 cursor-pointer">
              About
            </li>
          </Link>
          <Link href="/pricing">
            <li className="text-slate-500 text-sm hover:text-blue-400 cursor-pointer">
              Pricing
            </li>
          </Link>
          <Link href="/contact">
            <li className="text-slate-500 text-sm hover:text-blue-400 cursor-pointer">
              Contact
            </li>
          </Link>
          </ul>
        </div>

        {/* Login and Membership Button */}
        <div className=" lg:flex md:block hidden flex-col md:flex-row gap-4 mt-2 md:mt-0">
          <Link href="/login">
            <li className="text-blue-400 text-sm hover:text-slate-400  md:mt-4 cursor-pointer">
              Login
            </li>
          </Link>
          <li>
            <button className="  lg:flex  md:block hidden items-center justify-center w-[10rem] h-[3rem] rounded bg-blue-400 text-white font-semibold hover:bg-slate-500 hover:text-slate-200">
              Become a member
              <FaArrowRight className="ml-2 text-sm" />
            </button>
          </li>
        </div>

      </ul>
    </div>
{/** first main heading */}

<div className="main-heading">
  {/* Section Heading */}
  <h2 className="text-center font-sans font-bold text-gray-500 mt-[2rem] hover:text-blue-400 text-[0.7rem] sm:text-[1rem]">
    WHAT WE DO
  </h2>
  
  {/* Main Title */}
  <h1 className="text-center font-sans font-bold text-blue-950 mt-[1rem] text-[2.7rem] sm:text-[3rem] md:text-[3.5rem]">
    Innovation tailored for you
  </h1>
  
  {/* Breadcrumb Navigation */}
  <h3 className="flex justify-center  lg:ml-[40rem] sm:justify-start text-[0.8rem] text-gray-800 mt-[1rem] font-bold">
    <span>Home</span>
    <FaAngleRight className="mt-[0.3rem] text-gray-400 mx-[0.5rem]" />
    <span className="text-gray-400 font-semibold">Team</span>
  </h3>
</div>
 

<div className="section-1 flex flex-wrap mt-[5rem] ">

  {/* Large image container */}
  <div className="div-one w-full lg:w-[50%]">
    <img 
      src="card-1 (1).png" 
      alt="picture" 
      className="w-full h-auto hover:translate-y-4 hover:translate-x-4 transition-all"
    />
  </div>

  {/* Smaller images container */}
  <div className="div-two w-full lg:w-[50%] flex flex-wrap gap-4 justify-center mt-4 lg:mt-0">
         <img 
      src="card-1 (9).png" 
      alt="picture-1" 
      className="w-[100%] sm:w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600 transition-all"
    />
    <img 
      src="card-1 (4).png" 
      alt="image-2" 
      className="w-[100%] sm:w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600 transition-all"
    />
    <img 
      src="card.png" 
      alt="image-3" 
      className="w-[100%] sm:w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600 transition-all"
    />
    <img 
      src="card-1 (2).png" 
      alt="picture-4" 
      className="w-[100%] sm:w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600 transition-all"
    /> 
  </div>
</div>

{/**team-section */}

<div className=" ml-[1rem] ">
  <h1 className="font-sans font-bold text-[1rem] sm:text-[0.6rem] md:text-[1.5rem] mt-[5rem] text-slate-950 hover:text-blue-400  ">
    Meet Our Team
  </h1>
{/**cards */}
<div className="team-section mt-[6rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-[50rem] lg:ml-[14rem] px-4">
    {/** card-1 */}
    <div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="card-1 (8).png" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**card-2 */}


<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="card-1 (1).jpg" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**card-3 */}


<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="card-1 (5).png" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**card-4 */}


<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="card-1 (2).jpg" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**card-5 */}


<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="media-3 (1).jpg" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**card-6 */}

{/** card-1 */}
<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="media-3 (2).jpg" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**card-7 */}


<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="media-3 (1).png" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>

{/**card-8 */}


<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="card-1 (7).png" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**card-9 */}

{/** card-1 */}
<div className="div-card-1 w-[15rem] h-[15rem] flex flex-col items-center justify-center   hover:translate-y-5 transition-transform">
    <img src="card-1 (6).png" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg"/>
    <p className="font-bold text-[1rem] mt-[1.7rem]">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem]">Profession</p>
    <div className="flex mt-[0.3rem] gap-2 text-[1rem]">
        <FaFacebook className="text-blue-600 hover:text-sky-500" />
        <FaInstagram className="text-red-800 hover:text-red-950" />
        <FaTwitter className="text-blue-600 hover:text-blue-300" />
      </div>


</div>
{/**last- section */}

<div className="mt-2 text-center lg:ml-[10rem] w-[20rem] ">
  <h1 className="text-gray-800 font-bold text-[1rem]  item-center sm:text-[2rem] md:text-[1.9rem] hover:text-blue-400 mt-[3rem] font-sans mx-auto">
    Start your 14 days free trial
  </h1>
  
  <p className="text-gray-500 font-semibold text-[0.8rem] sm:text-[1rem] md:text-[1rem] mt-[2rem] mx-auto max-w-[20rem] text-center">
    Met minim Mobile non desert Alamo wst sit cliquey dolor do met sent. RELIT official consequent.
  </p>

  <button className="w-[10rem] sm:w-[12rem] h-[2.5rem] rounded mt-[1.5rem] hover:bg-blue-950 bg-blue-500 text-center font-sans text-[0.8rem] text-slate-100 font-semibold mx-auto">
    Try for free
  </button>

  <p className="text-gray-500 font-semibold text-[1.5rem] gap-2 mt-[1rem] flex justify-center">
    <ImTwitter className="text-blue-500 hover:cursor-pointer hover:text-blue-900" />
    <FaFacebookSquare className="text-blue-800 hover:text-blue-400 hover:cursor-pointer" />
    <FaInstagram className="text-gray-700 hover:text-red-800 hover:cursor-pointer" />
    <FaLinkedin className="text-blue-700 hover:text-blue-400 hover:cursor-pointer" />
  </p>
</div>


</div>

</div>

<Footer/>
    </div>
</main>
    )
}
export default Pages