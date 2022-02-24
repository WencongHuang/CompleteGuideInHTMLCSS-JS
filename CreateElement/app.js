let myTextBox = document.querySelector("#myTextBox");
let myBtn = document.querySelector("#myBtn");
let myList = document.querySelector("#myList");

myBtn.addEventListener('click', function() {
  if(myTextBox.value.trim() != "") {
    let myElement = document.createElement("li");
    // check out String.toUpperCase() or String.toLowerCase()
    myElement.innerHTML = myTextBox.value.toUpperCase();
    myList.appendChild(myElement);
  }
  
});