import EventBus from '../zel.eventbus';
describe('event bus interface', () => {
  test('event listener is sucessfully registered', () => {
    const mockElement =
      '<div data-zep-type="number-input"><p>Mock Element</p></div>';

    let spyConsoleLog = jest.spyOn(global.console, 'log');

    window.eventBus = new EventBus();
    window.eventBus.addEventListener('testEvent', function(e) {
      console.log('event called');
    });

    window.eventBus.dispatchEvent('testEvent');

    expect(spyConsoleLog).toHaveBeenCalledTimes(1);

    spyConsoleLog.mockRestore();
  });

  test('event listener is sucessfully removed', () => {
    const mockElement =
      '<div data-zep-type="number-input"><p>Mock Element</p></div>';

    let spyConsoleLog = jest.spyOn(global.console, 'log');

    let eventFunction = e => {
      console.log('event called');
    };

    window.eventBus = new EventBus();
    window.eventBus.addEventListener('testEvent', eventFunction);

    window.eventBus.removeEventListener('testEvent', eventFunction);

    window.eventBus.dispatchEvent('testEvent');

    expect(spyConsoleLog).toHaveBeenCalledTimes(0);

    spyConsoleLog.mockRestore();
  });
});
