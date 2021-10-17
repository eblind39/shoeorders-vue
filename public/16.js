(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getProductsInCart'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['removeProduct']), {
    hasProduct: function hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice: function totalPrice() {
      return this.getProductsInCart.reduce(function (current, next) {
        return current + next.price;
      }, 0);
    },
    remove: function remove(index) {
      this.removeProduct(index);
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.checkout-box[data-v-2ba42fe0] {\n  width: 100%;\n  max-width: 900px;\n  display: flex;\n  flex-direction: column;\n  margin: 50px auto;\n  box-sizing: border-box;\n  padding: 1em;\n}\n.checkout-list[data-v-2ba42fe0] {\n  padding: 0;\n}\n.checkout-product[data-v-2ba42fe0] {\n  display: grid;\n  grid-template-columns: 1fr 3fr 2fr .5fr;\n  background-color: #fff;\n  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);\n  border-radius: 5px;\n  list-style: none;\n  box-sizing: border-box;\n  padding: .8em;\n  margin: 1em 0;\n}\n.checkout-product *[data-v-2ba42fe0] {\n  place-self: center;\n}\n.product-image[data-v-2ba42fe0] {\n  grid-column: 1/2;\n  width: 50%;\n}\n.product-name[data-v-2ba42fe0] {\n  box-sizing: border-box;\n}\n.product-price[data-v-2ba42fe0] {\n  font-size: 1.2em;\n  font-weight: bold;\n}\n.product-remove[data-v-2ba42fe0] {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 0;\n  background-color: #E0E0E0;\n  color: #fff;\n  cursor: pointer;\n}\n.total[data-v-2ba42fe0] {\n  font-size: 2em;\n  font-weight: bold;\n  align-self: flex-end;\n}\n.checkout-message[data-v-2ba42fe0] {\n  font-size: 1.5em;\n}\n.fade-enter-active[data-v-2ba42fe0], .fade-leave-active[data-v-2ba42fe0] {\n  transition: all .5s;\n}\n.fade-enter[data-v-2ba42fe0], .fade-leave-to[data-v-2ba42fe0] {\n  transform: translateX(-40px);\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "checkout-box" }, [
    _c(
      "ul",
      { staticClass: "checkout-list" },
      [
        _c(
          "transition-group",
          { attrs: { name: "fade" } },
          _vm._l(_vm.getProductsInCart, function(product, index) {
            return _c(
              "li",
              { key: product.id, staticClass: "checkout-product" },
              [
                _c("img", {
                  staticClass: "product-image",
                  attrs: { src: product.image, alt: "" }
                }),
                _vm._v(" "),
                _c("h3", { staticClass: "product-name" }, [
                  _vm._v(_vm._s(product.name))
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "product-price" }, [
                  _vm._v("R$ " + _vm._s(product.price) + ",00 ")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "product-remove",
                    on: {
                      click: function($event) {
                        return _vm.remove(index)
                      }
                    }
                  },
                  [_vm._v("X")]
                )
              ]
            )
          }),
          0
        )
      ],
      1
    ),
    _vm._v(" "),
    !_vm.hasProduct()
      ? _c(
          "div",
          { staticClass: "checkout-message" },
          [
            _c("h3", [_vm._v("No products...")]),
            _vm._v(" "),
            _c("router-link", { attrs: { to: "./" } }, [
              _vm._v("Back to list of products")
            ])
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.hasProduct()
      ? _c("h3", { staticClass: "total" }, [
          _vm._v("\n    Total: R$ " + _vm._s(_vm.totalPrice()) + ", 00\n  ")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/vue-cart/components/CartCheckout.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/CartCheckout.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartCheckout_vue_vue_type_template_id_2ba42fe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true& */ "./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true&");
/* harmony import */ var _CartCheckout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartCheckout.vue?vue&type=script&lang=js& */ "./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CartCheckout_vue_vue_type_style_index_0_id_2ba42fe0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css& */ "./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CartCheckout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartCheckout_vue_vue_type_template_id_2ba42fe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartCheckout_vue_vue_type_template_id_2ba42fe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ba42fe0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/vue-cart/components/CartCheckout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartCheckout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_style_index_0_id_2ba42fe0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=style&index=0&id=2ba42fe0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_style_index_0_id_2ba42fe0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_style_index_0_id_2ba42fe0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_style_index_0_id_2ba42fe0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_style_index_0_id_2ba42fe0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_style_index_0_id_2ba42fe0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_template_id_2ba42fe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/CartCheckout.vue?vue&type=template&id=2ba42fe0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_template_id_2ba42fe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartCheckout_vue_vue_type_template_id_2ba42fe0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);