const inputTime = document.querySelector('#input-time');
const timeInputUnit = document.querySelector('#time-input-unit');
//const outputTime = document.querySelector('#output-time');
const timeOutputUnit = document.querySelector('#time-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer = document.getElementById('result');

// inputTime.addEventListener('input', convertTime);
// timeInputUnit.addEventListener('change', convertTime);
// timeOutputUnit.addEventListener('change', convertTime);
convertButton.addEventListener('click', convertTime);

function convertTime() {
  const timeInputValue = parseFloat(inputTime.value);
  const timeInputUnitValue = timeInputUnit.value;
  const timeOutputUnitValue = timeOutputUnit.value;

  const timeConversionRates = {
    'second': 1,
    'millisecond': 1000,
    'microsecond': 1000000,
    'nanosecond': 1000000000,
    'picosecond': 1000000000000,
    'minute': 1 / 60,
    'hour': 1 / 3600,
    'day': 1 / 86400,
    'week': 1 / 604800,
    'month': 1 / 2628000,
    'year': 1 / 31536000
  };

  const timeResult=(timeInputValue*timeConversionRates[timeOutputUnitValue])/timeConversionRates[timeInputUnitValue];
  resultContainer.innerHTML='';
  resultContainer.textContent=timeInputValue+' '+timeInputUnitValue+'='+timeResult.toFixed(6)+' '+timeOutputUnitValue;
  
var x=timeInputValue+' '+timeInputUnitValue+'='+timeResult.toFixed(6)+' '+timeOutputUnitValue;


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


// Initial conversion on page load
// convertTime();
