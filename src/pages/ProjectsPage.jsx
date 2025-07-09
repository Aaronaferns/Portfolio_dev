import React from "react";
import Navbar from "../sections/Navbar";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import DeepMPCProject from "../projects/RLMPC";
import BackgroundCanvas from "../components/BackgroundCanvas";



export default function ProjectsPage() {
  const projects =[DeepMPCProject]
  return (
    <div className="relative bg-transparent text-white min-h-screen z-10 px-4">
      <BackgroundCanvas />
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="h-16 max-w-5xl  pt-12 "><h1 className="text-6xl">Projects</h1></div>
        
        <div className="mt-22 max-w-5xl ">
          {projects.map((ProjectComponent, index) => (
            <div key={index}>
              <ProjectComponent />
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
