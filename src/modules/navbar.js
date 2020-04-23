const navBar = () => {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'nav');
  const logo = document.createElement('p');
  logo.setAttribute('class', 'logo');
  logo.innerHTML = `Denny's`;
  const list = document.createElement('ul');
  list.innerHTML = `
  <li id="home" class="nav-item">
    <i class="fas fa-home"></i>
    <span>
      <a href="#">Home</a>
    </span>
  </li>
  <li id="menu" class="nav-item">
    <i class="fas fa-utensils"></i>
    <span>
      <a href="#">Menu</a>
    </span>
  </li>
  <li id="contact" class="nav-item">
    <i class="fas fa-headset"></i>
    <span>
      <a href="#">Contact</a>
    </span>
  </li>
  `;
  nav.appendChild(logo);
  nav.appendChild(list);
  return nav;
};

export default navBar;
