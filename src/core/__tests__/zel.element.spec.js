import Element from '../zel.element.js';

describe('standard element constructor', () => {
  test('constructor is succesfully called', () => {
    const mockElement =
      '<div data-zep-type="number-input"><p>Mock Element</p></div>';

    let spyConsoleLog = jest.spyOn(global.console, 'log');
    new Element(mockElement);

    expect(spyConsoleLog).toHaveBeenCalledTimes(1);

    spyConsoleLog.mockRestore();
  });
});
