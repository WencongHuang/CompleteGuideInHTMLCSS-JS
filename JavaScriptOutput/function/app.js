// Function with no parameter
function addTwoNumbers () {
  let a = 2;
  let b = 5;
  let total = a + b;
  console.log(total);
}

// Function with one parameter
function greeting(userName) {
  alert("Good Morning " + userName + "!");
}

// Function with two parameter
function addTwoNumbersV2(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}

// Buttons
let addTwoNumberBtn = document.querySelector("#addTwoNumberBtn");
let greetingBtn = document.querySelector("#greetingBtn");
let addTwoNumberV2Btn = document.querySelector("#addTwoNumberV2Btn");

// TextBoxes
let greetingTextBox = document.querySelector("#greetingTextBox");
let firstNum = document.querySelector("#firstNum");
let secondNum = document.querySelector("#secondNum");

// Syntax:
// addEventListener(type, listener);
// addEventListener(type, listener, options);
// addEventListener(type, listener, useCapture);
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// where the type can be the value of "keydown", "keypress", "keyup", for keyboard. OR "mousedown", "mouseup", "click", for mouse. Sometimes, it could also be "load" or "error".
// https://developer.mozilla.org/en-US/docs/Web/API/Event/type

addTwoNumberBtn.addEventListener("click", function() {
  addTwoNumbers();
});

greetingBtn.addEventListener("click", function() {
  greeting(greetingTextBox.value);
  greetingTextBox.value = "";
});

// Used Number() to convert String to Int.
addTwoNumberV2Btn.addEventListener("click", function() {
  addTwoNumbersV2(Number(firstNum.value), Number(secondNum.value));
  firstNum.value = "";
  secondNum.value = "";
});
