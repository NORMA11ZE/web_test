const range = document.getElementById('range');
const percentage = document.querySelector('.progress__percentage');

range.addEventListener('input', () => {
  const value = range.value;
  percentage.textContent = `${value} %`;
});