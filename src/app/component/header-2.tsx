import Link from "next/link";

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";


 function Header_2(){
    return(
        <main>
            <nav className=" h-20 text-balance flex border-b border-[#e5e5e5]">
            <h1 className=" logo ml-[3rem] mr-[5rem] pt-[1.3rem] font-sans font-bold text-[1.6rem] text-[#003049]">Bandage</h1>

                <ol className="flex gap-5 pt-8 font-serif text-[1rem]  ">
                  <Link href="/"> <li className="text-gray-400 hover:text-blue-800 font-semibold">Home</li></Link>
                  <Link href="/shop"> <li className="text-gray-400 hover:text-blue-800 font-semibold">
                    <select defaultValue="shop">
                        <option defaultValue="Shop">Shop</option>
                    </select>
                    </li></Link>

                    <Link href="/about"> <li className="text-gray-400 hover:text-blue-800 font-semibold">About</li></Link>
                    <Link href="/about"> <li className="text-gray-400 hover:text-blue-800 font-semibold">Blog</li></Link>

                  <Link href="/contact"> <li className="text-gray-400 hover:text-blue-800 font-semibold">Contact</li></Link>
                  <Link href="/signup">  <li className="text-gray-400 hover:text-blue-800 font-semibold">Pages</li></Link>

                </ol>
                <div className="flex relative  gap-1">
                    <p className="mt-[2rem] flex  font-bold text-sky-400 ml-[20rem]"><MdSupervisorAccount  className="text-[1.4rem]"/><Link href="/"><span>Login</span></Link><Link href="/"> <span> / Register</span></Link></p>
                <IoMdSearch className="mt-[2rem] text-[1.3rem] text-sky-400 ml-[2rem] mr-2"/>
                <MdOutlineShoppingCart className="mt-[2rem] text-[1.3rem]  text-sky-400" />
                <p className="text-sky-400 mt-[2rem] mr-2">1</p>

                <FaRegHeart className="mt-[2rem] text-[1.1rem]  text-sky-400" />
                 <p className="text-sky-400 mt-[2rem]">1</p>

                </div>

            </nav>

        </main>
    )
}
export default Header_2