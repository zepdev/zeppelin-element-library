/* zeppelin-element-library version 0.10.11 */
var ZEL = (function () {
  'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var classPrefix = "zep-";
  var htmlDataVarType = "data-".concat(classPrefix, "type");
  var formatZepType = function formatZepType(type) {
    return type.toLowerCase().trim().split(/ |-/gi).map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    }).join('');
  };

  var Element =
  /*#__PURE__*/
  function () {
    function Element(htmlElem) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.options = options;
      this.htmlElem = htmlElem;
      this.init();
    }

    var _proto = Element.prototype;

    _proto.init = function init() {
      this.addListeners();
      return true;
    };

    _proto.addListeners = function addListeners() {
      throw new Error('should not be called from parent!');
    };

    return Element;
  }();

  var NumberInput =
  /*#__PURE__*/
  function (_Element) {
    _inheritsLoose(NumberInput, _Element);

    function NumberInput(htmlElem, options) {
      var _this;

      _this = _Element.call(this, htmlElem, options) || this;
      _this.name = 'NumberInputInstance';
      return _this;
    } //TODO: fix inheritance problem this.htmlElem


    var _proto = NumberInput.prototype;

    _proto.init = function init() {
      this.buttonMinus = this.htmlElem.querySelector('button[data-zep-option="minus"]');

      if (!this.buttonMinus) {
        this.buttonMinus = this.htmlElem.querySelectorAll('button')[0];
      }

      this.buttonPlus = this.htmlElem.querySelector('button[data-zep-option="plus"]');

      if (!this.buttonPlus) {
        this.buttonPlus = this.htmlElem.querySelectorAll('button')[1];
      }

      this.inputHtml = this.htmlElem.querySelector('input');
      this.steps = this.htmlElem.hasAttribute('data-zep-step') ? parseInt(this.htmlElem.getAttribute('data-zep-step'), 10) : 1;
      this.minimum = this.htmlElem.hasAttribute('data-zep-min') ? parseInt(this.htmlElem.getAttribute('data-zep-min'), 10) : 0;
      this.maximum = this.htmlElem.hasAttribute('data-zep-max') ? parseInt(this.htmlElem.getAttribute('data-zep-max'), 10) : 9999999999;
      this.currentNumber = this.inputHtml.value ? parseInt(this.inputHtml.value, 10) : 1;

      _Element.prototype.init.call(this);
    };

    _proto.addListeners = function addListeners() {
      this.buttonMinusListener = this.clickHandler.bind(this);
      this.buttonMinus.addEventListener('click', this.buttonMinusListener, false);
      this.buttonPlusListener = this.clickHandler.bind(this);
      this.buttonPlus.addEventListener('click', this.buttonPlusListener, false);
      this.inputListener = this.changeInputHandler.bind(this);
      this.inputHtml.addEventListener('change', this.inputListener, false);
    };

    _proto.removeListeners = function removeListeners() {
      this.buttonMinus.removeEventListener('click', this.buttonMinusListener, false);
      this.buttonPlus.removeEventListener('click', this.buttonPlusListener, false);
      this.inputHtml.removeEventListener('change', this.inputListener, false);
    };

    _proto.clickHandler = function clickHandler(e) {
      var btn = e.currentTarget;

      if (btn === this.buttonMinus) {
        this.currentNumber = this.checkRange(this.currentNumber - this.steps, this.minimum);
      }

      if (btn === this.buttonPlus) {
        this.currentNumber = this.checkRange(this.currentNumber + this.steps, this.maximum);
      }

      this.inputHtml.value = this.currentNumber;
    };

    _proto.changeInputHandler = function changeInputHandler() {
      var newNumber = parseInt(this.inputHtml.value, 10);

      if (!isNaN(newNumber)) {
        this.currentNumber = this.checkRange(newNumber, this.currentNumber);
        this.inputHtml.value = this.currentNumber;
      } else {
        console.warn('Only integers allowed');
      }
    };

    _proto.checkRange = function checkRange(newValue, fallback) {
      if (newValue < this.minimum) {
        return fallback;
      }

      if (newValue > this.maximum) {
        return fallback;
      }

      return newValue;
    };

    return NumberInput;
  }(Element);

  var classes = {
    NumberInput: NumberInput
  };

  var DynamicClass = function DynamicClass(className, opts) {
    return new classes[className](opts);
  };

  var EventBus =
  /*#__PURE__*/
  function () {
    // create a fake element
    function EventBus() {
      this.bus = null;

      if (typeof document !== "undefined") {
        this.bus = document.createElement('eventbus');
      } else {
        console.warn('EventBus could not be created');
      }
    }

    var _proto = EventBus.prototype;

    _proto.addEventListener = function addEventListener(event, callback) {
      this.bus.addEventListener(event, callback, false);
    };

    _proto.removeEventListener = function removeEventListener(event, callback) {
      this.bus.removeEventListener(event, callback, false);
    };

    _proto.dispatchEvent = function dispatchEvent(event) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.bus.dispatchEvent(new CustomEvent(event, {
        detail: detail
      }));
    };

    return EventBus;
  }();

  var ZEL =
  /*#__PURE__*/
  function () {
    function ZEL() {
      // eslint-disable-next-line no-console
      console.log("ZEL - built with \u2665"); // create global event bus instance

      this.eventBus = new EventBus(); // array with the elements and html nodes

      this.elements = [];
    }

    var _proto = ZEL.prototype;

    _proto.init = function init() {
      this.setElements();

      if (this.getElements().length > 0) {
        this.createInstances();
      }

      return true;
    } // update jsElementList and elementsObject
    ;

    _proto.refresh = function refresh() {
      this.elements = [];
      this.init();
    };

    _proto.getElements = function getElements() {
      return this.elements;
    } //parse element list and return an object with arrays of elements split by type
    ;

    _proto.setElements = function setElements() {
      var jsElementList = document.querySelectorAll("[".concat(htmlDataVarType, "]"));
      var tempTypeList = [];
      var tempElements = [];

      _toConsumableArray(jsElementList).forEach(function (elem) {
        var type = formatZepType(elem.getAttribute('data-zep-type'));

        if (tempTypeList.indexOf(type) === -1) {
          tempElements[type] = [];
        }

        var newElement = {
          type: type,
          htmlNode: elem,
          innerHTML: elem.innerHTML,
          jsInstance: null,
          initialized: false
        };
        tempElements.push(newElement);
      });

      this.elements = tempElements;
    } // create js class instances of available elements
    ;

    _proto.createInstances = function createInstances() {
      var elements = this.getElements();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;
          var initAttribute = element.htmlNode.hasAttribute('data-zep-init') ? element.htmlNode.getAttribute('data-zep-init') : null;

          if (initAttribute === 'false') {
            continue;
          }

          try {
            var newObject = new DynamicClass(element.type, element.htmlNode);
            element.jsInstance = newObject;
            element.initialized = true;
          } catch (err) {
            console.warn("Element ".concat(element.type, " could not be instantiated \n").concat(err));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    return ZEL;
  }();

  var zel = new ZEL();

  return zel;

}());
