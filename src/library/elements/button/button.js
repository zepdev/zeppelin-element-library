import buttonTemplate from './button.hbs';
// import './_button.scss';

export default class Button {
  constructor() {
    this.init();
  }

  init() {
    this.div = document.createElement('div');
    this.template = buttonTemplate({
      prefix: 'zep-'
    });
    this.div.innerHTML = this.template;

    document.body.appendChild(this.div);

    console.log('button construct:', typeof this.template);
  }
}
