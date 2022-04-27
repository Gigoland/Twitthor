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
  var $updateFollowingForm = document.querySelector('#ajax-update-following');
  var $updateFollowersForm = document.querySelector('#ajax-update-followers');
  var $twApiKeysModal = document.querySelector('#modal-twapi-keys');
  var modalTwApiKeys = new bootstrap__WEBPACK_IMPORTED_MODULE_7__.Modal($twApiKeysModal); // Get modal content

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
  }); // Modal content

  var twApiKeysHandleResponse = function twApiKeysHandleResponse(response) {
    switch (response.code) {
      case 'success':
        $twApiKeysModal.querySelector('.modal-body').innerHTML = response.html;
        modalTwApiKeys.show();
        break;
    }
  }; // Update following


  if ($twApiKeysModal.querySelector('#btn-update-following')) {
    $twApiKeysModal.querySelector('#btn-update-following').addEventListener('click', function (e) {
      $twApiKeysModal.querySelector('.loader').style.display = 'block';
      $twApiKeysModal.querySelectorAll('.btn').forEach(function ($btn) {
        $btn.disabled = true;
      });
      fetch($updateFollowingForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
        method: 'POST',
        body: new FormData($updateFollowingForm)
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log(json); //window.location.href = json.path;
      })["catch"](function (error) {
        console.error('Error:', error); //@todo
      });
    });
  } // Update followers


  if ($twApiKeysModal.querySelector('#btn-update-followers')) {
    $twApiKeysModal.querySelector('#btn-update-followers').addEventListener('click', function (e) {
      $twApiKeysModal.querySelector('.loader').style.display = 'block';
      $twApiKeysModal.querySelectorAll('.btn').forEach(function ($btn) {
        $btn.disabled = true;
      });
      fetch($updateFollowersForm.action.replace(/\/[^\/]*$/, '/' + $twApiKeysModal.querySelector('#twapi-key').value), {
        method: 'POST',
        body: new FormData($updateFollowersForm)
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log(json); //window.location.href = json.path;
      })["catch"](function (error) {
        console.error('Error:', error); //@todo
      });
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxPQUFPLENBQUNDLFNBQVIsQ0FBa0JLLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FULElBQUFBLFdBQVcsQ0FBQ0ksU0FBWixDQUFzQkssTUFBdEIsQ0FBNkIsUUFBN0I7QUFDRCxHQUpEO0FBS0QsQ0FoQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NFQTs7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcbmltcG9ydCB7TW9kYWwsIFRvb2x0aXAsIFRvYXN0LCBQb3BvdmVyfSBmcm9tICdib290c3RyYXAnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5pbXBvcnQgJy4vYWRtaW4vanMvbWFpbic7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0ICR1cGRhdGVGb2xsb3dpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FqYXgtdXBkYXRlLWZvbGxvd2luZycpO1xuICBjb25zdCAkdXBkYXRlRm9sbG93ZXJzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhamF4LXVwZGF0ZS1mb2xsb3dlcnMnKTtcbiAgY29uc3QgJHR3QXBpS2V5c01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXR3YXBpLWtleXMnKTtcbiAgY29uc3QgbW9kYWxUd0FwaUtleXMgPSBuZXcgTW9kYWwoJHR3QXBpS2V5c01vZGFsKTtcblxuICAvLyBHZXQgbW9kYWwgY29udGVudFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWpheC1nZXQtdHdhcGkta2V5cycpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBmZXRjaCh0aGlzLmFjdGlvbiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBuZXcgRm9ybURhdGEoZS50YXJnZXQpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICB0d0FwaUtleXNIYW5kbGVSZXNwb25zZShqc29uKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTsvL0B0b2RvXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIE1vZGFsIGNvbnRlbnRcbiAgY29uc3QgdHdBcGlLZXlzSGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHN3aXRjaCAocmVzcG9uc2UuY29kZSkge1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICR0d0FwaUtleXNNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlc3BvbnNlLmh0bWw7XG4gICAgICAgIG1vZGFsVHdBcGlLZXlzLnNob3coKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVwZGF0ZSBmb2xsb3dpbmdcbiAgaWYgKCR0d0FwaUtleXNNb2RhbC5xdWVyeVNlbGVjdG9yKCcjYnRuLXVwZGF0ZS1mb2xsb3dpbmcnKSkge1xuICAgICR0d0FwaUtleXNNb2RhbC5xdWVyeVNlbGVjdG9yKCcjYnRuLXVwZGF0ZS1mb2xsb3dpbmcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICR0d0FwaUtleXNNb2RhbC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAkdHdBcGlLZXlzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpLmZvckVhY2goZnVuY3Rpb24oJGJ0bikge1xuICAgICAgICAkYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgZmV0Y2goJHVwZGF0ZUZvbGxvd2luZ0Zvcm0uYWN0aW9uLnJlcGxhY2UoL1xcL1teXFwvXSokLywgJy8nICsgJHR3QXBpS2V5c01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0d2FwaS1rZXknKS52YWx1ZSksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IG5ldyBGb3JtRGF0YSgkdXBkYXRlRm9sbG93aW5nRm9ybSlcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBqc29uLnBhdGg7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7Ly9AdG9kb1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgZm9sbG93ZXJzXG4gIGlmICgkdHdBcGlLZXlzTW9kYWwucXVlcnlTZWxlY3RvcignI2J0bi11cGRhdGUtZm9sbG93ZXJzJykpIHtcbiAgICAkdHdBcGlLZXlzTW9kYWwucXVlcnlTZWxlY3RvcignI2J0bi11cGRhdGUtZm9sbG93ZXJzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAkdHdBcGlLZXlzTW9kYWwucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgJHR3QXBpS2V5c01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKS5mb3JFYWNoKGZ1bmN0aW9uKCRidG4pIHtcbiAgICAgICAgJGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIGZldGNoKCR1cGRhdGVGb2xsb3dlcnNGb3JtLmFjdGlvbi5yZXBsYWNlKC9cXC9bXlxcL10qJC8sICcvJyArICR0d0FwaUtleXNNb2RhbC5xdWVyeVNlbGVjdG9yKCcjdHdhcGkta2V5JykudmFsdWUpLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEoJHVwZGF0ZUZvbGxvd2Vyc0Zvcm0pXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0ganNvbi5wYXRoO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpOy8vQHRvZG9cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAvKiA9PT09PT09PT0gc2lkZWJhciB0b2dnbGUgPT09PT09PT0gKi9cclxuICBjb25zdCBzaWRlYmFyTmF2V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1uYXYtd3JhcHBlclwiKTtcclxuICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtdG9nZ2xlXCIpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXRvZ2dsZSBpXCIpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcblxyXG4gIG1lbnVUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNpZGViYXJOYXZXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiAxMjAwKSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJmYS1jaGV2cm9uLWxlZnRcIikpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtY2hldnJvbi1sZWZ0XCIpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1iYXJzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1iYXJzXCIpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1jaGV2cm9uLWxlZnRcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJmYS1jaGV2cm9uLWxlZnRcIikpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtY2hldnJvbi1sZWZ0XCIpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1iYXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJNb2RhbCIsIlRvb2x0aXAiLCJUb2FzdCIsIlBvcG92ZXIiLCIkdXBkYXRlRm9sbG93aW5nRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiR1cGRhdGVGb2xsb3dlcnNGb3JtIiwiJHR3QXBpS2V5c01vZGFsIiwibW9kYWxUd0FwaUtleXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmV0Y2giLCJhY3Rpb24iLCJtZXRob2QiLCJib2R5IiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidHdBcGlLZXlzSGFuZGxlUmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJjb2RlIiwiaW5uZXJIVE1MIiwiaHRtbCIsInNob3ciLCJzdHlsZSIsImRpc3BsYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIiRidG4iLCJkaXNhYmxlZCIsInJlcGxhY2UiLCJ2YWx1ZSIsImxvZyIsInNpZGViYXJOYXZXcmFwcGVyIiwibWFpbldyYXBwZXIiLCJtZW51VG9nZ2xlQnV0dG9uIiwibWVudVRvZ2dsZUJ1dHRvbkljb24iLCJvdmVybGF5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiY2xpZW50V2lkdGgiLCJjb250YWlucyIsInJlbW92ZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=