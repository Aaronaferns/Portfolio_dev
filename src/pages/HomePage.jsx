import React from "react";
import Navbar from "../sections/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import ResearchSidebar from "../components/ResearchSidebar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
// import Projects from "../sections/Projects";
import ProjectNew from "../sections/ProjectNew";
import Experiences from "../sections/Experiences";

import Contact from "../sections/Contact";
import Footer from '../sections/Footer';
import { useState } from "react";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-transparent container mx-auto max-w-7xl">
      <ScrollProgress />
      <Navbar />
      <Hero id="home" onOpenResearch={() => setSidebarOpen(true)} />
      <About id="about" />
      <Skills id="skills" />
      <Experiences id="experience" />
      <ProjectNew id="projects"/>
      <Contact id="contact"/>
      <Footer/>

      {/* Research Sidebar */}
      <ResearchSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Floating Research Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
        }}
        aria-label={sidebarOpen ? "Close Research & Notes" : "Open Research & Notes"}
      >
        <div className="flex items-center justify-center w-full h-full text-white group-hover:scale-110 transition-transform duration-300">
          {sidebarOpen ? '✕' : '📚'}
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {sidebarOpen ? 'Close' : 'Research & Notes'}
        </div>
      </button>
    </div>
  );
};

export default HomePage;