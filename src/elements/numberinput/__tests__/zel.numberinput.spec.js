import NumberInput from '../zel.numberinput.js';

describe('standard element constructor', () => {
  const mockElementBase = `<div class="theme-rental" data-zep-type="number-input" data-zep-init="true" data-zep-min="0" data-zep-max="10"
    data-zep-step="2" style="margin-bottom: 15px;" id="numberInput">
        <button class="zep-button zep-button-icon" data-zep-option="minus">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="zep-button__icon"
                fill="currentColor">
                <use xlink:href="#zepicons-minus"></use>
            </svg>
        </button>
        <input type="text" class="zep-input zep-input--number" value="1">
        <button class="zep-button zep-button-icon" data-zep-option="plus">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" class="zep-button__icon" fill="currentColor">
                <use xlink:href="#zepicons-plus"></use>
            </svg>
        </button>
    </div>`;

  test('constructor is succesfully called and properties are set in init function.', () => {
    let mockElement = mockElementBase;
    document.body.innerHTML = mockElement;

    let htmlElement = document.querySelector('#numberInput');
    let instance = new NumberInput(htmlElement);

    expect(
      instance.inputHtml === document.querySelector('input[type="text"]')
    ).toBeTruthy();
    expect(instance.steps === 2).toBeTruthy();
    expect(instance.minimum === 0).toBeTruthy();
    expect(instance.maximum === 10).toBeTruthy();
    expect(instance.currentNumber === 1).toBeTruthy();
  });

  test('element has minus and plus button', () => {
    let mockElement = mockElementBase;
    document.body.innerHTML = mockElement;

    let htmlElement = document.querySelector('#numberInput');
    let instance = new NumberInput(htmlElement);

    expect(
      instance.buttonMinus ===
        document.querySelector('button[data-zep-option="minus"]')
    ).toBeTruthy();
    expect(
      instance.buttonPlus ===
        document.querySelector('button[data-zep-option="plus"]')
    ).toBeTruthy();
  });

  test('Minus button decreases current number property by defined steps', () => {
    let mockElement = mockElementBase;
    document.body.innerHTML = mockElement;

    let htmlElement = document.querySelector('#numberInput');
    let instance = new NumberInput(htmlElement);

    instance.currentNumber = 4;

    instance.buttonMinus.simulate('click');

    expect(instance.currentNumber === 2).toBeTruthy();
  });

  test("Minus button doesn't decrease current number property below defined minimum", () => {
    throw new Error('not implemented');
  });

  test('Plus button increases current number property by defined steps', () => {
    throw new Error('not implemented');
  });

  test("Plus button doesn't increase current number property beyond defined maximum", () => {
    throw new Error('not implemented');
  });

  test('Current number property changes by direct input field entry', () => {
    throw new Error('not implemented');
  });
});
