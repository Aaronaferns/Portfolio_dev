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
    title: "ML Research Engineer",
    job: "Leung Research Group",
    date: "2024 - Present",
    highlights: [
      {
        metric: "50%",
        description: "Reduced FID vs. Fourier-domain baselines by architecting unpaired video-to-image translation pipeline using CNN-GRU and Transformer architectures in PyTorch",
        tags: ["Computer Vision", "PyTorch", "Transformers"]
      },
      {
        metric: "90%",
        description: "Decreased simulation wall-clock time by engineering scalable HPC data-generation pipelines with Slurm + MPI for metasurface simulations",
        tags: ["HPC", "Slurm", "MPI"]
      },
      {
        metric: "Neural Networks",
        description: "Accelerated metasurface design iteration by training and evaluating neural surrogate models to approximate complex FDTD/FEM solvers",
        tags: ["Deep Learning", "FEM", "Surrogate Models"]
      },
      {
        metric: "VoxelMorph",
        description: "Improved frame alignment accuracy by using VoxelMorph-style diffeomorphic registration for temporal consistency in OCT video processing",
        tags: ["Medical Imaging", "Registration", "OCT"]
      }
    ],
  },
  {
    title: "ML Engineer (RL)",
    job: "Indiana University",
    date: "2025",
    highlights: [
      {
        metric: "55%",
        description: "Boosted task success rate from 15% to 55% by implementing goal-conditioned SAC + HER and SVGG curriculum learning from scratch in PyTorch",
        tags: ["Reinforcement Learning", "SAC", "HER"]
      },
      {
        metric: "100+",
        description: "Ensured experiment reproducibility by integrating MLflow for tracking training runs, including model versioning and automated recovery",
        tags: ["MLflow", "Experiment Tracking", "MLOps"]
      },
      {
        metric: "Stability",
        description: "Optimized training stability through modular replay buffers with scheduling, mini-batch updates, gradient clipping, and target network updates",
        tags: ["Training Optimization", "Replay Buffers", "Stability"]
      }
    ],
  },
  {
    title: "Software Engineer",
    job: "Tata Consultancy Services",
    date: "2022 - 2023",
    highlights: [
      {
        metric: "100K+",
        description: "Supported daily transactions by developing microservices-based transaction systems using Java, Spring Boot, and Hibernate in production banking",
        tags: ["Java", "Spring Boot", "Microservices"]
      },
      {
        metric: "99.9%",
        description: "Maintained uptime while collaborating in cross-functional teams to support enterprise banking systems with strict CI/CD protocols",
        tags: ["Banking", "CI/CD", "Enterprise Systems"]
      }
    ],
  },
];
""