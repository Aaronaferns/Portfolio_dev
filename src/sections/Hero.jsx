import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useThree, useFrame } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { easing } from "maath";
import { OrbitControls } from '@react-three/drei';
import HeroText from "../components/HeroText";
import Loader from "../components/Loader";
import DraggableRobot from "../components/DragableRobot";
import { Scene } from "../components/Scene";
import { useDynamicSky } from "../components/useDynmaicSky";
import { useMemo } from 'react'
// Calculate sun position based on current time
// function getSunPositionFromTime() {
//   const now = new Date();
//   const hour = now.getHours() + now.getMinutes() / 60;
//   const t = (hour / 24) * 2 * Math.PI;

//   const radius = 20;
//   const x = Math.cos(t) * radius;
//   const y = Math.max(Math.sin(t) * radius, 5); // Keep above horizon
//   const z = 5;

//   return [x, y, z];
// }
function ResponsiveScale({ children }) {
  const { size, viewport } = useThree()

  const scaleFactor = useMemo(() => {
    // Use viewport width or height to determine scale
    const minDimension = Math.min(size.width, size.height)
    return minDimension < 640 ? 0.8 : 1.0  // smaller on mobile
  }, [size.width, size.height])

  return <group scale={[scaleFactor, scaleFactor, scaleFactor]}>{children}</group>
} 
const Hero = () => {
  const { sunPosition, skySettings ,skyColor} = useDynamicSky();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSunPosition(getSunPositionFromTime());
  //   }, 60000); // update every 60 seconds
  //   return () => clearInterval(interval);
  // }, []);

  // // Optional: Dynamic color-rich sky settings by hour
  // const hour = new Date().getHours();
  // const isMorning = hour >= 6 && hour < 12;
  // const isEvening = hour >= 17 && hour < 20;
  // const isNight = hour < 6 || hour >= 20;

  // const skySettings = {
  //   rayleigh: isNight ? 0.5 : isEvening ? 1.5 : isMorning ? 2.5 : 3,
  //   turbidity: isNight ? 2 : isEvening ? 8 : isMorning ? 7 : 6,
  //   mieCoefficient: isNight ? 0.001 : 0.006,
  //   mieDirectionalG: 0.75,
  // };
  const [currentTime, setCurrentTime] = useState(() =>
    new Date().toLocaleTimeString()
  );

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = new Date().getHours();
  const isBright = hour >= 6 && hour < 20;

  return (
    <section className="flex  items-start h-[65rem] md:h-[100vh] justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">


     <div
    className="
      absolute  right-[3rem] z-[100]
      px-[1rem] py-[0.5rem]
      bg-[rgba(255,255,255,0.15)] backdrop-blur-[8px]
      rounded-[12px]
      text-[rgba(31,20,20,0.38)] text-[1.25rem] font-semibold
      shadow-[0_4px_12px_rgba(0,0,0,0.25)]
      select-none tracking-[0.05em] min-w-[100px] text-center
      font-sans top-[19rem]  md:top-[6rem]
    "
  >
    {currentTime}
  </div>

      <HeroText isBright={isBright} />
      <figure
        className="top-[6rem] sm:top-[9rem] md:top-0  md:w-[50vw]  absolute  right-0 h-screen w-[100vw] 2xl:right-[10rem] xl:right-[6rem] "
       
      >
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 68 }}
       >
          {/* Enhanced colorful sky */}
          {/* <Sky distance={4500} sunPosition={sunPosition} {...skySettings} /> */}

          {/* Bright, consistent lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={sunPosition}
            intensity={0.5}
            color={skyColor}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={1}
            shadow-camera-far={20}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <Suspense fallback={<Loader />}>
            <ResponsiveScale>
              <Scene scale={1.4} position={[0,-2.5,0]}/>
              <DraggableRobot scale={0.3} position={[0,1,0]}/>
            </ResponsiveScale>
          </Suspense>

          {/* <Rig /> */}
          {/* <OrbitControls enablePan enableRotate enableZoom /> */}
        </Canvas>
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
