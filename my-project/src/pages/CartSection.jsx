import React from "react"
import Carts from "../components/Carts"
function CartSection(){
return(


    <div className="w-full  grid grid-cols-6 gap-3 mt-24  ">
 <div className="col-span-2 h-auto">
    <div className="bg-white p-[70px]">
        <h1 className="uppercase text-gray-700 text-[10px] font-semibold">Featured Items</h1>
        <h1 className=" font-bold text-4xl">Top 10 Bestsellers of This Week</h1>
        <p className="mt-4 text-gray-500">Looking for the latest and greatest in electronics? Look no further than our Top 10 Bestsellers of the week! Our expertly curated selection features the hottest gadgets and devices flying off the shelves.</p>
        <div className="pt-[70px]">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-sm">Shop More</button>
        </div>
    </div>
  
    
</div>
    <Carts/>
    <Carts/>
    <Carts/>
    <Carts/>
    <Carts/>
    <Carts/>
    <Carts/>
     </div>
   

)
}
export default CartSection