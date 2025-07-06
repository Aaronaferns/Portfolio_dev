import { useRef } from "react";
import { useSpring, a } from "@react-spring/three";
import { Float, useGLTF } from "@react-three/drei";

export default function ProjectCategory({ url, scale = 1, position, shouldAnimate = false }) {
  const ref = useRef();
  const { scene } = useGLTF(url);

  const { rotation } = useSpring({
    rotation: shouldAnimate ? [0, 2 * Math.PI, 0] : [0, 0, 0],
    config: { duration: 10000 },
    loop: shouldAnimate,
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.1}
      floatIntensity={0.5}
      floatingRange={[0.1, 0.3]}
    >
      <a.group ref={ref} scale={scale} rotation={rotation} position={position}>
        <primitive object={scene} dispose={null} />
      </a.group>
    </Float>
  );
}

