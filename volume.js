//VOLUME
const inputvolume = document.querySelector('#volume-length');

const volumeinputUnit = document.querySelector('#volume-input-unit');
//const outputvolume = document.querySelector('.volumeoutput input');
const volumeoutputUnit = document.querySelector('#volume-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer= document.getElementById('result');

// inputvolume.addEventListener('input', convertvolume);
// volumeinputUnit.addEventListener('change', convertvolume);
// volumeoutputUnit.addEventListener('change', convertvolume);

convertButton.addEventListener('click', convertvolume);

function convertvolume() {
  const volumeinputValue = parseFloat(inputvolume.value);
  const volumeinputUnitValue = volumeinputUnit.value;
  const volumeoutputUnitValue = volumeoutputUnit.value;
  
  // Define conversion rates
  const volumeconversionRates = {
    'cubic meters': 1,
    'cubic kilometer': 1E-9,
    'cubic centimeter': 1000000,
    'cubic millimeter': 1000000000,
    'liter': 1000,
    'milliliter': 1000000,
    'US gallon': 264.17217686,
    'US quart': 1056.6887074,
    'US pint': 2113.3774149,
    'US cup': 4226.7548297,
    'US table spoon': 67628.077276,
    'US tea spoon': 202884.23183,
    'Imperial gallon': 219.9692483,
    'Imperial quart': 879.8769932,
    'Imperial pint': 1759.7539864,
    'Imperial table spoon': 56312.127565,
    'Imperial tea spoon': 168936.38269,
    'cubic mile': 2.399128636E-10,
    'cubic yard': 1.3079506193,
    'cubic foot': 35.314666721,
    'cubic inch': 61023.744095
  };

  // // Perform the conversion
  // const volumeresult = volumeinputValue * volumeconversionRates[volumeoutputUnitValue] / volumeconversionRates[volumeinputUnitValue];

  // // Display the result
  // outputvolume.value = volumeresult.toFixed(5);
  const volumeResult = (volumeinputValue*volumeconversionRates[volumeoutputUnitValue]) / volumeconversionRates[volumeinputUnitValue];
 resultContainer.innerHTML='';
 // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
 resultContainer.textContent =volumeinputValue+' '+volumeinputUnitValue+'='+volumeResult.toFixed(6)+' '+volumeoutputUnitValue;

  // var x=AreainputValue+' '+AreainputUnitValue+' = '+Arearesult+' '+AreaoutputUnitValue;
  var x=volumeinputValue+' '+volumeinputUnitValue+'='+volumeResult.toFixed(6)+' '+volumeoutputUnitValue;


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