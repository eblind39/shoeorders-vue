(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasXCliente.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarcasXorClienteForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarcasXorClienteForm.vue */ "./resources/js/pages/MarcasXorClienteForm.vue");
/* harmony import */ var _graphql_usersTblGetById_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/usersTblGetById.gql */ "./resources/js/graphql/usersTblGetById.gql");
/* harmony import */ var _graphql_marcaxclienteGetById_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/marcaxclienteGetById.gql */ "./resources/js/graphql/marcaxclienteGetById.gql");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MarcasXorClienteForm: _MarcasXorClienteForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getUsuariosData(null);
  },
  data: function data() {
    return {
      validacMsg: '',
      idclientesel: null,
      nombrecliente: '',
      bolShowModalSCli: false,
      bolShowModalUpdMrc: false,
      bolShowModalCrtMrc: false,
      showModalDelMXC: false,
      modoEdicion: '',
      ttlModal: '',
      bolValsRegGets: false,
      showSpnrMut: false,
      form: {
        id: null,
        id_cliente: null,
        id_marca: null,
        descuento: null,
        observaciones: ''
      },
      formbuscarcli: {
        cliselid: null,
        loadingGetMXC: false,
        vtableclientes: {
          search: '',
          bolLoading: false,
          loadingtxt: '',
          headers: [{
            text: '',
            align: 'left',
            value: 'url_imagen_lowres_uid'
          }, {
            text: 'Nombre',
            align: 'left',
            value: 'nombre_completo'
          }, {
            text: 'E-mail',
            sortable: false,
            value: 'email'
          }, {
            text: 'Teléfono fijo',
            sortable: false,
            value: 'telefono_fijo'
          }, {
            text: 'Teléfono móvil',
            sortable: false,
            value: 'telefono_celular'
          }, {
            text: 'Dirección',
            sortable: false,
            value: 'direccion'
          }],
          clientes: [],
          selected: null,
          mainPropsImgTbl: {
            width: 70,
            height: 70
          }
        }
      },
      vtablemxcli: {
        search: '',
        bolLoading: false,
        headers: [{
          text: 'Nombre',
          align: 'left',
          value: 'nombre_marca'
        }, {
          text: 'Logo',
          sortable: false,
          value: 'url_imagen_lowres_uid'
        }, {
          text: 'Descuento',
          sortable: false,
          value: 'descuento'
        }, {
          text: 'Observación',
          sortable: false,
          value: 'observaciones'
        }],
        marcasxcli: [],
        selected: null,
        mainPropsImgTbl: {
          width: 40,
          height: 40
        }
      }
    };
  },
  watch: {
    'bolShowModalSCli': function bolShowModalSCli(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalBuscarCliente'].show();
      } else {
        this.showModalDelMXC = false;
        this.$refs['modalBuscarCliente'].hide();
      }
    },
    'bolShowModalCrtMrc': function bolShowModalCrtMrc(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalCreateMXCli'].show();
        this.onReset();
        this.determineModMode();
      } else {
        this.bolShowModalCrtMrc = false;
        this.$refs['modalCreateMXCli'].hide();
        this.bolValsRegGets = false;
      }
    },
    'bolShowModalUpdMrc': function bolShowModalUpdMrc(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalUpdateMXCli'].show();
        this.onReset();
        this.determineModMode();
      } else {
        this.bolShowModalUpdMrc = false;
        this.$refs['modalUpdateMXCli'].hide();
        this.bolValsRegGets = false;
      }
    },
    'showModalDelMXC': function showModalDelMXC(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalDelMXCli'].show();
      } else {
        this.showModalDelMXC = false;
        this.$refs['modalDelMXCli'].hide();
      }
    },
    'formbuscarcli.vtableclientes.selected': function formbuscarcliVtableclientesSelected(newVal, oldVal) {
      var index = this.formbuscarcli.vtableclientes.clientes.findIndex(function (x) {
        return x.id === newVal;
      });

      if (index !== undefined && index >= 0) {
        this.nombrecliente = this.formbuscarcli.vtableclientes.clientes[index].nombre_completo;
      }
    }
  },
  methods: {
    onCloseDelMXCli: function onCloseDelMXCli() {
      this.bolShowModalSCli = false;
      this.bolShowModalUpdMrc = false;
      this.bolShowModalCrtMrc = false;
      this.showModalDelMXC = false;
    },
    determineModMode: function determineModMode() {
      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') this.getMarcaXCliById();
    },
    getMarcaXCliById: function () {
      var _getMarcaXCliById = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var index, item;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof this.vtablemxcli.selected == 'undefined' || this.vtablemxcli.selected == null)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                index = this.vtablemxcli.marcasxcli.findIndex(function (x) {
                  return x.id === _this.vtablemxcli.selected;
                });

                if (typeof index != 'undefined' && index >= 0) {
                  item = this.vtablemxcli.marcasxcli[index];
                  this.form.id = item.id;
                  this.form.id_cliente = item.id_cliente;
                  this.form.id_marca = item.id_marca;
                  this.form.descuento = item.descuento;
                  this.form.observaciones = item.observaciones;
                  this.bolValsRegGets = true;
                } else {
                  console.log('No se ha encontrado el marcaXcliente');
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMarcaXCliById() {
        return _getMarcaXCliById.apply(this, arguments);
      }

      return getMarcaXCliById;
    }(),
    traerMXCByClienteID: function () {
      var _traerMXCByClienteID = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(idcli) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$apollo.query({
                  query: _graphql_marcaxclienteGetById_gql__WEBPACK_IMPORTED_MODULE_3__["GET_MARCAXCLIENTE_BY_IDCLI"],
                  variables: {
                    id_cliente: idcli
                  },
                  fetchPolicy: 'network-only'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function traerMXCByClienteID(_x) {
        return _traerMXCByClienteID.apply(this, arguments);
      }

      return traerMXCByClienteID;
    }(),
    onDone: function onDone(data) {
      if (this.modoEdicion == 'C') {
        var newval = data.data.marcaXClienteCreate;

        if (Object.keys(newval).length > 0) {
          this.addCreatedToTbl(newval.id_cliente, newval.id);
        }
      }

      if (this.modoEdicion == 'U') {
        var newval = data.data.marcaXClienteUpdate;

        if (Object.keys(newval).length > 0) {
          this.updtMXCToTbl(newval.id_cliente);
          this.$refs['modalCreateMXCli'].hide();
        }
      }

      this.showSpnrCreate = false;
      this.bolShowModalCrtMrc = false;
      this.bolShowModalUpdMrc = false;
    },
    addCreatedToTbl: function () {
      var _addCreatedToTbl = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(idCliente, idMXC) {
        var that, mrcxctmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = this;
                _context3.next = 3;
                return this.$apollo.query({
                  query: _graphql_marcaxclienteGetById_gql__WEBPACK_IMPORTED_MODULE_3__["GET_MARCAXCLIENTE_BY_IDCLI"],
                  variables: {
                    id_cliente: idCliente
                  },
                  fetchPolicy: 'network-only'
                }).then(function (res) {
                  var index = res.data.marcasxclienteId.findIndex(function (x) {
                    return x.id === idMXC;
                  });

                  if (typeof index != 'undefined' && index >= 0) {
                    that.vtablemxcli.marcasxcli.push(res.data.marcasxclienteId[index]);
                  } else {
                    console.log('No se ha encontrado el marcaXcliente');
                  }
                });

              case 3:
                mrcxctmp = _context3.sent;
                that.$refs['modalCreateMXCli'].hide();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addCreatedToTbl(_x2, _x3) {
        return _addCreatedToTbl.apply(this, arguments);
      }

      return addCreatedToTbl;
    }(),
    updtMXCToTbl: function () {
      var _updtMXCToTbl = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(idCliente) {
        var that, mrcxctmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = this;
                mrcxctmp = this.$apollo.query({
                  query: _graphql_marcaxclienteGetById_gql__WEBPACK_IMPORTED_MODULE_3__["GET_MARCAXCLIENTE_BY_IDCLI"],
                  variables: {
                    id_cliente: idCliente
                  },
                  fetchPolicy: 'network-only'
                }).then(function (res) {
                  var indexO = that.vtablemxcli.marcasxcli.findIndex(function (x) {
                    return x.id === that.vtablemxcli.selected;
                  });
                  var indexN = res.data.marcasxclienteId.findIndex(function (x) {
                    return x.id === that.vtablemxcli.selected;
                  });
                  var clave = null;

                  for (clave in that.vtablemxcli.marcasxcli[indexO]) {
                    that.vtablemxcli.marcasxcli[indexO][clave] = res.data.marcasxclienteId[indexN][clave];
                  }
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updtMXCToTbl(_x4) {
        return _updtMXCToTbl.apply(this, arguments);
      }

      return updtMXCToTbl;
    }(),
    onDoneCBDel: function onDoneCBDel(data) {
      var _this2 = this;

      this.resMsgDelMXCli = data.data.marcaXClienteDelete;

      if (this.resMsgDelMXCli === 'OK') {
        var index = this.vtablemxcli.marcasxcli.findIndex(function (x) {
          return x.id === _this2.vtablemxcli.selected;
        });
        var that = this; // setTimeout(function(){

        if (index !== undefined) this.vtablemxcli.marcasxcli.splice(index, 1);
        this.vtablemxcli.selected = null;
        this.id = null;
        this.id_cliente = null;
        this.id_marca = null;
        this.descuento = null;
        this.observaciones = ''; // that.jsonNewMarca = {};

        this.showModalDelMXC = false; // }, 1000);
      }
    },
    onCloseDelMarca: function onCloseDelMarca() {
      this.showModalDelMXC = false;
    },
    getUsuariosData: function () {
      var _getUsuariosData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var usrs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.formbuscarcli.vtableclientes.bolLoading = true;
                _context5.next = 3;
                return this.$apollo.query({
                  query: _graphql_usersTblGetById_gql__WEBPACK_IMPORTED_MODULE_2__["GET_USERSTBL_BY_ID"],
                  variables: {
                    id: null,
                    cod_role: 'CUSTOMER'
                  },
                  fetchPolicy: 'network-only'
                });

              case 3:
                usrs = _context5.sent;
                this.formbuscarcli.vtableclientes.bolLoading = false;

                if (!(typeof usrs.data != 'undefined')) {
                  _context5.next = 9;
                  break;
                }

                if (!(usrs.data.usuariotbl.length > 0)) {
                  _context5.next = 9;
                  break;
                }

                this.formbuscarcli.vtableclientes.clientes = usrs.data.usuariotbl;
                return _context5.abrupt("return");

              case 9:
                this.formbuscarcli.vtableclientes.clientes = [];
                this.formbuscarcli.vtableclientes.selected = null;

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getUsuariosData() {
        return _getUsuariosData.apply(this, arguments);
      }

      return getUsuariosData;
    }(),
    selCliente: function () {
      var _selCliente = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this3 = this;

        var mrcxcli, index;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.vtablemxcli.marcaselctd = [];
                this.formbuscarcli.loadingGetMXC = true;
                _context6.next = 4;
                return this.$apollo.query({
                  query: _graphql_marcaxclienteGetById_gql__WEBPACK_IMPORTED_MODULE_3__["GET_MARCAXCLIENTE_BY_IDCLI"],
                  variables: {
                    id_cliente: this.formbuscarcli.vtableclientes.selected
                  },
                  fetchPolicy: 'network-only'
                });

              case 4:
                mrcxcli = _context6.sent;
                this.formbuscarcli.loadingGetMXC = false;

                if (!(typeof mrcxcli.data != 'undefined')) {
                  _context6.next = 13;
                  break;
                }

                if (!(mrcxcli.data.marcasxclienteId.length > 0)) {
                  _context6.next = 13;
                  break;
                }

                // actualiza marcas seleccionadas del cliente
                this.vtablemxcli.marcasxcli = mrcxcli.data.marcasxclienteId;
                index = this.formbuscarcli.vtableclientes.clientes.findIndex(function (x) {
                  return x.id === _this3.formbuscarcli.vtableclientes.selected;
                });
                if (index !== undefined) this.nombrecliente = this.formbuscarcli.vtableclientes.clientes[index].nombre_completo;
                this.bolShowModalSCli = false;
                return _context6.abrupt("return");

              case 13:
                this.vtablemxcli.marcasxcli = [];
                this.bolShowModalSCli = false;

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function selCliente() {
        return _selCliente.apply(this, arguments);
      }

      return selCliente;
    }(),
    callSaveMXCli: function callSaveMXCli() {
      if (typeof this.form.id_marca == 'undefined' || this.form.id_marca == null) {
        this.validacMsg = 'Seleccione una marca';
        return;
      } else {
        this.validacMsg = '';
      }

      if (typeof this.form.descuento == 'undefined' || this.form.descuento == null) {
        this.validacMsg = 'Indique el descuento';
        return;
      } else {
        this.validacMsg = '';
      }

      this.showSpnrMut = true;
      this.$refs.mutCreate.mutate();
    },
    callUpdateMXCli: function callUpdateMXCli() {
      if (typeof this.form.id_marca == 'undefined' || this.form.id_marca == null) {
        this.validacMsg = 'Seleccione una marca';
        return;
      } else {
        this.validacMsg = '';
      }

      if (typeof this.form.descuento == 'undefined' || this.form.descuento == null) {
        this.validacMsg = 'Indique el descuento';
        return;
      } else {
        this.validacMsg = '';
      }

      this.showSpnrMut = true;
      this.$refs.mutUpdate.mutate();
    },
    mostrarModal: function mostrarModal(edmode) {
      this.showSpnrMut = false;
      this.form.id_cliente = this.formbuscarcli.vtableclientes.selected;

      if (edmode == 'R') {
        this.ttlModal = 'Consulta de vínculo';
        this.bolShowModalUpdMrc = true;
        this.bolShowModalCrtMrc = false;
        this.modoEdicion = edmode;
      }

      if (edmode == 'D') {
        this.showModalDelMXC = true;
        this.bolShowModalCrtMrc = false;
        this.bolShowModalUpdMrc = false;
      } else {
        if (edmode == 'C') {
          this.ttlModal = 'Nuevo vínculo';
          this.bolShowModalCrtMrc = true;
          this.bolShowModalUpdMrc = false;
        }

        if (edmode == 'U') {
          this.ttlModal = 'Editar vínculo';
          this.bolShowModalCrtMrc = false;
          this.bolShowModalUpdMrc = true;
        }

        this.modoEdicion = edmode;
        this.showModalDelMXC = false;
      }
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
    limpiarCamposBindedFrm: function limpiarCamposBindedFrm() {
      this.form.id_cliente = null;
      this.form.id_marca = null;
      this.form.descuento = null;
      this.form.observaciones = '';
    },
    goBack: function goBack() {
      this.$router.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXorClienteForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasXorClienteForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_marcaGetAll_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/marcaGetAll.gql */ "./resources/js/graphql/marcaGetAll.gql");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['modoEdicion', 'bolValsRegGets', 'id', 'id_cliente', 'id_marca', 'descuento', 'observaciones'],
  mounted: function mounted() {
    this.getDataCatsForm();
    if (this.bolValsRegGets) this.syncVals();
  },
  data: function data() {
    return {
      idmrcxcli: null,
      idcli: null,
      idmrc: null,
      dsct: null,
      srvb: '',
      marcas: [],
      validacMsg: ''
    };
  },
  computed: {
    esDisabled: function esDisabled() {
      return this.modoEdicion === 'R';
    }
  },
  watch: {
    bolValsRegGets: function bolValsRegGets(n, o) {
      if (n) this.syncVals();
    },
    idmrc: function idmrc(n, o) {
      this.$emit('update:id_marca', n);
    },
    dsct: function dsct(n, o) {
      this.$emit('update:descuento', n);
    },
    srvb: function srvb(n, o) {
      this.$emit('update:observaciones', n);
    }
  },
  methods: {
    getDataCatsForm: function getDataCatsForm() {
      this.getMarcas();
    },
    getMarcas: function () {
      var _getMarcas = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var mrcsTmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$apollo.query({
                  query: _graphql_marcaGetAll_gql__WEBPACK_IMPORTED_MODULE_2__["GET_MARCAS"],
                  fetchPolicy: 'network-only'
                });

              case 2:
                mrcsTmp = _context.sent;

                if (!(typeof mrcsTmp.data != 'undefined')) {
                  _context.next = 11;
                  break;
                }

                if (!(mrcsTmp.data.marcas.length > 0)) {
                  _context.next = 11;
                  break;
                }

                this.marcasTmp = mrcsTmp.data.marcas;
                this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"id":').join('"value":'));
                this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"nombre_marca":').join('"text":'));
                this.marcas = this.marcasTmp;
                this.idmrc = this.id_marca;
                return _context.abrupt("return");

              case 11:
                this.marcas = [];
                this.idmrc = null;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMarcas() {
        return _getMarcas.apply(this, arguments);
      }

      return getMarcas;
    }(),
    syncVals: function syncVals() {
      this.idmrcxcli = this.id;
      this.idcli = this.id_cliente; // this.idmrc = this.id_marca;

      this.dsct = this.descuento;
      this.srvb = this.observaciones;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntr.highlight {\n    background: #91B1EB;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasXCliente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=template&id=64c9a682&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasXCliente.vue?vue&type=template&id=64c9a682& ***!
  \************************************************************************************************************************************************************************************************************/
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
                          attrs: { variant: "primary" },
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
            "b-input-group",
            { staticClass: "mt-2 mb-4", attrs: { prepend: "Cliente:" } },
            [
              _c("b-form-input", {
                attrs: { name: "nombrecli", disabled: "", required: "" },
                model: {
                  value: _vm.nombrecliente,
                  callback: function($$v) {
                    _vm.nombrecliente = $$v
                  },
                  expression: "nombrecliente"
                }
              }),
              _vm._v(" "),
              _c(
                "b-input-group-append",
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "secondary" },
                      on: {
                        click: function($event) {
                          _vm.bolShowModalSCli = true
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: { "font-size": "1em", color: "#F4E939" }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "search" } })
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
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modalBuscarCliente",
              attrs: { "hide-footer": "", title: "Buscar cliente" },
              on: {
                close: function($event) {
                  _vm.bolShowModalSCli = false
                },
                hidden: function($event) {
                  _vm.bolShowModalSCli = false
                }
              }
            },
            [
              _c(
                "b-input-group",
                { staticClass: "mt-2 mb-2", attrs: { prepend: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Buscar...",
                      "single-line": "",
                      "hide-details": "",
                      autofocus: ""
                    },
                    model: {
                      value: _vm.formbuscarcli.vtableclientes.search,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.formbuscarcli.vtableclientes,
                          "search",
                          $$v
                        )
                      },
                      expression: "formbuscarcli.vtableclientes.search"
                    }
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
                      headers: _vm.formbuscarcli.vtableclientes.headers,
                      items: _vm.formbuscarcli.vtableclientes.clientes,
                      search: _vm.formbuscarcli.vtableclientes.search,
                      loading: _vm.formbuscarcli.vtableclientes.bolLoading,
                      "loading-text":
                        _vm.formbuscarcli.vtableclientes.loadingtxt
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
                                  highlight:
                                    item.id ===
                                    _vm.formbuscarcli.vtableclientes.selected
                                },
                                on: {
                                  click: function($event) {
                                    _vm.formbuscarcli.vtableclientes.selected =
                                      item.id
                                  }
                                }
                              },
                              [
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
                                        _vm.formbuscarcli.vtableclientes
                                          .mainPropsImgTbl,
                                        false
                                      )
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(item.nombre_completo))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.email))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.telefono_fijo))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(item.telefono_celular))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.direccion))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.nombre_completo))])
                              ]
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "pb-2", attrs: { lg: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "float-right",
                          attrs: { variant: "light" },
                          on: {
                            click: function($event) {
                              _vm.bolShowModalSCli = false
                            }
                          }
                        },
                        [_vm._v("Cancelar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "float-right mr-2",
                          attrs: { variant: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.selCliente()
                            }
                          }
                        },
                        [
                          _c("b-spinner", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.formbuscarcli.loadingGetMXC,
                                expression: "formbuscarcli.loadingGetMXC"
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
                                  value: !_vm.formbuscarcli.loadingGetMXC,
                                  expression: "!formbuscarcli.loadingGetMXC"
                                }
                              ],
                              staticStyle: {
                                "font-size": "1em",
                                color: "#CFFF68"
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: "check" }
                              })
                            ],
                            1
                          ),
                          _vm._v(
                            "\n                            Seleccionar\n                        "
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
              _c("br", { staticClass: "clear-float" })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modalCreateMXCli",
              attrs: { "hide-footer": "", title: _vm.ttlModal },
              on: {
                close: function($event) {
                  _vm.bolShowModalCrtMrc = false
                },
                hidden: function($event) {
                  _vm.bolShowModalCrtMrc = false
                }
              }
            },
            [
              _c("ApolloMutation", {
                ref: "mutCreate",
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/marcaxclienteCreate.gql */ "./resources/js/graphql/marcaxclienteCreate.gql")
                    .default,
                  variables: {
                    id_cliente: _vm.formbuscarcli.vtableclientes.selected,
                    id_marca: _vm.form.id_marca,
                    descuento: _vm.form.descuento,
                    observaciones: _vm.form.observaciones
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
                        _c("marcas-xor-cliente-form", {
                          ref: "mfrmCreate",
                          attrs: {
                            modoEdicion: _vm.modoEdicion,
                            bolValsRegGets: _vm.bolValsRegGets,
                            id: _vm.form.id,
                            id_cliente: _vm.form.id_cliente,
                            id_marca: _vm.form.id_marca,
                            descuento: _vm.form.descuento,
                            observaciones: _vm.form.observaciones
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
                            "update:id_cliente": function($event) {
                              return _vm.$set(_vm.form, "id_cliente", $event)
                            },
                            "update:id_marca": function($event) {
                              return _vm.$set(_vm.form, "id_marca", $event)
                            },
                            "update:descuento": function($event) {
                              return _vm.$set(_vm.form, "descuento", $event)
                            },
                            "update:observaciones": function($event) {
                              return _vm.$set(_vm.form, "observaciones", $event)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { staticClass: "pb-2", attrs: { lg: "4" } },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "float-right",
                                attrs: { variant: "light" },
                                on: {
                                  click: function($event) {
                                    _vm.bolShowModalCrtMrc = false
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "float-right mr-2",
                                attrs: { variant: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.callSaveMXCli()
                                  }
                                }
                              },
                              [
                                _c("b-spinner", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.showSpnrMut,
                                      expression: "showSpnrMut"
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
                                        value: !_vm.showSpnrMut,
                                        expression: "!showSpnrMut"
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
              ref: "modalUpdateMXCli",
              attrs: { "hide-footer": "", title: _vm.ttlModal },
              on: {
                close: function($event) {
                  _vm.bolShowModalUpdMrc = false
                },
                hidden: function($event) {
                  _vm.bolShowModalUpdMrc = false
                }
              }
            },
            [
              _c("ApolloMutation", {
                ref: "mutUpdate",
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/marcaXClienteUpdate.gql */ "./resources/js/graphql/marcaXClienteUpdate.gql")
                    .default,
                  variables: {
                    id: _vm.vtablemxcli.selected,
                    id_cliente: _vm.formbuscarcli.vtableclientes.selected,
                    id_marca: _vm.form.id_marca,
                    descuento: _vm.form.descuento,
                    observaciones: _vm.form.observaciones
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
                        _c("marcas-xor-cliente-form", {
                          ref: "mfrmUpdate",
                          attrs: {
                            modoEdicion: _vm.modoEdicion,
                            bolValsRegGets: _vm.bolValsRegGets,
                            id: _vm.form.id,
                            id_cliente: _vm.form.id_cliente,
                            id_marca: _vm.form.id_marca,
                            descuento: _vm.form.descuento,
                            observaciones: _vm.form.observaciones
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
                            "update:id_cliente": function($event) {
                              return _vm.$set(_vm.form, "id_cliente", $event)
                            },
                            "update:id_marca": function($event) {
                              return _vm.$set(_vm.form, "id_marca", $event)
                            },
                            "update:descuento": function($event) {
                              return _vm.$set(_vm.form, "descuento", $event)
                            },
                            "update:observaciones": function($event) {
                              return _vm.$set(_vm.form, "observaciones", $event)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { staticClass: "pb-2", attrs: { lg: "4" } },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "float-right",
                                attrs: { variant: "light" },
                                on: {
                                  click: function($event) {
                                    _vm.bolShowModalUpdMrc = false
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "float-right mr-2",
                                attrs: { variant: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.callUpdateMXCli()
                                  }
                                }
                              },
                              [
                                _c("b-spinner", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.showSpnrMut,
                                      expression: "showSpnrMut"
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
                                        value: !_vm.showSpnrMut,
                                        expression: "!showSpnrMut"
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
              ref: "modalDelMXCli",
              attrs: { "hide-footer": "", title: "Eliminar vínculo" }
            },
            [
              _c("ApolloMutation", {
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/marcaXClienteDelete.gql */ "./resources/js/graphql/marcaXClienteDelete.gql")
                    .default,
                  variables: { id: _vm.vtablemxcli.selected }
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
                                    return _vm.onCloseDelMXCli()
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
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.vtablemxcli.headers,
                  items: _vm.vtablemxcli.marcasxcli,
                  search: _vm.vtablemxcli.search,
                  loading: _vm.vtablemxcli.bolLoading,
                  "item-key": "id"
                },
                scopedSlots: _vm._u([
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c(
                          "v-toolbar",
                          { attrs: { flat: "", color: "white" } },
                          [
                            _c("v-toolbar-title", [_vm._v("Marcas")]),
                            _vm._v(" "),
                            _c("v-divider", {
                              staticClass: "mx-4",
                              attrs: { inset: "", vertical: "" }
                            }),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "b-input-group-append",
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      disabled:
                                        _vm.formbuscarcli.vtableclientes
                                          .selected == null,
                                      variant: "outline-secondary"
                                    },
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
                                          color: "#2b53cc"
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
                                      disabled:
                                        _vm.vtablemxcli.selected == null,
                                      variant: "outline-secondary"
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
                                          color: "#1ab04c"
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
                                      disabled:
                                        _vm.vtablemxcli.selected == null,
                                      variant: "outline-secondary"
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
                                      disabled:
                                        _vm.vtablemxcli.selected == null,
                                      variant: "outline-secondary"
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
                            )
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "item",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "tr",
                          {
                            class: {
                              highlight: item.id === _vm.vtablemxcli.selected
                            },
                            on: {
                              click: function($event) {
                                _vm.vtablemxcli.selected = item.id
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
                                    _vm.vtablemxcli.mainPropsImgTbl,
                                    false
                                  )
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.descuento))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.observaciones))])
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
      _c("h4", [_vm._v("Asignación de marcas a cliente")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "b-form-group",
        { attrs: { label: "Marca", "label-for": "mrc" } },
        [
          _c("b-form-select", {
            ref: "cmbMarca",
            attrs: {
              name: "mrc",
              options: _vm.marcas,
              required: "",
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
        { attrs: { label: "Descuento", "label-for": "dsct" } },
        [
          _c("b-form-input", {
            attrs: { name: "dsct", required: "", disabled: _vm.esDisabled },
            model: {
              value: _vm.dsct,
              callback: function($$v) {
                _vm.dsct = _vm._n($$v)
              },
              expression: "dsct"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Observaciones", "label-for": "bsrvcns" } },
        [
          _c("b-form-input", {
            attrs: { name: "bsrvcns", disabled: _vm.esDisabled },
            model: {
              value: _vm.srvb,
              callback: function($$v) {
                _vm.srvb = _vm._n($$v)
              },
              expression: "srvb"
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

/***/ "./resources/js/graphql/marcaXClienteDelete.gql":
/*!******************************************************!*\
  !*** ./resources/js/graphql/marcaXClienteDelete.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    marcaXClienteDelete
    (
        $id: Int!,
    ) 
    {
        marcaXClienteDelete
        (
            id: $id,
        )
    }`);

/***/ }),

/***/ "./resources/js/graphql/marcaXClienteUpdate.gql":
/*!******************************************************!*\
  !*** ./resources/js/graphql/marcaXClienteUpdate.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    marcaXClienteUpdate
    (
        $id: Int!,
        $id_cliente: Int!,
        $id_marca: Int!,
        $descuento: Int,
        $observaciones: String
    ) 
    {
        marcaXClienteUpdate
        (
            id: $id,
            id_cliente: $id_cliente,
            id_marca: $id_marca,
            descuento: $descuento,
            observaciones: $observaciones
        )
        {
            id
            id_cliente
            id_marca
            descuento
            observaciones
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/marcaxclienteCreate.gql":
/*!******************************************************!*\
  !*** ./resources/js/graphql/marcaxclienteCreate.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    marcaXClienteCreate
    (
        $id_cliente: Int!,
        $id_marca: Int!,
        $descuento: Int,
        $observaciones: String
    ) 
    {
        marcaXClienteCreate
        (
            id_cliente: $id_cliente,
            id_marca: $id_marca,
            descuento: $descuento,
            observaciones: $observaciones
        )
        {
            id
            id_cliente
            id_marca
            descuento
            observaciones
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/marcaxclienteGetById.gql":
/*!*******************************************************!*\
  !*** ./resources/js/graphql/marcaxclienteGetById.gql ***!
  \*******************************************************/
/*! exports provided: GET_MARCAXCLIENTE_BY_IDCLI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MARCAXCLIENTE_BY_IDCLI", function() { return GET_MARCAXCLIENTE_BY_IDCLI; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_MARCAXCLIENTE_BY_IDCLI = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
    marcasxclienteId
    (
        $id_cliente: Int
    ) 
    {
        marcasxclienteId
        (
            id_cliente: $id_cliente
        )
        {
            id
            id_cliente
            id_marca
            nombre_marca
            id_archivo_subido_img
            imagen_lowres_uid
            imagen_original_uid
            url_imagen_lowres_uid
            url_imagen_original_uid
            descuento
            observaciones
            __typename
        }
}`;

/***/ }),

/***/ "./resources/js/graphql/usersTblGetById.gql":
/*!**************************************************!*\
  !*** ./resources/js/graphql/usersTblGetById.gql ***!
  \**************************************************/
/*! exports provided: GET_USERSTBL_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERSTBL_BY_ID", function() { return GET_USERSTBL_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_USERSTBL_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
    usuariotbl
    (
        $id: Int,
        $cod_role: String
    ) 
    {
        usuariotbl
        (
            id: $id,
            cod_role: $cod_role
        )
        {
            id
            username
            email
            id_archivo_subido_img
            nombre_completo
            telefono_fijo
            telefono_celular
            id_ciudad
            ciudad
            id_zona
            zona
            id_tipo_pago
            tipo_pago
            limite_credito
            costo_por_envio
            talla_zapato
            direccion
            url_imagen_lowres_uid
            url_imagen_original_uid
            __typename
        }
}`;

/***/ }),

/***/ "./resources/js/pages/MarcasXCliente.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/MarcasXCliente.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarcasXCliente_vue_vue_type_template_id_64c9a682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarcasXCliente.vue?vue&type=template&id=64c9a682& */ "./resources/js/pages/MarcasXCliente.vue?vue&type=template&id=64c9a682&");
/* harmony import */ var _MarcasXCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarcasXCliente.vue?vue&type=script&lang=js& */ "./resources/js/pages/MarcasXCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MarcasXCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarcasXCliente.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MarcasXCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MarcasXCliente_vue_vue_type_template_id_64c9a682___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MarcasXCliente_vue_vue_type_template_id_64c9a682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MarcasXCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/MarcasXCliente.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/MarcasXCliente.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasXCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasXCliente.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/MarcasXCliente.vue?vue&type=template&id=64c9a682&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/MarcasXCliente.vue?vue&type=template&id=64c9a682& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_template_id_64c9a682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasXCliente.vue?vue&type=template&id=64c9a682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXCliente.vue?vue&type=template&id=64c9a682&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_template_id_64c9a682___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXCliente_vue_vue_type_template_id_64c9a682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/MarcasXorClienteForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/MarcasXorClienteForm.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarcasXorClienteForm_vue_vue_type_template_id_2d44c7ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba& */ "./resources/js/pages/MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba&");
/* harmony import */ var _MarcasXorClienteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarcasXorClienteForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/MarcasXorClienteForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MarcasXorClienteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MarcasXorClienteForm_vue_vue_type_template_id_2d44c7ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MarcasXorClienteForm_vue_vue_type_template_id_2d44c7ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MarcasXorClienteForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/MarcasXorClienteForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/MarcasXorClienteForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXorClienteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasXorClienteForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXorClienteForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXorClienteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXorClienteForm_vue_vue_type_template_id_2d44c7ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MarcasXorClienteForm.vue?vue&type=template&id=2d44c7ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXorClienteForm_vue_vue_type_template_id_2d44c7ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MarcasXorClienteForm_vue_vue_type_template_id_2d44c7ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);