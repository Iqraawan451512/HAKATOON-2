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
function Pages(){
    return(
<main>
    <div className="div-0ne">
{/****header section */}
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
{/** first main heading */}

<div className="main-heading">
    <h2 className="text-center font-sans font-bold text-gray-500 mt-[2rem] hover:text-blue-400 text-[0.7rem]">WHAT WE DO</h2>
    <h1 className="text-center font-sans font-bold text-blue-950 mt-[1rem] text-[2.7rem]">
        Innovation tailored for you
    </h1>
    <h3 className="flex text-[0.8rem] text-gray-800 ml-[37rem] font-bold ">Home<FaAngleRight  className="mt-[0.3rem] text-gray-400 ml-[1rem]"/>
   <span className="text-gray-400 font-semibold ml-[0.5rem]"> Team </span></h3>
    
    </div> 
{/** section-1 */}
<div className="section-1 flex  mt-[5rem] gap-2">
    <div className="div-one">
        <img src="card-1 (1).png" alt="picture" className="h-[25rem] w-[50rem] hover:translate-y-4 hover:translate-x-4" />
    </div>
    <div className="div-two w-[40rem]    flex-wrap flex gap-2 h-fit">
        <img src="card-1 (9).png" alt="picture-1" className="w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600"/>
        <img src="card-1 (4).png" alt="image-2" className="w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600" />
        <img src="card.png" alt="image-3" className="w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600"/>
        <img src="card-1 (2).png" alt="picture-4" className="w-[17rem] hover:rounded-[5rem] hover:border-[0.2rem] hover:border-blue-600" />
    </div>
</div>
{/**team-section */}

<div className="team-section   mt-[6rem]  ">
<h1 className="font-sans font-bold text-[1.7rem]  mt-[5rem] text-slate-950 hover:text-blue-400 ml-[34rem]"> Meet Our Team</h1>  
{/**cards */}
<div className="team-section  ml-[17rem]  mt-[6rem] w-[50rem] flex-wrap gap-5 flex">
{/** card-1 */}
<div className="div-card-1 ">
<img src="card-1 (8).png" alt="picture" className=" hover:translate-y-5 w-[15rem] h-[10rem]" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-2 */}

<div className="div-card-1">
<img src="card-1 (1).jpg" alt="picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-3 */}

<div className="div-card-1">
<img src="card-1 (2).jpg" alt="card-3 picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-4 */}

<div className="div-card-1 mt-[2rem]">
<img src="media-3 (1).png" alt="card-3 picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-5 */}

<div className="div-card-1  mt-[2rem]">
<img src="card-1 (5).png" alt="card-3 picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-6 */}

<div className="div-card-1  mt-[2rem]">
<img src="media-3 (1).jpg" alt="card-3 picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-7 */}

<div className="div-card-1  mt-[2rem]">
<img src="media-3 (2).jpg" alt="card-3 picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>

{/**card-8 */}

<div className="div-card-1  mt-[2rem]">
<img src="card-1 (7).png" alt="card-3 picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**card-9 */}

<div className="div-card-1  mt-[2rem]">
<img src="card-1 (6).png" alt="card-3 picture" className="w-[15rem] h-[10rem] hover:translate-y-5" />
<p className="ml-[4.5rem] font-bold text-[1rem] mt-[1.7rem]">Username</p>
<p  className="ml-[5rem]  text-slate-400 font-semibold text-[0.7rem]">Profession</p>
<p className="flex ml-[5rem]  mt-[0.3rem] gap-2 font-semibold text-[1rem]"> <FaFacebook className="text-blue-600  hover:text-sky-500" /> <FaInstagram className="text-red-800 hover:text-red-950" /><FaTwitter className="text-blue-600 hover:text-blue-300" />

</p>
</div>
{/**last- section */}

<div className="mt-2">
<h1 className="text-center text-gray-800 font-bold ml-[10rem] text-[2rem] hover:text-blue-400  mt-[3rem] font-sans">
     Start your 14 days free trial</h1>
     <p className="text-center text-gray-500  ml-[10rem] font-semibold  text-[0.8rem]  mt-[2rem] font-sans">
     Met minim Mobile  non desert Alamo wst sit   
  cliquey dolor  <br />do met sent . RELIT official 
   consequent 
</p>


<button className="w-[10rem]  h-[2.5rem] ml-[18rem]  rounded mt-[1.5rem] hover:bg-blue-950 bg-blue-500 text-center  font-sans text-[0.8rem] text-slate-100 font-semibold" >Try for free
</button>
<p className=" text-gray-500 font-semibold ml-[20rem] text-center flex text-[1.5rem] gap-2 mt-[1rem] font-sans">
<ImTwitter className="text-blue-500 hover:cursor-pointer hover:text-blue-900" /><FaFacebookSquare className="text-blue-800 hover:text-blue-400 hover:cursor-pointer" /><FaInstagram  className="text-gray-700 hover:text-red-800 hover:cursor-pointer"/><FaLinkedin className="text-blue-700 hover:text-blue-400 hover:cursor-pointer" />

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