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
      <div className="content flex gap-4 items-center h-16 bg-gray-100 px-4">
        <ul className="flex items-center space-x-2">
          {/* Home Link */}
          <li className="flex items-center font-sans text-sm font-semibold text-gray-700">
            <Link href="/" target="_blank" className="hover:text-blue-600">
              Home
            </Link>
            <FaAngleRight className="mt-1 ml-2 text-gray-500" />
          </li>

          {/* Current Page (Shop) */}
        <Link href={"./shopNow"}>  <li className="flex items-center font-sans text-sm font-bold text-gray-400">
            Shop
          </li>
          </Link>
        </ul>
      </div>
    </div>
  


{/** section 2 */}

<div className="section-2 flex flex-col md:flex-row bg-gray-200 p-4">
    {/* Slider Section */}
    <div className="slider w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 md:pl-[10rem] p-4">
        <Slider />
        <p className="flex justify-start ml-4 gap-3">
            <img src="sofa.jpg" alt="sofa" className="h-[4rem] w-[4rem] mt-3 hover:translate-y-2 hover:translate-x-2"/>
            <img src="chair.png" alt="chair" className="h-[4rem] w-[4rem] mt-3 hover:translate-x-2 hover:translate-y-2" />
        </p>
    </div>

    {/* Content Section */}
    <div className="content w-full sm:w-1/4 md:w-2/3  sm:text-balance lg:w-1/2 xl:w-1/3 p-4 md:ml-[15rem] mt-4 md:mt-[3rem]">
        <h1 className="text-slate-600 font-sans font-semibold">Floating Phone</h1>
        <p className="flex mt-2 ">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaRegStar className="text-yellow-300" />
            <span className="text-sm text-slate-600 font-semibold ml-2">10 Reviews</span>
        </p>
        <p className="font-bold text-black text-lg font-sans mt-2">$1139.33</p>
        <p><span className="text-sm text-slate-600 font-semibold">Availability</span><span className="text-blue-400 font-sans text-sm font-semibold"> : In Stock</span></p>
        <p className="text-sm text-slate-400 font-semibold border-b-2 mt-4 border-slate-300 pb-5">
            Met Mini Mollie non Desert Allamo sit calliquey doller do met sit. Relet Consequency Door ENIEM RELET Mollie.
        </p>
        <p className="ml-2 mt-4 flex ">
            <GoDotFill className="text-2xl text-blue-400" />
            <GoDotFill className="text-2xl text-green-600" />
            <GoDotFill className="text-2xl text-orange-400" />
            <GoDotFill className="text-2xl text-black" />
        </p>

        {/* Select Value and Action Buttons */}
        <p className="flex flex-row sm:flex-row pt-5 gap-2 sm:gap-4 sm:w-24 md:w-40 lg:w-48">
        <select defaultValue="option" className="w-full sm:w-24 md:w-40 lg:w-48 h-10 pl-2 hover:bg-slate-300 hover:text-blue-400 bg-blue-400 text-sm font-semibold font-sans rounded text-slate-100">
        <option className="bg-slate-50 text-slate-600">Select Value</option>
        <option className="bg-slate-50 text-slate-500">Cash</option>
      <option className="bg-slate-50 text-slate-500">Add To Card</option>
    </select>

    
    
</p>
<div className="flex   gap-2 sm:gap-4 pt-5">

<span className="ml-2 hover:bg-blue-400 bg-slate-100 w-10 h-10 rounded-full flex  items-center justify-center ">
        <FaHeart className="mt-1 text-sm ml-0.2" />
    </span>

    <span className="bg-slate-100 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center">
        <FaCartShopping className="mt-2 text-lg " />
    </span>

    <span className="bg-slate-100 hover:bg-blue-400 w-10  h-10 rounded-full flex items-center justify-center">
        <IoEye className="mt-2 text-lg" />
    </span>
    </div>

    </div>
</div>

{/**section 3 */}
<div className="div-3 flex gap-5  md:ml-[30rem] text-sm font-sans text-slate-500 px-4 py-2">
    <h1 className="hover:text-blue-900 hover:font-semibold">Description</h1>
    <h2 className="hover:text-blue-900 hover:font-semibold">Additional Information</h2>
  <Link href={"/reviews"}>  <h2 className="hover:text-blue-900 hover:font-semibold">Reviews <span className="text-green-900 font-bold">(0)</span></h2></Link>
</div>

