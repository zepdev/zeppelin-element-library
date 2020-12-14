import Element from '../Element';

describe('standard element constructor', () => {
  const OriginalElement = Element.prototype;

  test('constructor without options', () => {
    const mockInit = jest.fn();
    Element.prototype.init = mockInit;
    const spy = jest.spyOn(Element.prototype, 'addListeners');
    const elem = new Element(document.createElement('div'));

    expect(elem).toBeTruthy();
    expect(mockInit).toHaveBeenCalledTimes(1);
    expect(spy).toThrowError('should not be called from parent!');

    Element.prototype.init = OriginalElement.init;
  });

  test('constructor with options', () => {
    const spy = jest.spyOn(Element.prototype, 'init');
    const elem = new Element(document.createElement('div'), { nuff: 'narf' });

    expect(elem.options).toEqual({ nuff: 'narf' });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
