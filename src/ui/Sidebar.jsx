import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaEye } from "react-icons/lia";
import { VscMail } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Sidebar() {
    return (
      <div className="bg-gray-900 w-16 text-white flex flex-col items-center">
         <ul className=" flex flex-col gap-y-6 items-center">
           <li>
              <img src="../data/logo-1.jpg" className="h-16 w-auto" />
           </li>
           <li>
              <Link to='/'>
                 <AiOutlineHome className="text-2xl"/>
              </Link>
           </li> 
           <li>
              <Link to='/about' >
                 <RxPerson className="text-2xl"/>
              </Link>
           </li> 
           <li>
              <Link to='/resume' >
                 <IoSettingsOutline className="text-2xl"/>
              </Link>
           </li>
           <li>
              <Link to='/portfolio' >
                 <LiaEye className="text-2xl"/>
              </Link>
           </li>
           <li>
              <Link to='/contact' >
                 <VscMail  className="text-2xl"/>
              </Link>
           </li> 
        </ul>
        <div className="flex-1"></div>
        <div className="flex flex-col gap-y-4 pb-6">
           <a href="https://github.com/sele853" target="_blank" rel="noopener noreferrer" >
              <FaGithub  className="text-xl"/>
           </a>
           <a href="https://t.me/sele7853" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-xl"/>
           </a>
        </div>
      </div>
    )
}

export default Sidebar
