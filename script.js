function convertTemp() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");
  
    if (isNaN(temp)) {
      resultDiv.textContent = "⚠️ Please enter a valid number.";
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    switch (unit) {
      case "celsius":
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
        resultDiv.textContent = `${temp}°C = ${fahrenheit.toFixed(2)}°F | ${kelvin.toFixed(2)}K`;
        break;
  
      case "fahrenheit":
        celsius = (temp - 32) * 5/9;
        kelvin = (temp - 32) * 5/9 + 273.15;
        resultDiv.textContent = `${temp}°F = ${celsius.toFixed(2)}°C | ${kelvin.toFixed(2)}K`;
        break;
  
      case "kelvin":
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        resultDiv.textContent = `${temp}K = ${celsius.toFixed(2)}°C | ${fahrenheit.toFixed(2)}°F`;
        break;
  
      default:
        resultDiv.textContent = "⚠️ Unknown unit!";
    }
  }
  