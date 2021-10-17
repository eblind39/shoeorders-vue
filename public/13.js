(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_pedidosRealizados_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../graphql/pedidosRealizados.gql */ "./resources/js/graphql/pedidosRealizados.gql");
/* harmony import */ var _graphql_usersTblGetById_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../graphql/usersTblGetById.gql */ "./resources/js/graphql/usersTblGetById.gql");
/* harmony import */ var _graphql_catalogoGetHijosByCod_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../graphql/catalogoGetHijosByCod.gql */ "./resources/js/graphql/catalogoGetHijosByCod.gql");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['showModalProdsInCart'],
  mounted: function mounted() {
    this.traerProductosPedidos(null, null, null);
    this.getUsuariosData(null);
    this.getEstadosPedido();
  },
  data: function data() {
    return {
      vtable: {
        search: '',
        bolLoading: false,
        headers: [{
          text: '#Pedido',
          align: 'left',
          value: 'numero_pedido'
        }, {
          text: 'Estado',
          align: 'left',
          value: 'estado_pedido'
        }, {
          text: 'Cliente',
          align: 'left',
          value: 'nombre_cliente'
        }, {
          text: 'Código',
          align: 'left',
          value: 'referencia_cod_prov'
        }, {
          text: 'Producto',
          align: 'left',
          value: 'nombre_producto'
        }, {
          text: 'Imágen',
          sortable: false,
          value: 'url_imagen_lowres_uid'
        }, {
          text: 'Cantidad',
          value: 'cantidad_producto'
        }, {
          text: 'Precio unitario',
          value: 'precio_unitario'
        }, {
          text: 'Precio total',
          value: 'precio_total'
        }],
        productos: [],
        selected: null,
        mainPropsImgTbl: {
          width: 50,
          height: 50
        }
      },
      idclientesel: null,
      nombrecliente: '',
      bolShowModalSCli: false,
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
      selectedEstPdd: null,
      estadosPedido: [],
      numeropedido: '',
      bolCompletarPedido: false,
      showModalCompletarPedido: false,
      numeropedidoSelTbl: '',
      numeropedidoSelPDFRpt: '',
      bolPedidoCompletadoOk: false
    };
  },
  watch: {
    'bolShowModalSCli': function bolShowModalSCli(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalBuscarCliente'].show();
      } else {
        this.$refs['modalBuscarCliente'].hide();
      }
    },
    'showModalCompletarPedido': function showModalCompletarPedido(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalConfirmCompletarPedido'].show();
      } else {
        this.$refs['modalConfirmCompletarPedido'].hide();
      }
    },
    'formbuscarcli.vtableclientes.selected': function formbuscarcliVtableclientesSelected(newVal, oldVal) {
      var index = this.formbuscarcli.vtableclientes.clientes.findIndex(function (x) {
        return x.id === newVal;
      });

      if (index !== undefined && index >= 0) {
        this.nombrecliente = this.formbuscarcli.vtableclientes.clientes[index].nombre_completo;
      }
    },
    'vtable.selected': function vtableSelected(newVal, oldVal) {
      if (typeof newVal == 'undefined') return;
      var index = this.vtable.productos.findIndex(function (x) {
        return x.id_pedido === newVal;
      });

      if (index !== undefined && index >= 0) {
        this.numeropedidoSelPDFRpt = this.vtable.productos[index].numero_pedido;

        if (this.vtable.productos[index].codigo_estado_pedido == 'PDDNVDD') {
          this.bolCompletarPedido = true;
          this.numeropedidoSelTbl = this.vtable.productos[index].numero_pedido;
        } else {
          this.bolCompletarPedido = false;
        }
      }
    }
  },
  methods: {
    getEstadosPedido: function () {
      var _getEstadosPedido = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var that, mtrlTmp, indexSel;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return this.$apollo.query({
                  query: _graphql_catalogoGetHijosByCod_gql__WEBPACK_IMPORTED_MODULE_4__["GET_CATALOGOSHJS_BY_CODFTHR"],
                  variables: {
                    codigo_catalogo: 'STDPDD'
                  },
                  fetchPolicy: 'network-only'
                });

              case 3:
                mtrlTmp = _context.sent;

                if (!(typeof mtrlTmp.data != 'undefined')) {
                  _context.next = 11;
                  break;
                }

                if (!(mtrlTmp.data.catalogosHijosXCod.length > 0)) {
                  _context.next = 11;
                  break;
                }

                this.estadosPedido = mtrlTmp.data.catalogosHijosXCod;
                indexSel = that.estadosPedido.findIndex(function (x) {
                  return x.id_catalogo === 0;
                });

                if (!(indexSel >= 0)) {
                  that.estadosPedido.splice(0, 0, {
                    id_catalogo: 0,
                    valor: 'Seleccione un estado'
                  });
                }

                that.selectedEstPdd = 0;
                return _context.abrupt("return");

              case 11:
                this.estadosPedido = [];

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEstadosPedido() {
        return _getEstadosPedido.apply(this, arguments);
      }

      return getEstadosPedido;
    }(),
    traerProductosPedidos: function () {
      var _traerProductosPedidos = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(idestpdd, idcli, numpdd) {
        var prodcrt;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.vtable.bolLoading = true;
                _context2.next = 3;
                return this.$apollo.query({
                  query: _graphql_pedidosRealizados_gql__WEBPACK_IMPORTED_MODULE_2__["GET_PRODS_PEDIDOS"],
                  variables: {
                    id_estado_pedido: idestpdd,
                    id_cliente: idcli,
                    numero_pedido: numpdd
                  },
                  fetchPolicy: 'network-only'
                });

              case 3:
                prodcrt = _context2.sent;
                this.vtable.bolLoading = false;

                if (!(typeof prodcrt.data != 'undefined')) {
                  _context2.next = 12;
                  break;
                }

                if (!(prodcrt.data.pedidosRealizados.length > 0)) {
                  _context2.next = 12;
                  break;
                }

                this.vtable.productos = prodcrt.data.pedidosRealizados;
                this.vtable.selected = prodcrt.data.pedidosRealizados[0].id_pedido;
                this.numeropedidoSelPDFRpt = prodcrt.data.pedidosRealizados[0].numero_pedido;

                if (prodcrt.data.pedidosRealizados[0].codigo_estado_pedido == 'PDDNVDD') {
                  this.bolCompletarPedido = true;
                  this.numeropedidoSelTbl = prodcrt.data.pedidosRealizados[0].numero_pedido;
                } else {
                  this.bolCompletarPedido = false;
                }

                return _context2.abrupt("return");

              case 12:
                this.vtable.productos = [];
                this.vtable.selected = null;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function traerProductosPedidos(_x, _x2, _x3) {
        return _traerProductosPedidos.apply(this, arguments);
      }

      return traerProductosPedidos;
    }(),
    getUsuariosData: function () {
      var _getUsuariosData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var usrs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.formbuscarcli.vtableclientes.bolLoading = true;
                _context3.next = 3;
                return this.$apollo.query({
                  query: _graphql_usersTblGetById_gql__WEBPACK_IMPORTED_MODULE_3__["GET_USERSTBL_BY_ID"],
                  variables: {
                    id: null,
                    cod_role: 'CUSTOMER'
                  },
                  fetchPolicy: 'network-only'
                });

              case 3:
                usrs = _context3.sent;
                this.formbuscarcli.vtableclientes.bolLoading = false;

                if (!(typeof usrs.data != 'undefined')) {
                  _context3.next = 9;
                  break;
                }

                if (!(usrs.data.usuariotbl.length > 0)) {
                  _context3.next = 9;
                  break;
                }

                this.formbuscarcli.vtableclientes.clientes = usrs.data.usuariotbl;
                return _context3.abrupt("return");

              case 9:
                this.formbuscarcli.vtableclientes.clientes = [];
                this.formbuscarcli.vtableclientes.selected = null;

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUsuariosData() {
        return _getUsuariosData.apply(this, arguments);
      }

      return getUsuariosData;
    }(),
    onCloseSelCliente: function onCloseSelCliente() {
      this.formbuscarcli.vtableclientes.selected = null;
      this.idclientesel = null;
      this.nombrecliente = '';
      this.bolShowModalSCli = false;
    },
    selCliente: function selCliente() {
      this.idclientesel = this.formbuscarcli.vtableclientes.selected;
      this.bolShowModalSCli = false;
    },
    onFilterPedidos: function onFilterPedidos() {
      this.traerProductosPedidos(this.selectedEstPdd, this.idclientesel, this.numeropedido);
    },
    onDonePedidoCompletado: function onDonePedidoCompletado() {
      var that = this;
      this.bolPedidoCompletadoOk = true;
      this.showModalCompletarPedido = false;
      this.onFilterPedidos();
      setTimeout(function () {
        that.bolPedidoCompletadoOk = false;
      }, 3000);
    },
    verPDFReportPedido: function verPDFReportPedido() {
      var fd = new FormData();
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': window.csrf_token
      };
      var strBaseUrl = this.$store.getters.getBaseUrl;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = strBaseUrl;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.post['Accept'] = 'application/pdf';
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.getters.getAuthAccessToken;
      fd.append('numpdd', this.numeropedidoSelPDFRpt);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        url: strBaseUrl + '/getpdfreport',
        data: fd,
        method: 'post',
        responseType: 'blob'
      }).then(function (res) {
        var url = window.URL.createObjectURL(new Blob([res.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'detalle_pedido_' + that.numeropedidoSelPDFRpt + '.pdf');
        document.body.appendChild(link);
        link.click();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntr.highlight {\n    background: #91B1EB;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PedidosRealizados.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=template&id=e46960cc&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=template&id=e46960cc& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c(
          "b-form",
          [
            _c(
              "b-form-group",
              { attrs: { label: "Estado del pedido:", "label-for": "estpdd" } },
              [
                _c("b-form-select", {
                  attrs: {
                    name: "estpdd",
                    options: _vm.estadosPedido,
                    "value-field": "id_catalogo",
                    "text-field": "valor"
                  },
                  model: {
                    value: _vm.selectedEstPdd,
                    callback: function($$v) {
                      _vm.selectedEstPdd = $$v
                    },
                    expression: "selectedEstPdd"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-input-group",
              { staticClass: "mt-2 mb-2", attrs: { prepend: "Cliente:" } },
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
                            staticStyle: {
                              "font-size": "1em",
                              color: "#F4E939"
                            }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "search" }
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
                                  _c("td", [
                                    _vm._v(_vm._s(item.telefono_fijo))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(item.telefono_celular))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.direccion))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(item.nombre_completo))
                                  ])
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
                                return _vm.onCloseSelCliente()
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
                              "\n                                Seleccionar\n                            "
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
              "b-form-group",
              { attrs: { label: "Número de pedido:", "label-for": "numpdd" } },
              [
                _c("b-form-input", {
                  attrs: { name: "numpdd" },
                  model: {
                    value: _vm.numeropedido,
                    callback: function($$v) {
                      _vm.numeropedido = $$v
                    },
                    expression: "numeropedido"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "b-button",
              {
                staticClass: "float-right mb-4 mt-2",
                attrs: { disabled: _vm.vtable.bolLoading, variant: "primary" },
                on: {
                  click: function($event) {
                    return _vm.onFilterPedidos()
                  }
                }
              },
              [
                _c("b-spinner", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.vtable.bolLoading,
                      expression: "vtable.bolLoading"
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
                        value: !_vm.vtable.bolLoading,
                        expression: "!vtable.bolLoading"
                      }
                    ],
                    staticStyle: { "font-size": "1em", color: "#CFFF68" }
                  },
                  [_c("font-awesome-icon", { attrs: { icon: "filter" } })],
                  1
                ),
                _vm._v("\n                    Filtrar\n                ")
              ],
              1
            ),
            _vm._v(" "),
            _c("br", { staticClass: "clear-float" })
          ],
          1
        ),
        _vm._v(" "),
        _c("br", { staticClass: "clear-float" }),
        _vm._v(" "),
        _c(
          "v-app",
          { staticClass: "mt-4", attrs: { id: "inspire" } },
          [
            _c("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                headers: _vm.vtable.headers,
                items: _vm.vtable.productos,
                loading: _vm.vtable.bolLoading,
                "item-key": "id_pedido"
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
                            highlight: item.id_pedido === _vm.vtable.selected
                          },
                          on: {
                            click: function($event) {
                              _vm.vtable.selected = item.id_pedido
                            }
                          }
                        },
                        [
                          _c("td", [_vm._v(_vm._s(item.numero_pedido))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.estado_pedido))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.nombre_cliente))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.referencia_cod_prov))]),
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
                          _c("td", [_vm._v(_vm._s(item.cantidad_producto))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.precio_unitario))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.precio_total))])
                        ]
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("ApolloMutation", {
              attrs: {
                mutation: __webpack_require__(/*! ../../../graphql/pedidoCompletar.gql */ "./resources/js/graphql/pedidoCompletar.gql")
                  .default,
                variables: {
                  numero_pedido: _vm.numeropedidoSelTbl
                }
              },
              on: { done: _vm.onDonePedidoCompletado },
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
                              value: _vm.bolPedidoCompletadoOk,
                              expression: "bolPedidoCompletadoOk"
                            }
                          ],
                          attrs: { variant: "success", show: "" }
                        },
                        [_vm._v("Pedido procesado con éxito.")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "float-right" },
                        [
                          _c(
                            "b-button",
                            {
                              staticClass: "float-right mt-4 ml-2 mr-2",
                              attrs: {
                                disabled: _vm.numeropedidoSelPDFRpt == "",
                                variant: "outline-primary"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.verPDFReportPedido()
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
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "font-size": "1em",
                                    color: "Tomato"
                                  }
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: "file-pdf" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(
                                "\n                                Ver pedido\n                            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "float-right mt-4",
                              attrs: {
                                disabled: !_vm.bolCompletarPedido || loading,
                                variant: "primary"
                              },
                              on: {
                                click: function($event) {
                                  _vm.showModalCompletarPedido = true
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
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !loading,
                                      expression: "!loading"
                                    }
                                  ],
                                  staticStyle: {
                                    "font-size": "1em",
                                    color: "#CFFF68"
                                  }
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: "cogs" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(
                                "\n                                Completar pedido\n                            "
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
                          ref: "modalConfirmCompletarPedido",
                          attrs: {
                            "hide-footer": "",
                            title: "Confirmar pedido"
                          }
                        },
                        [
                          _c("p", { staticClass: "my-4" }, [
                            _vm._v(
                              "¿Está seguro que desea completar el pedido?"
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "clearfix" }),
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
                                    "\n                                    Aceptar\n                                "
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
                                      _vm.showModalCompletarPedido = false
                                    }
                                  }
                                },
                                [_vm._v("Cancelar")]
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Listado de pedidos realizados")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/graphql/pedidoCompletar.gql":
/*!**************************************************!*\
  !*** ./resources/js/graphql/pedidoCompletar.gql ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    pedidoCompletar
    (
        $numero_pedido: String
    )
    {
        pedidoCompletar
        (
            numero_pedido: $numero_pedido
        )
        {
            message
            __typename
        }
    }
`);

/***/ }),

/***/ "./resources/js/graphql/pedidosRealizados.gql":
/*!****************************************************!*\
  !*** ./resources/js/graphql/pedidosRealizados.gql ***!
  \****************************************************/
/*! exports provided: GET_PRODS_PEDIDOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODS_PEDIDOS", function() { return GET_PRODS_PEDIDOS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_PRODS_PEDIDOS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
pedidosRealizados 
    (
        $id_estado_pedido: Int,
        $id_cliente: Int,
        $numero_pedido: String
    ) 
    {
        pedidosRealizados
        (
            id_estado_pedido: $id_estado_pedido,
            id_cliente: $id_cliente,
            numero_pedido: $numero_pedido
        )
        {
            id_pedido
            numero_pedido
            nombre_cliente
            codigo_estado_pedido
            estado_pedido
            id_productocrrt
            referencia_cod_prov
            nombre_producto
            descripcion
            id_archivo_subido_img
            url_imagen_lowres_uid
            url_imagen_original_uid
            cantidad_producto
            precio_unitario
            precio_total
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

/***/ "./resources/js/pages/vue-cart/components/PedidosRealizados.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/PedidosRealizados.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PedidosRealizados_vue_vue_type_template_id_e46960cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PedidosRealizados.vue?vue&type=template&id=e46960cc& */ "./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=template&id=e46960cc&");
/* harmony import */ var _PedidosRealizados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PedidosRealizados.vue?vue&type=script&lang=js& */ "./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PedidosRealizados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PedidosRealizados.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PedidosRealizados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PedidosRealizados_vue_vue_type_template_id_e46960cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PedidosRealizados_vue_vue_type_template_id_e46960cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/vue-cart/components/PedidosRealizados.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PedidosRealizados.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PedidosRealizados.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=template&id=e46960cc&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=template&id=e46960cc& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_template_id_e46960cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PedidosRealizados.vue?vue&type=template&id=e46960cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/vue-cart/components/PedidosRealizados.vue?vue&type=template&id=e46960cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_template_id_e46960cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PedidosRealizados_vue_vue_type_template_id_e46960cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);