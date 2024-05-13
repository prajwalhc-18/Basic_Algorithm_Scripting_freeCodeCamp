function convertTemperature(temperature, fromUnit, toUnit) {
  let convertedTemperature;

  switch (fromUnit) {
    case "C":
      switch (toUnit) {
        case "F":
          convertedTemperature = (temperature * 9) / 5 + 32;
          break;
        case "K":
          convertedTemperature = temperature + 273.15;
          break;
        default:
          convertedTemperature = temperature;
          break;
      }
      break;
    case "F":
      switch (toUnit) {
        case "C":
          convertedTemperature = ((temperature - 32) * 5) / 9;
          break;
        case "K":
          convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
          break;
        default:
          convertedTemperature = temperature;
          break;
      }
      break;
    case "K":
      switch (toUnit) {
        case "C":
          convertedTemperature = temperature - 273.15;
          break;
        case "F":
          convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
          break;
        default:
          convertedTemperature = temperature;
          break;
      }
      break;
    default:
      convertedTemperature = temperature;
      break;
  }

  return convertedTemperature;
}


console.log(convertTemperature(25, "C", "F")); // Output: 77
console.log(convertTemperature(212, "F", "C")); // Output: 100
console.log(convertTemperature(300, "K", "F")); // Output: 80.33