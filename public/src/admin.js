(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_admin_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/admin.scss */ "./assets/styles/admin.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _admin_js_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/js/main */ "./assets/admin/js/main.js");
/* harmony import */ var _admin_js_main__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_admin_js_main__WEBPACK_IMPORTED_MODULE_9__);






// any CSS you import will output into a single css file (app.css in this case)
 // You can specify which plugins you need

 // start the Stimulus application




(function () {
  var $updateFollofingForm = document.querySelector('#ajax-update-following');
  var $twApiKeysModal = document.querySelector('#modal-twapi-keys');
  var modalTwApiKeys = new bootstrap__WEBPACK_IMPORTED_MODULE_7__.Modal($twApiKeysModal); //

  document.querySelector('#ajax-get-twapi-keys').addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    fetch(this.action, {
      method: 'POST',
      body: new FormData(e.target)
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      twApiKeysHandleResponse(json);
    })["catch"](function (error) {
      console.error('Error:', error); //@todo
    });
  }); //

  var twApiKeysHandleResponse = function twApiKeysHandleResponse(response) {
    switch (response.code) {
      case 'success':
        $twApiKeysModal.querySelector('.modal-body').innerHTML = response.html;
        modalTwApiKeys.show();
        break;
    }
  }; //


  $twApiKeysModal.querySelector('.btn-ok').addEventListener('click', function (e) {
    $twApiKeysModal.querySelector('.loader').style.display = 'block';
    $twApiKeysModal.querySelectorAll('.btn').forEach(function ($btn) {
      $btn.disabled = true;
    });
    fetch($updateFollofingForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
      method: 'POST',
      body: new FormData($updateFollofingForm)
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      window.location.href = json.path;
    })["catch"](function (error) {
      console.error('Error:', error); //@todo
    });
  });
})();

/***/ }),

/***/ "./assets/admin/js/main.js":
/*!*********************************!*\
  !*** ./assets/admin/js/main.js ***!
  \*********************************/
