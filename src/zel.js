/**
 * Entry Point for Bundle creation.
 *
 * import all relevant scripts here
 */
import Button from './elements/button/button.js';

import { version } from '../package.json';

class ZEL {
  constructor(__version) {
    console.log(`ZEL version ${__version} construct`);
    this.init();
  }
  init() {
    this.getButtons();
  }

  getButtons() {
    let buttonElements = document.querySelectorAll('[data-zep-type="button"]');
    for (let [i, elem] of buttonElements.entries()) {
      new Button(elem, `button_${i}`);
    }
    return buttonElements;
  }
}

export default new ZEL(version);
