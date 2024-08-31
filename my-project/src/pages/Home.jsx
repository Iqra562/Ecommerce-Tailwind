import React from "react";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
function Home(){
    return(

<>
<Navbar/>
<div className="px-4 lg:px-5 xl:px-14  lg:space-x-2">
<MainSection/>
</div>
</>
    )
}
export default Home