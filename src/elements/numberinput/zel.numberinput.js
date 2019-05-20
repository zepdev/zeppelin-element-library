import Element from '../../core/zel.element';

export default class NumberInput extends Element {
  constructor(htmlElem, options) {
    super(htmlElem, options);
    this.name = 'NumberInputInstance';
  }

  //TODO: fix inheritance problem this.htmlElem
  init() {
    super.init();

    this.buttonMinus = this.htmlElem.querySelector(
      'button[data-zep-option="minus"]'
    );
    this.buttonPlus = this.htmlElem.querySelector(
      'button[data-zep-option="plus"]'
    );

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

    this.addListeners();
  }

  addListeners() {
    this.buttonMinus.addEventListener('click', e => this.clickHandler, false);
    this.buttonPlus.addEventListener('click', e => this.clickHandler, false);
  }

  removeListeners() {
    this.buttonMinus.removeEventListener(
      'click',
      e => this.clickHandler,
      false
    );
    this.buttonPlus.removeEventListener('click', e => this.clickHandler, false);
  }

  clickHandler(e) {
    let btn = e.currentTarget;
    console.log(`btn ${btn}`);
  }
}
