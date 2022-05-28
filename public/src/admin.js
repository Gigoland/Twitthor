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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");






 // Onload

(function () {
  var $twApiSettingsModal = document.querySelector('#modal-twapi-settings'); // Variables

  var twApiSettingsModalPlugin = null,
      $twApiSettingsModalLoader = null,
      $twApiSettingsModalBtnGo = null,
      $twApiSettingsModalBtnGoOne = null,
      $twApiSettingsModalBtnGoAll = null,
      $twApiSettingsModalBtnGoPlatonic = null,
      $twApiSettingsModalAlertCount = null,
      $twApiSettingsModalAlertCountFollowing = null,
      $twApiSettingsModalAlertCountFollowers = null,
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
        if ($twApiSettingsModalBtnGoPlatonic) {
          $twApiSettingsModalBtnGoPlatonic.style.display = 'none';
        } else {
          $twApiSettingsModalBtnGoOne.style.display = 'none';
          $twApiSettingsModalBtnGoAll.style.display = 'none';
        }
      }
    } else {
      ajaxResponseAlert(data);
    }
  }; // Get modal html content


  var getTwApiSettingModal = function getTwApiSettingModal() {
    var _this = this;

    this.style.display = 'none';
    document.querySelector('#js-btn-update-modal-loader').style.display = 'block';
    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_5___default().post(_this.href).then(function (response) {
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

    if (updateDone) {
      $twApiSettingsModal.querySelector('.btn-ko').innerHTML = 'Finish';
    }

    $twApiSettingsModalLoader.style.display = 'none';
  }; // Enable bouttons events


  var disableModalEvents = function disableModalEvents() {
    $twApiSettingsModalLoader.style.display = 'block';
    $twApiSettingsModal.querySelectorAll('.ev').forEach(function (el) {
      return el.disabled = true;
    });
  }; // After update follow


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
      $twApiSettingsModalAlertMessage.innerHTML = "Checked : ".concat(data.checked, " / Created : ").concat(data.created, " / Updated : ").concat(data.updated);
      $twApiSettingsModalAlertResult.after($twApiSettingsModalAlertResult.cloneNode(true));
      $twApiSettingsModalAlertResult.style.display = 'none';
      redirect = data.path;
    } else {
      twApiSettingsModalPlugin.hide();
      ajaxResponseAlert(data);
    }
  }; // After update


  var ajaxPlatonicCallback = function ajaxPlatonicCallback(update, data) {
    if (data.success) {
      if (data.nextUpdate) {
        updateDone = false;
        $twApiSettingsModalBtnGo.innerHTML = 'Go to next'; // Get next

        setTimeout(function () {
          callUpdatePlatonic(data.nextUpdate);
        }, 1000);
      } else {
        updateDone = true;
        $twApiSettingsModalBtnGo.innerHTML = 'Done';
        $twApiSettingsModalBtnGo.setAttribute('data-bs-dismiss', 'modal');
        $twApiSettingsModalBtnGo.disabled = false;
        $twApiSettingsModal.querySelector('.btn-ko').style.display = 'none';
        enableModalEvents();
      }

      var icon = 'forward';

      if (update === 'following') {
        $twApiSettingsModalAlertCountFollowing.innerHTML = data.callCount;
      } else {
        icon = 'backward';
        $twApiSettingsModalAlertCountFollowers.innerHTML = data.callCount;
      }

      $twApiSettingsModalAlertMessage.innerHTML = "<i class=\"fa-solid fa-".concat(icon, "\"></i> Checked : ").concat(data.checked, " / Created : ").concat(data.created, " / Updated : ").concat(data.updated);
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
  }; // Get update following/folowers


  var callUpdateFollow = function callUpdateFollow() {
    if (!updateDone) {
      $twApiSettingsModalAlertMessage.innerHTML = 'Updating... Please do not close.';
      $twApiSettingsModalAlertResult.style.display = 'block';
      disableModalEvents();
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_5___default().post(updateUrl).then(function (response) {
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
  }; // Get update platonics


  var callUpdatePlatonic = function callUpdatePlatonic(update) {
    if (!updateDone) {
      $twApiSettingsModalAlertMessage.innerHTML = 'Updating... Please do not close.';
      $twApiSettingsModalAlertResult.style.display = 'block';
      disableModalEvents();
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_5___default().post(updateUrl, {
          'update': update
        }).then(function (response) {
          return response.data;
        }).then(function (data) {
          setTimeout(function () {
            ajaxPlatonicCallback(update, data);
          }, 50);
        })["catch"](function (error) {
          ajaxCatchAlert(error);
        });
      }, 50);
    }
  }; // Unfollow


  var callUnfollow = function callUnfollow() {
    var _this2 = this;

    var $loader = this.parentElement.querySelector('.unfollow-loader');
    this.style.display = 'none';
    $loader.style.display = 'block';
    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_5___default().post(_this2.value).then(function (response) {
        return response.data;
      }).then(function (data) {
        if (!data.success) {
          _this2.style.display = 'block';
          $loader.style.display = 'none';
        }

        setTimeout(function () {
          ajaxUnfollowCallback(data);
        }, 50);
      })["catch"](function (error) {
        ajaxCatchAlert(error);
      });
    }, 50);
  }; // Modal


  if ($twApiSettingsModal) {
    twApiSettingsModalPlugin = new bootstrap__WEBPACK_IMPORTED_MODULE_6__.Modal($twApiSettingsModal);
    $twApiSettingsModalLoader = $twApiSettingsModal.querySelector('.modal-loader');
    $twApiSettingsModalBtnGoOne = $twApiSettingsModal.querySelector('#js-btn-update-follow');
    $twApiSettingsModalBtnGoAll = $twApiSettingsModal.querySelector('#js-btn-update-follow-all');
    $twApiSettingsModalBtnGoPlatonic = $twApiSettingsModal.querySelector('#js-btn-update-platonic'); // On show modal

    $twApiSettingsModal.addEventListener('shown.bs.modal', function () {
      updateDone = false;
      $twApiSettingsModalAlertCount = $twApiSettingsModal.querySelector('#js-call-counts');
      $twApiSettingsModalAlertCountFollowing = $twApiSettingsModal.querySelector('#js-call-counts-following');
      $twApiSettingsModalAlertCountFollowers = $twApiSettingsModal.querySelector('#js-call-counts-followers');
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

        if ($twApiSettingsModalBtnGoPlatonic) {
          $twApiSettingsModalBtnGoPlatonic.style.display = 'block';
        } else {
          $twApiSettingsModalBtnGoOne.style.display = 'block';
          $twApiSettingsModalBtnGoAll.style.display = 'block';
        }

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
    } // Update all platonics


    if ($twApiSettingsModalBtnGoPlatonic) {
      $twApiSettingsModalBtnGoPlatonic.addEventListener('click', function (e) {
        $twApiSettingsModalBtnGo = $twApiSettingsModalBtnGoPlatonic;
        updateUrl = e.currentTarget.value;
        callUpdatePlatonic('following');
      });
    }
  } // Favorite


  var setIsFavorite = function setIsFavorite() {
    var _this3 = this;

    var $loader = this.parentElement.querySelector('.switch-loader'),
        $target = document.querySelector(".js-btn-unfollow-".concat(this.getAttribute('data-target')));
    this.style.display = 'none';
    $loader.style.display = 'block';
    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_5___default().post(_this3.value, {
        'isFavorite': _this3.checked
      }).then(function (response) {
        return response.data;
      }).then(function (data) {
        ajaxResponseSuccess(data);
        $loader.style.display = 'none';
        _this3.style.display = 'block';

        if (_this3.checked) {
          $target.classList.remove('btn-warning');
          $target.classList.add('btn-info');
        } else {
          $target.classList.remove('btn-info');
          $target.classList.add('btn-warning');
        }
      })["catch"](function (error) {
        ajaxCatchAlert(error);
      });
    }, 50);
  }; // Get modal content


  if (document.querySelector('#js-btn-update-modal')) {
    document.querySelector('#js-btn-update-modal').addEventListener('click', getTwApiSettingModal);
  } // Unfollow


  if (document.querySelector('.js-btn-unfollow')) {
    document.querySelectorAll('.js-btn-unfollow').forEach(function (el) {
      return el.addEventListener('click', callUnfollow);
    });
  } // Swith is favorite


  if (document.querySelector('.js-switch-isfavorite')) {
    document.querySelectorAll('.js-switch-isfavorite').forEach(function (el) {
      return el.addEventListener('change', setIsFavorite);
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
  console.log('Erros:', response);
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
  } else {
    console.log('Erros:', response);
  }
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
  document.querySelectorAll('.js-switch-isactive').forEach(function (el) {
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
      document.querySelectorAll('.js-switch-isactive').forEach(function (el) {
        return el.style.display = 'block';
      });
      document.querySelector(".js-tw-auth-btn-".concat(target)).style.display = 'block';
    })["catch"](function (error) {
      ajaxCatchAlert(error);
    });
  }, 50);
}; // Onload


