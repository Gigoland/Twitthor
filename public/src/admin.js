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
/* harmony import */ var _styles_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/admin.scss */ "./assets/styles/admin.scss");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _admin_js_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/js/main */ "./assets/admin/js/main.js");
/* harmony import */ var _admin_js_main__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_admin_js_main__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_js_twapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/js/twapi */ "./assets/admin/js/twapi.js");
/* harmony import */ var _admin_js_follow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/js/follow */ "./assets/admin/js/follow.js");
// any CSS you import will output into a single css file (admin.css in this case)
 // Ajax

 // You can specify which plugins you need
//import {Modal, Tooltip, Toast, Popover} from 'bootstrap';
// start the Stimulus application

 // ES6 Modules or TypeScript




 // Onload

window.onload = function () {
  // Axios defaults headers
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["X-Requested-With"]) = 'XMLHttpRequest';
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["X-XSRF-TOKEN"]) = document.head.querySelector('meta[name="x-csrf-token"]').content;
};

/***/ }),

/***/ "./assets/admin/js/follow.js":
/*!***********************************!*\
  !*** ./assets/admin/js/follow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");





 // Onload

(function () {
  var $twApiSettingsModal = document.querySelector('#modal-twapi-settings'); // Variables

  var twApiSettingsModalPlugin = null,
      $twApiSettingsModalLoader = null,
      $twApiSettingsModalAlertCount = null,
      $twApiSettingsModalAlertResult = null,
      $twApiSettingsModalAlertMessage = null,
      updateDone = false,
      redirect = null; // Show follow update modal

  var showTwApiSettingsModal = function showTwApiSettingsModal(data) {
    if (data.success) {
      $twApiSettingsModal.querySelector('.modal-body').innerHTML = data.html;
      twApiSettingsModalPlugin.show();
    } else {
      ajaxResponseError(data);
    }
  }; // Get modal html content


  var getAwApiKeysModal = function getAwApiKeysModal() {
    var _this = this;

    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_4___default().post(_this.href).then(function (response) {
        return response.data;
      }).then(function (data) {
        setTimeout(function () {
          showTwApiSettingsModal(data);
        }, 50);
      })["catch"](function (error) {
        ajaxError(error);
      });
    }, 50);
  }; // After update


  var ajaxFollowCallback = function ajaxFollowCallback(data) {
    $twApiSettingsModal.querySelectorAll('.ev').forEach(function (el) {
      return el.disabled = false;
    });
    $twApiSettingsModal.querySelector('.btn-ko').innerHTML = 'Finish';
    $twApiSettingsModalLoader.style.display = 'none';

    if (data.success) {
      if (data.next) {
        updateDone = false;
        $twApiSettingsModal.querySelector('.btn-ok').innerHTML = 'Go to next';
      } else {
        updateDone = true;
        $twApiSettingsModal.querySelector('.btn-ok').innerHTML = 'Done';
        $twApiSettingsModal.querySelector('.btn-ok').setAttribute('data-bs-dismiss', 'modal');
        $twApiSettingsModal.querySelector('.btn-ok').disabled = false;
        $twApiSettingsModal.querySelector('.btn-ko').style.display = 'none';
      }

      $twApiSettingsModalAlertCount.innerHTML = data.callCount;
      $twApiSettingsModalAlertMessage.innerHTML = 'Checked : ' + data.checked + ' / Created : ' + data.created + ' / Updated : ' + data.updated;
      $twApiSettingsModalAlertResult.style.display = 'block';
      redirect = data.path;
    } else {
      twApiSettingsModalPlugin.hide();
      ajaxResponseError(data);
    }
  }; // After unfollow


  var ajaxUnfollowCallback = function ajaxUnfollowCallback(data) {
    console.log(data);

    if (data.success) {} else {
      ajaxResponseError(data);
    }
  }; // Get update following/folowers


  var callUpdateFollow = function callUpdateFollow() {
    var _this2 = this;

    if (!updateDone) {
      $twApiSettingsModalAlertResult.style.display = 'none';
      $twApiSettingsModalLoader.style.display = 'block';
      $twApiSettingsModal.querySelectorAll('.ev').forEach(function (el) {
        return el.disabled = true;
      });
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_4___default().post(_this2.value).then(function (response) {
          return response.data;
        }).then(function (data) {
          setTimeout(function () {
            ajaxFollowCallback(data);
          }, 50);
        })["catch"](function (error) {
          ajaxError(error);
        });
      }, 50);
    }
  }; // Unfollow


  var callUnfollow = function callUnfollow() {
    var _this3 = this;

    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_4___default().post(_this3.value).then(function (response) {
        return response.data;
      }).then(function (data) {
        setTimeout(function () {
          ajaxUnfollowCallback(data);
        }, 50);
      })["catch"](function (error) {
        ajaxError(error);
      });
    }, 50);
  }; // Modal


  if ($twApiSettingsModal) {
    twApiSettingsModalPlugin = new bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal($twApiSettingsModal);
    $twApiSettingsModalLoader = $twApiSettingsModal.querySelector('.modal-loader'); // On show modal

    $twApiSettingsModal.addEventListener('shown.bs.modal', function () {
      updateDone = false;
      $twApiSettingsModalAlertCount = $twApiSettingsModal.querySelector('#twapi-call-counts');
      $twApiSettingsModalAlertResult = $twApiSettingsModal.querySelector('.alert-box-result');
      $twApiSettingsModalAlertMessage = $twApiSettingsModalAlertResult.querySelector('#alert-box-result-message');
    }); // On close modal

    $twApiSettingsModal.addEventListener('hide.bs.modal', function () {
      if (redirect) {
        window.location.href = redirect;
      }
    }); // Update following/followers

    if ($twApiSettingsModal.querySelector('#js-btn-update-follow')) {
      $twApiSettingsModal.querySelector('#js-btn-update-follow').addEventListener('click', callUpdateFollow);
    }
  } // Get modal content


  if (document.querySelector('#js-btn-update')) {
    document.querySelector('#js-btn-update').addEventListener('click', getAwApiKeysModal);
  } // Get modal content


  if (document.querySelector('.js-btn-unfollow')) {
    document.querySelectorAll('.js-btn-unfollow').forEach(function (el) {
      return el.addEventListener('click', callUnfollow);
    });
  }
})();

/***/ }),

