// Function to convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage: converting 25°C to Fahrenheit
let celsiusTemp = 25;
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);

console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);