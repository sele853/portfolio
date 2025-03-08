import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-y-5">
      <h1 className="text-6xl font-serif font-Mulish">Solehadin Mohammed</h1>
      <div>
        <span className="text-3xl font-[Mulish]">i am  </span>
        <TypeAnimation
        sequence={[
            'full stack developer', 
            3000, 
            'web developer', 
            3000, 
            'competitive programmer ', 
            3000, 
            
            ]}
            wrapper="span"
            speed={50}
            className="text-3xl font-bold"
            repeat={Infinity}
            />
        </div>
    </div>
  );
}

export default Home;
