const circles = document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');

let currentActiveIndex = 1;
next.addEventListener('click', function () {
  currentActiveIndex++;
  if (currentActiveIndex >= circles.length) {
    currentActiveIndex = circles.length;
    next.disabled = true;
  }
  update();
});

prev.addEventListener('click', function () {
  currentActiveIndex--;
  if (currentActiveIndex <= 1) {
    currentActiveIndex = 1;
    prev.disabled = true;
    prev.classList.remove('active');
  }

  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (currentActiveIndex > i) {
      circle.classList.add('active');
      prev.classList.add('active');
      prev.disabled = false;
    } else {
      circle.classList.remove('active');
      next.classList.add('active');
      next.disabled = false;
    }
    progress.style.width = ((currentActiveIndex - 1) / (circles.length - 1)) * 100 + '%';
  });
}

const obj = {
  name: 'hung',
  age: 18,
};

for (const val of Object.keys(obj)) {
  val = {
    value: obj.val,
  };
  console.log();
}
