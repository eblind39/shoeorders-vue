(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecAccesos.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SecRolesCRUD_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecRolesCRUD.vue */ "./resources/js/pages/SecRolesCRUD.vue");
/* harmony import */ var _AuthRegisterPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthRegisterPage.vue */ "./resources/js/pages/AuthRegisterPage.vue");
/* harmony import */ var _graphql_secOpcionMenuGetTree_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/secOpcionMenuGetTree.gql */ "./resources/js/graphql/secOpcionMenuGetTree.gql");
/* harmony import */ var _graphql_usersGetByRoleId_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/usersGetByRoleId.gql */ "./resources/js/graphql/usersGetByRoleId.gql");
/* harmony import */ var _graphql_secOpcionMenuGetByRole_gql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/secOpcionMenuGetByRole.gql */ "./resources/js/graphql/secOpcionMenuGetByRole.gql");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SecRolesCrud: _SecRolesCRUD_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AuthRegisterPage: _AuthRegisterPage_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    var that = this;
    this.$refs.treeOptsMnu.$on('node:clicked', function (node) {
      that.currentNode = node;
      that.currentNodeId = node.id;
      that.currentNodeDesc = node.text;
    });
    this.$refs.treeOptsMnu.$on('tree:mounted', function (treecmp) {
      that.getTreeData(null);
    });
    this.$refs.treeOptsMnu.$on('node:expanded', function (node, newnode) {
      node.data.expanded = true;
    });
    this.$refs.treeOptsMnu.$on('node:collapsed', function (node, newnode) {
      node.data.expanded = false;
    });
  },
  data: function data() {
    return {
      showModalDelUsr: false,
      showRegUsrModal: false,
      bolSimpleForm: false,
      bolShowValidate: false,
      strValidationMsg: '',
      modoEdicionUsr: '',
      bolEliminandoUsr: false,
      idrolesel: null,
      strIdsOptsMnu: '',
      strIdsUsers: '',
      optnsTree: {
        keyboardNavigation: true,
        checkbox: true,
        propertyNames: {
          'text': 'label'
        },
        filter: {
          emptyText: 'No hay coincidencias.'
        }
      },
      treeData: [],
      cssTree: {
        fontSize: '1.2em;'
      },
      vtable: {
        search: '',
        bolLoading: false,
        loadingtxt: '',
        selected: null,
        headers: [{
          text: 'Usuario',
          align: 'left',
          sortable: false,
          value: 'username'
        }, {
          text: 'Nombre completo',
          value: 'nombre_completo'
        }, {
          text: 'E-mail',
          value: 'email'
        }],
        usersbyrole: []
      }
    };
  },
  watch: {
    'showModalDelUsr': function showModalDelUsr(newval, oldval) {
      if (newval) {
        this.$refs.modalDelUser.show();
      } else {
        this.$refs.modalDelUser.hide();
      }
    }
  },
  methods: {
    saveAcceso: function saveAcceso() {
      if (this.$refs.crudRoles.selrol == null) {
        this.bolShowValidate = true;
        this.strValidationMsg = 'Seleccione un rol';
        return;
      }

      this.bolShowValidate = false;
      this.idrolesel = this.$refs.crudRoles.selrol;
      var selection = this.$refs.treeOptsMnu.findAll({
        state: {
          checked: true
        }
      });

      if (selection == null) {
        this.bolShowValidate = true;
        this.strValidationMsg = 'Seleccione al menos una opción de menú';
        return;
      }

      this.bolShowValidate = false;
      var usrsbrl = this.vtable.usersbyrole;

      if (usrsbrl.length == 0) {
        this.bolShowValidate = true;
        this.strValidationMsg = 'Asocie al menos un usuario al rol seleccionado';
        return;
      }

      this.bolShowValidate = false; // MUTATE

      var strTmp = '';

      for (var i = 0; i < selection.length; i++) {
        strTmp += selection[i].id.toString() + ',';
      }

      this.strIdsOptsMnu = strTmp.substring(0, strTmp.length - 1);
      var strTmp = '';

      for (var i = 0; i < usrsbrl.length; i++) {
        strTmp += usrsbrl[i].id.toString() + ',';
      }

      this.strIdsUsers = strTmp.substring(0, strTmp.length - 1);
      this.$refs.btnSaveAcceso.disabled = true;
      this.$refs.mutVincAccss.mutate({
        variables: {
          id_role: this.idrolesel,
          ids_optsmnu: this.strIdsOptsMnu,
          ids_users: this.strIdsUsers
        }
      });
    },
    mostrarModalUsr: function mostrarModalUsr(edmode) {
      if (edmode == 'D') {
        // this.showModalDelUsr = true;
        this.showRegUsrModal = false;
        var that = this;
        this.$fire({
          text: '¿Está seguro que desea eliminar el usuario seleccionado?',
          type: 'question',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then(function (r) {
          if (r.value) {
            that.deleteUser();
          }
        });
      } else {
        this.modoEdicionUsr = edmode; // this.showModalDelUsr = false;

        this.showRegUsrModal = true;
      }
    },
    getNewUsr: function getNewUsr(newval) {
      this.vtable.usersbyrole.push(newval);
    },
    getUpdtdUsr: function getUpdtdUsr(updtval) {
      this.getUsersByRoleId(this.$refs.crudRoles.selrol, updtval.id);
    },
    getTblDeldUsr: function getTblDeldUsr() {
      var _this = this;

      var index = this.vtable.usersbyrole.findIndex(function (x) {
        return x.id === _this.vtable.selected;
      });
      if (index !== undefined) this.vtable.usersbyrole.splice(index, 1);
    },
    getUsersByRole: function getUsersByRole(roleId) {
      this.idrolesel = roleId;

      if (typeof roleId == 'undefined' || roleId == null) {
        this.vtable.usersbyrole = [];
        this.vtable.loadingtxt = 'No hay usuarios asignados';
      }

      this.getUsersByRoleId(roleId, null);
      this.getOptsMenuAsignadas(roleId);
    },
    getTreeData: function () {
      var _getTreeData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(idPadre, nodePadre) {
        var _this2 = this;

        var optsmnutree, that, nodeAdded;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$apollo.query({
                  query: _graphql_secOpcionMenuGetTree_gql__WEBPACK_IMPORTED_MODULE_3__["GET_SEC_OPTSMENU_TREE"],
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

                if (!(optsmnutree.data.secOpcionesMenuTree.legth == 0)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                optsmnutree.data.secOpcionesMenuTree.forEach(function (item, index) {
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
    getOptsMenuAsignadas: function () {
      var _getOptsMenuAsignadas = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(roleId) {
        var that, selection, optsmnutree;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this; // , nodeUnChk = null

                if (!(typeof roleId == 'undefined' || roleId == null)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                // uncheck checked nodes
                selection = this.$refs.treeOptsMnu.findAll({
                  state: {
                    checked: true
                  }
                });
                if (selection != null) selection.uncheck();
                _context2.next = 7;
                return this.$apollo.query({
                  query: _graphql_secOpcionMenuGetByRole_gql__WEBPACK_IMPORTED_MODULE_5__["GET_SEC_OPTMENU_BY_ROLEID"],
                  variables: {
                    id_role: roleId
                  },
                  fetchPolicy: 'network-only'
                }).then(function (res) {
                  var nodeChk = null;

                  if (typeof res.data != 'undefined' || res.data != null) {
                    var optsmnu = res.data.optsmenuXRol;

                    for (var i = 0; i < optsmnu.length; i++) {
                      var nodeChk = that.$refs.treeOptsMnu.find({
                        id: optsmnu[i].id_opcion_menu
                      });
                      if (nodeChk != null) nodeChk.check();
                    }
                  }
                });

              case 7:
                optsmnutree = _context2.sent;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getOptsMenuAsignadas(_x3) {
        return _getOptsMenuAsignadas.apply(this, arguments);
      }

      return getOptsMenuAsignadas;
    }(),
    addChildNode: function addChildNode(node, item) {
      // add a new children item
      return node.append(this.getJSONDataNode(item));
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
    getUsersByRoleId: function () {
      var _getUsersByRoleId = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(idRole, intIdUsr) {
        var that;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.vtable.bolLoading = true;
                axios.defaults.headers.common = {
                  'X-Requested-With': 'XMLHttpRequest',
                  'X-CSRF-TOKEN': window.csrf_token
                };
                axios.defaults.baseURL = this.$store.getters.getBaseUrl;
                axios.defaults.headers.post['Accept'] = 'application/json';
                axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.getters.getAuthAccessToken;
                that = this;
                that.vtable.loadingtxt = 'Cargando por favor espere';
                axios.post("/api/usersbyrole", {
                  roleid: idRole
                }).then(function (res) {
                  that.vtable.bolLoading = false;
                  if (res.data.users.length == 0) that.vtable.loadingtxt = 'No hay usuarios asignados';else that.vtable.loadingtxt = '';

                  if (typeof intIdUsr != 'undefined' && intIdUsr != null) {
                    // viene de actualizar
                    var indexO = that.vtable.usersbyrole.findIndex(function (x) {
                      return x.id === intIdUsr;
                    });
                    var indexN = res.data.users.findIndex(function (x) {
                      return x.id === intIdUsr;
                    });
                    if (indexO >= 0 && indexN >= 0) that.vtable.usersbyrole.splice(indexO, 1, res.data.users[indexN]);
                  } else {
                    that.vtable.usersbyrole = res.data.users;
                    that.vtable.selected = null;
                  }
                })["catch"](function (err) {
                  that.vtable.loadingtxt = '';
                  that.errormsg = err.message;
                  that.vtable.bolLoading = false;
                  that.vtable.selected = null;
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUsersByRoleId(_x4, _x5) {
        return _getUsersByRoleId.apply(this, arguments);
      }

      return getUsersByRoleId;
    }(),
    deleteUser: function deleteUser() {
      this.bolEliminandoUsr = true;
      axios.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': window.csrf_token
      };
      axios.defaults.baseURL = this.$store.getters.getBaseUrl;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      var that = this,
          endpoint = '';
      endpoint = '/api/deleteuser';
      axios.post(endpoint, {
        "id": this.vtable.selected
      }).then(function (response) {
        that.bolEliminandoUsr = false;
        that.showModalDelUsr = false;
        that.$refs['modalDelUser'].hide();

        if (response.userdeleted == 'OK') {
          that.getTblDeldUsr(response.data.userdeleted);
          that.vtable.selected = null;
        }

        that.$fire({
          text: 'Se eliminó el usuario.',
          type: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        }).then(function (r) {
          if (r.value) {
            console.log('Usuario eliminado');
            that.getUsersByRoleId(that.$refs.crudRoles.selrol, that.vtable.selected);
          }
        });
      })["catch"](function (error) {
        that.bolEliminandoUsr = false;
        that.vtable.selected = null;
        console.log(error);
      });
    },
    onDoneVincAccss: function onDoneVincAccss(data) {
      this.$refs.btnSaveAcceso.disabled = false;
      var that = this;

      if (data != null) {
        if (data.data.accesosVincularXRoleId == 'OK') {
          var that = this;
          this.$fire({
            text: 'La configuración se guardó de manera exitosa.',
            type: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar'
          }).then(function (r) {
            if (r.value) {
              console.log('Vínculo realizado');
            }
          });
        }
      }
    },
    onErrorVincAccss: function onErrorVincAccss() {
      this.$refs.btnSaveAcceso.disabled = false;
    },
    onUserCreateUpdate: function onUserCreateUpdate() {// console.log('this.$refs.crudRoles.selrol: ', this.$refs.crudRoles.selrol, 'this.vtable.selected: ', this.vtable.selected);
      // this.getUsersByRoleId(this.$refs.crudRoles.selrol, this.vtable.selected);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesCRUD.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecRolesCRUD.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SecRolesForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecRolesForm.vue */ "./resources/js/pages/SecRolesForm.vue");
/* harmony import */ var _graphql_secRoleGetAll_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/secRoleGetAll.gql */ "./resources/js/graphql/secRoleGetAll.gql");
/* harmony import */ var _graphql_secRoleGetById_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/secRoleGetById.gql */ "./resources/js/graphql/secRoleGetById.gql");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SecRolesForm: _SecRolesForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getRolesData(null);
  },
  data: function data() {
    return {
      bolValsRegGets: false,
      showModalRol: false,
      modoEdicion: '',
      resMsgDelRole: '',
      id: null,
      codigo: '',
      name: '',
      description: '',
      jsonNewRol: {},
      roles: [],
      selrol: null,
      modalCURole: ''
    };
  },
  watch: {
    jsonNewRol: function jsonNewRol(newval, oldval) {
      var _this = this;

      if (this.modoEdicion == 'C' && Object.keys(newval).length > 0) {
        var jstmp = {
          id: newval.id,
          codigo: newval.codigo,
          name: newval.name,
          description: newval.description
        };
        this.roles.push(jstmp);
      }

      if (this.modoEdicion == 'U' && Object.keys(newval).length > 0) {
        var index = this.roles.findIndex(function (x) {
          return x.id === _this.selrol;
        });
        this.roles[index].id = newval.id;
        this.roles[index].codigo = newval.codigo;
        this.roles[index].name = newval.name;
        this.roles[index].description = newval.description;
      }
    },

    /*selrol: function(newVal, oldVal) {
        this.id = newVal;
        this.$emit('update:roleId', newVal);
    },*/
    resMsgDelRole: function resMsgDelRole(newVal, oldVal) {
      var _this2 = this;

      if (newVal == 'OK') {
        var index = this.roles.findIndex(function (x) {
          return x.value === _this2.selrol;
        });
        if (index !== undefined) this.roles.splice(index, 1);
        this.selrol = null;
        this.id = null;
        this.codigo = '';
        this.name = null;
        this.description = '';
        this.jsonNewRol = {};
      }
    },
    'showModalRol': function showModalRol(newVal, oldVal) {
      if (newVal) {
        this.$refs['modalRol'].show();
        this.onReset();
        this.determineModMode();
      } else {
        this.showModalRol = false;
        this.$refs['modalRol'].hide();
        this.bolValsRegGets = false;
      }
    }
  },
  methods: {
    rolChanged: function rolChanged() {
      this.$parent.getUsersByRole(this.selrol);
    },
    onDone: function onDone(data) {
      var strOp = '';

      if (this.modoEdicion == 'C') {
        this.jsonNewRol = data.data.secRoleCreate;
        strOp = 'creado';
      }

      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.jsonNewRol = data.data.secRoleUpdate;
        strOp = 'actualizado';
      }

      this.showModalRol = false;

      if (this.modoEdicion == 'C' || this.modoEdicion == 'U') {
        this.$fire({
          text: 'El rol fué ' + strOp + ' con éxito.',
          type: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        }).then(function (r) {
          if (r.value) {
            console.log('rol ' + strOp);
          }
        });
      }
    },
    onDoneCBDel: function onDoneCBDel(data) {
      this.resMsgDelRole = data.data.secRoleDelete;

      if (this.resMsgDelRole != 'OK') {
        return;
      }

      var that = this;
      this.$fire({
        text: 'El rol fué eliminado.',
        type: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      }).then(function (r) {
        if (r.value) {
          console.log('rol eliminado');
          that.getRolesData(null);
        }
      });
    },
    onClose: function onClose() {
      this.showModalRol = false;
    },
    onReset: function onReset(evt) {
      var _this3 = this;

      if (typeof evt != 'undefined') evt.preventDefault(); // Reset our form values

      this.id = null;
      this.codigo = '';
      this.name = '';
      this.description = ''; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this3.show = true;
      });
    },
    getRolesData: function () {
      var _getRolesData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var rolesTmp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$apollo.query({
                  query: _graphql_secRoleGetAll_gql__WEBPACK_IMPORTED_MODULE_2__["GET_SEC_ROLES"],
                  fetchPolicy: 'network-only'
                });

              case 2:
                rolesTmp = _context.sent;

                if (!(typeof rolesTmp.data != 'undefined')) {
                  _context.next = 7;
                  break;
                }

                if (!(rolesTmp.data.secRoles.length > 0)) {
                  _context.next = 7;
                  break;
                }

                this.roles = rolesTmp.data.secRoles; // this.selrol = rolesTmp.data.secRoles[0].id;

                return _context.abrupt("return");

              case 7:
                this.roles = [];
                this.selrol = null;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getRolesData() {
        return _getRolesData.apply(this, arguments);
      }

      return getRolesData;
    }(),
    determineModMode: function determineModMode() {
      /*if (this.modoEdicion=='C') { }*/
      if (this.modoEdicion == 'U' || this.modoEdicion == 'R') {
        this.getRoleById();
      }
    },
    getRoleById: function () {
      var _getRoleById = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var role, item;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof this.selrol == 'undefined' || this.selrol == null)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.$apollo.query({
                  query: _graphql_secRoleGetById_gql__WEBPACK_IMPORTED_MODULE_3__["GET_SEC_ROLE_BY_ID"],
                  variables: {
                    id: this.selrol
                  },
                  fetchPolicy: 'network-only'
                });

              case 4:
                role = _context2.sent;

                if (typeof role.data != 'undefined') {
                  item = role.data.secRole;
                  this.id = item.id;
                  this.codigo = item.codigo;
                  this.name = item.name;
                  this.description = item.description;
                  this.bolValsRegGets = true;
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getRoleById() {
        return _getRoleById.apply(this, arguments);
      }

      return getRoleById;
    }(),
    mostrarModal: function mostrarModal(edmode) {
      if (edmode == 'D') {
        this.showModalRol = false;
        var that = this;
        this.$fire({
          text: '¿Está seguro que desea eliminar el rol seleccionado?',
          type: 'question',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then(function (r) {
          if (r.value) {
            that.$refs.mutDeleteRol.mutate();
          }
        });
      } else {
        this.modoEdicion = edmode;
        this.showModalRol = true;
      }

      if (edmode == 'C') this.modalCURole = 'Nuevo rol';
      if (edmode == 'U') this.modalCURole = 'Editar rol';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecRolesForm.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['modoEdicion', 'bolValsRegGets', 'id', 'codigo', 'name', 'description'],
  data: function data() {
    return {
      idrol: null,
      codrol: '',
      nomrol: '',
      descrrol: ''
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
    codrol: function codrol(n, o) {
      this.$emit('update:codigo', n);
    },
    nomrol: function nomrol(n, o) {
      this.$emit('update:name', n);
    },
    descrrol: function descrrol(n, o) {
      this.$emit('update:description', n);
    }
  },
  methods: {
    syncVals: function syncVals() {
      this.codrol = this.codigo;
      this.nomrol = this.name;
      this.descrrol = this.description;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntr.highlight {\n    background: rgb(145, 176, 235);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SecAccesos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=template&id=5b86726a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecAccesos.vue?vue&type=template&id=5b86726a& ***!
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("ApolloMutation", {
            ref: "mutVincAccss",
            attrs: {
              mutation: __webpack_require__(/*! ../graphql/vincularAccesosRolesUsers.gql */ "./resources/js/graphql/vincularAccesosRolesUsers.gql")
                .default
            },
            on: { done: _vm.onDoneVincAccss, error: _vm.onErrorVincAccss },
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
                                    ref: "btnSaveAcceso",
                                    attrs: { variant: "secondary" },
                                    on: {
                                      click: function($event) {
                                        return _vm.saveAcceso()
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
                                        _c("font-awesome-icon", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !loading,
                                              expression: "!loading"
                                            }
                                          ],
                                          attrs: { icon: "save" }
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
                            value: _vm.bolShowValidate,
                            expression: "bolShowValidate"
                          }
                        ],
                        attrs: { variant: "warning", show: "" }
                      },
                      [_vm._v(_vm._s(_vm.strValidationMsg))]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("sec-roles-crud", { ref: "crudRoles" }),
          _vm._v(" "),
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
                              "\n                        " +
                                _vm._s(node.text) +
                                "\n                    "
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
                              "\n                        " +
                                _vm._s(node.text) +
                                "\n                    "
                            )
                          ]
                    ],
                    2
                  )
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("auth-register-page", {
            attrs: {
              showRegUsrModal: _vm.showRegUsrModal,
              bolSimpleForm: _vm.bolSimpleForm,
              modoEdicionUsr: _vm.modoEdicionUsr,
              idusr: _vm.vtable.selected
            },
            on: {
              onUserCreate: function($event) {
                return _vm.onUserCreateUpdate()
              },
              onUserUpdate: function($event) {
                return _vm.onUserCreateUpdate()
              },
              "update:showRegUsrModal": function($event) {
                _vm.showRegUsrModal = $event
              },
              "update:show-reg-usr-modal": function($event) {
                _vm.showRegUsrModal = $event
              },
              "update:bolSimpleForm": function($event) {
                _vm.bolSimpleForm = $event
              },
              "update:bol-simple-form": function($event) {
                _vm.bolSimpleForm = $event
              },
              "update:modoEdicionUsr": function($event) {
                _vm.modoEdicionUsr = $event
              },
              "update:modo-edicion-usr": function($event) {
                _vm.modoEdicionUsr = $event
              },
              "update:idusr": function($event) {
                return _vm.$set(_vm.vtable, "selected", $event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "b-input-group",
                    {
                      staticClass: "mt-2 mb-2",
                      attrs: { prepend: "Usuarios:" }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Buscar...",
                          "single-line": "",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.vtable.search,
                          callback: function($$v) {
                            _vm.$set(_vm.vtable, "search", $$v)
                          },
                          expression: "vtable.search"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                disabled: _vm.idrolesel == null,
                                variant: "secondary"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.mostrarModalUsr("C")
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
                                disabled: _vm.vtable.selected == null,
                                variant: "secondary"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.mostrarModalUsr("U")
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
                                disabled: _vm.vtable.selected == null,
                                variant: "secondary"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.mostrarModalUsr("D")
                                }
                              }
                            },
                            [
                              _c("b-spinner", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.bolEliminandoUsr,
                                    expression: "bolEliminandoUsr"
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
                                      value: !_vm.bolEliminandoUsr,
                                      expression: "!bolEliminandoUsr"
                                    }
                                  ],
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
                            ],
                            1
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
                "v-app",
                { attrs: { id: "inspire" } },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.vtable.headers,
                      items: _vm.vtable.usersbyrole,
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
                                _c("td", [_vm._v(_vm._s(item.username))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(item.nombre_completo))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.email))])
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
      _c("h4", [_vm._v("Accesos al Sistema (Seguridad)")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesCRUD.vue?vue&type=template&id=3882cf33&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecRolesCRUD.vue?vue&type=template&id=3882cf33& ***!
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
        "b-input-group",
        { staticClass: "mt-2 mb-2", attrs: { prepend: "Rol:" } },
        [
          _c("b-form-select", {
            attrs: {
              options: _vm.roles,
              "value-field": "id",
              "text-field": "description",
              required: ""
            },
            on: {
              change: function($event) {
                return _vm.rolChanged()
              }
            },
            model: {
              value: _vm.selrol,
              callback: function($$v) {
                _vm.selrol = $$v
              },
              expression: "selrol"
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
                      return _vm.mostrarModal("C")
                    }
                  }
                },
                [
                  _c(
                    "span",
                    { staticStyle: { "font-size": "1em", color: "#F4E939" } },
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
                  attrs: { variant: "secondary", disabled: !_vm.selrol },
                  on: {
                    click: function($event) {
                      return _vm.mostrarModal("U")
                    }
                  }
                },
                [
                  _c(
                    "span",
                    { staticStyle: { "font-size": "1em", color: "#CFFF68" } },
                    [_c("font-awesome-icon", { attrs: { icon: "edit" } })],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("ApolloMutation", {
                ref: "mutDeleteRol",
                attrs: {
                  mutation: __webpack_require__(/*! ../graphql/secRoleDelete.gql */ "./resources/js/graphql/secRoleDelete.gql").default,
                  variables: { id: _vm.selrol }
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
                        _c(
                          "b-button",
                          {
                            attrs: {
                              variant: "secondary",
                              disabled: !_vm.selrol
                            },
                            on: {
                              click: function($event) {
                                return _vm.mostrarModal("D")
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
                          ],
                          1
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
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalRol",
          attrs: { "hide-footer": "", title: _vm.modalCURole },
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
              mutation: __webpack_require__(/*! ../graphql/secRoleCreate.gql */ "./resources/js/graphql/secRoleCreate.gql").default,
              variables: {
                codigo: _vm.codigo,
                name: _vm.name,
                description: _vm.description
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
                    _c("sec-roles-form", {
                      attrs: {
                        modoEdicion: _vm.modoEdicion,
                        bolValsRegGets: _vm.bolValsRegGets,
                        id: _vm.id,
                        codigo: _vm.codigo,
                        name: _vm.name,
                        description: _vm.description
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
                          _vm.id = $event
                        },
                        "update:codigo": function($event) {
                          _vm.codigo = $event
                        },
                        "update:name": function($event) {
                          _vm.name = $event
                        },
                        "update:description": function($event) {
                          _vm.description = $event
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
              mutation: __webpack_require__(/*! ../graphql/secRoleUpdate.gql */ "./resources/js/graphql/secRoleUpdate.gql").default,
              variables: {
                id: _vm.id,
                codigo: _vm.codigo,
                name: _vm.name,
                description: _vm.description
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
                    _c("sec-roles-form", {
                      attrs: {
                        modoEdicion: _vm.modoEdicion,
                        bolValsRegGets: _vm.bolValsRegGets,
                        id: _vm.id,
                        codigo: _vm.codigo,
                        name: _vm.name,
                        description: _vm.description
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
                          _vm.id = $event
                        },
                        "update:codigo": function($event) {
                          _vm.codigo = $event
                        },
                        "update:name": function($event) {
                          _vm.name = $event
                        },
                        "update:description": function($event) {
                          _vm.description = $event
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesForm.vue?vue&type=template&id=bc0d4c4e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SecRolesForm.vue?vue&type=template&id=bc0d4c4e& ***!
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
        { attrs: { label: "Código del perfil", "label-for": "codigrol" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "codigrol",
              disabled: _vm.esDisabled,
              required: "",
              autofocus: ""
            },
            model: {
              value: _vm.codrol,
              callback: function($$v) {
                _vm.codrol = $$v
              },
              expression: "codrol"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Nombre", "label-for": "nombrerol" } },
        [
          _c("b-form-input", {
            attrs: {
              name: "nombrerol",
              disabled: _vm.esDisabled,
              required: ""
            },
            model: {
              value: _vm.nomrol,
              callback: function($$v) {
                _vm.nomrol = $$v
              },
              expression: "nomrol"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form-group",
        { attrs: { label: "Descripción", "label-for": "descr" } },
        [
          _c("b-form-input", {
            attrs: { name: "descr", disabled: _vm.esDisabled },
            model: {
              value: _vm.descrrol,
              callback: function($$v) {
                _vm.descrrol = $$v
              },
              expression: "descrrol"
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

/***/ "./resources/js/graphql/secRoleCreate.gql":
/*!************************************************!*\
  !*** ./resources/js/graphql/secRoleCreate.gql ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    secRoleCreate
    (
        $codigo: String,
        $name: String,
        $description: String!,
    ) 
    {
        secRoleCreate
        (
            codigo: $codigo,
            name: $name,
            description: $description
        )
        {
            id
            codigo
            name
            description
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/secRoleDelete.gql":
/*!************************************************!*\
  !*** ./resources/js/graphql/secRoleDelete.gql ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    secRoleDelete
    (
        $id: Int!,
    ) 
    {
        secRoleDelete
        (
            id: $id,
        )
    }`);

/***/ }),

/***/ "./resources/js/graphql/secRoleGetAll.gql":
/*!************************************************!*\
  !*** ./resources/js/graphql/secRoleGetAll.gql ***!
  \************************************************/
/*! exports provided: GET_SEC_ROLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEC_ROLES", function() { return GET_SEC_ROLES; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_SEC_ROLES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query secRoles {
    secRoles {
        id
        codigo
        name
        description
        __typename
    }
}`;

/***/ }),

/***/ "./resources/js/graphql/secRoleGetById.gql":
/*!*************************************************!*\
  !*** ./resources/js/graphql/secRoleGetById.gql ***!
  \*************************************************/
/*! exports provided: GET_SEC_ROLE_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEC_ROLE_BY_ID", function() { return GET_SEC_ROLE_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_SEC_ROLE_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query secRole($id: Int!) {
    secRole(id: $id) {
        id
        codigo
        name
        description
        __typename
    }
}`;

/***/ }),

/***/ "./resources/js/graphql/secRoleUpdate.gql":
/*!************************************************!*\
  !*** ./resources/js/graphql/secRoleUpdate.gql ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    secRoleUpdate
    (
        $id: Int!,
        $codigo: String,
        $name: String!,
        $description: String
    ) 
    {
        secRoleUpdate
        (
            id: $id,
            codigo: $codigo,
            name: $name,
            description: $description
        )
        {
            id
            codigo
            name
            description
            __typename
        }
}`);

/***/ }),

/***/ "./resources/js/graphql/usersGetByRoleId.gql":
/*!***************************************************!*\
  !*** ./resources/js/graphql/usersGetByRoleId.gql ***!
  \***************************************************/
/*! exports provided: GET_USERS_BY_ROLEID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS_BY_ROLEID", function() { return GET_USERS_BY_ROLEID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


const GET_USERS_BY_ROLEID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query 
    usersByRoleId
    (
        $id_role: Int!
    ) 
    {
        usersByRoleId
        (
            id_role: $id_role
        ) 
        {
            id
            cedula
            direccion
            email
            id_archivo_subido_img
            id_ciudad
            id_zona
            nombre_completo
            talla_zapato
            telefono_celular
            telefono_fijo
            username
            id_tipo_pago
            limite_credito
            costo_por_envio
            __typename
        }
}`;

/***/ }),

/***/ "./resources/js/graphql/vincularAccesosRolesUsers.gql":
/*!************************************************************!*\
  !*** ./resources/js/graphql/vincularAccesosRolesUsers.gql ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`mutation 
    accesosVincularXRoleId
    (
        $id_role: Int,
        $ids_optsmnu: String,
        $ids_users: String
    )
    {
        accesosVincularXRoleId
        (
            id_role: $id_role,
            ids_optsmnu: $ids_optsmnu,
            ids_users: $ids_users
        )
}`);

/***/ }),

/***/ "./resources/js/pages/SecAccesos.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/SecAccesos.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecAccesos_vue_vue_type_template_id_5b86726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecAccesos.vue?vue&type=template&id=5b86726a& */ "./resources/js/pages/SecAccesos.vue?vue&type=template&id=5b86726a&");
/* harmony import */ var _SecAccesos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecAccesos.vue?vue&type=script&lang=js& */ "./resources/js/pages/SecAccesos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SecAccesos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecAccesos.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SecAccesos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecAccesos_vue_vue_type_template_id_5b86726a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SecAccesos_vue_vue_type_template_id_5b86726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SecAccesos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SecAccesos.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/SecAccesos.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SecAccesos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./SecAccesos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/SecAccesos.vue?vue&type=template&id=5b86726a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/SecAccesos.vue?vue&type=template&id=5b86726a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_template_id_5b86726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SecAccesos.vue?vue&type=template&id=5b86726a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecAccesos.vue?vue&type=template&id=5b86726a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_template_id_5b86726a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecAccesos_vue_vue_type_template_id_5b86726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/SecRolesCRUD.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/SecRolesCRUD.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecRolesCRUD_vue_vue_type_template_id_3882cf33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecRolesCRUD.vue?vue&type=template&id=3882cf33& */ "./resources/js/pages/SecRolesCRUD.vue?vue&type=template&id=3882cf33&");
/* harmony import */ var _SecRolesCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecRolesCRUD.vue?vue&type=script&lang=js& */ "./resources/js/pages/SecRolesCRUD.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SecRolesCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecRolesCRUD_vue_vue_type_template_id_3882cf33___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SecRolesCRUD_vue_vue_type_template_id_3882cf33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SecRolesCRUD.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SecRolesCRUD.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/SecRolesCRUD.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SecRolesCRUD.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesCRUD.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesCRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SecRolesCRUD.vue?vue&type=template&id=3882cf33&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/SecRolesCRUD.vue?vue&type=template&id=3882cf33& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesCRUD_vue_vue_type_template_id_3882cf33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SecRolesCRUD.vue?vue&type=template&id=3882cf33& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesCRUD.vue?vue&type=template&id=3882cf33&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesCRUD_vue_vue_type_template_id_3882cf33___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesCRUD_vue_vue_type_template_id_3882cf33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/SecRolesForm.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/SecRolesForm.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecRolesForm_vue_vue_type_template_id_bc0d4c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecRolesForm.vue?vue&type=template&id=bc0d4c4e& */ "./resources/js/pages/SecRolesForm.vue?vue&type=template&id=bc0d4c4e&");
/* harmony import */ var _SecRolesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecRolesForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/SecRolesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SecRolesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecRolesForm_vue_vue_type_template_id_bc0d4c4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SecRolesForm_vue_vue_type_template_id_bc0d4c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SecRolesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SecRolesForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/SecRolesForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SecRolesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SecRolesForm.vue?vue&type=template&id=bc0d4c4e&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/SecRolesForm.vue?vue&type=template&id=bc0d4c4e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesForm_vue_vue_type_template_id_bc0d4c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SecRolesForm.vue?vue&type=template&id=bc0d4c4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SecRolesForm.vue?vue&type=template&id=bc0d4c4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesForm_vue_vue_type_template_id_bc0d4c4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SecRolesForm_vue_vue_type_template_id_bc0d4c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);