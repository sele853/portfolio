import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

function Portfolio() {
    return (
        <div className="w-full h-screen flex items-center justify-center font-[Mulish]">
           <div className="flex flex-col lg:flex-row items-center justify-center h-[90vh]">
               {/* Content (Scrollable on Small Screens) */}
               <div className="w-full px-6 lg:px-8 lg:w-2/3 overflow-y-auto h-screen relative custom-scrollbar">
                    {/* Image for Small Screens */}
                    <div className="lg:hidden w-full flex justify-center items-center mb-8">
                        <img src="./bg-1.jpg" className="h-64 w-full object-cover" />
                    </div>

                    <h1 className="font-bold text-8xl lg:text-9xl opacity-10 absolute top-10 right-3 z-0">PORTFOLIO</h1>
                    <div className="mt-32 leading-relaxed z-10">
                        <h2 className="font-bold text-3xl"><span className="text-green-500">My</span> Portfolio</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-12">
                            {/* Project 1 */}
                            <div className="rounded-2xl bg-gray-700 px-6 py-8">
                               <img src="pizza-3.png" className="rounded-2xl w-full h-52 object-cover"/>
                               <div className="flex items-center gap-4 lg:gap-28 mt-4 mb-4">
                                   <h3 className="text-green-500 font-bold text-lg">Pizza Order</h3>
                                   <div className="flex gap-6">
                                        <a href="https://github.com/sele853/Pizza-Order" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="text-lg"/>
                                        </a>
                                        <a href="https://pizza-order-jkhwaqfkt-sele853s-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                                            <IoIosLink className="text-lg" />
                                        </a>
                                   </div>
                               </div>
                               <p className="text-gray-400">It streamlines pizza ordering for buyers and has been a great experience for me.</p>
                            </div>

                            {/* Project 2 */}
                            <div className="rounded-2xl bg-gray-700 px-6 py-8">
                               <img src="travel-1.png" className="rounded-2xl w-full h-52 object-cover"/>
                               <div className="flex items-center gap-4 lg:gap-28 mt-4 mb-4">
                                   <h3 className="text-green-500 font-bold text-lg">Travel List</h3>
                                   <div className="flex gap-6">
                                        <a href="https://github.com/sele853/travelList" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="text-lg"/>
                                        </a>
                                        <a href="https://travel-list-d4jy1ocd5-sele853s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                                             <IoIosLink className="text-lg" />
                                        </a>
                                   </div>
                               </div>
                               <p className="text-gray-400">A travel list app for organizing items and boosting my project skills.</p>
                            </div>

                            {/* Project 3 */}
                            <div className="rounded-2xl bg-gray-700 px-6 py-8">
                               <img src="react-2.png" className="rounded-2xl w-full h-52 object-cover"/>
                               <div className="flex items-center gap-4 lg:gap-28 mt-4 mb-4">
                                   <h3 className="text-green-500 font-bold text-lg">React Quiz</h3>
                                   <div className="flex gap-6">
                                        <a href="https://github.com/sele853/React-Quiz" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="text-lg"/>
                                        </a>
                                        <a href="https://react-quiz-cex2aawah-sele853s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            <IoIosLink className="text-lg" />
                                        </a>
                                   </div>
                               </div>
                               <p className="text-gray-400">Developed a React quiz app with basic React questions, improving my web skills.</p>
                            </div>

                            {/* Project 4 */}
                            <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                <img src="worldwise-2.png" className="rounded-2xl w-full h-52 object-cover"/>
                                <div className="flex items-center gap-4 lg:gap-28 mt-4 mb-4">
                                   <h3 className="text-green-500 font-bold text-lg">WorldWise</h3>
                                   <div className="flex gap-6">
                                        <a href="https://github.com/sele853/worldwise" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="text-lg"/>
                                        </a>
                                        <a href="https://worldwise-e04bvp5mw-sele853s-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                                            <IoIosLink className="text-lg" />
                                        </a>
                                   </div>
                               </div>
                                <p className="text-gray-400">Developed WorldWise, for exploring tourist attractions, enhancing my location-based app skills.</p>
                            </div>
                        </div>
                    </div>
               </div>

               {/* Image for Larger Screens */}
               <div className="hidden  w-full lg:w-1/2 lg:flex justify-center items-center">
                   <img src="./bg-1.jpg" className="h-screen w-full object-cover" />
               </div>
           </div>
        </div>
    );
}

export default Portfolio;