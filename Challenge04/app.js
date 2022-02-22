let page_color = document.querySelector("#my-page");
// need to fill the whole page and add some CSS

let btn_red = document.querySelector("#btn-red");
btn_red.addEventListener('click', function () {
  page_color.style.background = '#e94560';
});

let btn_yellow = document.querySelector("#btn-yellow");
btn_yellow.addEventListener('click', function () {
  page_color.style.background = '#ffd66b';
});

let btn_blue = document.querySelector("#btn-blue");
btn_blue.addEventListener('click', function () {
  page_color.style.background = '#0278ae';
});

let btn_green = document.querySelector("#btn-green");
btn_green.addEventListener('click', function () {
  page_color.style.background = '#61b15a';
});

let btn_reset = document.querySelector("#btn-reset");
btn_reset.addEventListener('click', function () {
  page_color.style.background = '#fff';
});