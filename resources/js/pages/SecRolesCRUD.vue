<template>
    <div>
        <b-input-group prepend="Rol:" class="mt-2 mb-2">
            <b-form-select
                v-model="selrol"
                :options="roles"
                value-field="id"
                text-field="description"
                required
                @change="rolChanged()">
            </b-form-select>
            <b-input-group-append>
                <b-button @click="mostrarModal('C')" variant="secondary">
                    <span style="font-size: 1em; color: #F4E939;">
                        <font-awesome-icon icon="star-of-life" />
                    </span>
                </b-button>
                <b-button @click="mostrarModal('U')" variant="secondary" :disabled="!selrol">
                    <span style="font-size: 1em; color: #CFFF68;">
                        <font-awesome-icon icon="edit" />
                    </span>
                </b-button>
                <ApolloMutation
                    ref="mutDeleteRol"
                    :mutation="require('../graphql/secRoleDelete.gql').default"
                    :variables="{ id: selrol }"
                    @done="onDoneCBDel">
                    <template v-slot="{mutate, loading, called , error}">
                        <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                        <b-button @click="mostrarModal('D')" variant="secondary" :disabled="!selrol">
                            <b-spinner type="border" small v-show="loading"></b-spinner>
                            <span v-show="!loading" style="font-size: 1em; color: #F96464;">
                                <font-awesome-icon icon="minus-circle" />
                            </span>
                        </b-button>
                    </template>
                </ApolloMutation>
            </b-input-group-append>
        </b-input-group>

        <b-modal ref="modalRol" hide-footer :title="modalCURole" @close="onClose()"  @hidden="onClose()">
            <ApolloMutation
                v-show="(modoEdicion==='C')"
                :mutation="require('../graphql/secRoleCreate.gql').default"
                :variables="{codigo, name, description}"
                @done="onDone">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <sec-roles-form
                        :modoEdicion.sync="modoEdicion"
                        :bolValsRegGets.sync="bolValsRegGets"
                        :id.sync="id" 
                        :codigo.sync="codigo"
                        :name.sync="name" 
                        :description.sync="description"
                    ></sec-roles-form>
                    <div class="float-right">
                        <b-button @click="mutate()" :disabled="loading" variant="primary">
                            <b-spinner type="border" small v-show="loading"></b-spinner>
                            Guardar
                        </b-button>
                        <b-button @click="onClose()" variant="light">Cancelar</b-button>
                    </div>
                    <br class="clear-float">
                </template>
            </ApolloMutation>
            <ApolloMutation
                v-show="!(modoEdicion==='C')"
                :mutation="require('../graphql/secRoleUpdate.gql').default"
                :variables="{id, codigo, name, description}"
                @done="onDone">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <sec-roles-form
                        :modoEdicion.sync="modoEdicion"
                        :bolValsRegGets.sync="bolValsRegGets"
                        :id.sync="id" 
                        :codigo.sync="codigo"
                        :name.sync="name" 
                        :description.sync="description"
                    ></sec-roles-form>
                    <div class="float-right">
                        <b-button @click="mutate()" v-show="!(modoEdicion==='R')" :disabled="loading" variant="primary">
                            <b-spinner type="border" small v-show="loading"></b-spinner>
                            Guardar
                        </b-button>
                        <b-button @click="onClose()" variant="light">Cancelar</b-button>
                    </div>
                    <br class="clear-float">
                </template>
            </ApolloMutation>
        </b-modal>
    </div>
