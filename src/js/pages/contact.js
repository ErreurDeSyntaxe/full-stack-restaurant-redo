'use strict';

export const buildContact = function () {
  const markup = `
    <div id="contact" class="section section-contact">
      <h2 class="header-secondary">Nous Joindre</h2>
      <div id="contact-info">
        <div>courriel: chezxavier@quebec.qc</div>
        <div>tél: 1-514-123-4567</div>
        <div>Facebook: Chez Xavier</div>
      </div>
    </div>`;

  document.getElementById('content').insertAdjacentHTML('afterbegin', markup);
};
