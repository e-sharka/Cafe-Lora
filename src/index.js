import './style.css';
import { Drink } from './Drink/index.js';

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

/*const orderBtn = document.querySelector('.order-btn');
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
});*/

const drink = document.querySelector('.drink__info');
/*drink.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
drink.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
drink.innerHTML += Layer({ color: '#613916', label: 'espresso' });

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

for (let i = 0; i < layers.length; i += 1) {
  drink.innerHTML += Layer(layers[i]);
}*/

const romano = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

document.querySelector('.drinks-list').appendChild(Drink(romano));
