let nextSection1 = document.querySelector("#nextSection1");
let nextSection2 = document.querySelector("#nextSection2");
let nextSection3 = document.querySelector("#nextSection3");
let nextSection4 = document.querySelector("#nextSection4");
let nextSection5 = document.querySelector("#nextSection5");
let nextSection6 = document.querySelector("#nextSection6");

let arrow1 = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
let arrow3 = document.querySelector("#arrow3");
let arrow4 = document.querySelector("#arrow4");
let arrow5 = document.querySelector("#arrow5");
let arrow6 = document.querySelector("#arrow6");

arrow1.addEventListener("click", function() {
  nextSection1.click();
});

arrow2.addEventListener("click", function() {
  nextSection2.click();
});

arrow3.addEventListener("click", function() {
  nextSection3.click();
});

arrow4.addEventListener("click", function() {
  nextSection4.click();
});

arrow5.addEventListener("click", function() {
  nextSection5.click();
});

arrow6.addEventListener("click", function() {
  nextSection6.click();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});