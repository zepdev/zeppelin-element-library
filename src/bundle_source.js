/**
 * Entry Point for Bundle creation.
 *
 * import all relevant scripts here
 */

import Button from './elements/button/button.js';

// test
export function getButtons() {
  let buttonElements = document.querySelectorAll('[data-zep-type="button"]');
  console.log('buttonElements', buttonElements);

  for (let [i, elem] of buttonElements.entries()) {
    new Button(elem, `button_${i}`);
  }
}

// eslint-disable-next-line
console.log('this will be the main js bundle entry point.');
