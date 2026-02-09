import { useRef } from "react";
import Card from "../components/Card";
import Globe from "../components/Globe"
import CopyEmailButton from "../components/CopyEmailButton";
import Projects from "../sections/Projects";
import FeaturedCarousel from "../components/FeaturedCarousel";
import ImageBlockExporter from "../components/ImageBlockExporter";
import SkyBackground from "../components/SkyBackground";
import Frameworks from "../components/Frameworks"
import { useTheme } from "../ThemeContext"; 
const About = ({id}) => {
  const grid2Container = useRef();
  const { isBright, mainTextColor, secondaryTextColor } = useTheme(); 
  const projects = Projects;

  // [#748D92]
  // [#D3D9D4]
  // [#2E3944]
  // [#212A31] 
  return (
    <section id="about" className="c-space section-spacing py-0 sm:py-[10rem] md:py-0">
      <h2 className="text-heading text-white">About Me</h2>
     <div className="grid grid-cols-1 auto-rows-auto gap-6 md:grid-cols-6 md:auto-rows-auto items-start mt-12">

        {/* Grid 1 */}
        
       <div className="
  flex flex-col items-center justify-center gap-6 p-6
  rounded-2xl
  row-span-1 h-auto
  md:row-span-2 md:col-span-3  md:h-full
  relative overflow-hidden text-white
" style={{ backgroundColor: '#212A31' }}
>
          <div className="flex justify-center items-center  w-full h-[350px]">
            {/* <ImageBlockExporter imageUrls={["/assets/coing_pov1.png","assets/walking_robot_reward.webp","/assets/07_stateestimation_fig.webp", "/assets/cnn_training.webp","/assets/image-processing-1.webp","/assets/Gaussianimageprocessing.webp"]}/>
            */}
            <img
              src="\assets\Photo.png"
              alt="Preview"
              className="rounded-full w-80 h-80 object-cover border-4 border-transparent shadow-lg"
            />
          </div>

          <div className="flex flex-col flex-grow items-center justify-around bg-transparent  text-center px-4">
            <p className="text-3xl mx-4">Hi, I'm Aaron</p>
            <p className="subtext">I am a Machine Learning Engineer specializing in the intersection of scalable infrastructure and advanced probabilistic modeling. My expertise lies in bridging the gap between research-level Reinforcement Learning and the high-performance engineering required to train foundation models at scale. With a Master’s in Intelligent Systems Engineering from Indiana University, I focus on building AI systems that are both theoretically sound and computationally efficient—from designing Visual Language Models to engineering HPC pipelines that reduce compute overhead by 90%.
            </p>
          </div>

          {/* <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#D3D9D4]" /> */}
       </div>


        {/* Grid 2 */}
        {/* Grid 2 */}

<div
  className="
    p-3 rounded-2xl grid-2 text-center
    row-span-2 md:col-span-3 relative overflow-hidden
    flex justify-center items-center
    w-full aspect-[3/4] md:aspect-[4/3]  min-h-[500px]
    text-white
  "
  style={{ backgroundColor: '#212A31' }}
>
  <FeaturedCarousel className="w-full h-full" />
</div>


{/* Grid 3 */}
<div className="p-6 rounded-2xl grid-3 text-[#212A31]" style={{ backgroundColor: '#D3D9D4' }}>
  <div className="z-10 w-[50%]">
    <p className="headtext">Where I’m Based</p>
    <p className="subtext text-black">
      In the United States
    </p>
  </div>
  <figure className="absolute left-[30%] top-0">
    <Globe />
  </figure>
</div>

{/* Grid 4 */}
<div className="p-6 rounded-2xl grid-4 text-white" style={{ backgroundColor: '#124E66' }}>
  <div className="flex flex-col items-center justify-center gap-4 size-full">
    <p className="text-center headtext">
      Interested in collaborating on AI, Machine Learning, Cloud, or Web projects?
    </p>
    <CopyEmailButton />
  </div>
</div>

{/* Grid 5 */}
<div className="p-4 pl-6 rounded-2xl grid-5 text-white" style={{ backgroundColor: '#2E3944' }}>
  <div className="z-10 w-[50%]">
    <p className="headtext">Tools</p>
    <p className="subtext">
      <strong>ML Frameworks:</strong> PyTorch, TensorFlow, JAX, Triton, Ray, vLLM, Gymnasium, HuggingFace Transformers, Scikit-learn <br/><strong>Cloud/HPC:</strong> AWS, Docker, Kubernetes, Slurm, MPI, Spark, Hadoop <br/><strong>Programming:</strong> Python, C++, Java, JavaScript/TypeScript, SQL
    </p>
  </div>


          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        </div>
      
    </section>
  );
};

export default About;



