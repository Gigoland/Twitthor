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
      ajaxResponseAlert(data);
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
        ajaxCatchAlert(error);
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
      ajaxResponseAlert(data);
    }
  }; // After unfollow


  var ajaxUnfollowCallback = function ajaxUnfollowCallback(data) {
    if (data.success) {
      ajaxResponseSuccess(data);
    } else {
      ajaxResponseAlert(data);
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
          ajaxCatchAlert(error);
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
            ajaxUnfollowCallback(data);
          }, 50);
        })["catch"](function (error) {
          ajaxCatchAlert(error);
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

var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"); // Ajax success response manager


window.ajaxResponseSuccess = function (response) {
  swal.fire({
    icon: 'success',
    title: response.success.title,
    text: response.success.message,
    showConfirmButton: false,
    timer: 1500
  });
}; // Ajax catch errors manager


window.ajaxCatchAlert = function (response) {
  console.error('Erros:', response);
}; // Ajax response manager


window.ajaxResponseAlert = function (response) {
  if (response.error) {
    swal.fire({
      icon: 'error',
      title: response.error.title,
      text: response.error.message,
      footer: '<strong>' + response.error.status + '</strong>'
    });
  } else if (response.warning) {
    swal.fire({
      icon: 'warning',
      title: response.warning.title,
      text: response.warning.message,
      footer: '<strong>' + response.warning.status + '</strong>'
    });
  } else if (response.info) {
    swal.fire({
      icon: 'info',
      title: response.info.title,
      text: response.info.message,
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




 // Active

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
      ajaxResponseSuccess(data);
      $loader.style.display = 'none';
      document.querySelectorAll('.js-switch-is-active').forEach(function (el) {
        return el.style.display = 'block';
      });
      document.querySelector('.js-tw-auth-btn-' + target).style.display = 'block';
    })["catch"](function (error) {
      ajaxCatchAlert(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FaRDtBQWFELEdBZFMsRUFjUCxFQWRPLENBQVY7QUFlRCxDQXJCRCxFQXVCQTs7O0FBQ0EsQ0FBQyxZQUFXO0FBQ1YsTUFBSTdCLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixzQkFBdkIsQ0FBSixFQUFvRDtBQUNsREYsSUFBQUEsUUFBUSxDQUFDZ0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLEVBQWtEQyxPQUFsRCxDQUEwRCxVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDbUIsZ0JBQUgsQ0FBb0IsUUFBcEIsRUFBOEIyQixxQkFBOUIsQ0FBSjtBQUFBLEtBQTVEO0FBQ0Q7QUFDRixDQUpEOzs7Ozs7Ozs7Ozs7Ozs7O0NDekJBOztBQUNPLElBQU1NLEdBQUcsR0FBR0QsMEVBQWdCLENBQUM3Qix5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9mb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL3R3YXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFkbWluLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FkbWluLnNjc3MnO1xuXG4vLyBBamF4XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBZb3UgY2FuIHNwZWNpZnkgd2hpY2ggcGx1Z2lucyB5b3UgbmVlZFxuLy9pbXBvcnQge01vZGFsLCBUb29sdGlwLCBUb2FzdCwgUG9wb3Zlcn0gZnJvbSAnYm9vdHN0cmFwJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gRVM2IE1vZHVsZXMgb3IgVHlwZVNjcmlwdFxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5pbXBvcnQgJy4vYWRtaW4vanMvbWFpbic7XG5pbXBvcnQgJy4vYWRtaW4vanMvdHdhcGknO1xuaW1wb3J0ICcuL2FkbWluL2pzL2ZvbGxvdyc7XG5cbi8vIE9ubG9hZFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBBeGlvcyBkZWZhdWx0cyBoZWFkZXJzXG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1YU1JGLVRPS0VOJ10gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cIngtY3NyZi10b2tlblwiXScpLmNvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIE9ubG9hZFxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkdHdBcGlTZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXR3YXBpLXNldHRpbmdzJyk7XG5cbiAgLy8gVmFyaWFibGVzXG4gIHZhciB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9IG51bGwsXG4gICAgICB1cGRhdGVEb25lID0gZmFsc2UsXG4gICAgICByZWRpcmVjdCA9IG51bGw7XG5cbiAgLy8gU2hvdyBmb2xsb3cgdXBkYXRlIG1vZGFsXG4gIGNvbnN0IHNob3dUd0FwaVNldHRpbmdzTW9kYWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpLmlubmVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5zaG93KCk7XG4gICAgICBpZiAoZGF0YS53YXJuaW5nKSB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgbW9kYWwgaHRtbCBjb250ZW50XG4gIGNvbnN0IGdldEF3QXBpS2V5c01vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KHRoaXMuaHJlZilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2hvd1R3QXBpU2V0dGluZ3NNb2RhbChkYXRhKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sIDUwKTtcbiAgfTtcblxuICAvLyBBZnRlciB1cGRhdGVcbiAgY29uc3QgYWpheEZvbGxvd0NhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IGZhbHNlKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4ta28nKS5pbm5lckhUTUwgPSAnRmluaXNoJztcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgaWYgKGRhdGEubmV4dCkge1xuICAgICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLmlubmVySFRNTCA9ICdHbyB0byBuZXh0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tb2snKS5pbm5lckhUTUwgPSAnRG9uZSc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLnNldEF0dHJpYnV0ZSgnZGF0YS1icy1kaXNtaXNzJywgJ21vZGFsJyk7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1vaycpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudC5pbm5lckhUTUwgPSBkYXRhLmNhbGxDb3VudDtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gJ0NoZWNrZWQgOiAnICsgZGF0YS5jaGVja2VkICsgJyAvIENyZWF0ZWQgOiAnICsgZGF0YS5jcmVhdGVkICsgJyAvIFVwZGF0ZWQgOiAnICsgZGF0YS51cGRhdGVkO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmVkaXJlY3QgPSBkYXRhLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5oaWRlKCk7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdW5mb2xsb3dcbiAgY29uc3QgYWpheFVuZm9sbG93Q2FsbGJhY2sgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgYWpheFJlc3BvbnNlU3VjY2VzcyhkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWpheFJlc3BvbnNlQWxlcnQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCB1cGRhdGUgZm9sbG93aW5nL2ZvbG93ZXJzXG4gIGNvbnN0IGNhbGxVcGRhdGVGb2xsb3cgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhamF4Rm9sbG93Q2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVuZm9sbG93XG4gIGNvbnN0IGNhbGxVbmZvbGxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdXBkYXRlRG9uZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhamF4VW5mb2xsb3dDYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVHcgcHJvZmlsZVxuICBjb25zdCBzaHdvVHdQcm9maWxlID0gZnVuY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgd2luID0gd2luZG93Lm9wZW4oXG4gICAgICAgIHRoaXMuaHJlZixcbiAgICAgICAgXCJfYmxhbmtcIixcbiAgICAgICAgXCJsb2NhdGlvbj1ubyxtZW51YmFyPW5vLHN0YXR1cz1ubyx0aXRpbGViYXI9bm8scmVzaXphYmxlPW5vLHRvcD0wLGxlZnQ9MCx3aWR0aD02MDAsaGVpZ2h0PTUwMFwiXG4gICAgICApO1xuICAgICAgd2luLmZvY3VzKCk7XG4gICAgfSwgNTApO1xuICB9O1xuXG4gIC8vIE1vZGFsXG4gIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsKSB7XG4gICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luID0gbmV3IE1vZGFsKCR0d0FwaVNldHRpbmdzTW9kYWwpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1sb2FkZXInKTtcblxuICAgIC8vIE9uIHNob3cgbW9kYWxcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI3R3YXBpLWNhbGwtY291bnRzJyk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC1ib3gtcmVzdWx0Jyk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlID0gJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyNhbGVydC1ib3gtcmVzdWx0LW1lc3NhZ2UnKTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGNsb3NlIG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBmb2xsb3dpbmcvZm9sbG93ZXJzXG4gICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtZm9sbG93JykpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtZm9sbG93JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsVXBkYXRlRm9sbG93KTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgbW9kYWwgY29udGVudFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRBd0FwaUtleXNNb2RhbCk7XG4gIH1cblxuICAvLyBHZXQgd2luZG93XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnRuLXR3LXByb2ZpbGUnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tdHctcHJvZmlsZScpLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaHdvVHdQcm9maWxlKSk7XG4gIH1cblxuICAvLyBVbmZvbGxvd1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bi11bmZvbGxvdycpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ0bi11bmZvbGxvdycpLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsVW5mb2xsb3cpKTtcbiAgfVxufSkoKTtcbiIsImNvbnN0IHN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xyXG5cclxuLy8gQWpheCBzdWNjZXNzIHJlc3BvbnNlIG1hbmFnZXJcclxud2luZG93LmFqYXhSZXNwb25zZVN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIHN3YWwuZmlyZSh7XHJcbiAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICB0aXRsZTogcmVzcG9uc2Uuc3VjY2Vzcy50aXRsZSxcclxuICAgIHRleHQ6IHJlc3BvbnNlLnN1Y2Nlc3MubWVzc2FnZSxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAxNTAwXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBBamF4IGNhdGNoIGVycm9ycyBtYW5hZ2VyXHJcbndpbmRvdy5hamF4Q2F0Y2hBbGVydCA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgY29uc29sZS5lcnJvcignRXJyb3M6JywgcmVzcG9uc2UpO1xyXG59XHJcblxyXG4vLyBBamF4IHJlc3BvbnNlIG1hbmFnZXJcclxud2luZG93LmFqYXhSZXNwb25zZUFsZXJ0ID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS5lcnJvci50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2UuZXJyb3IubWVzc2FnZSxcclxuICAgICAgZm9vdGVyOiAnPHN0cm9uZz4nICsgcmVzcG9uc2UuZXJyb3Iuc3RhdHVzICsgJzwvc3Ryb25nPidcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVzcG9uc2Uud2FybmluZykge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICB0aXRsZTogcmVzcG9uc2Uud2FybmluZy50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2Uud2FybmluZy5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS53YXJuaW5nLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKHJlc3BvbnNlLmluZm8pIHtcclxuICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLmluZm8udGl0bGUsXHJcbiAgICAgIHRleHQ6IHJlc3BvbnNlLmluZm8ubWVzc2FnZSxcclxuICAgICAgZm9vdGVyOiAnPHN0cm9uZz4nICsgcmVzcG9uc2UuaW5mby5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnNvbGUuZXJyb3IoJ0Vycm9zOicsIHJlc3BvbnNlKTtcclxufTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBjb25zdCBzaWRlYmFyTmF2V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW5hdi13cmFwcGVyJyk7XHJcbiAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13cmFwcGVyJyk7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZScpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlIGknKTtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbiAgbWVudVRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXJOYXZXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiAxMjAwKSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tbGVmdCcpKSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1sZWZ0JykpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXJOYXZXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBBY3RpdmVcbmNvbnN0IHNldFR3QXBpU2V0dGluZ0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGxvYWRlciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWxvYWRlcicpLFxuICAgICAgdGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXMtYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXR3LWF1dGgtYnRuJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXhpb3MucG9zdCh0aGlzLnZhbHVlLCB7XG4gICAgICAnaXNBY3RpdmUnOiB0aGlzLmNoZWNrZWRcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10dy1hdXRoLWJ0bi0nICsgdGFyZ2V0KS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgfSk7XG4gIH0sIDUwKTtcbn07XG5cbi8vIE9ubG9hZFxuKGZ1bmN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN3aXRjaC1pcy1hY3RpdmUnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXMtYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUd0FwaVNldHRpbmdBY3RpdmUpKTtcbiAgfVxufSkoKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJheGlvcyIsIlN3YWwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsIk1vZGFsIiwiJHR3QXBpU2V0dGluZ3NNb2RhbCIsInR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiIsIiR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdCIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UiLCJ1cGRhdGVEb25lIiwicmVkaXJlY3QiLCJzaG93VHdBcGlTZXR0aW5nc01vZGFsIiwiZGF0YSIsInN1Y2Nlc3MiLCJpbm5lckhUTUwiLCJodG1sIiwic2hvdyIsIndhcm5pbmciLCJzdHlsZSIsImRpc3BsYXkiLCJhamF4UmVzcG9uc2VBbGVydCIsImdldEF3QXBpS2V5c01vZGFsIiwic2V0VGltZW91dCIsInBvc3QiLCJocmVmIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJhamF4Q2F0Y2hBbGVydCIsImFqYXhGb2xsb3dDYWxsYmFjayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJkaXNhYmxlZCIsIm5leHQiLCJzZXRBdHRyaWJ1dGUiLCJjYWxsQ291bnQiLCJjaGVja2VkIiwiY3JlYXRlZCIsInVwZGF0ZWQiLCJwYXRoIiwiaGlkZSIsImFqYXhVbmZvbGxvd0NhbGxiYWNrIiwiYWpheFJlc3BvbnNlU3VjY2VzcyIsImNhbGxVcGRhdGVGb2xsb3ciLCJ2YWx1ZSIsImNhbGxVbmZvbGxvdyIsInNod29Ud1Byb2ZpbGUiLCJ3aW4iLCJvcGVuIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJzd2FsIiwicmVxdWlyZSIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwibWVzc2FnZSIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJjb25zb2xlIiwiZm9vdGVyIiwic3RhdHVzIiwiaW5mbyIsInNpZGViYXJOYXZXcmFwcGVyIiwibWFpbldyYXBwZXIiLCJtZW51VG9nZ2xlQnV0dG9uIiwibWVudVRvZ2dsZUJ1dHRvbkljb24iLCJvdmVybGF5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY29udGFpbnMiLCJyZW1vdmUiLCJzZXRUd0FwaVNldHRpbmdBY3RpdmUiLCIkbG9hZGVyIiwicGFyZW50RWxlbWVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==