{/**section 4 */}
<div className="div-four flex flex-wrap justify-center md:flex gap-6 px-4 py-10 bg-gray-100">
    <div className="div-one md:ml-[1rem] md:py-7">
        <img src="section-3.png" alt="picture" className="w-[18rem] h-[25rem] hover:translate-x-5 hover:translate-y-5 " />
    </div>
    <div className="div-2 w-full sm:w-2/3 md:w-1/4 xl:w-1/4 mt-6 md:ml-[1rem]">
        <h1 className="font-bold hover:text-blue-700 text-lg ml-[0.3]">
            The Quick For Jump Over
        </h1>
        <p className="ml-[0.3rem] text-sm mt-6 text-slate-400 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  <br />
  cliquey dolor do met sent . RELIT official  <br />
   consequent Door ENIM RELIT MObille . <br />
    Excitation venial Consequent sent nostrum  <br />
    met 
    </p>

        <p className="ml-[0.3rem] text-sm mt-6 text-slate-400 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  <br />
  cliquey dolor do met sent . RELIT official  <br />
   consequent Door ENIM RELIT MObille . <br />
    Excitation venial Consequent sent nostrum  <br />
    met 
    </p>

        <p className="ml-[0.3rem] text-sm mt-6 text-slate-400 font-semibold font-sans">
  Met minim Mobile desert Alamo wst sit  <br />
  cliquey dolor do met sent . RELIT official  <br />
   consequent Door ENIM RELIT MObille . <br />
    Excitation venial Consequent sent nostrum  <br />
    met 
    </p>
    </div>

    <div className="div-3 w-full sm:w-2/3 md:w-1/4 xl:w-1/4 mt-6">
        <h1 className="font-bold hover:text-blue-700 text-lg ml-2">
            The Quick For Jump Over
        </h1>
        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-[0.2]" />
            The quick for the jumps over the lazy dog
        </p>
        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-[0.2]" />
            The quick for the jumps over the lazy dog
        </p>
        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-[0.2]" />
            The quick for the jumps over the lazy dog
        </p>

        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-[0.2]" />
            The quick for the jumps over the lazy dog
        </p>
        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-[0.2]" />
            The quick for the jumps over the lazy dog
        </p>
        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-[0.2]" />
            The quick for the jumps over the lazy dog
        </p>

        <h1 className="font-bold hover:text-blue-700 text-lg ml-2 mt-6">
            The Quick For Jump Over
        </h1>
        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-2" />
            The quick for the jumps over the lazy dog
        </p>

        <p className="flex mt-4 text-sm font-semibold text-slate-400">
            <FaAngleRight className="text-slate-400 text-xl ml-2" />
            The quick for the jumps over the lazy dog
        </p>
    </div>
</div>



    

{/**section 3 */}
<div className="div-3 flex gap-5 text-[0.9rem] font-sans text-slate-500 pl-[30rem] h-[3rem] w-full mt-[4rem]">
    <h1 className="hover:text-blue-900 hover:font-semibold font-semibold">Description</h1>
    <h2 className="hover:text-blue-900 hover:font-semibold font-semibold">Additional Information</h2>
    <h2 className="hover:text-blue-900 hover:font-semibold font-semibold ">Reviews <span className="text-green-900 font-bold">(0)</span></h2>
</div>



{/**section 4 */}
<div className="div-4 mt-5  bg-gray-100 w-full h-fit">
<h1 className="content md:pt-5 text-center font-sans text-2xl sm:text-sm font-bold hover:text-blue-400 border-b-2 border-slate-300 pb-8 w-full">
    BESTSELLER PRODUCTS
</h1>


    {/**product */}
    <div className="main-of-product flex flex-wrap justify-center gap-6 px-4 py-8  md:ml-[5rem]">
        {/**product-1 */}
        <div className="product-1 bg-white w-full sm:w-1/2 md:w-[15rem] xl:w-[15rem]">
         <Link href={"/shopNow"}><img src="plate-1.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>
        
        {/**product-2 */}
        <div className="product-2 bg-white w-full sm:w-1/2 md:w-[15rem] xl:w-[15rem]">
        <Link href={"/shopNow"}>  <img src="cups-2.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>



{/**product-3 */}
<div className="product-1 bg-white w-full sm:w-1/2 md:w-[14rem] xl:w-[15rem]">
<Link href={"/shopNow"}>   <img src="plate-5.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>
        {/**product-4 */}
        <div className="product-1 bg-white w-full sm:w-1/2 md:w-[15rem] xl:w-[15rem]">
        <Link href={"/shopNow"}>  <img src="cups-4.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>
        {/**product-5 */}
        <div className="product-1 bg-white w-full sm:w-1/2 md:w-[15rem] xl:w-[15rem]">
        <Link href={"/shopNow"}>   <img src="plate-5.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>
        {/**product-6 */}
        <div className="product-1 bg-white w-full sm:w-1/2 md:w-[15rem] xl:w-[15rem]">
         <Link href={"shopNow"} >  <img src="chair.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>
        {/**product-7 */}
        <div className="product-1 bg-white w-full sm:w-1/2 md:w-[15rem] xl:w-[15rem]">
        <Link href={"/shopNow"}>    <img src="plate-1.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>
        {/**product-8 */}
        <div className="product-1 bg-white w-full sm:w-1/2 md:w-[15rem] xl:w-[15rem]">
        <Link href={"/shopNow"}> <img src="cups-2.png" alt="product-image" className="w-full h-[12rem] object-cover hover:translate-x-2 hover:translate-y-2" /></Link>
            <p className="font-sans text-gray-black text-sm font-bold text-center mt-3">Grafic Design</p>
            <p className="text-[#6c757d] font-sans font-semibold text-sm text-center mt-2">English Department</p>
            <p className="font-mono font-bold text-sm mt-2 text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
        </div>
        
        











    </div>


</div>
<Footer/>








    </div>
</main>
    )
}
export default Shop_2