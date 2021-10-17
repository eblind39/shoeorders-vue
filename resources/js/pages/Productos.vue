<template>
    <div>
        <div class="card">
            <div class="card-header"><h4>Mantenimiento de productos</h4></div>
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
                <b-modal ref="modalProducto" hide-footer :title="ttlProducto" @close="onClose()"  @hidden="onClose()">
                    <ApolloMutation
                        ref="mutCreate"
                        v-show="(modoEdicion==='C')"
                        :mutation="require('../graphql/productoCreate.gql').default"
                        :variables="{
                                     referencia_cod_prov: form.referencia_cod_prov, nombre: form.nombre, descripcion: form.descripcion,
                                     id_archivo_subido_img: form.id_archivo_subido_img, id_color: form.id_color, 
                                     id_marca: form.id_marca, id_tipo_material: form.id_tipo_material, 
                                     id_genero: form.id_genero, id_categoria: form.id_categoria,
                                     precio: form.precio, total_unidades: form.total_unidades 
                                    }"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <productos-form
                                ref="mfrmCreate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :referencia_cod_prov.sync="form.referencia_cod_prov"
                                :nombre.sync="form.nombre"
                                :descripcion.sync="form.descripcion"
                                :id_archivo_subido_img.sync="form.id_archivo_subido_img"
                                :id_color.sync="form.id_color"
                                :id_marca.sync="form.id_marca"
                                :id_tipo_material.sync="form.id_tipo_material"
                                :id_genero.sync="form.id_genero"
                                :id_categoria.sync="form.id_categoria"
                                :precio.sync="form.precio"
                                :total_unidades.sync="form.total_unidades"
                                :url_imagen_lowres_uid.sync="form.url_imagen_lowres_uid"
                            ></productos-form>
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
                        :mutation="require('../graphql/productoUpdate.gql').default"
                        :variables="{
                                     id: form.id, referencia_cod_prov: form.referencia_cod_prov, nombre: form.nombre, descripcion: form.descripcion,
                                     id_archivo_subido_img: form.id_archivo_subido_img, id_color: form.id_color, 
                                     id_marca: form.id_marca, id_tipo_material: form.id_tipo_material, 
                                     id_genero: form.id_genero, id_categoria: form.id_categoria,
                                     precio: form.precio, total_unidades: form.total_unidades 
                                    }"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <productos-form
                                ref="mfrmUpdate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :referencia_cod_prov.sync="form.referencia_cod_prov"
                                :nombre.sync="form.nombre"
                                :descripcion.sync="form.descripcion"
                                :id_archivo_subido_img.sync="form.id_archivo_subido_img"
                                :id_color.sync="form.id_color"
                                :id_marca.sync="form.id_marca"
                                :id_tipo_material.sync="form.id_tipo_material"
                                :id_genero.sync="form.id_genero"
                                :id_categoria.sync="form.id_categoria"
                                :precio.sync="form.precio"
                                :total_unidades.sync="form.total_unidades"
                                :url_imagen_lowres_uid.sync="form.url_imagen_lowres_uid"
                            ></productos-form>
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
                <b-modal ref="modalDelProducto" hide-footer title="Eliminar producto">
                    <ApolloMutation
                        :mutation="require('../graphql/productoDelete.gql').default"
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
                                <b-button @click="showmodalDelProducto=false" variant="light">Cancelar</b-button>
                            </div>
                            <br class="clear-float">
                        </template>
                    </ApolloMutation>
                </b-modal>
                <v-app id="inspire">
                    <v-data-table
                        :headers="vtable.headers"
                        :items="vtable.productos"
                        :search="vtable.search"
                        :loading="vtable.bolLoading" 
                        :loading-text="vtable.loadingtxt">
                        <template v-slot:item="{ item }">
                            <tr
                                :class="{highlight:item.id===vtable.selected}" 
                                @click="vtable.selected=item.id">
                                <td>{{ item.referencia_cod_prov }}</td>
                                <td>{{ item.nombre_producto }}</td>
                                <td>
                                    <b-img 
                                        v-bind="vtable.mainPropsImgTbl"
                                        :src="item.url_imagen_lowres_uid" 
                                        fluid 
                                        alt="fluid">
                                    </b-img>
                                </td>
                                <td>{{ item.color }}</td>
                                <td>{{ item.nombre_marca }}</td>
                                <td>{{ item.tipo_material }}</td>
                                <td>{{ item.genero }}</td>
                                <td>{{ item.categoria }}</td>
                                <td>{{ item.precio }}</td>
                                <td>{{ item.total_unidades }}</td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-app>
            </div>
        </div>
    </div>
