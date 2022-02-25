let numberBox = document.querySelector("#numberBox");
const increment = document.querySelector("#plus");
const decrement = document.querySelector("#minus");
const reset = document.querySelector("#reset");

increment.addEventListener("click", function() {
  numberBox.value++;
});

// decrement.addEventListener("click", function() {
//   numberBox.value--;
// });

// Line 14-16 is the same as line 20-22
// Arrow Fucntion
decrement.addEventListener("click", () => {
  numberBox.value--;
});

reset.addEventListener("click", function() {
  numberBox.value = 0;
});