<template>
    <div>
        <div class="card">
            <div class="card-header"><h4>Asignación de productos a cliente</h4></div>
            <div class="card-body">
                <!-- toolbar -->
                <!-- <b-card class="mb-2">
                    <b-button-toolbar aria-label="">
                        <b-button-group size="lg" class="mx-1">
                            <b-button @click="goBack()" variant="primary">
                                <span style="font-size: 1em; color: #CFFF68;">
                                    <font-awesome-icon icon="reply" />
                                </span>
                            </b-button>
                        </b-button-group>
                    </b-button-toolbar>
                </b-card> -->
                <!-- Seleccion de cliente -->
                <b-form-group
                    label="Cliente:"
                    label-for="estpdd">
                    <b-input-group prepend="Cliente:" class="mt-2 mb-4">
                        <b-form-input
                            name="nombrecli"
                            v-model="nombrecliente" 
                            disabled
                            required>
                        </b-form-input>
                        <b-input-group-append>
                            <b-button @click="bolShowModalSCli=true" variant="secondary">
                                <span style="font-size: 1em; color: #F4E939;">
                                    <font-awesome-icon icon="search" />
                                </span>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
                <!-- Modal de busqueda de usuarios -->
                <b-modal ref="modalBuscarCliente" hide-footer title="Buscar cliente" @close="bolShowModalSCli=false"  @hidden="bolShowModalSCli=false">
                    <b-input-group prepend="" class="mt-2 mb-2">
                        <v-text-field
                            v-model="formbuscarcli.vtableclientes.search"
                            label="Buscar..."
                            single-line
                            hide-details
                            autofocus>
                        </v-text-field>
                    </b-input-group>
                    <!-- Tabla de lista de usuarios -->
                    <v-app id="inspire">
                        <v-data-table
                            :headers="formbuscarcli.vtableclientes.headers"
                            :items="formbuscarcli.vtableclientes.clientes"
                            :search="formbuscarcli.vtableclientes.search"
                            :loading="formbuscarcli.vtableclientes.bolLoading" 
                            :loading-text="formbuscarcli.vtableclientes.loadingtxt">
                            <template v-slot:item="{ item }">
                                <tr
                                    :class="{highlight:item.id===formbuscarcli.vtableclientes.selected}" 
                                    @click="formbuscarcli.vtableclientes.selected=item.id">
                                    <td>
                                        <b-img 
                                            v-bind="formbuscarcli.vtableclientes.mainPropsImgTbl"
                                            :src="item.url_imagen_lowres_uid" 
                                            fluid 
                                            alt="fluid">
                                        </b-img>
                                    </td>
                                    <td>{{ item.nombre_completo }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.telefono_fijo }}</td>
                                    <td>{{ item.telefono_celular }}</td>
                                    <td>{{ item.direccion }}</td>
                                    <td>{{ item.nombre_completo }}</td>
                                </tr>
                            </template>
                        </v-data-table>
                        <b-col lg="4" class="pb-2">
                            <b-button @click="bolShowModalSCli=false" variant="light" class="float-right">Cancelar</b-button>
                            <b-button @click="selCliente()" variant="primary" class="float-right mr-2">
                                <b-spinner type="border" small v-show="formbuscarcli.loadingGetMXC"></b-spinner>
                                <span v-show="!formbuscarcli.loadingGetMXC" style="font-size: 1em; color: #CFFF68;">
                                    <font-awesome-icon icon="check" />
                                </span>
                                Seleccionar
                            </b-button>
                        </b-col>
                    </v-app>
                    <br class="clear-float">
                </b-modal>
                <!-- Modal de selección y guardado de producto -->
                <b-modal ref="modalCreatePXCli" hide-footer :title="ttlModal" @close="bolShowModalCrtPXC=false"  @hidden="bolShowModalCrtPXC=false">
                    <ApolloMutation
                        ref="mutCreate"
                        :mutation="require('../graphql/productoXClienteCreate.gql').default"
                        :variables="{
                                     id_cliente: formbuscarcli.vtableclientes.selected, 
                                     id_producto: form.id_producto,
                                     descuento: form.descuento, 
                                     precio: form.precio, 
                                     observaciones: form.observaciones
                                    }"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <b-alert v-show="validacMsg!=''" show variant="warning">{{ validacMsg }}</b-alert>
                            <productos-xor-cliente-form
                                ref="mfrmCreate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :id_cliente.sync="form.id_cliente" 
                                :id_producto.sync="form.id_producto"
                                :descuento.sync="form.descuento"
                                :precio.sync="form.precio"
                                :observaciones.sync="form.observaciones"
                            ></productos-xor-cliente-form>
                            <b-col lg="4" class="pb-2">
                                <b-button @click="bolShowModalCrtPXC=false" variant="light" class="float-right">Cancelar</b-button>
                                <b-button @click="callSavePXCli()" variant="primary" class="float-right mr-2">
                                    <b-spinner type="border" small v-show="showSpnrMut"></b-spinner>
                                    <span v-show="!showSpnrMut" style="font-size: 1em; color: #f7f9ff;">
                                        <font-awesome-icon icon="save" />
                                    </span>
                                    Guardar
                                </b-button>
                            </b-col>
                            <br class="clear-float">
                        </template>
                    </ApolloMutation>
                </b-modal>
                <!-- Modal de selección y edición de marca -->
                <b-modal ref="modalUpdatePXCli" hide-footer :title="ttlModal" @close="bolShowModalUpdPXC=false"  @hidden="bolShowModalUpdPXC=false">
                    <ApolloMutation
                        ref="mutUpdate"
                        :mutation="require('../graphql/productoXClienteUpdate.gql').default"
                        :variables="{
                                     id: vtablepxcli.selected, 
                                     id_cliente: formbuscarcli.vtableclientes.selected, 
                                     id_producto: form.id_producto, 
                                     precio: form.precio, 
                                     descuento: form.descuento, 
                                     observaciones: form.observaciones
                                    }"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <b-alert v-show="validacMsg!=''" show variant="warning">{{ validacMsg }}</b-alert>
                            <productos-xor-cliente-form
                                ref="mfrmUpdate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :id_cliente.sync="form.id_cliente" 
                                :id_producto.sync="form.id_producto"
                                :descuento.sync="form.descuento"
                                :precio.sync="form.precio"
                                :observaciones.sync="form.observaciones"
                            ></productos-xor-cliente-form>
                            <b-col lg="4" class="pb-2">
                                <b-button @click="bolShowModalUpdPXC=false" variant="light" class="float-right">Cancelar</b-button>
                                <b-button @click="callUpdatePXCli()" variant="primary" class="float-right mr-2">
                                    <b-spinner type="border" small v-show="showSpnrMut"></b-spinner>
                                    <span v-show="!showSpnrMut" style="font-size: 1em; color: #f7f9ff;">
                                        <font-awesome-icon icon="save" />
                                    </span>
                                    Guardar
                                </b-button>
                            </b-col>
                            <br class="clear-float">
                        </template>
                    </ApolloMutation>
                </b-modal>
                <!-- Modal de eliminar registro -->
                <b-modal ref="modalDelPXCli" hide-footer title="Eliminar vínculo">
                    <ApolloMutation
                        :mutation="require('../graphql/productoXClienteDelete.gql').default"
                        :variables="{id: vtablepxcli.selected}"
                        @done="onDoneCBDel">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <label>¿Está seguro que desea eliminar el registro seleccionado?</label>
                            <div class="float-right">
                                <b-button @click="mutate()" :disabled="loading" variant="primary" autofocus>
                                    <b-spinner type="border" small v-show="loading"></b-spinner>
                                    Aceptar
                                </b-button>
                                <b-button @click="onCloseDelPXCli()" variant="light">Cancelar</b-button>
                            </div>
                            <br class="clear-float">
                        </template>
                    </ApolloMutation>
                </b-modal>
                <!-- Tabla de listado de productos -->
                <v-app id="inspire">
                    <v-data-table
                        :headers="vtablepxcli.headers"
                        :items="vtablepxcli.prodsxcli"
                        :search="vtablepxcli.search"
                        :loading="vtablepxcli.bolLoading"
                        item-key="id"
                        class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>Productos</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical>
                                </v-divider>
                                <v-spacer></v-spacer>
                                <b-input-group-append>
                                    <b-button @click="mostrarModal('C')" :disabled="formbuscarcli.vtableclientes.selected==null" variant="outline-secondary">
                                        <span style="font-size: 1em; color: #2b53cc;">
                                            <font-awesome-icon icon="star-of-life" />
                                        </span>
                                    </b-button>
                                    <b-button @click="mostrarModal('U')" :disabled="vtablepxcli.selected==null" variant="outline-secondary">
                                        <span style="font-size: 1em; color: #1ab04c;">
                                            <font-awesome-icon icon="edit" />
                                        </span>
                                    </b-button>
                                    <b-button @click="mostrarModal('R')" :disabled="vtablepxcli.selected==null" variant="outline-secondary">
                                        <span style="font-size: 1em; color: #64B1F9;">
                                            <font-awesome-icon icon="eye" />
                                        </span>
                                    </b-button>
                                    <b-button @click="mostrarModal('D')" :disabled="vtablepxcli.selected==null" variant="outline-secondary">
                                        <span style="font-size: 1em; color: #F96464;">
                                            <font-awesome-icon icon="minus-circle" />
                                        </span>
                                    </b-button>
                                </b-input-group-append>
                            </v-toolbar>
                        </template>
                        <template v-slot:item="{ item }">
                            <tr
                                :class="{highlight:item.id===vtablepxcli.selected}" 
                                @click="vtablepxcli.selected=item.id">
                                <td>{{ item.nombre_producto }}</td>
                                <td>
                                    <b-img 
                                        v-bind="vtablepxcli.mainPropsImgTbl"
                                        :src="item.url_imagen_lowres_uid" 
                                        fluid 
                                        alt="fluid">
                                    </b-img>
                                </td>
                                <td>{{ item.descuento }}</td> 
                                <td>{{ item.precio }}</td> 
                                <td>{{ item.observaciones }}</td> 
                            </tr>
                        </template>
                    </v-data-table>
                </v-app>
            </div>
        </div>
    </div>
