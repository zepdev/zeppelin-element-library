export default class Element {
  constructor(htmlElem, options = {}) {
    this.options = options;
    this.htmlElem = htmlElem;

    this.init();
  }

  init() {
    console.log(`construct() ${this.htmlElem}`);
  }
}
