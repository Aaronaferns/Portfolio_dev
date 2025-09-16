const skySettingsComp = {
  earlyMorning: {
    rayleigh: 3.5,        // soft, dreamy blue
    turbidity: 12,        // misty, magical atmosphere
    mieCoefficient: 0.025, // gentle, glowing sun
    mieDirectionalG: 0.6   // soft, diffused light
  },
  
  morning: {
    rayleigh: 2.8,        // enchanted blue sky
    turbidity: 8,         // light magical mist
    mieCoefficient: 0.018, // warm, inviting glow
    mieDirectionalG: 0.65  // gentle sun rays
  },
  
  noon: {
    rayleigh: 2.0,        // bright, cheerful blue
    turbidity: 4,         // crystal clear fairy tale day
    mieCoefficient: 0.012, // radiant sun
    mieDirectionalG: 0.8   // brilliant sunlight
  },
  
  afternoon: {
    rayleigh: 2.5,        // warm, pleasant blue
    turbidity: 6,         // slight dreamy haze
    mieCoefficient: 0.02,  // golden afternoon glow
    mieDirectionalG: 0.7   // soft warmth
  },
  
  evening: {
    rayleigh: 1.8,        // romantic golden hour
    turbidity: 15,        // magical golden mist
    mieCoefficient: 0.035, // enchanted sun glow
    mieDirectionalG: 0.55  // dreamy, large sun
  },
  
  sunset: {
    rayleigh: 1.2,        // rich oranges and pinks
    turbidity: 20,        // deep fairy tale atmosphere
    mieCoefficient: 0.045, // magical sunset glow
    mieDirectionalG: 0.45  // large, soft fairy tale sun
  },
  
  twilight: {
    rayleigh: 0.8,        // mystical purple hour
    turbidity: 12,        // ethereal mist
    mieCoefficient: 0.015, // gentle twilight glow
    mieDirectionalG: 0.75  // mysterious light
  },
  
  night: {
    rayleigh: 0.02,        // very dark blues, almost black
    turbidity: 2,         // clear, minimal atmosphere
    mieCoefficient: 0.001, // minimal scattering
    mieDirectionalG: 0.9   // sharp, minimal moonlight
  }
};
export default skySettingsComp;
