export default class Element {
  constructor(htmlElem, options = {}) {
    this.options = options;
    this.htmlElem = htmlElem;

    if (this.htmlElem.dataset.zepInit === 'false') {
      return;
    }

    this.init();
  }

  init() {
    console.log(`construct() ${this.htmlElem}`);
  }
}
