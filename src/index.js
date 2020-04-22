import './index.css';
import home from './modules/home';
import contact from './modules/contact';
import menu from './modules/menu';
import '~@fortawesome/fontawesome-free/js/fontawesome';
import '~@fortawesome/fontawesome-free/js/solid';
import '~@fortawesome/fontawesome-free/js/regular';
import '~@fortawesome/fontawesome-free/js/brands';

const content = document.getElementById('content');
const homePage = document.getElementById('home');
const menuPage = document.getElementById('menu');
const contactPage = document.getElementById('contact');

const render = () => {
  content.innerHTML = '';
  content.appendChild(home());
  homePage.classList.add('active');
};
render();

homePage.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(home());
  homePage.classList.add('active');
  menuPage.classList.remove('active');
  contactPage.classList.remove('active');
});

menuPage.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menu());
  menuPage.classList.add('active');
  homePage.classList.remove('active');
  contactPage.classList.remove('active');
});

contactPage.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contact());
  homePage.classList.remove('active');
  menuPage.classList.remove('active');
  contactPage.classList.add('active');
});