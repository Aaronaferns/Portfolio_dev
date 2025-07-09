import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { useSpring, a } from "@react-spring/three";
import { Float } from "@react-three/drei";
import { HoverableBrain } from "../3DModels/HoverableBrain";
import { Robot } from "../3DModels/Robot";
import { Eye } from "../3DModels/Chameleobot_eye_animation_test";
import useWindowSize from "../components/useWindowSize";
import { useDynamicSky } from "../components/useDynmaicSky";
import { useNavigate } from "react-router-dom";

// CameraController updates the camera when isMdUp changes
function CameraController({ isMdUp }) {
  const { camera } = useThree();

  useEffect(() => {
    if (isMdUp) {
      camera.position.set(0, 0, 15);
      camera.fov = 35;
    } else {
      camera.position.set(0, 0, 10);
      camera.fov = 20;
    }
    camera.updateProjectionMatrix();
  }, [isMdUp, camera]);

  return null;
}

export default function ProjectsSection({ isActive = true }) {
  const navigate = useNavigate();
  const { sunPosition } = useDynamicSky();
  const [width] = useWindowSize();
  const spacing = 3.2;

  const ProjectCategories = [
    { id: 1, heading: "Reinforcement Learning" },
    { id: 2, heading: "Computer Vision" },
    { id: 3, heading: "Generative AI" },
  ];

  const positions = [
    [-spacing, 0, 0],
    [0, 0, 0],
    [spacing, -0.25, 0],
  ];
  const positions_md = [
    [0, spacing-0.8, 0], // shifted up for md+
    [0, 0, 0],
    [0, -0.25 - spacing+0.8, 0],
  ];

  // Fix: md breakpoint logic to be width >= 768
  const isMdUp = width <= 768;

  const activePositions = isMdUp ? positions_md : positions;

  const brainSpin = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, -Math.PI * 2, 0] },
    config: { duration: 20000 },
    loop: true,
  });

  return (
    <section className=" w-full h-[60rem] md:h-[25rem]  py-5 bg-transparent mb-14 px-10 lg:px-15">
      <h2 className="text-5xl font-bold py-10  ">Projects</h2>
      <div className="flex flex-col items-center h-[50rem] md:h-[20rem] backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl mx-auto px-1">
        
        <div className={isMdUp ? "h-[50rem] w-full" : "h-[20rem] w-[70rem]"}>
          <Canvas frameloop={isActive ? "always" : "demand"}>
            {/* CameraController dynamically updates camera on resize */}
            <CameraController isMdUp={isMdUp} />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={sunPosition}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <Suspense fallback={null}>
              <Float onClick={() => navigate("/projects")}>
                <a.group position={activePositions[0]}>
                  <Robot scale={2} />
                </a.group>
              </Float>
              <Float>
                <a.group rotation={[Math.PI / 2, 0, 0]} position={activePositions[1]}>
                  <Eye scale={6} />
                </a.group>
              </Float>
              <Float>
                <a.group rotation={brainSpin.rotation} position={activePositions[2]}>
                  <HoverableBrain />
                </a.group>
              </Float>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
