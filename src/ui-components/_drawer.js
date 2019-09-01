export class SideDrawer {
  constructor() {
    this.trigger = document.querySelector('.drawer-toggle');
    this.drawer = document.querySelector('.drawer');
  }
  init() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.trigger.classList.toggle('active');
      this.drawer.classList.toggle('visible');
    });
  }
}

export default SideDrawer;