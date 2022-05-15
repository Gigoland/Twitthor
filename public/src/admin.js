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
  }; //


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvZm9sbG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy90d2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhZG1pbi5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuLy8gQWpheFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcbi8vaW1wb3J0IHtNb2RhbCwgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXJ9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIEVTNiBNb2R1bGVzIG9yIFR5cGVTY3JpcHRcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuaW1wb3J0ICcuL2FkbWluL2pzL21haW4nO1xuaW1wb3J0ICcuL2FkbWluL2pzL3R3YXBpJztcbmltcG9ydCAnLi9hZG1pbi9qcy9mb2xsb3cnO1xuXG4vLyBPbmxvYWRcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Ly8gQXhpb3MgZGVmYXVsdHMgaGVhZGVyc1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0Jztcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtWFNSRi1UT0tFTiddID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ4LWNzcmYtdG9rZW5cIl0nKS5jb250ZW50O1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnO1xuXG4vLyBPbmxvYWRcbihmdW5jdGlvbigpIHtcbiAgY29uc3QgJHR3QXBpU2V0dGluZ3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC10d2FwaS1zZXR0aW5ncycpO1xuXG4gIC8vIFZhcmlhYmxlc1xuICB2YXIgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0ID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UgPSBudWxsLFxuICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlLFxuICAgICAgcmVkaXJlY3QgPSBudWxsO1xuXG4gIC8vIFNob3cgZm9sbG93IHVwZGF0ZSBtb2RhbFxuICBjb25zdCBzaG93VHdBcGlTZXR0aW5nc01vZGFsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSBkYXRhLmh0bWw7XG4gICAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4uc2hvdygpO1xuICAgICAgaWYgKGRhdGEud2FybmluZykge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tb2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhamF4UmVzcG9uc2VFcnJvcihkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IG1vZGFsIGh0bWwgY29udGVudFxuICBjb25zdCBnZXRBd0FwaUtleXNNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCh0aGlzLmhyZWYpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNob3dUd0FwaVNldHRpbmdzTW9kYWwoZGF0YSk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBhamF4RXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSwgNTApO1xuICB9O1xuXG4gIC8vIEFmdGVyIHVwZGF0ZVxuICBjb25zdCBhamF4Rm9sbG93Q2FsbGJhY2sgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuZXYnKS5mb3JFYWNoKGVsID0+IGVsLmRpc2FibGVkID0gZmFsc2UpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLmlubmVySFRNTCA9ICdGaW5pc2gnO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICBpZiAoZGF0YS5uZXh0KSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLW9rJykuaW5uZXJIVE1MID0gJ0dvIHRvIG5leHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLmlubmVySFRNTCA9ICdEb25lJztcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLW9rJykuc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLW9rJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWtvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50LmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSAnQ2hlY2tlZCA6ICcgKyBkYXRhLmNoZWNrZWQgKyAnIC8gQ3JlYXRlZCA6ICcgKyBkYXRhLmNyZWF0ZWQgKyAnIC8gVXBkYXRlZCA6ICcgKyBkYXRhLnVwZGF0ZWQ7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZWRpcmVjdCA9IGRhdGEucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLmhpZGUoKTtcbiAgICAgIGFqYXhSZXNwb25zZUVycm9yKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZnRlciB1bmZvbGxvd1xuICBjb25zdCBhamF4VW5mb2xsb3dDYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgYWpheFJlc3BvbnNlRXJyb3IoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCB1cGRhdGUgZm9sbG93aW5nL2ZvbG93ZXJzXG4gIGNvbnN0IGNhbGxVcGRhdGVGb2xsb3cgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhamF4Rm9sbG93Q2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGFqYXhFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfTtcblxuICAvL1xuICBjb25zdCBjYWxsVW5mb2xsb3cgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXVwZGF0ZURvbmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGFqYXhFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfTtcblxuICAvLyBUdyBwcm9maWxlXG4gIGNvbnN0IHNod29Ud1Byb2ZpbGUgPSBmdW5jdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCB3aW4gPSB3aW5kb3cub3BlbihcbiAgICAgICAgdGhpcy5ocmVmLFxuICAgICAgICBcIl9ibGFua1wiLFxuICAgICAgICBcImxvY2F0aW9uPW5vLG1lbnViYXI9bm8sc3RhdHVzPW5vLHRpdGlsZWJhcj1ubyxyZXNpemFibGU9bm8sdG9wPTAsbGVmdD0wLHdpZHRoPTYwMCxoZWlnaHQ9NTAwXCJcbiAgICAgICk7XG4gICAgICB3aW4uZm9jdXMoKTtcbiAgICB9LCA1MCk7XG4gIH07XG5cbiAgLy8gTW9kYWxcbiAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWwpIHtcbiAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBuZXcgTW9kYWwoJHR3QXBpU2V0dGluZ3NNb2RhbCk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWxvYWRlcicpO1xuXG4gICAgLy8gT24gc2hvdyBtb2RhbFxuICAgICR0d0FwaVNldHRpbmdzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50ID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjdHdhcGktY2FsbC1jb3VudHMnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdCA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LWJveC1yZXN1bHQnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UgPSAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQucXVlcnlTZWxlY3RvcignI2FsZXJ0LWJveC1yZXN1bHQtbWVzc2FnZScpO1xuICAgIH0pO1xuXG4gICAgLy8gT24gY2xvc2UgbW9kYWxcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGZvbGxvd2luZy9mb2xsb3dlcnNcbiAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1mb2xsb3cnKSkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1mb2xsb3cnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxVcGRhdGVGb2xsb3cpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBtb2RhbCBjb250ZW50XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZScpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEF3QXBpS2V5c01vZGFsKTtcbiAgfVxuXG4gIC8vIEdldCB3aW5kb3dcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tdHctcHJvZmlsZScpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ0bi10dy1wcm9maWxlJykuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNod29Ud1Byb2ZpbGUpKTtcbiAgfVxuXG4gIC8vIFVuZm9sbG93XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLXVuZm9sbG93JykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYnRuLXVuZm9sbG93JykuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxVbmZvbGxvdykpO1xuICB9XG59KSgpO1xuIiwiY29uc3Qgc3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XHJcblxyXG4vLyBAdG9kbyBlcnJvciBtYW5hZ2VyXHJcbndpbmRvdy5hamF4RXJyb3IgPSBmdW5jdGlvbihlcnJvcnMpIHtcclxuICBjb25zb2xlLmVycm9yKCdFcnJvcnM6JywgZXJyb3JzKTtcclxufTtcclxuXHJcbi8vIEB0b2RvIGVycm9yIG1hbmFnZXJcclxud2luZG93LmFqYXhSZXNwb25zZUVycm9yID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS5lcnJvci50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2UuZXJyb3IuZGV0YWlsLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5lcnJvci5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXNwb25zZS53YXJuaW5nKSB7XHJcbiAgICBzd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS53YXJuaW5nLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS53YXJuaW5nLmRldGFpbCxcclxuICAgICAgZm9vdGVyOiAnPHN0cm9uZz4nICsgcmVzcG9uc2Uud2FybmluZy5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLmluZm8udGl0bGUsXHJcbiAgICAgIHRleHQ6IHJlc3BvbnNlLmluZm8uZGV0YWlsLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5pbmZvLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc29sZS5lcnJvcignRXJyb3M6JywgcmVzcG9uc2UpO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHNpZGViYXJOYXZXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItbmF2LXdyYXBwZXInKTtcclxuICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdyYXBwZXInKTtcclxuICBjb25zdCBtZW51VG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUgaScpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5cclxuICBtZW51VG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDEyMDApIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1sZWZ0JykpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWxlZnQnKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xuXG4vL1xuY29uc3Qgc2V0VHdBcGlTZXR0aW5nQWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkbG9hZGVyID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtbG9hZGVyJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXMtYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXhpb3MucG9zdCh0aGlzLnZhbHVlLCB7XG4gICAgICAnaXNBY3RpdmUnOiB0aGlzLmNoZWNrZWRcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzd2FsLmZpcmUoe1xuICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgdGltZXI6IDE1MDBcbiAgICAgIH0pO1xuICAgICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBhamF4RXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuICB9LCA1MCk7XG59O1xuXG4vLyBPbmxvYWRcbihmdW5jdGlvbigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zd2l0Y2gtaXMtYWN0aXZlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VHdBcGlTZXR0aW5nQWN0aXZlKSk7XG4gIH1cbn0pKCk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiYXhpb3MiLCJTd2FsIiwid2luZG93Iiwib25sb2FkIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJNb2RhbCIsIiR0d0FwaVNldHRpbmdzTW9kYWwiLCJ0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4iLCIkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlIiwidXBkYXRlRG9uZSIsInJlZGlyZWN0Iiwic2hvd1R3QXBpU2V0dGluZ3NNb2RhbCIsImRhdGEiLCJzdWNjZXNzIiwiaW5uZXJIVE1MIiwiaHRtbCIsInNob3ciLCJ3YXJuaW5nIiwic3R5bGUiLCJkaXNwbGF5IiwiYWpheFJlc3BvbnNlRXJyb3IiLCJnZXRBd0FwaUtleXNNb2RhbCIsInNldFRpbWVvdXQiLCJwb3N0IiwiaHJlZiIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiYWpheEVycm9yIiwiYWpheEZvbGxvd0NhbGxiYWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImRpc2FibGVkIiwibmV4dCIsInNldEF0dHJpYnV0ZSIsImNhbGxDb3VudCIsImNoZWNrZWQiLCJjcmVhdGVkIiwidXBkYXRlZCIsInBhdGgiLCJoaWRlIiwiYWpheFVuZm9sbG93Q2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiY2FsbFVwZGF0ZUZvbGxvdyIsInZhbHVlIiwiY2FsbFVuZm9sbG93Iiwic2h3b1R3UHJvZmlsZSIsIndpbiIsIm9wZW4iLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInN3YWwiLCJyZXF1aXJlIiwiZXJyb3JzIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRleHQiLCJkZXRhaWwiLCJmb290ZXIiLCJzdGF0dXMiLCJpbmZvIiwic2lkZWJhck5hdldyYXBwZXIiLCJtYWluV3JhcHBlciIsIm1lbnVUb2dnbGVCdXR0b24iLCJtZW51VG9nZ2xlQnV0dG9uSWNvbiIsIm92ZXJsYXkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJjb250YWlucyIsInJlbW92ZSIsInNldFR3QXBpU2V0dGluZ0FjdGl2ZSIsIiRsb2FkZXIiLCJwYXJlbnRFbGVtZW50IiwibWVzc2FnZSIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=