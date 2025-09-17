const skySettingsComp = {
  earlyMorning: {
    rayleigh: 0.05,        // very dark, minimal scattering
    turbidity: 3,         // heavy mist and atmospheric haze
    mieCoefficient: 0.0015, // subtle atmospheric scattering
    mieDirectionalG: 0.95   // focused light scattering for misty effect
  },
  
  morning: {
    rayleigh: 0.07,         // crisp blue, slightly stronger than midday
    turbidity: 0.2,          // very light mist for freshness
    mieCoefficient: 0.000009040, // gentle haze without washing out
    mieDirectionalG: 5   // warmer forward scattering for a golden tint
  },
  
  
  
  noon: {
    rayleigh:0.001,          // lower blue scattering
    turbidity: 11,            // some haze for soft glow
    mieCoefficient: 0.05,   // subtle atmospheric scattering
    mieDirectionalG: 0.1   // brilliant light
  },
  
  afternoon: {
    rayleigh: 7.0,        // warm blue
    turbidity: 5,         // slight haze
    mieCoefficient: 0.07, // golden glow
    mieDirectionalG: 0.82  // warm light
  },
  
  evening: {
    rayleigh: 0.2,          // lower blue scattering
    turbidity: 6,            // some haze for soft glow
    mieCoefficient: 0.005,   // subtle atmospheric scattering
    mieDirectionalG: 0.85    // stronger forward scattering for warm sunlight
  },
  
  
  sunset: {
    rayleigh: 0.05,        // rich colors
    turbidity: 2,        // deep atmosphere
    mieCoefficient: 0.01, // sunset glow
    mieDirectionalG: 1   // soft colors
  },
  
  twilight: {
    rayleigh: 0.4,        // rich colors
    turbidity: 20,        // deep atmosphere
    mieCoefficient: 0.4, // sunset glow
    mieDirectionalG: 1   // soft colors
  },
  
  night: {
    rayleigh: 2,          // lower blue scattering
    turbidity: 5,            // some haze for soft glow
    mieCoefficient: 0.005,   // subtle atmospheric scattering
    mieDirectionalG: 0.85   // brilliant light
  },
  
};
export default skySettingsComp;