<template>
    <div>
        <b-modal ref="modalNewOptMnu" hide-footer title="Nueva opción de menú" @close="onClose()"  @hidden="onClose()">
            <ApolloMutation
                v-show="(modoEdicion==='C')"
                :mutation="require('../graphql/secOpcionMenuCreate.gql').default"
                :variables="{id_opcion_menu_padre: currentNodeId, descripcion, ruta, componente_ruta, nombre_ruta,
                            es_form_registro, icon_fa, imagen, tip}"
                @done="onDone">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <sec-opcion-menu-form
                        :modoEdicion.sync="modoEdicion"
                        :bolValsRegGets.sync="bolValsRegGets"
                        :currentNodeDesc.sync="currentNodeDesc" 
                        :currentNodeId.sync="currentNodeId" 
                        :id_optmenu_padre.sync="id_optmenu_padre"
                        :descripcion.sync="descripcion"
                        :ruta.sync="ruta"
                        :componente_ruta.sync="componente_ruta"
                        :nombre_ruta.sync="nombre_ruta"
                        :es_form_registro.sync="es_form_registro"
                        :icon_fa.sync="icon_fa"
                        :imagen.sync="imagen"
                        :tip.sync="tip"
                    ></sec-opcion-menu-form>
                    <div class="float-right">
                        <b-button @click="mutate()" :disabled="loading" variant="primary">
                            <b-spinner type="border" small v-show="loading"></b-spinner>
                            <span v-show="!loading" style="font-size: 1em; color: #f7f9ff;">
                                <font-awesome-icon icon="save" />
                            </span>
                            Guardar
                        </b-button>
                        <b-button @click="onClose()" variant="light">Cancelar</b-button>
                    </div>
                    <br class="clear-float">
                </template>
            </ApolloMutation>
            <ApolloMutation
                v-show="!(modoEdicion==='C')"
                :mutation="require('../graphql/secOpcionMenuUpdate.gql').default"
                :variables="{id_opcion_menu: currentNodeId, id_opcion_menu_padre: id_optmenu_padre, descripcion, ruta, componente_ruta, nombre_ruta,
                            es_form_registro, icon_fa, imagen, tip}"
                @done="onDone">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <sec-opcion-menu-form
                        :modoEdicion.sync="modoEdicion"
                        :bolValsRegGets.sync="bolValsRegGets"
                        :currentNodeDesc.sync="currentNodeDesc" 
                        :currentNodeId.sync="currentNodeId" 
                        :id_optmenu_padre.sync="id_optmenu_padre"
                        :descripcion.sync="descripcion"
                        :ruta.sync="ruta"
                        :componente_ruta.sync="componente_ruta"
                        :nombre_ruta.sync="nombre_ruta"
                        :es_form_registro.sync="es_form_registro"
                        :icon_fa.sync="icon_fa"
                        :imagen.sync="imagen"
                        :tip.sync="tip"
                    ></sec-opcion-menu-form>
                    <div class="float-right">
                        <b-button @click="mutate()" v-show="!(modoEdicion==='R')" :disabled="loading" variant="primary">
                            <b-spinner type="border" small v-show="loading"></b-spinner>
                            <span v-show="!loading" style="font-size: 1em; color: #f7f9ff;">
                                <font-awesome-icon icon="save" />
                            </span>
                            Guardar
                        </b-button>
                        <b-button @click="onClose()" variant="light">Cancelar</b-button>
                    </div>
                    <br class="clear-float">
                </template>
            </ApolloMutation>
        </b-modal>
        <b-modal ref="modalDelOptMnu" hide-footer title="Eliminar opción de menú">
            <ApolloMutation
                :mutation="require('../graphql/secOpcionMenuDelete.gql').default"
                :variables="{id_opcion_menu: currentNodeId}"
                @done="onDoneCBDel">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <label>¿Está seguro que desea eliminar el registro seleccionado?</label>
                    <div class="float-right">
                        <b-button @click="mutate()" :disabled="loading" variant="primary" autofocus>
                            <b-spinner type="border" small v-show="loading"></b-spinner>
                            Aceptar
                        </b-button>
                        <b-button @click="onCloseDelOptMnu()" variant="light">Cancelar</b-button>
                    </div>
                    <br class="clear-float">
                </template>
            </ApolloMutation>
        </b-modal>
    </div>
</template>
<script>
    import SecOpcionMenuForm from './SecOpcionMenuForm.vue';
    import { GET_SEC_OPTMENU_BY_ID } from '../graphql/secOpcionMenuGetById.gql';

    export default {
        components: {
            SecOpcionMenuForm
        },
        props: ['showModalOptMnu', 'showModalDelOptMnu', 'resMsgDelOptMnu', 'modoEdicion', 'currentNodeId', 'currentNodeDesc', 'jsonNewNode'],
        data() {
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
            }
        },
	    watch: {
			'showModalOptMnu': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalNewOptMnu'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.$emit('update:showModalOptMnu', false);
                    this.$refs['modalNewOptMnu'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'showModalDelOptMnu': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalDelOptMnu'].show();
                } else {
					this.$emit('update:showModalDelOptMnu', false);
                    this.$refs['modalDelOptMnu'].hide();
				}
            }
		},
        methods: {
            onDone(data) {
                if (this.modoEdicion=='C') { this.$emit('update:jsonNewNode', data.data.secOpcionMenuCreate); }
                if (this.modoEdicion=='U' || this.modoEdicion=='R') { this.$emit('update:jsonNewNode', data.data.secOpcionMenuUpdate); }
                this.$emit('update:showModalOptMnu', false);
            },
            onDoneCBDel(data) {
                this.$emit('update:showModalDelOptMnu', false);
                this.$emit('update:resMsgDelOptMnu', data.data.secOpcionMenuDelete);
            },
            onClose() {
                this.$emit('update:showModalOptMnu', false);
            },
            onCloseDelOptMnu() {
                this.$emit('update:showModalDelOptMnu', false);
            },
			onReset(evt) {
				if (typeof evt != 'undefined') evt.preventDefault();
                // Reset our form values
                this.id_optmenu_padre = null;
                this.descripcion = '';
                this.ruta = '';
                this.componente_ruta = '';
                this.nombre_ruta = '';
                this.es_form_registro = false;
                this.icon_fa = '';
                this.imagen = '';
                this.tip = '';
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
            },
            determineModMode() {
                /*if (this.modoEdicion=='C') { }*/
                if (this.modoEdicion=='U' || this.modoEdicion=='R') {
                    this.getOptMenu();
                }
            },
            async getOptMenu() {
                if (typeof this.currentNodeId == 'undefined') return;
                let optmnu = await this.$apollo.query({ query: GET_SEC_OPTMENU_BY_ID, variables: { id: this.currentNodeId }, fetchPolicy: 'network-only' });
                if (typeof optmnu.data != 'undefined') {
                    let item = optmnu.data.secOpcionMenu;
                    this.$emit('update:currentNodeId', item.id_opcion_menu);
                    this.id_optmenu_padre = item.id_opcion_menu_padre
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
            },
        }
    }
</script>