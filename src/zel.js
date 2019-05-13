/**
 * Entry Point for Bundle creation.
 *
 * import all relevant scripts here
 */

// TODO: initialize elements
import * as helpers from './helpers';

class ZEL {
  constructor() {
    // eslint-disable-next-line no-console
    console.log(`ZEL - built with ♥`);
    this._jsElementList = [];
  }

  init() {
    this._getJsElementsFromDOM();
  }

  refresh() {
    this._getJsElementsFromDOM();
  }

  //dummy for testing
  _getJsElementsFromDOM() {
    this._jsElementList = document.querySelectorAll(
      `[${helpers.htmlDataVarType}]`
    );
  }

  getElements(type) {
    if (type) {
      type = helpers.formatZepType(type);
    }
    this._jsElementList.length === 0 && this.refresh();
    //this._jsElementList.map();
  }

  get jsElementList() {
    return this._jsElementList;
  }
}

export default new ZEL();
