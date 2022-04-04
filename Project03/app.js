let myKeys = document.querySelectorAll('.key');

function playSound(key) {
  switch (key) {
    case 'C':
      var sound = new Audio("doremi/do.mp3");
      sound.play();
      break;

    case 'D':
      var sound = new Audio("doremi/re.mp3");
      sound.play();
      break;

    case 'E':
      var sound = new Audio("doremi/mi.mp3");
      sound.play();
      break;

    case 'F':
      var sound = new Audio("doremi/fa.mp3");
      sound.play();
      break;

    case 'G':
      var sound = new Audio("doremi/sol.mp3");
      sound.play();
      break;

    case 'A':
      var sound = new Audio("doremi/la.mp3");
      sound.play();
      break;

    case 'B':
      var sound = new Audio("doremi/ti.mp3");
      sound.play();
      break;

    case 'K':
      var sound = new Audio("doremi/doh.mp3");
      sound.play();
      break;
      
    default:
      console.log(key);
  }
}

for(let i = 0; i < myKeys.length; i++) {
  myKeys[i].addEventListener('click', function() {
    playSound(myKeys[i].innerHTML.toUpperCase());
  });
}

document.addEventListener('keydown', function(btn) {
  playSound(btn.key.toUpperCase());
  let pressedKey = btn.key.toUpperCase();

  for(let i = 0; i < myKeys.length; i++) {
    myKeys[i].classList.remove('activated');
  }

  for(let i = 0; i < myKeys.length; i++) {
    if(pressedKey == myKeys[i].innerHTML.toUpperCase()) {
      myKeys[i].classList.add('activated');
    }
  }
});