import './index.css';
import home from './modules/home';

const content = document.getElementById('content');

const render = () => {
  content.innerHTML = '';
  content.appendChild(home());
};

render();