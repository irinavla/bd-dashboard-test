import { Dropdown, Collapsible, SideDrawer } from './ui-components/utils';

// get all elements with 'dropdown' class and for each one create a new instance of the Dropdown class 
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create collapsible instances
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(collapsible => {
  const instance = new Collapsible(collapsible);
  instance.init();
})

// create side drawer instance
const sideDrawer = new SideDrawer();
sideDrawer.init();


const toastTrigger = document.querySelector('.edit-items');
const toast = document.querySelector('.toast');

let showToast = () => {
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

toastTrigger.addEventListener('click', () => showToast());