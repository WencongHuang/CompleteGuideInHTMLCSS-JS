let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let myTimer;

let mySeconds = 0;
let myMinutes = 0;
// let myHour = 0;

// uncomment the lines below for Solution 2
stopBtn.disabled = true;
resetBtn.disabled = true;

/*
  There is a bug where if the user click the start button multiply times, the timer will count faster. That is because we are not clearing the previous interval on the function; meaning if you click the button 3 times, you are running 3 intervals.

  Solution 1 - Add clearInterval() at the beginning of the function.

  Solution 2 - Disable buttons for the user and control the behavior of our program.
*/
startBtn.addEventListener("click", function() {
  // uncomment the lines below for Solution 2
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  // uncomment the line below for Solution 1
  // clearInterval(myTimer);

  myTimer = setInterval(function(){
    //Starting counting seconds
    mySeconds++;
    if(mySeconds < 10){
      seconds.innerHTML = "0" + mySeconds
    }else if(mySeconds == 60) {
      myMinutes++;
      seconds.innerHTML = "00";
      mySeconds = 0;
    }else{
      seconds.innerHTML = mySeconds;
    }

    //Starting counting minutes
    if(myMinutes < 10){
      minutes.innerHTML = "0" + myMinutes
    }else if(myMinutes == 60) {
      //myHour++;
      minutes.innerHTML = "00";
      myMinutes = 0;
      alert("One hour passed!");
      // clearInterval(myTimer);
    }else{
      minutes.innerHTML = myMinutes;
    }
    
  }, 1000);
  //1000 = 1 second
});

stopBtn.addEventListener("click", function() {
  // uncomment the line below for Solution 2
  startBtn.disabled = false;

  clearInterval(myTimer);
});

resetBtn.addEventListener("click", function() {
  // uncomment the lines below for Solution 2
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  clearInterval(myTimer);

  myMinutes = 0;
  mySeconds = 0;
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
});