import NumberInput from '../NumberInput.js';
import { fireEvent } from 'dom-testing-library';

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

  let instance = null;

  beforeEach(() => {
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    let mockElement = mockElementBase;
    document.body.innerHTML = mockElement;

    let htmlElement = document.querySelector('#numberInput');
    instance = new NumberInput(htmlElement);
  });

  test('constructor is succesfully called and properties are set in init function.', () => {
    expect(
      instance.inputHtml === document.querySelector('input[type="text"]')
    ).toBeTruthy();
    expect(instance.steps).toEqual(2);
    expect(instance.minimum).toEqual(0);
    expect(instance.maximum).toEqual(10);
    expect(instance.currentNumber).toEqual(1);
  });

  test('element has minus and plus button', () => {
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
    instance.currentNumber = 4;

    fireEvent.click(instance.buttonMinus);

    expect(instance.currentNumber === 2).toBeTruthy();
  });

  test("Minus button doesn't decrease current number property below defined minimum", () => {
    instance.currentNumber = instance.minimum + 1;
    instance.steps = 2;
    fireEvent.click(instance.buttonMinus);

    expect(instance.currentNumber).toBe(instance.minimum);
  });

  test('Plus button increases current number property by defined steps', () => {
    instance.currentNumber = 1;
    instance.steps = 2;

    fireEvent.click(instance.buttonPlus);

    expect(instance.currentNumber).toBe(3);
  });

  test("Plus button doesn't increase current number property beyond defined maximum", () => {
    instance.currentNumber = instance.maximum - 1;
    instance.steps = 2;
    fireEvent.click(instance.buttonPlus);

    expect(instance.currentNumber).toBe(instance.maximum);
  });

  test('Current number property changes by direct input field entry', () => {
    fireEvent.change(instance.inputHtml, { target: { value: '10' } });

    expect(instance.currentNumber).toBe(10);
  });

  test("Current number property doesn't change on illegal input", () => {
    instance.currentNumber = 1;
    fireEvent.change(instance.inputHtml, { target: { value: '1' } });

    fireEvent.change(instance.inputHtml, { target: { value: 'a' } });

    expect(instance.currentNumber).toBe(1);
  });

  test('Functionality is gone after removeListeners is called', () => {
    instance.currentNumber = 1;
    fireEvent.change(instance.inputHtml, { target: { value: '1' } });

    instance.removeListeners();

    fireEvent.click(instance.buttonPlus);

    expect(instance.currentNumber).toBe(1);
  });
});
