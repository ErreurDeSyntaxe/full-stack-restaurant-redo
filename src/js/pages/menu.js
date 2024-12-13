'use strict';

export const buildMenu = function () {
  const markup = `
    <div id="menu">
      <h2>Menu</h2>
      <div id="dishes">
        <h3>Dishes</h3>
        <img
          src=""
          class="wide-img"
          alt="Une autentique poutine québécoise"
        />
        <div class="menu-item">Petite Poutine: 10$</div>
        <div class="menu-item">Grosse Poutine: 15$</div>
        <br /><img
          src=""
          class="wide-img"
          alt="Une autentique tourtière québécoise"
        />
        <div class="menu-item">Petite Tourtière: 13$</div>
        <div class="menu-item">Grosse Tourtière: 18$</div>
        <br />
      </div>

      <div id="bevrages">
        <h3>Brevages</h3>
        <img
          src=""
          class="tall-img"
          alt="Un verre d'eau température ambiante"
        />
        <div class="menu-item">Eau: gratuite</div>
        <br /><img src="" class="tall-img" alt="A verre d'eau glacée" />
        <div class="menu-item">Eau froide: gratuite</div>
        <br /><img src="" class="tall-img" alt="Une tasse d'eau chaude" />
        <div class="menu-item">Eau Chaude: gratuite</div>
        <br />
      </div>

      <div id="extras">
        <h3>Extras</h3>
        <img
          src=""
          alt="Une portion de fromage en grains"
          class="square-img"
        />
        <div class="menu-item">Extra fromage: 5$</div>
        <br /><img
          src=""
          alt="Une portion de sauce poutine"
          class="square-img"
        />
        <div class="menu-item">Extra sauce: 4$</div>
        <br />
      </div>
    </div>`;
  document.getElementById('content').insertAdjacentHTML('beforebegin', markup);
};
