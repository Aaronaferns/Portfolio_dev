import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const Skills = ({id}) => {
  const { isBright, mainTextColor, secondaryTextColor } = useTheme();

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "Diffusion Models", "Reinforcement Learning", "Bayesian Inference", "NLP", "LLMs"],
      icon: "🧠"
    },
    {
      title: "Deep Learning Frameworks",
      skills: ["PyTorch", "TensorFlow", "JAX", "Triton", "Ray", "vLLM"],
      icon: "⚡"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript/TypeScript", "SQL"],
      icon: "💻"
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "Slurm", "MPI", "Spark"],
      icon: "☁️"
    }
  ];

  return (
    <section id={id} className="c-space section-spacing py-20">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className={`text-heading mb-16 ${mainTextColor}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border backdrop-blur-sm ${
                categoryIndex % 4 === 0
                  ? 'grid-default-color'
                  : categoryIndex % 4 === 1
                  ? 'grid-special-color'
                  : categoryIndex % 4 === 2
                  ? 'grid-black-color'
                  : 'grid-teal-color'
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className={`text-lg font-semibold text-inherit`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className={`px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105 text-inherit bg-opacity-20 border-opacity-30 hover:bg-opacity-30`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className={`text-xl font-semibold mb-6 ${mainTextColor}`}>
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["AWS Developer Associate", "AWS Cloud Practitioner"].map((cert, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                className="px-4 py-2 text-sm font-medium rounded-lg border bg-[#748D92] text-[#212A31] border-[#D3D9D4] hover:bg-[#D3D9D4] transition-colors"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;