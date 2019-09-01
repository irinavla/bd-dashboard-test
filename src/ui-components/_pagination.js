export class Pagination {
  constructor(container) {

    this.prevPage = container.querySelector('.nav-left');
    this.nextPage = container.querySelector('.nav-right');
  }
  init() {
    this.prevPage.addEventListener('click', () => {
      console.log('clicked prev page trigger')
    });

    this.nextPage.addEventListener('click', () => {
      console.log('clicked next page trigger')
    });
  }
}

export default Pagination;