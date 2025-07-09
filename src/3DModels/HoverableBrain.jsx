import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'

export function HoverableBrain(props) {
  const { nodes, materials } = useGLTF('/models/Brain-transformed.glb')
  const [hovered, setHovered] = useState(false)

  return (
    <a.group
      scale={hovered ? 0.012 : 0.010}
      {...props}
      dispose={null}
       
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setHovered(false)
        document.body.style.cursor = 'auto'
      }}
    >
      <mesh geometry={nodes.Brain001_0.geometry} material={materials.Mat2} position={[2.83, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Brain002_0.geometry} material={materials.Mat3} position={[2.83, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Brain003_0.geometry} material={materials.Mat1} position={[2.83, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </a.group>
  )
}

useGLTF.preload('/models/Brain-transformed.glb') 
