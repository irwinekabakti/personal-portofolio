import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-orange-500 mt-14 font-bold underline">
        Hello world!
      </h1>
      <div className="flex justify-between items-center space-x-2 ">
        <div className="h-[1px] text-bold md:w-10 sm:w-7 vvs:w-5 w-4 bg-red "></div>
        <p className="text-black font-Glimer-Medium font-medium hover:text-[#EEA1BE] transition-colors duration-300 ease-in-out capitalize vss:text-sm md:text-base xl:text-lg text-xs">
          Available for work
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-between items-center ">
        <div>
          <p className=" text-white/60 font-Glimer-Light xl:text-[1.3rem] 2xl:text-[1.5rem] lg:text-base md:text-sm text-xs xl:leading-8 2xl:leading-9 lg:leading-6 leading-5 mb-6 md:mb-0">
            As a frontend developer, my expertise lies in creating seamless and
            intuitive user experiences. I specialize in using cutting-edge
            technologies to produce high-quality web applications. Specifically,
            I have vast knowledge of ReactJS and NodeJS, which allow me to build
            complex and dynamic applications with ease.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
