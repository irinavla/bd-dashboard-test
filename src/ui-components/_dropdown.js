class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector('.dropdown-trigger');
  }
  init() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.container.classList.toggle('active');
    });
  }
}

export default Dropdown;