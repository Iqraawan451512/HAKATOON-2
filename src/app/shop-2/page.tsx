import Header_2 from "../component/header-2"
import Header_3 from "../component/headetr_3/page"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import Slider from "../component/slider/slider";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Footer from "../component/footer/page";


function Shop_2(){
    return(
<main>
    <div className="main-div">
<Header_3 />
<Header_2/>
        <div className="shop-one-div">
<div className="content   flex gap-[46rem] h-[4rem] bg-gray-100" >
<ul className="flex mt-6 ">
   <Link href="/" target="_blank"><li className="flex font-sans ml-[3rem] text-[0.8rem] font-semibold">Home<FaAngleRight className="mt-[0.5em] ml-[0.7rem]"/></li></Link>
   <li className="flex font-sans text-[0.8rem] mt-[0.1rem] ml-[0.4rem] font-bold text-gray-400">Shop</li>
</ul>
</div>
</div>
{/** section 2 */}
<div className="section-2 flex bg-gray-200">
    <div className="slider">

<Slider/>
<p className="flex ml-[10rem] gap-3">
<img src="sofa.jpg" alt="picture"  className="h-[4rem] w-[4rem] mt-3 hover:translate-y-2 hover:translate-x-2"/>
<img src="chair.png" alt="picture"  className="h-[4rem] w-[4rem] mt-3 hover:translate-x-2 hover:translate-y-2" />
</p>
    </div>
<div className="contect ml-[2rem] mt-[4.5rem]">
    <h1 className="text-slate-600  font-sans font-semibold">Floating Phone</h1>
    <p className="flex mt-[0.8rem]"> <FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" />
    <FaRegStar className="text-yellow-300" />



    <span className="text-[0.8rem] text-slate-600 font-semibold ml-[0.4rem]">10 Reviews</span></p>

    <p className="font-bold text-black text-[1rem] font-sans mt-[0.9rem]">$1139.33</p>
    <p><span className=" text-[0.7rem] text-slate-600 font-semibold">Avallablity</span><span className="text-blue-400 font-sans text-[0.7rem] font-semibold"> : InStok</span></p>
    <p className="text-[0.7rem] text-slate-400 font-semibold border-b-2 mt-[1rem] border-slate-300 pb-5  ">
Met Mini Mollie non Desert Allamo sit calliquey  doller <br />
 do met sit.Relet Consequency Door ENIEM RELET Mollie . <br />
 Execitation venial Consequent sent nostrum met 


    </p>
    <p className="ml-[0.6rem]  mt-[2rem] flex"><GoDotFill  className="text-[2rem]   text-blue-400"/><GoDotFill  className="text-[2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.9rem] text-orange-400"/><GoDotFill  className="text-[1.9rem] text-black"/>
  </p>
  <p className="flex pt-5"> <select defaultValue="option" className="w-[7rem] h-[2.5rem] pl-2 hover:bg-slate-300 hover:text-blue-400  bg-blue-400 text-[0.8rem] font-semibold font-sans rounded text-slate-100"> 
  <option defaultValue="cash" className="bg-slate-50 text-slate-600">Select Value</option>
  <option defaultValue="cash" className="bg-slate-50 text-slate-500">Cash</option>
  <option defaultValue="cash" className="bg-slate-50 text-slate-500">Add To Card</option>
</select>
  <span className="  ml-2 hover:bg-blue-400 boder-2 bg-slate-100 w-10 h-10 rounded-[5rem]"> <FaHeart className="mt-3 text-[0.9rem] ml-[0.7rem] " /></span>

  <span className="  boder-2 hover:bg-blue-400 bg-slate-100 w-10 h-10 rounded-[5rem]"><FaCartShopping  className="mt-3 text-[1rem] ml-3 text-center" /></span>
  <span className="  boder-2 bg-slate-100  hover:bg-blue-400 w-10 h-10 rounded-[5rem]"><IoEye  className="mt-3 text-[1rem] ml-[0.6rem]" /></span>

  </p>
</div>
</div>

{/**section 3 */}
<div className="div-3 flex gap-5 text-[0.9rem] font-sans text-slate-500 pl-[30rem] h-[5rem] w-full mt-[2.5rem]">
    <h1 className="hover:text-blue-900 hover:font-semibold font-semibold">Description</h1>
    <h2 className="hover:text-blue-900 hover:font-semibold font-semibold">Additional Information</h2>
    <h2 className="hover:text-blue-900 hover:font-semibold font-semibold ">Reviews <span className="text-green-900 font-bold">(0)</span></h2>
</div>


{/**section 4 */}
<div className="div-four flex">
<div className="div-one ml-[15rem]">
    <img src="section-3.png" alt="picture" className="w-[18rem] h-[22rem] hover:translate-x-5 hover:translate-y-5 " />
</div>
<div className="div-2 ml-[1rem]">
    <h1 className="font-bold  hover:text-blue-700 text-[1.2rem] ml-[1rem]">
        the quick for jump over 
    </h1>
    <p className="ml-[1rem] mt-[1.2rem] text-[0.7rem] text-slate-400 font-semibold font-sans">
     Met minim Mobile desert Alamo wst sit  <br />
     cliquey dolor do met sent . RELIT official  <br />
     consequent Door ENIM RELIT MObille . <br />
     Excitation venial Consequent sent nostrum <br />
      met 
    </p>
    
    <p className="ml-[1rem] text-[0.7rem] text-balance mt-6 text-slate-400 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  <br />
  cliquey dolor do met sent . RELIT official  <br />
   consequent Door ENIM RELIT MObille . <br />
    Excitation venial Consequent sent nostrum  <br />
    met 
    </p>
    
    <p className="ml-[1rem] text-[0.7rem] mt-6 text-slate-400 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  <br />
  cliquey dolor do met sent . RELIT official  <br />
   consequent Door ENIM RELIT MObille . <br />
    Excitation venial Consequent sent nostrum  <br />
    met 
    </p>
</div>

<div className="div-3 ml-[1.5rem] ">
<h1 className="font-bold  hover:text-blue-700 text-[1.2rem] ml-[1rem]">
        the quick for jump over 
    </h1>
<p className= "  flex mt-[1.3rem] text-[0.7rem] font-semibold text-slate-400"><FaAngleRight className="text-slate-400 text-[1.2rem] ml-2" />
the quick for the jumps over the lazy dog</p>

<p className= "  flex mt-[1.2rem] text-[0.7rem] font-semibold text-slate-400"><FaAngleRight className="text-slate-400 text-[1.2rem] ml-2" />
the quick for the jumps over the lazy dog</p>
<p className= "  flex mt-[1.2rem] text-[0.7rem] font-semibold text-slate-400"><FaAngleRight className="text-slate-400 text-[1.2rem] ml-2" />
the quick for the jumps over the lazy dog</p>
<p className= "  flex mt-[1.2rem] text-[0.7rem] font-semibold text-slate-400"><FaAngleRight className="text-slate-400 text-[1.2rem] ml-2" />
the quick for the jumps over the lazy dog</p>


<h1 className="font-bold  hover:text-blue-700 text-[1.2rem] ml-[1rem] mt-4">
        the quick for jump over 
    </h1>
<p className= "  flex mt-[1.2rem] text-[0.7rem] font-semibold text-slate-400"><FaAngleRight className="text-slate-400 text-[1.2rem] ml-2" />
the quick for the jumps over the lazy dog</p>

<p className= "  flex mt-[1.2rem] text-[0.7rem] font-semibold text-slate-400"><FaAngleRight className="text-slate-400 text-[1.2rem] ml-2" />
the quick for the jumps over the lazy dog</p>



</div>

</div>

{/**section 4 */}
<div className="div-4 mt-[3rem] bg-gray-100 w-full h-fit ">
    <h1 className="content ml-[13.7rem] pt-[3rem] font-sans text-center  gap-4  font-bold text-[1.2rem] hover:text-blue-400  border-b-2 border-slate-300 pb-8 w-[52rem] ">
        BESTSELLER PRODUCTS
    </h1>
    {/**product */}
<div className="main-of-product  flex flex-wrap w-[60rem] gap-4 text-center ml-[14rem] mt-[3rem]  ">

{/**product-1 */}
<div className="product-1 bg-white">
  <img src="plate-1.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>
{/**product-2 */}
<div className=" product-2  bg-white">
  <img src="cups-2.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>

{/**product-3 */}
<div className=" product-3  bg-white">
  <img src="plate.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>

{/**product-4 */}
<div className=" product-4  bg-white ">
  <img src="cups-4.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>


{/**product-5 */}
<div className=" product-5  bg-white">
  <img src="cups-2.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>
{/**product-6 */}
<div className=" product-6  bg-white">
  <img src="chair.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>


{/**product-7 */}
<div className=" product-7  bg-white">
  <img src="plate-1.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>
{/**product-8 */}
<div className=" product-8  bg-white">
  <img src="cups-2.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-x-2 hover:translate-y-2" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  
</div>

<div className="section-3 mt-10 w-[51.5rem] mb-5">
    <img src="desktop-clients-1.png" alt="picture" />

</div>

</div>
</div>
<Footer/>








    </div>
</main>
    )
}
export default Shop_2