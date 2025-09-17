import React, { useState, useEffect } from "react";
import { Sky } from "@react-three/drei";
import { useDynamicSky } from "./useDynmaicSky";
import { useThree } from "@react-three/fiber"; 
import * as THREE from "three";



// function getSunPositionFromTime(simulatedHour) {
//   const now = new Date();
//   const hour = simulatedHour !== undefined
//     ? simulatedHour
//     : now.getHours() + now.getMinutes() / 60;
//   const t = (hour / 24) * 2 * Math.PI;
//   const radius = 20;
//   const x = Math.cos(t) * radius;
//   const y = Math.max(Math.sin(t) * radius, 5);
//   const z = 5;
//   return [x, y, z];
// }
export function getSunPositionFromTime(simulatedHour) {
  const now = new Date();
  const hour = simulatedHour ?? now.getHours() + now.getMinutes() / 60;

  const radius = 100; // distance from the scene origin
  const sunrise = 6;  // 6 AM
  const sunset = 18;  // 6 PM
  const dayLength = sunset - sunrise;

  let x, y, z;

  if (hour >= sunrise && hour <= sunset) {
    // Map hour to angle: 0 = sunrise, π = sunset
    const angle = ((hour - sunrise) / dayLength) * Math.PI;

    // Sun rises in east (x negative) → sets in west (x positive)
    x = Math.cos(angle) * radius;
    y = Math.sin(angle) * radius; // height of sun
    z = Math.sin(angle) * radius * 0.1; // small depth for realism
  } else {
    // Night: sun below horizon
    x = 0;
    y = -radius; // below the horizon
    z = 0;
  }

  return [x, y, z];
}


export default function SkyBackground({ testHour }) {
  
  const { sunPosition, skySettings, isBright } = useDynamicSky(testHour);
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

const skyKey = `${testHour}-${sunPosition}-${skySettings.rayleigh}-${skySettings.turbidity}-${skySettings.mieCoefficient}-${skySettings.mieDirectionalG}`;
  
return (
  <>
    {/* Additional atmospheric lighting for morning colors */}
    {isBright && skySettings.turbidity > 5 && (
      <directionalLight
        position={[sunPosition[0] * 0.5, sunPosition[1] * 0.3, sunPosition[2]]}
        intensity={0.3}
        color="#ff7f50" // Warm orange for morning atmosphere
        castShadow={false}
      />
    )}
    
    <Sky
      key={skyKey}
      distance={4500}
      sunPosition={sunPosition}
      rayleigh={skySettings.rayleigh}
      turbidity={skySettings.turbidity}
      mieCoefficient={skySettings.mieCoefficient}
      mieDirectionalG={skySettings.mieDirectionalG}
    />

  </>
);
}
