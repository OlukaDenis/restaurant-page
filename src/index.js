import './index.css';
import home from './modules/home';
import contact from './modules/contact';
import menu from './modules/menu';
import navBar from './modules/navbar';
/* eslint-disable */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
/* eslint-enable */

const content = document.getElementById('content');
const container = document.createElement('div');
container.setAttribute('id', 'container');

const start = () => {
  content.appendChild(navBar());
  content.appendChild(container);
  container.appendChild(home());
};
start();

const homePage = document.getElementById('home');
const menuPage = document.getElementById('menu');
const contactPage = document.getElementById('contact');
const logo = document.getElementById('logo');

const clickHome = () => {
  container.innerHTML = '';
  container.appendChild(home());
  homePage.classList.add('active');
  menuPage.classList.remove('active');
  contactPage.classList.remove('active');
};
clickHome();

homePage.addEventListener('click', () => {
  clickHome();
});

logo.addEventListener('click', () => {
  clickHome();
});

menuPage.addEventListener('click', () => {
  container.innerHTML = '';
  container.appendChild(menu());
  menuPage.classList.add('active');
  homePage.classList.remove('active');
  contactPage.classList.remove('active');
});

contactPage.addEventListener('click', () => {
  container.innerHTML = '';
  container.appendChild(contact());
  homePage.classList.remove('active');
  menuPage.classList.remove('active');
  contactPage.classList.add('active');
});