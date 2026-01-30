document.getElementById("convertBtn").addEventListener("click", function () {
    // Get input values
    const temperature = parseFloat(
      document.getElementById("temperatureInput").value
    );
    const conversionType = document.getElementById("conversionType").value;
    const resultDiv = document.getElementById("result");
  
    // Clear previous result
    resultDiv.innerHTML = "";
  
    // Validate input
    if (isNaN(temperature)) {
      resultDiv.innerHTML = "Please enter a valid number";
      return;
    }
  
    let convertedTemperature;
  
    // Conversion logic
    if (conversionType === "toCelsius") {
      // Fahrenheit to Celsius
      convertedTemperature = (temperature - 32) * (5 / 9);
      resultDiv.innerHTML = `${temperature}°F is equal to ${convertedTemperature.toFixed(
        2
      )}°C`;
    } else if (conversionType === "toFahrenheit") {
      // Celsius to Fahrenheit
      convertedTemperature = temperature * (9 / 5) + 32;
      resultDiv.innerHTML = `${temperature}°C is equal to ${convertedTemperature.toFixed(
        2
      )}°F`;
    }
  });
  