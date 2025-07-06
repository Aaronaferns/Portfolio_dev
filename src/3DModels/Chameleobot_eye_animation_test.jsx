import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Eye(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/chameleobot_eye_animation_test-transformed.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    if (names.length > 0 && actions[names[0]]) {
      const action = actions[names[0]]
      action.reset().fadeIn(0.5).play()
      action.timeScale = 0.5 // slows down animation to 50%
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
        <group name="Eye_test" scale={0.035}>
          <group name="eye_ring" rotation={[0, -0.233, 0]}>
            <group name="eye_grp" position={[0.007, 0.919, 0.018]} rotation={[-0.807, 0, 0]}>
              <group name="Object_8">
                <group name="iris_R" rotation={[0, 0.858, 0]}>
                  <mesh name="iris_R_lambert2_0" geometry={nodes.iris_R_lambert2_0.geometry} material={materials.lambert2} />
                </group>
                <primitive object={nodes._rootJoint} />
                <group name="base">
                  <mesh name="base_blinn2_0" geometry={nodes.base_blinn2_0.geometry} material={materials.blinn2} />
                </group>
                <skinnedMesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.blinn1} skeleton={nodes.Object_32.skeleton} />
                <skinnedMesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.blinn1} skeleton={nodes.Object_34.skeleton} />
                <skinnedMesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.blinn1} skeleton={nodes.Object_36.skeleton} />
                <skinnedMesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.blinn1} skeleton={nodes.Object_38.skeleton} />
                <skinnedMesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.blinn1} skeleton={nodes.Object_40.skeleton} />
                <skinnedMesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.blinn1} skeleton={nodes.Object_42.skeleton} />
                <skinnedMesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.blinn1} skeleton={nodes.Object_44.skeleton} />
                <skinnedMesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.blinn1} skeleton={nodes.Object_46.skeleton} />
              </group>
            </group>
            <mesh name="eye_ring_lambert2_0" geometry={nodes.eye_ring_lambert2_0.geometry} material={materials.lambert2} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/chameleobot_eye_animation_test-transformed.glb')
