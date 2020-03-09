import Element from '../Element';

describe('Element', () => {
  it('is succesfully initialized', () => {
    const mockAddListeners = jest.fn();
    Element.prototype.addListeners = mockAddListeners;
    const elem = new Element(document.createElement('div'), { nuff: 'narf' });

    expect(elem.options).toEqual({ nuff: 'narf' });
    expect(elem).toBeTruthy();
    expect(mockAddListeners).toHaveBeenCalledTimes(1);
  });
});
