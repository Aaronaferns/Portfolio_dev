// components/BackgroundCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import SkyBackground from "./SkyBackground";

export default function BackgroundCanvas() {
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
      camera={{ position: [100, 10, 100], fov: 108 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 10, 5]} intensity={10} />
      <SkyBackground />
    </Canvas>
  );
}
