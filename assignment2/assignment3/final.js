function convertTemperatureRange(startValue, endValue, scale) {
    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;
        
        if (scale === "C") {
            // Convert Celsius to Fahrenheit
            convertedTemp = (temp * 9/5) + 32;
            console.log(`${temp}°C = ${convertedTemp.toFixed(2)}°F`);
        } else if (scale === "F") {
            // Convert Fahrenheit to Celsius
            convertedTemp = (temp - 32) * 5/9;
            console.log(`${temp}°F = ${convertedTemp.toFixed(2)}°C`);
        } else {
            console.log("Invalid scale input. Please use 'C' for Celsius or 'F' for Fahrenheit.");
            return;
        }
    }
}

// Prompt the user for input
const startValue = parseInt(prompt("Enter the starting temperature: "));
const endValue = parseInt(prompt("Enter the ending temperature: "));
const scale = prompt("Enter the scale (C for Celsius, F for Fahrenheit): ").toUpperCase();

// Call the function with the user's input
convertTemperatureRange(startValue, endValue, scale);
