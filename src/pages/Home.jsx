
import imgone from "../assets/imgone.png"
import imgtwo from "../assets/imgtwo.png"
import imgthree from "../assets/imgthree.png"
import imgfour from "../assets/imgfour.png"
import Productsinfo from "../components/Productsinfo";
import Hero from "../components/Hero";
import Navbar from "../components/Navbarinterface";
import "./Home.css"

import Penfits from "../components/Penfitspage";
import Navbarinterface from "../components/Navbarinterface";

let products=[

      
        {
          id:1,
       img:imgone,
          title:" Maximum Performance",
          desc:"Sample text. Click to select the Text Element."
        },
        {
          id:2,
            img:imgtwo,
          title:"Fully Secure Data Centers",
          desc:"Sample text. Click to select the Text Element."
        },
        {
          id:3,
           img:imgthree,
          title:"  DDos Attack Prevention",
          desc:"Sample text. Click to select the Text Element."
        },
        {
          id:4,
           img:imgfour,
          title:"  Get UnmeteredBandwidth",
          desc:"Sample text. Click to select the Text Element."
        }
      ]
      
    

export default function Home() {
  return (
    <div>
     
        <Navbar/>
         
        <Hero/>
 
       
       <section className="productssection">
        <h2 className="special">Pick your perfect web hosting plan</h2>

        <div className="container">
          {
            products.map((product,index)=>{
              return(
              <Productsinfo passedproduct={product} key={product.id}/>
              )
            })
          }
        
        </div>
    </section>
   <Penfits/>
    </div>
  )

}
