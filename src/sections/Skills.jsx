import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const Skills = ({id}) => {
  const { isBright, mainTextColor, secondaryTextColor } = useTheme();

  const skillCategories = [
    {
      title: "ML Modeling & Research",
      subs: [
        { label: "Generative AI", skills: ["Diffusion Models", "Flow Matching", "Rectified Flow", "VLMs (PaliGemma)", "LLMs"] },
        { label: "Reinforcement Learning", skills: ["SAC", "PPO", "DDPG", "TRPO", "DQN", "VPG"] },
        { label: "Computer Vision", skills: ["Image Segmentation", "Diffeomorphic Registration", "Unsupervised Anomaly Detection (ViT-B/16 + MDN)"] },
        { label: "Theory", skills: ["Multivariate Statistics", "Bayesian Inference", "ML Theory"] }
      ]
    },
    {
      title: "Systems & Distributed Training",
      subs: [
        { label: "Optimization", skills: ["PyTorch FSDP", "DeepSpeed (ZeRO 1/2/3)", "DDP"] },
        { label: "Infrastructure", skills: ["Slurm", "MPI", "Ray"] },
        { label: "Low-Level", skills: ["CUDA", "Triton", "torch.profiler"] }
      ]
    },
    {
      title: "Engineering & MLOps",
      subs: [
        { label: "Cloud", skills: ["AWS (SageMaker, EC2, S3, Lambda)", "GCP"] },
        { label: "Deployment", skills: ["Docker", "FastAPI", "vLLM", "LangChain", "LlamaIndex"] },
        { label: "Data & Graphs", skills: ["Neo4j", "Pinecone", "PostgreSQL"] },
        { label: "Tooling", skills: ["MLFlow", "Weights & Biases", "Gymnasium (MuJoCo)"] }
      ]
    },
    {
      title: "Programming Languages",
      subs: [
        { label: "Python", skills: ["Expert", "NumPy", "Pandas", "JAX"] },
        { label: "C++", skills: ["CUDA", "System-level programming"] },
        { label: "Java", skills: ["Spring Boot"] },
        { label: "Web", skills: ["React.js", "Node.js", "TypeScript"] }
      ]
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
              <h3 className={`text-lg font-semibold text-inherit mb-4`}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.subs.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <p className={`text-xs font-semibold text-inherit/90 mb-2 uppercase tracking-wide`}>
                      {sub.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sub.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (subIndex * 0.05) + (skillIndex * 0.02) }}
                          viewport={{ once: true }}
                          className={`px-2 py-1 text-xs font-bold rounded uppercase transition-all duration-300 hover:scale-105 ${
                            categoryIndex % 4 === 1
                              ? 'bg-[#212A31]/20 border border-[#212A31]/30 text-[#212A31]'
                              : 'bg-white/10 border border-white/20 text-white'
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
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
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 hover:scale-105 ${
                  index % 4 === 0
                    ? 'grid-default-color'
                    : index % 4 === 1
                    ? 'grid-special-color'
                    : index % 4 === 2
                    ? 'grid-black-color'
                    : 'grid-teal-color'
                }`}
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