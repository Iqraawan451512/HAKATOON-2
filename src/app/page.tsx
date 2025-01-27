"use client"



import React, { useState, useEffect } from 'react';

 import Link from "next/link"
 import { GoDotFill } from "react-icons/go";
 import { LuAlarmClock } from "react-icons/lu";
 import { BsGraphUpArrow } from "react-icons/bs";
 import { FaAngleRight } from "react-icons/fa6";
import Header_1 from "./component/header-1";
import Header_2 from "./component/header-2";
import Footer from "./component/footer/page";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
   discountedPrice:number;
   title:string;
   product:string;
};

const Home = () => {
  const [data, setData] = useState<Product[] | null>(null); // initialize as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetching data (replace with your actual data fetch)
        const response = await fetch('https://template6-six.vercel.app/api/products'); 
        const result = await response.json();
        setData(result .slice(0, 12)); // Set the fetched data
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


  return(
    <main>
      <Header_1/> 
      <Header_2/>
      <div className="main-div w-full   h-[30rem] flex flex-col md:flex-row">
  <div className="picture h-[29rem] bg-[#00b4d8] ">
    <img
      src="heri-1.jpeg"
      alt="picture"
      className="absolute h-[30rem] w-full o"
    />
    <div className="content font-sans font-bold text-white absolute top-[20%] md:top-[30%] px-4 md:px-10">
      <h3 className="text-gray-200 text-lg md:text-xl lg:text-2xl ml-0 md:ml-[12.5rem] pt-[6rem] md:pt-[4rem]">
        SUMMER 2020
      </h3>
      <h1 className="text-[2rem] md:text-[3rem] hover:text-[#003049] mt-[2rem] md:mt-[2.5rem] ml-0 md:ml-[12rem]">
        NEW COLLECTION
      </h1>
      <h2 className="text-gray-200 mt-[2rem] md:mt-[2.5rem] ml-0 md:ml-[12rem] text-sm md:text-base lg:text-lg">
        We know how large objects will act, <br />
        but things on a small scale.
      </h2>
      <Link href="/">
        <button className="mt-[2rem] bg-green-500 w-[9rem] h-[2.5rem] hover:text-sky-200 hover:bg-[#003049] rounded-md ml-0 md:ml-[12rem]">
          SHOP NOW
        </button>
      </Link>
    </div>
  </div>
</div>

 {/* Section 2 */}
 <div className="section-2 mt-[3rem]  text-center  px-4 md:px-10">
        <div className="content">
          <h1 className="font-san lg:ml-[30rem] ml-[2rem] font-bold text-[1.3rem] text-center md:text-left hover:text-blue-500 hover:font-serif">
            EDITORS PICK
          </h1>
          <p className="text-gray-500  lg:ml-[30rem] ml-[2rem] font-semibold text-center md:text-left hover:text-gray-800">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-7 mt-6">
 {/* Product 1 */}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[50rem] ">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
           
            <Link href={`/product/${product._id}`}><img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover "
              /></Link>
              <div className="p-4">

                <p className="text-lg font-semibold mt-2">${product.price}</p>
                <h2 className='text-lg font-semibold mt-2 hover:text-blue-800'>{product.title}</h2>
                <h1 className='text-lg font-semibold mt-2'>{product.product} </h1>

              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div> 
  </div>










          
          
      </div>



{/** section-3 */}
<div className="section-3 ">
  <div className="content-3 mt-[3rem] text-center text-balance">
    <p className="font-bold text-[0.7rem] font-sans text-gray-400 hover:text-gray-600">Featured Product</p>
    <h1 className="text-[1.2rem] font-sans font-bold ml-2 hover:text-blue-400 hover:translate-x-1 mt-2">BESTSELLER PRODUCTS</h1>
    <p className="text-[0.8rem] font-sans text-gray-400 hover:text-gray-600 text-balance mt-1">Problems trying to resolve the conflict between</p>
  </div>

  {/* Product Grid */}
  <div className="main-of-product lg:ml-[0.1rem] flex flex-wrap gap-4 text-center justify-center mt-[3rem] px-4 sm:w-full md:w-[80rem] lg:w-[80rem]">
    
    {/* Product 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[50rem] ">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
            >
           <Link href={`/product/${product._id}`}><img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover"
              /></Link>
              <div className="p-4">
                <h1 className="text-xl font-bold">{product.name}</h1> {/* Product Name */}
                <p className="text-lg font-semibold mt-2">${product.price}</p>
                <h2 className='text-lg font-semibold mt-2 hover:text-blue-800'>{product.title}</h2>



                
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div> 
  </div>
</div>

{/** section-4 */}
<div className="section-4-main lg:mt-[5rem] h-fit ">
  <div className="four-main flex flex-col lg:flex-row  items-center justify-center relative px-4 lg:px-0">
    
    {/* Text and Background Section */}
    <div className="bg-[#2d6a4f]  opacity-[0.8] w-full lg:w-4/2 h-[40rem] lg:h-[25rem] px-[20rem] py-12 flex flex-col justify-center lg:items-start items-end">
      <h3 className="text-gray-200 text-center lg:text-left text-xl">SUMMER 2020</h3>
      <h1 className="text-white font-extrabold text-2xl lg:text-4xl font-mono mt-4 text-center lg:text-left hover:text-green-950">
        Vita Clasic <br /> Product
      </h1>
      <h2 className="text-gray-50 text-sm  lg:text-base mt-4 text-end lg:text-left">
        We know how large objects will act, we know <br /> how objects will act, but things on a small scale.
      </h2>
      <div className=" justify-center lg:justify-start items-center mt-4">
       <span className="font-bold text-white text-xl lg:text-2xl">$16.48</span> <br />
       <Link href="/cart">
       <button className="ml-1 mt-4 cursor-pointer bg-green-500 w-32 h-12 hover:text-gray-300 hover:bg-green-900 rounded-md font-semibold text-white">
         ADD TO CART 
          </button></Link>
      
      </div>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center absolute">
      <img 
        src="https://github.com/MuhammadMuaazMk/Hackathon/blob/main/public/11.png?raw=true" 
        alt="image" 
        className="w-full lg:w-[15rem] max-w-xs lg:max-w-none ml-[30rem]" 
      />
    </div>
  </div>
</div>


{/** section-12*/}
<div className="sec-five flex flex-col lg:flex-row items-center lg:items-start justify-center lg:ml-[6rem] mt-[4rem] gap-8 px-4 lg:px-0">
  <img
    src="second-last.png"
    alt="image"
    className="w-full lg:w-[30rem] h-auto lg:h-[24rem] object-cover mt-4"
  />

  <div className="content text-center lg:text-left lg:ml-[3rem]">
    <p className="mt-[2rem] lg:mt-[5rem] text-gray-300 font-sans font-bold text-sm lg:text-base">
      SUMMER 2020
    </p>
    <p className="font-bold font-sans text-[1.5rem] lg:text-[1.8rem] mt-[0.5rem]">
      Part Of The Neural <br /> Universe
    </p>
    <h2 className="mt-[1rem] text-[#6c757d] text-[0.8rem] lg:text-[0.9rem] font-sans font-semibold">
      We know how large objects will act, but things on a small scale, <br />
      we know but things on a small scale.
    </h2>
    <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start items-center mt-[2rem]">
      <Link href="/">
        <button className="bg-green-500 w-[8rem] h-[2.5rem] hover:text-green-400 hover:bg-green-900 rounded-md font-semibold text-white">
          BUY NOW
        </button>
      </Link>
      <Link href="/">
        <button className="bg-white w-[9rem] border-2 border-green-600 h-[2.5rem] hover:text-gray-300 hover:bg-green-900 rounded-md font-semibold text-green-400">
          READ MORE
        </button>
      </Link>
    </div>
  </div>
</div>

{/** section-6 */}
<div className="section-six mt-[6rem] px-4 lg:px-0">
  <div className="content-six text-center">
    <p className="font-bold text-[0.8rem] font-sans text-blue-400 hover:text-gray-600">Practical Advice</p>
    <h1 className="text-[2rem] font-sans font-bold mt-1 hover:text-blue-400 hover:translate-x-1">Featured Posts</h1>
    <p className="text-[0.7rem] font-sans font-semibold text-gray-500 hover:text-gray-600 text-balance mt-1">
      Problems trying to resolve the conflict between <br />
      the two major realms of classical physics. Newtonian mechanics
    </p>
  </div>

  {/** Card Container */}
  <div className="flex flex-col lg:flex-row gap-4 justify-center mt-8">

    {/** Card 1 */}
    <div className="w-full lg:w-[15rem] bg-gray-100 border-2  relative">
      <p className="absolute bg-red-600 w-[3rem] h-[1.4rem] text-[0.7rem] text-white font-bold pl-3 pt-[0.2rem] mt-[0.8rem]">NEW</p>
      <img
        src="last-3 (2).png"
        alt="picture"
        className="w-full h-[15rem] "
      />
      <h2>
        <ul className="flex font-sans text-[0.7rem] gap-2 ml-[1rem] mt-[1rem]">
          <li className="text-blue-300">Google</li>
          <li className="text-[#c0c0c0]">Trending</li>
          <li className="text-[#c0c0c0]">Now</li>
        </ul>
      </h2>
      <h1 className="mt-5 ml-2">Loudest a la Madison #1 <br /> (L Integral)</h1>
      <p className="font-sans ml-2 font-semibold text-[0.8rem] text-[#c0c0c0]">
        We focus on ergonomic design and meeting you where you work. It’s only a keystroke away.
      </p>
      <p className="flex mt-4 text-[0.5rem] text-[#c0c0c0] font-semibold">
        <span><LuAlarmClock className="text-blue-400 mt-1 ml-1 text-[0.5rem]" /></span>
        <span className="ml-[0.4rem]">22 April 2021</span>
        <span className="ml-[0.5rem] font-bold text-[#c0c0c0] flex"><BsGraphUpArrow className="text-green-700 text-[0.9rem] ml-[6rem]" /> 22 April 2021</span>
      </p>
      <p className="flex text-[0.6rem] font-bold ml-[1rem] text-[#c0c0c0] mt-[0.5rem]">
        Learn More <FaAngleRight className="mt-1 text-blue-300" />
      </p>
    </div>

    {/** Card 2 */}
    <div className="w-full lg:w-[15rem] bg-gray-100 border-2  relative">
      <p className="absolute bg-red-600 w-[3rem] h-[1.4rem] text-[0.7rem] text-white font-bold pl-3 pt-[0.2rem] mt-[0.8rem]">NEW</p>
      <img
        src="last-3 (1).png"
        alt="picture"
        className="w-full h-[15rem] "
      />
      <h2>
        <ul className="flex font-sans text-[0.7rem] gap-2 ml-[1rem] mt-[1rem]">
          <li className="text-blue-300">Google</li>
          <li className="text-[#c0c0c0]">Trending</li>
          <li className="text-[#c0c0c0]">Now</li>
        </ul>
      </h2>
      <h1 className="mt-5 ml-2">Loudest a la Madison #1 <br /> (L Integral)</h1>
      <p className="font-sans ml-2 font-semibold text-[0.8rem] text-[#c0c0c0]">
        We focus on ergonomic design and meeting you where you work. Its only a keystroke away.
      </p>
      <p className="flex mt-4 text-[0.5rem] text-[#c0c0c0] font-semibold">
        <span><LuAlarmClock className="text-blue-400 mt-1 ml-1 text-[0.5rem]" /></span>
        <span className="ml-[0.4rem]">22 April 2021</span>
        <span className="ml-[0.5rem] font-bold text-[#c0c0c0] flex"><BsGraphUpArrow className="text-green-700 text-[0.9rem] ml-[6rem]" /> 10 comments</span>
      </p>
      <p className="flex text-[0.6rem] font-bold ml-[1rem] text-[#c0c0c0] mt-[0.5rem]">
        Learn More <FaAngleRight className="mt-1 text-blue-300" />
      </p>
    </div>

    {/** Card 3 */}
    <div className="w-full lg:w-[15rem] bg-gray-100 border-2 relative">
      <p className="absolute bg-red-600 w-[3rem] h-[1.4rem] text-[0.7rem] text-white font-bold pl-3 pt-[0.2rem] mt-[0.8rem]">NEW</p>
      <img
        src="last-3 (2).png"
        alt="picture"
        className="w-full h-[15rem] "
      />
      <h2>
        <ul className="flex font-sans text-[0.7rem] gap-2 ml-[1rem] mt-[1rem]">
          <li className="text-blue-300">Google</li>
          <li className="text-[#c0c0c0]">Trending</li>
          <li className="text-[#c0c0c0]">Now</li>
        </ul>
      </h2>
      <h1 className="mt-5 ml-2">Loudest a la Madison #1 <br /> (L Integral)</h1>
      <p className="font-sans ml-2 font-semibold text-[0.8rem] text-[#c0c0c0]">
        We focus on ergonomic design and meeting you where you work. Its only a keystroke away.
      </p>
      <p className="flex mt-4 text-[0.5rem] text-[#c0c0c0] font-semibold">
        <span><LuAlarmClock className="text-blue-400 mt-1 ml-1 text-[0.5rem]" /></span>
        <span className="ml-[0.4rem]">22 April 2021</span>
        <span className="ml-[0.5rem] font-bold text-[#c0c0c0] flex"><BsGraphUpArrow className="text-green-700 text-[0.9rem] ml-[6rem]" /> 10 comments</span>
      </p>
      <p className="flex text-[0.6rem] font-bold ml-[1rem] text-[#c0c0c0] mt-[0.5rem]">
        Learn More <FaAngleRight className="mt-1 text-blue-300" />
      </p>
    </div>
  </div>
</div>











<Footer/>
    </main>
  )
}
export default Home