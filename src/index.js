import { Dropdown, Collapsible } from './ui-components/utils';

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