/***/ (() => {

(function () {
  /* ========= sidebar toggle ======== */
  var sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
  var mainWrapper = document.querySelector(".main-wrapper");
  var menuToggleButton = document.querySelector("#menu-toggle");
  var menuToggleButtonIcon = document.querySelector("#menu-toggle i");
  var overlay = document.querySelector(".overlay");
  menuToggleButton.addEventListener("click", function () {
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");

    if (document.body.clientWidth > 1200) {
      if (menuToggleButtonIcon.classList.contains("fa-chevron-left")) {
        menuToggleButtonIcon.classList.remove("fa-chevron-left");
        menuToggleButtonIcon.classList.add("fa-bars");
      } else {
        menuToggleButtonIcon.classList.remove("fa-bars");
        menuToggleButtonIcon.classList.add("fa-chevron-left");
      }
    } else {
      if (menuToggleButtonIcon.classList.contains("fa-chevron-left")) {
        menuToggleButtonIcon.classList.remove("fa-chevron-left");
        menuToggleButtonIcon.classList.add("fa-bars");
      }
    }
  });
  overlay.addEventListener("click", function () {
    sidebarNavWrapper.classList.remove("active");
    overlay.classList.remove("active");
    mainWrapper.classList.remove("active");
  });
})();

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/admin.scss":
/*!**********************************!*\
  !*** ./assets/styles/admin.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-6a5154","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_pro-e2885d"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFaLENBQXNCSyxNQUF0QixDQUE2QixRQUE3QjtBQUNELEdBSkQ7QUFLRCxDQWhDRDs7Ozs7Ozs7Ozs7Ozs7OztDQ0VBOztBQUNPLElBQU1FLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUFELENBQTVCLEVBTVA7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FkbWluLnNjc3MnO1xuXG4vLyBZb3UgY2FuIHNwZWNpZnkgd2hpY2ggcGx1Z2lucyB5b3UgbmVlZFxuaW1wb3J0IHtNb2RhbCwgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXJ9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCAnLi9hZG1pbi9qcy9tYWluJztcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgJHVwZGF0ZUZvbGxvZmluZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWpheC11cGRhdGUtZm9sbG93aW5nJyk7XG4gIGNvbnN0ICR0d0FwaUtleXNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC10d2FwaS1rZXlzJyk7XG4gIGNvbnN0IG1vZGFsVHdBcGlLZXlzID0gbmV3IE1vZGFsKCR0d0FwaUtleXNNb2RhbCk7XG5cbiAgLy9cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FqYXgtZ2V0LXR3YXBpLWtleXMnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBmZXRjaCh0aGlzLmFjdGlvbiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBuZXcgRm9ybURhdGEoZS50YXJnZXQpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICB0d0FwaUtleXNIYW5kbGVSZXNwb25zZShqc29uKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTsvL0B0b2RvXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vXG4gIGNvbnN0IHR3QXBpS2V5c0hhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLmNvZGUpIHtcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAkdHdBcGlLZXlzTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXNwb25zZS5odG1sO1xuICAgICAgICBtb2RhbFR3QXBpS2V5cy5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICAvL1xuICAkdHdBcGlLZXlzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICR0d0FwaUtleXNNb2RhbC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgJHR3QXBpS2V5c01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKS5mb3JFYWNoKGZ1bmN0aW9uKCRidG4pIHtcbiAgICAgICRidG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgZmV0Y2goJHVwZGF0ZUZvbGxvZmluZ0Zvcm0uYWN0aW9uLnJlcGxhY2UoL1xcL1teXFwvXSokLywgJy8nICsgJHR3QXBpS2V5c01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0d2FwaS1rZXknKS52YWx1ZSksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogbmV3IEZvcm1EYXRhKCR1cGRhdGVGb2xsb2ZpbmdGb3JtKVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBqc29uLnBhdGg7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7Ly9AdG9kb1xuICAgIH0pO1xuICB9KTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gIC8qID09PT09PT09PSBzaWRlYmFyIHRvZ2dsZSA9PT09PT09PSAqL1xyXG4gIGNvbnN0IHNpZGViYXJOYXZXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLW5hdi13cmFwcGVyXCIpO1xyXG4gIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIik7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS10b2dnbGVcIik7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtdG9nZ2xlIGlcIik7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbiAgbWVudVRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDEyMDApIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucyhcImZhLWNoZXZyb24tbGVmdFwiKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1jaGV2cm9uLWxlZnRcIik7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZChcImZhLWJhcnNcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZShcImZhLWJhcnNcIik7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZChcImZhLWNoZXZyb24tbGVmdFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucyhcImZhLWNoZXZyb24tbGVmdFwiKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1jaGV2cm9uLWxlZnRcIik7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZChcImZhLWJhcnNcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyTmF2V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIk1vZGFsIiwiVG9vbHRpcCIsIlRvYXN0IiwiUG9wb3ZlciIsIiR1cGRhdGVGb2xsb2ZpbmdGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJHR3QXBpS2V5c01vZGFsIiwibW9kYWxUd0FwaUtleXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmV0Y2giLCJhY3Rpb24iLCJtZXRob2QiLCJib2R5IiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidHdBcGlLZXlzSGFuZGxlUmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJjb2RlIiwiaW5uZXJIVE1MIiwiaHRtbCIsInNob3ciLCJzdHlsZSIsImRpc3BsYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIiRidG4iLCJkaXNhYmxlZCIsInJlcGxhY2UiLCJ2YWx1ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGgiLCJzaWRlYmFyTmF2V3JhcHBlciIsIm1haW5XcmFwcGVyIiwibWVudVRvZ2dsZUJ1dHRvbiIsIm1lbnVUb2dnbGVCdXR0b25JY29uIiwib3ZlcmxheSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZCIsImNsaWVudFdpZHRoIiwiY29udGFpbnMiLCJyZW1vdmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9