const Projects = [
  {
    title: "Deep Model Based Reinforcement Learning with Model Predictive Control",
    description:
      "Used System Identification to learn a dynamics model of a Mujoco environment, then used Model Predictive Control (MPC) to perform trajectory tracking. Implemented in PyTorch and Python.",
    image:"\\assets\\projects\\RLMPC\\MuJoCo-humanoid.png", 
    tech: ["PyTorch", "Python", "Gymnasium"],
    link: "https://github.com/Aaronaferns/MBRL-DeepMPC",
  },
  {
    title: "Vision Transformer + Capsule Network for Industrial Anomaly Detection",
    description:
      "Combines Vision Transformers with Capsule Networks to detect and localize anomalies in industrial images. Trained on the BeanTech Anomaly Detection (BTAD) dataset, it preserves spatial information and improves generalization for accurate anomaly detection",
    image: "\\assets\\projects\\AnomalyDetection\\anomaly.png",
    tech: ["PyTorch", "Python", "Jupyter"],
    link: "https://github.com/Aaronaferns/vit-unsupervised-anomaly-detection",
  },
  {
    title: "Grounded Theory Automation",
    description:
      "Computational Grounded Theory for qualitative analysis, utilizing Natural Language Processing (NLP), Large Language Models (LLMs), and LangChain. I worked alongside a dedicated team, with each member contributing equally to the development of this innovative, AI-driven approach.",
    image: "/assets/projects/gounded_theory/Coding-Blog.jpg",
    tech: ["DocLing", "Ollama", "Jupyter","LlamaIndex","langchain"],
    link: "https://github.com/Aaronaferns/IU-NICC_Grounded-Theory-Project",
  },
];
export default Projects;