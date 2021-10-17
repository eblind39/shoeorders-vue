(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SecOpcionMenuForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecOpcionMenuForm.vue */ "./resources/js/pages/SecOpcionMenuForm.vue");
/* harmony import */ var _graphql_secOpcionMenuGetById_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/secOpcionMenuGetById.gql */ "./resources/js/graphql/secOpcionMenuGetById.gql");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SecOpcionMenuForm: _SecOpcionMenuForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['showModalOptMnu', 'showModalDelOptMnu', 'resMsgDelOptMnu', 'modoEdicion', 'currentNodeId', 'currentNodeDesc', 'jsonNewNode'],
  data: function data() {
    return {
      bolValsRegGets: false,
      id_optmenu_padre: null,
      descripcion: '',
      ruta: '',
      componente_ruta: '',
      nombre_ruta: '',
      es_form_registro: false,
      icon_fa: '',
      imagen: '',
      tip: '',
      show: true //usado por el form

    };
  },
  watch: {
    'showModalOptMnu': function showModalOptMnu(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalNewOptMnu'].show();
        this.onReset();
        this.determineModMode();
      } else {
        this.$emit('update:showModalOptMnu', false);
        this.$refs['modalNewOptMnu'].hide();
        this.bolValsRegGets = false;
      }
    },
    'showModalDelOptMnu': function showModalDelOptMnu(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalDelOptMnu'].show();
      } else {
        this.$emit('update:showModalDelOptMnu', false);
        this.$refs['modalDelOptMnu'].hide();
      }
    }
  },
  methods: {
    onDone: function onDone(data) {
      if (this.modoEdicion == 'C') {
        this.$emit('update:jsonNewNode', data.data.secOpcionMenuCreate);
      }

      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.$emit('update:jsonNewNode', data.data.secOpcionMenuUpdate);
      }

      this.$emit('update:showModalOptMnu', false);
    },
    onDoneCBDel: function onDoneCBDel(data) {
      this.$emit('update:showModalDelOptMnu', false);
      this.$emit('update:resMsgDelOptMnu', data.data.secOpcionMenuDelete);
    },
    onClose: function onClose() {
      this.$emit('update:showModalOptMnu', false);
    },
    onCloseDelOptMnu: function onCloseDelOptMnu() {
      this.$emit('update:showModalDelOptMnu', false);
    },
    onReset: function onReset(evt) {
      var _this = this;

      if (typeof evt != 'undefined') evt.preventDefault(); // Reset our form values

      this.id_optmenu_padre = null;
      this.descripcion = '';
      this.ruta = '';
      this.componente_ruta = '';
      this.nombre_ruta = '';
      this.es_form_registro = false;
      this.icon_fa = '';
      this.imagen = '';
      this.tip = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    },
    determineModMode: function determineModMode() {
      /*if (this.modoEdicion=='C') { }*/
      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.getOptMenu();
      }
    },
    getOptMenu: function () {
      var _getOptMenu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var optmnu, item;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof this.currentNodeId == 'undefined')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return this.$apollo.query({
                  query: _graphql_secOpcionMenuGetById_gql__WEBPACK_IMPORTED_MODULE_2__["GET_SEC_OPTMENU_BY_ID"],
                  variables: {
                    id: this.currentNodeId
                  },
                  fetchPolicy: 'network-only'
                });

              case 4:
                optmnu = _context.sent;

                if (typeof optmnu.data != 'undefined') {
                  item = optmnu.data.secOpcionMenu;
                  this.$emit('update:currentNodeId', item.id_opcion_menu);
                  this.id_optmenu_padre = item.id_opcion_menu_padre;
                  this.$emit('update:currentNodeDesc', item.currentNodeDesc);
                  this.descripcion = item.descripcion;
                  this.ruta = item.ruta;
                  this.componente_ruta = item.componente_ruta;
                  this.nombre_ruta = item.nombre_ruta;
                  this.es_form_registro = item.es_form_registro;
                  this.icon_fa = item.icon_fa;
                  this.imagen = item.imagen;
                  this.tip = item.tip;
                  this.bolValsRegGets = true;
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getOptMenu() {
        return _getOptMenu.apply(this, arguments);
      }

      return getOptMenu;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecOpcionMenuForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['modoEdicion', 'bolValsRegGets', 'currentNodeDesc', 'currentNodeId', 'id_optmenu_padre', 'descripcion', 'ruta', 'componente_ruta', 'nombre_ruta', 'es_form_registro', 'icon_fa', 'imagen', 'tip'],
  data: function data() {
    return {
      idoptmnupdr: null,
      currnoddescr: this.currentNodeDesc,
      currnodid: this.currentNodeId,
      descr: '',
      rut: '',
      comprut: '',
      nombrut: '',
      esfrmreg: null,
      icnfa: '',
      img: '',
      tptp: ''
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
    currnoddescr: function currnoddescr(n, o) {
      this.$emit('update:currentNodeDesc', n);
    },
    currnodid: function currnodid(n, o) {
      this.$emit('update:currentNodeId', n);
    },
    idoptmnupdr: function idoptmnupdr(n, o) {
      this.$emit('update:id_optmenu_padre', n);
    },
    descr: function descr(n, o) {
      this.$emit('update:descripcion', n);
    },
    rut: function rut(n, o) {
      this.$emit('update:ruta', n);
    },
    comprut: function comprut(n, o) {
      this.$emit('update:componente_ruta', n);
    },
    nombrut: function nombrut(n, o) {
      this.$emit('update:nombre_ruta', n);
    },
    esfrmreg: function esfrmreg(n, o) {
      this.$emit('update:es_form_registro', n);
    },
    icnfa: function icnfa(n, o) {
      this.$emit('update:icon_fa', n);
    },
    img: function img(n, o) {
      this.$emit('update:imagen', n);
    },
    tptp: function tptp(n, o) {
      this.$emit('update:tip', n);
    }
  },
  methods: {
    syncVals: function syncVals() {
      this.currnoddescr = this.currentNodeDesc;
      this.currnodid = this.currentNodeId;
      this.idoptmnupdr = this.id_optmenu_padre;
      this.descr = this.descripcion;
      this.rut = this.ruta;
      this.comprut = this.componente_ruta;
      this.nombrut = this.nombre_ruta;
      this.esfrmreg = this.es_form_registro;
      this.icnfa = this.icon_fa;
      this.img = this.imagen;
      this.tptp = this.tip;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionesMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecOpcionesMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SecOpcionMenuCRUD_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecOpcionMenuCRUD.vue */ "./resources/js/pages/SecOpcionMenuCRUD.vue");
/* harmony import */ var _graphql_secOpcionMenuGetTree_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/secOpcionMenuGetTree.gql */ "./resources/js/graphql/secOpcionMenuGetTree.gql");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    OpcionMenuCrud: _SecOpcionMenuCRUD_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var that = this;
    this.$refs.treeOptsMnu.$on('node:clicked', function (node) {
      // if (node.data.inode) {
      //     that.getTreeData(node.id, node);
      // }
      that.currentNode = node;
      that.currentNodeId = node.id;
      that.currentNodeDesc = node.text; //console.log(that.currentNode);
    });
    this.$refs.treeOptsMnu.$on('node:expanded', function (node, newnode) {
      node.data.expanded = true;
    });
    this.$refs.treeOptsMnu.$on('node:collapsed', function (node, newnode) {
      node.data.expanded = false;
    });
    this.$refs.treeOptsMnu.$on('node:added', function (node, newnode) {// console.log(newnode);
    });
    this.$refs.treeOptsMnu.$on('tree:mounted', function (treecmp) {
      that.getTreeData(null);
    });
  },
  data: function data() {
    return {
      showModalOptMnu: false,
      showModalDelOptMnu: false,
      resMsgDelOptMnu: '',
      modoEdicion: '',
      treeData: [],
      currentNode: null,
      currentNodeId: null,
      currentNodeDesc: null,
      jsonNewNode: {},
      optnsTree: {
        keyboardNavigation: true,
        propertyNames: {
          'text': 'label'
        }
      }
    };
  },
  watch: {
    jsonNewNode: function jsonNewNode(newval, oldval) {
      if (this.modoEdicion == 'C' && Object.keys(newval).length > 0) {
        var jstmp = {
          id: newval.id_opcion_menu,
          label: newval.descripcion,
          icon: newval.icon_fa,
          esfrmreg: newval.es_form_registro,
          inode: false,
          esloadedchlds: false
        };
        this.addChildNode(this.currentNode, jstmp);
      }

      if (this.modoEdicion == 'U' && Object.keys(newval).length > 0) {
        this.currentNode.id = newval.id_opcion_menu;
        this.currentNode.text = newval.descripcion;
        this.icon = newval.icon_fa;
        this.data = {
          esfrmreg: newval.es_form_registro,
          inode: newval.inode,
          esloadedchlds: false
        };
      }
    },
    resMsgDelOptMnu: function resMsgDelOptMnu(newval, oldval) {
      if (newval == 'OK') {
        var nodoPadre = this.currentNode.parent;
        this.$refs.treeOptsMnu.remove(this.currentNode);
        this.currentNode = null;
        this.currentNodeId = null;
        this.currentNodeDesc = null;
        this.resMsgDelOptMnu = '';
        nodoPadre.data.inode = nodoPadre.hasChildren();
      }
    }
  },
  methods: {
    // async getTreeData(idPadre, nodePadre) {
    //     if (typeof nodePadre != 'undefined' && nodePadre.data.esloadedchlds) return;
    //     let optsmnutree = await this.$apollo.query({ query: GET_SEC_OPTSMENU_TREE, variables: { id: idPadre } });
    //     if (typeof optsmnutree.data != 'undefined') {
    //         var that = this;
    //         optsmnutree.data.secOpcionesMenuTree.forEach((item, index) => {
    //             if (idPadre == null) that.nuevoRoot(item);
    //             else that.addChildNode(nodePadre, item);
    //         });
    //     }
    //     if (typeof nodePadre != 'undefined') nodePadre.data.esloadedchlds = true;
    // },
    getTreeData: function () {
      var _getTreeData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(idPadre, nodePadre) {
        var _this = this;

        var optsmnutree, that, nodeAdded;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$apollo.query({
                  query: _graphql_secOpcionMenuGetTree_gql__WEBPACK_IMPORTED_MODULE_2__["GET_SEC_OPTSMENU_TREE"],
                  variables: {
                    id: idPadre
                  },
                  fetchPolicy: 'network-only'
                });

              case 2:
                optsmnutree = _context.sent;

                if (!(typeof optsmnutree.data != 'undefined')) {
                  _context.next = 10;
                  break;
                }

                that = this, nodeAdded = null;

                if (!(optsmnutree.data.secOpcionesMenuTree.length == 0)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                optsmnutree.data.secOpcionesMenuTree.forEach(function (item, index) {
                  if (idPadre == null) nodeAdded = that.nuevoRoot(item);else nodeAdded = that.addChildNode(nodePadre, item);
                  if (nodeAdded.parent != null) {
                    if (nodeAdded.data.inode) _this.getTreeData(nodeAdded.parent.id, nodeAdded);else return;
                  } else if (item.inode) _this.getTreeData(item.id, nodeAdded);else return;
                });
                _context.next = 11;
                break;

              case 10:
                return _context.abrupt("return");

              case 11:
                if (typeof nodePadre != 'undefined' && nodePadre.hasChildren()) nodePadre.expand(); //nodePadre.data.esloadedchlds = true;

                return _context.abrupt("return");

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTreeData(_x, _x2) {
        return _getTreeData.apply(this, arguments);
      }

      return getTreeData;
    }(),
    addChildNode: function addChildNode(node, item) {
      // add a new children item
      var nuevoNodo = null;
      nuevoNodo = node.append(this.getJSONDataNode(item));
      node.data.inode = true;
      node.expand();
      node.data.expanded = true;
      return nuevoNodo;
    },
    nuevoRoot: function nuevoRoot(item) {
      // add a new root item
      return this.$refs.treeOptsMnu.append(this.getJSONDataNode(item));
    },
    getJSONDataNode: function getJSONDataNode(item) {
      return {
        id: item.id,
        text: item.label,
        icon: item.icon,
        data: {
          esfrmreg: item.esfrmreg,
          inode: item.inode,
          esloadedchlds: false,
          expanded: false
        },
        state: {
          selected: false
        }
      };
    },
    mostrarModal: function mostrarModal(edmode) {
      if (edmode == 'D') {
        if (this.currentNode.hasChildren()) {
          this.$refs.modalNoDelete.show();
          return;
        }

        this.showModalDelOptMnu = true;
        this.showModalOptMnu = false;
      } else {
        this.modoEdicion = edmode;
        this.showModalDelOptMnu = false;
        this.showModalOptMnu = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        "b-modal",
        {
          ref: "modalNewOptMnu",
          attrs: { "hide-footer": "", title: "Nueva opción de menú" },
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
            attrs: {
              mutation: __webpack_require__(/*! ../graphql/secOpcionMenuCreate.gql */ "./resources/js/graphql/secOpcionMenuCreate.gql").default,
              variables: {
                id_opcion_menu_padre: _vm.currentNodeId,
                descripcion: _vm.descripcion,
                ruta: _vm.ruta,
                componente_ruta: _vm.componente_ruta,
                nombre_ruta: _vm.nombre_ruta,
                es_form_registro: _vm.es_form_registro,
                icon_fa: _vm.icon_fa,
                imagen: _vm.imagen,
                tip: _vm.tip
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
                    _c("sec-opcion-menu-form", {
                      attrs: {
                        modoEdicion: _vm.modoEdicion,
                        bolValsRegGets: _vm.bolValsRegGets,
                        currentNodeDesc: _vm.currentNodeDesc,
                        currentNodeId: _vm.currentNodeId,
                        id_optmenu_padre: _vm.id_optmenu_padre,
                        descripcion: _vm.descripcion,
                        ruta: _vm.ruta,
                        componente_ruta: _vm.componente_ruta,
                        nombre_ruta: _vm.nombre_ruta,
                        es_form_registro: _vm.es_form_registro,
                        icon_fa: _vm.icon_fa,
                        imagen: _vm.imagen,
                        tip: _vm.tip
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
                        "update:currentNodeDesc": function($event) {
                          _vm.currentNodeDesc = $event
                        },
                        "update:current-node-desc": function($event) {
                          _vm.currentNodeDesc = $event
                        },
                        "update:currentNodeId": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:current-node-id": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:id_optmenu_padre": function($event) {
                          _vm.id_optmenu_padre = $event
                        },
                        "update:descripcion": function($event) {
                          _vm.descripcion = $event
                        },
                        "update:ruta": function($event) {
                          _vm.ruta = $event
                        },
                        "update:componente_ruta": function($event) {
                          _vm.componente_ruta = $event
                        },
                        "update:nombre_ruta": function($event) {
                          _vm.nombre_ruta = $event
                        },
                        "update:es_form_registro": function($event) {
                          _vm.es_form_registro = $event
                        },
                        "update:icon_fa": function($event) {
                          _vm.icon_fa = $event
                        },
                        "update:imagen": function($event) {
                          _vm.imagen = $event
                        },
                        "update:tip": function($event) {
                          _vm.tip = $event
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
                            attrs: { disabled: loading, variant: "primary" },
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
                              "\n                        Guardar\n                    "
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
            attrs: {
              mutation: __webpack_require__(/*! ../graphql/secOpcionMenuUpdate.gql */ "./resources/js/graphql/secOpcionMenuUpdate.gql").default,
              variables: {
                id_opcion_menu: _vm.currentNodeId,
                id_opcion_menu_padre: _vm.id_optmenu_padre,
                descripcion: _vm.descripcion,
                ruta: _vm.ruta,
                componente_ruta: _vm.componente_ruta,
                nombre_ruta: _vm.nombre_ruta,
                es_form_registro: _vm.es_form_registro,
                icon_fa: _vm.icon_fa,
                imagen: _vm.imagen,
                tip: _vm.tip
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
                    _c("sec-opcion-menu-form", {
                      attrs: {
                        modoEdicion: _vm.modoEdicion,
                        bolValsRegGets: _vm.bolValsRegGets,
                        currentNodeDesc: _vm.currentNodeDesc,
                        currentNodeId: _vm.currentNodeId,
                        id_optmenu_padre: _vm.id_optmenu_padre,
                        descripcion: _vm.descripcion,
                        ruta: _vm.ruta,
                        componente_ruta: _vm.componente_ruta,
                        nombre_ruta: _vm.nombre_ruta,
                        es_form_registro: _vm.es_form_registro,
                        icon_fa: _vm.icon_fa,
                        imagen: _vm.imagen,
                        tip: _vm.tip
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
                        "update:currentNodeDesc": function($event) {
                          _vm.currentNodeDesc = $event
                        },
                        "update:current-node-desc": function($event) {
                          _vm.currentNodeDesc = $event
                        },
                        "update:currentNodeId": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:current-node-id": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:id_optmenu_padre": function($event) {
                          _vm.id_optmenu_padre = $event
                        },
                        "update:descripcion": function($event) {
                          _vm.descripcion = $event
                        },
                        "update:ruta": function($event) {
                          _vm.ruta = $event
                        },
                        "update:componente_ruta": function($event) {
                          _vm.componente_ruta = $event
                        },
                        "update:nombre_ruta": function($event) {
                          _vm.nombre_ruta = $event
                        },
                        "update:es_form_registro": function($event) {
                          _vm.es_form_registro = $event
                        },
                        "update:icon_fa": function($event) {
                          _vm.icon_fa = $event
                        },
                        "update:imagen": function($event) {
                          _vm.imagen = $event
                        },
                        "update:tip": function($event) {
                          _vm.tip = $event
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
                                value: !(_vm.modoEdicion === "R"),
                                expression: "!(modoEdicion==='R')"
                              }
                            ],
                            attrs: { disabled: loading, variant: "primary" },
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
                              "\n                        Guardar\n                    "
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
          ref: "modalDelOptMnu",
          attrs: { "hide-footer": "", title: "Eliminar opción de menú" }
        },
        [
          _c("ApolloMutation", {
            attrs: {
              mutation: __webpack_require__(/*! ../graphql/secOpcionMenuDelete.gql */ "./resources/js/graphql/secOpcionMenuDelete.gql").default,
              variables: { id_opcion_menu: _vm.currentNodeId }
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
                              "\n                        Aceptar\n                    "
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
                                return _vm.onCloseDelOptMnu()
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !(_vm.modoEdicion === "R" || _vm.modoEdicion === "U"),
              expression: "!(modoEdicion==='R' || modoEdicion==='U')"
            }
          ],
          attrs: {
            label: "Descripción menú padre",
            "label-for": "descripcion_menu_padre"
          }
        },
        [
          _c("b-form-input", {
            attrs: { name: "descripcion_menu_padre", disabled: "" },
            model: {
              value: _vm.currnoddescr,
              callback: function($$v) {
                _vm.currnoddescr = $$v
              },
              expression: "currnoddescr"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Descripción", "label-for": "descripcion" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "descripcion",
              disabled: _vm.esDisabled,
              required: "",
              autofocus: "",
              placeholder: ""
            },
            model: {
              value: _vm.descr,
              callback: function($$v) {
                _vm.descr = $$v
              },
              expression: "descr"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Ruta", "label-for": "ruta" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "ruta",
              disabled: _vm.esDisabled,
              required: "",
              placeholder: ""
            },
            model: {
              value: _vm.rut,
              callback: function($$v) {
                _vm.rut = $$v
              },
              expression: "rut"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Componente Ruta", "label-for": "componente_ruta" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "componente_ruta",
              disabled: _vm.esDisabled,
              required: "",
              placeholder: ""
            },
            model: {
              value: _vm.comprut,
              callback: function($$v) {
                _vm.comprut = $$v
              },
              expression: "comprut"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Nombre Ruta", "label-for": "nombre_ruta" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "nombre_ruta",
              disabled: _vm.esDisabled,
              required: "",
              placeholder: ""
            },
            model: {
              value: _vm.nombrut,
              callback: function($$v) {
                _vm.nombrut = $$v
              },
              expression: "nombrut"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        [
          _c(
            "b-form-checkbox",
            {
              attrs: { disabled: _vm.esDisabled, name: "es_form_registro" },
              model: {
                value: _vm.esfrmreg,
                callback: function($$v) {
                  _vm.esfrmreg = $$v
                },
                expression: "esfrmreg"
              }
            },
            [_vm._v("\n                Es FormRegistro\n            ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Icon fa", "label-for": "icon_fa" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "icon_fa",
              disabled: _vm.esDisabled,
              required: "",
              placeholder: ""
            },
            model: {
              value: _vm.icnfa,
              callback: function($$v) {
                _vm.icnfa = $$v
              },
              expression: "icnfa"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Imagen", "label-for": "imagen" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "imagen",
              disabled: _vm.esDisabled,
              required: "",
              placeholder: ""
            },
            model: {
              value: _vm.img,
              callback: function($$v) {
                _vm.img = $$v
              },
              expression: "img"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Tip", "label-for": "tip" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "tip",
              disabled: _vm.esDisabled,
              required: "",
              placeholder: ""
            },
            model: {
              value: _vm.tptp,
              callback: function($$v) {
                _vm.tptp = $$v
              },
              expression: "tptp"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionesMenu.vue?vue&type=template&id=1892ff4b&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecOpcionesMenu.vue?vue&type=template&id=1892ff4b& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "b-card",
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
                            attrs: { variant: "secondary" },
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
                            attrs: { variant: "secondary" },
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
                            attrs: { variant: "secondary" },
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
              ],
              1
            ),
            _vm._v(" "),
            _c("opcion-menu-crud", {
              attrs: {
                showModalOptMnu: _vm.showModalOptMnu,
                showModalDelOptMnu: _vm.showModalDelOptMnu,
                resMsgDelOptMnu: _vm.resMsgDelOptMnu,
                modoEdicion: _vm.modoEdicion,
                currentNodeId: _vm.currentNodeId,
                currentNodeDesc: _vm.currentNodeDesc,
                jsonNewNode: _vm.jsonNewNode
              },
              on: {
                "update:showModalOptMnu": function($event) {
                  _vm.showModalOptMnu = $event
                },
                "update:show-modal-opt-mnu": function($event) {
                  _vm.showModalOptMnu = $event
                },
                "update:showModalDelOptMnu": function($event) {
                  _vm.showModalDelOptMnu = $event
                },
                "update:show-modal-del-opt-mnu": function($event) {
                  _vm.showModalDelOptMnu = $event
                },
                "update:resMsgDelOptMnu": function($event) {
                  _vm.resMsgDelOptMnu = $event
                },
                "update:res-msg-del-opt-mnu": function($event) {
                  _vm.resMsgDelOptMnu = $event
                },
                "update:modoEdicion": function($event) {
                  _vm.modoEdicion = $event
                },
                "update:modo-edicion": function($event) {
                  _vm.modoEdicion = $event
                },
                "update:currentNodeId": function($event) {
                  _vm.currentNodeId = $event
                },
                "update:current-node-id": function($event) {
                  _vm.currentNodeId = $event
                },
                "update:currentNodeDesc": function($event) {
                  _vm.currentNodeDesc = $event
                },
                "update:current-node-desc": function($event) {
                  _vm.currentNodeDesc = $event
                },
                "update:jsonNewNode": function($event) {
                  _vm.jsonNewNode = $event
                },
                "update:json-new-node": function($event) {
                  _vm.jsonNewNode = $event
                }
              }
            }),
            _vm._v(" "),
            _c(
              "b-card",
              { staticClass: "mt-2" },
              [
                _c("tree", {
                  ref: "treeOptsMnu",
                  attrs: { data: _vm.treeData, options: _vm.optnsTree },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var node = ref.node
                        return _c(
                          "span",
                          { staticClass: "tree-text" },
                          [
                            node.data.inode
                              ? [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "1em",
                                        color: "#74A9D4"
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !node.data.expanded,
                                            expression: "!node.data.expanded"
                                          }
                                        ],
                                        attrs: { icon: "folder" }
                                      }),
                                      _vm._v(" "),
                                      _c("font-awesome-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: node.data.expanded,
                                            expression: "node.data.expanded"
                                          }
                                        ],
                                        attrs: { icon: "folder-open" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(node.text) +
                                      "\n                        "
                                  )
                                ]
                              : [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "1em",
                                        color: "#8c9cab"
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        attrs: { icon: "file" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(node.text) +
                                      "\n                        "
                                  )
                                ]
                          ],
                          2
                        )
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
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalNoDelete",
          attrs: { "ok-only": "", "ok-title": "Aceptar" }
        },
        [
          _c("label", [
            _vm._v(
              "No es posible eliminar una opción de menú que tiene dependencias"
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Mantenimiento de opciones de menú")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/graphql/secOpcionMenuCreate.gql":
/*!******************************************************!*\
  !*** ./resources/js/graphql/secOpcionMenuCreate.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    secOpcionMenuCreate
    (
        $id_opcion_menu_padre: Int,
        $descripcion: String!,
        $ruta: String,
        $componente_ruta: String,
        $nombre_ruta: String,
        $es_form_registro: Boolean,
        $icon_fa: String,
        $imagen: String,
        $tip: String
    ) 
    {
        secOpcionMenuCreate
        (
            id_opcion_menu_padre: $id_opcion_menu_padre,
            descripcion: $descripcion,
            ruta: $ruta,
            componente_ruta: $componente_ruta,
            nombre_ruta: $nombre_ruta,
            es_form_registro: $es_form_registro,
            icon_fa: $icon_fa,
            imagen: $imagen,
            tip: $tip
        )
        {
            id_opcion_menu
            id_opcion_menu_padre
            descripcion
            ruta
            componente_ruta
            nombre_ruta
            es_form_registro
            icon_fa
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/secOpcionMenuDelete.gql":
/*!******************************************************!*\
  !*** ./resources/js/graphql/secOpcionMenuDelete.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    secOpcionMenuDelete
    (
        $id_opcion_menu: Int!,
    ) 
    {
        secOpcionMenuDelete
        (
            id_opcion_menu: $id_opcion_menu,
        )
    }`);

/***/ }),

/***/ "./resources/js/graphql/secOpcionMenuGetById.gql":
/*!*******************************************************!*\
  !*** ./resources/js/graphql/secOpcionMenuGetById.gql ***!
  \*******************************************************/
/*! exports provided: GET_SEC_OPTMENU_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEC_OPTMENU_BY_ID", function() { return GET_SEC_OPTMENU_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_SEC_OPTMENU_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query secOpcionMenu($id: Int!) {
    secOpcionMenu(id_opcion_menu: $id) {
        id_opcion_menu
        id_opcion_menu_padre
        descripcion
        ruta
        componente_ruta
        nombre_ruta
        es_form_registro
        icon_fa
        imagen
        tip
        __typename
    }
}`;

/***/ }),

/***/ "./resources/js/graphql/secOpcionMenuGetTree.gql":
/*!*******************************************************!*\
  !*** ./resources/js/graphql/secOpcionMenuGetTree.gql ***!
  \*******************************************************/
/*! exports provided: GET_SEC_OPTSMENU_TREE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEC_OPTSMENU_TREE", function() { return GET_SEC_OPTSMENU_TREE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_SEC_OPTSMENU_TREE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
secOpcionesMenuTree
    (
        $id: Int
    ) 
    {
        secOpcionesMenuTree(id: $id) 
        {
            id
            label
            icon
            esfrmreg
            inode
            open
            __typename
        }
}`;

/***/ }),

/***/ "./resources/js/graphql/secOpcionMenuUpdate.gql":
/*!******************************************************!*\
  !*** ./resources/js/graphql/secOpcionMenuUpdate.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    secOpcionMenuUpdate
    (
        $id_opcion_menu: Int!,
        $id_opcion_menu_padre: Int,
        $descripcion: String!,
        $ruta: String,
        $componente_ruta: String,
        $nombre_ruta: String,
        $es_form_registro: Boolean,
        $icon_fa: String,
        $imagen: String,
        $tip: String
    ) 
    {
        secOpcionMenuUpdate
        (
            id_opcion_menu: $id_opcion_menu,
            id_opcion_menu_padre: $id_opcion_menu_padre,
            descripcion: $descripcion,
            ruta: $ruta,
            componente_ruta: $componente_ruta,
            nombre_ruta: $nombre_ruta,
            es_form_registro: $es_form_registro,
            icon_fa: $icon_fa,
            imagen: $imagen,
            tip: $tip
        )
        {
            id_opcion_menu
            id_opcion_menu_padre
            descripcion
            ruta
            componente_ruta
            nombre_ruta
            es_form_registro
            icon_fa
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/pages/SecOpcionMenuCRUD.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/SecOpcionMenuCRUD.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecOpcionMenuCRUD_vue_vue_type_template_id_9475384a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a& */ "./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a&");
/* harmony import */ var _SecOpcionMenuCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecOpcionMenuCRUD.vue?vue&type=script&lang=js& */ "./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SecOpcionMenuCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecOpcionMenuCRUD_vue_vue_type_template_id_9475384a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SecOpcionMenuCRUD_vue_vue_type_template_id_9475384a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SecOpcionMenuCRUD.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SecOpcionMenuCRUD.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuCRUD_vue_vue_type_template_id_9475384a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuCRUD.vue?vue&type=template&id=9475384a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuCRUD_vue_vue_type_template_id_9475384a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuCRUD_vue_vue_type_template_id_9475384a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/SecOpcionMenuForm.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/SecOpcionMenuForm.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecOpcionMenuForm_vue_vue_type_template_id_1f3bee81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81& */ "./resources/js/pages/SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81&");
/* harmony import */ var _SecOpcionMenuForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecOpcionMenuForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/SecOpcionMenuForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SecOpcionMenuForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecOpcionMenuForm_vue_vue_type_template_id_1f3bee81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SecOpcionMenuForm_vue_vue_type_template_id_1f3bee81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SecOpcionMenuForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SecOpcionMenuForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/SecOpcionMenuForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SecOpcionMenuForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuForm_vue_vue_type_template_id_1f3bee81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionMenuForm.vue?vue&type=template&id=1f3bee81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuForm_vue_vue_type_template_id_1f3bee81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionMenuForm_vue_vue_type_template_id_1f3bee81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/SecOpcionesMenu.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/SecOpcionesMenu.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecOpcionesMenu_vue_vue_type_template_id_1892ff4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecOpcionesMenu.vue?vue&type=template&id=1892ff4b& */ "./resources/js/pages/SecOpcionesMenu.vue?vue&type=template&id=1892ff4b&");
/* harmony import */ var _SecOpcionesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecOpcionesMenu.vue?vue&type=script&lang=js& */ "./resources/js/pages/SecOpcionesMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SecOpcionesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecOpcionesMenu_vue_vue_type_template_id_1892ff4b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SecOpcionesMenu_vue_vue_type_template_id_1892ff4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SecOpcionesMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SecOpcionesMenu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/SecOpcionesMenu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SecOpcionesMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionesMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SecOpcionesMenu.vue?vue&type=template&id=1892ff4b&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/SecOpcionesMenu.vue?vue&type=template&id=1892ff4b& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionesMenu_vue_vue_type_template_id_1892ff4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SecOpcionesMenu.vue?vue&type=template&id=1892ff4b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecOpcionesMenu.vue?vue&type=template&id=1892ff4b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionesMenu_vue_vue_type_template_id_1892ff4b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecOpcionesMenu_vue_vue_type_template_id_1892ff4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);