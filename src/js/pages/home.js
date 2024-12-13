'use strict';

import restaurant from '../../img/restaurant.jpg';
const imgRestaurant = document.createElement('img');
imgRestaurant.src = restaurant;

export const buildHome = function () {
  const markup = `
    <h2>Accueil</h2>
    <div id="home">
      <p id="intro">
        Chez Xavier est un restaurant fictif créé dans le but de pratiquer les
        notions de Webpack, JavaScript, CSS et HTML apprises en ligne durant
        l'année 2024.
      </p>

      <img
        src="${restaurant}"
        class="wide-img"
        alt="Un restaurant québécois pendant l'automne (généré par MidJourney)"
      />

      <div id="hours">
        <h3>Heures d'ouverture</h3>
        <div>Lundi: fermé</div>
        <div>Mardi: fermé</div>
        <div>Mercredi: 13 - 21</div>
        <div>Jeudi: 13 - 21</div>
        <div>Vendredi: 13 - 21</div>
        <div>Samedi: 13 - 22</div>
        <div>Dimanch: 13 - 22</div>
      </div>
      <div id="location">
        <h3>Adresse</h3>
        <span>123, Boulevard René-Lévesque, Montréal, Québec, Canada</span>
      </div>
    </div>`;
  // document.getElementById('content').innerHTML += markup;
  document.getElementById('content').insertAdjacentHTML('beforebegin', markup);
};
