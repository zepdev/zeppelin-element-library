import Element from '../../core/zel.element';

export default class NumberInput extends Element {
  constructor(htmlElem, options) {
    super(htmlElem, options);
    this.name = 'NumberInputInstance';
  }

  //TODO: fix inheritance problem this.htmlElem
  init() {
    super.init();

    this.inputHtml = this.htmlElem.querySelector('input');

    this.steps = this.htmlElem.hasAttribute('data-zep-step')
      ? parseInt(this.htmlElem.getAttribute('data-zep-step'), 10)
      : 1;
    this.minimum = this.htmlElem.hasAttribute('data-zep-min')
      ? parseInt(this.htmlElem.getAttribute('data-zep-min'), 10)
      : 0;
    this.maximum = this.htmlElem.hasAttribute('data-zep-max')
      ? parseInt(this.htmlElem.getAttribute('data-zep-max'), 10)
      : null;
    this.currentNumber = this.inputHtml.value
      ? parseInt(this.inputHtml.value, 10)
      : 1;
  }
}
