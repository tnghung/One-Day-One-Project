const labels = document.querySelectorAll('.label');

labels.forEach((label) => {
  label.addEventListener('click', () => {
    removeAllActiveClass();
    label.classList.add('active');
  });
});

function removeAllActiveClass() {
  labels.forEach((label) => {
    label.classList.remove('active');
  });
}
