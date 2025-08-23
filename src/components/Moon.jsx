import { Sphere } from "@react-three/drei";

function Moon({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[16, 32, 32]} /> {/* radius=1 */}
      <meshStandardMaterial
        color="#cfdcff"
        emissive="#cfdcff"
        emissiveIntensity={0.7} // makes it glow
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}
export default Moon;