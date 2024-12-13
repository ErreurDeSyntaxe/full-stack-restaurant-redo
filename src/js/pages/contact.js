'use strict';

export const buildContact = function () {
  const markup = `
    <div id="contact">
      <h2>Nous Joindre</h2>
      <div id="contact-info">
        <span>courriel: chezxavier@quebec.qc</span>
        <span>tél: 1-514-123-4567</span>
        <span>Facebook: Chez Xavier</span>
      </div>
    </div>`;

  document.getElementById('content').insertAdjacentHTML('afterbegin', markup);
};
