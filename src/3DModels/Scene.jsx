import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Scene(props) {
  const groupRef = useRef()
  const { scene, nodes, materials } = useGLTF('/models/scene-transformed.glb')

  // Rotate the island slowly around the Y axis
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  // Traverse all meshes in the scene to enable receiveShadow
  scene.traverse((child) => {
    if (child.isMesh) {
      child.receiveShadow = true
      child.castShadow = false // Optional: scene objects usually just receive shadows
      if (child.material) child.material.needsUpdate = true
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
        <primitive object={scene} />
      </Float>
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')
