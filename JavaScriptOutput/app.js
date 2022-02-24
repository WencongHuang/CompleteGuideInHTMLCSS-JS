// Three ways to output text in JavaScript
// DOM = Document Object Model

// Usually for debug?
console.log("Hello World!");

// This one create a pop up
// same, but more practical
// window.alert("Hello World!");
// alert("Hello World!");

// This one actually write text on the website
document.write("Hello <em>World</em>!");

// HTML Tag can also be use in JavaScript
// <br> in HTML equal to document.write("<br>") in JavaScript;
// Or we can also apply CSS using JavaScript.
document.write("<h1 style='color:red;'>Text</h1>");

// Manipulating or Modifying the HTML element by selecting their ID.
document.getElementById("my_title").innerHTML = "Thank You!";
document.getElementById("my_paragraph").innerHTML = "The quick brown fox jump over the lazy dog.";

// querySelector uses CSS style to select the element.
document.querySelector("#orange").style.color = "#FFAB76";

// Variables - Dynamic
let x = "Hello World!";  // string
let age = 25; // number - Integer or Float
let yes_or_no = true; // Boolean - true or false

// use typeof(variable) to check the type of the variable
console.log(typeof(x));

// Storing HTML element into a Variable
let myFormTitle = document.querySelector("#my_form_title");
myFormTitle.innerHTML = "Web Development";
myFormTitle.style.color = "Green";
myFormTitle.style.background = "Yellow";

let myTextBox = document.querySelector("#my_textbox");
myTextBox.value = "Nothing";

let btn1 = document.querySelector("#my_btn");
btn1.addEventListener('click', function () {
  // alert("You clicked me!");
  myFormTitle.innerHTML = myTextBox.value;
});

let myTextBox2 = document.querySelector("#myTextbox2");
let btn2 = document.querySelector("#btn2");
let myList2 = document.querySelector("#myList2");

btn2.addEventListener('click', function() {
  let newElement2 = document.createElement("li");
  newElement2.innerHTML = myTextBox2.value; //doesn't work when it have more than two Textbox?
  myList2.appendChild(newElement2);
});