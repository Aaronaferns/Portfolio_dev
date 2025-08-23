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
  const y = Math.sin(angle) * radius; // sun naturally goes below horizon
  const z = Math.sin(angle) * radius * 0.3;

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
      }, 60000);
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
  else skySettings = skySettingsComp.night;

  // 🌙 Moon: opposite sun horizontally, fixed height above scene
  const moonHeight = 10; // adjust for scene visibility
  const moonPosition = [-sunPosition[0], moonHeight, -sunPosition[2]];

  return { sunPosition, moonPosition, skySettings };
}
