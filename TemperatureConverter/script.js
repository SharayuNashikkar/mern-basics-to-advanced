document.getElementById("convertBtn").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperature");
    const conversionType = document.getElementById("conversionType").value;
    const result = document.getElementById("result");
  
    const temperature = parseFloat(temperatureInput.value);
    result.innerHTML = "";
  
    if (isNaN(temperature)) {
      result.innerHTML = "Please enter a valid number.";
      return;
    }
  
    let convertedTemp;
  
    if (conversionType === "toCelsius") {
      convertedTemp = (temperature - 32) * (5 / 9);
      result.innerHTML = `${temperature}°F = ${convertedTemp.toFixed(2)}°C`;
    } else {
      convertedTemp = (temperature * 9) / 5 + 32;
      result.innerHTML = `${temperature}°C = ${convertedTemp.toFixed(2)}°F`;
    }
  });
