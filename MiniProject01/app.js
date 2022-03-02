let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let plusBtn = document.querySelector("#plusBtn");
let minusBtn = document.querySelector("#minusBtn");
let multiplyBtn = document.querySelector("#multiplyBtn");
let divideBtn = document.querySelector("#divideBtn");
let resetBtn = document.querySelector("#resetBtn");

// let displayBox = document.querySelector(".displayBox");
let displayResult = document.querySelector("#displayResult");

plusBtn.addEventListener("click", function() {
  // let result = document.createElement("h3");
  // result.innerHTML = Number(num1.value) + Number(num2.value);
  // displayBox.appendChild(result);
  displayResult.innerHTML = Number(num1.value) + Number(num2.value);
});

minusBtn.addEventListener("click", function() {
  // let result = document.createElement("h3");
  // result.innerHTML = Number(num1.value) - Number(num2.value);
  // displayBox.appendChild(result);
  displayResult.innerHTML = Number(num1.value) - Number(num2.value);
});

multiplyBtn.addEventListener("click", function() {
  // let result = document.createElement("h3");
  // result.innerHTML = Number(num1.value) * Number(num2.value);
  // displayBox.appendChild(result);
  displayResult.innerHTML = Number(num1.value) * Number(num2.value);
});

divideBtn.addEventListener("click", function() {
  // let result = document.createElement("h3");
  // if(Number(num2.value) === 0) {
  //   result.innerHTML = "undefined";
  // }else{
  //   result.innerHTML = Number(num1.value) / Number(num2.value);
  // }
  // displayBox.appendChild(result);
  if(Number(num2.value) === 0) {
    displayResult.innerHTML = "undefined";
  }else{
    // round the number to the 5 decimal point
    displayResult.innerHTML = Math.round(((Number(num1.value) / Number(num2.value)) + Number.EPSILON) * 100000) / 100000;
  }
});

resetBtn.addEventListener("click", function() {
  //reset the values to 0
  num1.value = 0;
  num2.value = 0;
  //removing all elements that is in the displayBox.
  // https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
  // while(displayBox.firstChild) {
  //   displayBox.removeChild(displayBox.firstChild);
  // }
  displayResult.innerHTML = "";
});