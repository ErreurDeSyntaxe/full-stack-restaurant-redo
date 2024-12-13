'use strict';

import poutine from '../../img/poutine.jpg';
import tourtiere from '../../img/tourtiere.jpg';

const imgPoutine = document.createElement('img');
const imgTourtier = document.createElement('img');

imgPoutine.src = poutine;
imgTourtier.src = tourtiere;

export const buildMenu = function () {
  const markup = `
    <div id="menu" class="section section-menu hidden">
      <h2 class="header-secondary">Menu</h2>
      <div id="dishes">
        <h3 class="header-tertiary">Dishes</h3>
        <img
          src="${poutine}"
          class="wide-img"
          alt="Une autentique poutine québécoise"
        />
        <div class="menu-item">Petite Poutine: 10$</div>
        <div class="menu-item">Grosse Poutine: 15$</div>
        <img
          src="${tourtiere}"
          class="wide-img"
          alt="Une autentique tourtière québécoise"
        />
        <div class="menu-item">Petite Tourtière: 13$</div>
        <div class="menu-item">Grosse Tourtière: 18$</div>
        
      </div>
    </div>`;
  document.getElementById('content').insertAdjacentHTML('beforebegin', markup);
};
