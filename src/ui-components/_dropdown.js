class Dropdown {
  constructor(container) {
    this.trigger = container.querySelector('.dropdown-trigger');
    this.content = container.querySelector('.dropdown-content');
  }
  init() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.content.classList.toggle('active');
      this.trigger.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (e.target.closest('.dropdown-trigger')) {
        return;
      }

      this.content.classList.remove('active');
      this.trigger.classList.remove('active');
    });
  }
}

export default Dropdown;