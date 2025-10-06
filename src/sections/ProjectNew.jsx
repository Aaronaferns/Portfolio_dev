import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "../ThemeContext"; 
import Projects from "./Projects";
import SVGMap from "../components/SVGMap";
import SkillIcons from "../components/SVGMap";
import ViewProjectButton from "../components/ViewProjectButton";
import { View } from "@react-three/drei";
import { trackProjectView, trackSectionView } from "../utils/analytics";

export default function ProjectsSection({id}) {
  const { isBright, mainTextColor, secondaryTextColor } = useTheme()
  const projects = Projects

  // Track section view
  useEffect(() => {
    trackSectionView('Projects');
  }, []);

  return (
    <section id = {id} className="w-full bg-trasparent py-20 px-6">
      <h2 className={`text-4xl md:text-5xl font-bold text-center ${mainTextColor}  mb-16`}>
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 max-w-6xl mx-auto ">
        {projects.map((project, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: i * 0.2 }}
    viewport={{ once: true }}
    className={`flex flex-col h-full backdrop-blur-lg border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group ${
      isBright 
        ? 'bg-white/80 border-white/30' 
        : 'bg-black/40 border-white/10'
    }`}
  >
    <div className="overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="flex flex-grow flex-col p-6">
      <h3 className={`text-xl font-semibold mb-2 ${mainTextColor}`}>
        {project.title}
      </h3>
      <p className={`text-gray-300 mb-4 ${secondaryTextColor}`}>
        {project.description}
      </p>

            {/* Tech Stack Icons */}
            {project.tech && (
        <div className="flex flex-wrap gap-2 my-2 mb-4">
          <p className="text-green-500 text-sm font-medium">Tech Stack: </p>
          {project.tech.map((techItem, idx) => (
            <img
              key={idx}
              src={SkillIcons[techItem]} // URL or local import
              alt={techItem}
              className="h-6 w-6"
              title={techItem} // hover tooltip
            />
          ))}
        </div>
      )}

      {/* Keywords */}
      {project.keywords && project.keywords.length > 0 && (
        <div className="flex flex-wrap gap-2 my-2 mb-8">
          <p className="text-blue-400 text-sm font-medium">Keywords: </p>
          {project.keywords.map((keyword, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs rounded-full border ${
                isBright
                  ? 'bg-gray-100 text-gray-700 border-gray-300'
                  : 'bg-gray-800 text-gray-300 border-gray-600'
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>
      )}

      <div
        href={project.link}
        className="mt-auto mx-auto inline-block px-4 py-2 "
      >
        <ViewProjectButton  
          href={project.link} 
          name="View on Github" 
          isGithub
          onClick={() => trackProjectView(project.title)}
        />
      </div>
    </div>
  </motion.div>
))}
      </div>
    </section>
  );
}
