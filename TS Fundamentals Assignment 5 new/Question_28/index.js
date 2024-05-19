"use strict";
function convertFahrenheitToCelsius(temperaturesFahrenheit) {
    const temperaturesCelsius = [];
    for (const tempF of temperaturesFahrenheit) {
        const tempC = (tempF - 32) * (5 / 9);
        temperaturesCelsius.push(tempC);
    }
    return temperaturesCelsius;
}
const temperaturesFahrenheit = [32, 68, 86, 104];
const temperaturesCelsius = convertFahrenheitToCelsius(temperaturesFahrenheit);
console.log("Fahrenheit Temperatures:", temperaturesFahrenheit);
console.log("Celsius Temperatures:", temperaturesCelsius);
