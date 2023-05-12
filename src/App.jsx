import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomCursor />
      <Hero />
    </>
  );
};

export default App;
