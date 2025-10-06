import { useEffect, useState, Suspense, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import HeroText from "../components/HeroText";
import Loader from "../components/Loader";
import DraggableRobot from "../3DModels/DragableRobot";
import { Scene } from "../3DModels/Scene";
import { useDynamicSky } from "../components/useDynmaicSky";
import Moon from "../components/Moon";
import SkyBackground from "../components/SkyBackground";
import { trackSectionView } from "../utils/analytics";
import { useWindowSize } from "../components/useWindowSize";
import { useInView } from 'react-intersection-observer';

function ResponsiveScale({ children }) {
  const { size } = useThree();

  const scaleFactor = useMemo(() => {
    const minDimension = Math.min(size.width, size.height);
    return minDimension < 640 ? 0.8 : 1.0; // smaller on mobile
  }, [size.width, size.height]);

  return <group scale={[scaleFactor, scaleFactor, scaleFactor]}>{children}</group>;
}

const Hero = ({id}) => {
  // const testHour =20;
  const { sunPosition, moonPosition, skySettings, isBright } = useDynamicSky();

  // No longer need local isBright calculation - it's now from the hook
  const isNight = !isBright; // Moon visible when not bright

  // console.log("Hero test hour:", testHour, "isBright:", isBright, "isNight:", isNight);

  const hour = new Date().getHours();
  console.log("Hero component hour:", hour);
 

  // Track section view
  useEffect(() => {
    trackSectionView('Hero');
  }, []);

  const { width } = useWindowSize();
  const isMobile = width < 768;

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  });

  return (
    <section id = {id} className="flex items-start h-[65rem] md:h-[100vh] justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText isBright={isBright} />
      <figure className="top-[6rem] sm:top-[9rem] md:top-0 md:w-[50vw] absolute right-0 h-screen w-[100vw] 2xl:right-[10rem] xl:right-[6rem]">
        {!isMobile && (
          <Canvas 
            shadows={false} // Disable shadows completely or conditionally
            camera={{ position: [0, 2, 5], fov: 68 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw", 
              height: "100vh",
              zIndex: -1,
            }}
            performance={{ min: 0.2 }}
            dpr={[1, 2]} // Limit pixel ratio
            frameloop="demand" // Only render when needed
          >
            {/* Sky Background */}
            <SkyBackground />
            
            {/* Base ambient light (lower at night for contrast) */}
            <ambientLight intensity={isBright ? 0.8 : 0.3} />
{/* ☀️ Sunlight (daytime only) */}
{!isMobile && (
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
                <DraggableRobot scale={0.3} position={[0, 1, 0]} />
              </ResponsiveScale>
            </Suspense>
          </Canvas>
        )}
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 5],
      0.5,
      delta
    );
  });
}

export default Hero;
