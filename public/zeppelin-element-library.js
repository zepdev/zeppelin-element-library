/* zeppelin-element-library version 0.8.4 */
var ZEL = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
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

      _classCallCheck(this, Element);

      this.options = options;
      this.htmlElem = htmlElem;
      this.init();
    }

    _createClass(Element, [{
      key: "init",
      value: function init() {
        console.log("construct() ".concat(this.htmlElem));
      }
    }]);

    return Element;
  }();

  var NumberInput =
  /*#__PURE__*/
  function (_Element) {
    _inherits(NumberInput, _Element);

    function NumberInput(htmlElem, options) {
      var _this;

      _classCallCheck(this, NumberInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberInput).call(this, htmlElem, options));
      _this.name = 'NumberInputInstance';
      return _this;
    } //TODO: fix inheritance problem this.htmlElem


    _createClass(NumberInput, [{
      key: "init",
      value: function init() {
        _get(_getPrototypeOf(NumberInput.prototype), "init", this).call(this);

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
        this.maximum = this.htmlElem.hasAttribute('data-zep-max') ? parseInt(this.htmlElem.getAttribute('data-zep-max'), 10) : null;
        this.currentNumber = this.inputHtml.value ? parseInt(this.inputHtml.value, 10) : 1;
        this.addListeners();
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        console.log('addListeners');
        this.buttonMinusListener = this.clickHandler.bind(this);
        this.buttonMinus.addEventListener('click', this.buttonMinusListener, false);
        this.buttonPlusListener = this.clickHandler.bind(this);
        this.buttonPlus.addEventListener('click', this.buttonPlusListener, false);
        this.inputListener = this.changeInputHandler.bind(this);
        this.inputHtml.addEventListener('change', this.inputListener, false);
      }
    }, {
      key: "removeListeners",
      value: function removeListeners() {
        this.buttonMinus.removeEventListener('click', this.buttonMinusListener, false);
        this.buttonPlus.removeEventListener('click', this.buttonPlusListener, false);
        this.inputHtml.removeEventListener('change', this.inputListener, false);
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(e) {
        var btn = e.currentTarget;

        if (btn === this.buttonMinus) {
          this.currentNumber = this.checkRange(this.currentNumber - this.steps, this.minimum);
        }

        if (btn === this.buttonPlus) {
          this.currentNumber = this.checkRange(this.currentNumber + this.steps, this.maximum);
        }

        this.inputHtml.value = this.currentNumber;
      }
    }, {
      key: "changeInputHandler",
      value: function changeInputHandler() {
        var newNumber = parseInt(this.inputHtml.value, 10);

        if (!isNaN(newNumber)) {
          this.currentNumber = this.checkRange(newNumber, this.currentNumber);
          this.inputHtml.value = this.currentNumber;
        } else {
          console.warn('Only integers allowed');
        }
      }
    }, {
      key: "checkRange",
      value: function checkRange(newValue, fallback) {
        if (newValue < this.minimum) {
          return fallback;
        }

        if (newValue > this.maximum) {
          return fallback;
        }

        return newValue;
      }
    }]);

    return NumberInput;
  }(Element);

  var classes = {
    NumberInput: NumberInput
  };

  var DynamicClass = function DynamicClass(className, opts) {
    _classCallCheck(this, DynamicClass);

    return new classes[className](opts);
  };

  var EventBus =
  /*#__PURE__*/
  function () {
    // create a fake element
    function EventBus() {
      _classCallCheck(this, EventBus);

      this.bus = document.createElement('eventbus');
    }

    _createClass(EventBus, [{
      key: "addEventListener",
      value: function addEventListener(event, callback) {
        this.bus.addEventListener(event, callback, false);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(event, callback) {
        this.bus.removeEventListener(event, callback, false);
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.bus.dispatchEvent(new CustomEvent(event, {
          detail: detail
        }));
      }
    }]);

    return EventBus;
  }();

  var ZEL =
  /*#__PURE__*/
  function () {
    function ZEL() {
      _classCallCheck(this, ZEL);

      // eslint-disable-next-line no-console
      console.log("ZEL - built with \u2665"); // create global event bus instance

      window.eventBus = new EventBus(); // array with the elements and html nodes

      this.elements = [];
    }

    _createClass(ZEL, [{
      key: "init",
      value: function init() {
        this.setElements();

        if (this.getElements().length > 0) {
          this.createInstances();
        }

        return true;
      } // update jsElementList and elementsObject

    }, {
      key: "refresh",
      value: function refresh() {
        throw new Error('not implemented');
      }
    }, {
      key: "getElements",
      value: function getElements() {
        return this.elements;
      } //parse element list and return an object with arrays of elements split by type

    }, {
      key: "setElements",
      value: function setElements() {
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

    }, {
      key: "createInstances",
      value: function createInstances() {
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
      }
    }]);

    return ZEL;
  }();

  var zel = new ZEL();

  return zel;

}());
