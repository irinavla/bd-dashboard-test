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
}); // create side drawer instance

var sideDrawer = new _utils.SideDrawer();
sideDrawer.init(); // add actions for ADD & REARRANGE PORTLETS

var editPortletTrigger = document.querySelector('.edit-items');
var addPortletTrigger = document.querySelector('.add-item');
var toast = document.querySelector('.toast');

var showToast = function showToast() {
  toast.classList.add('show');
  console.log('trigger rearrange portlets');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
};

var addPortlet = function addPortlet() {
  return console.log('trigger Add portlet action');
};

editPortletTrigger.addEventListener('click', function () {
  return showToast();
});
addPortletTrigger.addEventListener('click', function () {
  return addPortlet();
}); // create pagination instance

var pagination = new _utils.Pagination(document.querySelector('.pagination'));
pagination.init(); // get portlets footer buttons

var portlets = document.querySelectorAll('.portlet'); // for each portlet item, target action and footer buttons, then iterate over each item and add an event listener

portlets.forEach(function (portlet, index) {
  var actions = portlet.querySelectorAll('.actions > button');
  var footerBtns = portlet.querySelectorAll('.portlet-footer > button');
  actions.forEach(function (action, i) {
    action.addEventListener('click', function () {
      return console.log("clicked action ".concat(i, " from portlet ").concat(index));
    });
  });
  footerBtns.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      return console.log("clicked footer button ".concat(i, " from portlet ").concat(index));
    });
  });
});
var loader = document.querySelector('.loader');
setTimeout(function () {
  loader.classList.add('hide');
}, 3000);

},{"./ui-components/utils":6}],2:[function(require,module,exports){
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
      document.addEventListener('click', function (e) {
        if (e.target.closest('.dropdown-trigger')) {
          return;
        }

        _this.content.classList.remove('active');

        _this.trigger.classList.remove('active');
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
exports["default"] = exports.Pagination = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pagination =
/*#__PURE__*/
function () {
  function Pagination(container) {
    _classCallCheck(this, Pagination);

    this.prevPage = container.querySelector('.nav-left');
    this.nextPage = container.querySelector('.nav-right');
  }

  _createClass(Pagination, [{
    key: "init",
    value: function init() {
      this.prevPage.addEventListener('click', function () {
        console.log('clicked prev page trigger');
      });
      this.nextPage.addEventListener('click', function () {
        console.log('clicked next page trigger');
      });
    }
  }]);

  return Pagination;
}();

exports.Pagination = Pagination;
var _default = Pagination;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
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
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function get() {
    return _pagination["default"];
  }
});

var _dropdown = _interopRequireDefault(require("./_dropdown"));

var _collapsible = _interopRequireDefault(require("./_collapsible"));

var _drawer = _interopRequireDefault(require("./_drawer"));

var _pagination = _interopRequireDefault(require("./_pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./_collapsible":2,"./_drawer":3,"./_dropdown":4,"./_pagination":5}]},{},[1]);
