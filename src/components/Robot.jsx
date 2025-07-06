import React, { useEffect, useRef, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber'

export function Robot(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/robot-transformed.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)

  // Play the first animation by default
  useEffect(() => {
    if (names.length > 0 && actions[names[0]]) {
      actions[names[0]].reset().fadeIn(0.5).play()
    }
    return () => {
      if (names.length > 0 && actions[names[0]]) {
        actions[names[0]].fadeOut(0.5).stop()
      }
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.hero_texture}
          skeleton={nodes.Object_7.skeleton}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/robot-transformed.glb')
