class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector('.dropdown-trigger');
    this.content = container.querySelector('.dropdown-content');
  }
  init() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.content.classList.toggle('active');
      this.trigger.classList.toggle('active');
    });
  }
}

export default Dropdown;