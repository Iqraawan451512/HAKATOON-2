import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

function Footer(){
    return(
<main>
    <div className="div-one bg-gray-100 mt-[4rem] h-20 w-full  font-serif text-[0.8rem] font-semibold   text-[#13315c] pt-3 flex ">
    <p className=" logo   ml-[10rem] mr-[5rem] pt-[1.3rem] font-sans font-bold text-[1.6rem] text-[#003049]">Bandage</p>
    
     <FaInstagram  className=" mt-[2.2rem] hover:text-red-400 text-blue-400 text-[1rem] ml-[47rem]"/>  <FaFacebook  className="mt-[2.2rem] text-[1rem] ml-[1rem] text-blue-400  hover:text-blue-800" /> <IoLogoTwitter  className=" mt-[2.2rem] text-[1rem] text-blue-400  ml-[1rem] hover:text-gray-700"/>
</div>

<div className="bg-white h-[10rem] w-full flex">
    <div className="one">
        <ul className="font-sans font-semibold text-[#ced4da] mt-[4rem] ml-[12rem]">
            <li className="text-[1rem] font-bold text-black ">Company Info</li>
            <li>About us</li>
            <li>Carrier</li>
            <li>We are Hiring</li>
            <li>Blog</li>
        </ul>
    </div>


    <div className="one">
        <ul className="font-sans font-semibold text-[#ced4da] mt-[4rem] ml-[5rem]">
            <li className="text-[1rem] font-bold text-black ">legal</li>
            <li>About us</li>
            <li>Carrier</li>
            <li>We are Hiring</li>
            <li>Blog</li>
        </ul>
    </div>


    <div className="one">
        <ul className="font-sans font-semibold text-[#ced4da] mt-[4rem] ml-[5rem]">
            <li className="text-[1rem] font-bold text-black ">Features</li>
            <li>Business Marketing</li>
            <li>user Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
        </ul>
    </div>

    <div className="one">
        <ul className="font-sans font-semibold text-[#ced4da] mt-[4rem] ml-[6rem]">
            <li className="text-[1rem] font-bold text-black ">Resources</li>
            <li>Iso & Andriod</li>
            <li> watch Demo</li>
            <li>customers</li>
            <li>Api</li>
        </ul>
    </div>

    <div className="one">
        <ul className="font-sans font-semibold text-[#ced4da] mt-[4rem] ml-[3rem]">
            <h1 className="text-[1rem] font-bold text-black ">Get IN Touch</h1>
            <div className="flex">
            <p className=" boder-2 bg-gray-200 h-10 border-gray-400 w-[10rem]  pl-1 p-1">your email</p> <p/><button className="bg-blue-500 text-white h-10 w-[6rem]">subscribe</button>
           </div>
            <p className="text-[0.6rem]">Lore imp sum doller Amit</p>
        </ul>
    </div>









    
</div>
</main>
    )
}
export default Footer
