import React, { useRef, useMemo, memo } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useWindowSize } from "../components/useWindowSize";
import { useInView } from 'react-intersection-observer';

export const Scene = memo(function Scene(props) {
  const groupRef = useRef()
  const { scene } = useGLTF('/models/scene-transformed.glb')

  const { width } = useWindowSize();
  const isMobile = width < 768;

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  });

  // Memoize the scene setup to avoid re-traversing on every render
  const optimizedScene = useMemo(() => {
    const clonedScene = scene.clone()
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true
        child.castShadow = false
        // Enable frustum culling for better performance
        child.frustumCulled = true
        if (child.material) {
          child.material.needsUpdate = true
        }
      }
    })
    return clonedScene
  }, [scene])

  // Rotate the island slowly around the Y axis
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  const modelPath = isMobile ? '/models/simple-scene.glb' : '/models/scene-transformed.glb';

  return (
    <group ref={groupRef} {...props}>
      {inView && (
        <Canvas
          shadows={false}
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
          dpr={[1, 2]}
          frameloop="demand"
        >
          <Float
            speed={1}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.2, 0.2]}
          >
            <primitive object={optimizedScene} />
          </Float>
        </Canvas>
      )}
    </group>
  )
})

useGLTF.preload('/models/scene-transformed.glb')
