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

    // array with the elements and html nodes
    this.elements = [];
  }

  init() {
    // try {
    this.setElements();

    if (this.getElements().length > 0) {
      this.createInstances();
    }
    // } catch (err) {
    //   console.warn('Error while initializing ZEL');
    //   return false;
    // }

    return true;
  }

  // update jsElementList and elementsObject
  refresh() {
    throw new Error('not implemented');
  }

  getElements() {
    return this.elements;
  }

  //parse element list and return an object with arrays of elements split by type
  setElements() {
    let jsElementList = document.querySelectorAll(
      `[${helpers.htmlDataVarType}]`
    );

    let tempTypeList = [];
    let tempElements = [];

    console.log(
      `getParsedElementsObject() typeof elementList: ${jsElementList} `
    );

    [...jsElementList].forEach(elem => {
      console.log(`elem: ${elem} / elem.dataset ${elem.dataset}`);
      let type = helpers.formatZepType(elem.getAttribute('data-zep-type'));
      console.log(`type: ${type}`);
      if (tempTypeList.indexOf(type) === -1) {
        tempElements[type] = [];
      }

      let newElement = {
        type: type,
        htmlNode: elem,
        innerHTML: elem.innerHTML,
        jsInstance: null,
        initialized: false
      };

      tempElements.push(newElement);
    });

    this.elements = tempElements;
  }

  // create js class instances of available elements
  createInstances() {
    console.log('createInstances');
    let elements = this.getElements();

    for (let element of elements) {
      let initAttribute = element.htmlNode.hasAttribute('data-zep-init')
        ? element.htmlNode.getAttribute('data-zep-init')
        : null;

      if (initAttribute === 'false') {
        continue;
      }

      try {
        let newObject = new DynamicClass(element.type, element.htmlNode);

        element.jsInstance = newObject;
        element.initialized = true;
      } catch (err) {
        console.warn(
          `Element ${element.type} could not be instantiated \n${err}`
        );
      }
    }
  }
}

export default new ZEL();
