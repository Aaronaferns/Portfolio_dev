// hooks/useDynamicSky.js
import { useEffect, useState } from "react";

export function getSunPositionFromTime(simulatedHour) {
  const now = new Date();
  const hour = simulatedHour !== undefined
    ? simulatedHour
    : now.getHours() + now.getMinutes() / 60;
  
  const angle = (hour / 24) * 2 * Math.PI;
  const radius = 100;  // bigger radius for better sky effect

  const x = Math.cos(angle) * radius;
  const y = Math.max(Math.sin(angle) * radius, 5); // prevent sun below horizon
  const z = Math.sin(angle) * radius * 0.3; // slight depth shift for better effect

  return [x, y, z];
}

export function useDynamicSky(testHour) {
  const [sunPosition, setSunPosition] = useState(getSunPositionFromTime(testHour));
  // Map sky colors based on time
  let skyColor = "#87CEEB"; // default light blue

  


  useEffect(() => {
    if (testHour === undefined) {
      const interval = setInterval(() => {
        setSunPosition(getSunPositionFromTime());
      }, 60000); // update every minute
      return () => clearInterval(interval);
    }
  }, [testHour]);

  const hour = testHour ?? new Date().getHours();

  // Define time ranges
  const isMorning = hour >= 6 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 17;
  const isEvening = hour >= 17 && hour < 20;
  const isNight = hour < 6 || hour >= 20;

  if (isMorning) {
    skyColor = "#B1D4E0"; // soft morning blue
  } else if (isAfternoon) {
    skyColor = "#87CEEB"; // bright blue
  } else if (isEvening) {
    skyColor = "#FF8C42"; // sunset orange
  } else if (isNight) {
    skyColor = "#0B1A38"; // deep night blue
  }

  // Sky parameters tuned for each time of day
 const skySettings = {
  rayleigh: isNight ? 0.2 : isEvening ? 0.8 : isMorning ? 1.5 : 3,
  turbidity: isNight ? 1.5 : isEvening ? 15 : isMorning ? 9 : 5,
  mieCoefficient: isNight ? 0.001 : isEvening ? 0.02 : isMorning ? 0.015 : 0.007,
  mieDirectionalG: 0.75,
};


  return { sunPosition, skySettings, skyColor };
}