</template>
<script>
    import SecRolesForm from './SecRolesForm.vue';
    import { GET_SEC_ROLES } from '../graphql/secRoleGetAll.gql';
    import { GET_SEC_ROLE_BY_ID } from '../graphql/secRoleGetById.gql';
    
    export default {
        components: {
            SecRolesForm
        },
        mounted() {
            this.getRolesData(null);
        },
        data() {
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
                modalCURole: '',
            }
        },
	    watch: {
            jsonNewRol: function(newval, oldval) {
                if (this.modoEdicion=='C' && Object.keys(newval).length > 0) {
                    var jstmp = {
                        id: newval.id,
                        codigo: newval.codigo,
                        name: newval.name,
                        description: newval.description
                    };
                    this.roles.push(jstmp);
                }
                if (this.modoEdicion=='U' && Object.keys(newval).length > 0) {
                    const index = this.roles.findIndex(x => x.id === this.selrol);
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
            resMsgDelRole: function(newVal, oldVal) {
                if (newVal=='OK') {
                    const index = this.roles.findIndex(x => x.value === this.selrol);
                    if (index !== undefined) this.roles.splice(index, 1);
                    this.selrol = null;
                    this.id = null;
                    this.codigo = '';
                    this.name = null;
                    this.description = '';
                    this.jsonNewRol = {};
                }
            },
			'showModalRol': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalRol'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.showModalRol = false;
                    this.$refs['modalRol'].hide();
                    this.bolValsRegGets = false;
				}
            },
		},
        methods: {
            rolChanged() {
                this.$parent.getUsersByRole(this.selrol);
            },
            onDone(data) {
                var strOp = '';
                if (this.modoEdicion=='C') {
                    this.jsonNewRol = data.data.secRoleCreate;
                    strOp = 'creado';
                }
                if (this.modoEdicion=='U' || this.modoEdicion=='R') {
                    this.jsonNewRol = data.data.secRoleUpdate;
                    strOp = 'actualizado';
                }
                this.showModalRol = false;

                if (this.modoEdicion=='C' || this.modoEdicion=='U') {
                    this.$fire({
                        text: 'El rol fué ' + strOp + ' con éxito.',
                        type: 'success',
                        showConfirmButton: true,
                        confirmButtonText: 'Aceptar',
                    }).then(r => {
                        if (r.value) {
                            console.log('rol ' + strOp);
                        }
                    });
                }
            },
            onDoneCBDel(data) {
                this.resMsgDelRole = data.data.secRoleDelete;
                if (this.resMsgDelRole != 'OK') { return; }

                var that = this;
                this.$fire({
                    text: 'El rol fué eliminado.',
                    type: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then(r => {
                    if (r.value) {
                        console.log('rol eliminado');
                        that.getRolesData(null);
                    }
                });
            },
            onClose() {
                this.showModalRol = false;
            },
			onReset(evt) {
				if (typeof evt != 'undefined') evt.preventDefault();
                // Reset our form values
                this.id = null;
                this.codigo = '';
                this.name = '';
                this.description = '';
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
            },
            async getRolesData() {
                let rolesTmp = await this.$apollo.query({ query: GET_SEC_ROLES, fetchPolicy: 'network-only' });
                if (typeof rolesTmp.data != 'undefined') {
                    if (rolesTmp.data.secRoles.length>0) {
                        this.roles = rolesTmp.data.secRoles;
                        // this.selrol = rolesTmp.data.secRoles[0].id;
                        return;
                    }
                }
                this.roles = [];
                this.selrol = null;
            },
            determineModMode() {
                /*if (this.modoEdicion=='C') { }*/
                if (this.modoEdicion=='U' || this.modoEdicion=='R') {
                    this.getRoleById();
                }
            },
            async getRoleById() {
                if (typeof this.selrol == 'undefined' || this.selrol==null) return;
                let role = await this.$apollo.query({ query: GET_SEC_ROLE_BY_ID, variables: { id: this.selrol }, fetchPolicy: 'network-only' });
                if (typeof role.data != 'undefined') {
                    let item = role.data.secRole;
                    this.id = item.id;
                    this.codigo = item.codigo;
                    this.name = item.name;
                    this.description = item.description;
                    this.bolValsRegGets = true;
                }
            },
            mostrarModal(edmode) {
                if (edmode=='D') {
                    this.showModalRol = false;

                    var that = this;
                    this.$fire({
                        text: '¿Está seguro que desea eliminar el rol seleccionado?',
                        type: 'question',
                        showConfirmButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Aceptar',
                        cancelButtonText: 'Cancelar'
                    }).then(r => {
                        if (r.value) {
                            that.$refs.mutDeleteRol.mutate();
                        }
                    });
                } else {
                    this.modoEdicion = edmode;
                    this.showModalRol = true;
                }
                if (edmode=='C') this.modalCURole = 'Nuevo rol';
                if (edmode=='U') this.modalCURole = 'Editar rol';
            }
        }
    }
</script>