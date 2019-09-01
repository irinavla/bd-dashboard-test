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


const editPortletTrigger = document.querySelector('.edit-items');
const addPortletTrigger = document.querySelector('.add-item');
const toast = document.querySelector('.toast');

let showToast = () => {
  toast.classList.add('show');
  console.log('trigger rearrange portlets');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

let addPortlet = () => console.log('trigger Add portlet action');

editPortletTrigger.addEventListener('click', () => showToast());
addPortletTrigger.addEventListener('click', () => addPortlet());