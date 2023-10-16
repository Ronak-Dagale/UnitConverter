// // AREA
// //Get input elements
// //const inputArea = document.querySelector('.Areainput input');
//  const inputArea = document.querySelector('#input-area');
//   const AreainputUnit = document.querySelector('#area-input-unit');
//  const outputArea = document.querySelector('.Areaoutput input');
// //const outputArea = document.querySelector('#output-area');
// const AreaoutputUnit = document.querySelector('#area-output-unit');


// // Add event listener to input elements
// inputArea.addEventListener('input', convertArea);
// AreainputUnit.addEventListener('change', convertArea);
// AreaoutputUnit.addEventListener('change', convertArea);

// // Conversion logic
// function convertArea() {
//   const AreainputValue = parseFloat(inputArea.value);
//   const AreainputUnitValue = AreainputUnit.value;
//   const AreaoutputUnitValue = AreaoutputUnit.value;
  
//   // Define conversion rates
//   const AreaconversionRates = {
//     'square-meters': 1,
//     'square-kilometers': 0.000001,
//     'square-centimeter': 10000,
//     'square-millimeter': 1000000,
//     'square-micrometer': 1000000000000,
//     'square-mile': 3.861e-7,
//     'square-yard': 1.196,
//     'square-foot': 10.764,
//     'square-inch': 1550,
//     'Hectare': 0.0001,
//     'Acre': 0.000247105
//   };

//   // Perform the conversion
//   const Arearesult = AreainputValue * AreaconversionRates[AreaoutputUnitValue] / AreaconversionRates[AreainputUnitValue];

//   // Display the result
//   outputArea.value = Arearesult.toFixed(6);

// //   var x=AreainputValue+' '+AreainputUnitValue+' = '+Arearesult+' '+AreaoutputUnitValue;
// // document.getElementById("result").innerHTML=x;
// }
// // let printresult=document.getElementsByClassName('result');
// // printresult.innerText='45';

// // AREA
// // const inputArea = document.querySelector('#input-area');
// // const AreainputUnit = document.querySelector('#area-input-unit');
// // const outputArea = document.querySelector('.Areaoutput input');
// // const AreaoutputUnit = document.querySelector('#area-output-unit');
// // const resultContainer = document.getElementById('result');

// // inputArea.addEventListener('input', convertArea);
// // AreainputUnit.addEventListener('change', convertArea);
// // AreaoutputUnit.addEventListener('change', convertArea);

// // function convertArea() {
// //   const AreainputValue = parseFloat(inputArea.value);
// //   const AreainputUnitValue = AreainputUnit.value;
// //   const AreaoutputUnitValue = AreaoutputUnit.value;

// //   const AreaconversionRates = {
// //     'square-meters': 1,
// //     'square-kilometers': 0.000001,
// //     'square-centimeter': 10000,
// //     'square-millimeter': 1000000,
// //     'square-micrometer': 1000000000000,
// //     'square-mile': 3.861e-7,
// //     'square-yard': 1.196,
// //     'square-foot': 10.764,
// //     'square-inch': 1550,
// //     'Hectare': 0.0001,
// //     'Acre': 0.000247105
// //   };

// //   let resultHtml = '';

// //   for (const unit in AreaconversionRates) {
// //     const convertedValue = (AreainputValue * AreaconversionRates[unit]) / AreaconversionRates[AreainputUnitValue];
// //    // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
// //      resultHtml += `${AreainputValue} ${AreainputUnitValue} = ${convertedValue.toFixed(6)} ${unit}<br>`;
// //   }
  

//   resultContainer.innerHTML = resultHtml;

//   const Arearesult = AreainputValue * AreaconversionRates[AreaoutputUnitValue] / AreaconversionRates[AreainputUnitValue];
//   outputArea.value = Arearesult.toFixed(6);

  
 

//  var x=AreainputValue+' '+AreainputUnitValue+' = '+Arearesult+' '+AreaoutputUnitValue;
// // console.log(x);
//   if(sessionStorage.getItem('historyresult')==null)
//   {
//     sessionStorage.setItem('historyresult','[]');
//   }

//    var old_data=JSON.parse((sessionStorage.getItem('historyresult')));
//   old_data.push(x);
//   console.log(old_data);
//   sessionStorage.setItem('historyresult',JSON.stringify(old_data));
  
// }
const inputArea = document.querySelector('#input-area');
const areaInputUnit = document.querySelector('#area-input-unit');
//const outputArea = document.querySelector('#output-area');
const areaOutputUnit = document.querySelector('#area-output-unit');
const convertButton = document.querySelector('#convert-button');
const resultContainer= document.getElementById('result');

// Add event listener to input elements]guyh
//inputArea.addEventListener('input', convertArea);
//areaInputUnit.addEventListener('change', convertArea);
//areaOutputUnit.addEventListener('change', convertArea);
convertButton.addEventListener('click', convertArea);

// Conversion logic
function convertArea() {
  const areaInputValue = parseFloat(inputArea.value);
  const areaInputUnitValue = areaInputUnit.value;
  const areaOutputUnitValue = areaOutputUnit.value;

  // Define conversion rates
  const areaConversionRates = {
    'square-meters': 1,
    'square-kilometers': 0.000001,
    'square-centimeter': 10000,
    'square-millimeter': 1000000,
    'square-micrometer': 1000000000000,
    'square-mile': 3.861e-7,
    'square-yard': 1.196,
    'square-foot': 10.764,
    'square-inch': 1550,
    'hectare': 0.0001,
    'acre': 0.000247105
  };

  // Perform the conversion
  const areaResult = (areaInputValue*areaConversionRates[areaOutputUnitValue]) / areaConversionRates[areaInputUnitValue];
 resultContainer.innerHTML='';
 // resultHtml += AreainputValue + ' ' + AreainputUnitValue + ' = ' + convertedValue.toFixed(6) + ' ' + unit + '<br>';
 resultContainer.textContent =areaInputValue+' '+areaInputUnitValue+'='+areaResult.toFixed(6)+' '+areaOutputUnitValue;

  // var x=AreainputValue+' '+AreainputUnitValue+' = '+Arearesult+' '+AreaoutputUnitValue;
  var x=areaInputValue+' '+areaInputUnitValue+'='+areaResult.toFixed(6)+' '+areaOutputUnitValue;


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

// console.log(x);
  // if(sessionStorage.getItem('historyresult')==null)
  // {
  //   sessionStorage.setItem('historyresult','[]');
  // }

  //  var old_data=JSON.parse((sessionStorage.getItem('historyresult')));
  // old_data.push(x);
  // // console.log(old_data);
  // sessionStorage.setItem('historyresult',JSON.stringify(old_data));