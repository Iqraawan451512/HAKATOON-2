"use client"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Footer_2 from "../component/footer/page";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For Hamburger and Close icon

function About(){
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
      
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen); // Toggle the menu state
        };
    return(
<main>
<div className="main-div">

{/**sectio-navbar**/}

<div className="div-nav">
      {/* Navigation Container */}
      <ul className="flex  lg:ml-[15rem]  md:flex-row md:justify-between gap-8 md:gap-2 font-bold mt-12 px-4">

        {/* Brand Name */}
        <Link href="/">
          <li className="text-2xl font-sans text-gray-800 hover:text-blue-400 cursor-pointer">
            Bandage
          </li>
        </Link>

        {/* Hamburger Icon - Visible only on small screens */}
        <div className="md:hidden flex md:ml-[10rem]">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle between hamburger and close icon */}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex lg:flex-col md:flex-col gap-4 md:gap-8 mt-4 md:mt-0  ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
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
        <div className=" lg:flex md:block hidden flex-col md:flex-row gap-4  mt-2 md:mt-0">
          <Link href="/login">
            <li className="text-blue-400 text-sm hover:text-slate-400 cursor-pointer">
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
  
{/** section-main */}
<div className="main flex flex-col lg:flex-row lg:gap-[10rem] mt-[5rem]">
  {/* Main Content Section */}
  <div className="main-content mt-[1.6rem] px-4 lg:px-0">
    <h3 className="text-[0.8rem] ml-[0rem] lg:ml-[13rem] font-bold font-sans text-slate-800 hover:text-blue-800">
      ABOUT COMPANY
    </h3>
    <h1 className="text-[3rem] mt-[1rem] text-center lg:text-left lg:ml-[12rem] font-bold font-sens hover:text-blue-400">
      ABOUT US
    </h1>
    <p className="text-slate-400 text-[0.8rem] hover:text-gray-700 font-sans mt-[1rem] font-semibold lg:ml-[12.2rem]">
      We know how large objects will act, <br />
      but things on small scale.
    </p>

    <button className="flex w-[10rem] hover:bg-slate-500 mt-[2rem] hover:text-slate-200 rounded h-[2.8rem] pt-3 md:ml-[13rem]  pl-7 bg-blue-400 font-semibold text-white text-center">
      Get Quote Now
    </button>
  </div>

  {/* Image Section */}
  <div className="main-picture flex justify-center lg:justify-start mt-8 lg:mt-0">
    <img src="about-2.png" alt="picture" className="w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem]" />
  </div>
</div>

{/**section 3 */}

<div className="div-3 flex flex-col lg:flex-row w-full h-auto gap-8 lg:gap-[8rem] mt-8">
  {/* Left Section */}
  <div className="div-1 ml-4 lg:ml-[12rem]">
    <h3 className="text-red-600 font-sans text-[0.8rem] font-semibold">Problem trying</h3>
    <h1 className="text-semibold text-[1rem] font-bold font-sans mt-4">
      Met Minim Mollie non desert <br /> Alamo est sit cliquey do met sent
    </h1>
  </div>

  {/* Right Section */}
  <div className="div-2 mt-8 lg:mt-[2.4rem] text-[0.7rem] font-semibold text-slate-400">
    Problems trying to resolve the conflict between the two major realms of <br />
    Classical physics: Newtonian mechanics
  </div>
</div>

{/**section 4 */}

<div className="div-ranks mt-[2rem] flex flex-col sm:flex-row lg:flex-row justify-evenly gap-[2rem] sm:gap-[6rem] lg:gap-[2rem] px-4">
  {/* Rank 1 - Happy Customers */}
  <div className="div-1 flex flex-col items-center text-center">
    <p className="text-[3rem] font-bold hover:text-blue-400">15K</p> 
    <div className="text-[0.9rem] font-semibold text-slate-400 hover:text-gray-800">
      Happy Customers
    </div>
  </div>

  {/* Rank 2 - Monthly Visitors */}
  <div className="div-1 flex flex-col items-center text-center">
    <p className="text-[3rem] font-bold hover:text-blue-400">150K</p> 
    <div className="text-[0.9rem] font-semibold text-slate-400 hover:text-gray-800">
      Monthly Visitors
    </div>
  </div>

  {/* Rank 3 - Countries Worldwide */}
  <div className="div-1 flex flex-col items-center text-center">
    <p className="text-[3rem] font-bold hover:text-blue-400">15</p> 
    <div className="text-[0.9rem] font-semibold text-slate-400 hover:text-gray-800">
      Countries Worldwide
    </div>
  </div>

  {/* Rank 4 - Top Partners */}
  <div className="div-1 flex flex-col items-center text-center">
    <p className="text-[3rem] font-bold hover:text-blue-400">100+</p> 
    <div className="text-[0.9rem] font-semibold text-slate-400 hover:text-gray-800">
      Top Partners
    </div>
  </div>
