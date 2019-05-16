import Element from '../../core/zel.element';

export default class NumberInput extends Element {
  constructor(htmlElem, options) {
    super(htmlElem, options);
    this.name = 'NumberInputInstance';
  }

  //TODO: fix inheritance problem this.htmlElem
  init() {
    console.log(`super.htmlElem ${super.htmlElem}`);
    super.init();
    console.log(`instance.htmlElem ${Object.keys(this).map(n => n)}`);
    return;

    this.inputHtml = this.htmElem.querySelectorAll('.zep-input');

    this.steps = this.htmElem.hasAttribute('data-zep-step')
      ? parseInt(this.htmElem.getAttribute('data-zep-step'), 10)
      : 1;
    this.minimum = this.htmElem.hasAttribute('data-zep-min')
      ? parseInt(this.htmElem.getAttribute('data-zep-min'), 10)
      : 0;
    this.maximum = this.htmElem.hasAttribute('data-zep-max')
      ? parseInt(this.htmElem.getAttribute('data-zep-max'), 10)
      : null;
    this.currentNumber = this.inputHtml.value
      ? parseInt(this.inputHtml.value, 10)
      : 1;
  }
}
