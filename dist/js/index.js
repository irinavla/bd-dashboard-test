(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utils = require("./ui-components/utils");

// get all elements with 'dropdown' class and for each one create a new instance of the Dropdown class 
var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function (dropdown) {
  var instance = new _utils.Dropdown(dropdown);
  instance.init();
}); // create collapsible instances

var collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(function (collapsible) {
  var instance = new _utils.Collapsible(collapsible);
  instance.init();
});
var sideDrawer = new _utils.SideDrawer();
sideDrawer.init();

},{"./ui-components/utils":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Collapsible = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collapsible =
/*#__PURE__*/
function () {
  function Collapsible(element) {
    _classCallCheck(this, Collapsible);

    this.trigger = element;
    this.content = element.nextElementSibling;
  }

  _createClass(Collapsible, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.trigger.addEventListener('click', function (e) {
        e.preventDefault();

        _this.trigger.classList.toggle('active');

        if (_this.content.style.maxHeight) {
          _this.content.style.maxHeight = null;
        } else {
          _this.content.style.maxHeight = _this.content.scrollHeight + "px";
        }
      });
    }
  }]);

  return Collapsible;
}();

exports.Collapsible = Collapsible;
var _default = Collapsible;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SideDrawer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SideDrawer =
/*#__PURE__*/
function () {
  function SideDrawer() {
    _classCallCheck(this, SideDrawer);

    this.trigger = document.querySelector('.drawer-toggle');
    this.drawer = document.querySelector('.drawer');
  }

  _createClass(SideDrawer, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.trigger.addEventListener('click', function (e) {
        e.preventDefault();

        _this.trigger.classList.toggle('active');

        _this.drawer.classList.toggle('visible');
      });
    }
  }]);

  return SideDrawer;
}();

exports.SideDrawer = SideDrawer;
var _default = SideDrawer;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown(container) {
    _classCallCheck(this, Dropdown);

    this.container = container;
    this.trigger = container.querySelector('.dropdown-trigger');
    this.content = container.querySelector('.dropdown-content');
  }

  _createClass(Dropdown, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.trigger.addEventListener('click', function (e) {
        e.preventDefault();

        _this.content.classList.toggle('active');

        _this.trigger.classList.toggle('active');
      });
    }
  }]);

  return Dropdown;
}();

var _default = Dropdown;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _dropdown["default"];
  }
});
Object.defineProperty(exports, "Collapsible", {
  enumerable: true,
  get: function get() {
    return _collapsible["default"];
  }
});
Object.defineProperty(exports, "SideDrawer", {
  enumerable: true,
  get: function get() {
    return _drawer["default"];
  }
});

var _dropdown = _interopRequireDefault(require("./_dropdown"));

var _collapsible = _interopRequireDefault(require("./_collapsible"));

var _drawer = _interopRequireDefault(require("./_drawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./_collapsible":2,"./_drawer":3,"./_dropdown":4}]},{},[1]);
