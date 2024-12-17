import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

function Header_3(){
    return(
<main>
    <div className="div-one bg-[#2d6a4f] opacity-[0.8] h-12 w-full  font-serif text-[0.8rem] font-semibold text-white pt-3">
    <div>
        <ul className="flex font-sans">
  <li> <CiPhone className="text-white ml-[1.5rem] text-[1.3rem]" /></li>
  <li className=" hover:text-slate-500">  (225)555-0118</li>
  <li><CiMail className="text-[1rem] ml-[1.3rem] mt-[0.2rem]" /></li>
  <li className="ml-2   hover:text-slate-500">michell.rivera@example.com</li>
<li className="ml-[18rem] hover:text-slate-500">Follow Us and  get a chance to Win 80% off</li>
<li className="ml-[13rem] flex gap-2 ">Follow Us : <FaInstagram  className="mt-1 hover:text-red-400"/> <FaYoutube  className="mt-1 hover:text-red-600" /> <FaFacebook  className="mt-1 hover:text-blue-800" /> <IoLogoTwitter  className="mt-1 hover text-gray-400"/>



</li>
    </ul>
   </div>
    </div>
</main>
    )
}
export default Header_3