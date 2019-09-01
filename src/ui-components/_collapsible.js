export class Collapsible {
  constructor(element) {
    this.trigger = element;
    this.content = element.nextElementSibling;
  }
  init() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.trigger.classList.toggle('active');
      if (this.content.style.maxHeight) {
        this.content.style.maxHeight = null;
      } else {
        this.content.style.maxHeight = this.content.scrollHeight + "px";
      }
    });
  }
}

export default Collapsible;