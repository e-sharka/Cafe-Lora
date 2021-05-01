import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = ({ id, name, ordered, layers }) => {
  let html = '';
  for (let i = 0; i < layers.length; i += 1) {
    html += Layer(layers[i]);
  }
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="/assets/cups/${id}.png" />
      </div>
      <div class="drink__info">
        <h3 >${name}</h3>
        ${html}
      </div> 
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>
  `;

  const orderBtn = drinkElm.querySelector('.order-btn');
  const cup = drinkElm.querySelector('.drink__cup');

  orderBtn.addEventListener('click', () => {
    if (!ordered) {
      orderBtn.textContent = 'Zrušit';
      cup.classList.add('drink__cup--selected');
      ordered = true;
    } else {
      orderBtn.textContent = 'Objednat';
      cup.classList.remove('drink__cup--selected');
      ordered = false;
    }
  });

  

  return drinkElm;
};
