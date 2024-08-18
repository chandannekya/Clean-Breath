const airQualityThresholds = {
  CO: {
    safe: 1000,
    moderate: 5000,
    dangerous: Infinity,
    healthImpact:
      "Low levels are generally safe. High levels can cause headaches, dizziness, and severe health issues.",
  },
  O3: {
    safe: 100,
    moderate: 180,
    dangerous: Infinity,
    healthImpact:
      "Low levels are acceptable. Higher levels can cause respiratory problems and other health issues.",
  },
  NO2: {
    safe: 40,
    moderate: 80,
    dangerous: Infinity,
    healthImpact:
      "Low levels are safe. High levels can cause respiratory issues and contribute to smog.",
  },
  SO2: {
    safe: 20,
    moderate: 50,
    dangerous: Infinity,
    healthImpact:
      "Low levels are generally safe. High levels can lead to respiratory problems and aggravate asthma.",
  },
  PM2_5: {
    safe: 10,
    moderate: 35,
    dangerous: Infinity,
    healthImpact:
      "Low levels are preferable. Elevated levels can penetrate deep into the lungs and bloodstream, causing health issues.",
  },
  PM10: {
    safe: 20,
    moderate: 50,
    dangerous: Infinity,
    healthImpact:
      "Low levels are generally acceptable. High levels can cause respiratory problems and other health issues.",
  },
};

export default airQualityThresholds;
