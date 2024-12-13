'use strict';

import poutine from '../../img/poutine.jpg';
import tourtiere from '../../img/tourtiere.jpg';
import justWater from '../../img/just-water.jpg';
import iceWater from '../../img/ice-water.jpg';
import warmWater from '../../img/warm-water.jpg';
import cheese from '../../img/extra-cheese.jpg';
import sauce from '../../img/extra-gravy.jpg';

const imgPoutine = document.createElement('img');
const imgTourtier = document.createElement('img');
const imgJustWater = document.createElement('img');
const imgIceWater = document.createElement('img');
const imgWarmWater = document.createElement('img');
const imgCheese = document.createElement('img');
const imgSauce = document.createElement('img');

imgPoutine.src = poutine;
imgTourtier.src = tourtiere;
imgJustWater.src = justWater;
imgIceWater.src = iceWater;
imgWarmWater.src = warmWater;
imgCheese.src = cheese;
imgSauce.src = sauce;

export const buildMenu = function () {
  const markup = `
    <div id="menu">
      <h2>Menu</h2>
      <div id="dishes">
        <h3>Dishes</h3>
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

      <div id="bevrages">
        <h3>Brevages</h3>
        <img
          src="${justWater}"
          class="tall-img"
          alt="Un verre d'eau température ambiante"
        />
        <div class="menu-item">Eau: gratuite</div>
        <img 
          src="${iceWater}" 
          class="tall-img" 
          alt="A verre d'eau glacée"
        />
        <div class="menu-item">Eau froide: gratuite</div>
        <img 
          src="${warmWater}" 
          class="tall-img" 
          alt="Une tasse d'eau chaude"
        />
        <div class="menu-item">Eau Chaude: gratuite</div>
        
      </div>

      <div id="extras">
        <h3>Extras</h3>
        <img
          src="${cheese}"
          alt="Une portion de fromage en grains"
          class="square-img"
        />
        <div class="menu-item">Extra fromage: 5$</div>
        <img
          src="${sauce}"
          alt="Une portion de sauce poutine"
          class="square-img"
        />
        <div class="menu-item">Extra sauce: 4$</div>
        
      </div>
    </div>`;
  document.getElementById('content').insertAdjacentHTML('beforebegin', markup);
};