</template>
<script>
    import ProductosXorClienteForm from './ProductosXorClienteForm.vue';
    import { GET_USERSTBL_BY_ID } from '../graphql/usersTblGetById.gql';
    import { GET_PRODUCTOXCLIENTE_BY_IDCLI } from '../graphql/productoXClienteGetById.gql';

    export default {
        components: {
            ProductosXorClienteForm
        },
        mounted() {
            this.getUsuariosData(null);
        },
        data() {
            return {
                validacMsg: '',
                idclientesel: null,
                nombrecliente: '',
                bolShowModalSCli: false,
                bolShowModalUpdPXC: false,
                bolShowModalCrtPXC: false,
                showModalDelPXC: false,
                modoEdicion: '',
                ttlModal: '',
                bolValsRegGets: false,
                showSpnrMut: false,
                form: {
                    id: null,
                    id_cliente: null,
                    id_producto: null,
                    descuento: null,
                    precio: null,
                    observaciones: '',
                },
                formbuscarcli: {
                    cliselid: null,
                    loadingGetMXC: false,
                    vtableclientes: {
                        search: '',
                        bolLoading: false,
                        loadingtxt: '',
                        headers: [
                            {text: '', align: 'left', value: 'url_imagen_lowres_uid'},
                            {text: 'Nombre', align: 'left', value: 'nombre_completo'},
                            {text: 'E-mail', sortable: false, value: 'email'},
                            {text: 'Teléfono fijo', sortable: false, value: 'telefono_fijo'},
                            {text: 'Teléfono móvil', sortable: false, value: 'telefono_celular'},
                            {text: 'Dirección', sortable: false, value: 'direccion'},
                        ],
                        clientes: [],
                        selected: null,
                        mainPropsImgTbl: { width: 70, height: 70 },
                    },
                },
                vtablepxcli: {
                    search: '',
                    bolLoading: false,
                    headers: [
                        {text: 'Nombre', align: 'left', value: 'nombre_producto'},
                        {text: 'Imágen', sortable: false, value: 'url_imagen_lowres_uid'},
                        {text: 'Descuento', sortable: false, value: 'descuento'},
                        {text: 'Precio', sortable: false, value: 'precio'},
                        {text: 'Observación', sortable: false, value: 'observaciones'},
                    ],
                    prodsxcli: [],
                    selected: null,
                    mainPropsImgTbl: { width: 40, height: 40 },
                },
            }
        },
	    watch: {
            'bolShowModalSCli': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalBuscarCliente'].show();
                } else {
					this.showModalDelPXC = false;
                    this.$refs['modalBuscarCliente'].hide();
				}
            },
			'bolShowModalCrtPXC': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalCreatePXCli'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.bolShowModalCrtPXC = false;
                    this.$refs['modalCreatePXCli'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'bolShowModalUpdPXC': function(newVal, oldVal) {
                console.log('bolShowModalUpdPXC: ', newVal);
				if(newVal) {
                    this.$refs['modalUpdatePXCli'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.bolShowModalUpdPXC = false;
                    this.$refs['modalUpdatePXCli'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'showModalDelPXC': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalDelPXCli'].show();
                } else {
					this.showModalDelPXC = false;
                    this.$refs['modalDelPXCli'].hide();
				}
            },
            'formbuscarcli.vtableclientes.selected': function(newVal, oldVal) {
                const index = this.formbuscarcli.vtableclientes.clientes.findIndex(x => x.id === newVal);
                if (index !== undefined && index>=0) {
                    this.nombrecliente = this.formbuscarcli.vtableclientes.clientes[index].nombre_completo;
                }
            },
        },
        methods: {
            onCloseDelPXCli() {
                this.bolShowModalSCli = false;
                this.bolShowModalUpdPXC = false;
                this.bolShowModalCrtPXC = false;
                this.showModalDelPXC = false;
            },
            determineModMode() {
                if (this.modoEdicion=='U' || this.modoEdicion=='R') this.getProductoXCliById();
            },
            async getProductoXCliById() {
                if (typeof this.vtablepxcli.selected=='undefined' || this.vtablepxcli.selected==null) return;
                const index = this.vtablepxcli.prodsxcli.findIndex(x => x.id === this.vtablepxcli.selected);
                if (typeof index != 'undefined' && index>=0) {
                    let item = this.vtablepxcli.prodsxcli[index];
                    this.form.id = item.id;
                    this.form.id_cliente = item.id_cliente;
                    this.form.id_producto = item.id_producto;
                    this.form.descuento = item.descuento;
                    this.form.precio = item.precio;
                    this.form.observaciones = item.observaciones;
                    this.bolValsRegGets = true;
                } else {
                    console.log('No se ha encontrado el marcaXcliente');
                }
            },
            async traerMXCByClienteID(idcli) {
                return await this.$apollo.query({ query: GET_PRODUCTOXCLIENTE_BY_IDCLI, variables: { id_cliente: idcli }, fetchPolicy: 'network-only' });
            },
            onDone(data) {
                if (this.modoEdicion=='C') { 
                    var newval = data.data.productoXClienteCreate;
                    if (Object.keys(newval).length > 0) {
                        this.addCreatedToTbl(newval.id_cliente, newval.id);
                    }
                }
                if (this.modoEdicion=='U') {
                    var newval = data.data.productoXClienteUpdate;
                    if (Object.keys(newval).length > 0) {
                        this.updtPXCToTbl(newval.id_cliente);
                        this.$refs['modalCreatePXCli'].hide();
                    }
                }
                this.showSpnrCreate = false;
                this.bolShowModalCrtPXC = false;
                this.bolShowModalUpdPXC = false;
            },
            async addCreatedToTbl(idCliente, idPXC) {
                var that = this;
                    let mrcxctmp = await this.$apollo.query({ query: GET_PRODUCTOXCLIENTE_BY_IDCLI, variables: { id_cliente: this.formbuscarcli.vtableclientes.selected }, fetchPolicy: 'network-only' }).then(res => {
                        const index = res.data.productosxclienteId.findIndex(x => x.id === idPXC);
                        if (typeof index != 'undefined' && index>=0) {
                            that.vtablepxcli.prodsxcli.push(res.data.productosxclienteId[index]);
                        } else {
                            console.log('No se ha encontrado el marcaXcliente');
                        }
                    });
                    that.$refs['modalCreatePXCli'].hide();
            },
            async updtPXCToTbl(idCliente) {
                var that = this;
                let mrcxctmp = this.$apollo.query({ query: GET_PRODUCTOXCLIENTE_BY_IDCLI, variables: { id_cliente: idCliente }, fetchPolicy: 'network-only' }).then(res => {
                    const indexO = that.vtablepxcli.prodsxcli.findIndex(x => x.id === that.vtablepxcli.selected);
                    const indexN = res.data.productosxclienteId.findIndex(x => x.id === that.vtablepxcli.selected);
                    var clave = null;
                    for (clave in that.vtablepxcli.prodsxcli[indexO]) {
                        that.vtablepxcli.prodsxcli[indexO][clave] = res.data.productosxclienteId[indexN][clave];
                    }
                });
            },
            onDoneCBDel(data) {
                this.resMsgDelMXCli = data.data.productoXClienteDelete;
                if (this.resMsgDelMXCli==='OK') {
                    const index = this.vtablepxcli.prodsxcli.findIndex(x => x.id === this.vtablepxcli.selected);
                    var that = this;
                    // setTimeout(function(){
                    if (index !== undefined) this.vtablepxcli.prodsxcli.splice(index, 1);
                    this.vtablepxcli.selected = null;
                    this.id = null;
                    this.id_cliente = null;
                    this.id_producto = null;
                    this.descuento = null;
                    this.precio = null;
                    this.observaciones = '';
                    // that.jsonNewMarca = {};
                    this.showModalDelPXC = false;
                    // }, 1000);
                }
            },
            onCloseDelMarca() {
                this.showModalDelPXC = false;
            },
            async getUsuariosData() {
                this.formbuscarcli.vtableclientes.bolLoading = true;
                let usrs = await this.$apollo.query({ query: GET_USERSTBL_BY_ID, variables: { id: null, cod_role: 'CUSTOMER' }, fetchPolicy: 'network-only'  });
                this.formbuscarcli.vtableclientes.bolLoading = false;
                if (typeof usrs.data != 'undefined') {
                    if (usrs.data.usuariotbl.length>0) {
                        this.formbuscarcli.vtableclientes.clientes = usrs.data.usuariotbl;
                        return;
                    }
                }
                this.formbuscarcli.vtableclientes.clientes = [];
                this.formbuscarcli.vtableclientes.selected = null;
            },
            async selCliente() {
                this.formbuscarcli.loadingGetMXC = true;
                let prdxcli = await this.$apollo.query({ query: GET_PRODUCTOXCLIENTE_BY_IDCLI, variables: { id_cliente: this.formbuscarcli.vtableclientes.selected }, fetchPolicy: 'network-only'  });
                this.formbuscarcli.loadingGetMXC = false;
                if (typeof prdxcli.data != 'undefined') {
                    if (prdxcli.data.productosxclienteId.length>0) {
                        // actualiza productos seleccionadas del cliente
                        this.vtablepxcli.prodsxcli = prdxcli.data.productosxclienteId;
                        const index = this.formbuscarcli.vtableclientes.clientes.findIndex(x => x.id === this.formbuscarcli.vtableclientes.selected);
                        if (index !== undefined) this.nombrecliente = this.formbuscarcli.vtableclientes.clientes[index].nombre_completo;
                        this.bolShowModalSCli = false;
                        this.form.id_cliente = this.formbuscarcli.vtableclientes.selected;
                        return;
                    }
                }
                this.vtablepxcli.prodsxcli = [];
                this.bolShowModalSCli = false;
            },
            callSavePXCli() {
                    if (typeof this.form.id_producto == 'undefined' || this.form.id_producto==null) {
                        this.validacMsg = 'Seleccione una marca';
                        return;
                    } else { this.validacMsg = ''; }
                    if (typeof this.form.id_cliente == 'undefined' || this.form.id_cliente==null) {
                        this.validacMsg = 'Seleccione un cliente';
                        return;
                    } else { this.validacMsg = ''; }
                    if (typeof this.form.precio == 'undefined' || this.form.precio==null) {
                        this.validacMsg = 'Indique el precio';
                        return;
                    } else { this.validacMsg = ''; }
                    if (typeof this.form.descuento == 'undefined' || this.form.descuento==null) {
                        this.validacMsg = 'Indique el descuento';
                        return;
                    } else { this.validacMsg = ''; }
                    this.showSpnrMut = true;
                    this.$refs.mutCreate.mutate();
            },
            callUpdatePXCli() {
                    if (typeof this.form.id_producto == 'undefined' || this.form.id_producto==null) {
                        this.validacMsg = 'Seleccione una marca';
                        return;
                    } else { this.validacMsg = ''; }
                    if (typeof this.form.id_cliente == 'undefined' || this.form.id_cliente==null) {
                        this.validacMsg = 'Seleccione un cliente';
                        return;
                    } else { this.validacMsg = ''; }
                    if (typeof this.form.precio == 'undefined' || this.form.precio==null) {
                        this.validacMsg = 'Indique el precio';
                        return;
                    } else { this.validacMsg = ''; }
                    if (typeof this.form.descuento == 'undefined' || this.form.descuento==null) {
                        this.validacMsg = 'Indique el descuento';
                        return;
                    } else { this.validacMsg = ''; }
                    this.showSpnrMut = true;
                    this.$refs.mutUpdate.mutate();
            },
            mostrarModal(edmode) {
                this.showSpnrMut = false;
                this.form.id_cliente = this.formbuscarcli.vtableclientes.selected;
                if (edmode=='R') {
                    this.ttlModal = 'Consulta de vínculo'; 
                    this.bolShowModalUpdPXC = true;
                    this.bolShowModalCrtPXC = false;
                    this.modoEdicion = edmode;
                }
                if (edmode=='D') {
                    this.showModalDelPXC = true;
                    this.bolShowModalCrtPXC = false;
                    this.bolShowModalUpdPXC = false;
                } else {
                    if (edmode=='C') {
                        this.ttlModal = 'Nuevo vínculo';
                        this.bolShowModalCrtPXC = true;
                        this.bolShowModalUpdPXC = false;
                    }
                    if (edmode=='U') {
                        this.ttlModal = 'Editar vínculo';
                        this.bolShowModalCrtPXC = false;
                        this.bolShowModalUpdPXC = true;
                    }
                    this.modoEdicion = edmode;
                    this.showModalDelPXC = false;
                }
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
            limpiarCamposBindedFrm() {
                // this.form.id_cliente = null;
                this.form.id_producto = null;
                this.form.precio = null;
                this.form.descuento = null;
                this.form.observaciones = '';
            },
            goBack() {
                this.$router.back();
            },
        }
    }
</script>
<style>
    tr.highlight {
        background: #91B1EB;
    }
</style>