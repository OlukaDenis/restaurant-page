const home = () => {
  const items = document.createElement('div');
  items.id = 'homepage';
  items.classList.add('homepage');
  
  const container = document.createElement('div');
  container.classList.add('home-container');
  container.innerHTML = `
    <h1> Denny's Restaurant </h1>
    <p> Eat, Drink </p>
    <p> - Be Merry </p>
  `
  items.appendChild(container);

  return items;
};

export default home;