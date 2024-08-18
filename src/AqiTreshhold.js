const aqiThresholds = {
  0: {
    max: "", // Good
    healthImpact: "",
    plantingAdvice: "",
  },
  1: {
    max: "Good", // Good
    healthImpact:
      "Air quality is considered satisfactory, and air pollution poses little or no risk.",
    plantingAdvice:
      "No immediate action needed. Maintaining green spaces and trees is always beneficial.",
    warncolor: "text-green-600",
  },
  2: {
    max: "Moderate",
    healthImpact:
      "Air quality is acceptable; however, there may be a risk for some people, especially those who are unusually sensitive to air pollution.",
    plantingAdvice:
      "Consider planting trees and shrubs that can help filter air pollutants to further improve air quality.",
    warncolor: "text-yellow-600",
  },
  3: {
    max: "Unhealthy for Sensitive Groups",
    healthImpact:
      "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
    plantingAdvice:
      "Plant trees and shrubs that are effective in reducing specific pollutants like PM2.5 and NO2. Examples include oak, pine, and juniper trees.",
    warncolor: "text-orange-400",
  },
  4: {
    warncolor: "text-red-600",
    max: "Unhealthy",
    healthImpact:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
    plantingAdvice:
      "Increase green coverage with plants known for high air purification qualities. Consider planting species like neem, tulsi, or bamboo that can significantly reduce pollution.",
  },
  5: {
    warncolor: " text-purple-600",
    max: "Very Unhealthy",
    healthImpact:
      "Health alert: everyone may experience more serious health effects.",
    plantingAdvice:
      "Prioritize planting a diverse range of air-purifying plants and trees. Consider integrating urban forestry projects and green roofs to improve air quality.",
  },
  6: {
    warncolor: "text-maroon-600",
    max: "Hazardous",
    healthImpact:
      "Health warnings of emergency conditions. The entire population is more likely to be affected.",
    plantingAdvice:
      "Immediate action is crucial. Focus on planting large trees and creating green buffers around areas with high pollution. Implement community-wide green initiatives to combat severe pollution.",
  },
};

export default aqiThresholds;
