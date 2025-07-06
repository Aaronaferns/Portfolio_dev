import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Brain(props) {
  const { nodes, materials } = useGLTF('/models/Brain-transformed.glb')

  // This offset moves the full model
  const space = 1

  return (
    <group {...props} dispose={null}>
      <group position={[space, space, space]}>
        <mesh geometry={nodes.Brain001_0.geometry} material={materials.Mat2} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Brain002_0.geometry} material={materials.Mat3} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Brain003_0.geometry} material={materials.Mat1} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Brain-transformed.glb')
