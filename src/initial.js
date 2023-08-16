export default function initialComponent() {
    const initialContainerEl = document.createElement('div');
    const titleEl = document.createElement('h1');
    const descriptionEl = document.createElement('p');
    const menuEl = document.createElement('div');
    const btnHomeEl = document.createElement('button');
    const btnMenuEl = document.createElement('button');
    const btnContactEl = document.createElement('button');
    
    menuEl.classList.add('menu');
    descriptionEl.classList.add('description');

    titleEl.textContent = 'Restaurant La Crepes';
    descriptionEl.textContent = 'True gourmet delight with simple crepes...';
    btnHomeEl.textContent = 'Home';
    btnMenuEl.textContent = 'Menu';
    btnContactEl.textContent = 'Contacts';

    initialContainerEl.append(titleEl);
    initialContainerEl.append(descriptionEl);
    initialContainerEl.append(menuEl);
    menuEl.append(btnHomeEl);
    menuEl.append(btnMenuEl);
    menuEl.append(btnContactEl);
    
    return initialContainerEl
}

function welcomeEl() {
    const welcomeEl = document.createElement('h2');
    welcomeEl.classList.add('welcome-text');
    welcomeEl.textContent = 'Welcome';
    return welcomeEl;
}

export {welcomeEl}