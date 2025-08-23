import { useEffect, useState } from "react";
import Projects from "../sections/Projects"; // your projects array
import ViewProjectButton from "./ViewProjectButton";

const FeaturedCarousel = () => {
  const [index, setIndex] = useState(0);
  const projects = Projects;

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const project = projects[index];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-[80%] rounded-2xl my-auto"
      />
        <p className="text-sm font-semibold my-4">{project.title}</p>
      <ViewProjectButton href="#projects"/>
    </div>
  );
};

export default FeaturedCarousel;
