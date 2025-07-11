/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 C:\Users\aaron\Desktop\Portfolio\Portfolio\public\models\blue_eye_iris\iris.gltf --transform 
Files: C:\Users\aaron\Desktop\Portfolio\Portfolio\public\models\blue_eye_iris\iris.gltf [5.23KB] > C:\Users\aaron\Desktop\Portfolio\Portfolio\iris-transformed.glb [732.47KB] (-13905%)
Author: Adam Worthington (https://sketchfab.com/adamsworthington)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/blue-eye-iris-f5e24a9e32a64582aa9c6ed898604e5e
Title: Blue Eye Iris
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Iris(props) {
  const { nodes, materials } = useGLTF('/models/iris-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Mat_0} position={[0, 0, 0]}/>
    </group>
  )
}

useGLTF.preload('/models/iris-transformed.glb')
