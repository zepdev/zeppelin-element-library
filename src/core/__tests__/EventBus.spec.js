import EventBus from '../EventBus';
describe('event bus interface', () => {
  test('event listener is sucessfully registered', () => {
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
