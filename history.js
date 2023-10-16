 // const history=sessionStorage.getItem('historyresult');
 // console.log(history);
// for (let i = 0; i < history.length; i++) {
//   //console.log(history[i]);
//   console.log(i);
// }

// Retrieving and printing each element on a new line
// const retrievedArray = JSON.parse(sessionStorage.getItem("historyresult"));

// retrievedArray.forEach((str) => {
//   console.log(str);
// });

// //document.getElementById('history result').innerHTML=history[0];
// const historyResultElement = document.getElementById('history result');
// historyResultElement.innerHTML = retrievedArray.join('<br>');

const retrievedArray = JSON.parse(sessionStorage.getItem("historyresult"));

// Create a copy of the array in reverse order
const reversedArray = [...retrievedArray].reverse();

// Print the elements using forEach
reversedArray.forEach((str) => {
  console.log(str);
});

// Or, set the reversed array as the innerHTML of the 'history result' element
const historyResultElement = document.getElementById('history result');
historyResultElement.innerHTML = reversedArray.join('<br>');
