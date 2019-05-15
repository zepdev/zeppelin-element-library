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

  const mockElement = '<div data-zep-type="number"><p>Mock Element</p></div>';

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
      '<div data-zep-type="number" data-zep-init="false"></div>';

    ZEL.init();
  });
});
