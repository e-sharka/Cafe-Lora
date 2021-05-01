import './style.css';

const navigationBtn = document.querySelector('.nav-btn');
const navigationElm = document.querySelector('nav');
navigationBtn.addEventListener('click', () => {
  navigationElm.classList.toggle('nav-closed');
});

document.querySelectorAll('.nav-link').forEach((item) => {
  item.addEventListener('click', () => {
    navigationElm.classList.add('nav-closed');
  });
});

const orderBtn = document.querySelector('.order-btn');
const cup = document.querySelector('.drink__cup');
let ordered = false;

orderBtn.addEventListener('click', () => {
  if (ordered) {
    orderBtn.textContent = 'Objednat';
    cup.classList.remove('drink__cup--selected');
    ordered = false;
  } else {
    orderBtn.textContent = 'Zrušit';
    cup.classList.add('drink__cup--selected');
    ordered = true;
  }
});
