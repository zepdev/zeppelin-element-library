/**
 * Entry Point for Bundle creation.
 *
 * import all relevant scripts here
 */
import Button from './elements/button/button.js';

import { version } from '../package.json'; //FIXME: currently one behind -> automate version injection in prepublish process

// TODO: initialize elements
class ZEL {
  constructor(__version) {
    console.log(`ZEL v${__version} - built with ♥`);
    this.init();
  }
  init() {
    this.getButtons();
  }

  // dummy for testing
  getButtons() {
    let buttonElements = document.querySelectorAll('[data-zep-type="button"]');
    for (let [i, elem] of buttonElements.entries()) {
      new Button(elem, `button_${i}`);
    }
    return buttonElements;
  }
}

export default new ZEL(version);
