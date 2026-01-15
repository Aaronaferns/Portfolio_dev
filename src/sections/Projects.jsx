const Projects = [
  // 🚀 LATEST PROJECTS (Featured in Latest Projects section)
  {
    title: "ComicPaliGemma – Visual Language Model",
    description:
      "Transforming comic books into interactive AI companions. Built Google's PaliGemma from scratch, fine-tuned it on 5,000+ comic panels, and created a storytelling AI that generates coherent narratives across multiple panels. Reduced GPU memory usage by 65% while making inference 5-10x faster.",
    image: "/assets/projects/comic_paligemma.png",
    keywords: ["Computer Vision", "LLMs", "Visual Language Models", "Fine-tuning", "QLoRA", "Triton", "FlashAttention", "PyTorch", "CUDA", "HuggingFace"],
    tech: ["PyTorch", "CUDA", "Triton", "HuggingFace", "Python"],
    link: "",
    category: "nlp-genai-cv"
  },
  {
    title: "Diffusion Models from First Principles",
    description:
      "Mastering the art of AI image generation by building diffusion models completely from scratch. Created a modular research framework for experimenting with modern generative techniques, from DDPM basics to cutting-edge variants like consistency models and score-based methods.",
    image: "/assets/projects/diffusion.png",
    keywords: ["Diffusion Models", "DDPM", "Generative AI", "U-Net", "PyTorch", "Deep Learning", "Research", "JAX", "Weights & Biases", "CUDA"],
    tech: ["PyTorch", "CUDA", "Weights & Biases", "Hydra"],
    link: "https://github.com/Aaronaferns/Building-Diffusion-Models",
    category: "nlp-genai-cv"
  },
  {
    title: "Multi-Goal Sparse-Reward RL Pipeline",
    description:
      "Solving complex AI challenges with intelligent goal-setting. Built a reinforcement learning system that tackles sparse reward problems by learning from past experiences and setting smarter goals. Boosted success rates from 15% to 55% on challenging robotic tasks.",
    image: "/assets/projects/multigoalrl.png",
    keywords: ["Reinforcement Learning", "Goal-Conditioned RL", "SAC", "HER", "Sparse Rewards", "Curriculum Learning", "SVGG", "MuJoCo", "Hydra", "Weights & Biases"],
    tech: ["PyTorch", "MuJoCo", "Hydra", "Weights & Biases"],
    link: "https://github.com/aaronaferns/multi-goal-rl-svgg",
    category: "reinforcement-learning"
  },
  {
    title: "Model-Based RL with MPC",
    description:
      "Teaching robots to learn smarter, not harder. Developed an AI system that learns world models and plans ahead, achieving twice the learning efficiency of traditional methods. Perfect for applications where trial-and-error is expensive or dangerous.",
    image: "\\assets\\projects\\RLMPC\\MuJoCo-humanoid.png",
    keywords: ["Reinforcement Learning", "Model-Based RL", "MPC", "Cross-Entropy Method", "Sample Efficiency", "MuJoCo", "Gymnasium", "PyTorch", "Deep Learning"],
    tech: ["PyTorch", "MuJoCo", "Gymnasium", "Python"],
    link: "https://github.com/Aaronaferns/MBRL-DeepMPC",
    category: "reinforcement-learning"
  },
  {
    title: "Robotic Path Planning RL algorithms",
    description:
      "Implementations fo Deep Reinforcement Learning algorithms like DQL, REINFORCE, PPO, TRPO in PyTorch",
    image: "/assets/projects/RL/multi-room.gif",
    keywords: ["Deep Reinforcement Learning", "DQL", "REINFORCE", "PPO", "TRPO", "PyTorch", "Robotics", "Path Planning", "Reinforcement Learning", "Machine Learning", "Deep Learning"],
    tech: ["PyTorch", "Python", "Gymnasium"],
    link: "https://github.com/Aaronaferns/Reinforcement-learning-robotic-path-planning",
    category: "reinforcement-learning"
  },

  // 🗣️ NLP & LARGE LANGUAGE MODELS
  {
    title: "LLM-Driven Grounded Theory Automation",
    description:
      "LLM-Powered Grounded Theory for qualitative research. Collaborated with NICC, Brussels.",
    image: "/assets/projects/gounded_theory/Coding-Blog.jpg",
    keywords: ["Grounded Theory", "NLP", "LLMs", "LangChain", "AI", "Qualitative Research", "Computational Grounded Theory", "Machine Learning", "Deep Learning", "PyTorch"],
    tech: ["DocLing", "Ollama", "Jupyter", "LlamaIndex", "LangChain"],
    link: "https://github.com/Aaronaferns/IU-NICC_Grounded-Theory-Project",
    category: "nlp-genai-cv"
  },
  {
    title: "Industrial Anomaly Detection",
    description:
      "Combined Vision Transformers and Capsule Networks to detect and localize industrial defects",
    keywords: ["Vision Transformers", "Capsule Networks", "Anomaly Detection", "Industrial", "Computer Vision", "Machine Learning", "Deep Learning", "PyTorch"],
    image: "\\assets\\projects\\AnomalyDetection\\anomaly.png",
    tech: ["PyTorch", "Python", "Jupyter"],
    link: "https://github.com/Aaronaferns/vit-unsupervised-anomaly-detection",
    category: "nlp-genai-cv"
  },

  // 📊 DATA ANALYTICS
  {
    title: "Predictive Modeling for NCAA Women's Basketball",
    description:
      "Data-driven insights that could change the game. Built machine learning models that ranked in the top 5 out of 67 teams in a national basketball prediction competition. The analysis revealed strategies for 15% revenue growth and 10% fan engagement improvements.",
    image: "/assets/projects/crossroads.jpeg",
    keywords: ["Machine Learning", "Random Forest", "Predictive Modeling", "Sports Analytics", "NCAA Basketball", "Feature Engineering", "Scikit-learn", "Python", "Business Intelligence"],
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "",
    category: "data-analytics"
  },

  // ☁️ CLOUD COMPUTING
  {
    title: "Serverless Matrix Multiplication",
    description:
      "Distributed matrix multiplication with Google Cloud.",
    image: "/assets/projects/GCP/severless-mapred.webp",
    keywords: ["Serverless", "Map-Reduce", "Google Cloud Functions", "Redis", "Memcache", "Pub/Sub", "Matrix Multiplication", "Scalable Computation", "Cloud Computing", "Distributed Computing"],
    tech: ["Python", "GCP"],
    link: "https://github.com/Aaronaferns/serverless-matrix-multiplication",
    category: "cloud-computing"
  }
];
export default Projects;
