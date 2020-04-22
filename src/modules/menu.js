import menuList from '../data/menu_list';

const mealList = (meal) => {
  const menuRow = document.createElement('div');
  menuRow.setAttribute('class', 'meal-items');
  menuRow.innerHTML
  = `
    <div> 
      <p> ${meal.name}</p>
    </div>
    <p> $ ${meal.price} </p>
  `
  return menuRow;
};

const menuData = (element) => {
  const content = document.createElement('div');
  content.setAttribute('class', 'meal');
  content.innerHTML = `<h5> ${element.type} </h5>`;  
  element.items.forEach( meal => {
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
  `
  const content = document.createElement('div');
  content.setAttribute('class', 'menus card');

  menuList().forEach( element => {  
    content.appendChild(menuData(element));
  });
  
  container.appendChild(content);
  items.appendChild(container);
  return items;
};

export default menu;