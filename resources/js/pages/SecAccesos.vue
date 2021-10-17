<template>
    <div>
        <div class="card">
            <div class="card-header"><h4>Accesos al Sistema (Seguridad)</h4></div>
            <div class="card-body">
                <!-- toolbar -->
                <ApolloMutation
                    ref="mutVincAccss"
                    :mutation="require('../graphql/vincularAccesosRolesUsers.gql').default"
                    @done="onDoneVincAccss"
                    @error="onErrorVincAccss">
                    <template v-slot="{mutate, loading, called , error}">
                        <b-card>
                            <b-button-toolbar  aria-label="">
                                <b-button-group size="lg" class="mx-1">
                                        <b-button ref="btnSaveAcceso" @click="saveAcceso()" variant="secondary">
                                            <span style="font-size: 1em; color: #CFFF68;">
                                                <b-spinner type="border" small v-show="loading"></b-spinner>
                                                <font-awesome-icon v-show="!loading" icon="save" />
                                            </span>
                                        </b-button>
                                </b-button-group>
                            </b-button-toolbar>
                        </b-card>
                        <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                        <b-alert v-show="bolShowValidate" variant="warning" show>{{ strValidationMsg }}</b-alert>
                    </template>
                </ApolloMutation>
                <!-- opciones de mantenimiento de roles -->
                <sec-roles-crud ref="crudRoles"></sec-roles-crud>
                <tree ref="treeOptsMnu" :data="treeData" :options="optnsTree">
                    <span class="tree-text" slot-scope="{ node }">
                        <template v-if="node.data.inode">
                            <span style="font-size: 1em; color: #74A9D4;">
                                <font-awesome-icon v-show="!node.data.expanded" icon="folder" />
                                <font-awesome-icon v-show="node.data.expanded" icon="folder-open" />
                            </span>
                            {{ node.text }}
                        </template>
                        <template v-else>
                            <span style="font-size: 1em; color: #8c9cab;">
                                <font-awesome-icon icon="file" />
                            </span>
                            {{ node.text }}
                        </template>
                    </span>
                </tree>
                <auth-register-page 
                    @onUserCreate="onUserCreateUpdate()"
                    @onUserUpdate="onUserCreateUpdate()"
                    :showRegUsrModal.sync="showRegUsrModal" 
                    :bolSimpleForm.sync="bolSimpleForm"
                    :modoEdicionUsr.sync="modoEdicionUsr" 
                    :idusr.sync="vtable.selected">
                </auth-register-page>
                <v-card>
                    <v-card-title>
                        <b-input-group prepend="Usuarios:" class="mt-2 mb-2">
                            <v-text-field
                                v-model="vtable.search"
                                label="Buscar..."
                                single-line
                                hide-details>
                            </v-text-field>
                            <b-input-group-append>
                                <b-button @click="mostrarModalUsr('C')" :disabled="idrolesel==null" variant="secondary">
                                    <span style="font-size: 1em; color: #F4E939;">
                                        <font-awesome-icon icon="star-of-life" />
                                    </span>
                                </b-button>
                                <b-button @click="mostrarModalUsr('U')" :disabled="vtable.selected==null" variant="secondary">
                                    <span style="font-size: 1em; color: #CFFF68;">
                                        <font-awesome-icon icon="edit" />
                                    </span>
                                </b-button>
                                <b-button @click="mostrarModalUsr('D')" :disabled="vtable.selected==null" variant="secondary">
                                    <b-spinner type="border" small v-show="bolEliminandoUsr"></b-spinner>
                                    <span v-show="!bolEliminandoUsr" style="font-size: 1em; color: #F96464;">
                                        <font-awesome-icon icon="minus-circle" />
                                    </span>
                                </b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </v-card-title>
                    <v-app id="inspire">
                        <v-data-table
                            :headers="vtable.headers"
                            :items="vtable.usersbyrole"
                            :search="vtable.search"
                            :loading="vtable.bolLoading"
                            :loading-text="vtable.loadingtxt">
                            <template v-slot:item="{ item }">
                                <tr
                                    :class="{highlight:item.id===vtable.selected}" 
                                    @click="vtable.selected=item.id">
                                    <td>{{ item.username }}</td>
                                    <td>{{ item.nombre_completo }}</td>
                                    <td>{{ item.email }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-app>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script>
    import SecRolesCrud from './SecRolesCRUD.vue';
    import AuthRegisterPage from './AuthRegisterPage.vue';
    import { GET_SEC_OPTSMENU_TREE } from '../graphql/secOpcionMenuGetTree.gql';
    import { GET_USERS_BY_ROLEID } from '../graphql/usersGetByRoleId.gql';
    import { GET_SEC_OPTMENU_BY_ROLEID } from '../graphql/secOpcionMenuGetByRole.gql';

    export default {
        components: {
            SecRolesCrud,
            AuthRegisterPage,
        },
        mounted() {
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
        data() {
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
                    },
                },
                treeData: [],
                cssTree: { fontSize: '1.2em;' },
                vtable: {
                    search: '',
                    bolLoading: false,
                    loadingtxt: '',
                    selected: null,
                    headers: [
                        {text: 'Usuario', align: 'left', sortable: false, value: 'username'},
                        { text: 'Nombre completo', value: 'nombre_completo' },
                        { text: 'E-mail', value: 'email' },
                    ],
                    usersbyrole: [],
                },
            }
        },
        watch: {
            'showModalDelUsr': function(newval, oldval) {
                if (newval) {
                    this.$refs.modalDelUser.show();
                } else {
                    this.$refs.modalDelUser.hide();
                }
            },
        },
        methods: {
            saveAcceso() {
                if (this.$refs.crudRoles.selrol==null) {
                    this.bolShowValidate = true;
                    this.strValidationMsg = 'Seleccione un rol';
                    return;
                }
                this.bolShowValidate = false;
                this.idrolesel = this.$refs.crudRoles.selrol;
                let selection = this.$refs.treeOptsMnu.findAll({ state: { checked: true }});
                if (selection==null) {
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
                this.bolShowValidate = false;
                // MUTATE
                var strTmp = '';
                for (var i=0; i<selection.length; i++) strTmp += selection[i].id.toString() + ',';
                this.strIdsOptsMnu = strTmp.substring(0, strTmp.length - 1);

                var strTmp = '';
                for (var i=0; i<usrsbrl.length; i++) strTmp += usrsbrl[i].id.toString()  + ',';
                this.strIdsUsers = strTmp.substring(0, strTmp.length - 1);

                this.$refs.btnSaveAcceso.disabled = true;
                this.$refs.mutVincAccss.mutate({variables: { 
                                                            id_role: this.idrolesel, 
                                                            ids_optsmnu: this.strIdsOptsMnu,
                                                            ids_users: this.strIdsUsers
                                                        }});
            },
            mostrarModalUsr(edmode) {
                if (edmode=='D') {
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
                    }).then(r => {
                        if (r.value) {
                            that.deleteUser();
                        }
                    });
                } else {
                    this.modoEdicionUsr = edmode;
                    // this.showModalDelUsr = false;
                    this.showRegUsrModal = true;
                }
            },
            getNewUsr(newval) {
                this.vtable.usersbyrole.push(newval);
            },
            getUpdtdUsr(updtval) {
                this.getUsersByRoleId(this.$refs.crudRoles.selrol, updtval.id);
            },
            getTblDeldUsr() {
                const index = this.vtable.usersbyrole.findIndex(x => x.id === this.vtable.selected);
                if (index !== undefined) this.vtable.usersbyrole.splice(index, 1);
            },
            getUsersByRole(roleId) {
                this.idrolesel = roleId;
                if (typeof roleId=='undefined' || roleId==null) {
                    this.vtable.usersbyrole = [];
                    this.vtable.loadingtxt = 'No hay usuarios asignados';
                }
                this.getUsersByRoleId(roleId, null)
                this.getOptsMenuAsignadas(roleId);
            },
            async getTreeData(idPadre, nodePadre) {
                let optsmnutree = await this.$apollo.query({ query: GET_SEC_OPTSMENU_TREE, variables: { id: idPadre }, fetchPolicy: 'network-only' });
                if (typeof optsmnutree.data != 'undefined') {
                    var that = this, nodeAdded = null;
                    if (optsmnutree.data.secOpcionesMenuTree.legth==0) return;
                    optsmnutree.data.secOpcionesMenuTree.forEach((item, index) => {
                        if (idPadre == null) nodeAdded = that.nuevoRoot(item);
                        else nodeAdded = that.addChildNode(nodePadre, item);
                        if (nodeAdded.parent != null) 
                            if (nodeAdded.data.inode) this.getTreeData(nodeAdded.parent.id, nodeAdded);
                            else return;
                        else
                            if (item.inode) this.getTreeData(item.id, nodeAdded);
                            else return;
                    });
                } else {
                    return;
                }
                //TODO - QUITAR EL COMENTARIO SIGUIENTE
                //if (typeof nodePadre != 'undefined' && nodePadre.hasChildren()) nodePadre.expand(); //nodePadre.data.esloadedchlds = true;
            },
            async getOptsMenuAsignadas(roleId) {
                var that = this;    // , nodeUnChk = null
                if (typeof roleId == 'undefined' || roleId==null) return;
                // uncheck checked nodes
                let selection = this.$refs.treeOptsMnu.findAll({ state: { checked: true }});
                if (selection!=null) selection.uncheck();
                let optsmnutree = await this.$apollo.query({ query: GET_SEC_OPTMENU_BY_ROLEID, variables: { id_role: roleId }, fetchPolicy: 'network-only' }).then(res => {
                    var nodeChk = null;
                    if (typeof res.data != 'undefined' || res.data != null) {
                        var optsmnu = res.data.optsmenuXRol;
                        for (var i=0; i<optsmnu.length; i++) {
                            var nodeChk = that.$refs.treeOptsMnu.find({ id: optsmnu[i].id_opcion_menu });
                            if (nodeChk != null) nodeChk.check();
                        }
                    }
                });
            },
            addChildNode(node, item) {
                // add a new children item
                return node.append(this.getJSONDataNode(item));
            },
            nuevoRoot(item) {
                // add a new root item
                return this.$refs.treeOptsMnu.append(this.getJSONDataNode(item));
            },
            getJSONDataNode(item) {
                return {
                    id: item.id,
                    text: item.label,
                    icon: item.icon,
                    data: {
                        esfrmreg: item.esfrmreg,
                        inode: item.inode,
                        esloadedchlds: false,
                        expanded: false,
                    },
                    state: { selected: false }
                }
            },
			async getUsersByRoleId(idRole, intIdUsr) {
                this.vtable.bolLoading = true;
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token,
				};
				axios.defaults.baseURL = this.$store.getters.getBaseUrl;
				axios.defaults.headers.post['Accept'] = 'application/json';
				axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.getters.getAuthAccessToken;
                var that = this;
                that.vtable.loadingtxt = 'Cargando por favor espere';
				axios.post(`/api/usersbyrole`, {roleid: idRole})
					.then(res => {
                        that.vtable.bolLoading = false;
                        if (res.data.users.length==0) that.vtable.loadingtxt = 'No hay usuarios asignados';
                        else that.vtable.loadingtxt = '';
                        if (typeof intIdUsr != 'undefined' && intIdUsr!=null) {  // viene de actualizar
                            const indexO = that.vtable.usersbyrole.findIndex(x => x.id === intIdUsr);
                            const indexN = res.data.users.findIndex(x => x.id === intIdUsr);
                            if (indexO>=0 && indexN>=0)
                                that.vtable.usersbyrole.splice(indexO, 1, res.data.users[indexN])
                        } else {
                            that.vtable.usersbyrole = res.data.users;
                            that.vtable.selected = null;
                        }
					})
					.catch(err => {
                        that.vtable.loadingtxt = '';
                        that.errormsg = err.message;
                        that.vtable.bolLoading = false;
                        that.vtable.selected = null;
					});
            },
            deleteUser() {
				this.bolEliminandoUsr = true;
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token
				};
				axios.defaults.baseURL = this.$store.getters.getBaseUrl;
				axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				var that = this, endpoint = '';
				endpoint = '/api/deleteuser';
				axios.post(endpoint, { "id": this.vtable.selected })
					.then(function (response) {
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
                            confirmButtonText: 'Aceptar',
                        }).then(r => {
                            if (r.value) {
                                console.log('Usuario eliminado');
                                that.getUsersByRoleId(that.$refs.crudRoles.selrol, that.vtable.selected);
                            }
                        });
					})
					.catch(function (error) {
                        that.bolEliminandoUsr = false;
                        that.vtable.selected = null;
                        console.log(error);
					});
            },
            onDoneVincAccss(data) {
                this.$refs.btnSaveAcceso.disabled = false;
                var that = this;
                if (data != null) {
                    if (data.data.accesosVincularXRoleId=='OK') {
                        var that = this;
                        this.$fire({
                            text: 'La configuración se guardó de manera exitosa.',
                            type: 'success',
                            showConfirmButton: true,
                            confirmButtonText: 'Aceptar',
                        }).then(r => {
                            if (r.value) {
                                console.log('Vínculo realizado');
                            }
                        });
                    }
                }
            },
            onErrorVincAccss() {
                this.$refs.btnSaveAcceso.disabled = false;
            },
            onUserCreateUpdate() {
                // console.log('this.$refs.crudRoles.selrol: ', this.$refs.crudRoles.selrol, 'this.vtable.selected: ', this.vtable.selected);
                // this.getUsersByRoleId(this.$refs.crudRoles.selrol, this.vtable.selected);
            },
        },
    }
</script>
<style>
    tr.highlight {
        background: rgb(145, 176, 235);
    }
</style>