</div>

{/**section-5 */}
{/**companies members */}
<div className="div-main mt-[3rem]">
    {/**div-1- content */}
    <div className="content text-center">
<h1 className="font-sans font-bold text-[2rem] text-slate-700 hover:text-blue-400"> Meet Our Team</h1>  
<p className="text-[0.8rem] font-bold text-gray-400  mt-4 font-sans text-balance text-center">Problems trying to resolve the Conflict between <br />
the two major realms of Classical physics: Newtonian mechancics </p>
  </div>

  <div className="main-card mt-[6rem] mb-[2rem] gap-8 flex flex-col sm:flex-row lg:flex-row justify-center items-center">
  {/* Card 1 */}
  <div className="div-card-1 max-w-[13rem] w-full p-4 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:translate-y-2">
    <img src="media-3 (1).jpg" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg" />
    <p className="font-bold text-[1rem] mt-[1.7rem] text-center">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem] text-center">Profession</p>
    <p className="flex justify-center mt-[0.3rem] gap-2 font-semibold text-[1rem]">
      <FaFacebook className="text-blue-600 hover:text-sky-500" />
      <FaInstagram className="text-red-800 hover:text-red-950" />
      <FaTwitter className="text-blue-600 hover:text-blue-300" />
    </p>
  </div>

  {/* Card 2 */}
  <div className="div-card-2 max-w-[13rem] w-full p-4 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:translate-y-2">
    <img src="media-3 (2).jpg" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg" />
    <p className="font-bold text-[1rem] mt-[1.7rem] text-center">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem] text-center">Profession</p>
    <p className="flex justify-center mt-[0.3rem] gap-2 font-semibold text-[1rem]">
      <FaFacebook className="text-blue-600 hover:text-sky-500" />
      <FaInstagram className="text-red-800 hover:text-red-950" />
      <FaTwitter className="text-blue-600 hover:text-blue-300" />
    </p>
  </div>

  {/* Card 3 */}
  <div className="div-card-3 max-w-[13rem] w-full p-4 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:translate-y-2">
    <img src="media-3 (1).png" alt="picture" className="w-full h-[10rem] object-cover rounded-t-lg" />
    <p className="font-bold text-[1rem] mt-[1.7rem] text-center">Username</p>
    <p className="text-slate-400 font-semibold text-[0.7rem] text-center">Profession</p>
    <p className="flex justify-center mt-[0.3rem] gap-2 font-semibold text-[1rem]">
      <FaFacebook className="text-blue-600 hover:text-sky-500" />
      <FaInstagram className="text-red-800 hover:text-red-950" />
      <FaTwitter className="text-blue-600 hover:text-blue-300" />
    </p>
  </div>
</div>

{/**section 5 */}
<div className="section-5  bg-slate-50">
<div className="content mt-[6rem] text-center">
<h1 className="font-sans font-bold text-[2.3rem] text-slate-900 hover:text-blue-400"> Big Companies Are Here</h1>  
<p className="text-[0.8rem] font-bold text-gray-400  mt-4 font-sans text-balance text-center">Problems trying to resolve the Conflict between <br />
the two major realms of Classical physics: Newtonian mechancics </p>
<img src="desktop-clients-1.png" alt="picture" className="mt-8 h-[10rem]" />
  </div>

</div>
</div>
{/* Section 6 */}
<div className="section-6 flex flex-col lg:flex-row">
  {/* Left Section - Content */}
  <div className="div-1 w-full lg:w-[50rem] lg:h-[30rem] bg-blue-600 px-4 lg:px-0 ">
    <h3 className="text-center lg:text-center text-white font-sans font-semibold mt-[4rem] lg:mt-[8rem]">
      Work With Us
    </h3>
    <h1 className="text-center lg:text-center text-[2rem] font-sans font-bold text-white hover:text-blue-300 mt-4">
      Now Lets Grow Your
    </h1>
    <p className="text-center lg:text-center text-[0.7rem] text-white font-sans font-semibold mt-[2rem]">
      The gradual accumulation of information about atomic <br />
      small-scale behavior between the first quarter of the 20th century.
    </p>
    <button className="ml-[8rem] lg:ml-[20rem] mt-[2rem] text-[0.9rem] mb-5 lg:item-center w-[7rem] h-[3rem] rounded hover:text-blue-800 hover:bg-blue-400 shadow-lg border-[0.1rem] text-white font-sans font-semibold">
      Button
    </button>
  </div>

  {/* Right Section - Image */}
  <div className="div-2 mt-0 lg:mt-0">
    <img src="fixed-height.png" alt="picture" className="w-full lg:w-[35rem] h-auto max-w-full lg:h-[30rem]" />
  </div>
</div>


</div>
<Footer_2/>
    

</main>
    )
}
export default About