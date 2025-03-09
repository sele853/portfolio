function About() {
    return (
        <div className="h-screen w-full bg-gray-800 flex items-center justify-center px-6">
            <div className="flex flex-col lg:flex-row w-full max-w-7xl h-[90vh]">
                <div className="w-full lg:w-2/3 px-6 lg:px-12 h-full relative overflow-y-auto custom-scrollbar">
                    <h1 className="text-8xl lg:text-9xl font-bold opacity-10 absolute top-10 left-2 z-0">
                        ABOUT ME
                    </h1>
                    <div className="relative z-10 pr-4">
                        <div className="text-2xl font-[Mulish] mt-20 lg:mt-28 leading-relaxed text-white">
                            <span className="font-bold text-green-400">Hello, I'm Solehadin,</span> a passionate web developer focused on
                            creating beautiful and user-friendly web applications. I specialize
                            in frontend and backend technologies, including 
                            <span className="font-bold text-green-400"> HTML, CSS, JavaScript, React, Node.js, Express.js, and Tailwind CSS.</span>
                        </div>
                        <p className="text-2xl font-[Mulish] mt-10 leading-relaxed text-white">
                            I love coding and solving real-world problems through technology. My goal is to build scalable,
                            efficient, and visually appealing applications that enhance user experiences. 
                            With a strong foundation in modern web development frameworks, I continuously strive to improve my skills
                            and stay updated with the latest industry trends.
                        </p>
                        <p className="text-2xl font-[Mulish] mt-10 leading-relaxed text-white">
                            Beyond coding, I enjoy collaborating with teams, sharing knowledge, and contributing to open-source projects.
                            My expertise in React and Tailwind CSS allows me to create highly customizable and responsive UIs that adapt
                            seamlessly to different screen sizes.
                        </p>
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
