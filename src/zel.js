/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */

/**
 * Entry Point for Bundle creation.
 *
 * import all relevant scripts here
 */
import Button from './elements/button/button';

// TODO: initialize elements
import * as helpers from './helpers';

class ZEL {
  constructor() {
    // eslint-disable-next-line no-console
    console.log(`ZEL - built with ♥`);
    this.init();
  }

  init() {
    this.getButtons();
  }

  // dummy for testing
  getButtons() {
    const buttons = [];
    const buttonElements = document.querySelectorAll(
      `[${helpers.htmlDataVarType}="button"]`
    );
    for (const [i, elem] of buttonElements.entries()) {
      buttons.push(new Button(elem, `button_${i}`));
    }
    return buttons;
  }
}

export default new ZEL();
