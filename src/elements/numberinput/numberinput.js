import Element from '../../core/zel.element';
export default class NumberInput extends Element {
  constructor(htmlElem, options) {
    super(htmlElem, options);
    this.name = 'test';
  }

  init() {
    console.log(`NumberInput.construct() ${this.htmlElem}`);
  }
}
