import React from "react";


function Carts({name,price,image,sale,strikeThroughPrice}){
return(
    <>
       
       <div className="bg-white h-full inline-block rounded-md overflow-hidden relative">
           {sale &&  <div className="absolute bg-green-700 text-white m-3 px-2 text-sm font-medium rounded-sm">Sale</div>}
            <div className="h-[350px] md:h-[220px] lg:h-[290px]">
                <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="px-7 py-9 h-[120px] md:h-[138px] lg:h-[110px] xl:h-[140px]">
                <p className="uppercase text-[10px] text-gray-500 font-semibold">stockmart</p>
                <h1 className="font-semibold ">{name}</h1>
                <h1 className="text-green-700 font-bold inline">${price}</h1> 
              {strikeThroughPrice &&  <span className="line-through text-gray-600 font-semibold text-sm ml-1">${strikeThroughPrice}</span>}
            </div>
        </div>
    </>
)
} 
export default Carts; 