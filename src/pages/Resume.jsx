function Resume() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col lg:flex-row h-[90vh] justify-center items-center">
                <div className="w-full lg:w-2/3 px-6 lg:px-12  relative  h-full overflow-y-auto custom-scrollbar ">
                    <h1 className="font-[Mulish] text-8xl lg:text-9xl font-bold absolute top-10 left-24 z-0 opacity-10">RESUME</h1>
                    <div className="mt-28 lg:mt-33 font-[Mulish] leading-relaxed ">
                        <div className="grid grid-cols-2 gap-12 mt-8">
                            <h2 className="text-4xl"><span className="text-green-500">My</span> Exprerience</h2>
                            <h2 className="text-4xl"><span className="text-green-500">My</span> Education</h2>
                            <div className=" bg-gray-700 rounded-2xl px-6 py-8">
                                <div className="mb-4">
                                    <h2 className="font-bold text-lg">Web Development</h2>
                                    <span className="text-xs text-gray-400">2024 | Wollo University</span>
                                </div>
                                <p className="text-gray-400">Completed an internship at Wollo University, gaining hands-on experience in web development </p>
                            </div>
                            <div className=" bg-gray-700 rounded-2xl px-6 py-8">
                               <div className="mb-4">
                                   <h2 className="font-bold text-lg">Bahirdar University</h2>
                                   <span className="text-xs text-gray-400">2022-present | Ethiopia</span>
                               </div>
                               <p className="text-gray-400">Bachelor&apos;s Degree in Information Technology at Bahirdar Institute of Technology, Bahirdar, Ethiopia.</p>
                            </div>
                            <div className=" bg-gray-700 rounded-2xl px-6 py-8">
                                <div className="mb-4">
                                  <h2 className="font-bold text-lg">Fullstack Developer</h2>
                                  <span className="text-xs text-gray-400">2023 | Efuye-Gela</span>
                                </div>
                                <p className="text-gray-400">Gained hands-on experience in building and maintaining web applications.</p>
                            </div>
                            <div className=" bg-gray-700 rounded-2xl px-6 py-8">
                               <div className="mb-4">
                                  <h2 className="font-bold text-lg">Ultimate React Course</h2>
                                  <span className="text-xs text-gray-400">2023 | Udemy</span>
                               </div>
                               <p className="text-gray-400">Gained in-depth knowledge of React concepts and honed my skills in building efficient web applications.</p>
                            </div>

                            <div className="mt-10">
                                  <h2 className="font-bold text-lg"><span className="text-green-500">Personal</span> Skills</h2>
                                  <div className=" rounded-2xl bg-gray-700 px-6 py-8 mt-6">
                                    <div className="mb-6">
                                       <h3 className="font-bold text-md mb-2">Communication</h3>
                                       <div className="bg-gray-800 rounded-md h-2 ">
                                          <div className="bg-green-500 h-full w-5/6 rounded-md"></div>
                                       </div>
                                    </div>
                                    <div className="border-gray-600 border-t"></div>
                                    <div className="mt-4 mb-6">
                                       <h3 className="font-bold text-md mb-2">Team Work</h3>
                                       <div className="bg-gray-800  rounded-none h-2 ">
                                          <div className="bg-green-500 h-full w-3/5"></div>
                                       </div>
                                    </div>
                                    <div className="border-gray-600 border-t"></div>
                                    <div className="mt-4 mb-6">
                                       <h3 className="font-bold text-md mb-2">Leadership</h3>
                                       <div className="bg-gray-800  rounded-none h-2 ">
                                          <div className="bg-green-500 h-full w-3/4"></div>
                                       </div>
                                    </div>
                                    <div className="border-gray-600 border-t"></div>
                                    <div className="mt-4">
                                       <h3 className="font-bold text-md mb-2">Language</h3>
                                       <div className="bg-gray-800  rounded-none h-2 ">
                                          <div className="bg-green-500 h-full w-4/5"></div>
                                       </div>
                                    </div>
                                  </div>
                            </div>
                            <div className="mt-10">
                               <h2 className="font-bold text-lg"><span className="text-green-500">Proffesional</span> Skills</h2>
                               <div className=" rounded-2xl bg-gray-700 px-6 py-8 mt-6">
                                    <div className="mb-6">
                                       <h3 className="font-bold text-md mb-2">HTML/CSS/JS</h3>
                                       <div className="bg-gray-800  rounded-none h-2 ">
                                          <div className="bg-green-500 h-full w-9/10"></div>
                                       </div>
                                    </div>
                                    <div className="border-gray-600 border-t"></div>
                                    <div className="mt-4 mb-6">
                                       <h3 className="font-bold text-md mb-2">REACT/TAILWIND CSS</h3>
                                       <div className="bg-gray-800  rounded-none h-2 ">
                                          <div className="bg-green-500 h-full w-4/5"></div>
                                       </div>
                                    </div>
                                    <div className="border-gray-600 border-t"></div>
                                    <div className="mt-4 mb-6">
                                       <h3 className="font-bold text-md mb-2">NODE.JS/EXPRESS.JS</h3>
                                       <div className="bg-gray-800  rounded-none h-2 ">
                                          <div className="bg-green-500 h-full w-3/4"></div>
                                       </div>
                                    </div>
                                    <div className="border-gray-600 border-t"></div>
                                    <div className="mt-4">
                                       <h3 className="font-bold text-md mb-2">MONGODB</h3>
                                       <div className="bg-gray-800  rounded-none h-2 ">
                                          <div className="bg-green-500 h-full w-5/6"></div>
                                       </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img src="./bg-10.jpg" className="h-screen w-full object-cover "/>
                </div>
            </div>
           
        </div>
    )
}

export default Resume
