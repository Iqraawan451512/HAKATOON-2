import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FiToggleLeft } from "react-icons/fi";
import Footer from "../component/footer/page";
import { TiTick } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function Pricing(){
    return(
<main>
    <div className="main-div">
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
{/**section-2 */}
<div className="main-one mt-[4rem] text-center">
    <h2 className="text-gray-400 text-[0.8rem] font-semibold hover:text-gray-700">PRICING</h2>
    <h1 className="text-[2.5rem] text-gray-800 font-bold hover:text-blue-500">Simple Pricing</h1>
    <h3 className="flex text-[0.8rem] text-gray-800 ml-[37rem] font-bold ">Home<FaAngleRight  className="mt-[0.3rem]"/>
   <span className="text-gray-400 font-semibold ml-[0.5rem]"> Pricing </span></h3>
</div>
{/**section-3 */}
<div className="main-two bg-slate-50 h-[15rem] pt-[5rem] text-center">
    <h2 className="text-gray-800 text-[1.6rem] font-sans font-bold hover:text-gray-700">Pricing</h2>
    <h1 className="text-[0.7rem] text-gray-400  mt-[0.8rem] font-bold hover:text-blue-500">
    Problems trying to resolve the conflict between  <br /> the two major realms of 
    Classical physics : Newtonian mechanics
    </h1>
    <h3 className="flex text-[0.8rem] gap-1 text-gray-800 ml-[33rem] mt-3 font-bold ">monthly  <FiToggleLeft className="mr-2  text-[1.6rem] text-blue-300"/>
    <span>Yearly</span> <button className="boder-2 w-[4rem] rounded-[40rem] hover:bg-blue-950 bg-blue-300 text-blue-600 font-bold border-gray-700 h-[1.5rem] text-[0.5rem]">save 25%</button></h3>
</div>

{/**section-4 */}

<div className="section-5-main flex">
{/**card-1 */}
<div className="div-1 h-[27.8rem]   mt-[0.8rem] ml-[16rem] w-[15rem] text-center  border-[0.1rem] hover:translate-y-3 border-blue-400 rounded">
<h1 className="font-sans font-bold text-[1.2rem] text-gray-900 mt-[2rem] hover:text-blue-600">FREE</h1>
<p className=" font-sans  text-gray-400 font-semibold text-[0.9rem] mt-[1rem]">Organize acros all <br /> apps by hand</p>
<h2 className="flex mt-[1rem] "> 
    <div className="text-blue-400  ml-[5rem] font-sans font-bold text-[1.7rem]">
        0
    </div>
    <div className="text-blue-400   text-[1rem] font-sans font-bold w-[2rem]">
        $
<div className="text-blue-300 text-[0.7rem]  w-[5rem]">Per Month</div>
    </div>
    </h2>
    {/**ofers */}
<div className="main space-y-4 mt-[1rem]">
<div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span ><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
    <div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span ><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
<div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span ><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
    <div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-gray-300 font-extralight text-[0.6rem]" /></span>
    <span>IGB Cloud Storage </span></div>

<div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-gray-300 font-extralight text-[0.6rem]" /></span>
    <span>Email and community <br />support </span></div>

</div> 
<div className="w-[10rem] ml-[2.5rem] h-[2rem] mt-[1.5rem] hover:bg-sky-700 bg-blue-950">
<button className="text-center  font-sans text-[0.8rem] text-slate-100 font-semibold" >Try for free</button>
</div>

</div>

{/**card-2 */}

<div className="div-1 h-[28.9rem]   w-[15rem] text-center bg-blue-900  hover:translate-y-3 border-[0.1rem] border-blue-400 rounded">



<h1 className="font-sans font-bold text-[1.2rem] text-gray-100 mt-[2rem]  hover:text-blue-950">STANDERD</h1>
<p className=" font-sans  text-gray-100 font-semibold text-[0.9rem] mt-[1rem]">Organize acros all <br /> apps by hand</p>
<h2 className="flex mt-[1rem] "> 
    <div className="text-blue-400  ml-[5rem] font-sans font-bold text-[1.7rem]">
        0
    </div>
    <div className="text-blue-400   text-[1rem] font-sans font-bold w-[2rem]">
        $
<div className="text-blue-300 text-[0.7rem]  w-[5rem]">Per Month</div>
    </div>
    </h2>
    {/**ofers */}
<div className="main space-y-4 mt-[1rem]">
<div className="text-gray-100 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
    <div className="text-gray-100 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
<div className="text-gray-100 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
    <div className="text-gray-100 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-gray-300 font-extralight text-[0.6rem]" /></span>
    <span>IGB Cloud Storage </span></div>

<div className="text-gray-100 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-gray-300 font-extralight text-[0.6rem]" /></span>
    <span>Email and community <br />support </span></div>

</div> 
<div className="w-[10rem] ml-[2.5rem] h-[2rem] mt-[1.5rem] hover:bg-blue-950 bg-blue-400">
<button className="text-center  font-sans text-[0.8rem] text-slate-100 font-semibold" >Try for free</button>
</div>



</div>

{/**card-3 */}

<div className="div-1 h-[27.8.5rem]  mt-[0.8rem] w-[15rem] text-center b border-[0.1rem] hover:translate-y-2 border-blue-400 rounded">

<h1 className="font-sans font-bold text-[1.2rem] text-gray-900 mt-[2rem] hover:text-blue-600">PREMIUM</h1>
<p className=" font-sans  text-gray-400 font-semibold text-[0.9rem] mt-[1rem]">Organize acros all <br /> apps by hand</p>
<h2 className="flex mt-[1rem] "> 
    <div className="text-blue-400  ml-[3rem] font-sans font-bold text-[1.7rem]">
        19.99
    </div>
    <div className="text-blue-400   text-[1rem] font-sans font-bold w-[2rem]">
        $
<div className="text-blue-300 text-[0.7rem]  w-[5rem]">Per Month</div>
    </div>
    </h2>
    {/**ofers */}
<div className="main space-y-4 mt-[1rem]">
<div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
    <div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
<div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-green-300 font-extralight text-[0.6rem]" /></span>
    <span>Unlimited Product Updates </span></div>
    <div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-gray-300 font-extralight text-[0.6rem]" /></span>
    <span>IGB Cloud Storage </span></div>

<div className="text-gray-500 font-bold flex font-sans ml-[2rem] gap-1 text-[0.7rem]">
    <span className=""><TiTick className=" w-4 h-4 rounded-lg text-gray-50  bg-gray-300 font-extralight text-[0.6rem]" /></span>
    <span>Email and community <br />support </span></div>

</div> 
<div className="w-[10rem] ml-[2.5rem] h-[2rem] mt-[1.5rem] hover:bg-blue-700 bg-blue-400">
<button className="text-center  font-sans text-[0.8rem] text-slate-100 font-semibold" >Try for free</button>
</div>
</div>

</div>

{/**section-5 */}
<div className="  bg-gray-50 text-center text-[1.1rem] mt-[8rem] font-sans text-gray-600  font-semibold ">
    <h1 className="hover:text-blue-400">Trused By Over 4000  Big Countries</h1>
    <img src="desktop-clients-1.png" alt="its a picture" />
</div>




{/**secton 6 */}

<div className="h-[45rem]">
<div className="div-content">
    <h1 className="text-center font-sans font-semibold  mt-[6rem] text-[2.5rem] text-gray-900 hover:text-blue-400 "> Pricing FAQs</h1>
    <p className="text-center font-sans font-semibold mt-[0.3rem] hover:text-gray-800 text-[1rem] text-gray-400">
        Problems trying to resolve the conflict between <br />
       two major realm of classical Physics
    </p>
</div>

{/**contect div for section-6 */}

<div className="main-6-div flex mt-[5rem] ml-[18rem]">
    {/** section-six-1 */}
     <div className="six-0nn">
     <h1 className= "  flex mt-[1.3rem] text-[0.7rem]  hover:text-blue-600 font-bold text-gray-900"><FaAngleRight className="text-blue-400 text-[1.2rem] ml-2" />
     the quick for the jumps over the lazy dog</h1>
     <p className="ml-[1rem] text-[0.7rem] mt-3 text-slate-500 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  
  cliquey <br /> dolor do met sent . RELIT official 
   consequent Door  ENIM  <br /> RELIT MObille . 
    Excitation venial Consequent sent  <br />nostrum  
    met 
    </p>

    <h1 className= "  flex mt-[1.3rem] text-[0.7rem] hover:text-blue-600 font-bold text-gray-900"><FaAngleRight className="text-blue-400 text-[1.2rem] ml-2" />
     the quick for the jumps over the lazy dog</h1>
     <p className="ml-[1rem] text-[0.7rem] mt-3 text-slate-500 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  
  cliquey <br />  dolor do met sent . RELIT official  
   consequent  <br />Door ENIM RELIT MObille . 
    Excitation venial Consequent sent <br /> nostrum  
    met 
    </p>

    <h1 className= "  flex mt-[1.3rem] text-[0.7rem]  hover:text-blue-600 font-bold text-gray-900"><FaAngleRight className="text-blue-400 text-[1.2rem] ml-2" />
     the quick for the jumps over the lazy dog</h1>
     <p className="ml-[1rem] text-[0.7rem] mt-3 text-slate-500 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit
  cliquey  <br /> dolor do met sent . RELIT official  
   consequent Door ENIM  <br /> RELIT MObille . 
    Excitation venial Consequent sent <br /> nostrum  
    met 
    </p>

     </div>
    {/** section-six-1 */}

<div className="six-two ml-[3rem]">

<h1 className= "  flex mt-[1.3rem] text-[0.7rem] font-bold hover:text-blue-600  text-gray-900"><FaAngleRight className="text-blue-400 text-[1.2rem] ml-2" />
     the quick for the jumps over the lazy dog</h1>
     <p className="ml-[1rem] text-[0.7rem] mt-3 text-slate-500 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  
  cliquey  <br />dolor do met sent . RELIT official 
   consequent Door ENIM <br /> RELIT MObille . 
    Excitation venial Consequent sent <br /> nostrum  
    met 
    </p>
    <h1 className= "  flex mt-[1.3rem] text-[0.7rem]  hover:text-blue-600 font-bold text-gray-900"><FaAngleRight className="text-blue-400 text-[1.2rem] ml-2" />
     the quick for the jumps over the lazy dog</h1>
     <p className="ml-[1rem] text-[0.7rem] mt-3 text-slate-500 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  
  cliquey <br /> dolor do met sent . RELIT official  
   consequent Door <br /> ENIM RELIT MObille . 
    Excitation venial Consequent sent <br /> nostrum  
    met 
    </p>
    <h1 className= "  flex mt-[1.3rem]  hover:text-blue-600 text-[0.7rem] font-bold text-gray-900"><FaAngleRight className="text-blue-400 text-[1.2rem] ml-2" />
     the quick for the jumps over the lazy dog</h1>
     <p className="ml-[1rem] text-[0.7rem] mt-3 text-slate-500  font-sans">
  Met minim Mobile desert Alamo wst sit cliquey  
  <br/> 
  dolor do met sent . RELIT official  
   consequent Door <br /> ENIM RELIT MObille . 
    Excitation venial Consequent sent  <br />nostrum  
    met 
    </p>
</div>

</div>

<h1 className="text-center text-gray-400 font-semibold text-[1rem] hover:text-blue-900  mt-[4rem] font-sans">  <Link href="/about">Hevent got your answers ? call our support </Link></h1>

</div>

{/**section-7 */}
<div className="mt-2">
<h1 className="text-center text-gray-800 font-bold  text-[2rem] hover:text-blue-400  mt-[3rem] font-sans">
     Start your 14 days free trial</h1>
     <p className="text-center text-gray-500 font-semibold  text-[0.8rem]  mt-[2rem] font-sans">
     Met minim Mobile  non desert Alamo wst sit   
  cliquey dolor  <br />do met sent . RELIT official 
   consequent 
</p>


<button className="w-[10rem] ml-[35rem] h-[2.5rem]  rounded mt-[1.5rem] hover:bg-blue-950 bg-blue-500 text-center  font-sans text-[0.8rem] text-slate-100 font-semibold" >Try for free
</button>
<p className="text-center text-gray-500 font-semibold  ml-[36rem] flex text-[1.5rem] gap-2 mt-[1rem] font-sans">
<ImTwitter className="text-blue-500 hover:cursor-pointer hover:text-blue-900" /><FaFacebookSquare className="text-blue-800 hover:text-blue-400 hover:cursor-pointer" /><FaInstagram  className="text-gray-700 hover:text-red-800 hover:cursor-pointer"/><FaLinkedin className="text-blue-700 hover:text-blue-400 hover:cursor-pointer" />

</p>

</div>



    </div>
   <Footer/>
</main>
    )
}
export default Pricing