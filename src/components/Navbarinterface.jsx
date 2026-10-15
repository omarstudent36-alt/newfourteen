
import img from "../assets/logo-hostig.png"
import { FaArrowDown } from "react-icons/fa6";
import "./Navbar.css" 
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"
 function Navbar() {
  return (
   <header>
     <nav>
       
            <div className="container">
                
                <img src={img}/>
                <GiHamburgerMenu className="menuicon" /> 
                <ul>
                   
                    <li>
                        <a href="#">HOME</a>
                    </li>
                     <li>
                        <div className="arrow">
                               <a className="active" href="#">
                            
                            PAGES</a>
                             <FaArrowDown />
                        </div>
                     
                    </li>
                     <li>
                        <a href="#">CONTACT
                           
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
   </header>
   
    
  )
}
export default Navbar
