import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  return (
  <>
  <Project 
  
  title="3D Object Generator"
  intro="This project creates textured 3D meshes from a single 2D image using neural radiance fields."
  videoLeft="https://youtu.be/RESFUUC4_rk"
  videoRight="https://youtu.be/RESFUUC4_rk"
  results="Achieved a 92% similarity score with ground truth meshes on ShapeNet."
  architecture="The model uses a dual-path encoder with NeRF-based volume rendering and a refinement GAN."
  // demoLink="https://demo.3dgenerator.app"
  
  />
  </>
  )
}
export default Projects;
