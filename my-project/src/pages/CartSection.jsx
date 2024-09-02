import React from "react"
import Carts from "../components/Carts"
import Speakers from "../Data/Speaker.js"
import SmartWatches from "../Data/SmartWatches.js"
import Phones from "../Data/Phones.js"
import Headphones from "../Data/Headphones.js"




const allItems = [ 
    ...SmartWatches.slice(0, 1), 
    ...Headphones.slice(0, 1),     
    ...Phones.slice(0, 1),       
    ...Headphones.slice(1, 2),     
    ...Phones.slice(1, 3),        
    ...Speakers.slice(0, 4),     
  ];

function CartSection(){
return( 


    <div className="w-full grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 mt-24">
 <div className="col-span-1  md:col-span-2  h-full rounded-md overflow-hidden">
    <div className="bg-white md:p-[20px] lg:p-[40px] h-full">
        <h1 className="uppercase text-gray-500 text-[10px] font-semibold">Featured Items</h1>
        <h1 className=" font-bold text-4xl">Top 10 Bestsellers of This Week</h1>
        <p className="mt-4 text-gray-500">Looking for the latest and greatest in electronics? Look no further than our Top 10 Bestsellers of the week! Our expertly curated selection features the hottest gadgets and devices flying off the shelves.</p>
        <div className="md:py-[40px]   lg:pt-[40px] ">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-sm">Shop More</button>
        </div>
    </div>
  
    
</div>
{
    allItems.map((item)=>{
        return(

            <Carts    key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            strikeThroughPrice={item.strikeThroughPrice}
            sale={item.sale}/>
        )
    })
}
    
     </div>
   

)
}
export default CartSection