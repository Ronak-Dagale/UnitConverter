// const inputLength = document.querySelector('.lengthinput input');
// // const outputLength = document.querySelector('.lengthoutput input');
// /*const inputLength = document.querySelector('#input-length');
// console.log(inputLength);*/
// const LengthinputUnit = document.querySelector('#length-input-unit');
// const outputLength = document.querySelector('.lengthoutput input');
// const LengthoutputUnit = document.querySelector('#length-output-unit');
// const resultContainer=document.getElementById('result');

// inputLength.addEventListener('input', convertLength);
// LengthinputUnit.addEventListener('change', convertLength);
// LengthoutputUnit.addEventListener('change', convertLength);

// function convertLength() {
//   const LengthinputValue = parseFloat(inputLength.value);
//   const LengthinputUnitValue = LengthinputUnit.value;
//   const LengthoutputUnitValue = LengthoutputUnit.value;
  
//   // Define conversion rates
//   const LengthconversionRates = {
//     'meters': 1,
//     'kilometers': 0.001,
//     'centimeter': 100,
//     'millimeter': 1000,
//     'micrometer': 1000000,
//     'mile': 0.0006213689,
//     'yard': 1.0936132983,
//     'foot': 3.280839895,
//     'inch': 39.37007874,
//     'nanometer': 1000000000,
//     'lightyear': 1.057008707E-16
//   };

//   let resultHtml='';
//   for(const unit in LengthconversionRates){
//     const convertedValue=(LengthinputValue*LengthconversionRates[unit])/LengthconversionRates[LengthinputUnitValue];
//     resultHtml+='${LengthinputValue}${LengthinputUnitValue}=${convertedValue.toFixed(6)} ${unit}<br>'
//   };

//   resultContainer.innerHTML=resultHtml;
//   // Perform the conversion
//   const Lengthresult = LengthinputValue * LengthconversionRates[LengthoutputUnitValue] / LengthconversionRates[LengthinputUnitValue];

//   // Display the result
//   outputLength.value = Lengthresult.toFixed(6);
// //    var x=LengthinputValue+' '+LengthinputUnitValue+' = '+Lengthresult+' '+LengthoutputUnitValue;
// // // console.log(x);
// //   if(sessionStorage.getItem('historyresult')==null)
// //   {
// //     sessionStorage.setItem('historyresult','[]');
// //   }

// //    var old_data=JSON.parse((sessionStorage.getItem('historyresult')));
// //   old_data.push(x);
// //   console.log(old_data);
// //   sessionStorage.setItem('historyresult',JSON.stringify(old_data));
  
// }
// const inputArea = document.querySelector('#input-area');
// const areaInputUnit = document.querySelector('#area-input-unit');
// //const outputArea = document.querySelector('#output-area');
// const areaOutputUnit = document.querySelector('#area-output-unit');
// const convertButton = document.querySelector('#convert-button');
// const resultContainer = document.getElementById('result');

// // Add event listener to input elements
// //inputArea.addEventListener('input', convertArea);
// //areaInputUnit.addEventListener('change', convertArea);
// //areaOutputUnit.addEventListener('change', convertArea);
// convertButton.addEventListener('click', convertArea);

// // Conversion logic
// function convertArea() {
//   const areaInputValue = parseFloat(inputArea.value);
//   const areaInputUnitValue = areaInputUnit.value;
//   const areaOutputUnitValue = areaOutputUnit.value;

//   // Define conversion rates
//   const areaConversionRates = {
//     'square-meters': 1,
//     'square-kilometers': 0.000001,
//     'square-centimeter': 10000,
//     'square-millimeter': 1000000,
//     'square-micrometer': 1000000000000,
//     'square-mile': 3.861e-7,
//     'square-yard': 1.196,
//     'square-foot': 10.764,
//     'square-inch': 1550,
//     'hectare': 0.0001,
//     'acre': 0.000247105
//   };

//   // Perform the conversion
//   const areaResult = (areaInputValue*areaConversionRates[areaOutputUnitValue]) / areaConversionRates[areaInputUnitValue];
//   resultContainer.innerHTML='';
//  // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
//  resultContainer.textContent =areaInputValue+' '+areaInputUnitValue+'='+areaResult.toFixed(6)+' '+areaOutputUnitValue;
//   // Display the result
//   //outputArea.value = areaResult.toFixed(6);
//    //resultContainer.textContent = areaResult.toFixed(6);
// }
const inputLength = document.querySelector('#input-length');
const LengthinputUnit = document.querySelector('#length-input-unit');
//const outputLength = document.querySelector('.lengthoutput input');
const LengthoutputUnit = document.querySelector('#length-output-unit');
//const resultContainer = document.getElementById('result');
const convertButton = document.querySelector('#convert-button');
const resultContainer = document.getElementById('result');

// inputLength.addEventListener('input', convertLength);
// LengthinputUnit.addEventListener('change', convertLength);
// LengthoutputUnit.addEventListener('change', convertLength);
convertButton.addEventListener('click', convertLength);

function convertLength() {
  const LengthinputValue = parseFloat(inputLength.value);
  const LengthinputUnitValue = LengthinputUnit.value;
  const LengthoutputUnitValue = LengthoutputUnit.value;

  // Define conversion rates
  const LengthconversionRates = {
    'meters': 1,
    'kilometers': 0.001,
    'centimeter': 100,
    'millimeter': 1000,
    'micrometer': 1000000,
    'mile': 0.0006213689,
    'yard': 1.0936132983,
    'foot': 3.280839895,
    'inch': 39.37007874,
    'nanometer': 1000000000,
    'lightyear': 1.057008707E-16
  };
const lengthResult = (LengthinputValue * LengthconversionRates[LengthoutputUnitValue]) / LengthconversionRates[LengthinputUnitValue];

  // Clear the result container
  resultContainer.innerHTML = '';

  // Display the result
  resultContainer.textContent = LengthinputValue + ' ' + LengthinputUnitValue + ' = ' + lengthResult.toFixed(6) + ' ' + LengthoutputUnitValue;

var x=LengthinputValue+' '+LengthinputUnitValue+'='+lengthResult.toFixed(6)+' '+LengthoutputUnitValue;


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
 