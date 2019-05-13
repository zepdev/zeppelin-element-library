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

  var classPrefix = "zep-";
  var htmlDataVarType = "data-".concat(classPrefix, "type");
  var formatZepType = function formatZepType(type) {
    return type.toLowerCase().trim().split(/ |-/gi).map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    }).join('');
  };

  var ZEL =
  /*#__PURE__*/
  function () {
    function ZEL() {
      _classCallCheck(this, ZEL);

      // eslint-disable-next-line no-console
      console.log("ZEL - built with \u2665");
      this._jsElementList = [];
    }

    _createClass(ZEL, [{
      key: "init",
      value: function init() {
        this._getJsElementsFromDOM();
      }
    }, {
      key: "refresh",
      value: function refresh() {
        this._getJsElementsFromDOM();
      } //dummy for testing

    }, {
      key: "_getJsElementsFromDOM",
      value: function _getJsElementsFromDOM() {
        this._jsElementList = document.querySelectorAll("[".concat(htmlDataVarType, "]"));
      }
    }, {
      key: "getElements",
      value: function getElements(type) {
        if (type) {
          console.log("type pre ".concat(type));
          type = formatZepType(type);
          console.log("type post ".concat(type));
        }

        this._jsElementList.length === 0 && this.refresh(); //this._jsElementList.map();
      }
    }, {
      key: "jsElementList",
      get: function get() {
        return this._jsElementList;
      }
    }]);

    return ZEL;
  }();

  var zel = new ZEL();

  return zel;

}());
