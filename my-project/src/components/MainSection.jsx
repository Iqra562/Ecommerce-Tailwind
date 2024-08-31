import React from "react";
import img1 from "../assets/images/mainsec-1.webp"
import img2 from "../assets/images/mainsec-2.webp"
import img3 from "../assets/images/mainsec-3.webp"
import img4 from "../assets/images/mainsec-4.webp"
function MainSection(){
return(
    <>
   
    <div className=  "md:h-auto lg:h-[330px] xl:h-[430px] md:block  lg:flex md:px-4 lg:px-5 xl:px-14 lg:space-x-2 mt-2 md:space-y-2 lg:space-y-0">
    <div className="md:h-[384px] lg:h-auto  md:w-full lg:w-[50%] relative rounded-md overflow-hidden xl:p-12 lg:p-4 md:p-8 ">
    <img 
        src={img1} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover transform "
    />
    <div className="relative  xl:py-3 lg:py-3 lg:px-4 xl:px-8  flex flex-col justify-between  h-full ">
        <div className="flex items-center space-x-3">
            <span className=" bg-green-500 p-[3px] rounded-full block  "></span>
            <span className="uppercase text-blue-500 text-xs font-medium">in stock now</span>
        </div>
        <div className="w-[70%]">
            <h1 className="text-4xl font-bold  ">
                Upgrade Your Tech Game 
            </h1>
            <p className="text-gray-500 mt-3 xl:w-4/6 lg:w-5/6" >Find your perfect phone - sleek and stylish or budget-friendly.</p>
        </div>
        <div>
            <button className="px-9 py-4 bg-blue-600 text-white text-xs rounded-[5px] font-bold">Shop Now</button>
        </div>
    </div>
</div>
   

        <div className="lg:w-[25%] md:w-full  relative rounded-md overflow-hidden xl:p-9 lg:p-7  md:p-9 lg:h-full md:h-[691px]   ">
            <img src={img2} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative flex flex-col justify-between  h-full">
         <div>
            <button className="bg-white text-[10px] py-2 px-3 font-semibold rounded-md">GAMING</button>
         </div>
            <div className="font-bold w-[60%]">
                <h1>Discover ideal gaming solutions </h1>
            </div>
            </div>
        </div>
         
        <div className="lg:w-[25%] md:w-full flex flex-col space-y-2  rounded-md overflow-hidden  ">
          <div className="lg:h-[50%]   md:h-[394px]">
          <div className=" relative rounded-md overflow-hidden md:p-9 xl:p-9 lg:p-7  h-full    ">
            <img src={img3} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative flex flex-col justify-between  h-full">
         <div>
            <button className="bg-white text-[10px] py-2 px-3 font-semibold rounded-md uppercase"> Headphones</button>
         </div>
            <div className="font-bold w-[50%]">
                <h1>Hear the Difference </h1>
            </div>
            </div>
        </div>
          </div>
          <div className="lg:h-[50%]   md:h-[394px]">
          <div className=" relative rounded-md overflow-hidden md:p-9 xl:p-9 lg:p-7   h-full  ">
            <img src={img4} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative flex flex-col justify-between  h-full">
         <div>
            <button className="bg-white text-[10px]  py-2 px-3 font-semibold rounded-md uppercase"> Smart Watches</button>
         </div>
            <div className="font-bold w-[70%]">
                <h1>Experience the Latest Technology </h1>
            </div>
            </div>
        </div>
          </div>
         
        </div> 
    </div>
    </>
)
}

export default MainSection;