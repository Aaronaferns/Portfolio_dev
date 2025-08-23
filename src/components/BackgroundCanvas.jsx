// components/BackgroundCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import SkyBackground from "./SkyBackground";
import { useDynamicSky } from "./useDynmaicSky";

export default function BackgroundCanvas() {
  const { sunPosition, skySettings} = useDynamicSky(7);
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
      camera={{position: [0, -30, 20], fov: 105 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={sunPosition} intensity={10} />
      <SkyBackground />
    </Canvas>
  );
}
