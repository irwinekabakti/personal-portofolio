// import "./App.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Hero />
      {/* <Projects />
      <TechStack /> */}
      <Contact />
    </>
  );
};

export default App;
