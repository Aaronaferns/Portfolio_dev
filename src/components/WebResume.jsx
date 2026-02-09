import React from 'react';
import { Download } from 'lucide-react';

const WebResume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ResumeAaronFernandesMLE.pdf';
    link.download = 'Aaron_Fernandes_Resume.pdf';
    link.click();
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      color: 'white',
      fontFamily: '"Funnel Display", sans-serif',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header with Back and Download */}
      <div style={{
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        <button
          onClick={() => window.history.back()}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'transparent',
            color: '#CCCCCC',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}
        >
          ← Back
        </button>
        <button
          onClick={handleDownload}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'transparent',
            color: '#CCCCCC',
            border: '1px solid #CCCCCC',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem'
          }}
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '900px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: 'white'
          }}>
            Aaron Leevord Fernandes
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#CCCCCC',
            marginBottom: '1.5rem'
          }}>
            Machine Learning Engineer & Researcher
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            color: '#AAAAAA'
          }}>
            <div>AWS Certified Developer Associate</div>
            <div>+1 (930) 333-4174 • aaronferns38@gmail.com</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://aaronferns.com" style={{ color: '#CCCCCC', textDecoration: 'none' }}>aaronferns.com</a>
              <a href="https://github.com/Aaronaferns" style={{ color: '#CCCCCC', textDecoration: 'none' }}>github.com/Aaronaferns</a>
              <a href="https://linkedin.com/in/aaron-leevord" style={{ color: '#CCCCCC', textDecoration: 'none' }}>linkedin.com/in/aaron-leevord</a>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '0.1em'
          }}>
            TECHNICAL SKILLS
          </h2>
          <div style={{ lineHeight: '1.7', color: '#CCCCCC' }}>
            <p><strong style={{ color: 'white' }}>ML Modeling & Research:</strong> Reinforcement Learning (SAC, HER), Image Processing and Computer Vision (Segmentation, Registration), GenAI (Diffusion/Flow Matching/Rectified Flow, LLMs, VLMs)</p>
            <p><strong style={{ color: 'white' }}>Systems & Distributed Training:</strong> PyTorch (torch.profiler), DeepSpeed (ZeRO 1/2/3), DDP, Triton, Slurm (HPC), CUDA, MPI, Ray, JAX</p>
            <p><strong style={{ color: 'white' }}>Engineering & MLOps:</strong> AWS (SageMaker, EC2, S3), Docker, MLFlow, Langchain, FastAPI, vLLM, HuggingFace, Gymnasium</p>
            <p><strong style={{ color: 'white' }}>Languages & Data:</strong> Python (Expert), C++ (CUDA/Systems), Java (Spring Boot), SQL, PostgreSQL, Neo4j, NumPy, Pandas</p>
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '0.1em'
          }}>
            EXPERIENCE
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Machine Learning Research Engineer (Computer Vision)</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Leung Research Group • Apr 2024 - Present</div>
            </div>
            <ul style={{ color: '#CCCCCC', lineHeight: '1.8', paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.75rem' }}>Reduced FID by 50% vs. Fourier-domain baselines by architecting an unpaired video-to-image (OCT-to-histology) translation pipeline using CNN-GRU and Transformer architectures in PyTorch</li>
              <li style={{ marginBottom: '0.75rem' }}>Decreased simulation wall-clock time by 90% by engineering scalable HPC data-generation pipelines (Slurm + MPI) for metasurface simulations, enabling 5K+ synthetic sample generation</li>
              <li style={{ marginBottom: '0.75rem' }}>Accelerated metasurface design iteration by training and evaluating neural surrogate models to approximate complex FDTD/FEM solvers</li>
              <li>Improved frame alignment accuracy by using VoxelMorph-style diffeomorphic registration for temporal consistency in OCT video processing</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Machine Learning Engineer (RL)</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Indiana University • Jan 2025 - June 2025</div>
            </div>
            <ul style={{ color: '#CCCCCC', lineHeight: '1.8', paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.75rem' }}>Boosted task success rate from 15% to 55% by implementing goal-conditioned SAC + HER and SVGG curriculum learning from scratch in PyTorch for sparse-reward MuJoCo environments</li>
              <li style={{ marginBottom: '0.75rem' }}>Ensured 100% experiment reproducibility by integrating MLflow for tracking 100+ training runs, including model versioning, checkpointing, and automated recovery</li>
              <li>Optimized training stability through the implementation of modular replay buffers with scheduling, mini-batch updates, gradient clipping, and target network updates</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Software Engineer</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Tata Consultancy Services (HDFC Bank) • Jan 2022 - Jan 2023</div>
            </div>
            <ul style={{ color: '#CCCCCC', lineHeight: '1.8', paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.75rem' }}>Supported 100K+ daily transactions by developing microservices-based transaction systems using Java, Spring Boot, and Hibernate in a production banking environment</li>
              <li>Collaborated in cross-functional teams to maintain enterprise systems for a tier-1 bank, following strict CI/CD and production release protocols</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '0.1em'
          }}>
            PROJECTS
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Multimodal Image Generation (Rectified Flow)</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>PyTorch, CLIP, DeepSpeed, ZeRO-2 • Nov 2025 - Jan 2026</div>
            </div>
            <ul style={{ color: '#CCCCCC', lineHeight: '1.8', paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.75rem' }}>Developed a hybrid diffusion transformer based generative model using Rectified Flow to improve sampling efficiency and prompt adherence over standard DDPM baselines</li>
              <li style={{ marginBottom: '0.75rem' }}>Scaled training throughput by implementing DeepSpeed (ZeRO-2) and DDP, optimizing GPU memory for massive scaling on HPC clusters</li>
              <li>Architected low-latency inference via a FastAPI backend and Gradio UI, enabling real-time prompt-based image generation</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>ComicPaliGemma (VLM Fine-tuning)</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>SigLIP, Gemma, QLoRA, PyTorch • Sept 2025 - Nov 2025</div>
            </div>
            <ul style={{ color: '#CCCCCC', lineHeight: '1.8', paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.75rem' }}>Reduced peak VRAM requirements by 65% via 4-bit QLoRA fine-tuning, enabling the training and optimization of a PaliGemma-based VLM on memory-constrained, single-GPU setups</li>
              <li>Engineered a multimodal synchronization pipeline to align SigLIP ViT embeddings with Gemma autoregressive tokens, improving temporal and stylistic coherence in "next-panel" comic sequence prediction</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>LLM GraphRAG Analysis App</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Docling, Pinecone, Neo4j, LangChain, Electron • Oct 2024 - Dec 2024</div>
            </div>
            <ul style={{ color: '#CCCCCC', lineHeight: '1.8', paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.75rem' }}>Architected a GraphRAG pipeline utilizing Docling for document layout parsing and Sentence Transformers for Pinecone indexing; reduced research timelines from months to days with 90% human-code alignment</li>
              <li style={{ marginBottom: '0.75rem' }}>Engineered a hybrid retrieval system by mapping semantic vector embeddings (Pinecone) to structured Knowledge Graphs (Neo4j), enabling LLMs to navigate complex thematic hierarchies and multi-hop relationships</li>
              <li>Deployed a cross-platform desktop suite via Electron.js and D3.js, providing researchers with interactive visualizations of LLM-generated codes and real-time relationship mapping within the Grounded Theory framework</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>Unsupervised Industrial Defect Detection</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>ViT, Mixture Density Networks, PyTorch • Jan 2025 - May 2025</div>
            </div>
            <ul style={{ color: '#CCCCCC', lineHeight: '1.8', paddingLeft: '1.5rem', marginTop: '0.5rem', listStyleType: 'disc' }}>
              <li>Achieved 0.94 AUROC by designing a ViT-B/16 autoencoder with a 10-component Mixture Density Network (MDN) to model latent distribution density, outperforming ResNet-50 reconstruction baselines</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '0.1em'
          }}>
            EDUCATION
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>M.S. in Intelligent Systems Engineering</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Indiana University Bloomington • May 2025</div>
            </div>
            <p style={{ color: '#CCCCCC', lineHeight: '1.7' }}>GPA: 3.9/4.0 — Coursework: Image Processing, Deep Learning Systems, Reinforcement Learning, NLP, Cloud Computing, Multivariate Statistics</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>B.E. in Electronics and Telecommunication</h3>
              <div style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Goa University • July 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebResume;