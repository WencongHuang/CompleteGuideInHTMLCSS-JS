let myTextBox = document.querySelector("#myTextBox");
let myBtn = document.querySelector("#myBtn");
let myList = document.querySelector("#myList");

myBtn.addEventListener('click', function() {
  let myElement = document.createElement("li");
  myElement.innerHTML = myTextBox.value;
  myList.appendChild(myElement);
});