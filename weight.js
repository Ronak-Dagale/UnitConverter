// Weight
// Get input elements
const inputWeight = document.querySelector('#input-weight');
const weightInputUnit = document.querySelector('#weight-input-unit');
//const outputWeight = document.querySelector('#output-weight');
const weightOutputUnit = document.querySelector('#weight-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer = document.getElementById('result');

// Add event listeners to input elements
// inputWeight.addEventListener('input', convertWeight);
// weightInputUnit.addEventListener('change', convertWeight);
// weightOutputUnit.addEventListener('change', convertWeight);
convertButton.addEventListener('click', convertWeight);
// Conversion logic
function convertWeight() {
  const weightInputValue = parseFloat(inputWeight.value);
  const weightInputUnitValue = weightInputUnit.value;
  const weightOutputUnitValue = weightOutputUnit.value;


  // Define conversion rates
  const weightConversionRates = {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    metricton: 0.001,
    longton: 0.000984207,
    shortton: 0.00110231,
    pound: 2.20462,
    ounce: 35.27396,
    carrat: 5000,
    amu: 6.02214e+26,
  };

  const weightResult = (weightInputValue*weightConversionRates[weightOutputUnitValue]) / weightConversionRates[weightInputUnitValue];
 resultContainer.innerHTML='';
 // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
 resultContainer.textContent =weightInputValue+' '+weightInputUnitValue+'='+weightResult.toFixed(6)+' '+weightOutputUnitValue;

  // var x=AreainputValue+' '+AreainputUnitValue+' = '+Arearesult+' '+AreaoutputUnitValue;
//   var x=areaInputValue+' '+areaInputUnitValue+'='+areaResult.toFixed(6)+' '+areaOutputUnitValue;


//    if(sessionStorage.getItem('historyresult')==null)
//   {
//     // Store the initial string in session storage
// const initialString = x;
// const arrayAsString = JSON.stringify([initialString]);
// sessionStorage.setItem("historyresult", arrayAsString);
//   }
//   else
//    {
//      // Adding elements to the array in session storage
// const storedArray = JSON.parse(sessionStorage.getItem("historyresult"));
// storedArray.push(x);


// const updatedArrayAsString = JSON.stringify(storedArray);
// sessionStorage.setItem("historyresult", updatedArrayAsString);
//    }

//   // Perform the conversion
//  //  if (weightInputUnitValue === weightOutputUnitValue) {
//  //    weightResult = weightInputValue; // No conversion needed, same units
//  //  } else {
//  //    for(const unit in conversionRates){
//  //      const result = (weightInputValue * conversionRates[weightInputUnitValue]) /
//  //      conversionRates[unit];

//  //    weightResult[unit] = result.toFixed(5);
//  //    }
//  //  }

//  // for (const unit in weightResult) {
//  //    const outputField = document.querySelector(`#output-${unit}`);
//  //    outputField.value = weightResult[unit];
//  //  }
  
}
