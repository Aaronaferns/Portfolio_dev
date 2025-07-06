import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ProjectsSection from "./sections/ProjectSec";
import Experiences from "./sections/Experiences";

import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import BackgroundCanvas from "./components/BackgroundCanvas";
import { useState, useEffect } from "react";

const App = () => {

  return (
    <div className="bg-transparent container mx-auto max-w-7xl">
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <About  />
     <ProjectsSection />
      {/* <Projects /> */}
      <Experiences />
      {/* <Testimonial /> */}
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
