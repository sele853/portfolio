import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="relative h-screen w-full overflow-y-auto flex flex-col items-center justify-center gap-y-5   ">
      <span className="absolute top-0 right-0 left-0 bottom-0 bg-[url('/bg-9.jpg')] opacity-35 bg-cover"></span>
      <h1 className="text-8xl font-abold z-40  font-[Mulish]">
        Solehadin Mohammed
      </h1>
      <div className="z-40">
        <span className="text-3xl font-[Mulish]  font-extralight">I am a </span>
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
          className="text-3xl font-bold font-[Mulish]"
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Home;
