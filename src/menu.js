import CrepeStrawberry from './images/crepe-strawberry.jpg'
import CrepeChocolate from './images/crepe-chocolate.jpg'
import CrepeBlueberry from './images/crepe-blueberry.jpg'

export default function menuComponent() {
    const menuContainerEl = document.createElement('div');
    const crepeStrawberryContainerEl = document.createElement('div');
    const crepeChocolateContainerEl = document.createElement('div');
    const crepeBlueberryContainerEl = document.createElement('div');
    const crepeStrawberryTextEl = document.createElement('p');
    const crepeChocolateTextEl = document.createElement('p');
    const crepeBlueberryTextEl = document.createElement('p');
    const crepeStrawberry = new Image();
    const crepeChocolate = new Image();
    const crepeBlueberry = new Image();
    crepeStrawberry.src = CrepeStrawberry;
    crepeChocolate.src = CrepeChocolate;
    crepeBlueberry.src = CrepeBlueberry;
    crepeStrawberryTextEl.textContent = 'Strawberry Crepe';
    crepeChocolateTextEl.textContent = 'Chocolate Crepe';
    crepeBlueberryTextEl.textContent = 'Blueberry Crepe';
    menuContainerEl.classList.add('menu-container')
    crepeStrawberry.classList.add('menu-img');
    crepeChocolate.classList.add('menu-img');
    crepeBlueberry.classList.add('menu-img');
    menuContainerEl.append(crepeStrawberryContainerEl);
    crepeStrawberryContainerEl.append(crepeStrawberry);
    crepeStrawberryContainerEl.append(crepeStrawberryTextEl);
    menuContainerEl.append(crepeChocolateContainerEl);
    crepeChocolateContainerEl.append(crepeChocolate);
    crepeChocolateContainerEl.append(crepeChocolateTextEl);
    menuContainerEl.append(crepeBlueberryContainerEl);
    crepeBlueberryContainerEl.append(crepeBlueberry);
    crepeBlueberryContainerEl.append(crepeBlueberryTextEl);

    return menuContainerEl
}

