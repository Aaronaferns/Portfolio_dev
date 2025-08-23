import { useState, useEffect } from "react";

function Moon({ radius = 10 }) {
  const [moonPos, setMoonPos] = useState([radius, 5, 0]); // initial

  useEffect(() => {
    const updateMoonPosition = () => {
      const now = new Date();
      const minutes = now.getHours() * 60 + now.getMinutes(); // total minutes in day
      // Divide 24h into 96 segments (15-min intervals)
      const segment = minutes / 15;
      const angle = (segment / 96) * 2 * Math.PI;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      setMoonPos([x, 5, z]);
    };

    updateMoonPosition(); // initial

    const interval = setInterval(() => {
      updateMoonPosition();
    }, 60 * 1000); // check every minute

    return () => clearInterval(interval);
  }, [radius]);

  return (
    <mesh position={moonPos}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#cfdcff" />
    </mesh>
  );
}

export default Moon;