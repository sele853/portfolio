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
      <div className="bg-gray-900 w-12 text-white flex flex-col items-center">
         <ul className=" flex flex-col gap-y-6 items-center">
           <li>
              <img src="./logo.jpg" className="h-12 w-auto" />
           </li>
           <li>
              <Link to='/'>
                 <AiOutlineHome className="text-xl"/>
              </Link>
           </li> 
           <li>
              <Link to='/about' >
                 <RxPerson className="text-xl"/>
              </Link>
           </li> 
           <li>
              <Link to='/resume' >
                 <IoSettingsOutline className="text-xl"/>
              </Link>
           </li>
           <li>
              <Link to='/portfolio' >
                 <LiaEye className="text-xl"/>
              </Link>
           </li>
           <li>
              <Link to='/contact' >
                 <VscMail  className="text-xl"/>
              </Link>
           </li> 
        </ul>
        <div className="flex-1"></div>
        <div className="flex flex-col gap-y-4 pb-6">
           <a href="https://github.com/sele853" target="_blank" rel="noopener noreferrer" >
              <FaGithub  className="text-lg"/>
           </a>
           <a href="https://t.me/sele7853" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-lg"/>
           </a>
        </div>
      </div>
    )
}

export default Sidebar
