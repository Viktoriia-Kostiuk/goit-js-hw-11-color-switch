const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const bodyEl = document.querySelector('body');
const startEl = document.querySelector('button[data-action="start"]');
const stopEl = document.querySelector('button[data-action="stop"]');

let changeColor = null;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startEl.addEventListener('click', makeColor);

function makeColor() {
  changeColor = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);

  startEl.disabled = true;
}


stopEl.addEventListener('click', stopColor);

function stopColor() {
  clearInterval(changeColor);
  startEl.disabled = false;
}
  
