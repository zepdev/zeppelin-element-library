import ZEL from '../zel.js';
describe('library initialization', () => {
  test('library can be initialized', () => {
    document.body.innerHTML = '<div></div>';
    expect(ZEL.init()).toBeTruthy();
  });

  test('on a site with no elements the elements list is empty', () => {
    document.body.innerHTML = '<div class="empty"><p>Mock Element</p></div>';

    let spyCreateInstances = jest.spyOn(ZEL, 'createInstances');

    ZEL.init();

    expect(spyCreateInstances).not.toHaveBeenCalled();
    expect(ZEL.getElements().length === 0);

    spyCreateInstances.mockRestore();
  });

  const mockElement =
    '<div data-zep-type="number-input"><p>Mock Element</p></div>';

  test('on a site with ONE element the element list has one member', () => {
    document.body.innerHTML = mockElement;

    let spyCreateInstances = jest.spyOn(ZEL, 'createInstances');

    ZEL.init();

    expect(spyCreateInstances).toHaveBeenCalledTimes(1);
    expect(ZEL.getElements().length === 1);

    spyCreateInstances.mockRestore();
  });

  test('on a site with multiple elements the element list has multiple elements', () => {
    document.body.innerHTML = mockElement + mockElement + mockElement;

    let spyCreateInstances = jest.spyOn(ZEL, 'createInstances');

    ZEL.init();

    expect(spyCreateInstances).toHaveBeenCalledTimes(1);
    expect(ZEL.getElements().length === 3);

    spyCreateInstances.mockRestore();
  });

  test('on a site with ONE element with init attribute false no JS instances is created', () => {
    document.body.innerHTML =
      '<div data-zep-type="number-input" data-zep-init="false"></div>';

    ZEL.init();

    let elements = ZEL.getElements();
    expect(elements[0].jsInstance === null).toBeTruthy();
  });

  test('on a site with ONE element with init attribute other then false a JS instance is created', () => {
    document.body.innerHTML = `<div class="theme-rental" data-zep-type="number-input" data-zep-init="mock-test" data-zep-min="0" data-zep-max="10"
    data-zep-step="2" style="margin-bottom: 15px;" id="numberInput">
        <button class="zep-button zep-button-icon">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="zep-button__icon"
                fill="currentColor">
                <use xlink:href="#zepicons-minus"></use>
            </svg>
        </button>
        <input type="text" class="zep-input zep-input--number" value="1">
        <button class="zep-button zep-button-icon">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" class="zep-button__icon" fill="currentColor">
                <use xlink:href="#zepicons-plus"></use>
            </svg>
        </button>
    </div>`;

    ZEL.init();

    let elements = ZEL.getElements();

    console.log(`elements[0].jsInstance ${elements[0].jsInstance}`);
    expect(elements[0].jsInstance !== null).toBeTruthy();
  });

  test('on a site with ONE element with the wrong or unknown zep-type no JS instance is created', () => {
    document.body.innerHTML = '<div data-zep-type="something"></div>';

    let spyConsoleWarn = jest.spyOn(global.console, 'warn');
    ZEL.init();

    expect(spyConsoleWarn).toHaveBeenCalledTimes(1);
    expect(ZEL.getElements()[0].jsInstance === null).toBeTruthy();

    spyConsoleWarn.mockRestore();
  });

  test('should throw an error by intialization', () => {
    ZEL.setElements = jest.fn().mockImplementation(() => {
      throw new Error('test error');
    });

    expect(() => ZEL.init()).toThrow();

    ZEL.setElements.mockRestore();
  });

  test('refresh works', () => {
    ZEL.init();
    // do something in the DOM
    ZEL.refresh();
  });
});
