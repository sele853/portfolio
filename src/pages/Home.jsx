import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="relative h-screen w-full overflow-y-auto flex flex-col items-center justify-center gap-y-5 z-0">
      <span className="absolute top-0 right-0 left-0 bottom-0 bg-[url('/bg-main-1.jpg')] opacity-35 bg-cover"></span>
      
      {/* Centering the Name and adjusting font size */}
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold z-40 font-[Mulish] text-center">
        Solehadin Mohammed
      </h1>
      
      <div className="z-40 text-center">
        <span className="text-lg sm:text-2xl md:text-3xl font-[Mulish] font-extralight">I am a </span>
        <TypeAnimation
          sequence={[
            "full stack developer.",
            3000,
            "web developer.",
            3000,
            "competitive programmer.",
            3000,
          ]}
          wrapper="span"
          speed={50}
          className="text-lg sm:text-2xl md:text-3xl font-bold font-[Mulish]"
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Home;
