export default class Button {
  constructor() {
    this.init();
  }

  init() {
    this.bla = 'haha';

    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.warn('button construct');
  }
}
