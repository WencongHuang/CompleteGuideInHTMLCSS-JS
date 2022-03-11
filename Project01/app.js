let ageInput = document.querySelector("#ageInput");
let calcBtn = document.querySelector("#calcBtn");
let resetBtn = document.querySelector("#resetBtn");
let displayResult = document.querySelector("#displayResult");
let result = document.querySelector("#result");
let refresh = document.querySelector(".refresh");

let myTimer;
let age;

calcBtn.addEventListener("click", function() {
  age = ageInput.value.trim();

  clearInterval(myTimer);

  if(age == "") {
    //display the message if user didn't enter anything.
    let alert = document.querySelector(".alert");
    alert.classList.add("active");

    //remove the message after 3s.
    myTimer = setInterval(function(){
      alert.classList.remove("active");
    }, 3000);

  }else if(isNaN(age) == true) {
    //display the message if user didn't enter a number.
    let alert2 = document.querySelector(".alert2");
    alert2.classList.add("active");

    //remove the message after 3s.
    myTimer = setInterval(function(){
      alert2.classList.remove("active");
    }, 3000);

  }else if(age >= 90) {
    //display the message if user enter a number that is greater than or equal to 90.
    let alert3 = document.querySelector(".alert3");
    alert3.classList.add("active");

    //remove the message after 3s.
    myTimer = setInterval(function(){
      alert3.classList.remove("active");
    }, 3000);

  }else{
    //display the message if user did enter a number.
    let answer = document.querySelector(".answer");
    answer.classList.add("active");
    // Formula according to Google starting from 90 years.
    result.innerHTML = seprateNumbersInComma(Math.floor((90 - age) * 52.179));

    //remove the message after 3s.
    myTimer = setInterval(function(){
      answer.classList.remove("active");
    }, 3000);

  }

  ageInput.value = "";
});

resetBtn.addEventListener("click", function() {
  refresh.click();
});

function seprateNumbersInComma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}