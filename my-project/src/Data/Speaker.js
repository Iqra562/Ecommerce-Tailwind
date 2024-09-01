import speaker1a from '../assets/images/speaker/speaker-1-a.webp' 
import speaker1b from '../assets/images/speaker/speaker-1-b.webp' 
import speaker2a from '../assets/images/speaker/speaker-2-a.webp' 
import speaker2b from '../assets/images/speaker/speaker-2-b.webp' 
import speaker3a from '../assets/images/speaker/speaker-3-a.webp' 
import speaker3b from '../assets/images/speaker/speaker-3-b.webp' 
import speaker4a from '../assets/images/speaker/speaker-4-a.webp' 
import speaker4b from '../assets/images/speaker/speaker-4-b.webp' 

const Speakers = [

 
    {
  id:1, 
  name:"Helix-Tower Speaker",
  price:"60.00",
  image:speaker1a,
  imageOnHover  : speaker1b,
  sale:false,
  strikeThroughPrice : null,
  description:""

    },
    {
        id:2,
        name:"Zenith Wireless Speaker",
        price:"2,899.00",
        image:speaker2a,
        imageOnHover  : speaker2b,
        sale:true,
        strikeThroughPrice : "2999.00",
        description:""
      
          },
       
          {
        id:3,
        name:"Atlas Outdoor Speaker ",
        price:"370.00",
        image:speaker3a,
        imageOnHover  : speaker3b,
        sale:false,
        strikeThroughPrice : null,
        description:""
      
          },
    {
  id:4,
  name:"Harmony Bookshelf Speaker",
  price:"220.00",
  image:speaker4a,
  imageOnHover  : speaker4b,
  sale:false,
  strikeThroughPrice : "279.00",
  description:""

    },
 

 
   
 
    
]

export default Speakers;