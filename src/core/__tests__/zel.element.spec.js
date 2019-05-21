import Element from '../zel.element.js';

describe('standard element constructor', () => {
  test('constructor is succesfully called', () => {
    const mockAddListeners = jest.fn(() => true);

    const mockElement =
      '<div data-zep-type="number-input"><p>Mock Element</p></div>';

    Element.prototype.addListeners = mockAddListeners;

    new Element(mockElement);

    expect(mockAddListeners).toHaveBeenCalledTimes(1);
  });
});
