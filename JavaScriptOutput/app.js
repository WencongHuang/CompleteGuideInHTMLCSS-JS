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

//Variable
let x = "Hello World!";