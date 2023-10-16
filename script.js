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
// }


//LENGTH
// const inputLength = document.querySelector('.lengthinput input');
// // const outputLength = document.querySelector('.lengthoutput input');
// /*const inputLength = document.querySelector('#input-length');
// console.log(inputLength);*/
// const LengthinputUnit = document.querySelector('#length-input-unit');
// const outputLength = document.querySelector('.lengthoutput input');
// const LengthoutputUnit = document.querySelector('#length-output-unit');

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

//   // Perform the conversion
//   const Lengthresult = LengthinputValue * LengthconversionRates[LengthoutputUnitValue] / LengthconversionRates[LengthinputUnitValue];

//   // Display the result
//   outputLength.value = Lengthresult.toFixed(5);
// }


// //pressure
// //get input elements
// const inputPressure=document.querySelector('#input-pressure');
// const pressureInputUnit=document.querySelector('#pressure-input-unit');
// const outputPressure=document.querySelector('#output-pressure');
// const pressureOutputUnit=document.querySelector('#pressure-output-unit');

// //add event listener to input elements
// inputPressure.addEventListener('input',convertPressure);
// pressureInputUnit.addEventListener('change',convertPressure);
// pressureOutputUnit.addEventListener('change',convertPressure);

// function convertPressure(){
//   const inputValue=parseFloat(inputPressure.value);
//   const inputUnitValue=pressureInputUnit.value;
//   const outputUnitValue=pressureOutputUnit.value;

//   const pressureConversionRates ={
//     'megapascal':1,
//     'kilopascal':1000,
//     'pascal':1000000,
//     'bar':10,
//     'psi':145.038,
//     'psf':20885.4,
//     'atmosphere': 0.00986923,
//     'technical atm':0.0101972,
//     'mmhg':7500.62,
//     'torr':7500
//   };
//   //result
//   const pressureResult=inputValue* pressureConversionRates[outputUnitValue]/pressureConversionRates[inputUnitValue];
//   //displaying the result
//   outputPressure.value=pressureResult.toFixed(3);
// }
