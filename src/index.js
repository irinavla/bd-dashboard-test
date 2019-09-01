import { Dropdown, Collapsible, SideDrawer, Pagination } from './ui-components/utils';

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

// add actions for ADD & REARRANGE PORTLETS
const editPortletTrigger = document.querySelector('.edit-items');
const addPortletTrigger = document.querySelector('.add-item');
const toast = document.querySelector('.toast');

let showToast = () => {
  toast.classList.add('show');
  console.log('trigger rearrange portlets');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

let addPortlet = () => console.log('trigger Add portlet action');

editPortletTrigger.addEventListener('click', () => showToast());
addPortletTrigger.addEventListener('click', () => addPortlet());


// create pagination instance
const pagination = new Pagination(document.querySelector('.pagination'));
pagination.init();


// get portlets footer buttons
let portlets = document.querySelectorAll('.portlet');

// for each portlet item, target action and footer buttons, then iterate over each item and add an event listener
portlets.forEach((portlet, index) => {
  let actions = portlet.querySelectorAll('.actions > button');
  let footerBtns = portlet.querySelectorAll('.portlet-footer > button');

  actions.forEach((action, i) => {
    action.addEventListener('click', () => console.log(`clicked action ${i} from portlet ${index}`));
  });

  footerBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => console.log(`clicked footer button ${i} from portlet ${index}`));
  });
});

const loader = document.querySelector('.loader');

setTimeout(() => {
  loader.classList.add('hide');
}, 1000);