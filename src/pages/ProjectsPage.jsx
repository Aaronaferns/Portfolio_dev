import React, { useEffect } from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

// Import your project components
import DeepMPCProject from "../projects/RLMPC";
// import OtherProject from "../projects/OtherProject";

export default function ProjectsPage() {
  // Array of projects with unique IDs and component references
  const projects = [
    { id: "deepmpc", component: DeepMPCProject },
    // { id: "otherproject", component: OtherProject },
  ];

  // Handle smooth scrolling to anchor links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="relative bg-transparent text-white min-h-screen z-10 px-4">
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        {/* Page title */}
        <div className="h-16 max-w-5xl pt-12">
          <h1 className="text-6xl font-bold">Projects</h1>
        </div>

        {/* Projects list */}
        <div className="mt-22 max-w-5xl w-full">
          {projects.map(({ id, component: ProjectComponent }) => (
            <section id={id} key={id} className="mb-32">
              <ProjectComponent />
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
