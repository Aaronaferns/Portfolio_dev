import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTheme } from "../ThemeContext";
import Projects from "./Projects";
import ViewProjectButton from "../components/ViewProjectButton";
import { trackProjectView, trackSectionView } from "../utils/analytics";

export default function ProjectsSection({id}) {
  const { isBright, mainTextColor, secondaryTextColor } = useTheme()
  const projects = Projects

  // Track section view
  useEffect(() => {
    trackSectionView('Projects');
  }, []);

  // Get latest 3 projects
  const latestProjects = projects.slice(0, 3)

  // Group ALL projects by category (including those in latest)
  const categorizedProjects = projects.reduce((acc, project) => {
    const category = project.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(project)
    return acc
  }, {})

  const categoryTitles = {
    'reinforcement-learning': 'Reinforcement Learning',
    'nlp-genai-cv': 'NLP, Generative AI & Computer Vision',
    'data-analytics': 'Data Analytics',
    'cloud-computing': 'Cloud Computing',
    'other': 'Other Projects'
  }

  return (
    <section id = {id} className="w-full bg-transparent py-20 px-6 c-space">
      <h2 className={`text-heading midjourney-title ${mainTextColor}`}>My Projects</h2>

      {/* Latest Projects Section */}
      <div className="max-w-7xl mx-auto mt-12 mb-20">
        <div className="flex items-center justify-center max-w-5xl mx-auto mb-12">
          <div className={`flex-1 h-px ${isBright ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
          <span className={`px-6 text-lg font-semibold ${secondaryTextColor}`}>Latest Projects</span>
          <div className={`flex-1 h-px ${isBright ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
        </div>
        <div className="text-center mb-12">
          <p className={`text-lg ${secondaryTextColor} max-w-2xl mx-auto`}>
            These are the projects I'm currently most interested in and actively working on
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestProjects.map((project, i) => (
            <div
              key={`latest-${i}`}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                i % 4 === 0
                  ? 'grid-default-color'
                  : i % 4 === 1
                  ? 'grid-special-color'
                  : i % 4 === 2
                  ? 'grid-black-color'
                  : 'grid-teal-color'
              }`}
              onClick={() => {
                // Scroll to the project in the "All Projects" section
                const projectElements = document.querySelectorAll('[data-project-title]');
                const targetProject = Array.from(projectElements).find(el =>
                  el.getAttribute('data-project-title') === project.title
                );
                if (targetProject) {
                  targetProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-inherit mb-3 line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-sm text-inherit/80 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-white/20 text-inherit font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                {project.link && project.link.trim() !== "" && (
                  <ViewProjectButton href={project.link} name="View Project" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center max-w-5xl mx-auto mb-16">
        <div className={`flex-1 h-px ${isBright ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
        <span className={`px-6 text-lg font-semibold ${secondaryTextColor}`}>All Projects</span>
        <div className={`flex-1 h-px ${isBright ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
      </div>

      {/* All Projects Section - Categorized */}
      <div className="space-y-20 max-w-5xl mx-auto">
        {Object.entries(categorizedProjects).map(([category, categoryProjects]) => (
          <div key={category} className="space-y-8">
            {/* Category Header */}
            <div className="flex items-center justify-center">
              <div className={`flex-1 h-px ${isBright ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
              <span className={`px-6 text-xl font-semibold ${mainTextColor}`}>
                {categoryTitles[category] || category}
              </span>
              <div className={`flex-1 h-px ${isBright ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
            </div>

            {/* Projects in this category */}
            <div className="space-y-16">
              {categoryProjects.map((project, i) => (
  <div
    key={i}
    data-project-title={project.title}
    className={`group relative overflow-hidden ${
      i % 4 === 0
        ? 'grid-default-color'
        : i % 4 === 1
        ? 'grid-special-color'
        : i % 4 === 2
        ? 'grid-black-color'
        : 'grid-teal-color'
    } border rounded-2xl`}
  >
    {/* Decorative elements */}
    <div className={`absolute top-0 left-0 w-full h-1 ${
      isBright ? 'bg-gradient-to-r from-gray-400 to-gray-500' : 'bg-gradient-to-r from-gray-600 to-gray-700'
    }`} />
    <div className="absolute top-4 right-4 w-20 h-20 opacity-3">
      <div className={`w-full h-full rounded-full ${
        isBright ? 'bg-gray-300' : 'bg-gray-700'
      }`} />
    </div>

    <div className={`grid ${i % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
      {/* Image Section */}
      <div className={`relative overflow-hidden ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className={`absolute inset-0 ${
          isBright
            ? 'bg-gradient-to-br from-gray-100/60 to-gray-200/60'
            : 'bg-gradient-to-br from-gray-800/40 to-gray-900/40'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Section */}
      <div className={`p-8 flex flex-col justify-center ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="space-y-4">
          <div>
            <h3 className={`text-2xl mb-2 midjourney-font text-inherit`}>
              {project.title}
            </h3>
            <div className={`w-12 h-0.5 ${
              isBright ? 'bg-gray-400' : 'bg-gray-600'
            }`} />
          </div>

          <p className={`text-base leading-relaxed midjourney-body text-inherit opacity-80`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs rounded-full border midjourney-font text-inherit bg-opacity-20 border-opacity-30`}
                >
                  {techItem}
                </span>
              ))}
            </div>
          )}

          {/* Keywords */}
          {project.keywords && project.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.keywords.slice(0, 3).map((keyword, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 text-xs rounded-md midjourney-font text-inherit bg-opacity-10 border border-opacity-20`}
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}

          {project.link && project.link.trim() !== "" && (
            <div className="pt-4">
              <ViewProjectButton
                href={project.link}
                name="View Project"
                isGithub
                onClick={() => trackProjectView(project.title)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
