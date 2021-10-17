<template>
    <div>
        <div class="card">
            <div class="card-header"><h4>Mantenimiento de marcas</h4></div>
            <div class="card-body">
                <!-- toolbar -->
                <b-card class="mb-2">
                    <b-button-toolbar aria-label="">
                        <b-button-group size="lg" class="mx-1">
                            <b-button @click="mostrarModal('C')" variant="secondary">
                                <span style="font-size: 1em; color: #F4E939;">
                                    <font-awesome-icon icon="star-of-life" />
                                </span>
                            </b-button>
                            <b-button @click="mostrarModal('U')" variant="secondary" :disabled="vtable.selected==null">
                                <span style="font-size: 1em; color: #CFFF68;">
                                    <font-awesome-icon icon="edit" />
                                </span>
                            </b-button>
                            <b-button @click="mostrarModal('R')" variant="secondary" :disabled="vtable.selected==null">
                                <span style="font-size: 1em; color: #64B1F9;">
                                    <font-awesome-icon icon="eye" />
                                </span>
                            </b-button>
                            <b-button @click="mostrarModal('D')" variant="secondary" :disabled="vtable.selected==null">
                                <span style="font-size: 1em; color: #F96464;">
                                    <font-awesome-icon icon="minus-circle" />
                                </span>
                            </b-button>
                        </b-button-group>
                    </b-button-toolbar>
                </b-card>
                <b-modal ref="modalMarca" hide-footer :title="ttlModal" @close="onClose()"  @hidden="onClose()">
                    <ApolloMutation
                        ref="mutCreate"
                        v-show="(modoEdicion==='C')"
                        :mutation="require('../graphql/marcaCreate.gql').default"
                        :variables="{nombre: form.nombre, id_archivo_subido_img: form.id_archivo_subido_img}"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <marcas-form
                                ref="mfrmCreate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :nombre.sync="form.nombre" 
                                :url_imagen_lowres_uid.sync="form.url_imagen_lowres_uid"
                            ></marcas-form>
                            <div class="float-right">
                                <b-button @click="callMutCreate()" :disabled="loading || showSpnrCreate" variant="primary">
                                    <b-spinner type="border" small v-show="loading || showSpnrCreate"></b-spinner>
                                    <span v-show="!loading && !showSpnrCreate" style="font-size: 1em; color: #f7f9ff;">
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
                        ref="mutUpdate"
                        v-show="!(modoEdicion==='C')"
                        :mutation="require('../graphql/marcaUpdate.gql').default"
                        :variables="{id: form.id, nombre: form.nombre, id_archivo_subido_img: form.id_archivo_subido_img}"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <marcas-form
                                ref="mfrmUpdate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :nombre.sync="form.nombre" 
                                :url_imagen_lowres_uid.sync="form.url_imagen_lowres_uid"
                            ></marcas-form>
                            <div class="float-right">
                                <b-button @click="callMutUpdate()" v-show="!(modoEdicion==='R') || showSpnrCreate" :disabled="loading" variant="primary">
                                    <b-spinner type="border" small v-show="loading || showSpnrCreate"></b-spinner>
                                    <span v-show="!loading && !showSpnrCreate" style="font-size: 1em; color: #f7f9ff;">
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
                <b-modal ref="modalDelMarca" hide-footer title="Eliminar marca">
                    <ApolloMutation
                        :mutation="require('../graphql/marcaDelete.gql').default"
                        :variables="{id: vtable.selected}"
                        @done="onDoneCBDel">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <label>¿Está seguro que desea eliminar el registro seleccionado?</label>
                            <div class="float-right">
                                <b-button @click="mutate()" :disabled="loading" variant="primary" autofocus>
                                    <b-spinner type="border" small v-show="loading"></b-spinner>
                                    Aceptar
                                </b-button>
                                <b-button @click="onCloseDelMarca()" variant="light">Cancelar</b-button>
                            </div>
                            <br class="clear-float">
                        </template>
                    </ApolloMutation>
                </b-modal>
                <v-app id="inspire">
                    <v-data-table
                        :headers="vtable.headers"
                        :items="vtable.marcas"
                        :search="vtable.search"
                        :loading="vtable.bolLoading" :loading-text="vtable.loadingtxt">
                        <template v-slot:item="{ item }">
                            <tr
                                :class="{highlight:item.id===vtable.selected}" 
                                @click="vtable.selected=item.id">
                                    <td>{{ item.nombre_marca }}</td>
                                    <td>
                                        <b-img 
                                            v-bind="vtable.mainPropsImgTbl"
                                            :src="item.url_imagen_lowres_uid" 
                                            fluid 
                                            alt="fluid">
                                        </b-img>
                                    </td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-app>
            </div>
        </div>
    </div>
