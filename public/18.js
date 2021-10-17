(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Productos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductosForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosForm.vue */ "./resources/js/pages/ProductosForm.vue");
/* harmony import */ var _graphql_productoGetById_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/productoGetById.gql */ "./resources/js/graphql/productoGetById.gql");


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
    ProductosForm: _ProductosForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getProductosData(null);
  },
  data: function data() {
    return {
      bolValsRegGets: false,
      showmodalProducto: false,
      showmodalDelProducto: false,
      showSpnrCreate: false,
      modoEdicion: '',
      resMsgDelProducto: '',
      jsonNewProducto: {},
      productos: [],
      ttlProducto: '',
      form: {
        id: null,
        referencia_cod_prov: '',
        nombre: '',
        descripcion: '',
        id_archivo_subido_img: null,
        url_imagen_lowres_uid: '',
        id_color: null,
        color: '',
        id_marca: null,
        nombre_marca: '',
        id_tipo_material: null,
        tipo_material: '',
        id_genero: null,
        genero: '',
        id_categoria: null,
        categoria: '',
        precio: null,
        total_unidades: null
      },
      vtable: {
        search: '',
        bolLoading: false,
        loadingtxt: '',
        headers: [{
          text: 'Cod. Prov.',
          align: 'left',
          value: 'referencia_cod_prov'
        }, {
          text: 'Nombre',
          align: 'left',
          value: 'nombre_producto'
        }, {
          text: 'Imágen',
          sortable: false,
          value: 'url_imagen_lowres_uid'
        }, {
          text: 'color',
          align: 'left',
          value: 'color'
        }, {
          text: 'Marca',
          align: 'left',
          value: 'nombre_marca'
        }, {
          text: 'Material',
          align: 'left',
          value: 'tipo_material'
        }, {
          text: 'Género',
          align: 'left',
          value: 'genero'
        }, {
          text: 'Categoría',
          align: 'left',
          value: 'categoria'
        }, {
          text: 'Precio',
          align: 'left',
          value: 'precio'
        }, {
          text: 'Unidades',
          align: 'left',
          value: 'total_unidades'
        }],
        productos: [],
        selected: null,
        mainPropsImgTbl: {
          width: 50,
          height: 50
        }
      }
    };
  },
  watch: {
    jsonNewProducto: function jsonNewProducto(newval, oldval) {
      var _this = this;

      if (this.modoEdicion == 'C' && Object.keys(newval).length > 0) {
        var jstmp = {
          id: newval.id,
          referencia_cod_prov: newval.referencia_cod_prov,
          nombre_producto: newval.nombre,
          descripcion: newval.descripcion,
          url_imagen_lowres_uid: this.form.url_imagen_lowres_uid,
          color: this.form.color,
          nombre_marca: this.form.nombre_marca,
          tipo_material: this.form.tipo_material,
          genero: this.form.genero,
          categoria: this.form.categoria,
          precio: newval.precio,
          total_unidades: newval.total_unidades
        };
        this.vtable.productos.push(jstmp);
        this.$refs['modalProducto'].hide();
      }

      if (this.modoEdicion == 'U' && Object.keys(newval).length > 0) {
        var index = this.vtable.productos.findIndex(function (x) {
          return x.id === _this.vtable.selected;
        });
        this.vtable.productos[index].id = newval.id;
        this.vtable.productos[index].referencia_cod_prov = newval.referencia_cod_prov;
        this.vtable.productos[index].nombre_producto = newval.nombre;
        this.vtable.productos[index].descripcion = newval.descripcion;
        this.vtable.productos[index].url_imagen_lowres_uid = this.form.url_imagen_lowres_uid;
        this.vtable.productos[index].color = this.form.color;
        this.vtable.productos[index].nombre_marca = this.form.nombre_marca;
        this.vtable.productos[index].tipo_material = this.form.tipo_material;
        this.vtable.productos[index].genero = this.form.genero;
        this.vtable.productos[index].categoria = this.form.categoria;
        this.vtable.productos[index].precio = newval.precio;
        this.vtable.productos[index].total_unidades = newval.total_unidades;
      }
    },
    resMsgDelProducto: function resMsgDelProducto(newVal, oldVal) {
      var _this2 = this;

      if (newVal == 'OK') {
        var index = this.vtable.productos.findIndex(function (x) {
          return x.id === _this2.vtable.selected;
        });
        if (index !== undefined) this.vtable.productos.splice(index, 1);
        this.vtable.selected = null;
        this.limpiarCamposBindedFrm();
        this.jsonNewProducto = {};
      }
    },
    'showmodalProducto': function showmodalProducto(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalProducto'].show();
        this.onReset();
        this.determineModMode();
      } else {
        this.showmodalProducto = false;
        this.$refs['modalProducto'].hide();
        this.bolValsRegGets = false;
      }
    },
    'showmodalDelProducto': function showmodalDelProducto(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalDelProducto'].show();
      } else {
        this.showmodalDelProducto = false;
        this.$refs['modalDelProducto'].hide();
      }
    }
  },
  methods: {
    onDone: function onDone(data) {
      if (this.modoEdicion == 'C') {
        var newval = data.data.productoCreate;
        this.addCreatedToTbl(newval.id);
      }

      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.jsonNewProducto = data.data.productoUpdate;
      }

      this.showmodalProducto = false;
      this.showSpnrCreate = false;
    },
    addCreatedToTbl: function () {
      var _addCreatedToTbl = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(idPrd) {
        var prod;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.vtable.bolLoading = true;
                _context.next = 3;
                return this.$apollo.query({
                  query: _graphql_productoGetById_gql__WEBPACK_IMPORTED_MODULE_2__["GET_PRODUCTO_BY_ID"],
                  variables: {
                    id: idPrd,
                    id_categoria: null,
                    nombre_descripcion: null
                  },
                  fetchPolicy: 'network-only'
                });

              case 3:
                prod = _context.sent;
                this.vtable.bolLoading = false;

                if (!(typeof prod.data != 'undefined')) {
                  _context.next = 10;
                  break;
                }

                if (!(prod.data.producto.length > 0)) {
                  _context.next = 10;
                  break;
                }

                this.vtable.productos.push(prod.data.producto[0]);
                this.vtable.selected = prod.data.producto[0].id;
                return _context.abrupt("return");

              case 10:
                this.vtable.selected = null;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addCreatedToTbl(_x) {
        return _addCreatedToTbl.apply(this, arguments);
      }

      return addCreatedToTbl;
    }(),
    onDoneCBDel: function onDoneCBDel(data) {
      var _this3 = this;

      this.showmodalDelProducto = false;
      this.resMsgDelProducto = data.data.productoDelete;

      if (this.resMsgDelProducto === 'OK') {
        var index = this.vtable.productos.findIndex(function (x) {
          return x.id === _this3.vtable.selected;
        });
        var that = this;
        setTimeout(function () {
          if (index !== undefined) that.vtable.productos.splice(index, 1);
          that.vtable.selected = null;
          this.limpiarCamposBindedFrm();
          that.jsonNewProducto = {};
        }, 2000);
      }
    },
    onClose: function onClose() {
      this.showmodalProducto = false;
    },
    onReset: function onReset(evt) {
      var _this4 = this;

      if (typeof evt != 'undefined') evt.preventDefault(); // Reset our form values

      this.limpiarCamposBindedFrm(); // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this4.show = true;
      });
    },
    getProductosData: function () {
      var _getProductosData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var prod;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.vtable.bolLoading = true;
                _context2.next = 3;
                return this.$apollo.query({
                  query: _graphql_productoGetById_gql__WEBPACK_IMPORTED_MODULE_2__["GET_PRODUCTO_BY_ID"],
                  variables: {
                    id: null,
                    id_categoria: null,
                    nombre_descripcion: null
                  },
                  fetchPolicy: 'network-only'
                });

              case 3:
                prod = _context2.sent;
                this.vtable.bolLoading = false;

                if (!(typeof prod.data != 'undefined')) {
                  _context2.next = 10;
                  break;
                }

                if (!(prod.data.producto.length > 0)) {
                  _context2.next = 10;
                  break;
                }

                this.vtable.productos = prod.data.producto;
                this.vtable.selected = prod.data.producto[0].id;
                return _context2.abrupt("return");

              case 10:
                this.vtable.productos = [];
                this.vtable.selected = null;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getProductosData() {
        return _getProductosData.apply(this, arguments);
      }

      return getProductosData;
    }(),
    determineModMode: function determineModMode() {
      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.getProductoById();
      }
    },
    getProductoById: function () {
      var _getProductoById = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var prod, item;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(typeof this.vtable.selected == 'undefined' || this.vtable.selected == null)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.$apollo.query({
                  query: _graphql_productoGetById_gql__WEBPACK_IMPORTED_MODULE_2__["GET_PRODUCTO_BY_ID"],
                  variables: {
                    id: this.vtable.selected,
                    id_categoria: null,
                    nombre_descripcion: null
                  },
                  fetchPolicy: 'network-only'
                });

              case 4:
                prod = _context3.sent;

                if (typeof prod.data != 'undefined') {
                  item = prod.data.producto[0];
                  this.form.id = item.id;
                  this.form.referencia_cod_prov = item.referencia_cod_prov;
                  this.form.nombre = item.nombre_producto;
                  this.form.descripcion = item.descripcion;
                  this.form.id_archivo_subido_img = item.id_archivo_subido_img;
                  this.form.url_imagen_lowres_uid = item.url_imagen_lowres_uid;
                  this.form.id_color = item.id_color;
                  this.form.color = item.color;
                  this.form.id_marca = item.id_marca;
                  this.form.nombre_marca = item.nombre_marca;
                  this.form.id_img_marca = item.id_img_marca;
                  this.form.id_tipo_material = item.id_tipo_material;
                  this.form.tipo_material = item.tipo_material;
                  this.form.id_genero = item.id_genero;
                  this.form.genero = item.genero;
                  this.form.id_categoria = item.id_categoria;
                  this.form.categoria = item.categoria;
                  this.form.precio = item.precio;
                  this.form.total_unidades = item.total_unidades;
                  this.bolValsRegGets = true;
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getProductoById() {
        return _getProductoById.apply(this, arguments);
      }

      return getProductoById;
    }(),
    mostrarModal: function mostrarModal(edmode) {
      if (edmode == 'R') this.ttlProducto = 'Consulta de producto';

      if (edmode == 'D') {
        this.showmodalDelProducto = true;
        this.showmodalProducto = false;
      } else {
        if (edmode == 'C') this.ttlProducto = 'Nuevo producto';
        if (edmode == 'U') this.ttlProducto = 'Editar producto';
        this.modoEdicion = edmode;
        this.showmodalDelProducto = false;
        this.showmodalProducto = true;
      }
    },
    callMutCreate: function callMutCreate() {
      var that = this;
      var urlFile = this.$store.getters.getBaseUrl + '/' + this.$store.getters.getFolderUpload + '/';
      this.showSpnrCreate = true;
      console.log(this.form);
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
    },
    limpiarCamposBindedFrm: function limpiarCamposBindedFrm() {
      this.form.id = null;
      this.form.referencia_cod_prov = '';
      this.form.nombre = '';
      this.form.descripcion = '';
      this.form.id_archivo_subido_img = null;
      this.form.url_imagen_lowres_uid = '';
      this.form.id_color = null;
      this.form.color = '';
      this.form.id_marca = null;
      this.form.nombre_marca = '';
      this.form.id_tipo_material = null;
      this.form.tipo_material = '';
      this.form.id_genero = null;
      this.form.genero = '';
      this.form.id_categoria = null;
      this.form.categoria = '';
      this.form.precio = null;
      this.form.total_unidades = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductosForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ProductosForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_catalogoGetHijosByCod_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/catalogoGetHijosByCod.gql */ "./resources/js/graphql/catalogoGetHijosByCod.gql");
/* harmony import */ var _graphql_marcaGetAll_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/marcaGetAll.gql */ "./resources/js/graphql/marcaGetAll.gql");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['modoEdicion', 'bolValsRegGets', 'id', 'referencia_cod_prov', 'nombre', 'descripcion', 'id_archivo_subido_img', 'id_color', 'id_marca', 'id_tipo_material', 'id_genero', 'id_categoria', 'precio', 'total_unidades', 'url_imagen_lowres_uid'],
  mounted: function mounted() {
    this.getDataCatsForm();
  },
  data: function data() {
    return {
      codprov: '',
      nmbrr: '',
      descrpr: '',
      idimg: null,
      idclr: null,
      idmrc: null,
      idtmat: null,
      idgnr: null,
      idcat: null,
      prcc: null,
      ttlndd: null,
      colores: [],
      marcas: [],
      materiales: [],
      generos: [],
      categorias: [],
      mainPropsImgFrm: {
        width: 50,
        height: 50
      },
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
    codprov: function codprov(n, o) {
      this.$emit('update:referencia_cod_prov', n);
    },
    nmbrr: function nmbrr(n, o) {
      this.$emit('update:nombre', n);
    },
    descrpr: function descrpr(n, o) {
      this.$emit('update:descripcion', n);
    },
    idimg: function idimg(n, o) {
      this.$emit('update:id_archivo_subido_img', n);
    },
    idclr: function idclr(n, o) {
      this.$emit('update:id_color', n);
    },
    idmrc: function idmrc(n, o) {
      this.$emit('update:id_marca', n);
    },
    idtmat: function idtmat(n, o) {
      this.$emit('update:id_tipo_material', n);
    },
    idgnr: function idgnr(n, o) {
      this.$emit('update:id_genero', n);
    },
    idcat: function idcat(n, o) {
      this.$emit('update:id_categoria', n);
    },
    prcc: function prcc(n, o) {
      this.$emit('update:precio', n);
    },
    ttlndd: function ttlndd(n, o) {
      this.$emit('update:total_unidades', n);
    },
    bolCambiarImg: function bolCambiarImg(n, o) {
      if (n) this.lblBtnChgImg = 'Mantener imágen...';else {
        this.lblBtnChgImg = 'Cambiar imágen...';
        this.validacMsg = '';
      }
    }
  },
  methods: {
    getDataCatsForm: function getDataCatsForm() {
      this.getColores();
      this.getMateriales();
      this.getGeneros();
      this.getCategorias();
      this.getMarcas();
    },
    getColores: function () {
      var _getColores = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var colsTmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$apollo.query({
                  query: _graphql_catalogoGetHijosByCod_gql__WEBPACK_IMPORTED_MODULE_2__["GET_CATALOGOSHJS_BY_CODFTHR"],
                  variables: {
                    codigo_catalogo: 'CLRS'
                  },
                  fetchPolicy: 'network-only'
                });

              case 2:
                colsTmp = _context.sent;

                if (!(typeof colsTmp.data != 'undefined')) {
                  _context.next = 11;
                  break;
                }

                if (!(colsTmp.data.catalogosHijosXCod.length > 0)) {
                  _context.next = 11;
                  break;
                }

                this.coloresTmp = colsTmp.data.catalogosHijosXCod;
                this.coloresTmp = JSON.parse(JSON.stringify(this.coloresTmp).split('"id_catalogo":').join('"value":'));
                this.coloresTmp = JSON.parse(JSON.stringify(this.coloresTmp).split('"valor":').join('"text":'));
                this.colores = this.coloresTmp;
                this.idclr = this.id_color;
                return _context.abrupt("return");

              case 11:
                this.colores = [];
                this.idclr = null;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getColores() {
        return _getColores.apply(this, arguments);
      }

      return getColores;
    }(),
    getMateriales: function () {
      var _getMateriales = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var tmatTmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$apollo.query({
                  query: _graphql_catalogoGetHijosByCod_gql__WEBPACK_IMPORTED_MODULE_2__["GET_CATALOGOSHJS_BY_CODFTHR"],
                  variables: {
                    codigo_catalogo: 'TPMTRL'
                  },
                  fetchPolicy: 'network-only'
                });

              case 2:
                tmatTmp = _context2.sent;

                if (!(typeof tmatTmp.data != 'undefined')) {
                  _context2.next = 11;
                  break;
                }

                if (!(tmatTmp.data.catalogosHijosXCod.length > 0)) {
                  _context2.next = 11;
                  break;
                }

                this.materialesTmp = tmatTmp.data.catalogosHijosXCod;
                this.materialesTmp = JSON.parse(JSON.stringify(this.materialesTmp).split('"id_catalogo":').join('"value":'));
                this.materialesTmp = JSON.parse(JSON.stringify(this.materialesTmp).split('"valor":').join('"text":'));
                this.materiales = this.materialesTmp;
                this.idtmat = this.id_tipo_material;
                return _context2.abrupt("return");

              case 11:
                this.materiales = [];
                this.idtmat = null;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMateriales() {
        return _getMateriales.apply(this, arguments);
      }

      return getMateriales;
    }(),
    getGeneros: function () {
      var _getGeneros = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var mtrlTmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$apollo.query({
                  query: _graphql_catalogoGetHijosByCod_gql__WEBPACK_IMPORTED_MODULE_2__["GET_CATALOGOSHJS_BY_CODFTHR"],
                  variables: {
                    codigo_catalogo: 'GNRR'
                  },
                  fetchPolicy: 'network-only'
                });

              case 2:
                mtrlTmp = _context3.sent;

                if (!(typeof mtrlTmp.data != 'undefined')) {
                  _context3.next = 11;
                  break;
                }

                if (!(mtrlTmp.data.catalogosHijosXCod.length > 0)) {
                  _context3.next = 11;
                  break;
                }

                this.generosTmp = mtrlTmp.data.catalogosHijosXCod;
                this.generosTmp = JSON.parse(JSON.stringify(this.generosTmp).split('"id_catalogo":').join('"value":'));
                this.generosTmp = JSON.parse(JSON.stringify(this.generosTmp).split('"valor":').join('"text":'));
                this.generos = this.generosTmp;
                this.idgnr = this.id_genero;
                return _context3.abrupt("return");

              case 11:
                this.generos = [];
                this.idgnr = null;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getGeneros() {
        return _getGeneros.apply(this, arguments);
      }

      return getGeneros;
    }(),
    getCategorias: function () {
      var _getCategorias = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var catsTmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$apollo.query({
                  query: _graphql_catalogoGetHijosByCod_gql__WEBPACK_IMPORTED_MODULE_2__["GET_CATALOGOSHJS_BY_CODFTHR"],
                  variables: {
                    codigo_catalogo: 'CTGRS'
                  },
                  fetchPolicy: 'network-only'
                });

              case 2:
                catsTmp = _context4.sent;

                if (!(typeof catsTmp.data != 'undefined')) {
                  _context4.next = 11;
                  break;
                }

                if (!(catsTmp.data.catalogosHijosXCod.length > 0)) {
                  _context4.next = 11;
                  break;
                }

                this.categoriasTmp = catsTmp.data.catalogosHijosXCod;
                this.categoriasTmp = JSON.parse(JSON.stringify(this.categoriasTmp).split('"id_catalogo":').join('"value":'));
                this.categoriasTmp = JSON.parse(JSON.stringify(this.categoriasTmp).split('"valor":').join('"text":'));
                this.categorias = this.categoriasTmp;
                this.idcat = this.id_categoria;
                return _context4.abrupt("return");

              case 11:
                this.categorias = [];
                this.idcat = null;

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCategorias() {
        return _getCategorias.apply(this, arguments);
      }

      return getCategorias;
    }(),
    getMarcas: function () {
      var _getMarcas = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var mrcsTmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$apollo.query({
                  query: _graphql_marcaGetAll_gql__WEBPACK_IMPORTED_MODULE_3__["GET_MARCAS"],
                  fetchPolicy: 'network-only'
                });

              case 2:
                mrcsTmp = _context5.sent;

                if (!(typeof mrcsTmp.data != 'undefined')) {
                  _context5.next = 11;
                  break;
                }

                if (!(mrcsTmp.data.marcas.length > 0)) {
                  _context5.next = 11;
                  break;
                }

                this.marcasTmp = mrcsTmp.data.marcas;
                this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"id":').join('"value":'));
                this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"nombre_marca":').join('"text":'));
                this.marcas = this.marcasTmp;
                this.idmrc = this.id_marca;
                return _context5.abrupt("return");

              case 11:
                this.marcas = [];
                this.idmrc = null;

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getMarcas() {
        return _getMarcas.apply(this, arguments);
      }

      return getMarcas;
    }(),
    syncVals: function syncVals() {
      this.codprov = this.referencia_cod_prov;
      this.nmbrr = this.nombre;
      this.descrpr = this.descripcion;
      this.idimg = this.id_archivo_subido_img;
      this.prcc = this.precio;
      this.ttlndd = this.total_unidades;
      this.idclr = this.id_color;
      this.idtmat = this.id_tipo_material;
      this.idgnr = this.id_genero;
      this.idcat = this.id_categoria;
      this.idmrc = this.id_marca;
    },
    onFileChanged: function onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadLogoImg: function uploadLogoImg() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var fd = new FormData();
        var that = _this;

        if (_this.codprov.trim() == '') {
          _this.validacMsg = 'Especifíque un código de proveedor';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (_this.nmbrr.trim() == '') {
          _this.validacMsg = 'Especifíque un nombre';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (_this.bolCambiarImg && (typeof _this.selectedFile == 'undefined' || _this.selectedFile == null)) {
          _this.validacMsg = 'Adjunte una imágen';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (!_this.bolCambiarImg && _this.modoEdicion == 'U') {
          resolve('USameImg');
          return;
        }

        if (typeof _this.idtmat == 'undefined' || _this.idtmat == null) {
          _this.validacMsg = 'Especifíque un tipo de material';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (typeof _this.idgnr == 'undefined' || _this.idgnr == null) {
          _this.validacMsg = 'Especifíque un género';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (typeof _this.idcat == 'undefined' || _this.idcat == null) {
          _this.validacMsg = 'Especifíque una categoría';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (typeof _this.prcc == 'undefined' || _this.prcc == null) {
          _this.validacMsg = 'Especifíque el precio';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (typeof _this.ttlndd == 'undefined' || _this.ttlndd == null) {
          _this.validacMsg = 'Especifíque el total de unidades';
          reject('NoPasaVal');
          return;
        } else {
          _this.validacMsg = '';
        }

        if (_this.modoEdicion == 'U') _this.bolUpdMut = true;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common = {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-TOKEN': window.csrf_token
        };
        var urlFile = _this.$store.getters.getBaseUrl + '/' + _this.$store.getters.getFolderUpload + '/';
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = _this.$store.getters.getBaseUrl;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.post['Accept'] = 'application/json';
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.post['Authorization'] = 'Bearer ' + _this.$store.getters.getAuthAccessToken;
        fd.append('image', _this.selectedFile, _this.selectedFile.name);
        fd.append('esimagen', 1);
        fd.append('nombre_original', _this.selectedFile.name);
        fd.append('modelobd_imagen', 'marca');
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/fileupload', fd, {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntr.highlight {\n    background: rgb(145, 176, 235);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Productos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=template&id=5650f25a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Productos.vue?vue&type=template&id=5650f25a& ***!
  \*******************************************************************************************************************************************************************************************************/
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
              ref: "modalProducto",
              attrs: { "hide-footer": "", title: _vm.ttlProducto },
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
                  mutation: __webpack_require__(/*! ../graphql/productoCreate.gql */ "./resources/js/graphql/productoCreate.gql").default,
                  variables: {
                    referencia_cod_prov: _vm.form.referencia_cod_prov,
                    nombre: _vm.form.nombre,
                    descripcion: _vm.form.descripcion,
                    id_archivo_subido_img: _vm.form.id_archivo_subido_img,
                    id_color: _vm.form.id_color,
                    id_marca: _vm.form.id_marca,
                    id_tipo_material: _vm.form.id_tipo_material,
                    id_genero: _vm.form.id_genero,
                    id_categoria: _vm.form.id_categoria,
                    precio: _vm.form.precio,
                    total_unidades: _vm.form.total_unidades
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
                        _c("productos-form", {
                          ref: "mfrmCreate",
                          attrs: {
                            modoEdicion: _vm.modoEdicion,
                            bolValsRegGets: _vm.bolValsRegGets,
                            id: _vm.form.id,
                            referencia_cod_prov: _vm.form.referencia_cod_prov,
                            nombre: _vm.form.nombre,
                            descripcion: _vm.form.descripcion,
                            id_archivo_subido_img:
                              _vm.form.id_archivo_subido_img,
                            id_color: _vm.form.id_color,
                            id_marca: _vm.form.id_marca,
                            id_tipo_material: _vm.form.id_tipo_material,
                            id_genero: _vm.form.id_genero,
                            id_categoria: _vm.form.id_categoria,
                            precio: _vm.form.precio,
                            total_unidades: _vm.form.total_unidades,
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
                            "update:referencia_cod_prov": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "referencia_cod_prov",
                                $event
                              )
                            },
                            "update:nombre": function($event) {
                              return _vm.$set(_vm.form, "nombre", $event)
                            },
                            "update:descripcion": function($event) {
                              return _vm.$set(_vm.form, "descripcion", $event)
                            },
                            "update:id_archivo_subido_img": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "id_archivo_subido_img",
                                $event
                              )
                            },
                            "update:id_color": function($event) {
                              return _vm.$set(_vm.form, "id_color", $event)
                            },
                            "update:id_marca": function($event) {
                              return _vm.$set(_vm.form, "id_marca", $event)
                            },
                            "update:id_tipo_material": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "id_tipo_material",
                                $event
                              )
                            },
                            "update:id_genero": function($event) {
                              return _vm.$set(_vm.form, "id_genero", $event)
                            },
                            "update:id_categoria": function($event) {
                              return _vm.$set(_vm.form, "id_categoria", $event)
                            },
                            "update:precio": function($event) {
                              return _vm.$set(_vm.form, "precio", $event)
                            },
                            "update:total_unidades": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "total_unidades",
                                $event
                              )
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
                  mutation: __webpack_require__(/*! ../graphql/productoUpdate.gql */ "./resources/js/graphql/productoUpdate.gql").default,
                  variables: {
                    id: _vm.form.id,
                    referencia_cod_prov: _vm.form.referencia_cod_prov,
                    nombre: _vm.form.nombre,
                    descripcion: _vm.form.descripcion,
                    id_archivo_subido_img: _vm.form.id_archivo_subido_img,
                    id_color: _vm.form.id_color,
                    id_marca: _vm.form.id_marca,
                    id_tipo_material: _vm.form.id_tipo_material,
                    id_genero: _vm.form.id_genero,
                    id_categoria: _vm.form.id_categoria,
                    precio: _vm.form.precio,
                    total_unidades: _vm.form.total_unidades
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
                        _c("productos-form", {
                          ref: "mfrmUpdate",
                          attrs: {
                            modoEdicion: _vm.modoEdicion,
                            bolValsRegGets: _vm.bolValsRegGets,
                            id: _vm.form.id,
                            referencia_cod_prov: _vm.form.referencia_cod_prov,
                            nombre: _vm.form.nombre,
                            descripcion: _vm.form.descripcion,
                            id_archivo_subido_img:
                              _vm.form.id_archivo_subido_img,
                            id_color: _vm.form.id_color,
                            id_marca: _vm.form.id_marca,
                            id_tipo_material: _vm.form.id_tipo_material,
                            id_genero: _vm.form.id_genero,
                            id_categoria: _vm.form.id_categoria,
                            precio: _vm.form.precio,
                            total_unidades: _vm.form.total_unidades,
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
                            "update:referencia_cod_prov": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "referencia_cod_prov",
                                $event
                              )
                            },
                            "update:nombre": function($event) {
                              return _vm.$set(_vm.form, "nombre", $event)
                            },
                            "update:descripcion": function($event) {
                              return _vm.$set(_vm.form, "descripcion", $event)
                            },
                            "update:id_archivo_subido_img": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "id_archivo_subido_img",
                                $event
                              )
                            },
                            "update:id_color": function($event) {
                              return _vm.$set(_vm.form, "id_color", $event)
                            },
                            "update:id_marca": function($event) {
                              return _vm.$set(_vm.form, "id_marca", $event)
                            },
                            "update:id_tipo_material": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "id_tipo_material",
                                $event
                              )
                            },
                            "update:id_genero": function($event) {
                              return _vm.$set(_vm.form, "id_genero", $event)
                            },
                            "update:id_categoria": function($event) {
                              return _vm.$set(_vm.form, "id_categoria", $event)
                            },
                            "update:precio": function($event) {
                              return _vm.$set(_vm.form, "precio", $event)
                            },
                            "update:total_unidades": function($event) {
                              return _vm.$set(
                                _vm.form,
                                "total_unidades",
                                $event
                              )
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
              ref: "modalDelProducto",
              attrs: { "hide-footer": "", title: "Eliminar producto" }
            },
            [
              _c("ApolloMutation", {
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/productoDelete.gql */ "./resources/js/graphql/productoDelete.gql").default,
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
                                    _vm.showmodalDelProducto = false
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
                  items: _vm.vtable.productos,
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
                            _c("td", [
                              _vm._v(_vm._s(item.referencia_cod_prov))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.nombre_producto))]),
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
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.color))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.nombre_marca))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.tipo_material))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.genero))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.categoria))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.precio))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.total_unidades))])
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
      _c("h4", [_vm._v("Mantenimiento de productos")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductosForm.vue?vue&type=template&id=4bb5b03e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ProductosForm.vue?vue&type=template&id=4bb5b03e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
        {
          attrs: { label: "Cód. Referencia proveedor", "label-for": "codprv" }
        },
        [
          _c("b-form-input", {
            attrs: {
              name: "codprv",
              disabled: _vm.esDisabled,
              required: "",
              autofocus: ""
            },
            model: {
              value: _vm.codprov,
              callback: function($$v) {
                _vm.codprov = $$v
              },
              expression: "codprov"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Nombre", "label-for": "nmbr" } },
        [
          _c("b-form-input", {
            attrs: { name: "nmbr", disabled: _vm.esDisabled, required: "" },
            model: {
              value: _vm.nmbrr,
              callback: function($$v) {
                _vm.nmbrr = $$v
              },
              expression: "nmbrr"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Descripcion", "label-for": "descr" } },
        [
          _c("b-form-textarea", {
            attrs: {
              name: "descr",
              rows: "3",
              "max-rows": "6",
              disabled: _vm.esDisabled
            },
            model: {
              value: _vm.descrpr,
              callback: function($$v) {
                _vm.descrpr = $$v
              },
              expression: "descrpr"
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
          attrs: { label: "Imágen", "label-for": "imgprod" }
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
        { attrs: { label: "", "label-for": "imgprd" } },
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
          _c(
            "b-img",
            _vm._b(
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !(_vm.url_imagen_lowres_uid === ""),
                    expression: "!(url_imagen_lowres_uid==='')"
                  }
                ],
                attrs: {
                  name: "imgprd",
                  src: _vm.url_imagen_lowres_uid,
                  fluid: "",
                  alt: "fluid"
                }
              },
              "b-img",
              _vm.mainPropsImgFrm,
              false
            )
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Color", "label-for": "clr" } },
        [
          _c("b-form-select", {
            ref: "cmbColor",
            attrs: {
              name: "clr",
              options: _vm.colores,
              disabled: _vm.esDisabled
            },
            model: {
              value: _vm.idclr,
              callback: function($$v) {
                _vm.idclr = $$v
              },
              expression: "idclr"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Marca", "label-for": "mrc" } },
        [
          _c("b-form-select", {
            attrs: {
              name: "mrc",
              options: _vm.marcas,
              disabled: _vm.esDisabled
            },
            model: {
              value: _vm.idmrc,
              callback: function($$v) {
                _vm.idmrc = $$v
              },
              expression: "idmrc"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Tipo material", "label-for": "tmat" } },
        [
          _c("b-form-select", {
            attrs: {
              name: "tmat",
              options: _vm.materiales,
              disabled: _vm.esDisabled,
              required: ""
            },
            model: {
              value: _vm.idtmat,
              callback: function($$v) {
                _vm.idtmat = $$v
              },
              expression: "idtmat"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Género", "label-for": "gnr" } },
        [
          _c("b-form-select", {
            attrs: {
              name: "gnr",
              options: _vm.generos,
              disabled: _vm.esDisabled,
              required: ""
            },
            model: {
              value: _vm.idgnr,
              callback: function($$v) {
                _vm.idgnr = $$v
              },
              expression: "idgnr"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Categoría", "label-for": "catgr" } },
        [
          _c("b-form-select", {
            attrs: {
              name: "catgr",
              options: _vm.categorias,
              disabled: _vm.esDisabled,
              required: ""
            },
            model: {
              value: _vm.idcat,
              callback: function($$v) {
                _vm.idcat = $$v
              },
              expression: "idcat"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Precio", "label-for": "prc" } },
        [
          _c("b-form-input", {
            attrs: { name: "prc", disabled: _vm.esDisabled, required: "" },
            model: {
              value: _vm.prcc,
              callback: function($$v) {
                _vm.prcc = _vm._n($$v)
              },
              expression: "prcc"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Total unidades", "label-for": "totndd" } },
        [
          _c("b-form-input", {
            attrs: { name: "totndd", disabled: _vm.esDisabled, required: "" },
            model: {
              value: _vm.ttlndd,
              callback: function($$v) {
                _vm.ttlndd = _vm._n($$v)
              },
              expression: "ttlndd"
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

/***/ "./resources/js/graphql/catalogoGetHijosByCod.gql":
/*!********************************************************!*\
  !*** ./resources/js/graphql/catalogoGetHijosByCod.gql ***!
  \********************************************************/
/*! exports provided: GET_CATALOGOSHJS_BY_CODFTHR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATALOGOSHJS_BY_CODFTHR", function() { return GET_CATALOGOSHJS_BY_CODFTHR; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_CATALOGOSHJS_BY_CODFTHR = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
catalogosHijosXCod
(
    $codigo_catalogo: String!
) 
{
    catalogosHijosXCod
    (
        codigo_catalogo: $codigo_catalogo
    )
    {
        id_catalogo
        id_catalogo_padre
        codigo_catalogo
        valor
        __typename
    }
}`;

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

/***/ "./resources/js/graphql/productoCreate.gql":
/*!*************************************************!*\
  !*** ./resources/js/graphql/productoCreate.gql ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    productoCreate
    (
        $referencia_cod_prov: String!,
        $nombre: String!,
        $descripcion: String,
        $id_archivo_subido_img: Int,
        $id_color: Int!,
        $id_marca: Int!,
        $id_tipo_material: Int,
        $id_genero: Int,
        $id_categoria: Int,
        $precio: Int,
        $total_unidades: Int,
    ) 
    {
        productoCreate
        (
            referencia_cod_prov: $referencia_cod_prov,
            nombre: $nombre,
            descripcion: $descripcion,
            id_archivo_subido_img: $id_archivo_subido_img,
            id_color: $id_color,
            id_marca: $id_marca,
            id_tipo_material: $id_tipo_material,
            id_genero: $id_genero,
            id_categoria: $id_categoria,
            precio: $precio,
            total_unidades: $total_unidades
        )
        {
            id
            referencia_cod_prov
            nombre
            descripcion
            id_archivo_subido_img
            id_color
            id_marca
            id_tipo_material
            id_genero
            id_categoria
            precio
            total_unidades
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/productoDelete.gql":
/*!*************************************************!*\
  !*** ./resources/js/graphql/productoDelete.gql ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    productoDelete
    (
        $id: Int!,
    ) 
    {
        productoDelete
        (
            id: $id,
        )
    }`);

/***/ }),

/***/ "./resources/js/graphql/productoGetById.gql":
/*!**************************************************!*\
  !*** ./resources/js/graphql/productoGetById.gql ***!
  \**************************************************/
/*! exports provided: GET_PRODUCTO_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTO_BY_ID", function() { return GET_PRODUCTO_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_PRODUCTO_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
    producto
    (
        $id: Int,
        $id_categoria: Int,
        $nombre_descripcion: String
    ) 
    {
        producto
        (
            id: $id,
            id_categoria: $id_categoria,
            nombre_descripcion: $nombre_descripcion
        ) 
        {
            id
            referencia_cod_prov
            descripcion
            nombre_producto
            id_archivo_subido_img
            url_imagen_lowres_uid
            url_imagen_original_uid
            id_color
            color
            id_marca
            nombre_marca
            id_img_marca
            id_tipo_material
            tipo_material
            id_genero
            genero
            id_categoria
            categoria
            precio
            total_unidades
            esta_en_carrito_draft
            __typename
        }
    }`;

/***/ }),

/***/ "./resources/js/graphql/productoUpdate.gql":
/*!*************************************************!*\
  !*** ./resources/js/graphql/productoUpdate.gql ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    productoUpdate
    (
        $id: Int!,
        $referencia_cod_prov: String!,
        $nombre: String!,
        $descripcion: String,
        $id_archivo_subido_img: Int,
        $id_color: Int!,
        $id_marca: Int!,
        $id_tipo_material: Int,
        $id_genero: Int,
        $id_categoria: Int,
        $precio: Int,
        $total_unidades: Int,
    ) 
    {
        productoUpdate
        (
            id: $id,
            referencia_cod_prov: $referencia_cod_prov,
            nombre: $nombre,
            descripcion: $descripcion,
            id_archivo_subido_img: $id_archivo_subido_img,
            id_color: $id_color,
            id_marca: $id_marca,
            id_tipo_material: $id_tipo_material,
            id_genero: $id_genero,
            id_categoria: $id_categoria,
            precio: $precio,
            total_unidades: $total_unidades
        )
        {
            id
            referencia_cod_prov
            nombre
            descripcion
            id_archivo_subido_img
            id_color
            id_marca
            id_tipo_material
            id_genero
            id_categoria
            precio
            total_unidades
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/pages/Productos.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Productos.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Productos_vue_vue_type_template_id_5650f25a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Productos.vue?vue&type=template&id=5650f25a& */ "./resources/js/pages/Productos.vue?vue&type=template&id=5650f25a&");
/* harmony import */ var _Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Productos.vue?vue&type=script&lang=js& */ "./resources/js/pages/Productos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Productos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Productos.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Productos_vue_vue_type_template_id_5650f25a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Productos_vue_vue_type_template_id_5650f25a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Productos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Productos.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Productos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Productos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Productos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Productos.vue?vue&type=template&id=5650f25a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Productos.vue?vue&type=template&id=5650f25a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_template_id_5650f25a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Productos.vue?vue&type=template&id=5650f25a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Productos.vue?vue&type=template&id=5650f25a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_template_id_5650f25a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Productos_vue_vue_type_template_id_5650f25a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/ProductosForm.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/ProductosForm.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductosForm_vue_vue_type_template_id_4bb5b03e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductosForm.vue?vue&type=template&id=4bb5b03e& */ "./resources/js/pages/ProductosForm.vue?vue&type=template&id=4bb5b03e&");
/* harmony import */ var _ProductosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductosForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/ProductosForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductosForm_vue_vue_type_template_id_4bb5b03e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductosForm_vue_vue_type_template_id_4bb5b03e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ProductosForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ProductosForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/ProductosForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductosForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductosForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ProductosForm.vue?vue&type=template&id=4bb5b03e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/ProductosForm.vue?vue&type=template&id=4bb5b03e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosForm_vue_vue_type_template_id_4bb5b03e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductosForm.vue?vue&type=template&id=4bb5b03e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductosForm.vue?vue&type=template&id=4bb5b03e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosForm_vue_vue_type_template_id_4bb5b03e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductosForm_vue_vue_type_template_id_4bb5b03e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);