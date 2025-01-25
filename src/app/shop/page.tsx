import Header_2 from "../component/header-2";
import Header_3 from "../component/headetr_3/page";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import Footer from "../component/footer/page";
import { GoDotFill } from "react-icons/go";

function Shop() {
    return (
        <main>
            <Header_3 />
            <Header_2 />
            <div className="div-one">
                <div className="shop-one-div">
                    <div className="content flex flex-col md:flex-row gap-4 md:gap-[30rem] h-[4rem] bg-gray-100">
                        <Link href={"/shopNow"}><h1 className="font-bold mx-auto lg:justify-between md:ml-[10.5rem] mt-5">Shop</h1></Link>
                        <ul className="flex mt-6 justify-center md:justify-start">
                            <Link href="/" target="_blank">
                                <li className="flex font-sans lg:ml-[20rem] text-[0.8rem] font-semibold">
                                    Home
                                    <FaAngleRight className="mt-[0.5em] ml-[0.7rem]" />
                                </li>
                            </Link>
                            <Link href={"/shopNow"}><li className="flex font-sans text-[0.8rem] mt-[0.1rem] ml-[0.4rem] font-bold text-gray-400">Shop</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Cards Section */}
                    <div className="shop-card flex flex-wrap gap-5 bg-gray-100 justify-center">
    {/* Card 1 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
    <Link href={"/shopNow"}>    <img src="card-item (2).png" alt="picture" className="h-full w-full hover:translate-y-4 object-cover" /></Link>
    </div>
    {/* Card 2 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
    <Link href={"/shopNow"}> <img src="col-md-4 (1).png" alt="picture" className="h-full w-full hover:translate-y-4 object-cover" /></Link>
    </div>
    {/* Card 3 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
    <Link href={"/shopNow"}>  <img src="col-md-4 (2).png" alt="picture" className="h-full w-full hover:translate-y-4 object-cover" /></Link>
    </div>
    {/* Card 4 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
    <Link href={"/shopNow"}>  <img src="card-item (1).png" alt="picture" className="h-full w-full object-cover hover:translate-y-4" /></Link>
    </div>
    {/* Card 5 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
    <Link href={"/shopNow"}>  <img src="card-item.png" alt="picture" className="h-full w-full object-cover hover:translate-y-4" /></Link>
    </div>
</div>

                </div>
            </div>

            {/* Section 2: Filter and View Options */}
            <div className="div-two mt-[3rem] ">
                <ul className="flex   text-[0.8rem] text-extrabold text-gray-600 font-serif gap-[5rem] md:gap-[17rem] mx-auto justify-center">
                <Link href={"/shopNow"}><li className="hover:text-blue-800">showing all 12 products</li></Link>
                    <li className="flex">
                        views:
                        <AiFillAppstore className="text-[0.8rem] mt-[0.2rem] hover:text-blue-800 ml-2 h-[1rem] p-[0.2rem] w-[1rem] bg-slate-50" />
                        <AiOutlineBars className="text-[0.8rem] font-extrabold hover:text-blue-800 ml-[0.4rem] mt-[0.3rem] h-[1rem] p-[0.2rem] w-[1rem] text-extrabold bg-slate-50" />
                    </li>
                    <li>
                        <select defaultValue="popularity" className="bg-gray-100 hover:bg-blue-600 hover:text-gray-50 border-2 pl-[0.6rem] border-gray-300 w-[6.5rem] h-[2rem]">
                            <option value="popularity">popularity</option>
                        </select>
                        <button className="ml-[0.6rem] bg-blue-600 hover:bg-slate-600 text-gray-50 border-0 pl-[0.4rem] w-[4rem] rounded h-[2rem]">
                            Filter
                        </button>
                    </li>
                </ul>
            </div>

            {/* Section 3: Image/Clients */}
            <div className="section-3 mt-10">
                <img src="desktop-clients-1.png" alt="clients" className="w-full object-cover" />
            </div>

            <Footer />

            {/* Product Section */}
            <div className="main-of-product flex flex-wrap md:w-[60rem] md:ml-[10rem] justify-center gap-4 mt-[3rem]">
                {/* Product 1 */}
                <div className="product text-center">
                <Link href={"/shopNow"}> <img src="product-cover-5 (4).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>
                    <p className="font-sans text-gray-black text-[0.8rem] font-bold mt-3">Grafic Design</p>
                    <p className="text-[#6c757d] font-sans font-semibold text-[0.9rem] mt-2">English Department</p>
                    <p className="font-mono font-bold text-[0.8rem] mt-[0.3rem] text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
                    <p className="ml-[3.8rem] flex justify-center">
                        <GoDotFill className="text-[1.2rem] text-blue-400" />
                        <GoDotFill className="text-[1.2rem] text-green-600" />
                        <GoDotFill className="text-[1.2rem] text-orange-400" />
                        <GoDotFill className="text-[1.2rem] text-green-600" />
                    </p>
                </div>
                
{/**product-2 */}
<div className="">
<Link href={"/shopNow"}> <img src="product-cover-5 (5).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>


{/**product-3 */}
<div className="">
<Link href={"/shopNow"}><img src="Product card.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-4 */}
<div className="">
<Link href={"/ShopNow"}> <img src="product-cover-5.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>

{/**product-5 */}
<div className="">
<Link href={"/shopNow"}> <img src="product-cover-5 (7).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>


{/**product-6 */}
<div className="">
<Link href={"/shopNow"}>  <img src="fixed-height (1).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>

{/**product-7 */}
<div className="">
<Link href={"/shopNow"}> <img src="product-cover-5 (3).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-8 */}
<div className="">
<Link href={"/shopNow"}> <img src="fixed-height.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-9 */}
<div className="">
  <img src= "card.png"
 alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-10 */}
<div className="">
 <Link href={"shopNow"}> <img src="fixed-height (3).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-11 */}
<div className="">
<Link href={"shopNow"}> <img src="fixed-height (5).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-12 */}
<div className="">
<Link href={"shopNow"}> <img src="product-cover-5 (6).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" /></Link>

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>

</div>
<div className="button-div mt-[5rem] text-center w-full h-[5rem] bg-white">
 <Link href="/"><button className=" border-[0.1rem] bg-white text-slate-400 text-[0.9rem] hover:bg-blue-700 hover:text-slate-200 font-sans font-semibold border-gray-300 w-[4rem] h-[3rem]">First</button></Link>
 <Link href="/shop" target="_blank"><button className="bg-white hover:bg-blue-600 text-blue-600 hover:text-slate-300 border-[0.1rem] text-[0.9rem] font-medium border-gray-300 w-[2rem] h-[3rem]">1</button></Link>
 <Link href="/shop-2" target="_blank"><button className="bg-white hover:bg-blue-600 text-blue-600 hover:text-slate-300 border-[0.1rem]  text-[0.9rem ] font-medium border-gray-300 w-[2rem] h-[3rem]">2</button></Link>
 <Link href="/shop"><button className=" border-[0.1rem] bg-white border-gray-300 w-[4rem]  hover:bg-blue-600 hover:text-slate-200 text-[0.9rem] font-sans font-semibold text-blue-500 h-[3rem]">Next</button></Link>























            </div>

           
        </main>
    );
}

export default Shop;