</template>
<script>
    import MarcasForm from './MarcasForm.vue';
    import { GET_MARCAS } from '../graphql/marcaGetAll.gql';
    import { GET_MARCA_BY_ID } from '../graphql/marcaGetById.gql';
    
    export default {
        components: {
            MarcasForm
        },
        mounted() {
            this.getMarcasData(null);
        },
        data() {
            return {
                bolValsRegGets: false,
                showModalMarca: false,
                showModalDelMarca: false,
                showSpnrCreate: false,
                modoEdicion: '',
                resMsgDelMarca: '',
                jsonNewMarca: {},
                marcas: [],
                ttlModal: '',
                form: {
                    id: null,
                    nombre: '',
                    id_archivo_subido_img: null,
                    url_imagen_lowres_uid: '',
                },
                vtable: {
                    search: '',
                    bolLoading: false,
                    loadingtxt: '',
                    headers: [
                        {text: 'Nombre', align: 'left', value: 'nombre_marca'},
                        {text: 'Logo', sortable: false, value: 'url_imagen_lowres_uid'},
                    ],
                    marcas: [],
                    selected: null,
                    mainPropsImgTbl: { width: 70, height: 70 },
                },
            }
        },
	    watch: {
            jsonNewMarca: function(newval, oldval) {
                if (this.modoEdicion=='C' && Object.keys(newval).length > 0) {
                    var jstmp = {
                        id: newval.id,
                        nombre_marca: newval.nombre,
                        url_imagen_lowres_uid: this.form.url_imagen_lowres_uid
                    };
                    this.vtable.marcas.push(jstmp);
                    this.$refs['modalMarca'].hide();
                }
                if (this.modoEdicion=='U' && Object.keys(newval).length > 0) {
                    const index = this.vtable.marcas.findIndex(x => x.id === this.vtable.selected);
                    this.vtable.marcas[index].id = newval.id;
                    this.vtable.marcas[index].nombre = newval.nombre;
                    this.vtable.marcas[index].url_imagen_lowres_uid = this.form.url_imagen_lowres_uid;
                }
            },
            resMsgDelMarca: function(newVal, oldVal) {
                if (newVal=='OK') {
                    const index = this.vtable.marcas.findIndex(x => x.id === this.vtable.selected);
                    if (index !== undefined) this.vtable.marcas.splice(index, 1);
                    this.vtable.selected = null;
                    this.form.id = null;
                    this.form.nombre = '';
                    this.form.id_archivo_subido_img = null;
                    this.form.url_imagen_lowres_uid = '';
                    this.jsonNewMarca = {};
                }
            },
			'showModalMarca': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalMarca'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.showModalMarca = false;
                    this.$refs['modalMarca'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'showModalDelMarca': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalDelMarca'].show();
                } else {
					this.showModalDelMarca = false;
                    this.$refs['modalDelMarca'].hide();
				}
            }
		},
        methods: {
            onDone(data) {
                if (this.modoEdicion=='C') { this.jsonNewMarca = data.data.marcaCreate; }
                if (this.modoEdicion=='U' || this.modoEdicion=='R') { this.jsonNewMarca = data.data.marcaUpdate; }
                this.showModalMarca = false;
                this.showSpnrCreate = false;
            },
            onDoneCBDel(data) {
                this.showModalDelMarca = false;
                this.resMsgDelMarca = data.data.marcaDelete;
                if (this.resMsgDelMarca==='OK') {
                    const index = this.vtable.marcas.findIndex(x => x.id === this.vtable.selected);
                    var that = this;
                    setTimeout(function(){
                        if (index !== undefined) that.vtable.marcas.splice(index, 1);
                        that.vtable.selected = null;
                        that.form.id = null;
                        that.form.nombre = '';
                        that.form.id_archivo_subido_img = null;
                        that.form.url_imagen_lowres_uid = '';
                        that.jsonNewMarca = {};
                    }, 2000);
                }
            },
            onClose() {
                this.showModalMarca = false;
            },
            onCloseDelMarca() {
                this.showModalDelMarca = false;
            },
			onReset(evt) {
				if (typeof evt != 'undefined') evt.preventDefault();
                // Reset our form values
                this.form.id = null;
                this.form.nombre = '';
                this.form.id_archivo_subido_img = null;
                this.form.url_imagen_lowres_uid = '';
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
            },
            async getMarcasData() {
                this.vtable.bolLoading = true;
                let mrctmp = await this.$apollo.query({ query: GET_MARCAS, fetchPolicy: 'network-only' });
                this.vtable.bolLoading = false;
                if (typeof mrctmp.data != 'undefined') {
                    if (mrctmp.data.marcas.length>0) {
                        this.vtable.marcas = mrctmp.data.marcas;
                        this.vtable.selected = mrctmp.data.marcas[0].id;
                        return;
                    }
                }
                this.vtable.marcas = [];
                this.vtable.selected = null;
            },
            determineModMode() {
                if (this.modoEdicion=='U' || this.modoEdicion=='R') {
                    this.getMarcaById();
                }
            },
            async getMarcaById() {
                if (typeof this.vtable.selected=='undefined' || this.vtable.selected==null) return;
                let mrctmp = await this.$apollo.query({ query: GET_MARCA_BY_ID, variables: { id: this.vtable.selected }, fetchPolicy: 'network-only' });
                if (typeof mrctmp.data != 'undefined') {
                    let item = mrctmp.data.marca[0];
                    this.form.id = item.id;
                    this.form.nombre = item.nombre_marca;
                    this.form.id_archivo_subido_img = item.id_archivo_subido_img;
                    this.form.url_imagen_lowres_uid = item.url_imagen_lowres_uid;
                    this.bolValsRegGets = true;
                }
            },
            mostrarModal(edmode) {
                if (edmode=='R') this.ttlModal = 'Consulta de marca';
                if (edmode=='D') {
                    this.showModalDelMarca = true;
                    this.showModalMarca = false;
                } else {
                    if (edmode=='C') this.ttlModal = 'Nueva marca';
                    if (edmode=='U') this.ttlModal = 'Editar marca';
                    this.modoEdicion = edmode;
                    this.showModalDelMarca = false;
                    this.showModalMarca = true;
                }
            },
            callMutCreate() {
                var that = this;
                var urlFile = this.$store.getters.getBaseUrl+'/'+this.$store.getters.getFolderUpload+'/';
                this.showSpnrCreate = true;
				this.$refs.mfrmCreate.uploadLogoImg()
                    .then(res => {
                        if (res.status===200) {
                            that.form.id_archivo_subido_img = res.data.img_uploaded.id;
                            that.form.url_imagen_lowres_uid = urlFile+res.data.img_uploaded.imagen_lowres_uid;
                            setTimeout(function(){ that.$refs.mutCreate.mutate(); }, 1500);
                        }
                    })
                    .catch(err => { 
                        that.showSpnrCreate = false;
                        console.log('Error al subir el archivo y actualizar registro');
                        if (typeof err == 'string' && err=='NoPasaVal') {
                            console.log('Logo requerido');
                        }
                    });
            },
            callMutUpdate() {
                var that = this;
                var urlFile = this.$store.getters.getBaseUrl+'/'+this.$store.getters.getFolderUpload+'/';
                this.showSpnrCreate = true;
                // Validar si seleccionaron una nueva imágen
				this.$refs.mfrmUpdate.uploadLogoImg()
                    .then(res => {
                        if (typeof res == 'string' && res=='USameImg') {
                            setTimeout(function(){ that.$refs.mutUpdate.mutate(); }, 1000);
                        } else 
                        if (typeof res.status !='undefined' && res.status===200) {
                            that.form.id_archivo_subido_img = res.data.img_uploaded.id;
                            that.form.url_imagen_lowres_uid = urlFile+res.data.img_uploaded.imagen_lowres_uid;
                            setTimeout(function(){ that.$refs.mutUpdate.mutate(); }, 1000);
                        }
                    })
					.catch(err => { 
                        console.log(err);
                        console.log('Error al subir el archivo y actualizar registro');
                        that.showSpnrCreate = false;
                        if (typeof err == 'string' && err=='NoPasaVal') {
                            console.log('Logo requerido');
                        }
                    });
            },
        }
    }
</script>
<style>
    tr.highlight {
        background: rgb(145, 176, 235);
    }
</style>