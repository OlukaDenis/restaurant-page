import menuList from '../data/menu_list';
const mealFetch = fetch('./data/menu.json');

const mealList = (meal) => {
  const menuRow = document.createElement('div');
  menuRow.setAttribute('class', 'meal-items');
  menuRow.innerHTML = `
    <div> 
      <p> ${meal.name}</p>
    </div>
    <p> $ ${meal.price} </p>
  `;
  return menuRow;
};

const menuData = (element) => {
  const content = document.createElement('div');
  content.setAttribute('class', 'meal');
  content.innerHTML = `
  <h5> 
    <i class="${element.icon}"></i> 
    <span> ${element.type} </span> 
  </h5>
  `;
  element.items.forEach((meal) => {
    content.appendChild(mealList(meal));
  });
  return content;
};

const menu = () => {
  const items = document.createElement('div');
  items.id = 'menupage';
  items.classList.add('menupage');
  const container = document.createElement('div');
  container.classList.add('menu-container');
  container.innerHTML = `
    <h3> Our Menu </h3>
  `;
  const content = document.createElement('div');
  content.setAttribute('class', 'menus card');

  mealFetch.then(response => response.json())
    .then(mealData => mealData.data)
    .then(meals => {
      meals.forEach((meal) => {
        content.appendChild(menuData(meal));
      });
    });

  container.appendChild(content);
  items.appendChild(container);
  return items;
};

export default menu;