/***/ "./assets/admin/js/main.js":
/*!*********************************!*\
  !*** ./assets/admin/js/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"); // @todo error manager


window.ajaxError = function (errors) {
  console.error('Errors:', errors);
}; // @todo error manager


window.ajaxResponseError = function (response) {
  response.errors.forEach(function (error) {
    swal.fire({
      icon: 'error',
      title: error.title,
      text: error.detail,
      footer: '<strong>' + error.status + '</strong>'
    });
  });
  console.error('Errors:', response);
};

(function () {
  var sidebarNavWrapper = document.querySelector('.sidebar-nav-wrapper');
  var mainWrapper = document.querySelector('.main-wrapper');
  var menuToggleButton = document.querySelector('#menu-toggle');
  var menuToggleButtonIcon = document.querySelector('#menu-toggle i');
  var overlay = document.querySelector('.overlay');
  menuToggleButton.addEventListener('click', function () {
    sidebarNavWrapper.classList.toggle('active');
    overlay.classList.add('active');
    mainWrapper.classList.toggle('active');

    if (document.body.clientWidth > 1200) {
      if (menuToggleButtonIcon.classList.contains('fa-chevron-left')) {
        menuToggleButtonIcon.classList.remove('fa-chevron-left');
        menuToggleButtonIcon.classList.add('fa-bars');
      } else {
        menuToggleButtonIcon.classList.remove('fa-bars');
        menuToggleButtonIcon.classList.add('fa-chevron-left');
      }
    } else {
      if (menuToggleButtonIcon.classList.contains('fa-chevron-left')) {
        menuToggleButtonIcon.classList.remove('fa-chevron-left');
        menuToggleButtonIcon.classList.add('fa-bars');
      }
    }
  });
  overlay.addEventListener('click', function () {
    sidebarNavWrapper.classList.remove('active');
    overlay.classList.remove('active');
    mainWrapper.classList.remove('active');
  });
})();

/***/ }),

