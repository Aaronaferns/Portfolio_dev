import React, { useState, useEffect } from "react";
import { Sky } from "@react-three/drei";
import { useDynamicSky } from "./useDynmaicSky";
import { useThree } from "@react-three/fiber"; 
import * as THREE from "three";



function getSunPositionFromTime(simulatedHour) {
  const now = new Date();
  const hour = simulatedHour !== undefined
    ? simulatedHour
    : now.getHours() + now.getMinutes() / 60;
  const t = (hour / 24) * 2 * Math.PI;
  const radius = 20;
  const x = Math.cos(t) * radius;
  const y = Math.max(Math.sin(t) * radius, 5);
  const z = 5;
  return [x, y, z];
}

export default function SkyBackground({ testHour }) {
  const { sunPosition, skySettings,skyColor } = useDynamicSky(testHour);
  const { scene } = useThree(); 
//   const sunPosition=[1000,1000,100]
  console.log("sky Mounted")
useEffect(() => {
  if (testHour === undefined) {
    const interval = setInterval(() => {
      const newPos = getSunPositionFromTime();
      // setSunPosition(newPos);
      console.log("Updating sun position:", newPos);
    }, 60000);
    return () => clearInterval(interval);
  }
}, [testHour]);
 useEffect(() => {
    scene.background = new THREE.Color(skyColor);
  }, [skyColor]);
//   // Optional: Dynamic color-rich sky settings by hour
//   const hour = new Date().getHours();
//   const isMorning = hour >= 6 && hour < 12;
//   const isEvening = hour >= 17 && hour < 20;
//   const isNight = hour < 6 || hour >= 20;

//   const skySettings = {
//     rayleigh: isNight ? 0.5 : isEvening ? 1.5 : isMorning ? 2.5 : 3,
//     turbidity: isNight ? 2 : isEvening ? 8 : isMorning ? 7 : 6,
//     mieCoefficient: isNight ? 0.001 : 0.006,
//     mieDirectionalG: 0.75,
//   };

  return (
    <Sky
      distance={4500}
      sunPosition={sunPosition}
      {...skySettings}
    />
  );
}
