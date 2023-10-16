
//getting input elements
const inputData = document.querySelector('#input-data');
const dataInputUnit = document.querySelector('#data-input-unit');
//const outputData = document.querySelector('#output-data');
const dataOutputUnit = document.querySelector('#data-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer= document.getElementById('result');

// inputData.addEventListener('input', convertData);
// dataInputUnit.addEventListener('change', convertData);
// dataOutputUnit.addEventListener('change', convertData);
convertButton.addEventListener('click', convertData);

function convertData() {
  const dataInputValue = parseFloat(inputData.value);
  const dataInputUnitValue = dataInputUnit.value;
  const dataOutputUnitValue = dataOutputUnit.value;

  const dataConversionRates = {
    'bit': 1,
    'byte': 8,
    'kilobit': 1024,
    'kilobyte': 8192,
    'megabit': 1048576,
    'megabyte': 8388608,
    'gigabit': 1073741824,
    'gigabyte': 8589934592,
    'terabit': 1099511627776,
    'terabyte': 8796093022208,
  };

  // const dataresult = dataInputValue * dataConversionRates[dataInputUnitValue] / dataConversionRates[dataOutputUnitValue];
  // outputData.value = result.toFixed(6);

   // Perform the conversion
  const dataResult = (dataInputValue*dataConversionRates[dataOutputUnitValue]) / dataConversionRates[dataInputUnitValue];
 resultContainer.innerHTML='';
 // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
 resultContainer.textContent =dataInputValue+' '+dataInputUnitValue+'='+dataResult.toFixed(6)+' '+dataOutputUnitValue;

  // var x=AreainputValue+' '+AreainputUnitValue+' = '+Arearesult+' '+AreaoutputUnitValue;
  var x=dataInputValue+' '+dataInputUnitValue+'='+dataResult.toFixed(6)+' '+dataOutputUnitValue;


   if(sessionStorage.getItem('historyresult')==null)
  {
    // Store the initial string in session storage
const initialString = x;
const arrayAsString = JSON.stringify([initialString]);
sessionStorage.setItem("historyresult", arrayAsString);
  }
  else
   {
     // Adding elements to the array in session storage
const storedArray = JSON.parse(sessionStorage.getItem("historyresult"));
storedArray.push(x);


const updatedArrayAsString = JSON.stringify(storedArray);
sessionStorage.setItem("historyresult", updatedArrayAsString);
   }
}
