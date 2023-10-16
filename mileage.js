// Mileage
// Get input elements
const inputMileage = document.querySelector('#input-mileage');
const mileageInputUnit = document.querySelector('#mileage-input-unit');
//const outputMileage = document.querySelector('#output-mileage');
const mileageOutputUnit = document.querySelector('#mileage-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer = document.getElementById('result');

// Add event listeners to input elements
// inputMileage.addEventListener('input', convertMileage);
// mileageInputUnit.addEventListener('change', convertMileage);
// mileageOutputUnit.addEventListener('change', convertMileage);
convertButton.addEventListener('click', convertMileage);


// Conversion logic
function convertMileage() {
  const mileageInputValue = parseFloat(inputMileage.value);
  const mileageInputUnitValue = mileageInputUnit.value;
  const mileageOutputUnitValue = mileageOutputUnit.value;



  // Define conversion rates
  const mileageConversionRates = {
    milesPerGallon: 1,
    litrePer100km: 235.,
    kmPerLitre: 0.35400,
    milesPerLitre: 0.2199691,
  };
const mileageResult = (mileageInputValue*mileageConversionRates[mileageOutputUnitValue]) / mileageConversionRates[mileageInputUnitValue];
 resultContainer.innerHTML='';
 // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
 resultContainer.textContent =mileageInputValue+' '+ mileageInputUnitValue+'='+ mileageResult.toFixed(6)+' '+ mileageOutputUnitValue;

  // var x=AreainputValue+' '+AreainputUnitValue+' = '+Arearesult+' '+AreaoutputUnitValue;
  var x=mileageInputValue+' '+ mileageInputUnitValue+'='+ mileageResult.toFixed(6)+' '+ mileageOutputUnitValue;

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