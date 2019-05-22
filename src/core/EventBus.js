export default class EventBus {
  // create a fake element
  constructor() {
    this.bus = document.createElement('eventbus');
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
