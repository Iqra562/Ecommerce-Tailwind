import React from "react";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import Carts from "../components/Carts";
import CartSection from "./CartSection";
function Home(){
    return(

<>
<Navbar/>
<div className="px-4 lg:px-5 xl:px-14  ">
<MainSection/>

{/* cart section  start */}
<CartSection/>
{/* cart section  end  */}

</div>
</>
    )
}
export default Home