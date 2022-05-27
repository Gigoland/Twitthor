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

    updateDone = true;
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

    if (!updateDone) {
      updateDone = false;
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_5___default().post(_this2.value).then(function (response) {
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
  } // Get modal content


  if (document.querySelector('#js-btn-update-modal')) {
    document.querySelector('#js-btn-update-modal').addEventListener('click', getTwApiSettingModal);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-6a5154","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-455833"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLEtBSGQsRUFJQ2EsSUFKRCxDQUlNLFVBQUFiLElBQUksRUFBSTtBQUNaeUMsTUFBQUEsbUJBQW1CLENBQUN6QyxJQUFELENBQW5CO0FBQ0EyRSxNQUFBQSxPQUFPLENBQUNyRSxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQTdCLE1BQUFBLFFBQVEsQ0FBQ3dDLGdCQUFULENBQTBCLHNCQUExQixFQUFrREMsT0FBbEQsQ0FBMEQsVUFBQUMsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQ2QsS0FBSCxDQUFTQyxPQUFULEdBQW1CLE9BQXZCO0FBQUEsT0FBNUQ7QUFDQTdCLE1BQUFBLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixxQkFBcUI4RCxNQUE1QyxFQUFvRHBDLEtBQXBELENBQTBEQyxPQUExRCxHQUFvRSxPQUFwRTtBQUNELEtBVEQsV0FVTyxVQUFBUSxLQUFLLEVBQUk7QUFDZEMsTUFBQUEsY0FBYyxDQUFDRCxLQUFELENBQWQ7QUFDRCxLQVpEO0FBYUQsR0FkUyxFQWNQLEVBZE8sQ0FBVjtBQWVELENBckJELEVBdUJBOzs7QUFDQSxDQUFDLFlBQVc7QUFDVixNQUFJckMsUUFBUSxDQUFDRSxhQUFULENBQXVCLHNCQUF2QixDQUFKLEVBQW9EO0FBQ2xERixJQUFBQSxRQUFRLENBQUN3QyxnQkFBVCxDQUEwQixzQkFBMUIsRUFBa0RDLE9BQWxELENBQTBELFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUMwQixnQkFBSCxDQUFvQixRQUFwQixFQUE4QjRCLHFCQUE5QixDQUFKO0FBQUEsS0FBNUQ7QUFDRDtBQUNGLENBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Q0N6QkE7O0FBQ08sSUFBTUssR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQzNCLHlJQUFELENBQTVCLEVBTVA7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL2ZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvdHdhcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYWRtaW4uY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYWRtaW4uc2Nzcyc7XG5cbi8vIEFqYXhcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIFlvdSBjYW4gc3BlY2lmeSB3aGljaCBwbHVnaW5zIHlvdSBuZWVkXG4vL2ltcG9ydCB7TW9kYWwsIFRvb2x0aXAsIFRvYXN0LCBQb3BvdmVyfSBmcm9tICdib290c3RyYXAnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG4vLyBFUzYgTW9kdWxlcyBvciBUeXBlU2NyaXB0XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbmltcG9ydCAnLi9hZG1pbi9qcy9tYWluJztcbmltcG9ydCAnLi9hZG1pbi9qcy90d2FwaSc7XG5pbXBvcnQgJy4vYWRtaW4vanMvZm9sbG93JztcblxuLy8gT25sb2FkXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdC8vIEF4aW9zIGRlZmF1bHRzIGhlYWRlcnNcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVhTUkYtVE9LRU4nXSA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwieC1jc3JmLXRva2VuXCJdJykuY29udGVudDtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJztcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICR0d0FwaVNldHRpbmdzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdHdhcGktc2V0dGluZ3MnKTtcblxuICAvLyBWYXJpYWJsZXNcbiAgdmFyIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50ID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93aW5nID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93ZXJzID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlID0gbnVsbCxcbiAgICAgIHVwZGF0ZUFsbEZvbGxvdyA9IGZhbHNlLFxuICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlLFxuICAgICAgdXBkYXRlVXJsID0gbnVsbCxcbiAgICAgIHJlZGlyZWN0ID0gbnVsbDtcblxuICAvLyBTaG93IGZvbGxvdyB1cGRhdGUgbW9kYWxcbiAgY29uc3Qgc2hvd1R3QXBpU2V0dGluZ3NNb2RhbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gZGF0YS5odG1sO1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLnNob3coKTtcbiAgICAgIGlmIChkYXRhLndhcm5pbmcpIHtcbiAgICAgICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljKSB7XG4gICAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IG1vZGFsIGh0bWwgY29udGVudFxuICBjb25zdCBnZXRUd0FwaVNldHRpbmdNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1tb2RhbC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QodGhpcy5ocmVmKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzaG93VHdBcGlTZXR0aW5nc01vZGFsKGRhdGEpO1xuICAgICAgICB9LCA1MCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSwgNTApO1xuICB9O1xuXG4gIC8vIEVuYWJsZSBib3V0dG9ucyBldmVudHNcbiAgY29uc3QgZW5hYmxlTW9kYWxFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldicpLmZvckVhY2goZWwgPT4gZWwuZGlzYWJsZWQgPSBmYWxzZSk7XG4gICAgaWYgKHVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLmlubmVySFRNTCA9ICdGaW5pc2gnO1xuICAgIH1cbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgLy8gRW5hYmxlIGJvdXR0b25zIGV2ZW50c1xuICBjb25zdCBkaXNhYmxlTW9kYWxFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IHRydWUpO1xuICB9O1xuXG4gIC8vIEFmdGVyIHVwZGF0ZSBmb2xsb3dcbiAgY29uc3QgYWpheEZvbGxvd0NhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIGlmIChkYXRhLm5leHQpIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uaW5uZXJIVE1MID0gJ0dvIHRvIG5leHQnO1xuICAgICAgICAvLyBHZXQgbmV4dFxuICAgICAgICBpZiAodXBkYXRlQWxsRm9sbG93KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsVXBkYXRlRm9sbG93KCk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnRG9uZSc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWtvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIH1cbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50LmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBgQ2hlY2tlZCA6ICR7ZGF0YS5jaGVja2VkfSAvIENyZWF0ZWQgOiAke2RhdGEuY3JlYXRlZH0gLyBVcGRhdGVkIDogJHtkYXRhLnVwZGF0ZWR9YDtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5hZnRlcigkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmVkaXJlY3QgPSBkYXRhLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5oaWRlKCk7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdXBkYXRlXG4gIGNvbnN0IGFqYXhQbGF0b25pY0NhbGxiYWNrID0gZnVuY3Rpb24odXBkYXRlLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgaWYgKGRhdGEubmV4dFVwZGF0ZSkge1xuICAgICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnR28gdG8gbmV4dCc7XG4gICAgICAgIC8vIEdldCBuZXh0XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsVXBkYXRlUGxhdG9uaWMoZGF0YS5uZXh0VXBkYXRlKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uaW5uZXJIVE1MID0gJ0RvbmUnO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVuYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICB9XG4gICAgICBsZXQgaWNvbiA9ICdmb3J3YXJkJztcbiAgICAgIGlmICh1cGRhdGUgPT09ICdmb2xsb3dpbmcnKSB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93aW5nLmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbiA9ICdiYWNrd2FyZCc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93ZXJzLmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgfVxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS0ke2ljb259XCI+PC9pPiBDaGVja2VkIDogJHtkYXRhLmNoZWNrZWR9IC8gQ3JlYXRlZCA6ICR7ZGF0YS5jcmVhdGVkfSAvIFVwZGF0ZWQgOiAke2RhdGEudXBkYXRlZH1gO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LmFmdGVyKCR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICByZWRpcmVjdCA9IGRhdGEucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLmhpZGUoKTtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZnRlciB1bmZvbGxvd1xuICBjb25zdCBhamF4VW5mb2xsb3dDYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvdy0nICsgZGF0YS5kYXRhLnRhcmdldCkucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgICB1cGRhdGVEb25lID0gdHJ1ZTtcbiAgfTtcblxuICAvLyBHZXQgdXBkYXRlIGZvbGxvd2luZy9mb2xvd2Vyc1xuICBjb25zdCBjYWxsVXBkYXRlRm9sbG93ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF1cGRhdGVEb25lKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlLmlubmVySFRNTCA9ICdVcGRhdGluZy4uLiBQbGVhc2UgZG8gbm90IGNsb3NlLic7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkaXNhYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KHVwZGF0ZVVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhamF4Rm9sbG93Q2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEdldCB1cGRhdGUgcGxhdG9uaWNzXG4gIGNvbnN0IGNhbGxVcGRhdGVQbGF0b25pYyA9IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIGlmICghdXBkYXRlRG9uZSkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSAnVXBkYXRpbmcuLi4gUGxlYXNlIGRvIG5vdCBjbG9zZS4nO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZGlzYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCh1cGRhdGVVcmwsIHtcbiAgICAgICAgICAndXBkYXRlJzogdXBkYXRlXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWpheFBsYXRvbmljQ2FsbGJhY2sodXBkYXRlLCBkYXRhKTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVW5mb2xsb3dcbiAgY29uc3QgY2FsbFVuZm9sbG93ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF1cGRhdGVEb25lKSB7XG4gICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCh0aGlzLnZhbHVlKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFqYXhVbmZvbGxvd0NhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfTtcblxuICAvLyBNb2RhbFxuICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbCkge1xuICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiA9IG5ldyBNb2RhbCgkdHdBcGlTZXR0aW5nc01vZGFsKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9hZGVyJyk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1mb2xsb3cnKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLWZvbGxvdy1hbGwnKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYyA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtcGxhdG9uaWMnKTtcblxuICAgIC8vIE9uIHNob3cgbW9kYWxcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWNhbGwtY291bnRzJyk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2luZyA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWNhbGwtY291bnRzLWZvbGxvd2luZycpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dlcnMgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1jYWxsLWNvdW50cy1mb2xsb3dlcnMnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdCA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LWJveC1yZXN1bHQnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UgPSAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQucXVlcnlTZWxlY3RvcignI2FsZXJ0LWJveC1yZXN1bHQtbWVzc2FnZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXgtbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIC8vIE9uIGNsb3NlIG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE9uIGNsb3NlZCBtb2RhbFxuICAgICR0d0FwaVNldHRpbmdzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXJlZGlyZWN0KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hamF4LWxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hamF4LWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMpIHtcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICAgIGVuYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgZm9sbG93aW5nL2ZvbGxvd2Vyc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyA9ICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHVwZGF0ZVVybCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY2FsbFVwZGF0ZUZvbGxvdygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGFsbCBmb2xsb3dpbmcvZm9sbG93ZXJzXG4gICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvID0gJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdXBkYXRlVXJsID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICB1cGRhdGVBbGxGb2xsb3cgPSB0cnVlO1xuICAgICAgICBjYWxsVXBkYXRlRm9sbG93KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYWxsIHBsYXRvbmljc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYykge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYztcbiAgICAgICAgdXBkYXRlVXJsID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjYWxsVXBkYXRlUGxhdG9uaWMoJ2ZvbGxvd2luZycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IG1vZGFsIGNvbnRlbnRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLW1vZGFsJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VHdBcGlTZXR0aW5nTW9kYWwpO1xuICB9XG5cbiAgLy8gVW5mb2xsb3dcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tdW5mb2xsb3cnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tdW5mb2xsb3cnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbFVuZm9sbG93KSk7XG4gIH1cbn0pKCk7XG4iLCJjb25zdCBzd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcclxuXHJcbi8vIEFqYXggc3VjY2VzcyByZXNwb25zZSBtYW5hZ2VyXHJcbndpbmRvdy5hamF4UmVzcG9uc2VTdWNjZXNzID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICBzd2FsLmZpcmUoe1xyXG4gICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgdGl0bGU6IHJlc3BvbnNlLmRldGFpbC50aXRsZSxcclxuICAgIHRleHQ6IHJlc3BvbnNlLmRldGFpbC5tZXNzYWdlLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDE1MDBcclxuICB9KTtcclxufTtcclxuXHJcbi8vIEFqYXggY2F0Y2ggZXJyb3JzIG1hbmFnZXJcclxud2luZG93LmFqYXhDYXRjaEFsZXJ0ID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICBjb25zb2xlLmVycm9yKCdFcnJvczonLCByZXNwb25zZSk7XHJcbn1cclxuXHJcbi8vIEFqYXggcmVzcG9uc2UgbWFuYWdlclxyXG53aW5kb3cuYWpheFJlc3BvbnNlQWxlcnQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLmVycm9yLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS5lcnJvci5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5lcnJvci5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXNwb25zZS53YXJuaW5nKSB7XHJcbiAgICBzd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS53YXJuaW5nLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS53YXJuaW5nLm1lc3NhZ2UsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLndhcm5pbmcuc3RhdHVzICsgJzwvc3Ryb25nPidcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVzcG9uc2UuaW5mbykge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICB0aXRsZTogcmVzcG9uc2UuaW5mby50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2UuaW5mby5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5pbmZvLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc29sZS5lcnJvcignRXJyb3M6JywgcmVzcG9uc2UpO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHNpZGViYXJOYXZXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItbmF2LXdyYXBwZXInKTtcclxuICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdyYXBwZXInKTtcclxuICBjb25zdCBtZW51VG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUgaScpO1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5cclxuICBtZW51VG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDEyMDApIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1sZWZ0JykpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtYmFycycpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWxlZnQnKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2lkZWJhck5hdldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIEFjdGl2ZVxuY29uc3Qgc2V0VHdBcGlTZXR0aW5nQWN0aXZlID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkbG9hZGVyID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtbG9hZGVyJyksXG4gICAgICB0YXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdHctYXV0aC1idG4nKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUsIHtcbiAgICAgICdpc0FjdGl2ZSc6IHRoaXMuY2hlY2tlZFxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGFqYXhSZXNwb25zZVN1Y2Nlc3MoZGF0YSk7XG4gICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXR3LWF1dGgtYnRuLScgKyB0YXJnZXQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICB9KTtcbiAgfSwgNTApO1xufTtcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dpdGNoLWlzLWFjdGl2ZScpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pcy1hY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFR3QXBpU2V0dGluZ0FjdGl2ZSkpO1xuICB9XG59KSgpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImF4aW9zIiwiU3dhbCIsIndpbmRvdyIsIm9ubG9hZCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiTW9kYWwiLCIkdHdBcGlTZXR0aW5nc01vZGFsIiwidHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luIiwiJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZSIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2luZyIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93ZXJzIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSIsInVwZGF0ZUFsbEZvbGxvdyIsInVwZGF0ZURvbmUiLCJ1cGRhdGVVcmwiLCJyZWRpcmVjdCIsInNob3dUd0FwaVNldHRpbmdzTW9kYWwiLCJkYXRhIiwic3VjY2VzcyIsImlubmVySFRNTCIsImh0bWwiLCJzaG93Iiwid2FybmluZyIsInN0eWxlIiwiZGlzcGxheSIsImFqYXhSZXNwb25zZUFsZXJ0IiwiZ2V0VHdBcGlTZXR0aW5nTW9kYWwiLCJzZXRUaW1lb3V0IiwicG9zdCIsImhyZWYiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImFqYXhDYXRjaEFsZXJ0IiwiZW5hYmxlTW9kYWxFdmVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiZGlzYWJsZWQiLCJkaXNhYmxlTW9kYWxFdmVudHMiLCJhamF4Rm9sbG93Q2FsbGJhY2siLCJuZXh0IiwiY2FsbFVwZGF0ZUZvbGxvdyIsInNldEF0dHJpYnV0ZSIsImNhbGxDb3VudCIsImNoZWNrZWQiLCJjcmVhdGVkIiwidXBkYXRlZCIsImFmdGVyIiwiY2xvbmVOb2RlIiwicGF0aCIsImhpZGUiLCJhamF4UGxhdG9uaWNDYWxsYmFjayIsInVwZGF0ZSIsIm5leHRVcGRhdGUiLCJjYWxsVXBkYXRlUGxhdG9uaWMiLCJpY29uIiwiYWpheFVuZm9sbG93Q2FsbGJhY2siLCJhamF4UmVzcG9uc2VTdWNjZXNzIiwidGFyZ2V0IiwicmVtb3ZlIiwiY2FsbFVuZm9sbG93IiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJlIiwiY3VycmVudFRhcmdldCIsInN3YWwiLCJyZXF1aXJlIiwiZmlyZSIsInRpdGxlIiwiZGV0YWlsIiwidGV4dCIsIm1lc3NhZ2UiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiY29uc29sZSIsImZvb3RlciIsInN0YXR1cyIsImluZm8iLCJzaWRlYmFyTmF2V3JhcHBlciIsIm1haW5XcmFwcGVyIiwibWVudVRvZ2dsZUJ1dHRvbiIsIm1lbnVUb2dnbGVCdXR0b25JY29uIiwib3ZlcmxheSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNvbnRhaW5zIiwic2V0VHdBcGlTZXR0aW5nQWN0aXZlIiwiJGxvYWRlciIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=