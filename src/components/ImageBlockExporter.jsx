import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const fallbackImage = "/assets/fallback.jpg"; // Update this path to your fallback image

const ImageBlock = ({ imageUrls = [] }) => {
  // Ensure all 6 faces have a texture URL (fallback if missing)
  const safeUrls = [...Array(6)].map((_, i) => imageUrls[i] || fallbackImage);

  const textures = useTexture(safeUrls);
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.1;

      // Smooth scale on hover
      const targetScale = hovered ? 2.2 : 1.3;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });
  

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[10, 10, 10]} />
      {textures.map((texture, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
};

const ImageBlockExporter = ({ imageUrls, isActive }) => {
  return (
    <Canvas
      camera={{ position: [15, 10, 15], fov: 60 }}
     
      gl={{ preserveDrawingBuffer: false, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ImageBlock imageUrls={imageUrls} />
      </Suspense>
    </Canvas>
  );
};

export default ImageBlockExporter;
