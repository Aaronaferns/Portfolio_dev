import { useEffect, Suspense, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import Loader from "../components/Loader";
import DraggableRobot from "../3DModels/DragableRobot";
import { Scene } from "../3DModels/Scene";
import { useDynamicSky } from "../components/useDynmaicSky";
import Moon from "../components/Moon";
import SkyBackground from "../components/SkyBackground";
import { trackSectionView } from "../utils/analytics";

function ResponsiveScale({ children }) {
  const { size } = useThree();

  const scaleFactor = useMemo(() => {
    const minDimension = Math.min(size.width, size.height);
    return minDimension < 640 ? 0.8 : 1.0; // smaller on mobile
  }, [size.width, size.height]);

  return <group scale={[scaleFactor, scaleFactor, scaleFactor]}>{children}</group>;
}

const Hero = ({ id, onOpenResearch }) => {
  const { sunPosition, moonPosition, skySettings, isBright } = useDynamicSky();

  // Track section view
  useEffect(() => {
    trackSectionView('Hero');
  }, []);

  return (
    <section id={id} className="relative h-screen overflow-hidden">
      {/* 3D Canvas Background */}
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 68 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        {/* Sky Background */}
        <SkyBackground />

        {/* Base ambient light (lower at night for contrast) */}
        <ambientLight intensity={isBright ? 0.8 : 0.3} />

        {/* ☀️ Sunlight (daytime only) */}
        {isBright && (
          <directionalLight
            position={sunPosition}
            intensity={1.0}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
        )}

        {/* 🌙 Moonlight (nighttime only) */}
        {!isBright && (
          <>
            <directionalLight
              position={moonPosition}
              intensity={0.6}
              color={"#cfdcff"}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <Moon position={moonPosition} />
          </>
        )}

        <Suspense fallback={<Loader />}>
          <ResponsiveScale>
            <Scene scale={1.4} position={[0, -2.5, 0]} />
                <DraggableRobot scale={0.3} position={[0, 1, 0]} onOpenResearch={onOpenResearch} />
          </ResponsiveScale>
        </Suspense>
      </Canvas>

      {/* Hero Content */}
      <HeroText isBright={isBright} />
    </section>
  );
};

export default Hero;
