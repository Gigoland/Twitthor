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
      $twApiSettingsModalBtnGo = null,
      $twApiSettingsModalBtnGoOne = null,
      $twApiSettingsModalBtnGoAll = null,
      $twApiSettingsModalAlertCount = null,
      $twApiSettingsModalAlertResult = null,
      $twApiSettingsModalAlertMessage = null,
      updateAllFollow = false,
      updateDone = false,
      updateUrl = null,
      redirect = null; // Show follow update modal

  var showTwApiSettingsModal = function showTwApiSettingsModal(data) {
    if (data.success) {
      $twApiSettingsModal.querySelector('.modal-body').innerHTML = data.html;
      twApiSettingsModalPlugin.show();

      if (data.warning) {
        $twApiSettingsModalBtnGoOne.style.display = 'none';
        $twApiSettingsModalBtnGoAll.style.display = 'none';
      }
    } else {
      ajaxResponseAlert(data);
    }
  }; // Get modal html content


  var getTwApiSettingModal = function getTwApiSettingModal() {
    var _this = this;

    this.style.display = 'none';
    document.querySelector('#js-btn-update-loader').style.display = 'block';
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
  }; // Enable bouttons events


  var enableModalEvents = function enableModalEvents() {
    $twApiSettingsModal.querySelectorAll('.ev').forEach(function (el) {
      return el.disabled = false;
    });
    $twApiSettingsModal.querySelector('.btn-ko').innerHTML = 'Finish';
    $twApiSettingsModalLoader.style.display = 'none';
  }; // Enable bouttons events


  var disableModalEvents = function disableModalEvents() {
    $twApiSettingsModalLoader.style.display = 'block';
    $twApiSettingsModal.querySelectorAll('.ev').forEach(function (el) {
      return el.disabled = true;
    });
  }; // After update


  var ajaxFollowCallback = function ajaxFollowCallback(data) {
    if (data.success) {
      if (data.next) {
        updateDone = false;
        $twApiSettingsModalBtnGo.innerHTML = 'Go to next'; // Get next

        if (updateAllFollow) {
          setTimeout(function () {
            callUpdateFollow();
          }, 1000);
        } else {
          enableModalEvents();
        }
      } else {
        updateDone = true;
        $twApiSettingsModalBtnGo.innerHTML = 'Done';
        $twApiSettingsModalBtnGo.setAttribute('data-bs-dismiss', 'modal');
        $twApiSettingsModalBtnGo.disabled = false;
        $twApiSettingsModal.querySelector('.btn-ko').style.display = 'none';
        enableModalEvents();
      }

      $twApiSettingsModalAlertCount.innerHTML = data.callCount;
      $twApiSettingsModalAlertMessage.innerHTML = 'Checked : ' + data.checked + ' / Created : ' + data.created + ' / Updated : ' + data.updated;
      $twApiSettingsModalAlertResult.after($twApiSettingsModalAlertResult.cloneNode(true));
      $twApiSettingsModalAlertResult.style.display = 'none';
      redirect = data.path;
    } else {
      twApiSettingsModalPlugin.hide();
      ajaxResponseAlert(data);
    }
  }; // After unfollow


  var ajaxUnfollowCallback = function ajaxUnfollowCallback(data) {
    if (data.success) {
      ajaxResponseSuccess(data);
      document.querySelector('#row-' + data.data.target).remove();
    } else {
      ajaxResponseAlert(data);
    }

    updateDone = true;
  }; // Get update following/folowers


  var callUpdateFollow = function callUpdateFollow() {
    if (!updateDone) {
      $twApiSettingsModalAlertMessage.innerHTML = 'Updating... Please do not close.';
      $twApiSettingsModalAlertResult.style.display = 'block';
      disableModalEvents();
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_4___default().post(updateUrl).then(function (response) {
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
    var _this2 = this;

    if (!updateDone) {
      updateDone = false;
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_4___default().post(_this2.value).then(function (response) {
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
  }; // Modal


  if ($twApiSettingsModal) {
    twApiSettingsModalPlugin = new bootstrap__WEBPACK_IMPORTED_MODULE_5__.Modal($twApiSettingsModal);
    $twApiSettingsModalLoader = $twApiSettingsModal.querySelector('.modal-loader');
    $twApiSettingsModalBtnGoOne = $twApiSettingsModal.querySelector('#js-btn-update-follow');
    $twApiSettingsModalBtnGoAll = $twApiSettingsModal.querySelector('#js-btn-update-all-follow'); // On show modal

    $twApiSettingsModal.addEventListener('shown.bs.modal', function () {
      updateDone = false;
      $twApiSettingsModalAlertCount = $twApiSettingsModal.querySelector('#twapi-call-counts');
      $twApiSettingsModalAlertResult = $twApiSettingsModal.querySelector('.alert-box-result');
      $twApiSettingsModalAlertMessage = $twApiSettingsModalAlertResult.querySelector('#alert-box-result-message');
      document.querySelector('.ajax-loader').style.display = 'none';
    }); // On close modal

    $twApiSettingsModal.addEventListener('hide.bs.modal', function () {
      if (redirect) {
        window.location.href = redirect;
      }
    }); // On closed modal

    $twApiSettingsModal.addEventListener('hidden.bs.modal', function () {
      if (!redirect) {
        document.querySelector('.ajax-loader').style.display = 'none';
        document.querySelector('.ajax-btn').style.display = 'block';
        $twApiSettingsModalBtnGoOne.style.display = 'block';
        $twApiSettingsModalBtnGoAll.style.display = 'block';
        enableModalEvents();
      }
    }); // Update following/followers

    if ($twApiSettingsModalBtnGoOne) {
      $twApiSettingsModalBtnGoOne.addEventListener('click', function (e) {
        $twApiSettingsModalBtnGo = $twApiSettingsModalBtnGoOne;
        $twApiSettingsModalBtnGoAll.style.display = 'none';
        updateUrl = e.currentTarget.value;
        callUpdateFollow();
      });
    } // Update all following/followers


    if ($twApiSettingsModalBtnGoAll) {
      $twApiSettingsModalBtnGoAll.addEventListener('click', function (e) {
        $twApiSettingsModalBtnGo = $twApiSettingsModalBtnGoAll;
        $twApiSettingsModalBtnGoOne.style.display = 'none';
        updateUrl = e.currentTarget.value;
        updateAllFollow = true;
        callUpdateFollow();
      });
    }
  } // Get modal content


  if (document.querySelector('#js-btn-update')) {
    document.querySelector('#js-btn-update').addEventListener('click', getTwApiSettingModal);
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
    title: response.detail.title,
    text: response.detail.message,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9mb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL3R3YXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFkbWluLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FkbWluLnNjc3MnO1xuXG4vLyBBamF4XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBZb3UgY2FuIHNwZWNpZnkgd2hpY2ggcGx1Z2lucyB5b3UgbmVlZFxuLy9pbXBvcnQge01vZGFsLCBUb29sdGlwLCBUb2FzdCwgUG9wb3Zlcn0gZnJvbSAnYm9vdHN0cmFwJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuLy8gRVM2IE1vZHVsZXMgb3IgVHlwZVNjcmlwdFxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5pbXBvcnQgJy4vYWRtaW4vanMvbWFpbic7XG5pbXBvcnQgJy4vYWRtaW4vanMvdHdhcGknO1xuaW1wb3J0ICcuL2FkbWluL2pzL2ZvbGxvdyc7XG5cbi8vIE9ubG9hZFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBBeGlvcyBkZWZhdWx0cyBoZWFkZXJzXG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1YU1JGLVRPS0VOJ10gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cIngtY3NyZi10b2tlblwiXScpLmNvbnRlbnQ7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIE9ubG9hZFxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkdHdBcGlTZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXR3YXBpLXNldHRpbmdzJyk7XG5cbiAgLy8gVmFyaWFibGVzXG4gIHZhciB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9IG51bGwsXG4gICAgICB1cGRhdGVBbGxGb2xsb3cgPSBmYWxzZSxcbiAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZSxcbiAgICAgIHVwZGF0ZVVybCA9IG51bGwsXG4gICAgICByZWRpcmVjdCA9IG51bGw7XG5cbiAgLy8gU2hvdyBmb2xsb3cgdXBkYXRlIG1vZGFsXG4gIGNvbnN0IHNob3dUd0FwaVNldHRpbmdzTW9kYWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpLmlubmVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5zaG93KCk7XG4gICAgICBpZiAoZGF0YS53YXJuaW5nKSB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWpheFJlc3BvbnNlQWxlcnQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCBtb2RhbCBodG1sIGNvbnRlbnRcbiAgY29uc3QgZ2V0VHdBcGlTZXR0aW5nTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KHRoaXMuaHJlZilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2hvd1R3QXBpU2V0dGluZ3NNb2RhbChkYXRhKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sIDUwKTtcbiAgfTtcblxuICAvLyBFbmFibGUgYm91dHRvbnMgZXZlbnRzXG4gIGNvbnN0IGVuYWJsZU1vZGFsRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuZXYnKS5mb3JFYWNoKGVsID0+IGVsLmRpc2FibGVkID0gZmFsc2UpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLmlubmVySFRNTCA9ICdGaW5pc2gnO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICAvLyBFbmFibGUgYm91dHRvbnMgZXZlbnRzXG4gIGNvbnN0IGRpc2FibGVNb2RhbEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuZXYnKS5mb3JFYWNoKGVsID0+IGVsLmRpc2FibGVkID0gdHJ1ZSk7XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdXBkYXRlXG4gIGNvbnN0IGFqYXhGb2xsb3dDYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICBpZiAoZGF0YS5uZXh0KSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLmlubmVySFRNTCA9ICdHbyB0byBuZXh0JztcbiAgICAgICAgLy8gR2V0IG5leHRcbiAgICAgICAgaWYgKHVwZGF0ZUFsbEZvbGxvdykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbFVwZGF0ZUZvbGxvdygpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVuYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uaW5uZXJIVE1MID0gJ0RvbmUnO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVuYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICB9XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudC5pbm5lckhUTUwgPSBkYXRhLmNhbGxDb3VudDtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gJ0NoZWNrZWQgOiAnICsgZGF0YS5jaGVja2VkICsgJyAvIENyZWF0ZWQgOiAnICsgZGF0YS5jcmVhdGVkICsgJyAvIFVwZGF0ZWQgOiAnICsgZGF0YS51cGRhdGVkO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LmFmdGVyKCR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZWRpcmVjdCA9IGRhdGEucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLmhpZGUoKTtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZnRlciB1bmZvbGxvd1xuICBjb25zdCBhamF4VW5mb2xsb3dDYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvdy0nICsgZGF0YS5kYXRhLnRhcmdldCkucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgICB1cGRhdGVEb25lID0gdHJ1ZTtcbiAgfTtcblxuICAvLyBHZXQgdXBkYXRlIGZvbGxvd2luZy9mb2xvd2Vyc1xuICBjb25zdCBjYWxsVXBkYXRlRm9sbG93ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF1cGRhdGVEb25lKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9ICdVcGRhdGluZy4uLiBQbGVhc2UgZG8gbm90IGNsb3NlLic7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkaXNhYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHVwZGF0ZVVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhamF4Rm9sbG93Q2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVuZm9sbG93XG4gIGNvbnN0IGNhbGxVbmZvbGxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdXBkYXRlRG9uZSkge1xuICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhamF4VW5mb2xsb3dDYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTW9kYWxcbiAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWwpIHtcbiAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBuZXcgTW9kYWwoJHR3QXBpU2V0dGluZ3NNb2RhbCk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWxvYWRlcicpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZSA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtZm9sbG93Jyk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1hbGwtZm9sbG93Jyk7XG5cbiAgICAvLyBPbiBzaG93IG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0d2FwaS1jYWxsLWNvdW50cycpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0ID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtYm94LXJlc3VsdCcpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9ICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcjYWxlcnQtYm94LXJlc3VsdC1tZXNzYWdlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWpheC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgLy8gT24gY2xvc2UgbW9kYWxcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gT24gY2xvc2VkIG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghcmVkaXJlY3QpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXgtbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXgtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBlbmFibGVNb2RhbEV2ZW50cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGZvbGxvd2luZy9mb2xsb3dlcnNcbiAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmU7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB1cGRhdGVVcmwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNhbGxVcGRhdGVGb2xsb3coKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBhbGwgZm9sbG93aW5nL2ZvbGxvd2Vyc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyA9ICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbDtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHVwZGF0ZVVybCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgdXBkYXRlQWxsRm9sbG93ID0gdHJ1ZTtcbiAgICAgICAgY2FsbFVwZGF0ZUZvbGxvdygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IG1vZGFsIGNvbnRlbnRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VHdBcGlTZXR0aW5nTW9kYWwpO1xuICB9XG5cbiAgLy8gVW5mb2xsb3dcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tdW5mb2xsb3cnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tdW5mb2xsb3cnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFVuZm9sbG93KSk7XG4gIH1cbn0pKCk7XG4iLCJjb25zdCBzd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcclxuXHJcbi8vIEFqYXggc3VjY2VzcyByZXNwb25zZSBtYW5hZ2VyXHJcbndpbmRvdy5hamF4UmVzcG9uc2VTdWNjZXNzID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICBzd2FsLmZpcmUoe1xyXG4gICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgdGl0bGU6IHJlc3BvbnNlLmRldGFpbC50aXRsZSxcclxuICAgIHRleHQ6IHJlc3BvbnNlLmRldGFpbC5tZXNzYWdlLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDE1MDBcclxuICB9KTtcclxufTtcclxuXHJcbi8vIEFqYXggY2F0Y2ggZXJyb3JzIG1hbmFnZXJcclxud2luZG93LmFqYXhDYXRjaEFsZXJ0ID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICBjb25zb2xlLmVycm9yKCdFcnJvczonLCByZXNwb25zZSk7XHJcbn1cclxuXHJcbi8vIEFqYXggcmVzcG9uc2UgbWFuYWdlclxyXG53aW5kb3cuYWpheFJlc3BvbnNlQWxlcnQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLmVycm9yLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS5lcnJvci5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5lcnJvci5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXNwb25zZS53YXJuaW5nKSB7XHJcbiAgICBzd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS53YXJuaW5nLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS53YXJuaW5nLm1lc3NhZ2UsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLndhcm5pbmcuc3RhdHVzICsgJzwvc3Ryb25nPidcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVzcG9uc2UuaW5mbykge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICB0aXRsZTogcmVzcG9uc2UuaW5mby50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2UuaW5mby5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5pbmZvLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc29sZS5lcnJvcignRXJyb3M6JywgcmVzcG9uc2UpO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHNpZGViYXJOYXZXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItbmF2LXdyYXBwZXInKTtcclxuICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdyYXBwZXInKTtcclxuICBjb25zdCBtZW51VG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUgaScpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5cclxuICBtZW51VG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDEyMDApIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1sZWZ0JykpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWxlZnQnKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIEFjdGl2ZVxuY29uc3Qgc2V0VHdBcGlTZXR0aW5nQWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkbG9hZGVyID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtbG9hZGVyJyksXG4gICAgICB0YXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdHctYXV0aC1idG4nKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUsIHtcbiAgICAgICdpc0FjdGl2ZSc6IHRoaXMuY2hlY2tlZFxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGFqYXhSZXNwb25zZVN1Y2Nlc3MoZGF0YSk7XG4gICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXR3LWF1dGgtYnRuLScgKyB0YXJnZXQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICB9KTtcbiAgfSwgNTApO1xufTtcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFR3QXBpU2V0dGluZ0FjdGl2ZSkpO1xuICB9XG59KSgpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImF4aW9zIiwiU3dhbCIsIndpbmRvdyIsIm9ubG9hZCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiTW9kYWwiLCIkdHdBcGlTZXR0aW5nc01vZGFsIiwidHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luIiwiJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZSIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSIsInVwZGF0ZUFsbEZvbGxvdyIsInVwZGF0ZURvbmUiLCJ1cGRhdGVVcmwiLCJyZWRpcmVjdCIsInNob3dUd0FwaVNldHRpbmdzTW9kYWwiLCJkYXRhIiwic3VjY2VzcyIsImlubmVySFRNTCIsImh0bWwiLCJzaG93Iiwid2FybmluZyIsInN0eWxlIiwiZGlzcGxheSIsImFqYXhSZXNwb25zZUFsZXJ0IiwiZ2V0VHdBcGlTZXR0aW5nTW9kYWwiLCJzZXRUaW1lb3V0IiwicG9zdCIsImhyZWYiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImFqYXhDYXRjaEFsZXJ0IiwiZW5hYmxlTW9kYWxFdmVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiZGlzYWJsZWQiLCJkaXNhYmxlTW9kYWxFdmVudHMiLCJhamF4Rm9sbG93Q2FsbGJhY2siLCJuZXh0IiwiY2FsbFVwZGF0ZUZvbGxvdyIsInNldEF0dHJpYnV0ZSIsImNhbGxDb3VudCIsImNoZWNrZWQiLCJjcmVhdGVkIiwidXBkYXRlZCIsImFmdGVyIiwiY2xvbmVOb2RlIiwicGF0aCIsImhpZGUiLCJhamF4VW5mb2xsb3dDYWxsYmFjayIsImFqYXhSZXNwb25zZVN1Y2Nlc3MiLCJ0YXJnZXQiLCJyZW1vdmUiLCJjYWxsVW5mb2xsb3ciLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic3dhbCIsInJlcXVpcmUiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZGV0YWlsIiwidGV4dCIsIm1lc3NhZ2UiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiY29uc29sZSIsImZvb3RlciIsInN0YXR1cyIsImluZm8iLCJzaWRlYmFyTmF2V3JhcHBlciIsIm1haW5XcmFwcGVyIiwibWVudVRvZ2dsZUJ1dHRvbiIsIm1lbnVUb2dnbGVCdXR0b25JY29uIiwib3ZlcmxheSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNvbnRhaW5zIiwic2V0VHdBcGlTZXR0aW5nQWN0aXZlIiwiJGxvYWRlciIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=