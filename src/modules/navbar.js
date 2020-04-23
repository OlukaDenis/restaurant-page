const navBar = () => {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'nav');
  const logo = document.createElement('p');
  logo.setAttribute('class', 'logo');
  logo.innerHTML = `<a id="logo" href="#home"> Denny's </a>`;
  const list = document.createElement('ul');
  list.innerHTML = `
  <li id="home" class="nav-item">
    <i class="fas fa-home"></i>
    <span>
      <a href="#home">Home</a>
    </span>
  </li>
  <li id="menu" class="nav-item">
    <i class="fas fa-utensils"></i>
    <span>
      <a href="#menu">Menu</a>
    </span>
  </li>
  <li id="contact" class="nav-item">
    <i class="fas fa-headset"></i>
    <span>
      <a href="#contact">Contact</a>
    </span>
  </li>
  `;
  nav.appendChild(logo);
  nav.appendChild(list);
  return nav;
};

export default navBar;
