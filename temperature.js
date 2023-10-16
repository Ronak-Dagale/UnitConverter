
// JavaScript
const inputTemperature = document.querySelector('#input-temperature');
const temperatureInputUnit = document.querySelector('#temperature-input-unit');
const temperatureOutputUnit = document.querySelector('#temperature-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer = document.getElementById('result');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
  const temperatureInputValue = parseFloat(inputTemperature.value);
  const temperatureInputUnitValue = temperatureInputUnit.value;
  const temperatureOutputUnitValue = temperatureOutputUnit.value;

  let temperatureResult;

  if (temperatureInputUnitValue === 'celsius') {
    if (temperatureOutputUnitValue === 'celsius') {
      temperatureResult = temperatureInputValue;
    } else if (temperatureOutputUnitValue === 'kelvin') {
      temperatureResult = temperatureInputValue + 273.15;
    } else if (temperatureOutputUnitValue === 'fahrenheit') {
      temperatureResult = (temperatureInputValue * 9 / 5) + 32;
    }
  } else if (temperatureInputUnitValue === 'kelvin') {
    if (temperatureOutputUnitValue === 'celsius') {
      temperatureResult = temperatureInputValue - 273.15;
    } else if (temperatureOutputUnitValue === 'kelvin') {
      temperatureResult = temperatureInputValue;
    } else if (temperatureOutputUnitValue === 'fahrenheit') {
      temperatureResult = (temperatureInputValue - 273.15) * 9 / 5 + 32;
    }
  } else if (temperatureInputUnitValue === 'fahrenheit') {
    if (temperatureOutputUnitValue === 'celsius') {
      temperatureResult = (temperatureInputValue - 32) * 5 / 9;
    } else if (temperatureOutputUnitValue === 'kelvin') {
      temperatureResult = (temperatureInputValue - 32) * 5 / 9 + 273.15;
    } else if (temperatureOutputUnitValue === 'fahrenheit') {
      temperatureResult = temperatureInputValue;
    }
  }

  // Display the result
  resultContainer.innerHTML = `${temperatureInputValue.toFixed(4)} ${temperatureInputUnitValue} = ${temperatureResult.toFixed(4)} ${temperatureOutputUnitValue}`;

  // Storing in sessionStorage
  const resultString = `${temperatureInputValue.toFixed(4)} ${temperatureInputUnitValue} = ${temperatureResult.toFixed(4)} ${temperatureOutputUnitValue}`;
  if (sessionStorage.getItem('historyresult') === null) {
    sessionStorage.setItem('historyresult', JSON.stringify([resultString]));
  } else {
    const storedArray = JSON.parse(sessionStorage.getItem('historyresult'));
    storedArray.push(resultString);
    sessionStorage.setItem('historyresult', JSON.stringify(storedArray));
  }
}
