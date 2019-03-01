export default class Button {
  constructor(__html, __id) {
    this._html = __html;
    this._id = __id;
    this.init();
  }

  init() {
    console.log(`Button.init() - ${this.id}`);
    this.html.addEventListener(
      'click',
      e => {
        this.clickHandler(e);
      },
      false
    );
  }

  get html() {
    return this._html;
  }

  get id() {
    return this._id;
  }

  clickHandler(e) {
    console.log('click', this.id);
  }
}
