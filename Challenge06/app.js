// FizzBuzz Challenge - Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

let myList = document.querySelector("#myList");
// let myItems = [];

for(let i = 1; i <= 100; i++) {
  let newElement = document.createElement("li");

  if(i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    newElement.innerHTML = "FizzBuzz";
  } else if(i % 3 == 0) {
    console.log("Fizz");
    newElement.innerHTML = "Fizz";
  } else if(i % 5 == 0) {
    console.log("Buzz");
    newElement.innerHTML = "Buzz";
  } else {
    console.log(i);
    newElement.innerHTML = i;
  }

  myList.appendChild(newElement);
}