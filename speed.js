
const inputSpeed = document.querySelector('#input-speed');
const speedInputUnit = document.querySelector('#speed-input-unit');
const speedOutputUnit = document.querySelector('#speed-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer = document.getElementById('result');

convertButton.addEventListener('click', convertSpeed);

function convertSpeed() {
  const speedInputValue = parseFloat(inputSpeed.value);
  const speedInputUnitValue = speedInputUnit.value;
  const speedOutputUnitValue = speedOutputUnit.value;

  const speedConversionRates = {
    kmperhr: {
      kmper: (speed) => speed,
      mileperhr: (speed) => speed * 0.621371,
      mperhr: (speed) => speed * 1000,
      fpersec: (speed) => speed * 3280.84 / 3600,
      knot: (speed) => speed * 0.539957,
    },
    mileperhr: {
      kmper: (speed) => speed / 1.60934,
      mileperhr: (speed) => speed,
      mperhr: (speed) => speed * 1609.34,
      fpersec: (speed) => speed * 5280 / 3600,
      knot: (speed) => speed * 0.868976,
    },
    mperhr: {
      kmper: (speed) => speed / 1000,
      mileperhr: (speed) => speed * 0.000621371,
      mperhr: (speed) => speed,
      fpersec: (speed) => speed * 3.28084 / 3600,
      knot: (speed) => speed * 0.00194384,
    },
    fpersec: {
      kmper: (speed) => speed * 0.0003048 * 3600 / 1000,
      mileperhr: (speed) => speed * 0.000189394 * 3600,
      mperhr: (speed) => speed * 0.3048,
      fpersec: (speed) => speed,
      knot: (speed) => speed * 0.592484,
    },
    knot: {
      kmper: (speed) => speed / 1.852,
      mileperhr: (speed) => speed / 1.15078,
      mperhr: (speed) => speed / 0.514444,
      fpersec: (speed) => speed / 1.68781,
      knot: (speed) => speed,
    },
  };

  const conversionFunction = speedConversionRates[speedInputUnitValue][speedOutputUnitValue];
  const speedResult = conversionFunction(speedInputValue);

  resultContainer.innerHTML = '';
  resultContainer.textContent = `${speedInputValue} ${speedInputUnitValue} = ${speedResult.toFixed(6)} ${speedOutputUnitValue}`;

  const x = `${speedInputValue} ${speedInputUnitValue} = ${speedResult.toFixed(6)} ${speedOutputUnitValue}`;

  if (sessionStorage.getItem('historyresult') == null) {
    const initialString = x;
    const arrayAsString = JSON.stringify([initialString]);
    sessionStorage.setItem("historyresult", arrayAsString);
  } else {
    const storedArray = JSON.parse(sessionStorage.getItem("historyresult"));
    storedArray.push(x);

    const updatedArrayAsString = JSON.stringify(storedArray);
    sessionStorage.setItem("historyresult", updatedArrayAsString);
  }
}
