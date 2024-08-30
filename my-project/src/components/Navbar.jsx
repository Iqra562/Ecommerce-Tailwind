import React, { useState } from "react";
import  img from "../assets/images/stockmart-main.svg"
import USA from "../assets/images/US.png"
import { LuAlignLeft } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiUser6Line } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxTextAlignLeft } from "react-icons/rx";

function Navbar (){
    const [open,setIsOpen] = useState(false);
    const  toggleDropDown = ()=>{
        setIsOpen(!open)
    }

return(
    <nav>
        <div className="bg-black p-3 flex justify-center">
<p className="text-white text-[12px]">Midseason Sale: 20% Off — Auto Applied at Checkout — Limited Time Only</p>

        </div>
        <div  className=" bg-[#f7f7f7] lg:px-5 xl:px-14   ">
            <div className="flex justify-between items-center  xl:py-6 lg:py-3 xl:border-b-2">
                <div className="xl:hidden lg:block"><RxTextAlignLeft size="20px" /></div>
     <div className="lg:ml-36 xl:ml-0">
     <img src={img} height="150" width="150" alt="kl" />

     </div>
     <div className="ml-3 lg:hidden xl:block">
        <button type="button" className="text-blue-600  border-blue-600 border-2 rounded flex items-start py-[10px] px-4 space-x-2 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
        <LuAlignLeft  size="19"/>
        <p className="text-xs  font-bold">
            Shop Now
        </p>
        </button>
     </div>
     <div className="relative  ml-2 lg:hidden xl:flex">
        <input type="text" className=" xl:w-[380px]  py-[8px] px-4 border-2 ring-0 rounded-[4px]    ring-gray-200  focus:border-blue-600 focus:outline-none hover:border-blue-600 placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold " placeholder="What are you looking for ..." />
        <div className="absolute inset-y-0 right-0 flex items-center  cursor-pointer pr-5">
        <LuSearch className="text-blue-600" size="18px" />
        </div>

     </div> 
     <div className="flex  lg:space-x-6 xl:space-x-4 ">
        <ul className="lg:hidden xl:flex text-sm text-gray-400 font-medium  space-x-7">
            <li>Catalog</li>
            <li>Journal</li>
            <li>About</li>
        </ul>
        <div className="lg:hidden  xl:flex   ">
            <button className="font-sm px-4 py-0 font-semibold ">
                <div  className="py-0 flex space-x-1">
<span className="text-sm">Dark Mode</span>
<span className="bg-gray-200  px-[7px] rounded-2xl py-[2px] text-gray-500  text-sm align-bottom ">
    <span className=" bg-white rounded-full  p-[6px] inline-block mr-[5px] shadow-sm shadow-gray-400 "></span>Off
</span>
                </div>
            </button>
        </div>
        <div className="flex items-start space-x-2">
        <div className="rounded-full overflow-hidden w-5 h-5    ">
    <img src={USA} alt="USA" className="w-full h-full object-cover" />
</div>
<span className="text-sm font-semibold">UA</span>

        </div>
        <div className="relative cursor-pointer  " onClick={toggleDropDown}n>

        <div className="text-sm flex space-x-2 font-semibold">
            <span>EN</span> <span  ><RiArrowDropDownFill size="20px" /></span>
        </div>
     {open && (    <div
        className={`absolute left-[-50px] mt-3 bg-white shadow-sm rounded transition-all duration-300 ease-out ${
            open ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 pointer-events-none'
        }`}
    >
        <ul className="text-base py-[6px]">
            <li className="py-2 px-7 cursor-pointer">English</li>
            <li className="py-2 px-7 cursor-pointer">Spain</li>
            <li className="py-2 px-7 cursor-pointer">Italy</li>
        </ul>
    </div>)}
        </div>
        <div className="flex space-x-5 ">
            <div><RiUser6Line size="20px" /></div>
            <span className="border-l-2"></span>
            <div ><RiShoppingCartLine  size="20px"/></div>
        </div>
     </div>
     </div>
     <div className="lg:block xl:hidden">     <div className="relative  ">
        <input type="text" className="w-full  py-[8px] px-4 border-2 ring-0 rounded-[4px]    ring-gray-200  focus:border-blue-600 focus:outline-none hover:border-blue-600 placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold " placeholder="What are you looking for ..." />
        <div className="absolute inset-y-0 right-0 flex items-center  cursor-pointer pr-5">
        <LuSearch className="text-blue-600" size="18px" />
        </div>

     </div> </div>
        </div>
      
    </nav>
)
}
export default Navbar;


