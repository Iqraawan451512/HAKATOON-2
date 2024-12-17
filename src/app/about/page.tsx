import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Footer_2 from "../component/footer/page";
function About(){
    return(
<main>
    <div className="div-0ne">
    
{/**sectio-**/}

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
<h3 className="text-[0.8rem] ml-[13rem] font-bold font-sans text-slate-800 hover:text-blue-800">ABOUT COMPANY</h3>
<h1 className="text-[3rem] mt-[1rem]  ml-[12rem] text-center font-bold font-sens hover:text-blue-400 ">ABOUT US</h1>
    <p className="text-slate-400 text-[0.8rem]  hover:text-gray-700 font-sans mt-[1rem] font-semibold ml-[12.2rem] ">
        we know How Large Object Will Act , <br />
        But Things On Small Scale 
        <button  className=" flex w-[10rem] hover:bg-slate-500 mt-[2rem] hover:text-slate-200 rounded h-[2.8rem] pt-3 pl-6 bg-blue-400 font-semibold text-white text-center">Get Quote Now
</button>
        
    </p>
    </div>

<div className="main-picture">
    <img src="about-2.png" alt="picture" className="w-[30rem] h-[30rem]" />
</div>


</div>
{/**section 3 */}

<div className="div-3 flex  w-full h-[10rem] gap-[8rem]">
    <div className="div-1 ml-[12rem] ">
<h3 className="text-red-600 font-sans text-[0.8rem] font-semibold">Problem trying</h3>
<h1 className="text-bold text-[1rem] font-bold font-sans mt-4">
    Met Minim Mollie non desert  <br /> Alamo est sit cliquey do met sent
</h1>
    </div>
    <div className="div-2 mt-[2.4rem] text-[0.7rem] font-semibold text-slate-400 ">
Problems trying to resolve the conflict between the two major realms of <br />
Classical physics : Newtonian mechanics
    </div>

</div>

<div className="div-ranks ml-[12rem]  h-[10rem] gap-[6rem] mt-[2rem] flex">
    <div className="div-1">
        <div className="text-[3rem] font-bold  ml-[0.6rem] font-sans ">
            <p className="ml-2 hover:text-blue-400">15K</p> 
            <div className="text-[0.9rem] font-semibold font-sans text-slate-400 hover:text-gray-800">Happy Customers</div>
        </div>
        
    </div>
    <div className="div-1 ">
        <div className="text-[3rem] font-bold ml-[0.6rem] font-sans ">
            <p className="hover:text-blue-400">150K</p> 
            <div className="text-[0.9rem] font-semibold font-sans text-slate-400 hover:text-gray-800 ">Monthaly Visitors</div>
        </div>
        
    </div>
    <div className="div-1">
        <div className="text-[3rem] font-bold  ml-[0.6rem] font-sans ">
            <p className=" ml-[2.8rem] hover:text-blue-400">15</p> 
            <div className="text-[0.9rem] font-semibold font-sans text-slate-400 hover:text-gray-800 ">Countries World Wilds</div>
        </div>
        
    </div>
    <div className="div-1">
        <div className="text-[3rem] font-bold  ml-[0.6rem] font-sans ">
            <p className="ml-2 hover:text-blue-400">100+</p> 
            <div className="text-[0.9rem] font-semibold font-sans text-slate-400 ml-[1.2rem] hover:text-gray-800">Top Partners</div>
        </div>
        
    </div>

</div>


{/**section-5 */}
{/**companies members */}
<div className="div-main">
    {/**div-1- content */}
    <div className="content text-center">
<h1 className="font-sans font-bold text-[2rem] text-slate-700 hover:text-blue-400"> Meet Our Team</h1>  
<p className="text-[0.8rem] font-bold text-gray-400  mt-4 font-sans text-balance text-center">Problems trying to resolve the Conflict between <br />
the two major realms of Classical physics: Newtonian mechancics </p>
  </div>

{/**cards */}
<div className="main-card ml-[18rem] mt-[6rem] mb-[2rem] gap-8 flex">
{/**card-1 */}
<div className="div-card-1">
<img src="media-3 (1).jpg" alt="picture" className="w-[13rem] h-[10rem] hover:translate-y-4" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>

</div>

    {/**card-2 */}
<div className="div-card-2">
<img src="media-3 (2).jpg" alt="picture" className="w-[13rem] h-[10rem] hover:translate-y-4" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-1 */}
<div className="div-card-1">
<img src="media-3 (1).png" alt="picture" className="w-[13rem] h-[10rem]" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

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
{/*section*/}
<div className="section-6 flex ">
<div className="div-1 w-[50rem]  bg-blue-600">
<h3 className="ml-[13rem] mt-[5rem] text-white font-sans font-semibold">Work With Us</h3>
<h1 className="ml-[13rem] text-[2rem] font-sans font-bold text-white hover:text-blue-300">Now Lets Grow Your</h1>
<p className="ml-[13rem] mt-[2rem] text-[0.7rem] text-white font-sans font-semibold">The Gruadual accumulations of information about atomic  <br />
small- scale behaviour between the first Quarter of the 20th  </p>
<button className="ml-[13rem] mt-[2rem] text-[0.9rem] w-[7rem] h-[3rem] rounded hover:text-blue-800 hover:bg-blue-400 shadow-lg border-[0.1rem] text-white font-sans font-semibold">Button</button>
</div>
<div className="div-2">
    <img src="fixed-height.png" alt="picture" className="w-[35rem] h-[25rem]"/>
</div>

</div>
<Footer_2/>
    </div>

</main>
    )
}
export default About