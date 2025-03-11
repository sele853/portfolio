function Portfolio() {
    return (
        <div className="w-full h-screen flex items-center justify-center font-[Mulish]">
           <div className="flex flex-col lg:flex-row items-center justify-center h-[90vh] ">
               <div className="w-full px-6 lg:px-8 lg:w-2/3 overflow-y-auto h-full relative custom-scrollbar">
                    <h1 className="font-bold text-7xl lg:text-9xl opacity-10 absolute top-10 right-2  z-0">PORTFOLIO</h1>
                    <div className="mt-32 leading-relaxed z-10">
                        <h2 className="font-bold text-3xl"><span className="text-green-500">My</span> Portfolio</h2>
                        <div className="grid grid-cols-1 gap-8 mb-8 mt-12">
                            <div className="rounded-2xl bg-gray-700 px-6 py-8">
                               <img src="pizza-2.png" className="rounded-2xl w-full h-auto max-h-80 object-cover"/>
                               <h3 className="text-green-500 font-bold text-lg mt-4 mb-4">Pizza Order</h3>
                               <p className="text-gray-400">It simplifies the process of ordering pizza for buyers and has been an amazing experience for me.</p>
                            </div>
                            <div className="rounded-2xl bg-gray-700 px-6 py-8">
                               <img src="travel-2.png"  className="rounded-2xl w-full h-auto max-h-80 object-cover"/>
                               <h3 className="text-green-500 font-bold text-lg mt-4 mb-4">Travel List</h3>
                               <p className="text-gray-400">A travel list project that assists travelers in organizing their packed items and enhances my experience in project development.</p>
                            </div>
                            <div className="rounded-2xl bg-gray-700 px-6 py-8 ">
                               <img src="react-3.png" className="rounded-2xl w-full h-auto max-h-80 object-cover"/>
                               <h3 className="text-green-500 font-bold text-lg mt-4 mb-4">React Quiz</h3>
                               <p className="text-gray-400">I developed a React quiz web app featuring basic React language questions, enhancing my skills in web development.</p>
                            </div>
                            <div className="rounded-2xl bg-gray-700 px-6 py-8">
                                <img src="worldwise-1.png" className="rounded-2xl w-full h-auto max-h-80 object-cover"/>
                                <h3 className="text-green-500 font-bold text-lg mt-4 mb-4">WorldWise</h3>
                                <p className="text-gray-400">WorldWise is a web app that helps visitors identify and explore tourist attractions, enhancing my experience in building location-based applications.</p>
                            </div>
                        </div>
                    </div>
               </div>
               <div className="flex justify-center items-center w-full lg:w-1/2">
                        <img src="./bg-6.jpg" className="h-screen w-full object-cover"/>
                </div>
           </div>
        </div>
    )
}

export default Portfolio
