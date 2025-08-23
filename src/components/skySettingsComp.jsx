const skySettingsComp = {
  earlyMorning: {
    rayleigh: 2.5,       // stronger blue scattering
    turbidity: 6,        // slightly hazy
    mieCoefficient: 0.02,// soft sun glow
    mieDirectionalG: 0.8
  },
  morning: {
    rayleigh: 5.2,        // bright blue scattering
    turbidity: 4,         // mild morning haze
    mieCoefficient: 0.012,// gentle sun glow
    mieDirectionalG: 0.18  //
  },
  noon: {
    rayleigh: 3.0,       // clear, bright blue
    turbidity: 2,        // almost no haze
    mieCoefficient: 0.01,
    mieDirectionalG: 0.8
  },
  afternoon: {
    rayleigh: 2.5,
    turbidity: 3,
    mieCoefficient: 0.015,
    mieDirectionalG: 0.8
  },
  evening: {
    rayleigh: 1.2,       // warmer, less blue
    turbidity: 8,        // more haze for golden hour
    mieCoefficient: 0.02,
    mieDirectionalG: 0.75
  },
  sunset: {
    rayleigh: 0.8,       // red/orange sky
    turbidity: 12,       // strong haze
    mieCoefficient: 0.03,
    mieDirectionalG: 0.7
  },
  night: {
  rayleigh: 0,         // remove Rayleigh scattering (no blue)
  turbidity: 0.0,        // crystal clear, no haze
  mieCoefficient: 0,// almost no Mie scattering
  mieDirectionalG: 0.99, // makes moonlight super sharp if you add a fake moon
}

};

export default skySettingsComp;
