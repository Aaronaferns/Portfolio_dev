import { useEffect, useState } from "react";
import skySettingsComp from "./skySettingsComp";

// export function getSunPositionFromTime(simulatedHour) {
//   const now = new Date();
//   const hour =
//     simulatedHour !== undefined
//       ? simulatedHour
//       : now.getHours() + now.getMinutes() / 60;

//   // Adjust hour to be relative to sunrise (7 AM = 0, noon = 6, sunset = 12)
//   const adjustedHour = (hour - 7 + 24) % 24; // Sunrise at hour 7

//   // Only calculate sun position for daylight hours (7 AM to 7 PM)
//     // Only calculate sun position for daylight hours (7 AM to 7 PM)
//   // But keep sun slightly above horizon for early morning (5-7 AM) for color effects
//   const isDaylight = hour >= 7 && hour <= 19;
//   const isEarlyMorning = hour >= 5 && hour < 7;
  
//   let x, y, z;
//   const radius = 100;
  
//   if (isDaylight) {
//     // Daytime: sun above horizon (7 AM - 7 PM)
//     const angle = (adjustedHour / 12) * Math.PI; // 0 to π radians (half circle arc)
//     x = Math.sin(angle) * radius * 0.7; // East-west movement (scaled down)
//     y = Math.abs(Math.cos(angle)) * radius; // Always positive height (above horizon)
//     z = Math.sin(angle) * radius * 0.3; // Slight depth variation
//     console.log(`Daytime sun: hour=${hour.toFixed(1)}, angle=${(angle * 180/Math.PI).toFixed(0)}°, pos=[${x.toFixed(0)},${y.toFixed(0)},${z.toFixed(0)}]`);
//   } else if (isEarlyMorning) {
//     // Early morning: sun just above horizon for color effects
//     const earlyAngle = ((hour - 5) / 2) * Math.PI * 0.3; // Subtle arc for early morning
//     x = Math.sin(earlyAngle) * radius * 0.8; // Rising from east
//     y = Math.max(5, Math.cos(earlyAngle) * radius * 0.3); // Keep just above horizon
//     z = 0;
//     console.log(`Early morning sun: hour=${hour.toFixed(1)}, angle=${(earlyAngle * 180/Math.PI).toFixed(0)}°, pos=[${x.toFixed(0)},${y.toFixed(0)},${z.toFixed(0)}]`);
//   } else {
//     // Nighttime: sun below horizon
//     x = 0;
//     y = -radius * 2;
//     z = 0;
//     console.log(`Nighttime sun: hour=${hour.toFixed(1)}, pos=[${x},${y},${z}]`);
//   }

//   return [x, y, z];
// }
// // export function getSunPositionFromTime(simulatedHour) {
// //   const now = new Date();
// //   const hour =
// //     simulatedHour !== undefined
// //       ? simulatedHour
// //       : now.getHours() + now.getMinutes() / 60;

// //   // Adjust hour to be relative to sunrise (6 AM = 0, noon = 6, sunset = 12)
// //   const adjustedHour = (hour - 7 + 24) % 24; // Sunrise at hour 7
  
// //   // Only calculate sun position for daylight hours (6 AM to 6 PM)
// //   const isDaylight = hour >= 6 && hour <= 18;
  
// //   let x, y, z;
// //   const radius = 100;
  
// //   if (isDaylight) {
// //     // Daytime: sun above horizon
// //     const angle = ((adjustedHour-1) / 12) * Math.PI; // 0 to π radians
// //     x = Math.sin(angle) * radius * 0.7; // East-west movement
// //     y = Math.abs(Math.cos(angle)) * radius; // Always positive height
// //     z = Math.sin(angle) * radius * 0.3; // Slight depth variation
// //     console.log(`Daytime sun: hour=${hour.toFixed(1)}, angle=${(angle * 180/Math.PI).toFixed(0)}°, pos=[${x.toFixed(0)},${y.toFixed(0)},${z.toFixed(0)}]`);
// //   } else {
// //     // Nighttime: sun below horizon
// //     x = 0;
// //     y = -radius * 2;
// //     z = 0;
// //     console.log(`Nighttime sun: hour=${hour.toFixed(1)}, pos=[${x},${y},${z}]`);
// //   }
  
// //   return [x, y, z];
// // }

// export function useDynamicSky(testHour) {
//   const [sunPosition, setSunPosition] = useState(
//     getSunPositionFromTime(testHour)
//   );