(function () {
  // Switcher
  if (document.querySelector('.js-switch-isactive')) {
    document.querySelectorAll('.js-switch-isactive').forEach(function (el) {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-6a5154","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-455833"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFvRHBDLEtBQXBELENBQTBEQyxPQUExRCxHQUFvRSxPQUFwRTtBQUNELEtBVEQsV0FVTyxVQUFBUSxLQUFLLEVBQUk7QUFDZEMsTUFBQUEsY0FBYyxDQUFDRCxLQUFELENBQWQ7QUFDRCxLQVpEO0FBYUQsR0FkUyxFQWNQLEVBZE8sQ0FBVjtBQWVELENBckJELEVBdUJBOzs7QUFDQSxDQUFDLFlBQVc7QUFDVjtBQUNBLE1BQUlyQyxRQUFRLENBQUNFLGFBQVQsQ0FBdUIscUJBQXZCLENBQUosRUFBbUQ7QUFDakRGLElBQUFBLFFBQVEsQ0FBQ3dDLGdCQUFULENBQTBCLHFCQUExQixFQUFpREMsT0FBakQsQ0FBeUQsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQzRCLGdCQUFILENBQW9CLFFBQXBCLEVBQThCZ0MscUJBQTlCLENBQUo7QUFBQSxLQUEzRDtBQUNEO0FBQ0YsQ0FMRDs7Ozs7Ozs7Ozs7Ozs7OztDQ3pCQTs7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDdkIseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvZm9sbG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy90d2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhZG1pbi5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuLy8gQWpheFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcbi8vaW1wb3J0IHtNb2RhbCwgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXJ9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIEVTNiBNb2R1bGVzIG9yIFR5cGVTY3JpcHRcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuaW1wb3J0ICcuL2FkbWluL2pzL21haW4nO1xuaW1wb3J0ICcuL2FkbWluL2pzL3R3YXBpJztcbmltcG9ydCAnLi9hZG1pbi9qcy9mb2xsb3cnO1xuXG4vLyBPbmxvYWRcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Ly8gQXhpb3MgZGVmYXVsdHMgaGVhZGVyc1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0Jztcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtWFNSRi1UT0tFTiddID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ4LWNzcmYtdG9rZW5cIl0nKS5jb250ZW50O1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnO1xuXG4vLyBPbmxvYWRcbihmdW5jdGlvbigpIHtcbiAgY29uc3QgJHR3QXBpU2V0dGluZ3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC10d2FwaS1zZXR0aW5ncycpO1xuXG4gIC8vIFZhcmlhYmxlc1xuICB2YXIgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZSA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dpbmcgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dlcnMgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0ID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UgPSBudWxsLFxuICAgICAgdXBkYXRlQWxsRm9sbG93ID0gZmFsc2UsXG4gICAgICB1cGRhdGVEb25lID0gZmFsc2UsXG4gICAgICB1cGRhdGVVcmwgPSBudWxsLFxuICAgICAgcmVkaXJlY3QgPSBudWxsO1xuXG4gIC8vIFNob3cgZm9sbG93IHVwZGF0ZSBtb2RhbFxuICBjb25zdCBzaG93VHdBcGlTZXR0aW5nc01vZGFsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSBkYXRhLmh0bWw7XG4gICAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4uc2hvdygpO1xuICAgICAgaWYgKGRhdGEud2FybmluZykge1xuICAgICAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMpIHtcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgbW9kYWwgaHRtbCBjb250ZW50XG4gIGNvbnN0IGdldFR3QXBpU2V0dGluZ01vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLW1vZGFsLWxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCh0aGlzLmhyZWYpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNob3dUd0FwaVNldHRpbmdzTW9kYWwoZGF0YSk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9LCA1MCk7XG4gIH07XG5cbiAgLy8gRW5hYmxlIGJvdXR0b25zIGV2ZW50c1xuICBjb25zdCBlbmFibGVNb2RhbEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IGZhbHNlKTtcbiAgICBpZiAodXBkYXRlRG9uZSkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWtvJykuaW5uZXJIVE1MID0gJ0ZpbmlzaCc7XG4gICAgfVxuICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICAvLyBFbmFibGUgYm91dHRvbnMgZXZlbnRzXG4gIGNvbnN0IGRpc2FibGVNb2RhbEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuZXYnKS5mb3JFYWNoKGVsID0+IGVsLmRpc2FibGVkID0gdHJ1ZSk7XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdXBkYXRlIGZvbGxvd1xuICBjb25zdCBhamF4Rm9sbG93Q2FsbGJhY2sgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgaWYgKGRhdGEubmV4dCkge1xuICAgICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnR28gdG8gbmV4dCc7XG4gICAgICAgIC8vIEdldCBuZXh0XG4gICAgICAgIGlmICh1cGRhdGVBbGxGb2xsb3cpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxVcGRhdGVGb2xsb3coKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmFibGVNb2RhbEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVEb25lID0gdHJ1ZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLmlubmVySFRNTCA9ICdEb25lJztcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLnNldEF0dHJpYnV0ZSgnZGF0YS1icy1kaXNtaXNzJywgJ21vZGFsJyk7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5idG4ta28nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlbmFibGVNb2RhbEV2ZW50cygpO1xuICAgICAgfVxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQuaW5uZXJIVE1MID0gZGF0YS5jYWxsQ291bnQ7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9IGBDaGVja2VkIDogJHtkYXRhLmNoZWNrZWR9IC8gQ3JlYXRlZCA6ICR7ZGF0YS5jcmVhdGVkfSAvIFVwZGF0ZWQgOiAke2RhdGEudXBkYXRlZH1gO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LmFmdGVyKCR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZWRpcmVjdCA9IGRhdGEucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLmhpZGUoKTtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZnRlciB1cGRhdGVcbiAgY29uc3QgYWpheFBsYXRvbmljQ2FsbGJhY2sgPSBmdW5jdGlvbih1cGRhdGUsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICBpZiAoZGF0YS5uZXh0VXBkYXRlKSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLmlubmVySFRNTCA9ICdHbyB0byBuZXh0JztcbiAgICAgICAgLy8gR2V0IG5leHRcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxVcGRhdGVQbGF0b25pYyhkYXRhLm5leHRVcGRhdGUpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnRG9uZSc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWtvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIH1cbiAgICAgIGxldCBpY29uID0gJ2ZvcndhcmQnO1xuICAgICAgaWYgKHVwZGF0ZSA9PT0gJ2ZvbGxvd2luZycpIHtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dpbmcuaW5uZXJIVE1MID0gZGF0YS5jYWxsQ291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpY29uID0gJ2JhY2t3YXJkJztcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dlcnMuaW5uZXJIVE1MID0gZGF0YS5jYWxsQ291bnQ7XG4gICAgICB9XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLSR7aWNvbn1cIj48L2k+IENoZWNrZWQgOiAke2RhdGEuY2hlY2tlZH0gLyBDcmVhdGVkIDogJHtkYXRhLmNyZWF0ZWR9IC8gVXBkYXRlZCA6ICR7ZGF0YS51cGRhdGVkfWA7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuYWZ0ZXIoJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJlZGlyZWN0ID0gZGF0YS5wYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4uaGlkZSgpO1xuICAgICAgYWpheFJlc3BvbnNlQWxlcnQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEFmdGVyIHVuZm9sbG93XG4gIGNvbnN0IGFqYXhVbmZvbGxvd0NhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIGFqYXhSZXNwb25zZVN1Y2Nlc3MoZGF0YSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm93LScgKyBkYXRhLmRhdGEudGFyZ2V0KS5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWpheFJlc3BvbnNlQWxlcnQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCB1cGRhdGUgZm9sbG93aW5nL2ZvbG93ZXJzXG4gIGNvbnN0IGNhbGxVcGRhdGVGb2xsb3cgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1VwZGF0aW5nLi4uIFBsZWFzZSBkbyBub3QgY2xvc2UuJztcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRpc2FibGVNb2RhbEV2ZW50cygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXBkYXRlVXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFqYXhGb2xsb3dDYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IHVwZGF0ZSBwbGF0b25pY3NcbiAgY29uc3QgY2FsbFVwZGF0ZVBsYXRvbmljID0gZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgaWYgKCF1cGRhdGVEb25lKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9ICdVcGRhdGluZy4uLiBQbGVhc2UgZG8gbm90IGNsb3NlLic7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkaXNhYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHVwZGF0ZVVybCwge1xuICAgICAgICAgICd1cGRhdGUnOiB1cGRhdGVcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhamF4UGxhdG9uaWNDYWxsYmFjayh1cGRhdGUsIGRhdGEpO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfTtcblxuICAvLyBVbmZvbGxvd1xuICBjb25zdCBjYWxsVW5mb2xsb3cgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJGxvYWRlciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudW5mb2xsb3ctbG9hZGVyJyk7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICRsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYWpheFVuZm9sbG93Q2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9LCA1MCk7XG4gIH07XG5cbiAgLy8gTW9kYWxcbiAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWwpIHtcbiAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBuZXcgTW9kYWwoJHR3QXBpU2V0dGluZ3NNb2RhbCk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWxvYWRlcicpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZSA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtZm9sbG93Jyk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1mb2xsb3ctYWxsJyk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLXBsYXRvbmljJyk7XG5cbiAgICAvLyBPbiBzaG93IG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1jYWxsLWNvdW50cycpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dpbmcgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1jYWxsLWNvdW50cy1mb2xsb3dpbmcnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93ZXJzID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtY2FsbC1jb3VudHMtZm9sbG93ZXJzJyk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC1ib3gtcmVzdWx0Jyk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlID0gJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyNhbGVydC1ib3gtcmVzdWx0LW1lc3NhZ2UnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hamF4LWxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBjbG9zZSBtb2RhbFxuICAgICR0d0FwaVNldHRpbmdzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3Q7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPbiBjbG9zZWQgbW9kYWxcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFyZWRpcmVjdCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWpheC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWpheC1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljKSB7XG4gICAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICBlbmFibGVNb2RhbEV2ZW50cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGZvbGxvd2luZy9mb2xsb3dlcnNcbiAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmU7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB1cGRhdGVVcmwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNhbGxVcGRhdGVGb2xsb3coKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBhbGwgZm9sbG93aW5nL2ZvbGxvd2Vyc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyA9ICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbDtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHVwZGF0ZVVybCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgdXBkYXRlQWxsRm9sbG93ID0gdHJ1ZTtcbiAgICAgICAgY2FsbFVwZGF0ZUZvbGxvdygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGFsbCBwbGF0b25pY3NcbiAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvID0gJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWM7XG4gICAgICAgIHVwZGF0ZVVybCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY2FsbFVwZGF0ZVBsYXRvbmljKCdmb2xsb3dpbmcnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZhdm9yaXRlXG4gIGNvbnN0IHNldElzRmF2b3JpdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgJGxvYWRlciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWxvYWRlcicpLFxuICAgICAgICAkdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLWJ0bi11bmZvbGxvdy0ke3RoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpfWApO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCh0aGlzLnZhbHVlLCB7XG4gICAgICAgICdpc0Zhdm9yaXRlJzogdGhpcy5jaGVja2VkXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi13YXJuaW5nJyk7XG4gICAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QuYWRkKCdidG4taW5mbycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWluZm8nKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2J0bi13YXJuaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9LCA1MCk7XG4gIH07XG5cbiAgLy8gR2V0IG1vZGFsIGNvbnRlbnRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLW1vZGFsJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VHdBcGlTZXR0aW5nTW9kYWwpO1xuICB9XG5cbiAgLy8gVW5mb2xsb3dcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tdW5mb2xsb3cnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tdW5mb2xsb3cnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFVuZm9sbG93KSk7XG4gIH1cblxuICAvLyBTd2l0aCBpcyBmYXZvcml0ZVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN3aXRjaC1pc2Zhdm9yaXRlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzZmF2b3JpdGUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldElzRmF2b3JpdGUpKTtcbiAgfVxufSkoKTtcbiIsImNvbnN0IHN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xyXG5cclxuLy8gQWpheCBzdWNjZXNzIHJlc3BvbnNlIG1hbmFnZXJcclxud2luZG93LmFqYXhSZXNwb25zZVN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIHN3YWwuZmlyZSh7XHJcbiAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICB0aXRsZTogcmVzcG9uc2UuZGV0YWlsLnRpdGxlLFxyXG4gICAgdGV4dDogcmVzcG9uc2UuZGV0YWlsLm1lc3NhZ2UsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMTUwMFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gQWpheCBjYXRjaCBlcnJvcnMgbWFuYWdlclxyXG53aW5kb3cuYWpheENhdGNoQWxlcnQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIGNvbnNvbGUubG9nKCdFcnJvczonLCByZXNwb25zZSk7XHJcbn1cclxuXHJcbi8vIEFqYXggcmVzcG9uc2UgbWFuYWdlclxyXG53aW5kb3cuYWpheFJlc3BvbnNlQWxlcnQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLmVycm9yLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS5lcnJvci5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5lcnJvci5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXNwb25zZS53YXJuaW5nKSB7XHJcbiAgICBzd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS53YXJuaW5nLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS53YXJuaW5nLm1lc3NhZ2UsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLndhcm5pbmcuc3RhdHVzICsgJzwvc3Ryb25nPidcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVzcG9uc2UuaW5mbykge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICB0aXRsZTogcmVzcG9uc2UuaW5mby50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2UuaW5mby5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5pbmZvLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ0Vycm9zOicsIHJlc3BvbnNlKTtcclxuICB9XHJcbn07XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc2lkZWJhck5hdldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1uYXYtd3JhcHBlcicpO1xyXG4gIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td3JhcHBlcicpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUnKTtcclxuICBjb25zdCBtZW51VG9nZ2xlQnV0dG9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZSBpJyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4gIG1lbnVUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyTmF2V3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID4gMTIwMCkge1xyXG4gICAgICBpZiAobWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWxlZnQnKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tbGVmdCcpKSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyTmF2V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gQWN0aXZlXG5jb25zdCBzZXRUd0FwaVNldHRpbmdBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRsb2FkZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1sb2FkZXInKSxcbiAgICAgIHRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXR3LWF1dGgtYnRuJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXhpb3MucG9zdCh0aGlzLnZhbHVlLCB7XG4gICAgICAnaXNBY3RpdmUnOiB0aGlzLmNoZWNrZWRcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pc2FjdGl2ZScpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLXR3LWF1dGgtYnRuLSR7dGFyZ2V0fWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICB9KTtcbiAgfSwgNTApO1xufTtcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIC8vIFN3aXRjaGVyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dpdGNoLWlzYWN0aXZlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUd0FwaVNldHRpbmdBY3RpdmUpKTtcbiAgfVxufSkoKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJheGlvcyIsIlN3YWwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsIk1vZGFsIiwiJHR3QXBpU2V0dGluZ3NNb2RhbCIsInR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiIsIiR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIiLCIkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28iLCIkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUiLCIkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwiLCIkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYyIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dpbmciLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2VycyIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdCIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UiLCJ1cGRhdGVBbGxGb2xsb3ciLCJ1cGRhdGVEb25lIiwidXBkYXRlVXJsIiwicmVkaXJlY3QiLCJzaG93VHdBcGlTZXR0aW5nc01vZGFsIiwiZGF0YSIsInN1Y2Nlc3MiLCJpbm5lckhUTUwiLCJodG1sIiwic2hvdyIsIndhcm5pbmciLCJzdHlsZSIsImRpc3BsYXkiLCJhamF4UmVzcG9uc2VBbGVydCIsImdldFR3QXBpU2V0dGluZ01vZGFsIiwic2V0VGltZW91dCIsInBvc3QiLCJocmVmIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJhamF4Q2F0Y2hBbGVydCIsImVuYWJsZU1vZGFsRXZlbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImRpc2FibGVkIiwiZGlzYWJsZU1vZGFsRXZlbnRzIiwiYWpheEZvbGxvd0NhbGxiYWNrIiwibmV4dCIsImNhbGxVcGRhdGVGb2xsb3ciLCJzZXRBdHRyaWJ1dGUiLCJjYWxsQ291bnQiLCJjaGVja2VkIiwiY3JlYXRlZCIsInVwZGF0ZWQiLCJhZnRlciIsImNsb25lTm9kZSIsInBhdGgiLCJoaWRlIiwiYWpheFBsYXRvbmljQ2FsbGJhY2siLCJ1cGRhdGUiLCJuZXh0VXBkYXRlIiwiY2FsbFVwZGF0ZVBsYXRvbmljIiwiaWNvbiIsImFqYXhVbmZvbGxvd0NhbGxiYWNrIiwiYWpheFJlc3BvbnNlU3VjY2VzcyIsInRhcmdldCIsInJlbW92ZSIsImNhbGxVbmZvbGxvdyIsIiRsb2FkZXIiLCJwYXJlbnRFbGVtZW50IiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJlIiwiY3VycmVudFRhcmdldCIsInNldElzRmF2b3JpdGUiLCIkdGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3dhbCIsInJlcXVpcmUiLCJmaXJlIiwidGl0bGUiLCJkZXRhaWwiLCJ0ZXh0IiwibWVzc2FnZSIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJjb25zb2xlIiwibG9nIiwiZm9vdGVyIiwic3RhdHVzIiwiaW5mbyIsInNpZGViYXJOYXZXcmFwcGVyIiwibWFpbldyYXBwZXIiLCJtZW51VG9nZ2xlQnV0dG9uIiwibWVudVRvZ2dsZUJ1dHRvbkljb24iLCJvdmVybGF5IiwidG9nZ2xlIiwiYm9keSIsImNsaWVudFdpZHRoIiwiY29udGFpbnMiLCJzZXRUd0FwaVNldHRpbmdBY3RpdmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=