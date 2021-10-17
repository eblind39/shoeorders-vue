<template>
    <div>
        <b-modal ref="modalNewCat" hide-footer title="Nuevo catálogo" @close="onClose()"  @hidden="onClose()">
            <ApolloMutation
                v-show="(modoEdicion==='C' || modoEdicion==='CNR')"
                :mutation="require('../graphql/catalogoCreate.gql').default"
                :variables="{id_catalogo_padre: currentNodeId, codigo_catalogo: form.codigo_catalogo, 
                             valor: form.valor}"
                @done="onDone">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <catalogo-form
                        :modoEdicion.sync="modoEdicion"
                        :bolValsRegGets.sync="bolValsRegGets"
                        :bolHideCatPadre.sync="bolHideCatPadre"
                        :currentNodeVal.sync="currentNodeVal" 
                        :currentNodeId.sync="currentNodeId" 
                        :id_catalogo_padre.sync="form.id_catalogo_padre"
                        :codigo_catalogo.sync="form.codigo_catalogo"
                        :valor.sync="form.valor"
                    ></catalogo-form>
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
                v-show="!(modoEdicion==='C' || modoEdicion==='CNR')"
                :mutation="require('../graphql/catalogoUpdate.gql').default"
                :variables="{id_catalogo: currentNodeId, id_catalogo_padre: form.id_catalogo_padre, 
                            codigo_catalogo: form.codigo_catalogo, valor: form.valor}"
                @done="onDone">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <catalogo-form
                        :modoEdicion.sync="modoEdicion"
                        :bolValsRegGets.sync="bolValsRegGets"
                        :bolHideCatPadre.sync="bolHideCatPadre"
                        :currentNodeVal.sync="currentNodeVal" 
                        :currentNodeId.sync="currentNodeId" 
                        :id_catalogo_padre.sync="form.id_catalogo_padre"
                        :codigo_catalogo.sync="form.codigo_catalogo"
                        :valor.sync="form.valor"
                    ></catalogo-form>
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
        <b-modal ref="modalDelCat" hide-footer title="Eliminar catálogo">
            <ApolloMutation
                :mutation="require('../graphql/catalogoDelete.gql').default"
                :variables="{id_catalogo: currentNodeId}"
                @done="onDoneCBDel">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <label>¿Está seguro que desea eliminar el registro seleccionado?</label>
                    <div class="float-right">
                        <b-button @click="mutate()" :disabled="loading" variant="primary" autofocus>
                            <b-spinner type="border" small v-show="loading"></b-spinner>
                            Aceptar
                        </b-button>
                        <b-button @click="onCloseDelCat()" variant="light">Cancelar</b-button>
                    </div>
                    <br class="clear-float">
                </template>
            </ApolloMutation>
        </b-modal>
    </div>
</template>
<script>
    import CatalogoForm from './CatalogoForm.vue';
    import { GET_CATALOGO_BY_ID } from '../graphql/catalogoGetById.gql';

    export default {
        components: {
            CatalogoForm
        },
        props: ['showModalCat', 'showModalDelCat', 'bolHideCatPadre', 'resMsgDelCat', 'modoEdicion', 'currentNodeId', 'currentNodeVal', 'jsonNewNode'],
        data() {
            return {
                bolValsRegGets: false,
                form: {
                    id_catalogo_padre: null,
                    codigo_catalogo: '',
                    valor: '',
                },
                show: true, //usado por el form
            }
        },
	    watch: {
			'showModalCat': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalNewCat'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.$emit('update:showModalCat', false);
                    this.$refs['modalNewCat'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'showModalDelCat': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalDelCat'].show();
                } else {
					this.$emit('update:showModalDelCat', false);
                    this.$refs['modalDelCat'].hide();
				}
            }
		},
        methods: {
            onDone(data) {
                if (this.modoEdicion=='C' || this.modoEdicion=='CNR') { this.$emit('update:jsonNewNode', data.data.catalogoCreate); }
                if (this.modoEdicion=='U' || this.modoEdicion=='R') { this.$emit('update:jsonNewNode', data.data.catalogoUpdate); }
                this.$emit('update:showModalCat', false);
            },
            onDoneCBDel(data) {
                this.$emit('update:showModalDelCat', false);
                this.$emit('update:resMsgDelCat', data.data.catalogoDelete);
            },
            onClose() {
                this.$emit('update:showModalCat', false);
            },
            onCloseDelCat() {
                this.$emit('update:showModalDelCat', false);
            },
			onReset(evt) {
				if (typeof evt != 'undefined') evt.preventDefault();
                // Reset our form values
                this.form.id_catalogo_padre = null;
                this.form.codigo_catalogo = '';
                this.form.valor = '';
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
            },
            determineModMode() {
                /*if (this.modoEdicion=='C') { }*/
                if (this.modoEdicion=='U' || this.modoEdicion=='R') {
                    this.getCat();
                }
            },
            async getCat() {
                if (typeof this.currentNodeId == 'undefined') return;
                let cat = await this.$apollo.query({ query: GET_CATALOGO_BY_ID, variables: { id_catalogo: this.currentNodeId }, fetchPolicy: 'network-only' });
                if (typeof cat.data != 'undefined') {
                    let item = cat.data.catalogo;
                    this.$emit('update:currentNodeId', item.id_catalogo);
                    this.form.id_catalogo_padre = item.id_catalogo_padre
                    // this.$emit('update:currentNodeDesc', item.currentNodeDesc);
                    this.form.codigo_catalogo = item.codigo_catalogo;
                    this.form.valor = item.valor;
                    this.bolValsRegGets = true;
                }
            }
        }
    }
</script>.form