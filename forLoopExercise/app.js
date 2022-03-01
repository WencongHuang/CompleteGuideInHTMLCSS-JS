// 1. Generate numbers from one to ten using console.log if the number is even display the text "even" else just console.log the number.

// 2. Solve question number one but this time generate the data in a browser rather than in console.

// 3. Generate numbers from one to 20, display the text "JAVASCRIPT" if the number is a multiple of 3.

// Line 8-29 is for exercise 1 and 2.
let container = document.querySelector(".container");
let items = [];

for(let i = 1; i <= 10; i++) {
  let new_items = document.createElement("li");
  // if(i % 2 == 0) {
  //   new_items.innerHTML = "even";
  // }else{
  //   new_items.innerHTML = i;
  // }
  (i % 2 == 0) ? (new_items.innerHTML = "even") : (new_items.innerHTML = i);
  container.appendChild(new_items);

  // Array method - Check the following link.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  items.push(i);

  // if(i % 2 == 0) {
  //   console.log("even");
  // }else{
  //   console.log(i);
  // }
  (i % 2 == 0) ? (console.log("even")) : (console.log(i));
}

// Line 32-39 is for exercise 3.
for(let j = 1; j <= 20; j++) {
  let new_items = document.createElement("li");
  if (j % 3 == 0){
    console.log("JAVASCRIPT");
    new_items.innerHTML = "JAVASCRIPT";
    container.appendChild(new_items);
  }
}