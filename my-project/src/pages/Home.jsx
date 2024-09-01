import React from "react";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import Carts from "../components/Carts";
function Home(){
    return(

<>
<Navbar/>
<div className="px-4 lg:px-5 xl:px-14  ">
<MainSection/>
  <Carts/>

</div>
</>
    )
}
export default Home