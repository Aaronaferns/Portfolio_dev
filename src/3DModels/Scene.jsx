import React, { useRef, useMemo, memo } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Scene = memo(function Scene(props) {
  const groupRef = useRef()
  const { scene } = useGLTF('/models/scene-transformed.glb')

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

  return (
    <group ref={groupRef} {...props}>
      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[-0.2, 0.2]}
      >
        <primitive object={optimizedScene} />
      </Float>
    </group>
  )
})

useGLTF.preload('/models/scene-transformed.glb')