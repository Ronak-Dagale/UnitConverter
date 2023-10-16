
//pressure
//get input elements
const inputPressure=document.querySelector('#input-pressure');
const pressureInputUnit=document.querySelector('#pressure-input-unit');
//const outputPressure=document.querySelector('#output-pressure');
const pressureOutputUnit=document.querySelector('#pressure-output-unit');
//const resultContainer = document.getElementById('result');
const convertButton = document.querySelector('#convert-button');
const resultContainer= document.getElementById('result');


convertButton.addEventListener('click', convertPressure);

function convertPressure(){
  const pressureinputValue=parseFloat(inputPressure.value);
  const pressureinputUnitValue=pressureInputUnit.value;
  const pressureoutputUnitValue=pressureOutputUnit.value;

  const pressureConversionRates ={
    'megapascal':1,
    'kilopascal':1000,
    'pascal':1000000,
    'bar':10,
    'psi':145.038,
    'psf':20885.4,
    'atmosphere': 0.00986923,
    'technical atm':0.0101972,
    'mmhg':7500.62,
    'torr':7500
  };

const pressureResult = (pressureinputValue*pressureConversionRates[pressureoutputUnitValue]) / pressureConversionRates[pressureinputUnitValue];
 resultContainer.innerHTML='';
 // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
 resultContainer.textContent =pressureinputValue+' '+pressureinputUnitValue+'='+ pressureResult.toFixed(6)+' '+ pressureoutputUnitValue;

  
  var x= pressureinputValue+' '+ pressureinputUnitValue+'='+ pressureResult.toFixed(6)+' '+ pressureoutputUnitValue;

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