//   useEffect(() => {
//     if (testHour === undefined) {
//       const interval = setInterval(() => {
//         setSunPosition(getSunPositionFromTime());
//       }, 300000); // Increased from 60s to 5 minutes
//       return () => clearInterval(interval);
//     } else {
//       setSunPosition(getSunPositionFromTime(testHour));
//     }
//   }, [testHour]);

//   const hour = testHour ?? new Date().getHours();

//   let skySettings;
//   console.log("Current hour:", hour);
//   if (hour >= 5 && hour < 7) {
//     skySettings = skySettingsComp.earlyMorning;
//     console.log("Applied: earlyMorning");
//   }
//   else if (hour >= 7 && hour < 12) {
//     skySettings = skySettingsComp.morning;
//     console.log("Applied: morning");
//   }
//   else if (hour >= 12 && hour < 15) {
//     skySettings = skySettingsComp.noon;
//     console.log("Applied: noon");
//   }
//   else if (hour >= 15 && hour < 17) {
//     skySettings = skySettingsComp.afternoon;
//     console.log("Applied: afternoon");
//   }
//   else if (hour >= 17 && hour < 18) {
//     skySettings = skySettingsComp.evening;
//     console.log("Applied: evening");
//   }
//   else if (hour >= 18 && hour < 19) {
//     skySettings = skySettingsComp.sunset;
//     console.log("Applied: sunset");
//   }
//   else if (hour >= 19 && hour < 21) {
//     skySettings = skySettingsComp.twilight;
//     console.log("Applied: twilight");
//   }
//   else {
//     skySettings = skySettingsComp.night;
//     console.log("Applied: night");
//   }
//   console.log("Final skySettings:", skySettings);
//   console.log("isBright check:", hour >= 6 && hour < 20);

//   // 🌙 Moon: mirror sun horizontally, but keep it above horizon
//   const moonPosition = [
//     -sunPosition[0],
//     Math.max(5, -sunPosition[1]), // always above horizon
//     -sunPosition[2]
//   ];
//   console.log("moon_position")
//   console.log(moonPosition)

//   return { sunPosition, moonPosition, skySettings, isBright: hour >= 7 && hour < 19 };
// }

// export function getSunPositionFromTime(simulatedHour) {
//   const now = new Date();
//   const hour =
//     simulatedHour !== undefined
//       ? simulatedHour
//       : now.getHours() + now.getMinutes() / 60;

//   let x, y, z;
//   if (hour >= 5 && hour < 7) {
//     x = 0; y = 50, z = 0;
//   } else if (hour >= 7 && hour < 12) {
//     x = -500; y = 6, z = 0;
//   } else if (hour >= 12 && hour < 15) {
//     x = 0; y = 5, z = 0;
//   } else if (hour >= 15 && hour < 17) {
//     x = 0; y = 50, z = 0;
//   } else if (hour >= 17 && hour < 18) {
//     x = 0; y = 50, z = 0;
//   } else if (hour >= 18 && hour < 19) {
//     x = 0; y = 50, z = 0;
//   } else if (hour >= 19 && hour < 21) {
//     x = 0; y = 50, z = 0;
//   } else {
//     x = 0; y = -50, z = 0;
//   }
//   return [x, y, z];
// }
export function getSunPositionFromTime(simulatedHour) {
  // const now = new Date();
  // const hour = simulatedHour ?? now.getHours() + now.getMinutes() / 60;
  const hour = 5.1;
  // console.log("getSunPositionFromTime hour:", hour);

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

export function useDynamicSky(testHour) {
  const [sunPosition, setSunPosition] = useState(
    getSunPositionFromTime(testHour)
  );

  useEffect(() => {
    if (testHour === undefined) {
      const interval = setInterval(() => {
        setSunPosition(getSunPositionFromTime());
      }, 1800000); // 30 minutes instead of 5
      return () => clearInterval(interval);
    } else {
      setSunPosition(getSunPositionFromTime(testHour));
    }
  }, [testHour]);

  const hour = testHour ?? new Date().getHours();

  // 🌍 Force night mode settings
  const skySettings = skySettingsComp.night;
  const isBright = false; // Always night mode

  // 🌙 Moon opposite sun
  const moonPosition = [
    -sunPosition[0]-20,
    -sunPosition[1]-30,
    -sunPosition[2],
  ];

  // Keep moon slightly above horizon
  if (moonPosition[1] < 5) moonPosition[1] = 5;

  return { sunPosition, moonPosition, skySettings, isBright };
}
