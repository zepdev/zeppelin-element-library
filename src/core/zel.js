/**
 * Entry Point for Bundle creation.
 *
 * import all relevant scripts here
 */

// TODO: initialize elements
import * as helpers from './zel.helpers';
import DynamicClass from './zel.dynamicClass';
import EventBus from './zel.eventbus';

class ZEL {
  constructor() {
    // eslint-disable-next-line no-console
    console.log(`ZEL - built with ♥`);

    // create global event bus instance
    window.eventBus = new EventBus();

    // array for unparsed elements from DOM
    this.jsElementList = [];

    // object for parsed elements split by zep-type
    this.elementsObject = {};
  }

  init() {
    this.refresh();
    this.createInstances(this.elementsObject);
  }

  // update jsElementList and elementsObject
  refresh() {
    this.jsElementList = document.querySelectorAll(
      `[${helpers.htmlDataVarType}]`
    );
    this.elementsObject = this.getParsedElementsObject(this.jsElementList);
  }

  //parse element list and return an object with arrays of elements split by type
  getParsedElementsObject(elementList) {
    let tempTypeList = [];
    let tempElements = {};

    console.log(
      `getParsedElementsObject() typeof elementList: ${elementList} `
    );

    [...elementList].forEach(elem => {
      console.log(`elem: ${elem} / elem.dataset ${elem.dataset}`);
      let type = helpers.formatZepType(elem.getAttribute('data-zep-type'));
      console.log(`type: ${type}`);
      if (tempTypeList.indexOf(type) === -1) {
        tempElements[type] = [];
      }
      tempElements[type].push(elem);
    });

    return tempElements;
  }

  // create js class instances of available elements
  createInstances(elementsObject) {
    console.log('createInstances');
    for (let type in elementsObject) {
      let elements = elementsObject[type];
      for (let element of elements) {
        try {
          new DynamicClass(type, element);
        } catch (err) {
          console.warn(`Element ${type} could not be instantiated \n${err}`);
        }
      }
    }
  }
}

export default new ZEL();
