import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'

export function HoverableRobot(props) {
  const { nodes, materials } = useGLTF('/simple_robot-transformed.glb')
  const [hovered, setHovered] = useState(false)

  return (
    <a.group
      {...props}
      dispose={null}
      scale={hovered ? 0.45 : 0.4} // Example: scale up on hover
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
      <mesh
        geometry={nodes.Body.geometry}
        material={materials.Root}
        position={[0, 2.357, -0.02]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.879, 0.666, 0.833]}
      />
    </a.group>
  )
}

useGLTF.preload('/simple_robot-transformed.glb')
