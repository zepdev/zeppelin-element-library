export default class Element {
  constructor(htmlElem, options = {}) {
    this.options = options;
    this.htmlElem = htmlElem;

    this.init();
  }

  init() {
    this.addListeners();
    return true;
  }

  addListeners() {
    throw new Error('should not be called from parent!');
  }
}
