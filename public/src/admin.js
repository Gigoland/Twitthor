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


  var callUnfollow = function callUnfollow($el, $loader) {
    setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_7___default().post($el.value).then(function (response) {
        return response.data;
      }).then(function (data) {
        setTimeout(function () {
          ajaxUnfollowCallback(data);

          if (data.success) {
            document.querySelector("#row-".concat($el.getAttribute('data-target'))).remove();
          } else {
            $loader.style.display = 'none';
            $el.style.display = 'block';
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
      swal.fire({
        title: 'Are you sure ?',
        text: $this.classList.contains('is-favorite') ? 'This is your favorite account.' : 'This is verified account.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ffc107',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, Unfollow it !'
      }).then(function (result) {
        if (result.isConfirmed) {
          callUnfollow($this, $loader);
        } else {
          $loader.style.display = 'none';
          $this.style.display = 'block';
        }
      });
    } else {
      callUnfollow($this, $loader);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLGlFQUFlO0FBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztXQUVJLG1CQUFVO0FBQ04sV0FBS0MsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLG1FQUEzQjtBQUNIOzs7O0VBSHdCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0NBR0E7O0NBR0E7QUFDQTtBQUVBOztDQUdBOztBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNBSyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVztBQUMxQjtBQUNBSCxFQUFBQSwwRkFBQSxHQUFvRCxnQkFBcEQ7QUFDQUEsRUFBQUEsc0ZBQUEsR0FBZ0RPLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLDJCQUE1QixFQUF5REMsT0FBekc7QUFDQSxDQUpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFDQSxJQUFNRSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsdUVBQUQsQ0FBcEIsRUFFQTs7O0FBQ0EsQ0FBQyxZQUFXO0FBQ1YsTUFBTUMsbUJBQW1CLEdBQUdQLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBNUIsQ0FEVSxDQUdWOztBQUNBLE1BQUlNLHdCQUF3QixHQUFHLElBQS9CO0FBQUEsTUFDSUMseUJBQXlCLEdBQUcsSUFEaEM7QUFBQSxNQUVJQyx3QkFBd0IsR0FBRyxJQUYvQjtBQUFBLE1BR0lDLDJCQUEyQixHQUFHLElBSGxDO0FBQUEsTUFJSUMsMkJBQTJCLEdBQUcsSUFKbEM7QUFBQSxNQUtJQyxnQ0FBZ0MsR0FBRyxJQUx2QztBQUFBLE1BTUlDLDZCQUE2QixHQUFHLElBTnBDO0FBQUEsTUFPSUMsc0NBQXNDLEdBQUcsSUFQN0M7QUFBQSxNQVFJQyxzQ0FBc0MsR0FBRyxJQVI3QztBQUFBLE1BU0lDLDhCQUE4QixHQUFHLElBVHJDO0FBQUEsTUFVSUMsK0JBQStCLEdBQUcsSUFWdEM7QUFBQSxNQVdJQyxlQUFlLEdBQUcsS0FYdEI7QUFBQSxNQVlJQyxVQUFVLEdBQUcsS0FaakI7QUFBQSxNQWFJQyxTQUFTLEdBQUcsSUFiaEI7QUFBQSxNQWNJQyxRQUFRLEdBQUcsSUFkZixDQUpVLENBb0JWOztBQUNBLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBU0MsSUFBVCxFQUFlO0FBQzVDLFFBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQjtBQUNoQmxCLE1BQUFBLG1CQUFtQixDQUFDTCxhQUFwQixDQUFrQyxhQUFsQyxFQUFpRHdCLFNBQWpELEdBQTZERixJQUFJLENBQUNHLElBQWxFO0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZwQixRQUFBQSx3QkFBd0IsQ0FBQ3FCLElBQXpCOztBQUNBLFlBQUlMLElBQUksQ0FBQ00sT0FBVCxFQUFrQjtBQUNoQixjQUFJakIsZ0NBQUosRUFBc0M7QUFDcENBLFlBQUFBLGdDQUFnQyxDQUFDa0IsS0FBakMsQ0FBdUNDLE9BQXZDLEdBQWlELE1BQWpEO0FBQ0QsV0FGRCxNQUVPO0FBQ0xyQixZQUFBQSwyQkFBMkIsQ0FBQ29CLEtBQTVCLENBQWtDQyxPQUFsQyxHQUE0QyxNQUE1QztBQUNBcEIsWUFBQUEsMkJBQTJCLENBQUNtQixLQUE1QixDQUFrQ0MsT0FBbEMsR0FBNEMsTUFBNUM7QUFDRDtBQUNGO0FBQ0YsT0FWUyxFQVVQLEVBVk8sQ0FBVjtBQVdELEtBYkQsTUFhTztBQUNMQyxNQUFBQSxpQkFBaUIsQ0FBQ1QsSUFBRCxDQUFqQjtBQUNEO0FBQ0YsR0FqQkQsQ0FyQlUsQ0F3Q1Y7OztBQUNBLE1BQU1VLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBVztBQUFBOztBQUN0QyxTQUFLSCxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDQWhDLElBQUFBLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1Qiw2QkFBdkIsRUFBc0Q2QixLQUF0RCxDQUE0REMsT0FBNUQsR0FBc0UsT0FBdEU7QUFDQUosSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZm5DLE1BQUFBLGlEQUFBLENBQVcsS0FBSSxDQUFDMkMsSUFBaEIsRUFDQ0MsSUFERCxDQUNNLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNkLElBQWI7QUFBQSxPQURkLEVBRUNhLElBRkQsQ0FFTSxVQUFBYixJQUFJLEVBQUk7QUFDWkksUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkwsVUFBQUEsc0JBQXNCLENBQUNDLElBQUQsQ0FBdEI7QUFDRCxTQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0QsT0FORCxXQU9PLFVBQUFlLEtBQUssRUFBSTtBQUNkQyxRQUFBQSxjQUFjLENBQUNELEtBQUQsQ0FBZDtBQUNELE9BVEQ7QUFVRCxLQVhTLEVBV1AsRUFYTyxDQUFWO0FBWUQsR0FmRCxDQXpDVSxDQTBEVjs7O0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFXO0FBQ25DbEMsSUFBQUEsbUJBQW1CLENBQUNtQyxnQkFBcEIsQ0FBcUMsS0FBckMsRUFBNENDLE9BQTVDLENBQW9ELFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNDLFFBQUgsR0FBYyxLQUFsQjtBQUFBLEtBQXREOztBQUNBLFFBQUl6QixVQUFKLEVBQWdCO0FBQ2RiLE1BQUFBLG1CQUFtQixDQUFDTCxhQUFwQixDQUFrQyxTQUFsQyxFQUE2Q3dCLFNBQTdDLEdBQXlELFFBQXpEO0FBQ0Q7O0FBQ0RqQixJQUFBQSx5QkFBeUIsQ0FBQ3NCLEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxNQUExQztBQUNELEdBTkQsQ0EzRFUsQ0FtRVY7OztBQUNBLE1BQU1jLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBVztBQUNwQ3JDLElBQUFBLHlCQUF5QixDQUFDc0IsS0FBMUIsQ0FBZ0NDLE9BQWhDLEdBQTBDLE9BQTFDO0FBQ0F6QixJQUFBQSxtQkFBbUIsQ0FBQ21DLGdCQUFwQixDQUFxQyxLQUFyQyxFQUE0Q0MsT0FBNUMsQ0FBb0QsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ0MsUUFBSCxHQUFjLElBQWxCO0FBQUEsS0FBdEQ7QUFDRCxHQUhELENBcEVVLENBeUVWOzs7QUFDQSxNQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQVN2QixJQUFULEVBQWU7QUFDeEMsUUFBSUEsSUFBSSxDQUFDQyxPQUFULEVBQWtCO0FBQ2hCLFVBQUlELElBQUksQ0FBQ3dCLElBQVQsRUFBZTtBQUNiNUIsUUFBQUEsVUFBVSxHQUFHLEtBQWI7QUFDQVYsUUFBQUEsd0JBQXdCLENBQUNnQixTQUF6QixHQUFxQyxZQUFyQyxDQUZhLENBR2I7O0FBQ0EsWUFBSVAsZUFBSixFQUFxQjtBQUNuQlMsVUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZnFCLFlBQUFBLGdCQUFnQjtBQUNqQixXQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsU0FKRCxNQUlPO0FBQ0xSLFVBQUFBLGlCQUFpQjtBQUNsQjtBQUNGLE9BWEQsTUFXTztBQUNMckIsUUFBQUEsVUFBVSxHQUFHLElBQWI7QUFDQVYsUUFBQUEsd0JBQXdCLENBQUNnQixTQUF6QixHQUFxQyxNQUFyQztBQUNBaEIsUUFBQUEsd0JBQXdCLENBQUN3QyxZQUF6QixDQUFzQyxpQkFBdEMsRUFBeUQsT0FBekQ7QUFDQXhDLFFBQUFBLHdCQUF3QixDQUFDbUMsUUFBekIsR0FBb0MsS0FBcEM7QUFDQXRDLFFBQUFBLG1CQUFtQixDQUFDTCxhQUFwQixDQUFrQyxTQUFsQyxFQUE2QzZCLEtBQTdDLENBQW1EQyxPQUFuRCxHQUE2RCxNQUE3RDtBQUNBUyxRQUFBQSxpQkFBaUI7QUFDbEI7O0FBQ0QzQixNQUFBQSw2QkFBNkIsQ0FBQ1ksU0FBOUIsR0FBMENGLElBQUksQ0FBQzJCLFNBQS9DO0FBQ0FqQyxNQUFBQSwrQkFBK0IsQ0FBQ1EsU0FBaEMsdUJBQXlERixJQUFJLENBQUM0QixPQUE5RCwwQkFBcUY1QixJQUFJLENBQUM2QixPQUExRiwwQkFBaUg3QixJQUFJLENBQUM4QixPQUF0SDtBQUNBMUIsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZlgsUUFBQUEsOEJBQThCLENBQUNzQyxLQUEvQixDQUFxQ3RDLDhCQUE4QixDQUFDdUMsU0FBL0IsQ0FBeUMsSUFBekMsQ0FBckM7QUFDQXZDLFFBQUFBLDhCQUE4QixDQUFDYyxLQUEvQixDQUFxQ0MsT0FBckMsR0FBK0MsTUFBL0M7QUFDRCxPQUhTLEVBR1AsRUFITyxDQUFWO0FBSUFWLE1BQUFBLFFBQVEsR0FBR0UsSUFBSSxDQUFDaUMsSUFBaEI7QUFDRCxLQTNCRCxNQTJCTztBQUNMakQsTUFBQUEsd0JBQXdCLENBQUNrRCxJQUF6QjtBQUNBekIsTUFBQUEsaUJBQWlCLENBQUNULElBQUQsQ0FBakI7QUFDRDtBQUNGLEdBaENELENBMUVVLENBNEdWOzs7QUFDQSxNQUFNbUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFTQyxNQUFULEVBQWlCcEMsSUFBakIsRUFBdUI7QUFDbEQsUUFBSUEsSUFBSSxDQUFDQyxPQUFULEVBQWtCO0FBQ2hCLFVBQUlELElBQUksQ0FBQ3FDLFVBQVQsRUFBcUI7QUFDbkJ6QyxRQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNBVixRQUFBQSx3QkFBd0IsQ0FBQ2dCLFNBQXpCLEdBQXFDLFlBQXJDLENBRm1CLENBR25COztBQUNBRSxRQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNma0MsVUFBQUEsa0JBQWtCLENBQUN0QyxJQUFJLENBQUNxQyxVQUFOLENBQWxCO0FBQ0QsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELE9BUEQsTUFPTztBQUNMekMsUUFBQUEsVUFBVSxHQUFHLElBQWI7QUFDQVYsUUFBQUEsd0JBQXdCLENBQUNnQixTQUF6QixHQUFxQyxNQUFyQztBQUNBaEIsUUFBQUEsd0JBQXdCLENBQUN3QyxZQUF6QixDQUFzQyxpQkFBdEMsRUFBeUQsT0FBekQ7QUFDQXhDLFFBQUFBLHdCQUF3QixDQUFDbUMsUUFBekIsR0FBb0MsS0FBcEM7QUFDQXRDLFFBQUFBLG1CQUFtQixDQUFDTCxhQUFwQixDQUFrQyxTQUFsQyxFQUE2QzZCLEtBQTdDLENBQW1EQyxPQUFuRCxHQUE2RCxNQUE3RDtBQUNBUyxRQUFBQSxpQkFBaUI7QUFDbEI7O0FBQ0QsVUFBSXNCLElBQUksR0FBRyxTQUFYOztBQUNBLFVBQUlILE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQzFCN0MsUUFBQUEsc0NBQXNDLENBQUNXLFNBQXZDLEdBQW1ERixJQUFJLENBQUMyQixTQUF4RDtBQUNELE9BRkQsTUFFTztBQUNMWSxRQUFBQSxJQUFJLEdBQUcsVUFBUDtBQUNBL0MsUUFBQUEsc0NBQXNDLENBQUNVLFNBQXZDLEdBQW1ERixJQUFJLENBQUMyQixTQUF4RDtBQUNEOztBQUNEakMsTUFBQUEsK0JBQStCLENBQUNRLFNBQWhDLG9DQUFxRXFDLElBQXJFLCtCQUE2RnZDLElBQUksQ0FBQzRCLE9BQWxHLDBCQUF5SDVCLElBQUksQ0FBQzZCLE9BQTlILDBCQUFxSjdCLElBQUksQ0FBQzhCLE9BQTFKO0FBQ0ExQixNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmWCxRQUFBQSw4QkFBOEIsQ0FBQ3NDLEtBQS9CLENBQXFDdEMsOEJBQThCLENBQUN1QyxTQUEvQixDQUF5QyxJQUF6QyxDQUFyQztBQUNBdkMsUUFBQUEsOEJBQThCLENBQUNjLEtBQS9CLENBQXFDQyxPQUFyQyxHQUErQyxNQUEvQztBQUNELE9BSFMsRUFHUCxFQUhPLENBQVY7QUFJQVYsTUFBQUEsUUFBUSxHQUFHRSxJQUFJLENBQUNpQyxJQUFoQjtBQUNELEtBN0JELE1BNkJPO0FBQ0xqRCxNQUFBQSx3QkFBd0IsQ0FBQ2tELElBQXpCO0FBQ0F6QixNQUFBQSxpQkFBaUIsQ0FBQ1QsSUFBRCxDQUFqQjtBQUNEO0FBQ0YsR0FsQ0QsQ0E3R1UsQ0FpSlY7OztBQUNBLE1BQU13QyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQVN4QyxJQUFULEVBQWU7QUFDMUMsUUFBSUEsSUFBSSxDQUFDQyxPQUFULEVBQWtCO0FBQ2hCd0MsTUFBQUEsbUJBQW1CLENBQUN6QyxJQUFELENBQW5CO0FBQ0QsS0FGRCxNQUVPO0FBQ0xTLE1BQUFBLGlCQUFpQixDQUFDVCxJQUFELENBQWpCO0FBQ0Q7QUFDRixHQU5ELENBbEpVLENBMEpWOzs7QUFDQSxNQUFNeUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQ2xDLFFBQUksQ0FBQzdCLFVBQUwsRUFBaUI7QUFDZkYsTUFBQUEsK0JBQStCLENBQUNRLFNBQWhDLEdBQTRDLGtDQUE1QztBQUNBVCxNQUFBQSw4QkFBOEIsQ0FBQ2MsS0FBL0IsQ0FBcUNDLE9BQXJDLEdBQStDLE9BQS9DO0FBQ0FjLE1BQUFBLGtCQUFrQjtBQUNsQmxCLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZuQyxRQUFBQSxpREFBQSxDQUFXNEIsU0FBWCxFQUNDZ0IsSUFERCxDQUNNLFVBQUFDLFFBQVE7QUFBQSxpQkFBSUEsUUFBUSxDQUFDZCxJQUFiO0FBQUEsU0FEZCxFQUVDYSxJQUZELENBRU0sVUFBQWIsSUFBSSxFQUFJO0FBQ1pJLFVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZtQixZQUFBQSxrQkFBa0IsQ0FBQ3ZCLElBQUQsQ0FBbEI7QUFDRCxXQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0QsU0FORCxXQU9PLFVBQUFlLEtBQUssRUFBSTtBQUNkQyxVQUFBQSxjQUFjLENBQUNELEtBQUQsQ0FBZDtBQUNELFNBVEQ7QUFVRCxPQVhTLEVBV1AsRUFYTyxDQUFWO0FBWUQ7QUFDRixHQWxCRCxDQTNKVSxDQStLVjs7O0FBQ0EsTUFBTXVCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBU0YsTUFBVCxFQUFpQjtBQUMxQyxRQUFJLENBQUN4QyxVQUFMLEVBQWlCO0FBQ2ZGLE1BQUFBLCtCQUErQixDQUFDUSxTQUFoQyxHQUE0QyxrQ0FBNUM7QUFDQVQsTUFBQUEsOEJBQThCLENBQUNjLEtBQS9CLENBQXFDQyxPQUFyQyxHQUErQyxPQUEvQztBQUNBYyxNQUFBQSxrQkFBa0I7QUFDbEJsQixNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmbkMsUUFBQUEsaURBQUEsQ0FBVzRCLFNBQVgsRUFBc0I7QUFDcEIsb0JBQVV1QztBQURVLFNBQXRCLEVBR0N2QixJQUhELENBR00sVUFBQUMsUUFBUTtBQUFBLGlCQUFJQSxRQUFRLENBQUNkLElBQWI7QUFBQSxTQUhkLEVBSUNhLElBSkQsQ0FJTSxVQUFBYixJQUFJLEVBQUk7QUFDWkksVUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZitCLFlBQUFBLG9CQUFvQixDQUFDQyxNQUFELEVBQVNwQyxJQUFULENBQXBCO0FBQ0QsV0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdELFNBUkQsV0FTTyxVQUFBZSxLQUFLLEVBQUk7QUFDZEMsVUFBQUEsY0FBYyxDQUFDRCxLQUFELENBQWQ7QUFDRCxTQVhEO0FBWUQsT0FiUyxFQWFQLEVBYk8sQ0FBVjtBQWNEO0FBQ0YsR0FwQkQsQ0FoTFUsQ0FzTVY7OztBQUNBLE1BQU0yQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTQyxHQUFULEVBQWNDLE9BQWQsRUFBdUI7QUFDMUN4QyxJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmbkMsTUFBQUEsaURBQUEsQ0FBVzBFLEdBQUcsQ0FBQ0UsS0FBZixFQUNDaEMsSUFERCxDQUNNLFVBQUFDLFFBQVE7QUFBQSxlQUFJQSxRQUFRLENBQUNkLElBQWI7QUFBQSxPQURkLEVBRUNhLElBRkQsQ0FFTSxVQUFBYixJQUFJLEVBQUk7QUFDWkksUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZm9DLFVBQUFBLG9CQUFvQixDQUFDeEMsSUFBRCxDQUFwQjs7QUFDQSxjQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0I7QUFDaEJ6QixZQUFBQSxRQUFRLENBQUNFLGFBQVQsZ0JBQStCaUUsR0FBRyxDQUFDRyxZQUFKLENBQWlCLGFBQWpCLENBQS9CLEdBQWtFQyxNQUFsRTtBQUNELFdBRkQsTUFFTztBQUNMSCxZQUFBQSxPQUFPLENBQUNyQyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQW1DLFlBQUFBLEdBQUcsQ0FBQ3BDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixPQUFwQjtBQUNEO0FBQ0YsU0FSUyxFQVFQLEVBUk8sQ0FBVjtBQVNELE9BWkQsV0FhTyxVQUFBTyxLQUFLLEVBQUk7QUFDZEMsUUFBQUEsY0FBYyxDQUFDRCxLQUFELENBQWQ7QUFDRCxPQWZEO0FBZ0JELEtBakJTLEVBaUJQLEVBakJPLENBQVY7QUFrQkQsR0FuQkQsQ0F2TVUsQ0E0TlY7OztBQUNBLE1BQU1pQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFXO0FBQzlCLFFBQUlDLEtBQUssR0FBRyxJQUFaO0FBQUEsUUFDSUwsT0FBTyxHQUFHSyxLQUFLLENBQUNDLGFBQU4sQ0FBb0J4RSxhQUFwQixDQUFrQyxrQkFBbEMsQ0FEZDtBQUVBdUUsSUFBQUEsS0FBSyxDQUFDMUMsS0FBTixDQUFZQyxPQUFaLEdBQXNCLE1BQXRCO0FBQ0FvQyxJQUFBQSxPQUFPLENBQUNyQyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7O0FBQ0EsUUFBSXlDLEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsUUFBaEIsQ0FBeUIsYUFBekIsS0FDQUgsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxRQUFoQixDQUF5QixhQUF6QixDQURKLEVBRUU7QUFDQXZFLE1BQUFBLElBQUksQ0FBQ3dFLElBQUwsQ0FBVTtBQUNSQyxRQUFBQSxLQUFLLEVBQUUsZ0JBREM7QUFFUkMsUUFBQUEsSUFBSSxFQUFFTixLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCLGFBQXpCLElBQTBDLGdDQUExQyxHQUE2RSwyQkFGM0U7QUFHUmIsUUFBQUEsSUFBSSxFQUFFLFNBSEU7QUFJUmlCLFFBQUFBLGdCQUFnQixFQUFFLElBSlY7QUFLUkMsUUFBQUEsa0JBQWtCLEVBQUUsU0FMWjtBQU1SQyxRQUFBQSxpQkFBaUIsRUFBRSxTQU5YO0FBT1JDLFFBQUFBLGlCQUFpQixFQUFFO0FBUFgsT0FBVixFQVFHOUMsSUFSSCxDQVFRLFVBQUMrQyxNQUFELEVBQVk7QUFDbEIsWUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3RCbkIsVUFBQUEsWUFBWSxDQUFDTyxLQUFELEVBQVFMLE9BQVIsQ0FBWjtBQUNELFNBRkQsTUFFTztBQUNMQSxVQUFBQSxPQUFPLENBQUNyQyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQXlDLFVBQUFBLEtBQUssQ0FBQzFDLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixPQUF0QjtBQUNEO0FBQ0YsT0FmRDtBQWdCRCxLQW5CRCxNQW1CTztBQUNMa0MsTUFBQUEsWUFBWSxDQUFDTyxLQUFELEVBQVFMLE9BQVIsQ0FBWjtBQUNEO0FBQ0YsR0EzQkQsQ0E3TlUsQ0EwUFY7OztBQUNBLE1BQUk3RCxtQkFBSixFQUF5QjtBQUN2QkMsSUFBQUEsd0JBQXdCLEdBQUcsSUFBSUosNENBQUosQ0FBVUcsbUJBQVYsQ0FBM0I7QUFDQUUsSUFBQUEseUJBQXlCLEdBQUdGLG1CQUFtQixDQUFDTCxhQUFwQixDQUFrQyxlQUFsQyxDQUE1QjtBQUNBUyxJQUFBQSwyQkFBMkIsR0FBR0osbUJBQW1CLENBQUNMLGFBQXBCLENBQWtDLHVCQUFsQyxDQUE5QjtBQUNBVSxJQUFBQSwyQkFBMkIsR0FBR0wsbUJBQW1CLENBQUNMLGFBQXBCLENBQWtDLDJCQUFsQyxDQUE5QjtBQUNBVyxJQUFBQSxnQ0FBZ0MsR0FBR04sbUJBQW1CLENBQUNMLGFBQXBCLENBQWtDLHlCQUFsQyxDQUFuQyxDQUx1QixDQU92Qjs7QUFDQUssSUFBQUEsbUJBQW1CLENBQUMrRSxnQkFBcEIsQ0FBcUMsZ0JBQXJDLEVBQXVELFlBQVc7QUFDaEVsRSxNQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNBTixNQUFBQSw2QkFBNkIsR0FBR1AsbUJBQW1CLENBQUNMLGFBQXBCLENBQWtDLGlCQUFsQyxDQUFoQztBQUNBYSxNQUFBQSxzQ0FBc0MsR0FBR1IsbUJBQW1CLENBQUNMLGFBQXBCLENBQWtDLDJCQUFsQyxDQUF6QztBQUNBYyxNQUFBQSxzQ0FBc0MsR0FBR1QsbUJBQW1CLENBQUNMLGFBQXBCLENBQWtDLDJCQUFsQyxDQUF6QztBQUNBZSxNQUFBQSw4QkFBOEIsR0FBR1YsbUJBQW1CLENBQUNMLGFBQXBCLENBQWtDLG1CQUFsQyxDQUFqQztBQUNBZ0IsTUFBQUEsK0JBQStCLEdBQUdELDhCQUE4QixDQUFDZixhQUEvQixDQUE2QywyQkFBN0MsQ0FBbEM7QUFDQUYsTUFBQUEsUUFBUSxDQUFDRSxhQUFULENBQXVCLGNBQXZCLEVBQXVDNkIsS0FBdkMsQ0FBNkNDLE9BQTdDLEdBQXVELE1BQXZEO0FBQ0QsS0FSRCxFQVJ1QixDQWtCdkI7O0FBQ0F6QixJQUFBQSxtQkFBbUIsQ0FBQytFLGdCQUFwQixDQUFxQyxlQUFyQyxFQUFzRCxZQUFXO0FBQy9ELFVBQUloRSxRQUFKLEVBQWM7QUFDWjNCLFFBQUFBLE1BQU0sQ0FBQzRGLFFBQVAsQ0FBZ0JuRCxJQUFoQixHQUF1QmQsUUFBdkI7QUFDRDtBQUNGLEtBSkQsRUFuQnVCLENBeUJ2Qjs7QUFDQWYsSUFBQUEsbUJBQW1CLENBQUMrRSxnQkFBcEIsQ0FBcUMsaUJBQXJDLEVBQXdELFlBQVc7QUFDakUsVUFBSSxDQUFDaEUsUUFBTCxFQUFlO0FBQ2J0QixRQUFBQSxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUM2QixLQUF2QyxDQUE2Q0MsT0FBN0MsR0FBdUQsTUFBdkQ7QUFDQWhDLFFBQUFBLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixXQUF2QixFQUFvQzZCLEtBQXBDLENBQTBDQyxPQUExQyxHQUFvRCxPQUFwRDs7QUFDQSxZQUFJbkIsZ0NBQUosRUFBc0M7QUFDcENBLFVBQUFBLGdDQUFnQyxDQUFDa0IsS0FBakMsQ0FBdUNDLE9BQXZDLEdBQWlELE9BQWpEO0FBQ0QsU0FGRCxNQUVPO0FBQ0xyQixVQUFBQSwyQkFBMkIsQ0FBQ29CLEtBQTVCLENBQWtDQyxPQUFsQyxHQUE0QyxPQUE1QztBQUNBcEIsVUFBQUEsMkJBQTJCLENBQUNtQixLQUE1QixDQUFrQ0MsT0FBbEMsR0FBNEMsT0FBNUM7QUFDRDs7QUFDRFMsUUFBQUEsaUJBQWlCO0FBQ2xCO0FBQ0YsS0FaRCxFQTFCdUIsQ0F3Q3ZCOztBQUNBLFFBQUk5QiwyQkFBSixFQUFpQztBQUMvQkEsTUFBQUEsMkJBQTJCLENBQUMyRSxnQkFBNUIsQ0FBNkMsT0FBN0MsRUFBc0QsVUFBQ0UsQ0FBRCxFQUFPO0FBQzNEOUUsUUFBQUEsd0JBQXdCLEdBQUdDLDJCQUEzQjtBQUNBQyxRQUFBQSwyQkFBMkIsQ0FBQ21CLEtBQTVCLENBQWtDQyxPQUFsQyxHQUE0QyxNQUE1QztBQUNBWCxRQUFBQSxTQUFTLEdBQUdtRSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JwQixLQUE1QjtBQUNBcEIsUUFBQUEsZ0JBQWdCO0FBQ2pCLE9BTEQ7QUFNRCxLQWhEc0IsQ0FrRHZCOzs7QUFDQSxRQUFJckMsMkJBQUosRUFBaUM7QUFDL0JBLE1BQUFBLDJCQUEyQixDQUFDMEUsZ0JBQTVCLENBQTZDLE9BQTdDLEVBQXNELFVBQUNFLENBQUQsRUFBTztBQUMzRDlFLFFBQUFBLHdCQUF3QixHQUFHRSwyQkFBM0I7QUFDQUQsUUFBQUEsMkJBQTJCLENBQUNvQixLQUE1QixDQUFrQ0MsT0FBbEMsR0FBNEMsTUFBNUM7QUFDQVgsUUFBQUEsU0FBUyxHQUFHbUUsQ0FBQyxDQUFDQyxhQUFGLENBQWdCcEIsS0FBNUI7QUFDQWxELFFBQUFBLGVBQWUsR0FBRyxJQUFsQjtBQUNBOEIsUUFBQUEsZ0JBQWdCO0FBQ2pCLE9BTkQ7QUFPRCxLQTNEc0IsQ0E2RHZCOzs7QUFDQSxRQUFJcEMsZ0NBQUosRUFBc0M7QUFDcENBLE1BQUFBLGdDQUFnQyxDQUFDeUUsZ0JBQWpDLENBQWtELE9BQWxELEVBQTJELFVBQUNFLENBQUQsRUFBTztBQUNoRTlFLFFBQUFBLHdCQUF3QixHQUFHRyxnQ0FBM0I7QUFDQVEsUUFBQUEsU0FBUyxHQUFHbUUsQ0FBQyxDQUFDQyxhQUFGLENBQWdCcEIsS0FBNUI7QUFDQVAsUUFBQUEsa0JBQWtCLENBQUMsV0FBRCxDQUFsQjtBQUNELE9BSkQ7QUFLRDtBQUNGLEdBaFVTLENBa1VWOzs7QUFDQSxNQUFNNEIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQUE7O0FBQy9CLFFBQUl0QixPQUFPLEdBQUcsS0FBS00sYUFBTCxDQUFtQnhFLGFBQW5CLENBQWlDLGdCQUFqQyxDQUFkO0FBQUEsUUFDSXlGLE9BQU8sR0FBRzNGLFFBQVEsQ0FBQ0UsYUFBVCw0QkFBMkMsS0FBS29FLFlBQUwsQ0FBa0IsYUFBbEIsQ0FBM0MsRUFEZDtBQUVBLFNBQUt2QyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDQW9DLElBQUFBLE9BQU8sQ0FBQ3JDLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNBSixJQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmbkMsTUFBQUEsaURBQUEsQ0FBVyxNQUFJLENBQUM0RSxLQUFoQixFQUF1QjtBQUNyQixzQkFBYyxNQUFJLENBQUNqQjtBQURFLE9BQXZCLEVBR0NmLElBSEQsQ0FHTSxVQUFBQyxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDZCxJQUFiO0FBQUEsT0FIZCxFQUlDYSxJQUpELENBSU0sVUFBQWIsSUFBSSxFQUFJO0FBQ1pJLFFBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZxQyxVQUFBQSxtQkFBbUIsQ0FBQ3pDLElBQUQsQ0FBbkI7QUFDQTRDLFVBQUFBLE9BQU8sQ0FBQ3JDLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNBLGdCQUFJLENBQUNELEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixPQUFyQjs7QUFDQSxjQUFJLE1BQUksQ0FBQ29CLE9BQVQsRUFBa0I7QUFDaEJ1QyxZQUFBQSxPQUFPLENBQUNoQixTQUFSLENBQWtCaUIsT0FBbEIsQ0FBMEIsYUFBMUIsRUFBeUMsVUFBekM7QUFDQUQsWUFBQUEsT0FBTyxDQUFDaEIsU0FBUixDQUFrQmtCLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0QsV0FIRCxNQUdPO0FBQ0xGLFlBQUFBLE9BQU8sQ0FBQ2hCLFNBQVIsQ0FBa0JpQixPQUFsQixDQUEwQixVQUExQixFQUFzQyxhQUF0QztBQUNBRCxZQUFBQSxPQUFPLENBQUNoQixTQUFSLENBQWtCSixNQUFsQixDQUF5QixhQUF6QjtBQUNEO0FBQ0YsU0FYUyxFQVdQLEVBWE8sQ0FBVjtBQVlELE9BakJELFdBa0JPLFVBQUFoQyxLQUFLLEVBQUk7QUFDZEMsUUFBQUEsY0FBYyxDQUFDRCxLQUFELENBQWQ7QUFDRCxPQXBCRDtBQXFCRCxLQXRCUyxFQXNCUCxFQXRCTyxDQUFWO0FBdUJELEdBNUJELENBblVVLENBaVdWOzs7QUFDQSxNQUFJdkMsUUFBUSxDQUFDRSxhQUFULENBQXVCLHNCQUF2QixDQUFKLEVBQW9EO0FBQ2xERixJQUFBQSxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsc0JBQXZCLEVBQStDb0YsZ0JBQS9DLENBQWdFLE9BQWhFLEVBQXlFcEQsb0JBQXpFO0FBQ0QsR0FwV1MsQ0FzV1Y7OztBQUNBLE1BQUlsQyxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsa0JBQXZCLENBQUosRUFBZ0Q7QUFDOUNGLElBQUFBLFFBQVEsQ0FBQzBDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsT0FBOUMsQ0FBc0QsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQzBDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCZCxZQUE3QixDQUFKO0FBQUEsS0FBeEQ7QUFDRCxHQXpXUyxDQTJXVjs7O0FBQ0EsTUFBSXhFLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBSixFQUFxRDtBQUNuREYsSUFBQUEsUUFBUSxDQUFDMEMsZ0JBQVQsQ0FBMEIsdUJBQTFCLEVBQW1EQyxPQUFuRCxDQUEyRCxVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDMEMsZ0JBQUgsQ0FBb0IsUUFBcEIsRUFBOEJJLGFBQTlCLENBQUo7QUFBQSxLQUE3RDtBQUNEO0FBQ0YsQ0EvV0Q7Ozs7Ozs7Ozs7QUNMQSxJQUFNckYsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHVFQUFELENBQXBCLEVBRUE7OztBQUNBWCxNQUFNLENBQUNzRSxtQkFBUCxHQUE2QixVQUFTM0IsUUFBVCxFQUFtQjtBQUM5Q2pDLEVBQUFBLElBQUksQ0FBQ3dFLElBQUwsQ0FBVTtBQUNSZCxJQUFBQSxJQUFJLEVBQUUsU0FERTtBQUVSZSxJQUFBQSxLQUFLLEVBQUV4QyxRQUFRLENBQUN3RCxNQUFULENBQWdCaEIsS0FGZjtBQUdSQyxJQUFBQSxJQUFJLEVBQUV6QyxRQUFRLENBQUN3RCxNQUFULENBQWdCQyxPQUhkO0FBSVJDLElBQUFBLGlCQUFpQixFQUFFLEtBSlg7QUFLUkMsSUFBQUEsS0FBSyxFQUFFO0FBTEMsR0FBVjtBQU9ELENBUkQsRUFVQTs7O0FBQ0F0RyxNQUFNLENBQUM2QyxjQUFQLEdBQXdCLFVBQVNGLFFBQVQsRUFBbUI7QUFDekM0RCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCN0QsUUFBdEI7QUFDRCxDQUZELEVBSUE7OztBQUNBM0MsTUFBTSxDQUFDc0MsaUJBQVAsR0FBMkIsVUFBU0ssUUFBVCxFQUFtQjtBQUM1QyxNQUFJQSxRQUFRLENBQUNDLEtBQWIsRUFBb0I7QUFDbEJsQyxJQUFBQSxJQUFJLENBQUN3RSxJQUFMLENBQVU7QUFDUmQsTUFBQUEsSUFBSSxFQUFFLE9BREU7QUFFUmUsTUFBQUEsS0FBSyxFQUFFeEMsUUFBUSxDQUFDQyxLQUFULENBQWV1QyxLQUZkO0FBR1JDLE1BQUFBLElBQUksRUFBRXpDLFFBQVEsQ0FBQ0MsS0FBVCxDQUFld0QsT0FIYjtBQUlSSyxNQUFBQSxNQUFNLEVBQUUsYUFBYTlELFFBQVEsQ0FBQ0MsS0FBVCxDQUFlOEQsTUFBNUIsR0FBcUM7QUFKckMsS0FBVjtBQU1ELEdBUEQsTUFPTyxJQUFJL0QsUUFBUSxDQUFDUixPQUFiLEVBQXNCO0FBQzNCekIsSUFBQUEsSUFBSSxDQUFDd0UsSUFBTCxDQUFVO0FBQ1JkLE1BQUFBLElBQUksRUFBRSxTQURFO0FBRVJlLE1BQUFBLEtBQUssRUFBRXhDLFFBQVEsQ0FBQ1IsT0FBVCxDQUFpQmdELEtBRmhCO0FBR1JDLE1BQUFBLElBQUksRUFBRXpDLFFBQVEsQ0FBQ1IsT0FBVCxDQUFpQmlFLE9BSGY7QUFJUkssTUFBQUEsTUFBTSxFQUFFLGFBQWE5RCxRQUFRLENBQUNSLE9BQVQsQ0FBaUJ1RSxNQUE5QixHQUF1QztBQUp2QyxLQUFWO0FBTUQsR0FQTSxNQU9BLElBQUkvRCxRQUFRLENBQUNnRSxJQUFiLEVBQW1CO0FBQ3hCakcsSUFBQUEsSUFBSSxDQUFDd0UsSUFBTCxDQUFVO0FBQ1JkLE1BQUFBLElBQUksRUFBRSxNQURFO0FBRVJlLE1BQUFBLEtBQUssRUFBRXhDLFFBQVEsQ0FBQ2dFLElBQVQsQ0FBY3hCLEtBRmI7QUFHUkMsTUFBQUEsSUFBSSxFQUFFekMsUUFBUSxDQUFDZ0UsSUFBVCxDQUFjUCxPQUhaO0FBSVJLLE1BQUFBLE1BQU0sRUFBRSxhQUFhOUQsUUFBUSxDQUFDZ0UsSUFBVCxDQUFjRCxNQUEzQixHQUFvQztBQUpwQyxLQUFWO0FBTUQsR0FQTSxNQU9BO0FBQ0xILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0I3RCxRQUF0QjtBQUNEO0FBQ0YsQ0F6QkQ7O0FBMkJBLENBQUMsWUFBVztBQUNWLE1BQU1pRSxpQkFBaUIsR0FBR3ZHLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1QixzQkFBdkIsQ0FBMUI7QUFDQSxNQUFNc0csV0FBVyxHQUFHeEcsUUFBUSxDQUFDRSxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsTUFBTXVHLGdCQUFnQixHQUFHekcsUUFBUSxDQUFDRSxhQUFULENBQXVCLGNBQXZCLENBQXpCO0FBQ0EsTUFBTXdHLG9CQUFvQixHQUFHMUcsUUFBUSxDQUFDRSxhQUFULENBQXVCLGdCQUF2QixDQUE3QjtBQUNBLE1BQU15RyxPQUFPLEdBQUczRyxRQUFRLENBQUNFLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFFQXVHLEVBQUFBLGdCQUFnQixDQUFDbkIsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDL0NpQixJQUFBQSxpQkFBaUIsQ0FBQzVCLFNBQWxCLENBQTRCaUMsTUFBNUIsQ0FBbUMsUUFBbkM7QUFDQUQsSUFBQUEsT0FBTyxDQUFDaEMsU0FBUixDQUFrQmtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0FXLElBQUFBLFdBQVcsQ0FBQzdCLFNBQVosQ0FBc0JpQyxNQUF0QixDQUE2QixRQUE3Qjs7QUFDQSxRQUFJNUcsUUFBUSxDQUFDNkcsSUFBVCxDQUFjQyxXQUFkLEdBQTRCLElBQWhDLEVBQXNDO0FBQ3BDLFVBQUlKLG9CQUFvQixDQUFDL0IsU0FBckIsQ0FBK0JDLFFBQS9CLENBQXdDLGlCQUF4QyxDQUFKLEVBQWdFO0FBQzlEOEIsUUFBQUEsb0JBQW9CLENBQUMvQixTQUFyQixDQUErQkosTUFBL0IsQ0FBc0MsaUJBQXRDO0FBQ0FtQyxRQUFBQSxvQkFBb0IsQ0FBQy9CLFNBQXJCLENBQStCa0IsR0FBL0IsQ0FBbUMsU0FBbkM7QUFDRCxPQUhELE1BR087QUFDTGEsUUFBQUEsb0JBQW9CLENBQUMvQixTQUFyQixDQUErQkosTUFBL0IsQ0FBc0MsU0FBdEM7QUFDQW1DLFFBQUFBLG9CQUFvQixDQUFDL0IsU0FBckIsQ0FBK0JrQixHQUEvQixDQUFtQyxpQkFBbkM7QUFDRDtBQUNGLEtBUkQsTUFRTztBQUNMLFVBQUlhLG9CQUFvQixDQUFDL0IsU0FBckIsQ0FBK0JDLFFBQS9CLENBQXdDLGlCQUF4QyxDQUFKLEVBQWdFO0FBQzlEOEIsUUFBQUEsb0JBQW9CLENBQUMvQixTQUFyQixDQUErQkosTUFBL0IsQ0FBc0MsaUJBQXRDO0FBQ0FtQyxRQUFBQSxvQkFBb0IsQ0FBQy9CLFNBQXJCLENBQStCa0IsR0FBL0IsQ0FBbUMsU0FBbkM7QUFDRDtBQUNGO0FBQ0YsR0FsQkQ7QUFvQkFjLEVBQUFBLE9BQU8sQ0FBQ3JCLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdENpQixJQUFBQSxpQkFBaUIsQ0FBQzVCLFNBQWxCLENBQTRCSixNQUE1QixDQUFtQyxRQUFuQztBQUNBb0MsSUFBQUEsT0FBTyxDQUFDaEMsU0FBUixDQUFrQkosTUFBbEIsQ0FBeUIsUUFBekI7QUFDQWlDLElBQUFBLFdBQVcsQ0FBQzdCLFNBQVosQ0FBc0JKLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0QsR0FKRDtBQUtELENBaENEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQzVDQTs7QUFDQSxJQUFNd0MscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFXO0FBQUE7O0FBQ3ZDLE1BQUkzQyxPQUFPLEdBQUcsS0FBS00sYUFBTCxDQUFtQnhFLGFBQW5CLENBQWlDLGdCQUFqQyxDQUFkO0FBQUEsTUFDSThHLE1BQU0sR0FBRyxLQUFLMUMsWUFBTCxDQUFrQixhQUFsQixDQURiO0FBRUF0RSxFQUFBQSxRQUFRLENBQUMwQyxnQkFBVCxDQUEwQixxQkFBMUIsRUFBaURDLE9BQWpELENBQXlELFVBQUFDLEVBQUU7QUFBQSxXQUFJQSxFQUFFLENBQUNiLEtBQUgsQ0FBU0MsT0FBVCxHQUFtQixNQUF2QjtBQUFBLEdBQTNEO0FBQ0FoQyxFQUFBQSxRQUFRLENBQUMwQyxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNDLE9BQTdDLENBQXFELFVBQUFDLEVBQUU7QUFBQSxXQUFJQSxFQUFFLENBQUNiLEtBQUgsQ0FBU0MsT0FBVCxHQUFtQixNQUF2QjtBQUFBLEdBQXZEO0FBQ0FvQyxFQUFBQSxPQUFPLENBQUNyQyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFDQUosRUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZm5DLElBQUFBLGlEQUFBLENBQVcsS0FBSSxDQUFDNEUsS0FBaEIsRUFBdUI7QUFDckIsa0JBQVksS0FBSSxDQUFDakI7QUFESSxLQUF2QixFQUdDZixJQUhELENBR00sVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ2QsSUFBYjtBQUFBLEtBSGQsRUFJQ2EsSUFKRCxDQUlNLFVBQUFiLElBQUksRUFBSTtBQUNaeUMsTUFBQUEsbUJBQW1CLENBQUN6QyxJQUFELENBQW5CO0FBQ0E0QyxNQUFBQSxPQUFPLENBQUNyQyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDQWhDLE1BQUFBLFFBQVEsQ0FBQzBDLGdCQUFULENBQTBCLHFCQUExQixFQUFpREMsT0FBakQsQ0FBeUQsVUFBQUMsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQ2IsS0FBSCxDQUFTQyxPQUFULEdBQW1CLE9BQXZCO0FBQUEsT0FBM0Q7QUFDQWhDLE1BQUFBLFFBQVEsQ0FBQ0UsYUFBVCwyQkFBMEM4RyxNQUExQyxHQUFvRGpGLEtBQXBELENBQTBEQyxPQUExRCxHQUFvRSxPQUFwRTtBQUNELEtBVEQsV0FVTyxVQUFBTyxLQUFLLEVBQUk7QUFDZEMsTUFBQUEsY0FBYyxDQUFDRCxLQUFELENBQWQ7QUFDRCxLQVpEO0FBYUQsR0FkUyxFQWNQLEVBZE8sQ0FBVjtBQWVELENBckJELEVBdUJBOzs7QUFDQSxDQUFDLFlBQVc7QUFDVjtBQUNBLE1BQUl2QyxRQUFRLENBQUNFLGFBQVQsQ0FBdUIscUJBQXZCLENBQUosRUFBbUQ7QUFDakRGLElBQUFBLFFBQVEsQ0FBQzBDLGdCQUFULENBQTBCLHFCQUExQixFQUFpREMsT0FBakQsQ0FBeUQsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQzBDLGdCQUFILENBQW9CLFFBQXBCLEVBQThCeUIscUJBQTlCLENBQUo7QUFBQSxLQUEzRDtBQUNEO0FBQ0YsQ0FMRDs7Ozs7Ozs7Ozs7Ozs7OztDQ3pCQTs7QUFDTyxJQUFNRyxHQUFHLEdBQUdELDBFQUFnQixDQUFDM0cseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvZm9sbG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy90d2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhZG1pbi5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuLy8gQWpheFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcbi8vaW1wb3J0IHtNb2RhbCwgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXJ9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIEVTNiBNb2R1bGVzIG9yIFR5cGVTY3JpcHRcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuaW1wb3J0ICcuL2FkbWluL2pzL21haW4nO1xuaW1wb3J0ICcuL2FkbWluL2pzL3R3YXBpJztcbmltcG9ydCAnLi9hZG1pbi9qcy9mb2xsb3cnO1xuXG4vLyBPbmxvYWRcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Ly8gQXhpb3MgZGVmYXVsdHMgaGVhZGVyc1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0Jztcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtWFNSRi1UT0tFTiddID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ4LWNzcmYtdG9rZW5cIl0nKS5jb250ZW50O1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnO1xuY29uc3Qgc3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XG5cbi8vIE9ubG9hZFxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCAkdHdBcGlTZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXR3YXBpLXNldHRpbmdzJyk7XG5cbiAgLy8gVmFyaWFibGVzXG4gIHZhciB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbExvYWRlciA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lID0gbnVsbCxcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYyA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2luZyA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2VycyA9IG51bGwsXG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQgPSBudWxsLFxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9IG51bGwsXG4gICAgICB1cGRhdGVBbGxGb2xsb3cgPSBmYWxzZSxcbiAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZSxcbiAgICAgIHVwZGF0ZVVybCA9IG51bGwsXG4gICAgICByZWRpcmVjdCA9IG51bGw7XG5cbiAgLy8gU2hvdyBmb2xsb3cgdXBkYXRlIG1vZGFsXG4gIGNvbnN0IHNob3dUd0FwaVNldHRpbmdzTW9kYWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpLmlubmVySFRNTCA9IGRhdGEuaHRtbDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4uc2hvdygpO1xuICAgICAgICBpZiAoZGF0YS53YXJuaW5nKSB7XG4gICAgICAgICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljKSB7XG4gICAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IG1vZGFsIGh0bWwgY29udGVudFxuICBjb25zdCBnZXRUd0FwaVNldHRpbmdNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1tb2RhbC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QodGhpcy5ocmVmKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzaG93VHdBcGlTZXR0aW5nc01vZGFsKGRhdGEpO1xuICAgICAgICB9LCA1MCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSwgNTApO1xuICB9O1xuXG4gIC8vIEVuYWJsZSBib3V0dG9ucyBldmVudHNcbiAgY29uc3QgZW5hYmxlTW9kYWxFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldicpLmZvckVhY2goZWwgPT4gZWwuZGlzYWJsZWQgPSBmYWxzZSk7XG4gICAgaWYgKHVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLmlubmVySFRNTCA9ICdGaW5pc2gnO1xuICAgIH1cbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgLy8gRW5hYmxlIGJvdXR0b25zIGV2ZW50c1xuICBjb25zdCBkaXNhYmxlTW9kYWxFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmV2JykuZm9yRWFjaChlbCA9PiBlbC5kaXNhYmxlZCA9IHRydWUpO1xuICB9O1xuXG4gIC8vIEFmdGVyIHVwZGF0ZSBmb2xsb3dcbiAgY29uc3QgYWpheEZvbGxvd0NhbGxiYWNrID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIGlmIChkYXRhLm5leHQpIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uaW5uZXJIVE1MID0gJ0dvIHRvIG5leHQnO1xuICAgICAgICAvLyBHZXQgbmV4dFxuICAgICAgICBpZiAodXBkYXRlQWxsRm9sbG93KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsVXBkYXRlRm9sbG93KCk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlRG9uZSA9IHRydWU7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnRG9uZSc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWtvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIH1cbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50LmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBgQ2hlY2tlZCA6ICR7ZGF0YS5jaGVja2VkfSAvIENyZWF0ZWQgOiAke2RhdGEuY3JlYXRlZH0gLyBVcGRhdGVkIDogJHtkYXRhLnVwZGF0ZWR9YDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuYWZ0ZXIoJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgNTApO1xuICAgICAgcmVkaXJlY3QgPSBkYXRhLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR3QXBpU2V0dGluZ3NNb2RhbFBsdWdpbi5oaWRlKCk7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWZ0ZXIgdXBkYXRlXG4gIGNvbnN0IGFqYXhQbGF0b25pY0NhbGxiYWNrID0gZnVuY3Rpb24odXBkYXRlLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgaWYgKGRhdGEubmV4dFVwZGF0ZSkge1xuICAgICAgICB1cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hby5pbm5lckhUTUwgPSAnR28gdG8gbmV4dCc7XG4gICAgICAgIC8vIEdldCBuZXh0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNhbGxVcGRhdGVQbGF0b25pYyhkYXRhLm5leHRVcGRhdGUpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uaW5uZXJIVE1MID0gJ0RvbmUnO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28uc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignLmJ0bi1rbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVuYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICB9XG4gICAgICBsZXQgaWNvbiA9ICdmb3J3YXJkJztcbiAgICAgIGlmICh1cGRhdGUgPT09ICdmb2xsb3dpbmcnKSB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93aW5nLmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbiA9ICdiYWNrd2FyZCc7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93ZXJzLmlubmVySFRNTCA9IGRhdGEuY2FsbENvdW50O1xuICAgICAgfVxuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS0ke2ljb259XCI+PC9pPiBDaGVja2VkIDogJHtkYXRhLmNoZWNrZWR9IC8gQ3JlYXRlZCA6ICR7ZGF0YS5jcmVhdGVkfSAvIFVwZGF0ZWQgOiAke2RhdGEudXBkYXRlZH1gO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5hZnRlcigkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCA1MCk7XG4gICAgICByZWRpcmVjdCA9IGRhdGEucGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luLmhpZGUoKTtcbiAgICAgIGFqYXhSZXNwb25zZUFsZXJ0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZnRlciB1bmZvbGxvd1xuICBjb25zdCBhamF4VW5mb2xsb3dDYWxsYmFjayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICBhamF4UmVzcG9uc2VTdWNjZXNzKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhamF4UmVzcG9uc2VBbGVydChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IHVwZGF0ZSBmb2xsb3dpbmcvZm9sb3dlcnNcbiAgY29uc3QgY2FsbFVwZGF0ZUZvbGxvdyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdXBkYXRlRG9uZSkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZS5pbm5lckhUTUwgPSAnVXBkYXRpbmcuLi4gUGxlYXNlIGRvIG5vdCBjbG9zZS4nO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZGlzYWJsZU1vZGFsRXZlbnRzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCh1cGRhdGVVcmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWpheEZvbGxvd0NhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBhamF4Q2F0Y2hBbGVydChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfTtcblxuICAvLyBHZXQgdXBkYXRlIHBsYXRvbmljc1xuICBjb25zdCBjYWxsVXBkYXRlUGxhdG9uaWMgPSBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICBpZiAoIXVwZGF0ZURvbmUpIHtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydE1lc3NhZ2UuaW5uZXJIVE1MID0gJ1VwZGF0aW5nLi4uIFBsZWFzZSBkbyBub3QgY2xvc2UuJztcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRpc2FibGVNb2RhbEV2ZW50cygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QodXBkYXRlVXJsLCB7XG4gICAgICAgICAgJ3VwZGF0ZSc6IHVwZGF0ZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFqYXhQbGF0b25pY0NhbGxiYWNrKHVwZGF0ZSwgZGF0YSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVuZm9sbG93XG4gIGNvbnN0IGNhbGxVbmZvbGxvdyA9IGZ1bmN0aW9uKCRlbCwgJGxvYWRlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgkZWwudmFsdWUpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFqYXhVbmZvbGxvd0NhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyb3ctJHskZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpfWApLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAkZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSwgNTApO1xuICB9O1xuXG4gIC8vIFNhZmUgdW5mb2xsb3dcbiAgY29uc3Qgc2FmZVVuZm9sbG93ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0ICR0aGlzID0gdGhpcyxcbiAgICAgICAgJGxvYWRlciA9ICR0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnVuZm9sbG93LWxvYWRlcicpO1xuICAgICR0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpZiAoJHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy12ZXJpZmllZCcpXG4gICAgIHx8ICR0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaXMtZmF2b3JpdGUnKVxuICAgICkge1xuICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmUgPycsXG4gICAgICAgIHRleHQ6ICR0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaXMtZmF2b3JpdGUnKSA/ICdUaGlzIGlzIHlvdXIgZmF2b3JpdGUgYWNjb3VudC4nIDogJ1RoaXMgaXMgdmVyaWZpZWQgYWNjb3VudC4nLFxuICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyNmZmMxMDcnLFxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyM2Yzc1N2QnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgVW5mb2xsb3cgaXQgISdcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgY2FsbFVuZm9sbG93KCR0aGlzLCAkbG9hZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgJHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxVbmZvbGxvdygkdGhpcywgJGxvYWRlcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIE1vZGFsXG4gIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsKSB7XG4gICAgdHdBcGlTZXR0aW5nc01vZGFsUGx1Z2luID0gbmV3IE1vZGFsKCR0d0FwaVNldHRpbmdzTW9kYWwpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxMb2FkZXIgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1sb2FkZXInKTtcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29PbmUgPSAkdHdBcGlTZXR0aW5nc01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLWZvbGxvdycpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb0FsbCA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtZm9sbG93LWFsbCcpO1xuICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtYnRuLXVwZGF0ZS1wbGF0b25pYycpO1xuXG4gICAgLy8gT24gc2hvdyBtb2RhbFxuICAgICR0d0FwaVNldHRpbmdzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50ID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtY2FsbC1jb3VudHMnKTtcbiAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93aW5nID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcjanMtY2FsbC1jb3VudHMtZm9sbG93aW5nJyk7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudEZvbGxvd2VycyA9ICR0d0FwaVNldHRpbmdzTW9kYWwucXVlcnlTZWxlY3RvcignI2pzLWNhbGwtY291bnRzLWZvbGxvd2VycycpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0UmVzdWx0ID0gJHR3QXBpU2V0dGluZ3NNb2RhbC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtYm94LXJlc3VsdCcpO1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0TWVzc2FnZSA9ICR0d0FwaVNldHRpbmdzTW9kYWxBbGVydFJlc3VsdC5xdWVyeVNlbGVjdG9yKCcjYWxlcnQtYm94LXJlc3VsdC1tZXNzYWdlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWpheC1sb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgLy8gT24gY2xvc2UgbW9kYWxcbiAgICAkdHdBcGlTZXR0aW5nc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gT24gY2xvc2VkIG1vZGFsXG4gICAgJHR3QXBpU2V0dGluZ3NNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghcmVkaXJlY3QpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXgtbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFqYXgtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGlmICgkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYykge1xuICAgICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgZW5hYmxlTW9kYWxFdmVudHMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBmb2xsb3dpbmcvZm9sbG93ZXJzXG4gICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZSkge1xuICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvID0gJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lO1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdXBkYXRlVXJsID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjYWxsVXBkYXRlRm9sbG93KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgYWxsIGZvbGxvd2luZy9mb2xsb3dlcnNcbiAgICBpZiAoJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR28gPSAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29BbGw7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb09uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB1cGRhdGVVcmwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIHVwZGF0ZUFsbEZvbGxvdyA9IHRydWU7XG4gICAgICAgIGNhbGxVcGRhdGVGb2xsb3coKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBhbGwgcGxhdG9uaWNzXG4gICAgaWYgKCR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljKSB7XG4gICAgICAkdHdBcGlTZXR0aW5nc01vZGFsQnRuR29QbGF0b25pYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICR0d0FwaVNldHRpbmdzTW9kYWxCdG5HbyA9ICR0d0FwaVNldHRpbmdzTW9kYWxCdG5Hb1BsYXRvbmljO1xuICAgICAgICB1cGRhdGVVcmwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNhbGxVcGRhdGVQbGF0b25pYygnZm9sbG93aW5nJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBGYXZvcml0ZVxuICBjb25zdCBzZXRJc0Zhdm9yaXRlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0ICRsb2FkZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1sb2FkZXInKSxcbiAgICAgICAgJHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5qcy1idG4tdW5mb2xsb3ctJHt0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKX1gKTtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgJGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QodGhpcy52YWx1ZSwge1xuICAgICAgICAnaXNGYXZvcml0ZSc6IHRoaXMuY2hlY2tlZFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYWpheFJlc3BvbnNlU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKCdidG4td2FybmluZycsICdidG4taW5mbycpO1xuICAgICAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1mYXZvcml0ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC5yZXBsYWNlKCdidG4taW5mbycsICdidG4td2FybmluZycpO1xuICAgICAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1mYXZvcml0ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGFqYXhDYXRjaEFsZXJ0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sIDUwKTtcbiAgfTtcblxuICAvLyBHZXQgbW9kYWwgY29udGVudFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWJ0bi11cGRhdGUtbW9kYWwnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1idG4tdXBkYXRlLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRUd0FwaVNldHRpbmdNb2RhbCk7XG4gIH1cblxuICAvLyBVbmZvbGxvd1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ0bi11bmZvbGxvdycpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJ0bi11bmZvbGxvdycpLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYWZlVW5mb2xsb3cpKTtcbiAgfVxuXG4gIC8vIFN3aXRoIGlzIGZhdm9yaXRlXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dpdGNoLWlzZmF2b3JpdGUnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXNmYXZvcml0ZScpLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0SXNGYXZvcml0ZSkpO1xuICB9XG59KSgpO1xuIiwiY29uc3Qgc3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XHJcblxyXG4vLyBBamF4IHN1Y2Nlc3MgcmVzcG9uc2UgbWFuYWdlclxyXG53aW5kb3cuYWpheFJlc3BvbnNlU3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgc3dhbC5maXJlKHtcclxuICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgIHRpdGxlOiByZXNwb25zZS5kZXRhaWwudGl0bGUsXHJcbiAgICB0ZXh0OiByZXNwb25zZS5kZXRhaWwubWVzc2FnZSxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAxNTAwXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBBamF4IGNhdGNoIGVycm9ycyBtYW5hZ2VyXHJcbndpbmRvdy5hamF4Q2F0Y2hBbGVydCA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgY29uc29sZS5sb2coJ0Vycm9zOicsIHJlc3BvbnNlKTtcclxufVxyXG5cclxuLy8gQWpheCByZXNwb25zZSBtYW5hZ2VyXHJcbndpbmRvdy5hamF4UmVzcG9uc2VBbGVydCA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICBzd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICB0aXRsZTogcmVzcG9uc2UuZXJyb3IudGl0bGUsXHJcbiAgICAgIHRleHQ6IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLmVycm9yLnN0YXR1cyArICc8L3N0cm9uZz4nXHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKHJlc3BvbnNlLndhcm5pbmcpIHtcclxuICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgdGl0bGU6IHJlc3BvbnNlLndhcm5pbmcudGl0bGUsXHJcbiAgICAgIHRleHQ6IHJlc3BvbnNlLndhcm5pbmcubWVzc2FnZSxcclxuICAgICAgZm9vdGVyOiAnPHN0cm9uZz4nICsgcmVzcG9uc2Uud2FybmluZy5zdGF0dXMgKyAnPC9zdHJvbmc+J1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChyZXNwb25zZS5pbmZvKSB7XHJcbiAgICBzd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgIHRpdGxlOiByZXNwb25zZS5pbmZvLnRpdGxlLFxyXG4gICAgICB0ZXh0OiByZXNwb25zZS5pbmZvLm1lc3NhZ2UsXHJcbiAgICAgIGZvb3RlcjogJzxzdHJvbmc+JyArIHJlc3BvbnNlLmluZm8uc3RhdHVzICsgJzwvc3Ryb25nPidcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXJyb3M6JywgcmVzcG9uc2UpO1xyXG4gIH1cclxufTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBjb25zdCBzaWRlYmFyTmF2V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW5hdi13cmFwcGVyJyk7XHJcbiAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13cmFwcGVyJyk7XHJcbiAgY29uc3QgbWVudVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRvZ2dsZScpO1xyXG4gIGNvbnN0IG1lbnVUb2dnbGVCdXR0b25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlIGknKTtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbiAgbWVudVRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXJOYXZXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPiAxMjAwKSB7XHJcbiAgICAgIGlmIChtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWNoZXZyb24tbGVmdCcpKSB7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1sZWZ0Jyk7XHJcbiAgICAgICAgbWVudVRvZ2dsZUJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJhcnMnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lbnVUb2dnbGVCdXR0b25JY29uLmNsYXNzTGlzdC5jb250YWlucygnZmEtY2hldnJvbi1sZWZ0JykpIHtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWxlZnQnKTtcclxuICAgICAgICBtZW51VG9nZ2xlQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZGViYXJOYXZXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBBY3RpdmVcbmNvbnN0IHNldFR3QXBpU2V0dGluZ0FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGxvYWRlciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWxvYWRlcicpLFxuICAgICAgdGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXNhY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdHctYXV0aC1idG4nKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBheGlvcy5wb3N0KHRoaXMudmFsdWUsIHtcbiAgICAgICdpc0FjdGl2ZSc6IHRoaXMuY2hlY2tlZFxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGFqYXhSZXNwb25zZVN1Y2Nlc3MoZGF0YSk7XG4gICAgICAkbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc3dpdGNoLWlzYWN0aXZlJykuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuanMtdHctYXV0aC1idG4tJHt0YXJnZXR9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgYWpheENhdGNoQWxlcnQoZXJyb3IpO1xuICAgIH0pO1xuICB9LCA1MCk7XG59O1xuXG4vLyBPbmxvYWRcbihmdW5jdGlvbigpIHtcbiAgLy8gU3dpdGNoZXJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zd2l0Y2gtaXNhY3RpdmUnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zd2l0Y2gtaXNhY3RpdmUnKS5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFR3QXBpU2V0dGluZ0FjdGl2ZSkpO1xuICB9XG59KSgpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImF4aW9zIiwiU3dhbCIsIndpbmRvdyIsIm9ubG9hZCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiTW9kYWwiLCJzd2FsIiwicmVxdWlyZSIsIiR0d0FwaVNldHRpbmdzTW9kYWwiLCJ0d0FwaVNldHRpbmdzTW9kYWxQbHVnaW4iLCIkdHdBcGlTZXR0aW5nc01vZGFsTG9hZGVyIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvT25lIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvQWxsIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEJ0bkdvUGxhdG9uaWMiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRDb3VudCIsIiR0d0FwaVNldHRpbmdzTW9kYWxBbGVydENvdW50Rm9sbG93aW5nIiwiJHR3QXBpU2V0dGluZ3NNb2RhbEFsZXJ0Q291bnRGb2xsb3dlcnMiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRSZXN1bHQiLCIkdHdBcGlTZXR0aW5nc01vZGFsQWxlcnRNZXNzYWdlIiwidXBkYXRlQWxsRm9sbG93IiwidXBkYXRlRG9uZSIsInVwZGF0ZVVybCIsInJlZGlyZWN0Iiwic2hvd1R3QXBpU2V0dGluZ3NNb2RhbCIsImRhdGEiLCJzdWNjZXNzIiwiaW5uZXJIVE1MIiwiaHRtbCIsInNldFRpbWVvdXQiLCJzaG93Iiwid2FybmluZyIsInN0eWxlIiwiZGlzcGxheSIsImFqYXhSZXNwb25zZUFsZXJ0IiwiZ2V0VHdBcGlTZXR0aW5nTW9kYWwiLCJwb3N0IiwiaHJlZiIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiYWpheENhdGNoQWxlcnQiLCJlbmFibGVNb2RhbEV2ZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJkaXNhYmxlZCIsImRpc2FibGVNb2RhbEV2ZW50cyIsImFqYXhGb2xsb3dDYWxsYmFjayIsIm5leHQiLCJjYWxsVXBkYXRlRm9sbG93Iiwic2V0QXR0cmlidXRlIiwiY2FsbENvdW50IiwiY2hlY2tlZCIsImNyZWF0ZWQiLCJ1cGRhdGVkIiwiYWZ0ZXIiLCJjbG9uZU5vZGUiLCJwYXRoIiwiaGlkZSIsImFqYXhQbGF0b25pY0NhbGxiYWNrIiwidXBkYXRlIiwibmV4dFVwZGF0ZSIsImNhbGxVcGRhdGVQbGF0b25pYyIsImljb24iLCJhamF4VW5mb2xsb3dDYWxsYmFjayIsImFqYXhSZXNwb25zZVN1Y2Nlc3MiLCJjYWxsVW5mb2xsb3ciLCIkZWwiLCIkbG9hZGVyIiwidmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJzYWZlVW5mb2xsb3ciLCIkdGhpcyIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRJc0Zhdm9yaXRlIiwiJHRhcmdldCIsInJlcGxhY2UiLCJhZGQiLCJkZXRhaWwiLCJtZXNzYWdlIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsImNvbnNvbGUiLCJsb2ciLCJmb290ZXIiLCJzdGF0dXMiLCJpbmZvIiwic2lkZWJhck5hdldyYXBwZXIiLCJtYWluV3JhcHBlciIsIm1lbnVUb2dnbGVCdXR0b24iLCJtZW51VG9nZ2xlQnV0dG9uSWNvbiIsIm92ZXJsYXkiLCJ0b2dnbGUiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJzZXRUd0FwaVNldHRpbmdBY3RpdmUiLCJ0YXJnZXQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=