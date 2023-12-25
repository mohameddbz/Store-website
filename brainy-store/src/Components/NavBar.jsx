import logo from "./../images/Android OS.png"
import myImage from "./../images/Group 1.png" 
import { FaAndroid } from "react-icons/fa6";

const NavBar = () => {
    return ( 
       <nav className=" bg-backround-color px-16 py-8">
         <div className="flex items-center justify-between text-darkGreen" >
            <div className=" flex items-center">
               {//  logo + name 
               }
               <FaAndroid size={70} />
               <div>
                  <p className=" font-bold text-4xl">BrainyStore</p>
               </div>
            </div>
            <div >
               {/* Home + shop ..  */}
               <ul className="flex space-x-12">
                  <li>HOME</li>
                  <li>SHOP</li>
                  <li>FEATURES</li>
                  <li>CONTACT</li>
               </ul>
            </div>
            <div className=" flex space-x-8 items-center">
               {/* LOGIN + CADNA */}
               <button>
                  <img src={myImage} alt="Cadna" />
               </button>
               <button className="px-8 py-2 border-2 border-darkGreen rounded-xl border-solid">
                  LOGIN
               </button>
               
            </div>
         </div>
       </nav>
     );
}
 
export default NavBar;