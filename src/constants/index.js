export const myProjects = [
  {
    id: 1,
    title: "ComicPaliGemma – Visual Language Model",
    description:
      "Built a from-scratch implementation of Google's PaliGemma VLM with SigLIP ViT vision encoder + Gemma decoder, fine-tuned on comic-panel dataset for narrative generation.",
    subDescription: [
      "Built a from-scratch implementation of Google's PaliGemma VLM (SigLIP ViT vision encoder + Gemma decoder), validating full pretrained checkpoint compatibility.",
      "Fine-tuned on a 5K+ comic-panel dataset using QLoRA (4-bit) to reduce peak GPU VRAM by 65% while maintaining model quality.",
      "Developed a long-context autoregressive text generator conditioned on frozen VLM embeddings for coherent narrative generation across 10+ comic panels.",
      "Integrated Triton/FlashAttention-2 style attention kernels to achieve 5-10× faster inference vs standard PyTorch attention."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/comic_paligemma.png",
    tags: [
      {
        id: 1,
        name: "PyTorch",
        path: "/assets/logos/PyTorch.png",
      },
      {
        id: 2,
        name: "CUDA",
        path: "/assets/ai-logos/C++.webp",
      },
      {
        id: 3,
        name: "Triton",
        path: "/assets/ai-logos/C++.webp",
      },
      {
        id: 4,
        name: "HuggingFace",
        path: "/assets/ai-logos/python.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Diffusion Models from First Principles",
    description:
      "Complete PyTorch implementation of DDPM from scratch, including timestep conditioning, attention, and ancestral sampling for controlled research iteration.",
    subDescription: [
      "Reproduced a DDPM baseline from first principles in PyTorch (U-Net, timestep conditioning, attention, ancestral sampling), validating core diffusion equations and training dynamics end-to-end.",
      "Designed the project for controlled research iteration: modular noise schedules, objectives, and samplers with reproducible ablations to study modern variants.",
      
    ],
    href: "",
    logo: "",
    image: "/assets/projects/diffusion.png",
    tags: [
      {
        id: 1,
        name: "PyTorch",
        path: "/assets/logos/PyTorch.png",
      },
      {
        id: 2,
        name: "JAX",
        path: "/assets/ai-logos/python.webp",
      },
      {
        id: 3,
        name: "Weights & Biases",
        path: "/assets/ai-logos/python.webp",
      },
      {
        id: 4,
        name: "CUDA",
        path: "/assets/ai-logos/C++.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Model-Based RL with MPC",
    description:
      "Learned world model with Cross-Entropy Method (CEM) and Model Predictive Control (MPC) for trajectory optimization, achieving 2× sample efficiency vs SAC baseline.",
    subDescription: [
      "Implemented a learned world model based algorithm, planning with Cross-Entropy Method (CEM) and Model Predictive Control (MPC) for trajectory optimization.",
      "Achieved 2× sample efficiency vs SAC baseline on HalfCheetah and Reacher environments.",
      "Designed modular architecture for easy experimentation with different world models, planners, and objective functions.",
      "Integrated comprehensive evaluation tooling with reproducible ablations and hyperparameter sweeps."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/RLMPC/MuJoCo-humanoid.png",
    tags: [
      {
        id: 1,
        name: "PyTorch",
        path: "/assets/logos/PyTorch.png",
      },
      {
        id: 2,
        name: "MuJoCo",
        path: "/assets/ai-logos/python.webp",
      },
      {
        id: 3,
        name: "Gymnasium",
        path: "/assets/ai-logos/gymnasium.webp",
      },
      {
        id: 4,
        name: "Weights & Biases",
        path: "/assets/ai-logos/python.webp",
      },
    ],
  },
  {
    id: 4,
    title: "NCAA Women's Basketball Prediction Model",
    description:
      "Predictive Random Forest models for NCAA Women's Basketball tournament outcomes, ranking top 5/67 teams with business insights projecting 15% revenue growth.",
    subDescription: [
      "Built predictive Random Forest models on large-scale customer behavior data, improving accuracy by 19% and ranking top 5/67 teams in national competition.",
      "Engineered feature engineering pipeline including player statistics, team metrics, historical performance, and advanced analytics.",
      "Delivered business insights that projected up to 15% revenue growth and 10% fan engagement gains through predictive modeling.",
      "Implemented robust cross-validation and model interpretability techniques for stakeholder communication."
    ],
    href: "",
    logo: "",
    image: "/assets/cnn_training.webp",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/ai-logos/python.webp",
      },
      {
        id: 2,
        name: "Scikit-learn",
        path: "/assets/ai-logos/scikit.webp",
      },
      {
        id: 3,
        name: "Pandas",
        path: "/assets/ai-logos/pandas.webp",
      },
      {
        id: 4,
        name: "Matplotlib",
        path: "/assets/ai-logos/python.webp",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/aaronaferns",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aaron-leevord-fernandes/",
    icon: "/assets/socials/linkedIn.svg",
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/ali.sanatidev/reels/",
  //   icon: "/assets/socials/instagram.svg",
  // },
];

export const experiences = [
  {
    title: "Research Data Scientist (Computer Vision)",
    job: "Leung Research Group, Indiana University",
    date: "Apr 2024 - Present",
    contents: [
      "Developed OCT-to-histology translation pipeline using CNN-GRU + Transformers, reducing FID by 50% and improving tissue morphology realism",
      "Implemented diffeomorphic registration with VoxelMorph-style U-Net, reducing alignment error by 10%",
      "Built HPC FDTD simulation pipeline with Slurm/MPI, achieving 90% faster generation of 5K+ samples and 70% speedup via U-Net surrogates"
    ],
  },
  {
    title: "Machine Learning Engineer (Reinforcement Learning)",
    job: "Indiana University",
    date: "Jan 2025 - June 2025",
    contents: [
      "Built multi-goal sparse-reward RL pipeline in MuJoCo with custom benchmarks and goal-conditioned SAC + HER, boosting success rate from 15% to 55%",
      "Implemented SVGG curriculum learning with KDE goal selection and scaled to 100+ reproducible experiments using Hydra + W&B",
      "Designed evaluation tooling for goal-conditioned policies with comprehensive replay optimization and relabeling strategies"
    ],
  },
  {
    title: "Software Engineer",
    job: "Tata Consultancy Services (HDFC Bank)",
    date: "Jan 2022 - Jan 2023",
    contents: [
      "Built microservices transaction system with Spring Boot, handling 100K+ daily transactions at 99.9% uptime and sub-200ms latency",
      "Automated reconciliation workflows, reducing error rate from 12% to 3% using Java, Hibernate, and REST APIs"
    ],
  },
];
""