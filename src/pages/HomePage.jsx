import React from "react";
import Navbar from "../sections/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
// import Projects from "../sections/Projects";
import ProjectNew from "../sections/ProjectNew";
import Experiences from "../sections/Experiences";

import Contact from "../sections/Contact";
import Footer from '../sections/Footer';

const HomePage = () => {
  return (
    <div className="bg-transparent container mx-auto max-w-7xl">
      <ScrollProgress />
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experiences id="experience" />
      <ProjectNew id="projects"/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
};

export default HomePage;