import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

function About() {
    return (
        <div className="h-screen w-full bg-gray-800 flex items-center justify-center px-6">
            <div className="flex flex-col lg:flex-row w-full max-w-7xl h-[90vh]">
                <div className="w-full lg:w-2/3 px-6 lg:px-12 h-full relative overflow-y-auto custom-scrollbar">
                    <h1 className="text-8xl lg:text-9xl font-bold opacity-10 absolute top-10 left-2 z-0">
                        ABOUT ME
                    </h1>
                    <div className="relative z-10 pr-4">
                        <div className="text-2xl font-[Mulish] mt-20 lg:mt-28 leading-relaxed text-white text-justify">
                            <span className="font-bold text-green-400">Hello, I&apos;m Solehadin,</span> a passionate web developer focused on
                            creating beautiful and user-friendly web applications. I specialize
                            in frontend and backend technologies, including 
                            <span className="font-bold text-green-400"> HTML, CSS, JavaScript, React, Node.js, Express.js, and Tailwind CSS and Mongodb.</span>
                        </div>
                        <div className="mt-8 font-[Mulish]">
                            <h1 className="font-bold text-2xl"><span className="text-green-400">My</span> Services</h1>
                            <div className="grid grid-cols-2 gap-8 mt-8">
                                <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                    <IoLogoHtml5 className="text-green-500 text-4xl mb-4"/>
                                    <h2 className="mb-4 font-bold text-lg">Web Development</h2>
                                    <p>I build custom websites using the latest technologies, ensuring a seamless user experience across all devices.</p>
                                </div>
                                <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                    <IoLogoNodejs className="text-green-500 text-4xl mb-4"/>
                                    <h2 className="mb-4 font-bold text-lg">Backend Development</h2>
                                    <p>I develop scalable and secure backends, connecting your frontend to powerful data management systems.</p>
                                </div>
                                <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                    <IoLogoReact className="text-green-500 text-4xl mb-4"/>
                                    <h2 className="mb-4 font-bold text-lg">Frontend Development</h2>
                                    <p>Front-end development focuses on creating responsive, visually appealing, and interactive user interfaces</p>
                                </div>
                                <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                    <FaLaptopCode className="text-green-500 text-4xl mb-4"/>
                                    <h2 className="mb-4 font-bold text-lg">Customs Web Applications</h2>
                                    <p>I build custom web applications tailored to your business needs, from e-commerce to content management systems.</p>
                                </div>
                                <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                    <FaMobileAlt className="text-green-500 text-4xl mb-4"/>
                                    <h2 className="mb-4 font-bold text-lg">Responsive Design</h2>
                                    <p>Responsive web development ensures a seamless and optimized user experience across all devices.</p>
                                </div>
                                <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                    <FaTools className="text-green-500 text-4xl mb-4"/>
                                    <h2 className="mb-4 font-bold text-lg">Maintenance & Support</h2>
                                    <p>I offer ongoing maintenance and support to ensure your website or application stays up-to-date, secure, and running smoothly.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
                    <img 
                        src="./profile.png" 
                        className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-green-400 shadow-xl object-cover"
                        alt="Profile" 
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
