(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Marcas.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarcasForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarcasForm.vue */ "./resources/js/pages/MarcasForm.vue");
/* harmony import */ var _graphql_marcaGetAll_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/marcaGetAll.gql */ "./resources/js/graphql/marcaGetAll.gql");
/* harmony import */ var _graphql_marcaGetById_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/marcaGetById.gql */ "./resources/js/graphql/marcaGetById.gql");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  components: {
    MarcasForm: _MarcasForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getMarcasData(null);
  },
  data: function data() {
    return {
      bolValsRegGets: false,
      showModalMarca: false,
      showModalDelMarca: false,
      showSpnrCreate: false,
      modoEdicion: '',
      resMsgDelMarca: '',
      jsonNewMarca: {},
      marcas: [],
      ttlModal: '',
      form: {
        id: null,
        nombre: '',
        id_archivo_subido_img: null,
        url_imagen_lowres_uid: ''
      },
      vtable: {
        search: '',
        bolLoading: false,
        loadingtxt: '',
        headers: [{
          text: 'Nombre',
          align: 'left',
          value: 'nombre_marca'
        }, {
          text: 'Logo',
          sortable: false,
          value: 'url_imagen_lowres_uid'
        }],
        marcas: [],
        selected: null,
        mainPropsImgTbl: {
          width: 70,
          height: 70
        }
      }
    };
  },
  watch: {
    jsonNewMarca: function jsonNewMarca(newval, oldval) {
      var _this = this;

      if (this.modoEdicion == 'C' && Object.keys(newval).length > 0) {
        var jstmp = {
          id: newval.id,
          nombre_marca: newval.nombre,
          url_imagen_lowres_uid: this.form.url_imagen_lowres_uid
        };
        this.vtable.marcas.push(jstmp);
        this.$refs['modalMarca'].hide();
      }

      if (this.modoEdicion == 'U' && Object.keys(newval).length > 0) {
        var index = this.vtable.marcas.findIndex(function (x) {
          return x.id === _this.vtable.selected;
        });
        this.vtable.marcas[index].id = newval.id;
        this.vtable.marcas[index].nombre = newval.nombre;
        this.vtable.marcas[index].url_imagen_lowres_uid = this.form.url_imagen_lowres_uid;
      }
    },
    resMsgDelMarca: function resMsgDelMarca(newVal, oldVal) {
      var _this2 = this;

      if (newVal == 'OK') {
        var index = this.vtable.marcas.findIndex(function (x) {
          return x.id === _this2.vtable.selected;
        });
        if (index !== undefined) this.vtable.marcas.splice(index, 1);
        this.vtable.selected = null;
        this.form.id = null;
        this.form.nombre = '';
        this.form.id_archivo_subido_img = null;
        this.form.url_imagen_lowres_uid = '';
        this.jsonNewMarca = {};
      }
    },
    'showModalMarca': function showModalMarca(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalMarca'].show();
        this.onReset();
        this.determineModMode();
      } else {
        this.showModalMarca = false;
        this.$refs['modalMarca'].hide();
        this.bolValsRegGets = false;
      }
    },
    'showModalDelMarca': function showModalDelMarca(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalDelMarca'].show();
      } else {
        this.showModalDelMarca = false;
        this.$refs['modalDelMarca'].hide();
      }
    }
  },
  methods: {
    onDone: function onDone(data) {
      if (this.modoEdicion == 'C') {
        this.jsonNewMarca = data.data.marcaCreate;
      }

      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.jsonNewMarca = data.data.marcaUpdate;
      }

      this.showModalMarca = false;
      this.showSpnrCreate = false;
    },
    onDoneCBDel: function onDoneCBDel(data) {
      var _this3 = this;

      this.showModalDelMarca = false;
      this.resMsgDelMarca = data.data.marcaDelete;

      if (this.resMsgDelMarca === 'OK') {
        var index = this.vtable.marcas.findIndex(function (x) {
          return x.id === _this3.vtable.selected;
        });
        var that = this;
        setTimeout(function () {
          if (index !== undefined) that.vtable.marcas.splice(index, 1);
          that.vtable.selected = null;
          that.form.id = null;
          that.form.nombre = '';
          that.form.id_archivo_subido_img = null;
          that.form.url_imagen_lowres_uid = '';
          that.jsonNewMarca = {};
        }, 2000);
      }
    },
    onClose: function onClose() {
      this.showModalMarca = false;
    },
    onCloseDelMarca: function onCloseDelMarca() {
      this.showModalDelMarca = false;
    },
    onReset: function onReset(evt) {
      var _this4 = this;

      if (typeof evt != 'undefined') evt.preventDefault(); // Reset our form values

      this.form.id = null;
      this.form.nombre = '';
      this.form.id_archivo_subido_img = null;
      this.form.url_imagen_lowres_uid = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this4.show = true;
      });
    },
    getMarcasData: function () {
      var _getMarcasData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var mrctmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.vtable.bolLoading = true;
                _context.next = 3;
                return this.$apollo.query({
                  query: _graphql_marcaGetAll_gql__WEBPACK_IMPORTED_MODULE_2__["GET_MARCAS"],
                  fetchPolicy: 'network-only'
                });

              case 3:
                mrctmp = _context.sent;
                this.vtable.bolLoading = false;

                if (!(typeof mrctmp.data != 'undefined')) {
                  _context.next = 10;
                  break;
                }

                if (!(mrctmp.data.marcas.length > 0)) {
                  _context.next = 10;
                  break;
                }

                this.vtable.marcas = mrctmp.data.marcas;
                this.vtable.selected = mrctmp.data.marcas[0].id;
                return _context.abrupt("return");

              case 10:
                this.vtable.marcas = [];
                this.vtable.selected = null;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMarcasData() {
        return _getMarcasData.apply(this, arguments);
      }

      return getMarcasData;
    }(),
    determineModMode: function determineModMode() {
      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.getMarcaById();
      }
    },
    getMarcaById: function () {
      var _getMarcaById = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var mrctmp, item;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof this.vtable.selected == 'undefined' || this.vtable.selected == null)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.$apollo.query({
                  query: _graphql_marcaGetById_gql__WEBPACK_IMPORTED_MODULE_3__["GET_MARCA_BY_ID"],
                  variables: {
                    id: this.vtable.selected
                  },
                  fetchPolicy: 'network-only'
                });

              case 4:
                mrctmp = _context2.sent;

                if (typeof mrctmp.data != 'undefined') {
                  item = mrctmp.data.marca[0];
                  this.form.id = item.id;
                  this.form.nombre = item.nombre_marca;
                  this.form.id_archivo_subido_img = item.id_archivo_subido_img;
                  this.form.url_imagen_lowres_uid = item.url_imagen_lowres_uid;
                  this.bolValsRegGets = true;
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMarcaById() {
        return _getMarcaById.apply(this, arguments);
      }

      return getMarcaById;
    }(),
    mostrarModal: function mostrarModal(edmode) {
      if (edmode == 'R') this.ttlModal = 'Consulta de marca';

      if (edmode == 'D') {
        this.showModalDelMarca = true;
        this.showModalMarca = false;
      } else {
        if (edmode == 'C') this.ttlModal = 'Nueva marca';
        if (edmode == 'U') this.ttlModal = 'Editar marca';
        this.modoEdicion = edmode;
        this.showModalDelMarca = false;
        this.showModalMarca = true;
      }
    },
    callMutCreate: function callMutCreate() {
      var that = this;
      var urlFile = this.$store.getters.getBaseUrl + '/' + this.$store.getters.getFolderUpload + '/';
      this.showSpnrCreate = true;
      this.$refs.mfrmCreate.uploadLogoImg().then(function (res) {
        if (res.status === 200) {
          that.form.id_archivo_subido_img = res.data.img_uploaded.id;
          that.form.url_imagen_lowres_uid = urlFile + res.data.img_uploaded.imagen_lowres_uid;
          setTimeout(function () {
            that.$refs.mutCreate.mutate();
          }, 1500);
        }
      })["catch"](function (err) {
        that.showSpnrCreate = false;
        console.log('Error al subir el archivo y actualizar registro');

        if (typeof err == 'string' && err == 'NoPasaVal') {
          console.log('Logo requerido');
        }
      });
    },
    callMutUpdate: function callMutUpdate() {
      var that = this;
      var urlFile = this.$store.getters.getBaseUrl + '/' + this.$store.getters.getFolderUpload + '/';
      this.showSpnrCreate = true; // Validar si seleccionaron una nueva imágen

      this.$refs.mfrmUpdate.uploadLogoImg().then(function (res) {
        if (typeof res == 'string' && res == 'USameImg') {
          setTimeout(function () {
            that.$refs.mutUpdate.mutate();
          }, 1000);
        } else if (typeof res.status != 'undefined' && res.status === 200) {
          that.form.id_archivo_subido_img = res.data.img_uploaded.id;
          that.form.url_imagen_lowres_uid = urlFile + res.data.img_uploaded.imagen_lowres_uid;
          setTimeout(function () {
            that.$refs.mutUpdate.mutate();
          }, 1000);
        }
      })["catch"](function (err) {
        console.log(err);
        console.log('Error al subir el archivo y actualizar registro');
        that.showSpnrCreate = false;

        if (typeof err == 'string' && err == 'NoPasaVal') {
          console.log('Logo requerido');
        }
      });
    },
    goBack: function goBack() {
      this.$router.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['modoEdicion', 'bolValsRegGets', 'id', 'nombre', 'url_imagen_lowres_uid'],
  data: function data() {
    return {
      idmrc: null,
      nommrc: '',
      logoimg: '',
      percprog: 0,
      percmax: 100,
      selectedFile: null,
      urlImgLogo: '',
      validacMsg: '',
      //'Mensaje de prueba',
      bolCambiarImg: false,
      lblBtnChgImg: 'Cambiar imágen...',
      bolUpdMut: false
    };
  },
  computed: {
    esDisabled: function esDisabled() {
      return this.modoEdicion === 'R';
    },
    porctjprog: function porctjprog() {
      return "".concat(this.percprog.toString(), " %");
    }
  },
  watch: {
    bolValsRegGets: function bolValsRegGets(n, o) {
      if (n) this.syncVals();
    },
    nommrc: function nommrc(n, o) {
      this.$emit('update:nombre', n);
    },
    logoimg: function logoimg(n, o) {
      this.$emit('update:logo_img', n);
    },
    bolCambiarImg: function bolCambiarImg(n, o) {
      if (n) this.lblBtnChgImg = 'Mantener imágen...';else {
        this.lblBtnChgImg = 'Cambiar imágen...';
        this.validacMsg = '';
      }
    }
  },
  methods: {
    syncVals: function syncVals() {
      this.nommrc = this.nombre;
      this.logoimg = this.logo_img;
    },
    onFileChanged: function onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadLogoImg: function uploadLogoImg() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var fd = new FormData();
        var that = _this;

        if (_this.nommrc.trim() == '') {
          _this.validacMsg = 'Especifíque un nombre';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (_this.bolCambiarImg && (typeof _this.selectedFile == 'undefined' || _this.selectedFile == null)) {
          console.log('NO this.selectedFile');
          _this.validacMsg = 'El logo de la marca es requerido';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (!_this.bolCambiarImg && _this.modoEdicion == 'U') {
          resolve('USameImg');
          return;
        }

        console.log(_this.modoEdicion);
        if (_this.modoEdicion == 'U') _this.bolUpdMut = true;
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common = {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': window.csrf_token
        };
        var urlFile = _this.$store.getters.getBaseUrl + '/' + _this.$store.getters.getFolderUpload + '/';
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = _this.$store.getters.getBaseUrl;
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.post['Accept'] = 'application/json';
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.post['Authorization'] = 'Bearer ' + _this.$store.getters.getAuthAccessToken;
        fd.append('image', _this.selectedFile, _this.selectedFile.name);
        fd.append('esimagen', 1);
        fd.append('nombre_original', _this.selectedFile.name);
        fd.append('modelobd_imagen', 'marca');
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/fileupload', fd, {
          onUploadProgress: function onUploadProgress(uploadEvent) {
            that.percprog = Math.round(uploadEvent.loaded / uploadEvent.total * 100);
          }
        }).then(function (res) {
          // mostrar la imágen recien subida
          that.urlImgLogo = urlFile + res.data.img_uploaded.imagen_lowres_uid;
          if (that.modoEdicion == 'U') that.bolUpdMut = false;
          resolve(res);
        })["catch"](function (err) {
          that.urlImgLogo = '';
          if (that.modoEdicion == 'U') that.bolUpdMut = false;
          reject(err);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntr.highlight {\n    background: rgb(145, 176, 235);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Marcas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=template&id=31401500&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Marcas.vue?vue&type=template&id=31401500& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "b-card",
            { staticClass: "mb-2" },
            [
              _c(
                "b-button-toolbar",
                { attrs: { "aria-label": "" } },
                [
                  _c(
                    "b-button-group",
                    { staticClass: "mx-1", attrs: { size: "lg" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "secondary" },
                          on: {
                            click: function($event) {
                              return _vm.mostrarModal("C")
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "1em",
                                color: "#F4E939"
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "star-of-life" }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "secondary",
                            disabled: _vm.vtable.selected == null
                          },
                          on: {
                            click: function($event) {
                              return _vm.mostrarModal("U")
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "1em",
                                color: "#CFFF68"
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "edit" }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "secondary",
                            disabled: _vm.vtable.selected == null
                          },
                          on: {
                            click: function($event) {
                              return _vm.mostrarModal("R")
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "1em",
                                color: "#64B1F9"
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "eye" }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            variant: "secondary",
                            disabled: _vm.vtable.selected == null
                          },
                          on: {
                            click: function($event) {
                              return _vm.mostrarModal("D")
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "1em",
                                color: "#F96464"
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "minus-circle" }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mx-1", attrs: { size: "lg" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "secondary" },
                          on: {
                            click: function($event) {
                              return _vm.goBack()
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "1em",
                                color: "#CFFF68"
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "reply" }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modalMarca",
              attrs: { "hide-footer": "", title: _vm.ttlModal },
              on: {
                close: function($event) {
                  return _vm.onClose()
                },
                hidden: function($event) {
                  return _vm.onClose()
                }
              }
            },
            [
              _c("ApolloMutation", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.modoEdicion === "C",
                    expression: "(modoEdicion==='C')"
                  }
                ],
                ref: "mutCreate",
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/marcaCreate.gql */ "./resources/js/graphql/marcaCreate.gql").default,
                  variables: {
                    nombre: _vm.form.nombre,
                    id_archivo_subido_img: _vm.form.id_archivo_subido_img
                  }
                },
                on: { done: _vm.onDone },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var mutate = ref.mutate
                      var loading = ref.loading
                      var called = ref.called
                      var error = ref.error
                      return [
                        _c(
                          "b-alert",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: error,
                                expression: "error"
                              }
                            ],
                            attrs: { variant: "danger", show: "" }
                          },
                          [_vm._v(_vm._s(error))]
                        ),
                        _vm._v(" "),
                        _c("marcas-form", {
                          ref: "mfrmCreate",
                          attrs: {
                            modoEdicion: _vm.modoEdicion,
                            bolValsRegGets: _vm.bolValsRegGets,
                            id: _vm.form.id,
                            nombre: _vm.form.nombre,
                            url_imagen_lowres_uid:
                              _vm.form.url_imagen_lowres_uid
                          },
                          on: {
                            "update:modoEdicion": function($event) {
                              _vm.modoEdicion = $event
                            },
                            "update:modo-edicion": function($event) {
                              _vm.modoEdicion = $event
                            },
                            "update:bolValsRegGets": function($event) {
                              _vm.bolValsRegGets = $event
                            },
                            "update:bol-vals-reg-gets": function($event) {
                              _vm.bolValsRegGets = $event
                            },
                            "update:id": function($event) {
                              return _vm.$set(_vm.form, "id", $event)
                            },
                            "update:nombre": function($event) {
                              return _vm.$set(_vm.form, "nombre", $event)
                            },
                            "update:url_imagen_lowres_uid": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "url_imagen_lowres_uid",
                                $event
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "float-right" },
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  disabled: loading || _vm.showSpnrCreate,
                                  variant: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.callMutCreate()
                                  }
                                }
                              },
                              [
                                _c("b-spinner", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: loading || _vm.showSpnrCreate,
                                      expression: "loading || showSpnrCreate"
                                    }
                                  ],
                                  attrs: { type: "border", small: "" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !loading && !_vm.showSpnrCreate,
                                        expression:
                                          "!loading && !showSpnrCreate"
                                      }
                                    ],
                                    staticStyle: {
                                      "font-size": "1em",
                                      color: "#f7f9ff"
                                    }
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      attrs: { icon: "save" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(
                                  "\n                                Guardar\n                            "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "light" },
                                on: {
                                  click: function($event) {
                                    return _vm.onClose()
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br", { staticClass: "clear-float" })
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("ApolloMutation", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !(_vm.modoEdicion === "C"),
                    expression: "!(modoEdicion==='C')"
                  }
                ],
                ref: "mutUpdate",
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/marcaUpdate.gql */ "./resources/js/graphql/marcaUpdate.gql").default,
                  variables: {
                    id: _vm.form.id,
                    nombre: _vm.form.nombre,
                    id_archivo_subido_img: _vm.form.id_archivo_subido_img
                  }
                },
                on: { done: _vm.onDone },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var mutate = ref.mutate
                      var loading = ref.loading
                      var called = ref.called
                      var error = ref.error
                      return [
                        _c(
                          "b-alert",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: error,
                                expression: "error"
                              }
                            ],
                            attrs: { variant: "danger", show: "" }
                          },
                          [_vm._v(_vm._s(error))]
                        ),
                        _vm._v(" "),
                        _c("marcas-form", {
                          ref: "mfrmUpdate",
                          attrs: {
                            modoEdicion: _vm.modoEdicion,
                            bolValsRegGets: _vm.bolValsRegGets,
                            id: _vm.form.id,
                            nombre: _vm.form.nombre,
                            url_imagen_lowres_uid:
                              _vm.form.url_imagen_lowres_uid
                          },
                          on: {
                            "update:modoEdicion": function($event) {
                              _vm.modoEdicion = $event
                            },
                            "update:modo-edicion": function($event) {
                              _vm.modoEdicion = $event
                            },
                            "update:bolValsRegGets": function($event) {
                              _vm.bolValsRegGets = $event
                            },
                            "update:bol-vals-reg-gets": function($event) {
                              _vm.bolValsRegGets = $event
                            },
                            "update:id": function($event) {
                              return _vm.$set(_vm.form, "id", $event)
                            },
                            "update:nombre": function($event) {
                              return _vm.$set(_vm.form, "nombre", $event)
                            },
                            "update:url_imagen_lowres_uid": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "url_imagen_lowres_uid",
                                $event
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "float-right" },
                          [
                            _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      !(_vm.modoEdicion === "R") ||
                                      _vm.showSpnrCreate,
                                    expression:
                                      "!(modoEdicion==='R') || showSpnrCreate"
                                  }
                                ],
                                attrs: {
                                  disabled: loading,
                                  variant: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.callMutUpdate()
                                  }
                                }
                              },
                              [
                                _c("b-spinner", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: loading || _vm.showSpnrCreate,
                                      expression: "loading || showSpnrCreate"
                                    }
                                  ],
                                  attrs: { type: "border", small: "" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !loading && !_vm.showSpnrCreate,
                                        expression:
                                          "!loading && !showSpnrCreate"
                                      }
                                    ],
                                    staticStyle: {
                                      "font-size": "1em",
                                      color: "#f7f9ff"
                                    }
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      attrs: { icon: "save" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(
                                  "\n                                Guardar\n                            "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "light" },
                                on: {
                                  click: function($event) {
                                    return _vm.onClose()
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br", { staticClass: "clear-float" })
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modalDelMarca",
              attrs: { "hide-footer": "", title: "Eliminar marca" }
            },
            [
              _c("ApolloMutation", {
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/marcaDelete.gql */ "./resources/js/graphql/marcaDelete.gql").default,
                  variables: { id: _vm.vtable.selected }
                },
                on: { done: _vm.onDoneCBDel },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var mutate = ref.mutate
                      var loading = ref.loading
                      var called = ref.called
                      var error = ref.error
                      return [
                        _c(
                          "b-alert",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: error,
                                expression: "error"
                              }
                            ],
                            attrs: { variant: "danger", show: "" }
                          },
                          [_vm._v(_vm._s(error))]
                        ),
                        _vm._v(" "),
                        _c("label", [
                          _vm._v(
                            "¿Está seguro que desea eliminar el registro seleccionado?"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "float-right" },
                          [
                            _c(
                              "b-button",
                              {
                                attrs: {
                                  disabled: loading,
                                  variant: "primary",
                                  autofocus: ""
                                },
                                on: {
                                  click: function($event) {
                                    return mutate()
                                  }
                                }
                              },
                              [
                                _c("b-spinner", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: loading,
                                      expression: "loading"
                                    }
                                  ],
                                  attrs: { type: "border", small: "" }
                                }),
                                _vm._v(
                                  "\n                                Aceptar\n                            "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "light" },
                                on: {
                                  click: function($event) {
                                    return _vm.onCloseDelMarca()
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("br", { staticClass: "clear-float" })
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-app",
            { attrs: { id: "inspire" } },
            [
              _c("v-data-table", {
                attrs: {
                  headers: _vm.vtable.headers,
                  items: _vm.vtable.marcas,
                  search: _vm.vtable.search,
                  loading: _vm.vtable.bolLoading,
                  "loading-text": _vm.vtable.loadingtxt
                },
                scopedSlots: _vm._u([
                  {
                    key: "item",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "tr",
                          {
                            class: {
                              highlight: item.id === _vm.vtable.selected
                            },
                            on: {
                              click: function($event) {
                                _vm.vtable.selected = item.id
                              }
                            }
                          },
                          [
                            _c("td", [_vm._v(_vm._s(item.nombre_marca))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "b-img",
                                  _vm._b(
                                    {
                                      attrs: {
                                        src: item.url_imagen_lowres_uid,
                                        fluid: "",
                                        alt: "fluid"
                                      }
                                    },
                                    "b-img",
                                    _vm.vtable.mainPropsImgTbl,
                                    false
                                  )
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Mantenimiento de marcas")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasForm.vue?vue&type=template&id=0131e038&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasForm.vue?vue&type=template&id=0131e038& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "b-alert",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.validacMsg != "",
              expression: "validacMsg!=''"
            }
          ],
          attrs: { show: "", variant: "warning" }
        },
        [_vm._v(_vm._s(_vm.validacMsg))]
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Nombre", "label-for": "nombremrc" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "nombremrc",
              disabled: _vm.esDisabled,
              required: "",
              autofocus: ""
            },
            model: {
              value: _vm.nommrc,
              callback: function($$v) {
                _vm.nommrc = $$v
              },
              expression: "nommrc"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.bolCambiarImg || _vm.modoEdicion == "C",
              expression: "bolCambiarImg || modoEdicion=='C'"
            }
          ],
          attrs: { label: "Logo (imágen)", "label-for": "logo" }
        },
        [
          _c("b-form-file", {
            attrs: {
              state: Boolean(_vm.selectedFile),
              placeholder: "Seleccione un archivo o arrástrelo aquí...",
              "drop-placeholder": "Arrastrar aquí..."
            },
            on: { change: _vm.onFileChanged },
            model: {
              value: _vm.selectedFile,
              callback: function($$v) {
                _vm.selectedFile = $$v
              },
              expression: "selectedFile"
            }
          }),
          _vm._v(" "),
          _c(
            "b-progress",
            { attrs: { height: "9px", max: _vm.percmax, "show-progress": "" } },
            [
              _c("b-progress-bar", {
                attrs: { value: _vm.percprog, label: _vm.porctjprog }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "", "label-for": "imglogo" } },
        [
          _c(
            "b-col",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.modoEdicion == "U" && !_vm.bolUpdMut,
                  expression: "modoEdicion=='U' && !bolUpdMut"
                }
              ],
              staticClass: "pb-2 position-absolute float-right",
              attrs: { lg: "4" }
            },
            [
              _c(
                "b-button",
                {
                  staticClass: "float-right mr-4",
                  attrs: { pill: "", variant: "outline-info", size: "sm" },
                  on: {
                    click: function($event) {
                      _vm.bolCambiarImg = !_vm.bolCambiarImg
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.lblBtnChgImg))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-img", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !(_vm.url_imagen_lowres_uid === ""),
                expression: "!(url_imagen_lowres_uid==='')"
              }
            ],
            attrs: {
              name: "imglogo",
              src: _vm.url_imagen_lowres_uid,
              fluid: "",
              alt: "fluid"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/graphql/marcaCreate.gql":
/*!**********************************************!*\
  !*** ./resources/js/graphql/marcaCreate.gql ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    marcaCreate
    (
        $nombre: String,
        $id_archivo_subido_img: Int,
    ) 
    {
        marcaCreate
        (
            nombre: $nombre,
            id_archivo_subido_img: $id_archivo_subido_img
        )
        {
            id
            nombre
            id_archivo_subido_img
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/marcaDelete.gql":
/*!**********************************************!*\
  !*** ./resources/js/graphql/marcaDelete.gql ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    marcaDelete
    (
        $id: Int!,
    ) 
    {
        marcaDelete
        (
            id: $id,
        )
    }`);

/***/ }),

/***/ "./resources/js/graphql/marcaGetAll.gql":
/*!**********************************************!*\
  !*** ./resources/js/graphql/marcaGetAll.gql ***!
  \**********************************************/
/*! exports provided: GET_MARCAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MARCAS", function() { return GET_MARCAS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_MARCAS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
marcas {
    marcas {
        id
        nombre_marca
        id_archivo_subido_img
        imagen_lowres_uid
        imagen_original_uid
        url_imagen_lowres_uid
        url_imagen_original_uid
        __typename
    }
}`;

/***/ }),

/***/ "./resources/js/graphql/marcaGetById.gql":
/*!***********************************************!*\
  !*** ./resources/js/graphql/marcaGetById.gql ***!
  \***********************************************/
/*! exports provided: GET_MARCA_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MARCA_BY_ID", function() { return GET_MARCA_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_MARCA_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
    marca
    (
        $id: Int
    ) 
    {
        marca
        (
            id: $id
        )
        {
            id
            nombre_marca
            id_archivo_subido_img
            imagen_lowres_uid
            imagen_original_uid
            url_imagen_lowres_uid
            url_imagen_original_uid
            __typename
        }
}`;

/***/ }),

/***/ "./resources/js/graphql/marcaUpdate.gql":
/*!**********************************************!*\
  !*** ./resources/js/graphql/marcaUpdate.gql ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    marcaUpdate
    (
        $id: Int!,
        $nombre: String!,
        $id_archivo_subido_img: Int!
    ) 
    {
        marcaUpdate
        (
            id: $id,
            nombre: $nombre,
            id_archivo_subido_img: $id_archivo_subido_img
        )
        {
            id
            nombre
            id_archivo_subido_img
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/pages/Marcas.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Marcas.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Marcas_vue_vue_type_template_id_31401500___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marcas.vue?vue&type=template&id=31401500& */ "./resources/js/pages/Marcas.vue?vue&type=template&id=31401500&");
/* harmony import */ var _Marcas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marcas.vue?vue&type=script&lang=js& */ "./resources/js/pages/Marcas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Marcas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Marcas.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Marcas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Marcas_vue_vue_type_template_id_31401500___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Marcas_vue_vue_type_template_id_31401500___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Marcas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Marcas.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Marcas.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Marcas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Marcas.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Marcas.vue?vue&type=template&id=31401500&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Marcas.vue?vue&type=template&id=31401500& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_template_id_31401500___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Marcas.vue?vue&type=template&id=31401500& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Marcas.vue?vue&type=template&id=31401500&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_template_id_31401500___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marcas_vue_vue_type_template_id_31401500___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/MarcasForm.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/MarcasForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarcasForm_vue_vue_type_template_id_0131e038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarcasForm.vue?vue&type=template&id=0131e038& */ "./resources/js/pages/MarcasForm.vue?vue&type=template&id=0131e038&");
/* harmony import */ var _MarcasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarcasForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/MarcasForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MarcasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MarcasForm_vue_vue_type_template_id_0131e038___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MarcasForm_vue_vue_type_template_id_0131e038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MarcasForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/MarcasForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/MarcasForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/MarcasForm.vue?vue&type=template&id=0131e038&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/MarcasForm.vue?vue&type=template&id=0131e038& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasForm_vue_vue_type_template_id_0131e038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasForm.vue?vue&type=template&id=0131e038& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasForm.vue?vue&type=template&id=0131e038&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasForm_vue_vue_type_template_id_0131e038___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasForm_vue_vue_type_template_id_0131e038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);