import '../css/style.css';
import { buildContact } from './pages/contact';
import { buildHome } from './pages/home';
import { buildMenu } from './pages/menu';

buildHome();
buildMenu();
buildContact();

const activateTabs = function () {
  const tabHome = document.querySelector('.section-home');
  const tabMenu = document.querySelector('.section-menu');
  const tabContact = document.querySelector('.section-contact');
  const tabContainer = document.querySelector('.tabs');

  tabContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs')) return;

    const section = e.target.id.slice(0, -3);
    tabHome.classList.add('hidden');
    tabMenu.classList.add('hidden');
    tabContact.classList.add('hidden');
    document.querySelector(`.section-${section}`).classList.remove('hidden');
  });
};
activateTabs();
