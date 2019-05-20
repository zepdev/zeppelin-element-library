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
    if (!this.buttonMinus) {
      this.buttonMinus = this.htmlElem.querySelectorAll('button')[0];
    }

    this.buttonPlus = this.htmlElem.querySelector(
      'button[data-zep-option="plus"]'
    );
    if (!this.buttonPlus) {
      this.buttonPlus = this.htmlElem.querySelectorAll('button')[1];
    }

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
    this.buttonMinusListener = this.clickHandler.bind(this);
    this.buttonMinus.addEventListener('click', this.buttonMinusListener, false);

    this.buttonPlusListener = this.clickHandler.bind(this);
    this.buttonPlus.addEventListener('click', this.buttonPlusListener, false);

    this.inputListener = this.changeInputHandler.bind(this);

    this.inputHtml.addEventListener('change', this.inputListener, false);
  }

  removeListeners() {
    this.buttonMinus.removeEventListener(
      'click',
      this.buttonMinusListener,
      false
    );

    this.buttonPlus.removeEventListener(
      'click',
      this.buttonPlusListener,
      false
    );

    this.inputHtml.removeEventListener('change', this.inputListener, false);
  }

  clickHandler(e) {
    let btn = e.currentTarget;

    if (btn === this.buttonMinus) {
      this.currentNumber = this.checkRange(
        this.currentNumber - this.steps,
        this.minimum
      );
    }

    if (btn === this.buttonPlus) {
      this.currentNumber = this.checkRange(
        this.currentNumber + this.steps,
        this.maximum
      );
    }

    this.inputHtml.value = this.currentNumber;
  }

  changeInputHandler() {
    let newNumber = parseInt(this.inputHtml.value, 10);

    if (!isNaN(newNumber)) {
      this.currentNumber = this.checkRange(newNumber, this.currentNumber);
    } else {
      console.warn('Only integers allowed');
    }
  }

  checkRange(newValue, fallback) {
    if (newValue < this.minimum) {
      return fallback;
    }

    if (newValue > this.maximum) {
      return fallback;
    }

    return newValue;
  }
}
