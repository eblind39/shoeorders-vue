(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoCRUD.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CatalogoCRUD.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CatalogoForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogoForm.vue */ "./resources/js/pages/CatalogoForm.vue");
/* harmony import */ var _graphql_catalogoGetById_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/catalogoGetById.gql */ "./resources/js/graphql/catalogoGetById.gql");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CatalogoForm: _CatalogoForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['showModalCat', 'showModalDelCat', 'bolHideCatPadre', 'resMsgDelCat', 'modoEdicion', 'currentNodeId', 'currentNodeVal', 'jsonNewNode'],
  data: function data() {
    return {
      bolValsRegGets: false,
      form: {
        id_catalogo_padre: null,
        codigo_catalogo: '',
        valor: ''
      },
      show: true //usado por el form

    };
  },
  watch: {
    'showModalCat': function showModalCat(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalNewCat'].show();
        this.onReset();
        this.determineModMode();
      } else {
        this.$emit('update:showModalCat', false);
        this.$refs['modalNewCat'].hide();
        this.bolValsRegGets = false;
      }
    },
    'showModalDelCat': function showModalDelCat(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalDelCat'].show();
      } else {
        this.$emit('update:showModalDelCat', false);
        this.$refs['modalDelCat'].hide();
      }
    }
  },
  methods: {
    onDone: function onDone(data) {
      if (this.modoEdicion == 'C' || this.modoEdicion == 'CNR') {
        this.$emit('update:jsonNewNode', data.data.catalogoCreate);
      }

      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.$emit('update:jsonNewNode', data.data.catalogoUpdate);
      }

      this.$emit('update:showModalCat', false);
    },
    onDoneCBDel: function onDoneCBDel(data) {
      this.$emit('update:showModalDelCat', false);
      this.$emit('update:resMsgDelCat', data.data.catalogoDelete);
    },
    onClose: function onClose() {
      this.$emit('update:showModalCat', false);
    },
    onCloseDelCat: function onCloseDelCat() {
      this.$emit('update:showModalDelCat', false);
    },
    onReset: function onReset(evt) {
      var _this = this;

      if (typeof evt != 'undefined') evt.preventDefault(); // Reset our form values

      this.form.id_catalogo_padre = null;
      this.form.codigo_catalogo = '';
      this.form.valor = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    },
    determineModMode: function determineModMode() {
      /*if (this.modoEdicion=='C') { }*/
      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.getCat();
      }
    },
    getCat: function () {
      var _getCat = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var cat, item;
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
                  query: _graphql_catalogoGetById_gql__WEBPACK_IMPORTED_MODULE_2__["GET_CATALOGO_BY_ID"],
                  variables: {
                    id_catalogo: this.currentNodeId
                  },
                  fetchPolicy: 'network-only'
                });

              case 4:
                cat = _context.sent;

                if (typeof cat.data != 'undefined') {
                  item = cat.data.catalogo;
                  this.$emit('update:currentNodeId', item.id_catalogo);
                  this.form.id_catalogo_padre = item.id_catalogo_padre; // this.$emit('update:currentNodeDesc', item.currentNodeDesc);

                  this.form.codigo_catalogo = item.codigo_catalogo;
                  this.form.valor = item.valor;
                  this.bolValsRegGets = true;
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCat() {
        return _getCat.apply(this, arguments);
      }

      return getCat;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CatalogoForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['modoEdicion', 'bolValsRegGets', 'bolHideCatPadre', 'currentNodeVal', 'currentNodeId', 'id_catalogo_padre', 'codigo_catalogo', 'valor'],
  mounted: function mounted() {
    /*this.esnodoraiz = this.bolHideCatPadre;
    if (this.bolHideCatPadre) this.$refs.chkNodoRaiz.disabled=true;
    else this.$refs.chkNodoRaiz.disabled=false;*/
    if (this.bolHideCatPadre) {
      this.idcatpdr = null;
      this.$emit('update:id_catalogo_padre', null);
    }
  },
  data: function data() {
    return {
      idcatpdr: null,
      currnodval: this.currentNodeVal,
      currnodid: this.currentNodeId,
      //esnodoraiz: false,
      cod: '',
      vlr: ''
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
    currnodval: function currnodval(n, o) {
      this.$emit('update:currentNodeVal', n);
    },
    currnodid: function currnodid(n, o) {
      this.$emit('update:currentNodeId', n);
    },
    idcatpdr: function idcatpdr(n, o) {
      this.$emit('update:id_catalogo_padre', n);
    },
    cod: function cod(n, o) {
      this.$emit('update:codigo_catalogo', n);
    },
    vlr: function vlr(n, o) {
      this.$emit('update:valor', n);
    } // esnodoraiz: function(n, o) {
    //     if (this.bolHideCatPadre && n) {
    //         this.$emit('update:bolHideCatPadre', false);
    //     }
    //     if (this.bolHideCatPadre && !n) {
    //         this.$emit('update:bolHideCatPadre', true);
    //     }
    // }

  },
  methods: {
    syncVals: function syncVals() {
      this.currnodval = this.currentNodeVal;
      this.currnodid = this.currentNodeId;
      this.idcatpdr = this.id_catalogo_padre;
      this.cod = this.codigo_catalogo;
      this.vlr = this.valor;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Catalogos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Catalogos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CatalogoCRUD_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogoCRUD.vue */ "./resources/js/pages/CatalogoCRUD.vue");
/* harmony import */ var _graphql_catalogoGetTree_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/catalogoGetTree.gql */ "./resources/js/graphql/catalogoGetTree.gql");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CatalogoCrud: _CatalogoCRUD_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var that = this;
    this.$refs.treeCats.$on('node:clicked', function (node) {
      that.currentNode = node;
      that.currentNodeId = node.id;
      that.currentNodeVal = node.text;
    });
    this.$refs.treeCats.$on('node:expanded', function (node, newnode) {
      node.data.expanded = true;
    });
    this.$refs.treeCats.$on('node:collapsed', function (node, newnode) {
      node.data.expanded = false;
    });
    this.$refs.treeCats.$on('node:added', function (node, newnode) {// console.log(newnode);
    });
    this.$refs.treeCats.$on('tree:mounted', function (treecmp) {
      that.getTreeData(null);
    });
    this.$refs.btnAddChld.disabled = true;
  },
  data: function data() {
    return {
      showModalCat: false,
      showModalDelCat: false,
      bolHideCatPadre: true,
      resMsgDelCat: '',
      modoEdicion: '',
      treeData: [],
      currentNode: null,
      currentNodeId: null,
      currentNodeVal: null,
      jsonNewNode: {},
      optnsTree: {
        keyboardNavigation: true,
        propertyNames: {
          'text': 'label'
        }
      }
    };
  },
  computed: {
    createChldNodeImg: function createChldNodeImg() {
      return "".concat(window.cdn_url || '', "images/children_node.svg");
    }
  },
  watch: {
    jsonNewNode: function jsonNewNode(newval, oldval) {
      if ((this.modoEdicion == 'C' || this.modoEdicion == 'CNR') && Object.keys(newval).length > 0) {
        var jstmp = {
          id: newval.id_catalogo,
          label: newval.valor,
          inode: false,
          esloadedchlds: false
        };
        if (this.modoEdicion == 'CNR') this.nuevoRoot(jstmp);
        if (this.modoEdicion == 'C') this.addChildNode(this.currentNode, jstmp);
      }

      if (this.modoEdicion == 'U' && Object.keys(newval).length > 0) {
        this.currentNode.id = newval.id_catalogo;
        this.currentNode.text = newval.valor;
        this.data = {
          inode: newval.inode,
          esloadedchlds: false
        };
      }
    },
    resMsgDelCat: function resMsgDelCat(newval, oldval) {
      var _this = this;

      if (newval == 'OK') {
        var index = this.treeData.findIndex(function (x) {
          return x.id === _this.currentNodeId;
        });
        if (index !== undefined) this.treeData.splice(index, 1);
        var nodoPadre = this.currentNode.parent;
        this.$refs.treeCats.remove(this.currentNode);
        this.currentNode = null;
        this.currentNodeId = null;
        this.currentNodeVal = null;
        this.resMsgDelCat = '';
        nodoPadre.data.inode = nodoPadre.hasChildren();
      }
    },
    currentNode: function currentNode(newval, oldval) {
      this.$refs.btnAddChld.disabled = newval == null;
    }
  },
  methods: {
    getTreeData: function () {
      var _getTreeData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(idPadre, nodePadre) {
        var _this2 = this;

        var catstree, that, nodeAdded;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$apollo.query({
                  query: _graphql_catalogoGetTree_gql__WEBPACK_IMPORTED_MODULE_2__["GET_CATALOGOS_TREE"],
                  variables: {
                    id: idPadre
                  },
                  fetchPolicy: 'network-only'
                });

              case 2:
                catstree = _context.sent;

                if (!(typeof catstree.data != 'undefined')) {
                  _context.next = 10;
                  break;
                }

                that = this, nodeAdded = null;

                if (!(catstree.data.catalogosTree.length == 0)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                catstree.data.catalogosTree.forEach(function (item, index) {
                  if (idPadre == null) nodeAdded = that.nuevoRoot(item);else nodeAdded = that.addChildNode(nodePadre, item);
                  if (nodeAdded.parent != null) {
                    if (nodeAdded.data.inode) _this2.getTreeData(nodeAdded.parent.id, nodeAdded);else return;
                  } else if (item.inode) _this2.getTreeData(item.id, nodeAdded);else return;
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
      node.data.expanded = false; // cambiar esto si se desea animar el arbol al inicio, con sus nodos padres desplegados

      this.treeData.push(this.getJSONDataNode(item));
      return nuevoNodo;
    },
    nuevoRoot: function nuevoRoot(item) {
      // add a new root item
      this.treeData.push(this.getJSONDataNode(item));
      return this.$refs.treeCats.append(this.getJSONDataNode(item));
    },
    getJSONDataNode: function getJSONDataNode(item) {
      return {
        id: item.id,
        text: item.label,
        data: {
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

        this.showModalDelCat = true;
        this.showModalCat = false;
      } else {
        if (this.treeData.length == 0 || edmode == 'CNR') {
          this.bolHideCatPadre = true;
          this.currentNode = null;
          this.currentNodeId = null;
          this.currentNodeVal = null;
        } else this.bolHideCatPadre = false; // if (edmode=='CNR') {
        //     this.bolHideCatPadre=true;
        //     this.currentNode = null;
        //     this.currentNodeId = null;
        //     this.currentNodeVal = null;
        // }


        this.modoEdicion = edmode;
        this.showModalDelCat = false;
        this.showModalCat = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoCRUD.vue?vue&type=template&id=1f0d4886&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CatalogoCRUD.vue?vue&type=template&id=1f0d4886& ***!
  \**********************************************************************************************************************************************************************************************************/
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
          ref: "modalNewCat",
          attrs: { "hide-footer": "", title: "Nuevo catálogo" },
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
                value: _vm.modoEdicion === "C" || _vm.modoEdicion === "CNR",
                expression: "(modoEdicion==='C' || modoEdicion==='CNR')"
              }
            ],
            attrs: {
              mutation: __webpack_require__(/*! ../graphql/catalogoCreate.gql */ "./resources/js/graphql/catalogoCreate.gql").default,
              variables: {
                id_catalogo_padre: _vm.currentNodeId,
                codigo_catalogo: _vm.form.codigo_catalogo,
                valor: _vm.form.valor
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
                    _c("catalogo-form", {
                      attrs: {
                        modoEdicion: _vm.modoEdicion,
                        bolValsRegGets: _vm.bolValsRegGets,
                        bolHideCatPadre: _vm.bolHideCatPadre,
                        currentNodeVal: _vm.currentNodeVal,
                        currentNodeId: _vm.currentNodeId,
                        id_catalogo_padre: _vm.form.id_catalogo_padre,
                        codigo_catalogo: _vm.form.codigo_catalogo,
                        valor: _vm.form.valor
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
                        "update:bolHideCatPadre": function($event) {
                          _vm.bolHideCatPadre = $event
                        },
                        "update:bol-hide-cat-padre": function($event) {
                          _vm.bolHideCatPadre = $event
                        },
                        "update:currentNodeVal": function($event) {
                          _vm.currentNodeVal = $event
                        },
                        "update:current-node-val": function($event) {
                          _vm.currentNodeVal = $event
                        },
                        "update:currentNodeId": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:current-node-id": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:id_catalogo_padre": function($event) {
                          return _vm.$set(_vm.form, "id_catalogo_padre", $event)
                        },
                        "update:codigo_catalogo": function($event) {
                          return _vm.$set(_vm.form, "codigo_catalogo", $event)
                        },
                        "update:valor": function($event) {
                          return _vm.$set(_vm.form, "valor", $event)
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
                value: !(_vm.modoEdicion === "C" || _vm.modoEdicion === "CNR"),
                expression: "!(modoEdicion==='C' || modoEdicion==='CNR')"
              }
            ],
            attrs: {
              mutation: __webpack_require__(/*! ../graphql/catalogoUpdate.gql */ "./resources/js/graphql/catalogoUpdate.gql").default,
              variables: {
                id_catalogo: _vm.currentNodeId,
                id_catalogo_padre: _vm.form.id_catalogo_padre,
                codigo_catalogo: _vm.form.codigo_catalogo,
                valor: _vm.form.valor
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
                    _c("catalogo-form", {
                      attrs: {
                        modoEdicion: _vm.modoEdicion,
                        bolValsRegGets: _vm.bolValsRegGets,
                        bolHideCatPadre: _vm.bolHideCatPadre,
                        currentNodeVal: _vm.currentNodeVal,
                        currentNodeId: _vm.currentNodeId,
                        id_catalogo_padre: _vm.form.id_catalogo_padre,
                        codigo_catalogo: _vm.form.codigo_catalogo,
                        valor: _vm.form.valor
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
                        "update:bolHideCatPadre": function($event) {
                          _vm.bolHideCatPadre = $event
                        },
                        "update:bol-hide-cat-padre": function($event) {
                          _vm.bolHideCatPadre = $event
                        },
                        "update:currentNodeVal": function($event) {
                          _vm.currentNodeVal = $event
                        },
                        "update:current-node-val": function($event) {
                          _vm.currentNodeVal = $event
                        },
                        "update:currentNodeId": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:current-node-id": function($event) {
                          _vm.currentNodeId = $event
                        },
                        "update:id_catalogo_padre": function($event) {
                          return _vm.$set(_vm.form, "id_catalogo_padre", $event)
                        },
                        "update:codigo_catalogo": function($event) {
                          return _vm.$set(_vm.form, "codigo_catalogo", $event)
                        },
                        "update:valor": function($event) {
                          return _vm.$set(_vm.form, "valor", $event)
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
          ref: "modalDelCat",
          attrs: { "hide-footer": "", title: "Eliminar catálogo" }
        },
        [
          _c("ApolloMutation", {
            attrs: {
              mutation: __webpack_require__(/*! ../graphql/catalogoDelete.gql */ "./resources/js/graphql/catalogoDelete.gql").default,
              variables: { id_catalogo: _vm.currentNodeId }
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
                                return _vm.onCloseDelCat()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoForm.vue?vue&type=template&id=59efe663&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CatalogoForm.vue?vue&type=template&id=59efe663& ***!
  \**********************************************************************************************************************************************************************************************************/
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
              value: !(
                _vm.modoEdicion === "R" ||
                _vm.modoEdicion === "U" ||
                _vm.bolHideCatPadre
              ),
              expression:
                "!(modoEdicion==='R' || modoEdicion==='U' || bolHideCatPadre)"
            }
          ],
          attrs: {
            label: "Catálogo padre",
            "label-for": "descripcion_cat_padre"
          }
        },
        [
          _c("b-form-input", {
            attrs: { name: "descripcion_cat_padre", disabled: "" },
            model: {
              value: _vm.currnodval,
              callback: function($$v) {
                _vm.currnodval = $$v
              },
              expression: "currnodval"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Código", "label-for": "codigo" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "codigo",
              disabled: _vm.esDisabled,
              autofocus: "",
              required: ""
            },
            model: {
              value: _vm.cod,
              callback: function($$v) {
                _vm.cod = $$v
              },
              expression: "cod"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Valor", "label-for": "valor" } },
        [
          _c("b-form-input", {
            attrs: { name: "valor", disabled: _vm.esDisabled, placeholder: "" },
            model: {
              value: _vm.vlr,
              callback: function($$v) {
                _vm.vlr = $$v
              },
              expression: "vlr"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Catalogos.vue?vue&type=template&id=8a2403f8&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Catalogos.vue?vue&type=template&id=8a2403f8& ***!
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
                            ref: "btnAddChld",
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
                                return _vm.mostrarModal("CNR")
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
                                  attrs: { icon: "dice" }
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
            _c("catalogo-crud", {
              attrs: {
                showModalCat: _vm.showModalCat,
                showModalDelCat: _vm.showModalDelCat,
                bolHideCatPadre: _vm.bolHideCatPadre,
                resMsgDelCat: _vm.resMsgDelCat,
                modoEdicion: _vm.modoEdicion,
                currentNodeId: _vm.currentNodeId,
                currentNodeVal: _vm.currentNodeVal,
                jsonNewNode: _vm.jsonNewNode
              },
              on: {
                "update:showModalCat": function($event) {
                  _vm.showModalCat = $event
                },
                "update:show-modal-cat": function($event) {
                  _vm.showModalCat = $event
                },
                "update:showModalDelCat": function($event) {
                  _vm.showModalDelCat = $event
                },
                "update:show-modal-del-cat": function($event) {
                  _vm.showModalDelCat = $event
                },
                "update:bolHideCatPadre": function($event) {
                  _vm.bolHideCatPadre = $event
                },
                "update:bol-hide-cat-padre": function($event) {
                  _vm.bolHideCatPadre = $event
                },
                "update:resMsgDelCat": function($event) {
                  _vm.resMsgDelCat = $event
                },
                "update:res-msg-del-cat": function($event) {
                  _vm.resMsgDelCat = $event
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
                "update:currentNodeVal": function($event) {
                  _vm.currentNodeVal = $event
                },
                "update:current-node-val": function($event) {
                  _vm.currentNodeVal = $event
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
                  ref: "treeCats",
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
            _vm._v("No es posible eliminar un catálogo que tiene dependencias")
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
      _c("h4", [_vm._v("Mantenimiento de catálogos")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/graphql/catalogoCreate.gql":
/*!*************************************************!*\
  !*** ./resources/js/graphql/catalogoCreate.gql ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    catalogoCreate
    (
        $id_catalogo_padre: Int,
        $codigo_catalogo: String,
        $valor: String!,
    ) 
    {
        catalogoCreate
        (
            id_catalogo_padre: $id_catalogo_padre,
            codigo_catalogo: $codigo_catalogo,
            valor: $valor
        )
        {
            id_catalogo
            id_catalogo_padre
            codigo_catalogo
            valor
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/catalogoDelete.gql":
/*!*************************************************!*\
  !*** ./resources/js/graphql/catalogoDelete.gql ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    catalogoDelete
    (
        $id_catalogo: Int!,
    ) 
    {
        catalogoDelete
        (
            id_catalogo: $id_catalogo,
        )
    }`);

/***/ }),

/***/ "./resources/js/graphql/catalogoGetById.gql":
/*!**************************************************!*\
  !*** ./resources/js/graphql/catalogoGetById.gql ***!
  \**************************************************/
/*! exports provided: GET_CATALOGO_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATALOGO_BY_ID", function() { return GET_CATALOGO_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_CATALOGO_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
catalogo
(
    $id_catalogo: Int!
) 
{
    catalogo
    (
        id_catalogo: $id_catalogo
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

/***/ "./resources/js/graphql/catalogoGetTree.gql":
/*!**************************************************!*\
  !*** ./resources/js/graphql/catalogoGetTree.gql ***!
  \**************************************************/
/*! exports provided: GET_CATALOGOS_TREE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATALOGOS_TREE", function() { return GET_CATALOGOS_TREE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_CATALOGOS_TREE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query catalogosTree($id: Int) {
    catalogosTree(id: $id) {
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

/***/ "./resources/js/graphql/catalogoUpdate.gql":
/*!*************************************************!*\
  !*** ./resources/js/graphql/catalogoUpdate.gql ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    catalogoUpdate
    (
        $id_catalogo: Int!,
        $id_catalogo_padre: Int,
        $codigo_catalogo: String!,
        $valor: String
    ) 
    {
        catalogoUpdate
        (
            id_catalogo: $id_catalogo,
            id_catalogo_padre: $id_catalogo_padre,
            codigo_catalogo: $codigo_catalogo,
            valor: $valor
        )
        {
            id_catalogo
            id_catalogo_padre
            codigo_catalogo
            valor
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/pages/CatalogoCRUD.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/CatalogoCRUD.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CatalogoCRUD_vue_vue_type_template_id_1f0d4886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogoCRUD.vue?vue&type=template&id=1f0d4886& */ "./resources/js/pages/CatalogoCRUD.vue?vue&type=template&id=1f0d4886&");
/* harmony import */ var _CatalogoCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogoCRUD.vue?vue&type=script&lang=js& */ "./resources/js/pages/CatalogoCRUD.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CatalogoCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogoCRUD_vue_vue_type_template_id_1f0d4886___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CatalogoCRUD_vue_vue_type_template_id_1f0d4886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/CatalogoCRUD.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/CatalogoCRUD.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/CatalogoCRUD.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogoCRUD.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoCRUD.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/CatalogoCRUD.vue?vue&type=template&id=1f0d4886&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/CatalogoCRUD.vue?vue&type=template&id=1f0d4886& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoCRUD_vue_vue_type_template_id_1f0d4886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogoCRUD.vue?vue&type=template&id=1f0d4886& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoCRUD.vue?vue&type=template&id=1f0d4886&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoCRUD_vue_vue_type_template_id_1f0d4886___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoCRUD_vue_vue_type_template_id_1f0d4886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/CatalogoForm.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/CatalogoForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CatalogoForm_vue_vue_type_template_id_59efe663___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogoForm.vue?vue&type=template&id=59efe663& */ "./resources/js/pages/CatalogoForm.vue?vue&type=template&id=59efe663&");
/* harmony import */ var _CatalogoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogoForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/CatalogoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CatalogoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogoForm_vue_vue_type_template_id_59efe663___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CatalogoForm_vue_vue_type_template_id_59efe663___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/CatalogoForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/CatalogoForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/CatalogoForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogoForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/CatalogoForm.vue?vue&type=template&id=59efe663&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/CatalogoForm.vue?vue&type=template&id=59efe663& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoForm_vue_vue_type_template_id_59efe663___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogoForm.vue?vue&type=template&id=59efe663& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/CatalogoForm.vue?vue&type=template&id=59efe663&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoForm_vue_vue_type_template_id_59efe663___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogoForm_vue_vue_type_template_id_59efe663___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Catalogos.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Catalogos.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Catalogos_vue_vue_type_template_id_8a2403f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Catalogos.vue?vue&type=template&id=8a2403f8& */ "./resources/js/pages/Catalogos.vue?vue&type=template&id=8a2403f8&");
/* harmony import */ var _Catalogos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalogos.vue?vue&type=script&lang=js& */ "./resources/js/pages/Catalogos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Catalogos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Catalogos_vue_vue_type_template_id_8a2403f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Catalogos_vue_vue_type_template_id_8a2403f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Catalogos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Catalogos.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Catalogos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Catalogos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Catalogos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Catalogos.vue?vue&type=template&id=8a2403f8&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Catalogos.vue?vue&type=template&id=8a2403f8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogos_vue_vue_type_template_id_8a2403f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Catalogos.vue?vue&type=template&id=8a2403f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Catalogos.vue?vue&type=template&id=8a2403f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogos_vue_vue_type_template_id_8a2403f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalogos_vue_vue_type_template_id_8a2403f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);