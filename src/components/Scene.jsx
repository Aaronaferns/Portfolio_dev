import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Scene(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/scene-transformed.glb')

  // Rotate the island slowly around the Y axis
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05 // Adjust speed here
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
        <group
          dispose={null}
          scale={1}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        >
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials['Material.001']}
            position={[0.151, 1.277, 0.337]}
            rotation={[0, 0, -Math.PI / 2]}
            castShadow
            receiveShadow
          />
        </group>
      </Float>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
