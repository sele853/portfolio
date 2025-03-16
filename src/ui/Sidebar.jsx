import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaEye } from "react-icons/lia";
import { VscMail } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Sidebar() {
    return (
      <div className="bg-gray-900 w-12 text-white flex flex-col items-center">
         <ul className=" flex flex-col gap-y-6 items-center">
           <li>
              <img src="./logo.jpg" className="h-12 w-auto" />
           </li>
           <li className="group relative">
              <Link to='/'>
                 <AiOutlineHome className="text-xl"/>
                 <span className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-800 text-white opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300 px-2 py-1 text-xs rounded-md z-50">Home</span>
              </Link>
           </li> 
           <li className="group relative">
              <Link to='/about' >
                 <RxPerson className="text-xl"/>
                 <span className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-800 text-white opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300 px-2 py-1 text-xs rounded-md z-50">About</span>
              </Link>
           </li> 
           <li className="group relative">
              <Link to='/resume' >
                 <IoSettingsOutline className="text-xl"/>
                 <span className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-800 text-white opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300 px-2 py-1 text-xs rounded-md z-50">Resume</span>
              </Link>
           </li>
           <li className="group relative">
              <Link to='/portfolio' >
                 <LiaEye className="text-xl"/>
                 <span className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-800 text-white opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300 px-2 py-1 text-xs rounded-md z-50">Portfolio</span>
              </Link>
           </li>
           <li className="group relative">
              <Link to='/contact' >
                 <VscMail  className="text-xl"/>
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300 px-2 py-1 text-xs rounded-md z-50">Contacts</span>
              </Link>
           </li> 
        </ul>
        <div className="flex-1"></div>
        <div className="flex flex-col gap-y-4 pb-6">
           <a href="https://www.linkedin.com/in/solehadinmohammed"  target="_blank" rel="noopener noreferrer" >
              <IoLogoLinkedin className="text-lg"/>
           </a>
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
