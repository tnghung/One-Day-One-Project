const circles = document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');

next.addEventListener('click', function () {
  progress.style.width = '35%';
  circles[1].classList.add('active');
  prev.attributes.removeNamedItem('disabled');
  prev.classList.add('active');
});

prev.addEventListener('click', function () {
  progress.style.width = '0%';
  circles[1].classList.remove('active');
  prev.classList.remove('active');
  prev.attributes.setNamedItem('disabled');
});
