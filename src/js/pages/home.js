'use strict';

import restaurant from '../../img/restaurant.jpg';
const imgRestaurant = document.createElement('img');
imgRestaurant.src = restaurant;

export const buildHome = function () {
  const markup = `
    <div id="home" class="section section-home">
      <h2 class="header-secondary">Accueil</h2>
      <p class="intro">
        Chez Xavier est un restaurant fictif créé dans le but de pratiquer les
        notions de Webpack, JavaScript, CSS et HTML apprises en ligne durant
        l'année 2024.
      </p>

      <img
        src="${restaurant}"
        class="wide-img"
        alt="Un restaurant québécois pendant l'automne (généré par MidJourney)"
      />

      <div class="hours">
        <h3 class="header-tertiary">Heures d'ouverture</h3>
        <div>Lundi: <span class="text-bold">fermé</span></div>
        <div>Mardi: <span class="text-bold">fermé</span></div>
        <div>Mercredi: <span class="text-bold">13 - 21</span></div>
        <div>Jeudi: <span class="text-bold">13 - 21</span></div>
        <div>Vendredi: <span class="text-bold">13 - 21</span></div>
        <div>Samedi: <span class="text-bold">13 - 22</span></div>
        <div>Dimanch: <span class="text-bold">13 - 22</span></div>
      </div>

      <div class="location">
        <h3 class="header-tertiary">Adresse</h3>
        <span>123, Boulevard René-Lévesque, Montréal, Québec, Canada</span>
      </div>
    </div>`;

  document.getElementById('content').insertAdjacentHTML('beforebegin', markup);
};
