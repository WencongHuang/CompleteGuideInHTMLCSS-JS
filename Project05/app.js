const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const wrap = document.querySelectorAll('.wrap');

openBtn.addEventListener('click', function() {
  for(let i=0; i < wrap.length; i++) {
    wrap[i].classList.add('active');
  }
});

closeBtn.addEventListener('click', function() {
  for(let i=0; i < wrap.length; i++) {
    wrap[i].classList.remove('active');
  }
});