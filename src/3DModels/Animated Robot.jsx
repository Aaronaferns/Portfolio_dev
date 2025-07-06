import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Model(props) {
  const group = useRef();

  // Load gltf scene and animations
  const { scene, animations } = useGLTF("/models/Animated Robot-transformed.glb");

  // Clone scene to safely play animations without modifying original
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Setup animations on cloned scene
  const { actions } = useAnimations(animations, clone);

  // Play first animation on mount
  useEffect(() => {
    if (animations.length > 0 && actions) {
      const action = actions[animations[0].name];
      if (action) {
        action.reset().fadeIn(0.5).play();
      }
    }
  }, [actions, animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Render cloned scene */}
      <primitive object={clone} />
    </group>
  );
}

useGLTF.preload("/models/Animated Robot-transformed.glb");

