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
function  Contact(){
    return(
<main>
<div className="main-div">

{/**sectio-navbar**/}

<div className="div-nav">
    <ul className="flex gap-[1.5rem] font-bold mt-[3rem] font-sans">
        <Link href="/"><li className="text-[1.5rem] ml-[10rem] hover:text-blue-400 " >Bnadage</li></Link>
        <Link href="/shop-2"><li className="mt-[0.4rem] ml-[13rem] text-slate-500 text-[0.8rem]  hover:text-blue-400 ">Product</li></Link>
        <Link href="/about"><li className="mt-[0.4rem] text-slate-500 text-[0.8rem]  hover:text-blue-400 ">About</li></Link>
        <Link href="/pricing"> <li className="mt-[0.4rem]  text-slate-500 text-[0.8rem]  hover:text-blue-400 ">Pricing</li></Link>
        <Link href="/contact"><li className="mt-[0.4rem]  text-slate-500 text-[0.8rem]  hover:text-blue-400 ">Contact</li></Link>
        <li className="mt-[0.4rem]  ml-[14rem] text-blue-400 text-[0.8rem]  hover:text-slate-400 ">Login</li>
        <li className="mt-[0.1rem]  text-blue-400 text-[0.8rem]  hover:text-blue-400 ">
            <button  className=" flex w-[10rem] hover:bg-slate-500 hover:text-slate-200 rounded h-[3rem] pt-3 pl-3 bg-blue-400 font-semibold text-white text-center">Become a member
            <FaArrowRight  className="ml-2 text-[0.8rem] mt-[0.2rem]"/>

            </button>
        </li>

    </ul>
</div>
{/** section-main */}
<div className="main flex mt-[5rem]  gap-[10rem]">
    <div className="main-content   mt-[1.6rem] ">
<h3 className="text-[0.8rem] ml-[13rem] font-bold font-sans text-slate-800 hover:text-gray-400 ">Contact us</h3>
<h1 className="text-[3rem] mt-[1rem]  ml-[12rem]  font-bold font-sens hover:text-blue-400 ">Get in touch <br />today!</h1>
    <p className="text-slate-400 text-[0.8rem]  font-sans mt-[1rem] font-semibold ml-[12.2rem] ">
        we know How Large Object Will Act , <br />
        But Things On Small Scale 
       </p>
       
        <ul>
            <li className="text-blue-900 font-bold ml-[12.5rem] mt-[1rem]">phone; <span>+415151221</span></li>
            <li className="text-blue-900 font-bold ml-[12.5rem] mt-[0.5rem]">fax: <span>+415151221</span></li>

        </ul>
        <p className="text-center text-gray-500 font-semibold  ml-[12rem] flex text-[1.5rem] gap-4 mt-[1rem] font-sans">
        <ImTwitter className="text-gray-800 hover:cursor-pointer hover:text-blue-900" /><FaFacebookSquare className="text-gray-800 hover:text-blue-400 hover:cursor-pointer" /><FaInstagram  className="text-gray-800 hover:text-red-800 hover:cursor-pointer"/><FaLinkedin className="text-gray-800 hover:text-blue-400 hover:cursor-pointer" />
        
        </p>
       
    </div>

<div className="main-picture">
    <img src="contact-main.png" alt="picture" className="w-[30rem] h-[30rem]" />
</div>
</div>
{/**section-2 */}
<div className="main-one mt-[4rem] text-center">
    <h2 className="text-gray-800 text-[0.8rem] font-bold hover:text-gray-400">VISIT OUR OFFICE</h2>
    <h1 className="text-[2rem] text-gray-800 font-bold hover:text-blue-500">We help small businesses  <br /> with big ideas</h1>

</div>

{/**section-3 */}
<div className="section-3-main flex">
    {/**"card-1**/}
<div className="div-1 h-[20.8rem]   mt-[4rem] ml-[16rem] w-[15rem] text-center bg-slate-50  hover:translate-y-3 rounded">
<p className="ml-[6rem]"><CiPhone className="  cursor-pointer font-extrabold mt-[3.5rem] text-[3rem]  text-blue-400"/></p>
<p className="text-center text-gray-800 text-[0.7rem] cursor-pointer font-sans font-bold hover:text-blue-700 mt-[1rem]">georgia.young@example.com </p>
<p className=" text-center text-gray-800 text-[0.7rem] font-sans cursor-pointer font-bold hover:text-blue-700 mt-[0.6rem]">geogria.young@ple.com</p>
<h2 className="text-center text-gray-800  text-[0.9rem] font-sans font-bold hover:text-blue-900  mt-[1rem]">Get Support</h2>
<button className="w-[9rem]  rounded-full h-[3rem] text-center cursor-pointer hover:bg-blue-400 hover:text-gray-200 text-[0.8rem] font-semibold text-blue-400 border-[0.1rem] border-blue-400 bg-slate-50 mt-[1.5rem]">Submit Request</button>

</div>
 {/**"card-2**/}
 <div className="div-2 h-[20.8rem]   mt-[4rem]  w-[15rem] text-center bg-blue-950  hover:translate-y-3 rounded">
<p className="ml-[6rem]"><IoLocation className="  cursor-pointer font-extrabold mt-[3.5rem] text-[3rem]  text-blue-400"/></p>
<p className="text-center text-gray-50 text-[0.7rem] cursor-pointer font-sans font-bold hover:text-blue-700 mt-[1rem]">georgia.young@example.com </p>
<p className=" text-center text-gray-50 text-[0.7rem] font-sans cursor-pointer font-bold hover:text-blue-700 mt-[0.6rem]">geogria.young@ple.com</p>
<h2 className="text-center text-gray-50  text-[0.9rem] font-sans font-bold hover:text-blue-900  mt-[1rem]">Get Support</h2>
<button className="w-[9rem]  rounded-full h-[3rem]  bg-transparent text-center cursor-pointer hover:bg-blue-400 hover:text-gray-200 text-[0.8rem] font-semibold text-blue-400 border-[0.1rem] border-blue-400 bg-slate-50 mt-[1.5rem]">Submit Request</button>

</div>





 {/**"card-3**/}
 <div className="div-3 h-[20.8rem]   mt-[4rem]  w-[15rem] text-center bg-slate-50  hover:translate-y-3 rounded">
<p className="ml-[6rem]"><HiOutlineMail className="  cursor-pointer font-extrabold mt-[3.5rem] text-[3rem]  text-blue-400"/></p>
<p className="text-center text-gray-800 text-[0.7rem] cursor-pointer font-sans font-bold hover:text-blue-700 mt-[1rem]">georgia.young@example.com </p>
<p className=" text-center text-gray-800 text-[0.7rem] font-sans cursor-pointer font-bold hover:text-blue-700 mt-[0.6rem]">geogria.young@ple.com</p>
<h2 className="text-center text-gray-800  text-[0.9rem] font-sans font-bold hover:text-blue-900  mt-[1rem]">Get Support</h2>
<button className="w-[9rem]  rounded-full h-[3rem] text-center cursor-pointer hover:bg-blue-400 hover:text-gray-200 text-[0.8rem] font-semibold text-blue-400 border-[0.1rem] border-blue-400 bg-slate-50 mt-[1.5rem]">Submit Request</button>

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








<Footer/>
</div>
</main>
    )
}
export default Contact