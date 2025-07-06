import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useSpring, a } from "@react-spring/three";
import { Float, Html } from "@react-three/drei";
import { HoverableBrain } from "../3DModels/HoverableBrain";
import { Robot } from "../3DModels/Robot";
import { Eye } from "../3DModels/Chameleobot_eye_animation_test";
import useWindowSize from "../components/useWindowSize";
import { useDynamicSky } from "../components/useDynmaicSky";

export default function ProjectsSection({ isActive = true }) {
  const { sunPosition } = useDynamicSky();
  const [width] = useWindowSize();
  const spacing = 3.4;

  const ProjectCategories = [
    { id: 1, heading: "Reinforcement Learning" },
    { id: 2, heading: "Computer Vision" },
    { id: 3, heading: "Generative AI" },
  ];

  const positions = [
    [0, spacing, 0],
    [0, 0.2, 0],
    [0, -spacing-0.2, 0],
  ];
const positions_md = [
  [3.5, 0, 0],   // shifted right for md+
  [-1.5, 0, 0],
  [-6.5, -0.5, 0],
];
  const isMdUp = width >= 8800;  // Tailwind 'md' breakpoint is 768px

const activePositions = isMdUp ? positions_md : positions;


  const brainSpin = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, -Math.PI * 2, 0] },
    config: { duration: 20000 },
    loop: true,
  });

  return (
    <section className="h-[100rem]   md:h-[100rem] py-5 bg-transparent">
      <div className="flex flex-col items-center h-full max-w-6xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl mx-auto px-1 ">
        <h2 className="text-5xl font-bold py-3 text-center ">Projects</h2>
        <div className="h-full  w-full">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            frameloop={isActive ? "always" : "demand"}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              position={sunPosition}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <Suspense fallback={null}>
              <Float>
                <a.group position={activePositions[0]}>
                  <Robot scale={2} />
                  
                </a.group>
              </Float>
              <Html position={[activePositions[0][0],activePositions[0][1]-1.8,activePositions[0][2]+2]} transform occlude>
                    <h2 className="text-sm font-semibold text-white bg-black/50 px-3 py-1 rounded-lg">
                      {ProjectCategories[0].heading}
                    </h2>
                  </Html>
              <Float>
                <a.group rotation={[0, 2, 2]} position={activePositions[1]}>
                  <Eye scale={6} />
                  
                </a.group>
              </Float>
              <Html position={[activePositions[1][0]+0.1,activePositions[1][1]-1.1,activePositions[1][2]+2]} transform occlude>
                    <h2 className=" font-semibold text-white bg-black/50 px-3 py-1 rounded-lg">
                      {ProjectCategories[1].heading}
                    </h2>
                  </Html>
              <Float>
                <a.group rotation={brainSpin.rotation} position={activePositions[2]}>
                  <HoverableBrain scale={0.015} />
                  
                </a.group>
              </Float>
              <Html position={[activePositions[2][0],activePositions[2][1]-1.2,activePositions[2][2]]} transform occlude>
                    <h2 className="text-xl font-semibold text-white bg-black/50 px-3 py-1 rounded-lg">
                      {ProjectCategories[2].heading}
                    </h2>
                  </Html>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}




