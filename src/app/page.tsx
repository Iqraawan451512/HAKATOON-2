 import Link from "next/link"
 import { GoDotFill } from "react-icons/go";
 import { LuAlarmClock } from "react-icons/lu";
 import { BsGraphUpArrow } from "react-icons/bs";
 import { FaAngleRight } from "react-icons/fa6";
import Header_1 from "./component/header-1";
import Header_2 from "./component/header-2";




 function Home(){
  return(
    <main>
      <Header_1/>
      <Header_2/>
      <div className="main-div w-full h-[30rem]  flex">

<div className="picture h-[29rem] bg-[#00b4d8] ">
<img src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.15752-9/467456273_562479099719060_7169677925994754884_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEnBRrd-kECVV38YUflXnuBSDUx_7WglUJINTH_taCVQjXg8thjCNl-ckEgZBFPcXwSUSeDai0zI55ooEr2iYf9&_nc_ohc=zIrsbXOEaQUQ7kNvgEnhJ8-&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&oh=03_Q7cD1QGkovzWtc_4TPqUukDcOSbcvQbr16OcwBSbQTFgF5XZLw&oe=677CCC69" alt="picture" className=" absolute h-[30rem] w-full  ml-[0rem]"></img>
 
<div className="content font-sans font-bold text-white absolute">
<h3 className="ml-[12.5rem] pt-[6rem] text-gray-200">SUMMER 2020</h3>
<h1 className="ml-[12rem] mt-[2rem] text-[3.5rem] hover:text-[#003049]">NEW COLLECTION</h1>
<h2 className="ml-[12rem] mt-[2rem] text-gray-200">We  know how large object will act, <br />
but things on a small scale.
 </h2>
  <Link href="/"><button className="ml-[12rem] mt-[2rem] bg-green-500 w-[9rem] h-[2.5rem] hover:text-sky-200 hover:bg-[#003049] rounded-md">SHOP NOW</button></Link>
</div>
 </div>
 </div>
 {/** section 2 */}

 <div className="section-2  mt-[3rem] ">
<div className="content">
  <h1 className="font-san ml-[30rem] font-bold text-[1.3rem] hover:text-blue-500 hover:font-serif hover:translate-x-1">EDITORS PICK</h1>
    <p className="text-gray-500 font-semibold ml-[25rem] hover:text-gray-800">problems trying to resolve the conflict between</p>

</div>

{/*card*/}


<div className="flex w-full gap-7">
<div className="div-card mt-[2rem] ml-[15rem]">
 
{/**card -1 */}

<p className="bg-white absolute mt-[19.8rem] w-[6rem] h-7 pl-[1.6rem] ml-3 font-semibold  hover:bg-blue-500 hover:text-gray-300" >MEN</p>
<img src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.15752-9/462647694_1309893480426971_2191047771073654897_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG2ZpeFmvrZ0TbhPiJT-OpHK7I-BSm3eoIrsj4FKbd6gk9XcQ020Xw2x8iKER91Gdmgsd9rta2CFt0yDGqea3Jh&_nc_ohc=mBgj8DzVMVIQ7kNvgFkzPNi&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&oh=03_Q7cD1QHX4k9oRCHafVCprK3s-rCIHrEEIpWTadaxXlP-0mqE9w&oe=677CCFD2" alt="picture" className=" h-[22rem] w-[20rem]"/>
 </div>
 {/**card -2 */}
 <div className="mt-[2rem] ">
 <p className="bg-white absolute text-[0.9rem] pt-1 w-[6rem] h-7 pl-[1rem] ml-3 font-semibold mt-[19.8rem]  hover:bg-blue-500 hover:text-gray-300" >WOMEN</p>
<img src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t1.15752-9/462650111_1098996028390923_7407493782257211989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFt0LnNEBmVhaI6N954VPcbr8Qqyz9zsj6vxCrLP3OyPpoLuzng-05w3UEFlL6x85mtypJbEEM6cbUgw01XQ3z4&_nc_ohc=pQrlxZ5oaysQ7kNvgF1Mc5V&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&oh=03_Q7cD1QFlA95MJtHhXAQfwJPhoreTV62XfczNTcZzDBY-Zh-ioA&oe=677CD83E" alt="women picture" className=" women picture  w-[10rem] h-[22rem] " />
</div>


{/**card-3 */}
<div className="mt-[2rem] ">
 <p className="bg-white absolute  text-[0.8rem] w-[8rem] h-7 pl-[1.5rem] ml-3 font-bold mt-[7.5rem] pt-1  hover:bg-blue-500 hover:text-gray-300" >ACCESSORIES</p>
<img src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t1.15752-9/462572304_2266765420361467_6319357737227857792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHUez0tjzRVFytk-Empz31HLK7ZOsgo4y0srtk6yCjjLaYGd2hF5DTn2Y6E2mbYBAIjRBfO_38M6hqzQr-V_w6E&_nc_ohc=ugYV43qd-U8Q7kNvgGPs0E2&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&oh=03_Q7cD1QGuBOBbdr01K3YCRdR7PJtHRjl686KH-EEdCwouOT8bKw&oe=677CD651" alt="women picture" className=" women picture  w-[13rem] h-[10rem]" />

<p className="bg-white absolute  text-[0.8rem] w-[4rem] h-7 pl-[1rem] ml-3 font-bold mt-[9rem] pt-1  hover:bg-blue-500 hover:text-gray-300" >KIDS</p>
<img src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.15752-9/462641591_1770791807009858_5689687099859703123_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHHk_RCbMpp6oZG0kOfIeVEm0AKzRFZ43SbQArNEVnjdKH7bk8svbUd472lNFSd3efiV-S-R2mWhmBA4tbGarSF&_nc_ohc=5nDJQ8pyASQQ7kNvgEoCEjG&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&oh=03_Q7cD1QH_4jVD1m6xO7e0Jtzq_kNvL6MF8euWfSAMrEpE4pKbvA&oe=677CC186" alt="women picture" className=" women picture  w-[13rem] h-[10rem] mt-5 " />


</div>

</div>
</div>



{/** section-3 */}
<div className="section-3">

<div className="content-3 mt-[3rem] text-center text-balance  ">
  <p className="font-bold text-[0.7rem]font-sans text-gray-400 hover:text-gray-600 ">Featured Product</p>
  <h1 className="text-[1.2rem] font-sans font-bold ml-2 hover:text-blue-400 hover:translate-x-1  mt-2">BESTSEELER PRODUCTS</h1>
  <p className=" text-[0.3rem]font-sans text-gray-400 hover:text-gray-600 text-balance mt-1">Problems trying to resolve the conflict between</p>

</div>
{/** product-section */}
<div className="main-of-product  flex flex-wrap w-[60rem] gap-4 text-center ml-[14rem] mt-[3rem] ">
{/**product-1 */}
<div className="">
  <img src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.15752-9/462637144_991007036396872_2825183210880074773_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHsX2lMhKidrHBzHDESTDt41laV7ZIDfi_WVpXtkgN-L3YMIMDcuLlazM_PkHDMjHsH4ZRoUgcCoLxgv8o7HV91&_nc_ohc=RkZZ_kvgdDcQ7kNvgGYSjjR&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&oh=03_Q7cD1QGFMoctUuGSd1o_6glGki8DP3F3p-nVgCmJxPlblPD6ew&oe=677CC61B" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>
{/**product-2 */}


<div className="">
  <img src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.15752-9/462648971_588607990384016_488281950584423643_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEW6N4doB08yA1ImgL0royeWjKM52q6O99aMoznaro7314GI4rlqPS2NdNc_35xkxHljvJ5udpcdNqCgj-wefg_&_nc_ohc=WeiZKawTTLwQ7kNvgGuDhcY&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&oh=03_Q7cD1QGgE4HrLBzdcOLYV1SK2xtaAP63Iavy72_s2AJVxhbf7w&oe=677CC3C6" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>
{/**product-3 */}
<div className="">
  <img src="https://scontent.fkhi6-2.fna.fbcdn.net/v/t1.15752-9/465100468_1013826273841117_4792173748404192126_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGkbltvaiZAbfg40dLverYYN546WsbMGVw3njpaxswZXA3Aw0TzEHTGkcQowLgrHnIoDxsjh-k5nq-NA9iDkyXU&_nc_ohc=TcxpRJFPRscQ7kNvgG4Lisr&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&oh=03_Q7cD1QHP7bYP1_jywEf4YX3JwvHDWMzxvRXNt4zCxrjL1J6MYA&oe=677CBF23" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>
{/**product-4 */}
<div className="">
  <img src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.15752-9/462565147_574885702097228_3018514860415859725_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFmiiwrKGPpeZ5CAqP1jL38dtKakQcZ2XB20pqRBxnZcK20qH8sMAahy0216qr2wxXsmLko0yfQMleClb-zn7wD&_nc_ohc=wNbsXRVg3h4Q7kNvgFOm7Ya&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&oh=03_Q7cD1QGFKIVW7FmrfFcMyZT3kaxOOrEGc4mi3PduHWOoC9Q5Rw&oe=677CDB36" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>
{/** product-5 */}


<div className="">
  <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/462582257_1117896486631297_8330484492524790447_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGKrClweiUEk_NAQr-923_nhggm0Wf3rq2GCCbRZ_eurZkX3bWIZJHnhPOw1NXknqfpRo0Ziz2Dfexm0h5oJUIb&_nc_ohc=nuTYhtuQ1M4Q7kNvgEXAqFl&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QEBxa4IeQF-78aZ0CDD4Zb2SzGlXIvseygkafO6fbmNzw&oe=677D0185" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>
{/**product-6 */}

<div className="">
  <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/462648099_594302253015275_3260535918236833932_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEAyqyViIIy-2x3kH0gD7ASZ91npOkQhUNn3Wek6RCFQ_mckzqP8_cXdo8JNQ5iKH-LDGeGswYYkN5PlwbbCvgq&_nc_ohc=_QqbgMQFvx0Q7kNvgGr8MLf&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QEg0Hq_JIAlUDqHYcrGaYnmIw2BfrOb2Urut6mFEg9yfw&oe=677CECA1" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>
{/**product-7 */}
<div className="">
  <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/467460738_922989949927875_8912535320837999765_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFTgVNvlH-xqdorvfKn_UqqhkGA-Vy69JCGQYD5XLr0kBO97c3DkcEDLLemCNvqO-LDb5kcoSctNp6Ee6cDn_E1&_nc_ohc=bXdw4-FFMe8Q7kNvgHoOYkB&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QFAoECgoTZlLVbtXuKI6Zmvxu3FhmTfTdqnMP_GHE3gqQ&oe=677D0419" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>
{/**product-8 */}
<div className="">
  <img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/462647459_1494230881263412_1900311255953370739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG9B2ebe0M6mRi3_5Jn35RA6ODlV-HPvSzo4OVX4c-9LKV8gZeIsLzrC70quyPDvmTgOPPV72OjpFbftW05PEMy&_nc_ohc=ZxOOwO4X0gEQ7kNvgGVa-zB&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QFkglhUO73v4TTWW8ZGrNVfkVfTRU8_I1H98L7SVmPN_g&oe=677CF489" alt="product-image" className="w-[12rem] h-[22rem]" />

<p className="font-sans text-gray-black text-[0.8rem] font-bold text-center mt-3">Grafic Dseign</p>
<p className=" text-[#6c757d] font-sans font-semibold text-[0.9rem]  text-center mt-2">English Department</p>
<p className="font-mono font-bold text-[0.8rem]  mt-[0.3rem] text-center text-gray-400">$16.48 <span className="text-green-600">$6.48</span></p>
  <p className="ml-[3.8rem] flex"><GoDotFill  className="text-[1.2rem] text-blue-400"/><GoDotFill  className="text-[1.2rem] text-green-600 "/>
  <GoDotFill  className="text-[1.2rem] text-orange-400"/><GoDotFill  className="text-[1.2rem] text-blue-400"/>
  </p>
</div>

</div>

</div>
{/**section-4 */}
<div className="section-4-main mt-[5rem]">
  <div className="four-main flex relative">
    <div className="bg-[#2d6a4f] opacity-[0.8] w-full h-[30rem]">
    <h3 className="ml-[12.5rem] pt-[6rem] text-gray-200">SUMMER 2020</h3>
<h1 className="ml-[12rem] mt-[0.7rem] text-white font-extrabold text-[2rem] font-mono hover:text-green-950">Vita Clasic <br />Product</h1>
<h2 className="ml-[12rem] mt-[1rem] text-gray-50 text-[0.8rem] ">We  know how large object will act, we Know how are object  will act , <br /> we know
but things on a small scale.
 </h2>
     <span className="ml-[12.2rem] font-bold text-white">$16.48</span><Link href="/"><button className="ml-[1rem] mt-[2rem] bg-green-500 w-[9rem] h-[2.5rem] hover:text-gray-300 hover:bg-green-900 rounded-md font-semibold text-white">ADD TO CARD</button></Link>

    </div>
    
<img src="https://github.com/MuhammadMuaazMk/Hackathon/blob/main/public/11.png?raw=true" alt="image" className="w-[20rem] h-[26.7rem] mt-[3rem]  absolute ml-[40rem]" />
    
  </div>

</div>

{/** section-5 */}
<div className="sec-five flex ">

<img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/462636577_8779859458794072_5133911273927050977_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGS9Au6G6SYgJgwZIeliQ3x1rFGruw218_WsUau7DbXz_W025D4tuOXWoYXTXhW-s3OWPw3p1VTzppDm9pWWDTZ&_nc_ohc=Oay_fLvtALIQ7kNvgGlhWZ8&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QFsufFZTYIua-inlLYyNH9oV_GwiLiGJ3R6BMy0DKuQ5A&oe=677CFADE" alt="image" className="w-[45rem] p-0 mt-0 h-[27rem]" />


<div className="content">
<p className="mt-[5rem] text-gray-300 font-sans font-bold">SUMMER 2020</p>
<p className="font-bold font-sans text-[1.8rem] mt-[0.5rem]">Part Of The Neural <br />Universe</p>
<h2 className=" mt-[1rem] text-[#6c757d] text-[0.7rem] font-sans font-semibold ">We  know how large object will act, but things in a small scale , <br /> we know
but things on a small scale.
 </h2>
 <Link href="/"><button className="ml-[1rem] mt-[2rem] bg-green-500 w-[8rem] h-[2.5rem] hover:text-green-400   hover:bg-green-900 rounded-md font-semibold text-white">BUY NOW</button></Link>
 <Link href="/"><button className="ml-[1rem] mt-[2rem] bg-white w-[9rem] border-2 border-green-600 h-[2.5rem] hover:text-gray-300 hover:bg-green-900 rounded-md font-semibold text-green-400">READ MORE</button></Link>


</div>

</div>
{/**section-6 */}

<div className="section-six">
  <div className="content-six mt-[6rem] text-center text-balance  ">
  <p className="font-bold text-[0.8rem] font-sans text-blue-400 hover:text-gray-600 ">practic advice</p>
  <h1 className="text-[2rem] font-sans font-bold ml-1 hover:text-blue-400 hover:translate-x-1  mt-1">Featured Posts</h1>
  <p className=" text-[0.7rem] font-sans font-semibold text-gray-500 hover:text-gray-600 text-balance mt-1">Problems trying to resolve the conflict between <br />
  the two major realms of crassical physics. Newtonian mechaincs
  </p>
</div>



{/**card */}
<div className="flex w-full  ">


  {/**card-1 */}
  <div className="">
    <div className="bg-gray-100 ml-[15rem] w-[15rem] h-[30rem] boder-2 border-black">
    <p className="absolute  bg-red-600 w-[3rem] h-[1.4rem] text-[0.7rem] text-white font-bold pl-3 pt-[0.2rem]  mt-[0.8rem]"> NEW</p>
<img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/465566947_1252934749124928_2943102958796448426_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFmO0jV8Ab-XteGGQgpXCjsWmDO4nN4iRZaYM7ic3iJFseQSKsK46RGNjbRXPxl6b7dCmEe8Wr3c2yBocrtm-OY&_nc_ohc=GnG0Y9lVFecQ7kNvgFF42gd&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QGtZHMcvuj92UxObgAipuh9uAJAoMxkMajHKc6RGvokdQ&oe=677CF9C7" alt="picture" className="w-[17rem] h-[15rem] mt-[5rem] " />
<h2>
  <ul className="flex font-sans text-[0.7rem] gap-2 ml-[1rem] mt-[1rem]">
    <li className="text-blue-300">Google</li>
    <li className="text-[#c0c0c0]">Trending</li>
    <li className="text-[#c0c0c0]">Now</li>
  </ul>
</h2>
  <h1 className="mt-5 ml-2">Loudest a la Madision #1 <br /> (L integral)</h1>
<p className="font-sans  ml-2 font-semibold text-[0.8rem] text-[#c0c0c0]">
  we focuse on ergronomic and meeting you where your work. its only a krstroke away.
</p>

<p className="flex mt-4">
<span><LuAlarmClock  className="text-[0.5rem] mt-1 ml-1 text-blue-400"/></span><span className="text-[0.5rem] ml-[0.4rem] text-[#c0c0c0] font-semibold">22 april 2021</span>
<span className="text-[0.5rem] text-[#c0c0c0] font-bold flex ml-[0.5rem]"><BsGraphUpArrow className="text-green-700 ml-[6rem] text-[0.9rem] font-bold"/>22 april 2021</span>
</p>
<p className="flex text-[0.6rem] font-bold ml-[1rem] text-[#c0c0c0] mt-[0.5rem]">
  Learn More <FaAngleRight className="mt-1 text-blue-300"/>

</p>



</div>
</div>

{/**card-2 */}
<div className="">
    <div className="bg-gray-100 ml-[1rem] w-[15rem] h-[30rem] boder-2 border-black">
    <p className="absolute  bg-red-600 w-[3rem] h-[1.4rem] text-[0.7rem] text-white font-bold pl-3 pt-[0.2rem]  mt-[0.8rem]"> NEW</p>
<img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/462650463_582441901094479_3751574785678899648_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFFOiBJnfTZpKs2j9aF3QQRlACSqJIh3tWUAJKokiHe1R0TF9FAvHZYt2zH8Voe5Bb-2Y0VOz2X6WkCPykm1vrX&_nc_ohc=Qg5iRSvort8Q7kNvgGHlCUo&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QGVo1rvZyQ2mEDtxGeCTFnRop0HpHaWEaovyy4mwZM8aQ&oe=677D026C" alt="picture" className="w-[17rem] h-[15rem] mt-[5rem] " />
<h2>
  <ul className="flex font-sans text-[0.7rem] gap-2 ml-[1rem] mt-[1rem]">
    <li className="text-blue-300">Google</li>
    <li className="text-[#c0c0c0]">Trending</li>
    <li className="text-[#c0c0c0]">Now</li>
  </ul>
</h2>
  <h1 className="mt-5 ml-2">Loudest a la Madision #1 <br /> (L integral)</h1>
<p className="font-sans  ml-2 font-semibold text-[0.8rem] text-[#c0c0c0]">
  we focuse on ergronomic and meeting you where your work. its only a krstroke away.
</p>

<p className="flex mt-4">
<span><LuAlarmClock  className="text-[0.5rem] mt-1 ml-1 text-blue-400"/></span><span className="text-[0.5rem] ml-[0.4rem] text-[#c0c0c0] font-semibold">22 april 2021</span>
<span className="text-[0.5rem] text-[#c0c0c0] font-bold flex ml-[0.5rem]"><BsGraphUpArrow className="text-green-700 ml-[6rem] text-[0.9rem] font-bold"/>10 comment</span>
</p>
<p className="flex text-[0.6rem] font-bold ml-[1rem] text-[#c0c0c0] mt-[0.5rem]">
  Learn More <FaAngleRight className="mt-1 text-blue-300"/>

</p>



</div>
</div>







{/**card-1 */}
<div className="">
    <div className="bg-gray-100 ml-[1rem] w-[15rem] h-[30rem] boder-2 border-black">
    <p className="absolute  bg-red-600 w-[3rem] h-[1.4rem] text-[0.7rem] text-white font-bold pl-3 pt-[0.2rem]  mt-[0.8rem]"> NEW</p>
<img src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.15752-9/462642969_1044357544158588_3728364887978325066_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGXiCnDPaZDIZCSl0PuaugjDKB1dwImhuEMoHV3AiaG4bkvKpJto9LrgZysLYEbwBZZrmYPQ4N_Tb9G2rBQKIJf&_nc_ohc=4StqxrOOQP0Q7kNvgHourdO&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&oh=03_Q7cD1QFJ7UmICkWMmReuZlhQP_7hwAfVabHT3q9-2RosklCqJQ&oe=677D0578" alt="picture" className="w-[17rem] h-[15rem] mt-[5rem] " />
<h2>
  <ul className="flex font-sans text-[0.7rem] gap-2 ml-[1rem] mt-[1rem]">
    <li className="text-blue-300">Google</li>
    <li className="text-[#c0c0c0]">Trending</li>
    <li className="text-[#c0c0c0]">Now</li>
  </ul>
</h2>
  <h1 className="mt-5 ml-2">Loudest a la Madision #1 <br /> (L integral)</h1>
<p className="font-sans  ml-2 font-semibold text-[0.8rem] text-[#c0c0c0]">
  we focuse on ergronomic and meeting you where your work. its only a krstroke away.
</p>

<p className="flex mt-4">
<span><LuAlarmClock  className="text-[0.5rem] mt-1 ml-1 text-blue-400"/></span><span className="text-[0.5rem] ml-[0.4rem] text-[#c0c0c0] font-semibold">22 april 2021</span>
<span className="text-[0.5rem] text-[#c0c0c0] font-bold flex ml-[0.5rem]"><BsGraphUpArrow className="text-green-700 ml-[6rem] text-[0.9rem] font-bold"/>10 comment</span>
</p>
<p className="flex text-[0.6rem] font-bold ml-[1rem] text-[#c0c0c0] mt-[0.5rem]">
  Learn More <FaAngleRight className="mt-1 text-blue-300"/>

</p>



</div>
</div>








</div>















</div>
{/** */}








    </main>
  )
}
export default Home