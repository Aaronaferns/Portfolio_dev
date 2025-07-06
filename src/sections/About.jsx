import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";

import ImageBlockExporter from "../components/ImageBlockExporter";
import SkyBackground from "../components/SkyBackground";
import Frameworks from "../components/Frameworks"
const About = () => {
  const grid2Container = useRef();

  // [#748D92]
  // [#D3D9D4]
  // [#2E3944]
  // [#212A31] 
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
     <div className="grid grid-cols-1 auto-rows-auto gap-6 md:grid-cols-6 md:auto-rows-auto items-start mt-12">

        {/* Grid 1 */}
        
       <div className="
  flex flex-col items-center justify-center gap-6 p-6
  bg-gradient-to-b to-[#2E3944] from-[#212A31] rounded-2xl
  row-span-1 h-auto
  md:row-span-2 md:col-span-3 md:h-[15rem] md:h-full
  relative overflow-hidden hover:-translate-y-1 duration-200
">
          <div className="flex justify-center items-center  w-full h-[500px]">
            {/* <ImageBlockExporter imageUrls={["/assets/coing_pov1.png","assets/walking_robot_reward.webp","/assets/07_stateestimation_fig.webp", "/assets/cnn_training.webp","/assets/image-processing-1.webp","/assets/Gaussianimageprocessing.webp"]}/>
            */}
            <img
              src="\assets\Photo.png"
              alt="Preview"
              className="rounded-full w-80 h-80 object-cover border-4 border-transparent shadow-lg"
            />
          </div>

          <div className="flex flex-col  bg-transparent  text-center px-4">
            <p className="headtext">Hi, I'm Aaron</p>
            <p className="subtext">I'm a machine learning engineer with a focus on deep learning, computer vision, and reinforcement learning. I also bring experience in cloud infrastructure and full-stack development, allowing me to take ML systems from research to scalable production.
            </p>
          </div>

          {/* <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#D3D9D4]" /> */}
       </div>


        {/* Grid 2 */}
        {/* Grid 2 */}

<div className="p-6 bg-gradient-to-b from-[#D3D9D4] to-[#748D92] rounded-2xl grid-2 text-center
                row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Featured Work</h3>
  <img src="/assets/walking_robot_reward.webp" className="w-full max-w-md mx-auto rounded-xl shadow-md" alt="Walking Robot" />
  <p className="mt-2 text-gray-700">Reinforcement learning model controlling a bipedal robot. Reward function optimization led to stable gait after 8k episodes.</p>
</div>


{/* Grid 3 */}
<div className="p-6 bg-gradient-to-b bg-[#212A31] rounded-2xl grid-3">
  <div className="z-10 w-[50%]">
    <p className="headtext">Where I’m Based</p>
    <p className="subtext">
      Currently located in the United States, but working remotely across the globe.
    </p>
  </div>
  <figure className="absolute left-[30%] top-[10%]">
    <Globe />
  </figure>
</div>

{/* Grid 4 */}
<div className="p-6 bg-gradient-to-b bg-[#124E66] rounded-2xl grid-4">
  <div className="flex flex-col items-center justify-center gap-4 size-full">
    <p className="text-center headtext">
      Interested in collaborating on AI, Machine Learning, Cloud, or Web projects?
    </p>
    <CopyEmailButton />
  </div>
</div>

{/* Grid 5 */}
<div className="p-4 pl-6 bg-gradient-to-b bg-[#2E3944] rounded-2xl grid-5">
  <div className="z-10 w-[50%]">
    <p className="headtext">Research Interests</p>
    <p className="subtext">
      Exploring machine learning, reinforcement learning for autonomous systems, computer vision, and multi-agent systems. I leverage large language models and multi-agent AI to advance automation, collaboration, and complex problem-solving. <br/><br/><strong>Tools I frequently use include Python, PyTorch, TensorFlow, AWS, GCP, and Langchain.</strong>
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



