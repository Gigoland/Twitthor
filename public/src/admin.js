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

      if (data.warning) {
        $twApiSettingsModal.querySelector('.btn-ok').style.display = 'none';
      }
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

    if (!updateDone) {
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_4___default().post(_this3.value).then(function (response) {
          return response.data;
        }).then(function (data) {
          setTimeout(function () {
            console.log(data);
          }, 50);
        })["catch"](function (error) {
          ajaxError(error);
        });
      }, 50);
    }
  }; // Tw profile


  var shwoTwProfile = function shwoTwProfile() {
    var _this4 = this;

    setTimeout(function () {
      var win = window.open(_this4.href, "_blank", "location=no,menubar=no,status=no,titilebar=no,resizable=no,top=0,left=0,width=600,height=500");
      win.focus();
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
  } // Get window


  if (document.querySelector('.js-btn-tw-profile')) {
    document.querySelectorAll('.js-btn-tw-profile').forEach(function (el) {
      return el.addEventListener('click', shwoTwProfile);
    });
  } // Unfollow


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

var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"); // @todo error manager


window.ajaxError = function (errors) {
  console.error('Errors:', errors);
}; // @todo error manager


window.ajaxResponseError = function (response) {
  if (response.error) {
    swal.fire({
      icon: 'error',
      title: response.error.title,
      text: response.error.detail,
      footer: '<strong>' + response.error.status + '</strong>'
    });
  } else if (response.warning) {
    swal.fire({
      icon: 'warning',
      title: response.warning.title,
      text: response.warning.detail,
      footer: '<strong>' + response.warning.status + '</strong>'
    });
  } else {
    swal.fire({
      icon: 'info',
      title: response.info.title,
      text: response.info.detail,
      footer: '<strong>' + response.info.status + '</strong>'
    });
  }

  console.error('Erros:', response);
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

  var $loader = this.parentElement.querySelector('.switch-loader'),
      target = this.getAttribute('data-target');
  document.querySelectorAll('.js-switch-is-active').forEach(function (el) {
    return el.style.display = 'none';
  });
  document.querySelectorAll('.js-tw-auth-btn').forEach(function (el) {
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
      document.querySelector('.js-tw-auth-btn-' + target).style.display = 'block';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZ0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLEVBQWtEQyxPQUFsRCxDQUEwRCxVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDb0IsZ0JBQUgsQ0FBb0IsUUFBcEIsRUFBOEJ5QixxQkFBOUIsQ0FBSjtBQUFBLEtBQTVEO0FBQ0Q7QUFDRixDQUpEOzs7Ozs7Ozs7Ozs7Ozs7O0NDaENBOztBQUNPLElBQU1TLEdBQUcsR0FBR0QsMEVBQWdCLENBQUM5Qix5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9mb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL3R3YXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFkbWluLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FkbWluLnNjc3MnO1xuXG4vLyBBamF4XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBZb3UgY2FuIHNwZWNpZnkgd2hpY2ggcGx1Z2lucyB5b3UgbmVlZFxuLy9pbXBvcnQge01vZGFsLCBUb29sdGlwLCBUb2FzdCwgUG9wb3Zlcn0gZnJvbSAnYm9vdHN0cmFwJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gRVM2IE1vZHVsZXMgb3IgVHlwZVNjcmlwdFxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5pbXBvcnQgJy4vYWRtaW4vanMvbWFpbic7XG5pbXBvcnQgJy4vYWRtaW4vanMvdHdhcGknO1xuaW1wb3J0ICcuL2FkbWluL2pzL2ZvbGxvdyc7XG5cbi8vIE9ubG9hZFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBBeGlvcyBkZWZhdWx0cyBoZWFkZXJzXG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1YU1JGLVRPS0VOJ10gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cIngtY3NyZi10b2tlblwiXScpLmNvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIE9ubG9hZFxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkdHdBcGlTZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXR3YXBpLXNldHRpbmdzJyk7XG5cbiAgLy8gVmFyaWFibGVzXG4gIHZhciB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9IG51bGwsXG4gICAgICB1cGRhdGVEb25lID0gZmFsc2UsXG4gICAgICByZWRpcmVjdCA9IG51bGw7XG5cbiAgLy8gU2hvdyBmb2xsb3cgdXBkYXRlIG1vZGFsXG4gIGNvbnN0IHNob3dUd0FwaVNldHRpbmdzTW9kYWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpLmlubmVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5zaG93KCk7XG4gICAgICBpZiAoZGF0YS53YXJuaW5nKSB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFqYXhSZXNwb25zZUVycm9yKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgbW9kYWwgaHRtbCBjb250ZW50XG4gIGNvbnN0IGdldEF3QXBpS2V5c01vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KHRoaXMuaHJlZilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2hvd1R3QXBpU2V0dGluZ3NNb2RhbChkYXRhKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGFqYXhFcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9LCA1MCk7XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdXBkYXRlXG4gIGNvbnN0IGFqYXhGb2xsb3dDYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldicpLmZvckVhY2goZWwgPT4gZWwuZGlzYWJsZWQgPSBmYWxzZSk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWtvJykuaW5uZXJIVE1MID0gJ0ZpbmlzaCc7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIGlmIChkYXRhLm5leHQpIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tb2snKS5pbm5lckhUTUwgPSAnR28gdG8gbmV4dCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVEb25lID0gdHJ1ZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLW9rJykuaW5uZXJIVE1MID0gJ0RvbmUnO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tb2snKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tb2snKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4ta28nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQuaW5uZXJIVE1MID0gZGF0YS5jYWxsQ291bnQ7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9ICdDaGVja2VkIDogJyArIGRhdGEuY2hlY2tlZCArICcgLyBDcmVhdGVkIDogJyArIGRhdGEuY3JlYXRlZCArICcgLyBVcGRhdGVkIDogJyArIGRhdGEudXBkYXRlZDtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJlZGlyZWN0ID0gZGF0YS5wYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4uaGlkZSgpO1xuICAgICAgYWpheFJlc3BvbnNlRXJyb3IoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEFmdGVyIHVuZm9sbG93XG4gIGNvbnN0IGFqYXhVbmZvbGxvd0NhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICBhamF4UmVzcG9uc2VFcnJvcihkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IHVwZGF0ZSBmb2xsb3dpbmcvZm9sb3dlcnNcbiAgY29uc3QgY2FsbFVwZGF0ZUZvbGxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdXBkYXRlRG9uZSkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuZXYnKS5mb3JFYWNoKGVsID0+IGVsLmRpc2FibGVkID0gdHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLnZhbHVlKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFqYXhGb2xsb3dDYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgYWpheEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVuZm9sbG93XG4gIGNvbnN0IGNhbGxVbmZvbGxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdXBkYXRlRG9uZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgYWpheEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFR3IHByb2ZpbGVcbiAgY29uc3Qgc2h3b1R3UHJvZmlsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IHdpbiA9IHdpbmRvdy5vcGVuKFxuICAgICAgICB0aGlzLmhyZWYsXG4gICAgICAgIFwiX2JsYW5rXCIsXG4gICAgICAgIFwibG9jYXRpb249bm8sbWVudWJhcj1ubyxzdGF0dXM9bm8sdGl0aWxlYmFyPW5vLHJlc2l6YWJsZT1ubyx0b3A9MCxsZWZ0PTAsd2lkdGg9NjAwLGhlaWdodD01MDBcIlxuICAgICAgKTtcbiAgICAgIHdpbi5mb2N1cygpO1xuICAgIH0sIDUwKTtcbiAgfTtcblxuICAvLyBNb2RhbFxuICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbCkge1xuICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiA9IG5ldyBNb2RhbCgkdHdBcGlTZXR0aW5nc01vZGFsKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9hZGVyJyk7XG5cbiAgICAvLyBPbiBzaG93IG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0d2FwaS1jYWxsLWNvdW50cycpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0ID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtYm94LXJlc3VsdCcpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9ICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcjYWxlcnQtYm94LXJlc3VsdC1tZXNzYWdlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBjbG9zZSBtb2RhbFxuICAgICR0d0FwaVNldHRpbmdzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3Q7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgZm9sbG93aW5nL2ZvbGxvd2Vyc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLWZvbGxvdycpKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLWZvbGxvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFVwZGF0ZUZvbGxvdyk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IG1vZGFsIGNvbnRlbnRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0QXdBcGlLZXlzTW9kYWwpO1xuICB9XG5cbiAgLy8gR2V0IHdpbmRvd1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bi10dy1wcm9maWxlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYnRuLXR3LXByb2ZpbGUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2h3b1R3UHJvZmlsZSkpO1xuICB9XG5cbiAgLy8gVW5mb2xsb3dcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tdW5mb2xsb3cnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tdW5mb2xsb3cnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFVuZm9sbG93KSk7XG4gIH1cbn0pKCk7XG4iLCJjb25zdCBzd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcclxuXHJcbi8vIEB0b2RvIGVycm9yIG1hbmFnZXJcclxud2luZG93LmFqYXhFcnJvciA9IGZ1bmN0aW9uKGVycm9ycykge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ0Vycm9yczonLCBlcnJvcnMpO1xyXG59O1xyXG5cclxuLy8gQHRvZG8gZXJyb3IgbWFuYWdlclxyXG53aW5kb3cuYWpheFJlc3BvbnNlRXJyb3IgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLmVycm9yLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS5lcnJvci5kZXRhaWwsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLmVycm9yLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKHJlc3BvbnNlLndhcm5pbmcpIHtcclxuICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLndhcm5pbmcudGl0bGUsXHJcbiAgICAgIHRleHQ6IHJlc3BvbnNlLndhcm5pbmcuZGV0YWlsLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS53YXJuaW5nLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICB0aXRsZTogcmVzcG9uc2UuaW5mby50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2UuaW5mby5kZXRhaWwsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLmluZm8uc3RhdHVzICsgJzwvc3Ryb25nPidcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zb2xlLmVycm9yKCdFcnJvczonLCByZXNwb25zZSk7XHJcbn07XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc2lkZWJhck5hdldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1uYXYtd3JhcHBlcicpO1xyXG4gIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td3JhcHBlcicpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUnKTtcclxuICBjb25zdCBtZW51VG9nZ2xlQnV0dG9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZSBpJyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4gIG1lbnVUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyTmF2V3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID4gMTIwMCkge1xyXG4gICAgICBpZiAobWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWxlZnQnKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tbGVmdCcpKSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyTmF2V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3Qgc3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XG5cbi8vXG5jb25zdCBzZXRUd0FwaVNldHRpbmdBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRsb2FkZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1sb2FkZXInKSxcbiAgICAgIHRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10dy1hdXRoLWJ0bicpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gICRsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSwge1xuICAgICAgJ2lzQWN0aXZlJzogdGhpcy5jaGVja2VkXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogZGF0YS5tZXNzYWdlLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgIHRpbWVyOiAxNTAwXG4gICAgICB9KTtcbiAgICAgICRsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXMtYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdHctYXV0aC1idG4tJyArIHRhcmdldCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgYWpheEVycm9yKGVycm9yKTtcbiAgICB9KTtcbiAgfSwgNTApO1xufTtcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFR3QXBpU2V0dGluZ0FjdGl2ZSkpO1xuICB9XG59KSgpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImF4aW9zIiwiU3dhbCIsIndpbmRvdyIsIm9ubG9hZCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiTW9kYWwiLCIkdHdBcGlTZXR0aW5nc01vZGFsIiwidHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luIiwiJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSIsInVwZGF0ZURvbmUiLCJyZWRpcmVjdCIsInNob3dUd0FwaVNldHRpbmdzTW9kYWwiLCJkYXRhIiwic3VjY2VzcyIsImlubmVySFRNTCIsImh0bWwiLCJzaG93Iiwid2FybmluZyIsInN0eWxlIiwiZGlzcGxheSIsImFqYXhSZXNwb25zZUVycm9yIiwiZ2V0QXdBcGlLZXlzTW9kYWwiLCJzZXRUaW1lb3V0IiwicG9zdCIsImhyZWYiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImFqYXhFcnJvciIsImFqYXhGb2xsb3dDYWxsYmFjayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJkaXNhYmxlZCIsIm5leHQiLCJzZXRBdHRyaWJ1dGUiLCJjYWxsQ291bnQiLCJjaGVja2VkIiwiY3JlYXRlZCIsInVwZGF0ZWQiLCJwYXRoIiwiaGlkZSIsImFqYXhVbmZvbGxvd0NhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImNhbGxVcGRhdGVGb2xsb3ciLCJ2YWx1ZSIsImNhbGxVbmZvbGxvdyIsInNod29Ud1Byb2ZpbGUiLCJ3aW4iLCJvcGVuIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJzd2FsIiwicmVxdWlyZSIsImVycm9ycyIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwiZGV0YWlsIiwiZm9vdGVyIiwic3RhdHVzIiwiaW5mbyIsInNpZGViYXJOYXZXcmFwcGVyIiwibWFpbldyYXBwZXIiLCJtZW51VG9nZ2xlQnV0dG9uIiwibWVudVRvZ2dsZUJ1dHRvbkljb24iLCJvdmVybGF5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY29udGFpbnMiLCJyZW1vdmUiLCJzZXRUd0FwaVNldHRpbmdBY3RpdmUiLCIkbG9hZGVyIiwicGFyZW50RWxlbWVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm1lc3NhZ2UiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9