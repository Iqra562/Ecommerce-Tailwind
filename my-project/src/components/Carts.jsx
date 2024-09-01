import React from "react";
import cart1 from '../assets/images/cart-1-a.webp'

function SingleCart(){
    return(
        <div className="bg-white h-full inline-block rounded-md overflow-hidden relative">
            <div className="absolute bg-green-700 text-white m-3 px-2 text-sm font-medium rounded-sm">Sale</div>
            <div className="h-[220px]">
                <img src={cart1} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="px-7 py-9 h-[200px]">
                <p className="uppercase text-[10px] text-gray-500 font-semibold">stockmart</p>
                <h1 className="font-semibold ">Vortex Smart Watch</h1>
                <h1 className="text-green-700 font-bold inline">$299.00</h1> <span className="line-through text-gray-600 font-semibold text-sm ml-2">$250.00</span>
            </div>
        </div>
        
       
    )
}

function Carts(){
return(
    <>
        <div className="w-full  grid grid-cols-6 gap-3  mt-24">

 <SingleCart/>
 <SingleCart/>
 <SingleCart/>
  </div>

    </>
)
} 
export default Carts;