/***/ "./assets/admin/js/twapi.js":
/*!**********************************!*\
  !*** ./assets/admin/js/twapi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"); //


var setTwApiSettingActive = function setTwApiSettingActive() {
  var _this = this;

  var $loader = this.parentElement.querySelector('.switch-loader');
  document.querySelectorAll('.js-switch-is-active').forEach(function (el) {
    return el.style.display = 'none';
  });
  $loader.style.display = 'block';
  setTimeout(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default().post(_this.value, {
      'isActive': _this.checked
    }).then(function (response) {
      return response.data;
    }).then(function (data) {
      swal.fire({
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      });
      $loader.style.display = 'none';
      document.querySelectorAll('.js-switch-is-active').forEach(function (el) {
        return el.style.display = 'block';
      });
    })["catch"](function (error) {
      ajaxError(error);
    });
  }, 50);
}; // Onload


(function () {
  if (document.querySelector('.js-switch-is-active')) {
    document.querySelectorAll('.js-switch-is-active').forEach(function (el) {
      return el.addEventListener('change', setTwApiSettingActive);
    });
  }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-6a5154","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_for-each_js-node_mo-10a5f0"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlFQUFlO0FBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztXQUVJLG1CQUFVO0FBQ04sV0FBS0MsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLG1FQUEzQjtBQUNIOzs7O0VBSHdCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0NBR0E7O0NBR0E7QUFDQTtBQUVBOztDQUdBOztBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNBSyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVztBQUMxQjtBQUNBSCxFQUFBQSwwRkFBQSxHQUFvRCxnQkFBcEQ7QUFDQUEsRUFBQUEsc0ZBQUEsR0FBZ0RPLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLDJCQUE1QixFQUF5REMsT0FBekc7QUFDQSxDQUpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7Q0FHQTs7QUFDQSxDQUFDLFlBQVc7QUFDVixNQUFNRSxtQkFBbUIsR0FBR0wsUUFBUSxDQUFDRSxhQUFULENBQXVCLHVCQUF2QixDQUE1QixDQURVLENBR1Y7O0FBQ0EsTUFBSUksd0JBQXdCLEdBQUcsSUFBL0I7QUFBQSxNQUNJQyx5QkFBeUIsR0FBRyxJQURoQztBQUFBLE1BRUlDLDZCQUE2QixHQUFHLElBRnBDO0FBQUEsTUFHSUMsOEJBQThCLEdBQUcsSUFIckM7QUFBQSxNQUlJQywrQkFBK0IsR0FBRyxJQUp0QztBQUFBLE1BS0lDLFVBQVUsR0FBRyxLQUxqQjtBQUFBLE1BTUlDLFFBQVEsR0FBRyxJQU5mLENBSlUsQ0FZVjs7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQVNDLElBQVQsRUFBZTtBQUM1QyxRQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0I7QUFDaEJWLE1BQUFBLG1CQUFtQixDQUFDSCxhQUFwQixDQUFrQyxhQUFsQyxFQUFpRGMsU0FBakQsR0FBNkRGLElBQUksQ0FBQ0csSUFBbEU7QUFDQVgsTUFBQUEsd0JBQXdCLENBQUNZLElBQXpCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xDLE1BQUFBLGlCQUFpQixDQUFDTCxJQUFELENBQWpCO0FBQ0Q7QUFDRixHQVBELENBYlUsQ0FzQlY7OztBQUNBLE1BQU1NLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUFBOztBQUNuQ0MsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZjVCLE1BQUFBLGlEQUFBLENBQVcsS0FBSSxDQUFDOEIsSUFBaEIsRUFDQ0MsSUFERCxDQUNNLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNYLElBQWI7QUFBQSxPQURkLEVBRUNVLElBRkQsQ0FFTSxVQUFBVixJQUFJLEVBQUk7QUFDWk8sUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZlIsVUFBQUEsc0JBQXNCLENBQUNDLElBQUQsQ0FBdEI7QUFDRCxTQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0QsT0FORCxXQU9PLFVBQUFZLEtBQUssRUFBSTtBQUNkQyxRQUFBQSxTQUFTLENBQUNELEtBQUQsQ0FBVDtBQUNELE9BVEQ7QUFVRCxLQVhTLEVBV1AsRUFYTyxDQUFWO0FBWUQsR0FiRCxDQXZCVSxDQXNDVjs7O0FBQ0EsTUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFTZCxJQUFULEVBQWU7QUFDeENULElBQUFBLG1CQUFtQixDQUFDd0IsZ0JBQXBCLENBQXFDLEtBQXJDLEVBQTRDQyxPQUE1QyxDQUFvRCxVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDQyxRQUFILEdBQWMsS0FBbEI7QUFBQSxLQUF0RDtBQUNBM0IsSUFBQUEsbUJBQW1CLENBQUNILGFBQXBCLENBQWtDLFNBQWxDLEVBQTZDYyxTQUE3QyxHQUF5RCxRQUF6RDtBQUNBVCxJQUFBQSx5QkFBeUIsQ0FBQzBCLEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxNQUExQzs7QUFDQSxRQUFJcEIsSUFBSSxDQUFDQyxPQUFULEVBQWtCO0FBQ2hCLFVBQUlELElBQUksQ0FBQ3FCLElBQVQsRUFBZTtBQUNieEIsUUFBQUEsVUFBVSxHQUFHLEtBQWI7QUFDQU4sUUFBQUEsbUJBQW1CLENBQUNILGFBQXBCLENBQWtDLFNBQWxDLEVBQTZDYyxTQUE3QyxHQUF5RCxZQUF6RDtBQUNELE9BSEQsTUFHTztBQUNMTCxRQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNBTixRQUFBQSxtQkFBbUIsQ0FBQ0gsYUFBcEIsQ0FBa0MsU0FBbEMsRUFBNkNjLFNBQTdDLEdBQXlELE1BQXpEO0FBQ0FYLFFBQUFBLG1CQUFtQixDQUFDSCxhQUFwQixDQUFrQyxTQUFsQyxFQUE2Q2tDLFlBQTdDLENBQTBELGlCQUExRCxFQUE2RSxPQUE3RTtBQUNBL0IsUUFBQUEsbUJBQW1CLENBQUNILGFBQXBCLENBQWtDLFNBQWxDLEVBQTZDOEIsUUFBN0MsR0FBd0QsS0FBeEQ7QUFDQTNCLFFBQUFBLG1CQUFtQixDQUFDSCxhQUFwQixDQUFrQyxTQUFsQyxFQUE2QytCLEtBQTdDLENBQW1EQyxPQUFuRCxHQUE2RCxNQUE3RDtBQUNEOztBQUNEMUIsTUFBQUEsNkJBQTZCLENBQUNRLFNBQTlCLEdBQTBDRixJQUFJLENBQUN1QixTQUEvQztBQUNBM0IsTUFBQUEsK0JBQStCLENBQUNNLFNBQWhDLEdBQTRDLGVBQWVGLElBQUksQ0FBQ3dCLE9BQXBCLEdBQThCLGVBQTlCLEdBQWdEeEIsSUFBSSxDQUFDeUIsT0FBckQsR0FBK0QsZUFBL0QsR0FBaUZ6QixJQUFJLENBQUMwQixPQUFsSTtBQUNBL0IsTUFBQUEsOEJBQThCLENBQUN3QixLQUEvQixDQUFxQ0MsT0FBckMsR0FBK0MsT0FBL0M7QUFDQXRCLE1BQUFBLFFBQVEsR0FBR0UsSUFBSSxDQUFDMkIsSUFBaEI7QUFDRCxLQWZELE1BZU87QUFDTG5DLE1BQUFBLHdCQUF3QixDQUFDb0MsSUFBekI7QUFDQXZCLE1BQUFBLGlCQUFpQixDQUFDTCxJQUFELENBQWpCO0FBQ0Q7QUFDRixHQXZCRCxDQXZDVSxDQWdFVjs7O0FBQ0EsTUFBTTZCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBUzdCLElBQVQsRUFBZTtBQUMxQzhCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZL0IsSUFBWjs7QUFDQSxRQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0IsQ0FFakIsQ0FGRCxNQUVPO0FBQ0xJLE1BQUFBLGlCQUFpQixDQUFDTCxJQUFELENBQWpCO0FBQ0Q7QUFDRixHQVBELENBakVVLENBMEVWOzs7QUFDQSxNQUFNZ0MsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQUE7O0FBQ2xDLFFBQUksQ0FBQ25DLFVBQUwsRUFBaUI7QUFDZkYsTUFBQUEsOEJBQThCLENBQUN3QixLQUEvQixDQUFxQ0MsT0FBckMsR0FBK0MsTUFBL0M7QUFDQTNCLE1BQUFBLHlCQUF5QixDQUFDMEIsS0FBMUIsQ0FBZ0NDLE9BQWhDLEdBQTBDLE9BQTFDO0FBQ0E3QixNQUFBQSxtQkFBbUIsQ0FBQ3dCLGdCQUFwQixDQUFxQyxLQUFyQyxFQUE0Q0MsT0FBNUMsQ0FBb0QsVUFBQUMsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQ0MsUUFBSCxHQUFjLElBQWxCO0FBQUEsT0FBdEQ7QUFDQVgsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZjVCLFFBQUFBLGlEQUFBLENBQVcsTUFBSSxDQUFDc0QsS0FBaEIsRUFDQ3ZCLElBREQsQ0FDTSxVQUFBQyxRQUFRO0FBQUEsaUJBQUlBLFFBQVEsQ0FBQ1gsSUFBYjtBQUFBLFNBRGQsRUFFQ1UsSUFGRCxDQUVNLFVBQUFWLElBQUksRUFBSTtBQUNaTyxVQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmTyxZQUFBQSxrQkFBa0IsQ0FBQ2QsSUFBRCxDQUFsQjtBQUNELFdBRlMsRUFFUCxFQUZPLENBQVY7QUFHRCxTQU5ELFdBT08sVUFBQVksS0FBSyxFQUFJO0FBQ2RDLFVBQUFBLFNBQVMsQ0FBQ0QsS0FBRCxDQUFUO0FBQ0QsU0FURDtBQVVELE9BWFMsRUFXUCxFQVhPLENBQVY7QUFZRDtBQUNGLEdBbEJELENBM0VVLENBK0ZWOzs7QUFDQSxNQUFNc0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVztBQUFBOztBQUM5QjNCLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Y1QixNQUFBQSxpREFBQSxDQUFXLE1BQUksQ0FBQ3NELEtBQWhCLEVBQ0N2QixJQURELENBQ00sVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ1gsSUFBYjtBQUFBLE9BRGQsRUFFQ1UsSUFGRCxDQUVNLFVBQUFWLElBQUksRUFBSTtBQUNaTyxRQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmc0IsVUFBQUEsb0JBQW9CLENBQUM3QixJQUFELENBQXBCO0FBQ0QsU0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdELE9BTkQsV0FPTyxVQUFBWSxLQUFLLEVBQUk7QUFDZEMsUUFBQUEsU0FBUyxDQUFDRCxLQUFELENBQVQ7QUFDRCxPQVREO0FBVUQsS0FYUyxFQVdQLEVBWE8sQ0FBVjtBQVlELEdBYkQsQ0FoR1UsQ0ErR1Y7OztBQUNBLE1BQUlyQixtQkFBSixFQUF5QjtBQUN2QkMsSUFBQUEsd0JBQXdCLEdBQUcsSUFBSUYsNENBQUosQ0FBVUMsbUJBQVYsQ0FBM0I7QUFDQUUsSUFBQUEseUJBQXlCLEdBQUdGLG1CQUFtQixDQUFDSCxhQUFwQixDQUFrQyxlQUFsQyxDQUE1QixDQUZ1QixDQUl2Qjs7QUFDQUcsSUFBQUEsbUJBQW1CLENBQUM0QyxnQkFBcEIsQ0FBcUMsZ0JBQXJDLEVBQXVELFlBQVc7QUFDaEV0QyxNQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNBSCxNQUFBQSw2QkFBNkIsR0FBR0gsbUJBQW1CLENBQUNILGFBQXBCLENBQWtDLG9CQUFsQyxDQUFoQztBQUNBTyxNQUFBQSw4QkFBOEIsR0FBR0osbUJBQW1CLENBQUNILGFBQXBCLENBQWtDLG1CQUFsQyxDQUFqQztBQUNBUSxNQUFBQSwrQkFBK0IsR0FBR0QsOEJBQThCLENBQUNQLGFBQS9CLENBQTZDLDJCQUE3QyxDQUFsQztBQUNELEtBTEQsRUFMdUIsQ0FZdkI7O0FBQ0FHLElBQUFBLG1CQUFtQixDQUFDNEMsZ0JBQXBCLENBQXFDLGVBQXJDLEVBQXNELFlBQVc7QUFDL0QsVUFBSXJDLFFBQUosRUFBYztBQUNaakIsUUFBQUEsTUFBTSxDQUFDdUQsUUFBUCxDQUFnQjNCLElBQWhCLEdBQXVCWCxRQUF2QjtBQUNEO0FBQ0YsS0FKRCxFQWJ1QixDQW1CdkI7O0FBQ0EsUUFBSVAsbUJBQW1CLENBQUNILGFBQXBCLENBQWtDLHVCQUFsQyxDQUFKLEVBQWdFO0FBQzlERyxNQUFBQSxtQkFBbUIsQ0FBQ0gsYUFBcEIsQ0FBa0MsdUJBQWxDLEVBQTJEK0MsZ0JBQTNELENBQTRFLE9BQTVFLEVBQXFGSCxnQkFBckY7QUFDRDtBQUNGLEdBdklTLENBeUlWOzs7QUFDQSxNQUFJOUMsUUFBUSxDQUFDRSxhQUFULENBQXVCLGdCQUF2QixDQUFKLEVBQThDO0FBQzVDRixJQUFBQSxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDK0MsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FN0IsaUJBQW5FO0FBQ0QsR0E1SVMsQ0E4SVY7OztBQUNBLE1BQUlwQixRQUFRLENBQUNFLGFBQVQsQ0FBdUIsa0JBQXZCLENBQUosRUFBZ0Q7QUFDOUNGLElBQUFBLFFBQVEsQ0FBQzZCLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsT0FBOUMsQ0FBc0QsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ2tCLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCRCxZQUE3QixDQUFKO0FBQUEsS0FBeEQ7QUFDRDtBQUNGLENBbEpEOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsSUFBTUcsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHVFQUFELENBQXBCLEVBRUE7OztBQUNBekQsTUFBTSxDQUFDZ0MsU0FBUCxHQUFtQixVQUFTMEIsTUFBVCxFQUFpQjtBQUNsQ1QsRUFBQUEsT0FBTyxDQUFDbEIsS0FBUixDQUFjLFNBQWQsRUFBeUIyQixNQUF6QjtBQUNELENBRkQsRUFJQTs7O0FBQ0ExRCxNQUFNLENBQUN3QixpQkFBUCxHQUEyQixVQUFTTSxRQUFULEVBQW1CO0FBQzVDQSxFQUFBQSxRQUFRLENBQUM0QixNQUFULENBQWdCdkIsT0FBaEIsQ0FBd0IsVUFBQUosS0FBSyxFQUFJO0FBQy9CeUIsSUFBQUEsSUFBSSxDQUFDRyxJQUFMLENBQVU7QUFDUkMsTUFBQUEsSUFBSSxFQUFFLE9BREU7QUFFUkMsTUFBQUEsS0FBSyxFQUFFOUIsS0FBSyxDQUFDOEIsS0FGTDtBQUdSQyxNQUFBQSxJQUFJLEVBQUUvQixLQUFLLENBQUNnQyxNQUhKO0FBSVJDLE1BQUFBLE1BQU0sRUFBRSxhQUFhakMsS0FBSyxDQUFDa0MsTUFBbkIsR0FBNEI7QUFKNUIsS0FBVjtBQU1ELEdBUEQ7QUFRQWhCLEVBQUFBLE9BQU8sQ0FBQ2xCLEtBQVIsQ0FBYyxTQUFkLEVBQXlCRCxRQUF6QjtBQUNELENBVkQ7O0FBWUEsQ0FBQyxZQUFXO0FBQ1YsTUFBTW9DLGlCQUFpQixHQUFHN0QsUUFBUSxDQUFDRSxhQUFULENBQXVCLHNCQUF2QixDQUExQjtBQUNBLE1BQU00RCxXQUFXLEdBQUc5RCxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxNQUFNNkQsZ0JBQWdCLEdBQUcvRCxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBekI7QUFDQSxNQUFNOEQsb0JBQW9CLEdBQUdoRSxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQTdCO0FBQ0EsTUFBTStELE9BQU8sR0FBR2pFLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUVBNkQsRUFBQUEsZ0JBQWdCLENBQUNkLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DWSxJQUFBQSxpQkFBaUIsQ0FBQ0ssU0FBbEIsQ0FBNEJDLE1BQTVCLENBQW1DLFFBQW5DO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkUsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQU4sSUFBQUEsV0FBVyxDQUFDSSxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixRQUE3Qjs7QUFDQSxRQUFJbkUsUUFBUSxDQUFDcUUsSUFBVCxDQUFjQyxXQUFkLEdBQTRCLElBQWhDLEVBQXNDO0FBQ3BDLFVBQUlOLG9CQUFvQixDQUFDRSxTQUFyQixDQUErQkssUUFBL0IsQ0FBd0MsaUJBQXhDLENBQUosRUFBZ0U7QUFDOURQLFFBQUFBLG9CQUFvQixDQUFDRSxTQUFyQixDQUErQk0sTUFBL0IsQ0FBc0MsaUJBQXRDO0FBQ0FSLFFBQUFBLG9CQUFvQixDQUFDRSxTQUFyQixDQUErQkUsR0FBL0IsQ0FBbUMsU0FBbkM7QUFDRCxPQUhELE1BR087QUFDTEosUUFBQUEsb0JBQW9CLENBQUNFLFNBQXJCLENBQStCTSxNQUEvQixDQUFzQyxTQUF0QztBQUNBUixRQUFBQSxvQkFBb0IsQ0FBQ0UsU0FBckIsQ0FBK0JFLEdBQS9CLENBQW1DLGlCQUFuQztBQUNEO0FBQ0YsS0FSRCxNQVFPO0FBQ0wsVUFBSUosb0JBQW9CLENBQUNFLFNBQXJCLENBQStCSyxRQUEvQixDQUF3QyxpQkFBeEMsQ0FBSixFQUFnRTtBQUM5RFAsUUFBQUEsb0JBQW9CLENBQUNFLFNBQXJCLENBQStCTSxNQUEvQixDQUFzQyxpQkFBdEM7QUFDQVIsUUFBQUEsb0JBQW9CLENBQUNFLFNBQXJCLENBQStCRSxHQUEvQixDQUFtQyxTQUFuQztBQUNEO0FBQ0Y7QUFDRixHQWxCRDtBQW9CQUgsRUFBQUEsT0FBTyxDQUFDaEIsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUN0Q1ksSUFBQUEsaUJBQWlCLENBQUNLLFNBQWxCLENBQTRCTSxNQUE1QixDQUFtQyxRQUFuQztBQUNBUCxJQUFBQSxPQUFPLENBQUNDLFNBQVIsQ0FBa0JNLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FWLElBQUFBLFdBQVcsQ0FBQ0ksU0FBWixDQUFzQk0sTUFBdEIsQ0FBNkIsUUFBN0I7QUFDRCxHQUpEO0FBS0QsQ0FoQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUVBLElBQU1yQixJQUFJLEdBQUdDLG1CQUFPLENBQUMsdUVBQUQsQ0FBcEIsRUFFQTs7O0FBQ0EsSUFBTXFCLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBVztBQUFBOztBQUN2QyxNQUFJQyxPQUFPLEdBQUcsS0FBS0MsYUFBTCxDQUFtQnpFLGFBQW5CLENBQWlDLGdCQUFqQyxDQUFkO0FBQ0FGLEVBQUFBLFFBQVEsQ0FBQzZCLGdCQUFULENBQTBCLHNCQUExQixFQUFrREMsT0FBbEQsQ0FBMEQsVUFBQUMsRUFBRTtBQUFBLFdBQUlBLEVBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxPQUFULEdBQW1CLE1BQXZCO0FBQUEsR0FBNUQ7QUFDQXdDLEVBQUFBLE9BQU8sQ0FBQ3pDLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNBYixFQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmNUIsSUFBQUEsaURBQUEsQ0FBVyxLQUFJLENBQUNzRCxLQUFoQixFQUF1QjtBQUNyQixrQkFBWSxLQUFJLENBQUNUO0FBREksS0FBdkIsRUFHQ2QsSUFIRCxDQUdNLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNYLElBQWI7QUFBQSxLQUhkLEVBSUNVLElBSkQsQ0FJTSxVQUFBVixJQUFJLEVBQUk7QUFDWnFDLE1BQUFBLElBQUksQ0FBQ0csSUFBTCxDQUFVO0FBQ1JDLFFBQUFBLElBQUksRUFBRSxTQURFO0FBRVJDLFFBQUFBLEtBQUssRUFBRTFDLElBQUksQ0FBQzhELE9BRko7QUFHUkMsUUFBQUEsaUJBQWlCLEVBQUUsS0FIWDtBQUlSQyxRQUFBQSxLQUFLLEVBQUU7QUFKQyxPQUFWO0FBTUFKLE1BQUFBLE9BQU8sQ0FBQ3pDLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNBbEMsTUFBQUEsUUFBUSxDQUFDNkIsZ0JBQVQsQ0FBMEIsc0JBQTFCLEVBQWtEQyxPQUFsRCxDQUEwRCxVQUFBQyxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDRSxLQUFILENBQVNDLE9BQVQsR0FBbUIsT0FBdkI7QUFBQSxPQUE1RDtBQUNELEtBYkQsV0FjTyxVQUFBUixLQUFLLEVBQUk7QUFDZEMsTUFBQUEsU0FBUyxDQUFDRCxLQUFELENBQVQ7QUFDRCxLQWhCRDtBQWlCRCxHQWxCUyxFQWtCUCxFQWxCTyxDQUFWO0FBbUJELENBdkJELEVBeUJBOzs7QUFDQSxDQUFDLFlBQVc7QUFDVixNQUFJMUIsUUFBUSxDQUFDRSxhQUFULENBQXVCLHNCQUF2QixDQUFKLEVBQW9EO0FBQ2xERixJQUFBQSxRQUFRLENBQUM2QixnQkFBVCxDQUEwQixzQkFBMUIsRUFBa0RDLE9BQWxELENBQTBELFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNrQixnQkFBSCxDQUFvQixRQUFwQixFQUE4QndCLHFCQUE5QixDQUFKO0FBQUEsS0FBNUQ7QUFDRDtBQUNGLENBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Q0M3QkE7O0FBQ08sSUFBTU8sR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQzNCLHlJQUFELENBQTVCLEVBTVA7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL2ZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvdHdhcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYWRtaW4uY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYWRtaW4uc2Nzcyc7XG5cbi8vIEFqYXhcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIFlvdSBjYW4gc3BlY2lmeSB3aGljaCBwbHVnaW5zIHlvdSBuZWVkXG4vL2ltcG9ydCB7TW9kYWwsIFRvb2x0aXAsIFRvYXN0LCBQb3BvdmVyfSBmcm9tICdib290c3RyYXAnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG4vLyBFUzYgTW9kdWxlcyBvciBUeXBlU2NyaXB0XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbmltcG9ydCAnLi9hZG1pbi9qcy9tYWluJztcbmltcG9ydCAnLi9hZG1pbi9qcy90d2FwaSc7XG5pbXBvcnQgJy4vYWRtaW4vanMvZm9sbG93JztcblxuLy8gT25sb2FkXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdC8vIEF4aW9zIGRlZmF1bHRzIGhlYWRlcnNcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVhTUkYtVE9LRU4nXSA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwieC1jc3JmLXRva2VuXCJdJykuY29udGVudDtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJztcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICR0d0FwaVNldHRpbmdzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdHdhcGktc2V0dGluZ3MnKTtcblxuICAvLyBWYXJpYWJsZXNcbiAgdmFyIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50ID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlID0gbnVsbCxcbiAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZSxcbiAgICAgIHJlZGlyZWN0ID0gbnVsbDtcblxuICAvLyBTaG93IGZvbGxvdyB1cGRhdGUgbW9kYWxcbiAgY29uc3Qgc2hvd1R3QXBpU2V0dGluZ3NNb2RhbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gZGF0YS5odG1sO1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWpheFJlc3BvbnNlRXJyb3IoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCBtb2RhbCBodG1sIGNvbnRlbnRcbiAgY29uc3QgZ2V0QXdBcGlLZXlzTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QodGhpcy5ocmVmKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzaG93VHdBcGlTZXR0aW5nc01vZGFsKGRhdGEpO1xuICAgICAgICB9LCA1MCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWpheEVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sIDUwKTtcbiAgfTtcblxuICAvLyBBZnRlciB1cGRhdGVcbiAgY29uc3QgYWpheEZvbGxvd0NhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IGZhbHNlKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4ta28nKS5pbm5lckhUTUwgPSAnRmluaXNoJztcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgaWYgKGRhdGEubmV4dCkge1xuICAgICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLmlubmVySFRNTCA9ICdHbyB0byBuZXh0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tb2snKS5pbm5lckhUTUwgPSAnRG9uZSc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLnNldEF0dHJpYnV0ZSgnZGF0YS1icy1kaXNtaXNzJywgJ21vZGFsJyk7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudC5pbm5lckhUTUwgPSBkYXRhLmNhbGxDb3VudDtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gJ0NoZWNrZWQgOiAnICsgZGF0YS5jaGVja2VkICsgJyAvIENyZWF0ZWQgOiAnICsgZGF0YS5jcmVhdGVkICsgJyAvIFVwZGF0ZWQgOiAnICsgZGF0YS51cGRhdGVkO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVkaXJlY3QgPSBkYXRhLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5oaWRlKCk7XG4gICAgICBhamF4UmVzcG9uc2VFcnJvcihkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdW5mb2xsb3dcbiAgY29uc3QgYWpheFVuZm9sbG93Q2FsbGJhY2sgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGFqYXhSZXNwb25zZUVycm9yKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgdXBkYXRlIGZvbGxvd2luZy9mb2xvd2Vyc1xuICBjb25zdCBjYWxsVXBkYXRlRm9sbG93ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF1cGRhdGVEb25lKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldicpLmZvckVhY2goZWwgPT4gZWwuZGlzYWJsZWQgPSB0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWpheEZvbGxvd0NhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBhamF4RXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVW5mb2xsb3dcbiAgY29uc3QgY2FsbFVuZm9sbG93ID0gZnVuY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFqYXhVbmZvbGxvd0NhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9LCA1MCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWpheEVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sIDUwKTtcbiAgfTtcblxuICAvLyBNb2RhbFxuICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbCkge1xuICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiA9IG5ldyBNb2RhbCgkdHdBcGlTZXR0aW5nc01vZGFsKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9hZGVyJyk7XG5cbiAgICAvLyBPbiBzaG93IG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0d2FwaS1jYWxsLWNvdW50cycpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0ID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtYm94LXJlc3VsdCcpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9ICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcjYWxlcnQtYm94LXJlc3VsdC1tZXNzYWdlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBjbG9zZSBtb2RhbFxuICAgICR0d0FwaVNldHRpbmdzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3Q7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgZm9sbG93aW5nL2ZvbGxvd2Vyc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLWZvbGxvdycpKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLWZvbGxvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFVwZGF0ZUZvbGxvdyk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IG1vZGFsIGNvbnRlbnRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0QXdBcGlLZXlzTW9kYWwpO1xuICB9XG5cbiAgLy8gR2V0IG1vZGFsIGNvbnRlbnRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tdW5mb2xsb3cnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tdW5mb2xsb3cnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFVuZm9sbG93KSk7XG4gIH1cbn0pKCk7XG4iLCJjb25zdCBzd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcclxuXHJcbi8vIEB0b2RvIGVycm9yIG1hbmFnZXJcclxud2luZG93LmFqYXhFcnJvciA9IGZ1bmN0aW9uKGVycm9ycykge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ0Vycm9yczonLCBlcnJvcnMpO1xyXG59O1xyXG5cclxuLy8gQHRvZG8gZXJyb3IgbWFuYWdlclxyXG53aW5kb3cuYWpheFJlc3BvbnNlRXJyb3IgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIHJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcclxuICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgIHRpdGxlOiBlcnJvci50aXRsZSxcclxuICAgICAgdGV4dDogZXJyb3IuZGV0YWlsLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyBlcnJvci5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgY29uc29sZS5lcnJvcignRXJyb3JzOicsIHJlc3BvbnNlKTtcclxufTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBjb25zdCBzaWRlYmFyTmF2V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW5hdi13cmFwcGVyJyk7XHJcbiAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13cmFwcGVyJyk7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZScpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlIGknKTtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbiAgbWVudVRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXJOYXZXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiAxMjAwKSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tbGVmdCcpKSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1sZWZ0JykpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXJOYXZXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBzd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcblxuLy9cbmNvbnN0IHNldFR3QXBpU2V0dGluZ0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGxvYWRlciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWxvYWRlcicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gICRsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSwge1xuICAgICAgJ2lzQWN0aXZlJzogdGhpcy5jaGVja2VkXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogZGF0YS5tZXNzYWdlLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgIHRpbWVyOiAxNTAwXG4gICAgICB9KTtcbiAgICAgICRsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXMtYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgYWpheEVycm9yKGVycm9yKTtcbiAgICB9KTtcbiAgfSwgNTApO1xufTtcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFR3QXBpU2V0dGluZ0FjdGl2ZSkpO1xuICB9XG59KSgpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImF4aW9zIiwiU3dhbCIsIndpbmRvdyIsIm9ubG9hZCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiTW9kYWwiLCIkdHdBcGlTZXR0aW5nc01vZGFsIiwidHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luIiwiJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSIsInVwZGF0ZURvbmUiLCJyZWRpcmVjdCIsInNob3dUd0FwaVNldHRpbmdzTW9kYWwiLCJkYXRhIiwic3VjY2VzcyIsImlubmVySFRNTCIsImh0bWwiLCJzaG93IiwiYWpheFJlc3BvbnNlRXJyb3IiLCJnZXRBd0FwaUtleXNNb2RhbCIsInNldFRpbWVvdXQiLCJwb3N0IiwiaHJlZiIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiYWpheEVycm9yIiwiYWpheEZvbGxvd0NhbGxiYWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImRpc2FibGVkIiwic3R5bGUiLCJkaXNwbGF5IiwibmV4dCIsInNldEF0dHJpYnV0ZSIsImNhbGxDb3VudCIsImNoZWNrZWQiLCJjcmVhdGVkIiwidXBkYXRlZCIsInBhdGgiLCJoaWRlIiwiYWpheFVuZm9sbG93Q2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiY2FsbFVwZGF0ZUZvbGxvdyIsInZhbHVlIiwiY2FsbFVuZm9sbG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwic3dhbCIsInJlcXVpcmUiLCJlcnJvcnMiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCIsImRldGFpbCIsImZvb3RlciIsInN0YXR1cyIsInNpZGViYXJOYXZXcmFwcGVyIiwibWFpbldyYXBwZXIiLCJtZW51VG9nZ2xlQnV0dG9uIiwibWVudVRvZ2dsZUJ1dHRvbkljb24iLCJvdmVybGF5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY29udGFpbnMiLCJyZW1vdmUiLCJzZXRUd0FwaVNldHRpbmdBY3RpdmUiLCIkbG9hZGVyIiwicGFyZW50RWxlbWVudCIsIm1lc3NhZ2UiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9