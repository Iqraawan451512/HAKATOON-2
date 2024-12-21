import Header_2 from "../component/header-2";
import Header_3 from "../component/headetr_3/page";
import Link from "next/link";
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import Footer from "../component/footer/page";
import { GoDotFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa6";
import { FiToggleLeft } from "react-icons/fi";

function Blog() {
    return (
        <main>
            <Header_3 />
            <Header_2 />
            <div className="div-one">
                <div className="shop-one-div md:mb-[5rem]">
                    <div className="main-two bg-slate-50 h-[15rem] pt-[5rem] text-center ">
                        <h2 className="text-gray-800 text-[1.6rem] font-sans font-bold hover:text-gray-700">Pricing</h2>
                        <h1 className="text-[0.7rem] text-gray-400  mt-[0.8rem] font-bold hover:text-blue-500">
                        Problems trying to resolve the conflict between  <br /> the two major realms of 
                        Classical physics : Newtonian mechanics
                        </h1>
                        <h3 className="flex text-[0.8rem] gap-1 text-gray-800 ml-[33rem] mt-3 font-bold ">monthly  <FiToggleLeft className="mr-2  text-[1.6rem] text-blue-300"/>
                        <span>Yearly</span> <button className="boder-2 w-[4rem] rounded-[40rem] hover:bg-blue-950 bg-blue-300 text-blue-600 font-bold border-gray-700 h-[1.5rem] text-[0.5rem]">save 25%</button></h3>
                    </div>
                    
                    <div className="section-5-main flex flex-col md:flex-row gap-1 mt-2 px-4 lg:ml-[15rem]">
                      {/* Card 1 */}
                      <div className="div-1 h-[27.8rem] w-[15rem] text-center border-[0.1rem] hover:translate-y-3 border-blue-400 rounded mt-[0.8rem] mx-auto md:mx-0">
                        <h1 className="font-sans font-bold text-[1.2rem] text-gray-900 mt-[2rem] hover:text-blue-600">FREE</h1>
                        <p className="font-sans text-gray-400 font-semibold text-[0.9rem] mt-[1rem]">Organize across all <br /> apps by hand</p>
                        <h2 className="flex mt-[1rem] justify-center">
                          <div className="text-blue-400 font-sans font-bold text-[1.7rem]">
                            0
                          </div>
                          <div className="text-blue-400 text-[1rem] font-sans font-bold">
                            $
                            <div className="text-blue-300 text-[0.7rem]">Per Month</div>
                          </div>
                        </h2>
                        {/* Offers */}
                        <div className="main space-y-4 mt-[1rem] ">
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-gray-300 font-extralight text-[0.6rem]" /></span>
                            <span>IGB Cloud Storage</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-gray-300 font-extralight text-[0.6rem]" /></span>
                            <span>Email and community support</span>
                          </div>
                        </div>
                        <div className="w-[10rem] mx-auto h-[2rem] mt-[1.5rem] hover:bg-sky-700 bg-blue-950">
                          <button className="text-center font-sans text-[0.8rem] text-slate-100 font-semibold">Try for free</button>
                        </div>
                      </div>
                    
                      {/* Card 2 */}
                      <div className="div-1 h-[28.9rem] w-[15rem] text-center bg-blue-900 hover:translate-y-3 border-[0.1rem] border-blue-400 rounded mx-auto md:mx-0">
                        <h1 className="font-sans font-bold text-[1.2rem] text-gray-100 mt-[2rem] hover:text-blue-950">STANDARD</h1>
                        <p className="font-sans text-gray-100 font-semibold text-[0.9rem] mt-[1rem]">Organize across all <br /> apps by hand</p>
                        <h2 className="flex mt-[1rem] justify-center">
                          <div className="text-blue-400 font-sans font-bold text-[1.7rem]">
                            9.99
                          </div>
                          <div className="text-blue-400 text-[1rem] font-sans font-bold">
                            $
                            <div className="text-blue-300 text-[0.7rem]">Per Month</div>
                          </div>
                        </h2>
                        {/* Offers */}
                        <div className="main space-y-4 mt-[1rem]">
                          <div className="text-gray-100 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-100 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-100 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-100 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-gray-300 font-extralight text-[0.6rem]" /></span>
                            <span>IGB Cloud Storage</span>
                          </div>
                          <div className="text-gray-100 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-gray-300 font-extralight text-[0.6rem]" /></span>
                            <span>Email and community support</span>
                          </div>
                        </div>
                        <div className="w-[10rem] mx-auto h-[2rem] mt-[1.5rem] hover:bg-blue-950 bg-blue-400">
                          <button className="text-center font-sans text-[0.8rem] text-slate-100 font-semibold">Try for free</button>
                        </div>
                      </div>
                    
                      {/* Card 3 */}
                      <div className="div-1 h-[27.5rem] w-[15rem] text-center border-[0.1rem] hover:translate-y-2 border-blue-400  mt-[0.8rem] rounded mx-auto md:mx-0">
                        <h1 className="font-sans font-bold text-[1.2rem] text-gray-900 mt-[2rem] hover:text-blue-600">PREMIUM</h1>
                        <p className="font-sans text-gray-400 font-semibold text-[0.9rem] mt-[1rem]">Organize across all <br /> apps by hand</p>
                        <h2 className="flex mt-[1rem] justify-center">
                          <div className="text-blue-400 font-sans font-bold text-[1.7rem]">
                            19.99
                          </div>
                          <div className="text-blue-400 text-[1rem] font-sans font-bold">
                            $
                            <div className="text-blue-300 text-[0.7rem]">Per Month</div>
                          </div>
                        </h2>
                        {/* Offers */}
                        <div className="main space-y-4 mt-[1rem]">
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-green-300 font-extralight text-[0.6rem]" /></span>
                            <span>Unlimited Product Updates</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-gray-300 font-extralight text-[0.6rem]" /></span>
                            <span>IGB Cloud Storage</span>
                          </div>
                          <div className="text-gray-500 font-bold flex font-sans justify-start ml-[2rem] gap-1 text-[0.7rem]">
                            <span><TiTick className="w-4 h-4 rounded-lg text-gray-50 bg-gray-300 font-extralight text-[0.6rem]" /></span>
                            <span>Email and community support</span>
                          </div>
                        </div>
                        <div className="w-[10rem] mx-auto h-[2rem] mt-[1.5rem] hover:bg-blue-700 bg-blue-400">
                          <button className="text-center font-sans text-[0.8rem] text-slate-100 font-semibold">Try for free</button>
                        </div>
                      </div>
                    </div>

                    {/* Cards Section */}
                    <div className="shop-card flex flex-wrap gap-5 bg-gray-100 justify-center mt-[5rem]">
    {/* Card 1 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
        <img src="card-item (2).png" alt="picture" className="h-full w-full hover:translate-y-4 object-cover" />
    </div>
    {/* Card 2 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
        <img src="col-md-4 (1).png" alt="picture" className="h-full w-full hover:translate-y-4 object-cover" />
    </div>
    {/* Card 3 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
        <img src="col-md-4 (2).png" alt="picture" className="h-full w-full hover:translate-y-4 object-cover" />
    </div>
    {/* Card 4 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
        <img src="card-item (1).png" alt="picture" className="h-full w-full object-cover hover:translate-y-4" />
    </div>
    {/* Card 5 */}
    <div className="card h-[12rem] sm:w-[8rem] md:w-[10rem] lg:w-[12rem]">
        <img src="card-item.png" alt="picture" className="h-full w-full object-cover hover:translate-y-4" />
    </div>
</div>

                </div>
            </div>

            {/* Section 2: Filter and View Options */}
            <div className="div-two mt-[3rem] ">
                <ul className="flex   text-[0.8rem] text-extrabold text-gray-600 font-serif gap-[5rem] md:gap-[17rem] mx-auto justify-center">
                    <li className="hover:text-blue-800">showing all 12 products</li>
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
                    <img src="product-cover-5 (4).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />
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
  <img src="product-cover-5 (5).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>


{/**product-3 */}
<div className="">
  <img src="Product card.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-4 */}
<div className="">
  <img src="product-cover-5.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>

{/**product-5 */}
<div className="">
  <img src="product-cover-5 (7).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>


{/**product-6 */}
<div className="">
  <img src="fixed-height (1).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>

{/**product-7 */}
<div className="">
  <img src="product-cover-5 (3).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-8 */}
<div className="">
  <img src="fixed-height.png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-9 */}
<div className="">
  <img src= "https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/462582257_1117896486631297_8330484492524790447_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGKrClweiUEk_NAQr-923_nhggm0Wf3rq2GCCbRZ_eurZkX3bWIZJHnhPOw1NXknqfpRo0Ziz2Dfexm0h5oJUIb&_nc_ohc=nuTYhtuQ1M4Q7kNvgEXAqFl&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QEBxa4IeQF-78aZ0CDD4Zb2SzGlXIvseygkafO6fbmNzw&oe=677D0185"
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
  <img src="fixed-height (3).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-11 */}
<div className="">
  <img src="fixed-height (5).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>
{/**product-12 */}
<div className="">
  <img src="product-cover-5 (6).png" alt="product-image" className="w-[12rem] h-[12rem] hover:translate-y-4" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-green-600"/>
  </p>
</div>

</div>









            

           
        </main>
    );
}

export default Blog;
