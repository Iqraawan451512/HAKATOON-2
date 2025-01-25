"use client"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import Footer from "../component/footer/page";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For Hamburger and Close icon

  




function  Contact(){
        const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu


        const [isRegisterCardOpen, setIsRegisterCardOpen] = useState(false); 

        const [name, setName] = useState(""); 
        const [email, setEmail] = useState(""); 
        const [password, setPassword] = useState(""); 
      


      
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen); // Toggle the menu state
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
        <div className=" lg:flex md:block hidden flex-col md:flex-row gap-4 mt-2 md:mt-0">
          <Link href="/login">
            <li className="text-blue-400 text-sm mt-4 hover:text-slate-400 cursor-pointer">
              Login
            </li>
          </Link>
          <li>
            <button  onClick={handleRegisterClick} 
             className="  lg:flex  md:block hidden items-center justify-center w-[10rem] h-[3rem] rounded bg-blue-400 text-white font-semibold hover:bg-slate-500 hover:text-slate-200">
              Become a member
              <FaArrowRight className="ml-2 text-sm" />
            </button>
          </li>
          
        </div>

      </ul>
    </div>
  
{/** section-main */}
<div className="main flex flex-col md:flex-row items-center justify-center mt-20 gap-10 px-4">
    {/* Main Content */}
    <div className="main-content text-center md:text-left">
        <h3 className="text-sm font-bold text-slate-800 hover:text-gray-400 mb-2 md:ml-12">Contact us</h3>
        <h1 className="text-3xl font-bold text-slate-800 hover:text-blue-400 mb-4 md:ml-12">Get in touch <br />today!</h1>
        <p className="text-slate-400 text-sm font-semibold mb-4 md:ml-12">
            We know how large objects will act, <br />
            but things on a small scale.
        </p>
        <ul className="text-blue-900 font-bold md:ml-12 mb-4">
            <li className="mt-2">Phone: <span>+415151221</span></li>
            <li className="mt-2">Fax: <span>+415151221</span></li>
        </ul>
        <div className="flex justify-center gap-6 text-2xl text-gray-800 mb-4">
            <ImTwitter className="hover:text-blue-900 cursor-pointer" />
            <FaFacebookSquare className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-red-800 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
        </div>
    </div>

    {/* Image Section */}
    <div className="main-picture">
        <img src="contact-main.png" alt="contact image" className="w-[30rem] h-[30rem] object-cover" />
    </div>
</div>

{/**section-2 */}
<div className="main-one mt-[4rem] text-center">
    <h2 className="text-gray-800 text-[0.8rem] font-bold hover:text-gray-400">VISIT OUR OFFICE</h2>
    <h1 className="text-[2rem] text-gray-800 font-bold hover:text-blue-500">We help small businesses  <br /> with big ideas</h1>
</div>


<div className="section-3-main flex flex-wrap justify-center gap-8 mt-16">
    {/* Card 1 */}
    <div className="div-1 h-[20.8rem] w-[15rem] text-center bg-slate-50 hover:translate-y-3 rounded shadow-lg">
        <p className="ml-[6rem] mt-12"><CiPhone className="cursor-pointer text-[3rem] text-blue-400" /></p>
        <p className="text-center text-gray-800 text-sm cursor-pointer font-semibold hover:text-blue-700 mt-4">georgia.young@example.com</p>
        <p className="text-center text-gray-800 text-sm cursor-pointer font-semibold hover:text-blue-700 mt-2">georgia.young@ple.com</p>
        <h2 className="text-center text-gray-800 text-sm font-semibold hover:text-blue-900 mt-4">Get Support</h2>
        <button className="w-[9rem] rounded-full h-[3rem] text-center cursor-pointer hover:bg-blue-400 hover:text-gray-200 text-sm font-semibold text-blue-400 border-[0.1rem] border-blue-400 bg-slate-50 mt-4">Submit Request</button>
    </div>

    {/* Card 2 */}
    <div className="div-2 h-[20.8rem] w-[15rem] text-center bg-blue-950 hover:translate-y-3 rounded shadow-lg">
        <p className="ml-[6rem] mt-12"><IoLocation className="cursor-pointer text-[3rem] text-blue-400" /></p>
        <p className="text-center text-gray-50 text-sm cursor-pointer font-semibold hover:text-blue-700 mt-4">georgia.young@example.com</p>
        <p className="text-center text-gray-50 text-sm cursor-pointer font-semibold hover:text-blue-700 mt-2">georgia.young@ple.com</p>
        <h2 className="text-center text-gray-50 text-sm font-semibold hover:text-blue-900 mt-4">Get Support</h2>
        <button className="w-[9rem] rounded-full h-[3rem] text-center cursor-pointer hover:bg-blue-400 hover:text-gray-200 text-sm font-semibold text-blue-400 border-[0.1rem] border-blue-400 bg-slate-50 mt-4">Submit Request</button>
    </div>

    {/* Card 3 */}
    <div className="div-3 h-[20.8rem] w-[15rem] text-center bg-slate-50 hover:translate-y-3 rounded shadow-lg">
        <p className="ml-[6rem] mt-12"><HiOutlineMail className="cursor-pointer text-[3rem] text-blue-400" /></p>
        <p className="text-center text-gray-800 text-sm cursor-pointer font-semibold hover:text-blue-700 mt-4">georgia.young@example.com</p>
        <p className="text-center text-gray-800 text-sm cursor-pointer font-semibold hover:text-blue-700 mt-2">georgia.young@ple.com</p>
        <h2 className="text-center text-gray-800 text-sm font-semibold hover:text-blue-900 mt-4">Get Support</h2>
        <button className="w-[9rem] rounded-full h-[3rem] text-center cursor-pointer hover:bg-blue-400 hover:text-gray-200 text-sm font-semibold text-blue-400 border-[0.1rem] border-blue-400 bg-slate-50 mt-4">Submit Request</button>
    </div>
</div>

{/**last-section */}
<div className="section-six">
  <div className="content-six mt-[6rem] text-center text-balance  ">
  <PiArrowBendRightDownFill className="text-blue-400 text-[2.5rem]  cursor-pointer ml-[38rem]" />

  <p className="font-bold text-[0.8rem] font-sans text-gray-800 hover:text-gray-600 ">WE CANT WAIT TO MEET YOU</p>
  <h1 className="text-[2.5rem] font-sans font-bold ml-1 hover:text-blue-400 hover:translate-x-1  mt-1">LETS TALK</h1>
  <button className="text-center  font-sans text-[0.8rem] w-[9rem] rounded h-[2.5rem] mt-[1rem] hover:bg-blue-900 cursor-pointer bg-blue-400 text-gray-50 font-semibold" >Try it free now</button>

 </div>

</div>



{/* Register Modal */}
{isRegisterCardOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-semibold text-center mb-2">Want to Become a Member</h2>

            <h2 className="text-xl font-semibold text-center mb-2">Register Now</h2>
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















<Footer/>
</div>
</main>
    )
}
export default Contact