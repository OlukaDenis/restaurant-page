const contact = () => {
  const items = document.createElement('div');

  items.id = 'contactpage';
  items.classList.add('contactpage');

  const container = document.createElement('div');
  container.classList.add('contact-container');

  container.innerHTML = `
    <h3> Contact Us </h3>
  `
  items.appendChild(container);

  return items;
}

export default contact;