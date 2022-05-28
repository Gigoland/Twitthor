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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");










var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"); // Onload


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
      setTimeout(function () {
        twApiSettingsModalPlugin.show();

        if (data.warning) {
          if ($twApiSettingsModalBtnGoPlatonic) {
            $twApiSettingsModalBtnGoPlatonic.style.display = 'none';
          } else {
            $twApiSettingsModalBtnGoOne.style.display = 'none';
            $twApiSettingsModalBtnGoAll.style.display = 'none';
          }
        }
      }, 50);
    } else {
      ajaxResponseAlert(data);
    }
  }; // Get modal html content


  var getTwApiSettingModal = function getTwApiSettingModal() {
    var _this = this;

    this.style.display = 'none';
    document.querySelector('#js-btn-update-modal-loader').style.display = 'block';
    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(_this.href).then(function (response) {
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
      setTimeout(function () {
        $twApiSettingsModalAlertResult.after($twApiSettingsModalAlertResult.cloneNode(true));
        $twApiSettingsModalAlertResult.style.display = 'none';
      }, 50);
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
      setTimeout(function () {
        $twApiSettingsModalAlertResult.after($twApiSettingsModalAlertResult.cloneNode(true));
        $twApiSettingsModalAlertResult.style.display = 'none';
      }, 50);
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
    if (!updateDone) {
      $twApiSettingsModalAlertMessage.innerHTML = 'Updating... Please do not close.';
      $twApiSettingsModalAlertResult.style.display = 'block';
      disableModalEvents();
      setTimeout(function () {
        axios__WEBPACK_IMPORTED_MODULE_7___default().post(updateUrl).then(function (response) {
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
        axios__WEBPACK_IMPORTED_MODULE_7___default().post(updateUrl, {
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


  var callUnfollow = function callUnfollow($el) {
    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_7___default().post($el.value).then(function (response) {
        return response.data;
      }).then(function (data) {
        setTimeout(function () {
          ajaxUnfollowCallback(data);

          if (data.success) {
            document.querySelector("#row-".concat($el.getAttribute('data-target'))).remove();
          } else {
            $el.style.display = 'block';
            $loader.style.display = 'none';
          }
        }, 50);
      })["catch"](function (error) {
        ajaxCatchAlert(error);
      });
    }, 50);
  }; // Safe unfollow


  var safeUnfollow = function safeUnfollow() {
    var $this = this,
        $loader = $this.parentElement.querySelector('.unfollow-loader');
    $this.style.display = 'none';
    $loader.style.display = 'block';

    if ($this.classList.contains('is-verified') || $this.classList.contains('is-favorite')) {
      var text = 'This is verified account.';

      if ($this.classList.contains('is-favorite')) {
        text = 'This is you favorited account.';
      }

      swal.fire({
        title: 'Are you sure ?',
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, unfollow it !'
      }).then(function (result) {
        if (result.isConfirmed) {
          callUnfollow($this);
        } else {
          $this.style.display = 'block';
          $loader.style.display = 'none';
        }
      });
    } else {
      callUnfollow($this);
    }
  }; // Modal


  if ($twApiSettingsModal) {
    twApiSettingsModalPlugin = new bootstrap__WEBPACK_IMPORTED_MODULE_8__.Modal($twApiSettingsModal);
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
    var _this2 = this;

    var $loader = this.parentElement.querySelector('.switch-loader'),
        $target = document.querySelector(".js-btn-unfollow-".concat(this.getAttribute('data-target')));
    this.style.display = 'none';
    $loader.style.display = 'block';
    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_7___default().post(_this2.value, {
        'isFavorite': _this2.checked
      }).then(function (response) {
        return response.data;
      }).then(function (data) {
        setTimeout(function () {
          ajaxResponseSuccess(data);
          $loader.style.display = 'none';
          _this2.style.display = 'block';

          if (_this2.checked) {
            $target.classList.replace('btn-warning', 'btn-info');
            $target.classList.add('is-favorite');
          } else {
            $target.classList.replace('btn-info', 'btn-warning');
            $target.classList.remove('is-favorite');
          }
        }, 50);
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
      return el.addEventListener('click', safeUnfollow);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-6a5154","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_concat_js-node_modu-bc0965"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2QsSUFBYjtBQUFBLEtBSGQsRUFJQ2EsSUFKRCxDQUlNLFVBQUFiLElBQUksRUFBSTtBQUNaeUMsTUFBQUEsbUJBQW1CLENBQUN6QyxJQUFELENBQW5CO0FBQ0ErQyxNQUFBQSxPQUFPLENBQUN4QyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQWhDLE1BQUFBLFFBQVEsQ0FBQzBDLGdCQUFULENBQTBCLHFCQUExQixFQUFpREMsT0FBakQsQ0FBeUQsVUFBQUMsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQ2IsS0FBSCxDQUFTQyxPQUFULEdBQW1CLE9BQXZCO0FBQUEsT0FBM0Q7QUFDQWhDLE1BQUFBLFFBQVEsQ0FBQ0UsYUFBVCwyQkFBMEM4RyxNQUExQyxHQUFvRGpGLEtBQXBELENBQTBEQyxPQUExRCxHQUFvRSxPQUFwRTtBQUNELEtBVEQsV0FVTyxVQUFBTyxLQUFLLEVBQUk7QUFDZEMsTUFBQUEsY0FBYyxDQUFDRCxLQUFELENBQWQ7QUFDRCxLQVpEO0FBYUQsR0FkUyxFQWNQLEVBZE8sQ0FBVjtBQWVELENBckJELEVBdUJBOzs7QUFDQSxDQUFDLFlBQVc7QUFDVjtBQUNBLE1BQUl2QyxRQUFRLENBQUNFLGFBQVQsQ0FBdUIscUJBQXZCLENBQUosRUFBbUQ7QUFDakRGLElBQUFBLFFBQVEsQ0FBQzBDLGdCQUFULENBQTBCLHFCQUExQixFQUFpREMsT0FBakQsQ0FBeUQsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQzBDLGdCQUFILENBQW9CLFFBQXBCLEVBQThCeUIscUJBQTlCLENBQUo7QUFBQSxLQUEzRDtBQUNEO0FBQ0YsQ0FMRDs7Ozs7Ozs7Ozs7Ozs7OztDQ3pCQTs7QUFDTyxJQUFNRyxHQUFHLEdBQUdELDBFQUFnQixDQUFDM0cseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvZm9sbG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy90d2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhZG1pbi5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuLy8gQWpheFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcbi8vaW1wb3J0IHtNb2RhbCwgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXJ9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIEVTNiBNb2R1bGVzIG9yIFR5cGVTY3JpcHRcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuaW1wb3J0ICcuL2FkbWluL2pzL21haW4nO1xuaW1wb3J0ICcuL2FkbWluL2pzL3R3YXBpJztcbmltcG9ydCAnLi9hZG1pbi9qcy9mb2xsb3cnO1xuXG4vLyBPbmxvYWRcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Ly8gQXhpb3MgZGVmYXVsdHMgaGVhZGVyc1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0Jztcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtWFNSRi1UT0tFTiddID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ4LWNzcmYtdG9rZW5cIl0nKS5jb250ZW50O1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnO1xuY29uc3Qgc3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XG5cbi8vIE9ubG9hZFxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkdHdBcGlTZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXR3YXBpLXNldHRpbmdzJyk7XG5cbiAgLy8gVmFyaWFibGVzXG4gIHZhciB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYyA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2luZyA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2VycyA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9IG51bGwsXG4gICAgICB1cGRhdGVBbGxGb2xsb3cgPSBmYWxzZSxcbiAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZSxcbiAgICAgIHVwZGF0ZVVybCA9IG51bGwsXG4gICAgICByZWRpcmVjdCA9IG51bGw7XG5cbiAgLy8gU2hvdyBmb2xsb3cgdXBkYXRlIG1vZGFsXG4gIGNvbnN0IHNob3dUd0FwaVNldHRpbmdzTW9kYWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpLmlubmVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4uc2hvdygpO1xuICAgICAgICBpZiAoZGF0YS53YXJuaW5nKSB7XG4gICAgICAgICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljKSB7XG4gICAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IG1vZGFsIGh0bWwgY29udGVudFxuICBjb25zdCBnZXRUd0FwaVNldHRpbmdNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1tb2RhbC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QodGhpcy5ocmVmKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzaG93VHdBcGlTZXR0aW5nc01vZGFsKGRhdGEpO1xuICAgICAgICB9LCA1MCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSwgNTApO1xuICB9O1xuXG4gIC8vIEVuYWJsZSBib3V0dG9ucyBldmVudHNcbiAgY29uc3QgZW5hYmxlTW9kYWxFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldicpLmZvckVhY2goZWwgPT4gZWwuZGlzYWJsZWQgPSBmYWxzZSk7XG4gICAgaWYgKHVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLmlubmVySFRNTCA9ICdGaW5pc2gnO1xuICAgIH1cbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgLy8gRW5hYmxlIGJvdXR0b25zIGV2ZW50c1xuICBjb25zdCBkaXNhYmxlTW9kYWxFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IHRydWUpO1xuICB9O1xuXG4gIC8vIEFmdGVyIHVwZGF0ZSBmb2xsb3dcbiAgY29uc3QgYWpheEZvbGxvd0NhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIGlmIChkYXRhLm5leHQpIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uaW5uZXJIVE1MID0gJ0dvIHRvIG5leHQnO1xuICAgICAgICAvLyBHZXQgbmV4dFxuICAgICAgICBpZiAodXBkYXRlQWxsRm9sbG93KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsVXBkYXRlRm9sbG93KCk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnRG9uZSc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWtvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIH1cbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50LmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBgQ2hlY2tlZCA6ICR7ZGF0YS5jaGVja2VkfSAvIENyZWF0ZWQgOiAke2RhdGEuY3JlYXRlZH0gLyBVcGRhdGVkIDogJHtkYXRhLnVwZGF0ZWR9YDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuYWZ0ZXIoJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgNTApO1xuICAgICAgcmVkaXJlY3QgPSBkYXRhLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5oaWRlKCk7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdXBkYXRlXG4gIGNvbnN0IGFqYXhQbGF0b25pY0NhbGxiYWNrID0gZnVuY3Rpb24odXBkYXRlLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgaWYgKGRhdGEubmV4dFVwZGF0ZSkge1xuICAgICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnR28gdG8gbmV4dCc7XG4gICAgICAgIC8vIEdldCBuZXh0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNhbGxVcGRhdGVQbGF0b25pYyhkYXRhLm5leHRVcGRhdGUpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uaW5uZXJIVE1MID0gJ0RvbmUnO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVuYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICB9XG4gICAgICBsZXQgaWNvbiA9ICdmb3J3YXJkJztcbiAgICAgIGlmICh1cGRhdGUgPT09ICdmb2xsb3dpbmcnKSB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93aW5nLmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbiA9ICdiYWNrd2FyZCc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93ZXJzLmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgfVxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS0ke2ljb259XCI+PC9pPiBDaGVja2VkIDogJHtkYXRhLmNoZWNrZWR9IC8gQ3JlYXRlZCA6ICR7ZGF0YS5jcmVhdGVkfSAvIFVwZGF0ZWQgOiAke2RhdGEudXBkYXRlZH1gO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5hZnRlcigkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCA1MCk7XG4gICAgICByZWRpcmVjdCA9IGRhdGEucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLmhpZGUoKTtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZnRlciB1bmZvbGxvd1xuICBjb25zdCBhamF4VW5mb2xsb3dDYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IHVwZGF0ZSBmb2xsb3dpbmcvZm9sb3dlcnNcbiAgY29uc3QgY2FsbFVwZGF0ZUZvbGxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdXBkYXRlRG9uZSkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSAnVXBkYXRpbmcuLi4gUGxlYXNlIGRvIG5vdCBjbG9zZS4nO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZGlzYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCh1cGRhdGVVcmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWpheEZvbGxvd0NhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgdXBkYXRlIHBsYXRvbmljc1xuICBjb25zdCBjYWxsVXBkYXRlUGxhdG9uaWMgPSBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICBpZiAoIXVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1VwZGF0aW5nLi4uIFBsZWFzZSBkbyBub3QgY2xvc2UuJztcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRpc2FibGVNb2RhbEV2ZW50cygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXBkYXRlVXJsLCB7XG4gICAgICAgICAgJ3VwZGF0ZSc6IHVwZGF0ZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFqYXhQbGF0b25pY0NhbGxiYWNrKHVwZGF0ZSwgZGF0YSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVuZm9sbG93XG4gIGNvbnN0IGNhbGxVbmZvbGxvdyA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgkZWwudmFsdWUpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFqYXhVbmZvbGxvd0NhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyb3ctJHskZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpfWApLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSwgNTApO1xuICB9O1xuXG4gIC8vIFNhZmUgdW5mb2xsb3dcbiAgY29uc3Qgc2FmZVVuZm9sbG93ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcyxcbiAgICAgICAgJGxvYWRlciA9ICR0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVuZm9sbG93LWxvYWRlcicpO1xuICAgICAgICAkdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICRsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaWYgKCR0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaXMtdmVyaWZpZWQnKVxuICAgICB8fCAkdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZhdm9yaXRlJylcbiAgICApIHtcbiAgICAgIGxldCB0ZXh0ID0gJ1RoaXMgaXMgdmVyaWZpZWQgYWNjb3VudC4nO1xuICAgICAgaWYgKCR0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaXMtZmF2b3JpdGUnKSkge1xuICAgICAgICB0ZXh0ID0gJ1RoaXMgaXMgeW91IGZhdm9yaXRlZCBhY2NvdW50Lic7XG4gICAgICB9XG4gICAgICBzd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSA/JyxcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIHVuZm9sbG93IGl0ICEnXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuICAgICAgICAgIGNhbGxVbmZvbGxvdygkdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsVW5mb2xsb3coJHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBNb2RhbFxuICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbCkge1xuICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbiA9IG5ldyBNb2RhbCgkdHdBcGlTZXR0aW5nc01vZGFsKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9hZGVyJyk7XG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1mb2xsb3cnKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLWZvbGxvdy1hbGwnKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYyA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtcGxhdG9uaWMnKTtcblxuICAgIC8vIE9uIHNob3cgbW9kYWxcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWNhbGwtY291bnRzJyk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2luZyA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWNhbGwtY291bnRzLWZvbGxvd2luZycpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dlcnMgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1jYWxsLWNvdW50cy1mb2xsb3dlcnMnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdCA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LWJveC1yZXN1bHQnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UgPSAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQucXVlcnlTZWxlY3RvcignI2FsZXJ0LWJveC1yZXN1bHQtbWVzc2FnZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXgtbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIC8vIE9uIGNsb3NlIG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE9uIGNsb3NlZCBtb2RhbFxuICAgICR0d0FwaVNldHRpbmdzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXJlZGlyZWN0KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hamF4LWxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hamF4LWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMpIHtcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICAgIGVuYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgZm9sbG93aW5nL2ZvbGxvd2Vyc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyA9ICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHVwZGF0ZVVybCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY2FsbFVwZGF0ZUZvbGxvdygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGFsbCBmb2xsb3dpbmcvZm9sbG93ZXJzXG4gICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvID0gJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdXBkYXRlVXJsID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICB1cGRhdGVBbGxGb2xsb3cgPSB0cnVlO1xuICAgICAgICBjYWxsVXBkYXRlRm9sbG93KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYWxsIHBsYXRvbmljc1xuICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYykge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYztcbiAgICAgICAgdXBkYXRlVXJsID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjYWxsVXBkYXRlUGxhdG9uaWMoJ2ZvbGxvd2luZycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmF2b3JpdGVcbiAgY29uc3Qgc2V0SXNGYXZvcml0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCAkbG9hZGVyID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtbG9hZGVyJyksXG4gICAgICAgICR0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtYnRuLXVuZm9sbG93LSR7dGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyl9YCk7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICRsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUsIHtcbiAgICAgICAgJ2lzRmF2b3JpdGUnOiB0aGlzLmNoZWNrZWRcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFqYXhSZXNwb25zZVN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QucmVwbGFjZSgnYnRuLXdhcm5pbmcnLCAnYnRuLWluZm8nKTtcbiAgICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtZmF2b3JpdGUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QucmVwbGFjZSgnYnRuLWluZm8nLCAnYnRuLXdhcm5pbmcnKTtcbiAgICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmF2b3JpdGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9LCA1MCk7XG4gIH07XG5cbiAgLy8gR2V0IG1vZGFsIGNvbnRlbnRcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLW1vZGFsJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0VHdBcGlTZXR0aW5nTW9kYWwpO1xuICB9XG5cbiAgLy8gVW5mb2xsb3dcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idG4tdW5mb2xsb3cnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1idG4tdW5mb2xsb3cnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2FmZVVuZm9sbG93KSk7XG4gIH1cblxuICAvLyBTd2l0aCBpcyBmYXZvcml0ZVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN3aXRjaC1pc2Zhdm9yaXRlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzZmF2b3JpdGUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldElzRmF2b3JpdGUpKTtcbiAgfVxufSkoKTtcbiIsImNvbnN0IHN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xyXG5cclxuLy8gQWpheCBzdWNjZXNzIHJlc3BvbnNlIG1hbmFnZXJcclxud2luZG93LmFqYXhSZXNwb25zZVN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIHN3YWwuZmlyZSh7XHJcbiAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICB0aXRsZTogcmVzcG9uc2UuZGV0YWlsLnRpdGxlLFxyXG4gICAgdGV4dDogcmVzcG9uc2UuZGV0YWlsLm1lc3NhZ2UsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMTUwMFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gQWpheCBjYXRjaCBlcnJvcnMgbWFuYWdlclxyXG53aW5kb3cuYWpheENhdGNoQWxlcnQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIGNvbnNvbGUubG9nKCdFcnJvczonLCByZXNwb25zZSk7XHJcbn1cclxuXHJcbi8vIEFqYXggcmVzcG9uc2UgbWFuYWdlclxyXG53aW5kb3cuYWpheFJlc3BvbnNlQWxlcnQgPSBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLmVycm9yLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS5lcnJvci5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5lcnJvci5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXNwb25zZS53YXJuaW5nKSB7XHJcbiAgICBzd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS53YXJuaW5nLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS53YXJuaW5nLm1lc3NhZ2UsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLndhcm5pbmcuc3RhdHVzICsgJzwvc3Ryb25nPidcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVzcG9uc2UuaW5mbykge1xyXG4gICAgc3dhbC5maXJlKHtcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICB0aXRsZTogcmVzcG9uc2UuaW5mby50aXRsZSxcclxuICAgICAgdGV4dDogcmVzcG9uc2UuaW5mby5tZXNzYWdlLFxyXG4gICAgICBmb290ZXI6ICc8c3Ryb25nPicgKyByZXNwb25zZS5pbmZvLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ0Vycm9zOicsIHJlc3BvbnNlKTtcclxuICB9XHJcbn07XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgc2lkZWJhck5hdldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1uYXYtd3JhcHBlcicpO1xyXG4gIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td3JhcHBlcicpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10b2dnbGUnKTtcclxuICBjb25zdCBtZW51VG9nZ2xlQnV0dG9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZSBpJyk7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4gIG1lbnVUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyTmF2V3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID4gMTIwMCkge1xyXG4gICAgICBpZiAobWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1jaGV2cm9uLWxlZnQnKSkge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tbGVmdCcpO1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1iYXJzJyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tbGVmdCcpKSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaWRlYmFyTmF2V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBtYWluV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gQWN0aXZlXG5jb25zdCBzZXRUd0FwaVNldHRpbmdBY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRsb2FkZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1sb2FkZXInKSxcbiAgICAgIHRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXR3LWF1dGgtYnRuJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXhpb3MucG9zdCh0aGlzLnZhbHVlLCB7XG4gICAgICAnaXNBY3RpdmUnOiB0aGlzLmNoZWNrZWRcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXN3aXRjaC1pc2FjdGl2ZScpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLXR3LWF1dGgtYnRuLSR7dGFyZ2V0fWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICB9KTtcbiAgfSwgNTApO1xufTtcblxuLy8gT25sb2FkXG4oZnVuY3Rpb24oKSB7XG4gIC8vIFN3aXRjaGVyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dpdGNoLWlzYWN0aXZlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUd0FwaVNldHRpbmdBY3RpdmUpKTtcbiAgfVxufSkoKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJheGlvcyIsIlN3YWwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsIk1vZGFsIiwic3dhbCIsInJlcXVpcmUiLCIkdHdBcGlTZXR0aW5nc01vZGFsIiwidHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luIiwiJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZSIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCIsIiR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnQiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2luZyIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93ZXJzIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0IiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSIsInVwZGF0ZUFsbEZvbGxvdyIsInVwZGF0ZURvbmUiLCJ1cGRhdGVVcmwiLCJyZWRpcmVjdCIsInNob3dUd0FwaVNldHRpbmdzTW9kYWwiLCJkYXRhIiwic3VjY2VzcyIsImlubmVySFRNTCIsImh0bWwiLCJzZXRUaW1lb3V0Iiwic2hvdyIsIndhcm5pbmciLCJzdHlsZSIsImRpc3BsYXkiLCJhamF4UmVzcG9uc2VBbGVydCIsImdldFR3QXBpU2V0dGluZ01vZGFsIiwicG9zdCIsImhyZWYiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImFqYXhDYXRjaEFsZXJ0IiwiZW5hYmxlTW9kYWxFdmVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiZGlzYWJsZWQiLCJkaXNhYmxlTW9kYWxFdmVudHMiLCJhamF4Rm9sbG93Q2FsbGJhY2siLCJuZXh0IiwiY2FsbFVwZGF0ZUZvbGxvdyIsInNldEF0dHJpYnV0ZSIsImNhbGxDb3VudCIsImNoZWNrZWQiLCJjcmVhdGVkIiwidXBkYXRlZCIsImFmdGVyIiwiY2xvbmVOb2RlIiwicGF0aCIsImhpZGUiLCJhamF4UGxhdG9uaWNDYWxsYmFjayIsInVwZGF0ZSIsIm5leHRVcGRhdGUiLCJjYWxsVXBkYXRlUGxhdG9uaWMiLCJpY29uIiwiYWpheFVuZm9sbG93Q2FsbGJhY2siLCJhamF4UmVzcG9uc2VTdWNjZXNzIiwiY2FsbFVuZm9sbG93IiwiJGVsIiwidmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCIkbG9hZGVyIiwic2FmZVVuZm9sbG93IiwiJHRoaXMiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0ZXh0IiwiZmlyZSIsInRpdGxlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic2V0SXNGYXZvcml0ZSIsIiR0YXJnZXQiLCJyZXBsYWNlIiwiYWRkIiwiZGV0YWlsIiwibWVzc2FnZSIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJjb25zb2xlIiwibG9nIiwiZm9vdGVyIiwic3RhdHVzIiwiaW5mbyIsInNpZGViYXJOYXZXcmFwcGVyIiwibWFpbldyYXBwZXIiLCJtZW51VG9nZ2xlQnV0dG9uIiwibWVudVRvZ2dsZUJ1dHRvbkljb24iLCJvdmVybGF5IiwidG9nZ2xlIiwiYm9keSIsImNsaWVudFdpZHRoIiwic2V0VHdBcGlTZXR0aW5nQWN0aXZlIiwidGFyZ2V0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9