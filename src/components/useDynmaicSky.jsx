import { useEffect, useState } from "react";
import skySettingsComp from "./skySettingsComp";

export function getSunPositionFromTime(simulatedHour) {
  const now = new Date();
  const hour =
    simulatedHour !== undefined
      ? simulatedHour
      : now.getHours() + now.getMinutes() / 60;

  const angle = (hour / 24) * 2 * Math.PI;
  const radius = 100;

  const x = Math.cos(angle) * radius;
  let y = Math.sin(angle) * radius;
  const z = 0; // keep orbit simple

  // push the sun much lower at night to avoid twilight "brown"
  if (y < 0) y = -radius * 5; // push even further down
  console.log([x,y,z])
  return [x, y, z];
}

export function useDynamicSky(testHour) {
  const [sunPosition, setSunPosition] = useState(
    getSunPositionFromTime(testHour)
  );

  useEffect(() => {
    if (testHour === undefined) {
      const interval = setInterval(() => {
        setSunPosition(getSunPositionFromTime());
      }, 300000); // Increased from 60s to 5 minutes
      return () => clearInterval(interval);
    } else {
      setSunPosition(getSunPositionFromTime(testHour));
    }
  }, [testHour]);

  const hour = testHour ?? new Date().getHours();

  let skySettings;
  if (hour >= 5 && hour < 7) skySettings = skySettingsComp.earlyMorning;
  else if (hour >= 7 && hour < 12) skySettings = skySettingsComp.morning;
  else if (hour >= 12 && hour < 15) skySettings = skySettingsComp.noon;
  else if (hour >= 15 && hour < 17) skySettings = skySettingsComp.afternoon;
  else if (hour >= 17 && hour < 18) skySettings = skySettingsComp.evening;
  else if (hour >= 18 && hour < 20) skySettings = skySettingsComp.sunset;
  else if (hour >= 20 && hour < 22) skySettings = skySettingsComp.twilight;
  else skySettings = skySettingsComp.night;

  // 🌙 Moon: mirror sun horizontally, but keep it above horizon
  const moonPosition = [
    -sunPosition[0],
    Math.max(5, -sunPosition[1]), // always above horizon
    -sunPosition[2]
  ];
  console.log("moon_position")
  console.log(moonPosition)

  return { sunPosition, moonPosition, skySettings };
}