</template>
<script>
    import ProductosForm from './ProductosForm.vue';
    import { GET_PRODUCTO_BY_ID } from '../graphql/productoGetById.gql';
    
    export default {
        components: {
            ProductosForm
        },
        mounted() {
            this.getProductosData(null);
        },
        data() {
            return {
                bolValsRegGets: false,
                showmodalProducto: false,
                showmodalDelProducto: false,
                showSpnrCreate: false,
                modoEdicion: '',
                resMsgDelProducto: '',
                jsonNewProducto: {},
                productos: [],
                ttlProducto: '',
                form: {
                    id: null,
                    referencia_cod_prov: '',
                    nombre: '',
                    descripcion: '',
                    id_archivo_subido_img: null,
                    url_imagen_lowres_uid: '',
                    id_color: null,
                    color: '',
                    id_marca: null,
                    nombre_marca: '',
                    id_tipo_material: null,
                    tipo_material: '',
                    id_genero: null,
                    genero: '',
                    id_categoria: null,
                    categoria: '',
                    precio: null,
                    total_unidades: null,
                },
                vtable: {
                    search: '',
                    bolLoading: false,
                    loadingtxt: '',
                    headers: [
                        {text: 'Cod. Prov.', align: 'left', value: 'referencia_cod_prov'},
                        {text: 'Nombre', align: 'left', value: 'nombre_producto'},
                        {text: 'Imágen', sortable: false, value: 'url_imagen_lowres_uid'},
                        {text: 'color', align: 'left', value: 'color'},
                        {text: 'Marca', align: 'left', value: 'nombre_marca'},
                        {text: 'Material', align: 'left', value: 'tipo_material'},
                        {text: 'Género', align: 'left', value: 'genero'},
                        {text: 'Categoría', align: 'left', value: 'categoria'},
                        {text: 'Precio', align: 'left', value: 'precio'},
                        {text: 'Unidades', align: 'left', value: 'total_unidades'},
                    ],
                    productos: [],
                    selected: null,
                    mainPropsImgTbl: { width: 50, height: 50 },
                },
            }
        },
	    watch: {
            jsonNewProducto: function(newval, oldval) {
                if (this.modoEdicion=='C' && Object.keys(newval).length > 0) {
                    var jstmp = {
                        id: newval.id,
                        referencia_cod_prov: newval.referencia_cod_prov,
                        nombre_producto: newval.nombre,
                        descripcion: newval.descripcion,
                        url_imagen_lowres_uid: this.form.url_imagen_lowres_uid,
                        color: this.form.color,
                        nombre_marca: this.form.nombre_marca,
                        tipo_material: this.form.tipo_material,
                        genero: this.form.genero,
                        categoria: this.form.categoria,
                        precio: newval.precio,
                        total_unidades: newval.total_unidades,
                    };
                    this.vtable.productos.push(jstmp);
                    this.$refs['modalProducto'].hide();
                }
                if (this.modoEdicion=='U' && Object.keys(newval).length > 0) {
                    const index = this.vtable.productos.findIndex(x => x.id === this.vtable.selected);
                    this.vtable.productos[index].id = newval.id;
                    this.vtable.productos[index].referencia_cod_prov = newval.referencia_cod_prov;
                    this.vtable.productos[index].nombre_producto = newval.nombre;
                    this.vtable.productos[index].descripcion = newval.descripcion;
                    this.vtable.productos[index].url_imagen_lowres_uid = this.form.url_imagen_lowres_uid;
                    this.vtable.productos[index].color = this.form.color;
                    this.vtable.productos[index].nombre_marca = this.form.nombre_marca;
                    this.vtable.productos[index].tipo_material = this.form.tipo_material;
                    this.vtable.productos[index].genero = this.form.genero;
                    this.vtable.productos[index].categoria = this.form.categoria;
                    this.vtable.productos[index].precio = newval.precio;
                    this.vtable.productos[index].total_unidades = newval.total_unidades;
                }
            },
            resMsgDelProducto: function(newVal, oldVal) {
                if (newVal=='OK') {
                    const index = this.vtable.productos.findIndex(x => x.id === this.vtable.selected);
                    if (index !== undefined) this.vtable.productos.splice(index, 1);
                    this.vtable.selected = null;
                    this.limpiarCamposBindedFrm();
                    this.jsonNewProducto = {};
                }
            },
			'showmodalProducto': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalProducto'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.showmodalProducto = false;
                    this.$refs['modalProducto'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'showmodalDelProducto': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalDelProducto'].show();
                } else {
					this.showmodalDelProducto = false;
                    this.$refs['modalDelProducto'].hide();
				}
            }
		},
        methods: {
            onDone(data) {
                if (this.modoEdicion=='C') { 
                    var newval = data.data.productoCreate;
                    this.addCreatedToTbl(newval.id);
                }
                if (this.modoEdicion=='U' || this.modoEdicion=='R') { this.jsonNewProducto = data.data.productoUpdate; }
                this.showmodalProducto = false;
                this.showSpnrCreate = false;
            },
            async addCreatedToTbl(idPrd) {
                this.vtable.bolLoading = true;
                let prod = await this.$apollo.query({ 
                                                        query: GET_PRODUCTO_BY_ID, 
                                                        variables: 
                                                        {
                                                            id: idPrd, 
                                                            id_categoria: null, 
                                                            id_marca: null,
                                                            nombre_descripcion: null,
                                                            es_busqueda: 0,
                                                            es_marcaxcliente: 0
                                                        }, 
                                                        fetchPolicy: 'network-only' 
                                                    });
                this.vtable.bolLoading = false;
                if (typeof prod.data != 'undefined') {
                    if (prod.data.producto.length>0) {
                        this.vtable.productos.push(prod.data.producto[0]);
                        this.vtable.selected = prod.data.producto[0].id;
                        return;
                    }
                }
                this.vtable.selected = null;
            },
            onDoneCBDel(data) {
                this.showmodalDelProducto = false;
                this.resMsgDelProducto = data.data.productoDelete;
                if (this.resMsgDelProducto==='OK') {
                    const index = this.vtable.productos.findIndex(x => x.id === this.vtable.selected);
                    var that = this;
                    setTimeout(function(){
                        if (index !== undefined) that.vtable.productos.splice(index, 1);
                        that.vtable.selected = null;
                        this.limpiarCamposBindedFrm();
                        that.jsonNewProducto = {};
                    }, 2000);
                }
            },
            onClose() {
                this.showmodalProducto = false;
            },
			onReset(evt) {
				if (typeof evt != 'undefined') evt.preventDefault();
                // Reset our form values
                this.limpiarCamposBindedFrm();
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
            },
            async getProductosData() {
                this.vtable.bolLoading = true;
                let prod = await this.$apollo.query({ 
                                                        query: GET_PRODUCTO_BY_ID, 
                                                        variables: 
                                                        { 
                                                            id: null, 
                                                            id_categoria: null, 
                                                            id_marca: null,
                                                            nombre_descripcion: null,
                                                            es_busqueda: 0,
                                                            es_marcaxcliente: 0
                                                        }, 
                                                        fetchPolicy: 'network-only' 
                                                    });
                this.vtable.bolLoading = false;
                if (typeof prod.data != 'undefined') {
                    if (prod.data.producto.length>0) {
                        this.vtable.productos = prod.data.producto;
                        this.vtable.selected = prod.data.producto[0].id;
                        return;
                    }
                }
                this.vtable.productos = [];
                this.vtable.selected = null;
            },
            determineModMode() {
                if (this.modoEdicion=='U' || this.modoEdicion=='R') {
                    this.getProductoById();
                }
            },
            async getProductoById() {
                if (typeof this.vtable.selected=='undefined' || this.vtable.selected==null) return;
                let prod = await this.$apollo.query({ 
                                                        query: GET_PRODUCTO_BY_ID, 
                                                        variables: 
                                                        {
                                                            id: this.vtable.selected, 
                                                            id_categoria: null, 
                                                            id_marca: null,
                                                            nombre_descripcion: null,
                                                            es_busqueda: 0,
                                                            es_marcaxcliente: 0
                                                        }, 
                                                        fetchPolicy: 'network-only' 
                                                    });
                if (typeof prod.data != 'undefined') {
                    let item = prod.data.producto[0];
                    this.form.id = item.id;
                    this.form.referencia_cod_prov = item.referencia_cod_prov;
                    this.form.nombre = item.nombre_producto;
                    this.form.descripcion = item.descripcion;
                    this.form.id_archivo_subido_img = item.id_archivo_subido_img;
                    this.form.url_imagen_lowres_uid = item.url_imagen_lowres_uid;
                    this.form.id_color = item.id_color;
                    this.form.color = item.color;
                    this.form.id_marca = item.id_marca;
                    this.form.nombre_marca = item.nombre_marca;
                    this.form.id_img_marca = item.id_img_marca;
                    this.form.id_tipo_material = item.id_tipo_material;
                    this.form.tipo_material = item.tipo_material;
                    this.form.id_genero = item.id_genero;
                    this.form.genero = item.genero;
                    this.form.id_categoria = item.id_categoria;
                    this.form.categoria = item.categoria;
                    this.form.precio = item.precio;
                    this.form.total_unidades = item.total_unidades;
                    this.bolValsRegGets = true;
                }
            },
            mostrarModal(edmode) {
                if (edmode=='R') this.ttlProducto = 'Consulta de producto';
                if (edmode=='D') {
                    this.showmodalDelProducto = true;
                    this.showmodalProducto = false;
                } else {
                    if (edmode=='C') this.ttlProducto = 'Nuevo producto';
                    if (edmode=='U') this.ttlProducto = 'Editar producto';
                    this.modoEdicion = edmode;
                    this.showmodalDelProducto = false;
                    this.showmodalProducto = true;
                }
            },
            callMutCreate() {
                var that = this;
                var urlFile = this.$store.getters.getBaseUrl+'/'+this.$store.getters.getFolderUpload+'/';
                this.showSpnrCreate = true;
                console.log(this.form);
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
            limpiarCamposBindedFrm() {
                this.form.id = null;
                this.form.referencia_cod_prov = '';
                this.form.nombre = '';
                this.form.descripcion = '';
                this.form.id_archivo_subido_img = null;
                this.form.url_imagen_lowres_uid = '';
                this.form.id_color = null;
                this.form.color = '';
                this.form.id_marca = null;
                this.form.nombre_marca = '';
                this.form.id_tipo_material = null;
                this.form.tipo_material = '';
                this.form.id_genero = null;
                this.form.genero = '';
                this.form.id_categoria = null;
                this.form.categoria = '';
                this.form.precio = null;
                this.form.total_unidades = null;
            }
        }
    }
</script>
<style>
    tr.highlight {
        background: rgb(145, 176, 235);
    }
</style>