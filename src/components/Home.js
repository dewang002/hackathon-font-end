import React from "react";
import HeroComponent from "./utils/HeroComponent";
import AboutContent from "./utils/AboutContent";
import Content from "./utils/Content";
import VisionContent from "./utils/VisionContent";
import Eyes from "./utils/Eyes";
import Contact from "./utils/ContactContent";

function Home() {
  return (
    <div className="bg-black overflow-hidden ">
      <HeroComponent />
      <Content />
      <AboutContent />
      <VisionContent />
      <Eyes />
      <Contact />
    </div>
  );
}

export default Home;
