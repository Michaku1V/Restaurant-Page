import './style.css';
import initialComponent from "./initial";
import { welcomeEl } from './initial';
import  menuComponent  from './menu';
import contactsComponent from './contacts';

const contentEl = document.querySelector('#content');
const menu = menuComponent();
const initial = initialComponent();
const welcome = welcomeEl();
const contacts = contactsComponent();
contentEl.append(initial);

const buttonsEl = document.querySelectorAll('button');
buttonsEl.forEach(btn => btn.addEventListener('click', custom))

function custom(e) {
    if (e.target.textContent === 'Home') {
        contentEl.innerHTML = '';
        contentEl.append(initial);
        contentEl.append(welcome);
    }
    if (e.target.textContent === 'Menu') {
        contentEl.innerHTML = '';
        contentEl.append(initial);
        contentEl.append(menu);
    }
    if (e.target.textContent === 'Contacts') {
        contentEl.innerHTML = '';
        contentEl.append(initial);
        contentEl.append(contacts);
    }
}