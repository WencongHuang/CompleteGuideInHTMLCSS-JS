//Create Element and add data in list.
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


//Create Element and add data in table.
let nameTableBody = document.querySelector("#nameTableBody");
let submitBtn = document.querySelector("#submitBtn");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");

submitBtn.addEventListener("click", function() {
  if(firstName.value.trim() == "" || lastName.value.trim() == "") {
    alert("Please enter your first name and last name!");
  }else{
    let newRow = document.createElement("tr");

    let newFirstName = document.createElement("td");
    let newLastName = document.createElement("td");
    newFirstName.innerHTML = firstName.value;
    newLastName.innerHTML = lastName.value;
    //put the data in the row
    newRow.appendChild(newFirstName);
    newRow.appendChild(newLastName);
    //put the row in the table
    nameTableBody.appendChild(newRow);

    //reset the value so the user previous data gets clear.
    firstName.value = "";
    lastName.value = "";
  }
});