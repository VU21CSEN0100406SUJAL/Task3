document.getElementById('convert-btn').addEventListener('click', function() {
    const temperature = document.getElementById('temp-input').value;
    const unit = document.getElementById('unit-select').value;
    const resultElement = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');

    // Input validation: Check if the input is a valid number
    if (isNaN(temperature) || temperature === '') {
        errorMessage.textContent = "Please enter a valid number!";
        errorMessage.style.display = 'block';
        resultElement.textContent = '';
        return;
    }

    errorMessage.style.display = 'none';
    let convertedTemp;

    if (unit === 'celsius') {
        // Convert Celsius to Fahrenheit and Kelvin
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = parseFloat(temperature) + 273.15;
        convertedTemp = `${temperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'fahrenheit') {
        // Convert Fahrenheit to Celsius and Kelvin
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        convertedTemp = `${temperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'kelvin') {
        // Convert Kelvin to Celsius and Fahrenheit
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        convertedTemp = `${temperature}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    // Display result
    resultElement.textContent = convertedTemp;
});
