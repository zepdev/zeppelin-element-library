export default class EventBus {
  // create a fake element
  constructor() {
    this.bus = null;

    if (typeof document !== `undefined`) {
      this.bus = document.createElement('eventbus');
    } else {
      console.warn('EventBus could not be created');
    }
  }

  addEventListener(event, callback) {
    this.bus.addEventListener(event, callback, false);
  }

  removeEventListener(event, callback) {
    this.bus.removeEventListener(event, callback, false);
  }

  dispatchEvent(event, detail = {}) {
    this.bus.dispatchEvent(new CustomEvent(event, { detail }));
  }
}
