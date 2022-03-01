let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let plusBtn = document.querySelector("#plusBtn");
let minusBtn = document.querySelector("#minusBtn");
let multiplyBtn = document.querySelector("#multiplyBtn");
let divideBtn = document.querySelector("#divideBtn");
let resetBtn = document.querySelector("#resetBtn");

let displayBox = document.querySelector(".displayBox");

plusBtn.addEventListener("click", function() {
  let result = document.createElement("h3");
  result.innerHTML = Number(num1.value) + Number(num2.value);
  displayBox.appendChild(result);
  // num1.value = 0;
  // num2.value = 0;
});

minusBtn.addEventListener("click", function() {
  let result = document.createElement("h3");
  result.innerHTML = Number(num1.value) - Number(num2.value);
  displayBox.appendChild(result);
});

multiplyBtn.addEventListener("click", function() {
  let result = document.createElement("h3");
  result.innerHTML = Number(num1.value) * Number(num2.value);
  displayBox.appendChild(result);
});

divideBtn.addEventListener("click", function() {
  let result = document.createElement("h3");
  if(Number(num2.value) === 0) {
    result.innerHTML = "undefined";
  }else{
    result.innerHTML = Number(num1.value) / Number(num2.value);
  }
  displayBox.appendChild(result);
});

resetBtn.addEventListener("click", function() {
  //reset the values to 0
  num1.value = 0;
  num2.value = 0;
  //removing all elements that is in the displayBox.
  // https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
  while(displayBox.firstChild) {
    displayBox.removeChild(displayBox.firstChild);
  }
});