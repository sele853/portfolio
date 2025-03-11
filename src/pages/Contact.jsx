import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";

function Contact() {
  return (
    <div className="w-full h-screen items-center justify-center font-[Mulish]">
      <div className="flex flex-col lg:flex-row items-center justify-center h-[90v]">
        <div className="w-full lg:w-2/3 px-6 lg:px-8 h-screen overflow-y-auto relative custom-scrollbar ">
          <h1 className="font-bold text-8xl lg:text-9xl top-10 z-0 opacity-10">
            CONTACTS
          </h1>
          <div className="mb-8 mt-12">
            <h2 className="font-bold text-2xl">
              <span className="text-green-500">Get</span> In Touch
            </h2>
            <div className="grid grid-cols-2 gap-12  mb-8">
              <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-4xl text-green-500" />
                  <div>
                    <h3 className="font-bold text-xl">Address</h3>
                    <span className="text-gray-400 text-sm">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                <div className="flex items-center gap-4">
                  <MdOutlineAlternateEmail className="text-4xl text-green-500" />
                  <div>
                    <h3 className="font-bold text-xl">Email</h3>
                    <span className="text-gray-400 text-sm">
                      solehadin7853@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                <div className="flex items-center gap-4">
                  <LuPhone className="text-4xl text-green-500" />
                  <div>
                    <h3 className="font-bold text-xl">Phone</h3>
                    <span className="text-gray-400 text-sm">+251944287853</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl px-4 py-6 bg-gray-700 mt-8">
                <div className="flex items-center gap-4">
                  <IoLogoLinkedin className="text-4xl text-green-500" />
                  <div>
                    <h3 className="font-bold text-xl">Linkedin</h3>
                    <span className="text-gray-400 text-sm">
                      linkedin.com/in/solehadinmohammed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-screen">
          <img src="bg-4.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
