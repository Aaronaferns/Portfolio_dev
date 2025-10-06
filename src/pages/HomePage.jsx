import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
// import Projects from "../sections/Projects";
import ProjectNew from "../sections/ProjectNew";
import Experiences from "../sections/Experiences";

import Contact from "../sections/Contact";
import Footer from '../sections/Footer';
import { useState, useEffect } from "react";

const HomePage = () => {

  return (
    <div className="bg-transparent container mx-auto max-w-7xl">
      <Navbar />
      <Hero id="home" />
      <About id="about" className="py-20" />
      <ProjectNew id="projects" className="py-20" />
      <Experiences id="experience" className="py-20" />
      <Contact id="contact" className="py-20" />
      <Footer />
    </div>
  );
};

export default HomePage;