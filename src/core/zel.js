import * as helpers from './zel.helpers';
import DynamicClass from './DynamicClass';
import EventBus from './EventBus';

class ZEL {
  constructor() {
    // eslint-disable-next-line no-console
    console.log(`ZEL - built with ♥`);

    // create global event bus instance
    this.eventBus = new EventBus();

    // array with the elements and html nodes
    this.elements = [];
  }

  init() {
    this.setElements();

    if (this.getElements().length > 0) {
      this.createInstances();
    }

    return true;
  }

  // update jsElementList and elementsObject
  refresh() {
    this.elements = [];
    this.init();
  }

  getElements() {
    return this.elements;
  }

  //parse element list and return an object with arrays of elements split by type
  setElements() {
    let jsElementList = document.querySelectorAll(
      `[${helpers.htmlDataVarType}]`
    );

    let tempElements = [];

    [...jsElementList].forEach(elem => {
      let type = helpers.formatZepType(elem.getAttribute('data-zep-type'));

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
