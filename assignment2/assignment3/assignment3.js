function convertTemperature(temperature, scale) {
    let convertedTemperature;

    if (scale === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperature * 9/5) + 32;
        console.log(`${temperature}°C is equal to ${convertedTemperature}°F`);
    } else if (scale === "F") {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperature - 32) * 5/9;
        console.log(`${temperature}°F is equal to ${convertedTemperature}°C`);
    } else {
        console.log("Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.");
    }

    return convertedTemperature;
}

// Example usage:
convertTemperature(25, "C");  // Convert 25°C to Fahrenheit
convertTemperature(77, "F");  // Convert 77°F to Celsius