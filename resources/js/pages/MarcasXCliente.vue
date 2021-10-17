<template>
    <div>
        <div class="card">
            <div class="card-header"><h4>Asignación de marcas a cliente</h4></div>
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
                    <b-input-group prepend="" class="mt-2 mb-4">
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
                <!-- Modal de selección y guardado de marca -->
                <b-modal ref="modalCreateMXCli" hide-footer :title="ttlModal" @close="bolShowModalCrtMrc=false"  @hidden="bolShowModalCrtMrc=false">
                    <ApolloMutation
                        ref="mutCreate"
                        :mutation="require('../graphql/marcaxclienteCreate.gql').default"
                        :variables="{
                                     id_cliente: formbuscarcli.vtableclientes.selected, id_marca: form.id_marca,
                                     descuento: form.descuento, observaciones: form.observaciones
                                    }"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <b-alert v-show="validacMsg!=''" show variant="warning">{{ validacMsg }}</b-alert>
                            <marcas-xor-cliente-form
                                ref="mfrmCreate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :id_cliente.sync="form.id_cliente" 
                                :id_marca.sync="form.id_marca"
                                :descuento.sync="form.descuento"
                                :observaciones.sync="form.observaciones"
                            ></marcas-xor-cliente-form>
                            <b-col lg="4" class="pb-2">
                                <b-button @click="bolShowModalCrtMrc=false" variant="light" class="float-right">Cancelar</b-button>
                                <b-button @click="callSaveMXCli()" variant="primary" class="float-right mr-2">
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
                <b-modal ref="modalUpdateMXCli" hide-footer :title="ttlModal" @close="bolShowModalUpdMrc=false"  @hidden="bolShowModalUpdMrc=false">
                    <ApolloMutation
                        ref="mutUpdate"
                        :mutation="require('../graphql/marcaXClienteUpdate.gql').default"
                        :variables="{
                                     id: vtablemxcli.selected,
                                     id_cliente: formbuscarcli.vtableclientes.selected, id_marca: form.id_marca,
                                     descuento: form.descuento, observaciones: form.observaciones
                                    }"
                        @done="onDone">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <b-alert v-show="validacMsg!=''" show variant="warning">{{ validacMsg }}</b-alert>
                            <marcas-xor-cliente-form
                                ref="mfrmUpdate"
                                :modoEdicion.sync="modoEdicion"
                                :bolValsRegGets.sync="bolValsRegGets"
                                :id.sync="form.id" 
                                :id_cliente.sync="form.id_cliente" 
                                :id_marca.sync="form.id_marca"
                                :descuento.sync="form.descuento"
                                :observaciones.sync="form.observaciones"
                            ></marcas-xor-cliente-form>
                            <b-col lg="4" class="pb-2">
                                <b-button @click="bolShowModalUpdMrc=false" variant="light" class="float-right">Cancelar</b-button>
                                <b-button @click="callUpdateMXCli()" variant="primary" class="float-right mr-2">
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
                <b-modal ref="modalDelMXCli" hide-footer title="Eliminar vínculo">
                    <ApolloMutation
                        :mutation="require('../graphql/marcaXClienteDelete.gql').default"
                        :variables="{id: vtablemxcli.selected}"
                        @done="onDoneCBDel">
                        <template v-slot="{mutate, loading, called , error}">
                            <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                            <label>¿Está seguro que desea eliminar el registro seleccionado?</label>
                            <div class="float-right">
                                <b-button @click="mutate()" :disabled="loading" variant="primary" autofocus>
                                    <b-spinner type="border" small v-show="loading"></b-spinner>
                                    Aceptar
                                </b-button>
                                <b-button @click="onCloseDelMXCli()" variant="light">Cancelar</b-button>
                            </div>
                            <br class="clear-float">
                        </template>
                    </ApolloMutation>
                </b-modal>
                <!-- Tabla de listado de marcas -->
                <v-app id="inspire">
                    <v-data-table
                        :headers="vtablemxcli.headers"
                        :items="vtablemxcli.marcasxcli"
                        :search="vtablemxcli.search"
                        :loading="vtablemxcli.bolLoading"
                        item-key="id"
                        class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>Marcas</v-toolbar-title>
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
                                    <b-button @click="mostrarModal('U')" :disabled="vtablemxcli.selected==null" variant="outline-secondary">
                                        <span style="font-size: 1em; color: #1ab04c;">
                                            <font-awesome-icon icon="edit" />
                                        </span>
                                    </b-button>
                                    <b-button @click="mostrarModal('R')" :disabled="vtablemxcli.selected==null" variant="outline-secondary">
                                        <span style="font-size: 1em; color: #64B1F9;">
                                            <font-awesome-icon icon="eye" />
                                        </span>
                                    </b-button>
                                    <b-button @click="mostrarModal('D')" :disabled="vtablemxcli.selected==null" variant="outline-secondary">
                                        <span style="font-size: 1em; color: #F96464;">
                                            <font-awesome-icon icon="minus-circle" />
                                        </span>
                                    </b-button>
                                </b-input-group-append>
                            </v-toolbar>
                        </template>
                        <template v-slot:item="{ item }">
                            <tr
                                :class="{highlight:item.id===vtablemxcli.selected}" 
                                @click="vtablemxcli.selected=item.id">
                                <td>{{ item.nombre_marca }}</td>
                                <td>
                                    <b-img 
                                        v-bind="vtablemxcli.mainPropsImgTbl"
                                        :src="item.url_imagen_lowres_uid" 
                                        fluid 
                                        alt="fluid">
                                    </b-img>
                                </td>
                                <td>{{ item.descuento }}</td> 
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
    import MarcasXorClienteForm from './MarcasXorClienteForm.vue';
    import { GET_USERSTBL_BY_ID } from '../graphql/usersTblGetById.gql';
    import { GET_MARCAXCLIENTE_BY_IDCLI } from '../graphql/marcaxclienteGetById.gql';

    export default {
        components: {
            MarcasXorClienteForm
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
                bolShowModalUpdMrc: false,
                bolShowModalCrtMrc: false,
                showModalDelMXC: false,
                modoEdicion: '',
                ttlModal: '',
                bolValsRegGets: false,
                showSpnrMut: false,
                form: {
                    id: null,
                    id_cliente: null,
                    id_marca: null,
                    descuento: null,
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
                vtablemxcli: {
                    search: '',
                    bolLoading: false,
                    headers: [
                        {text: 'Nombre', align: 'left', value: 'nombre_marca'},
                        {text: 'Logo', sortable: false, value: 'url_imagen_lowres_uid'},
                        {text: 'Descuento', sortable: false, value: 'descuento'},
                        {text: 'Observación', sortable: false, value: 'observaciones'},
                    ],
                    marcasxcli: [],
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
					this.showModalDelMXC = false;
                    this.$refs['modalBuscarCliente'].hide();
				}
            },
			'bolShowModalCrtMrc': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalCreateMXCli'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.bolShowModalCrtMrc = false;
                    this.$refs['modalCreateMXCli'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'bolShowModalUpdMrc': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalUpdateMXCli'].show();
                    this.onReset();
                    this.determineModMode();
                } else {
					this.bolShowModalUpdMrc = false;
                    this.$refs['modalUpdateMXCli'].hide();
                    this.bolValsRegGets = false;
				}
            },
            'showModalDelMXC': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalDelMXCli'].show();
                } else {
					this.showModalDelMXC = false;
                    this.$refs['modalDelMXCli'].hide();
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
            onCloseDelMXCli() {
                this.bolShowModalSCli = false;
                this.bolShowModalUpdMrc = false;
                this.bolShowModalCrtMrc = false;
                this.showModalDelMXC = false;
            },
            determineModMode() {
                if (this.modoEdicion=='U' || this.modoEdicion=='R') this.getMarcaXCliById();
            },
            async getMarcaXCliById() {
                if (typeof this.vtablemxcli.selected=='undefined' || this.vtablemxcli.selected==null) return;
                const index = this.vtablemxcli.marcasxcli.findIndex(x => x.id === this.vtablemxcli.selected);
                if (typeof index != 'undefined' && index>=0) {
                    let item = this.vtablemxcli.marcasxcli[index];
                    this.form.id = item.id;
                    this.form.id_cliente = item.id_cliente;
                    this.form.id_marca = item.id_marca;
                    this.form.descuento = item.descuento;
                    this.form.observaciones = item.observaciones;
                    this.bolValsRegGets = true;
                } else {
                    console.log('No se ha encontrado el marcaXcliente');
                }
            },
            async traerMXCByClienteID(idcli) {
                return await this.$apollo.query({ query: GET_MARCAXCLIENTE_BY_IDCLI, variables: { id_cliente: idcli }, fetchPolicy: 'network-only' });
            },
            onDone(data) {
                if (this.modoEdicion=='C') { 
                    var newval = data.data.marcaXClienteCreate;
                    if (Object.keys(newval).length > 0) {
                        this.addCreatedToTbl(newval.id_cliente, newval.id);
                    }
                }
                if (this.modoEdicion=='U') {
                    var newval = data.data.marcaXClienteUpdate;
                    if (Object.keys(newval).length > 0) {
                        this.updtMXCToTbl(newval.id_cliente);
                        this.$refs['modalCreateMXCli'].hide();
                    }
                }
                this.showSpnrCreate = false;
                this.bolShowModalCrtMrc = false;
                this.bolShowModalUpdMrc = false;
            },
            async addCreatedToTbl(idCliente, idMXC) {
                var that = this;
                    let mrcxctmp = await this.$apollo.query({ query: GET_MARCAXCLIENTE_BY_IDCLI, variables: { id_cliente: idCliente }, fetchPolicy: 'network-only' }).then(res => {
                        const index = res.data.marcasxclienteId.findIndex(x => x.id === idMXC);
                        if (typeof index != 'undefined' && index>=0) {
                            that.vtablemxcli.marcasxcli.push(res.data.marcasxclienteId[index]);
                        } else {
                            console.log('No se ha encontrado el marcaXcliente');
                        }
                    });
                    that.$refs['modalCreateMXCli'].hide();
            },
            async updtMXCToTbl(idCliente) {
                var that = this;
                let mrcxctmp = this.$apollo.query({ query: GET_MARCAXCLIENTE_BY_IDCLI, variables: { id_cliente: idCliente }, fetchPolicy: 'network-only' }).then(res => {
                    const indexO = that.vtablemxcli.marcasxcli.findIndex(x => x.id === that.vtablemxcli.selected);
                    const indexN = res.data.marcasxclienteId.findIndex(x => x.id === that.vtablemxcli.selected);
                    var clave = null;
                    for (clave in that.vtablemxcli.marcasxcli[indexO]) {
                        that.vtablemxcli.marcasxcli[indexO][clave] = res.data.marcasxclienteId[indexN][clave];
                    }
                });
            },
            onDoneCBDel(data) {
                this.resMsgDelMXCli = data.data.marcaXClienteDelete;
                if (this.resMsgDelMXCli==='OK') {
                    const index = this.vtablemxcli.marcasxcli.findIndex(x => x.id === this.vtablemxcli.selected);
                    var that = this;
                    // setTimeout(function(){
                    if (index !== undefined) this.vtablemxcli.marcasxcli.splice(index, 1);
                    this.vtablemxcli.selected = null;
                    this.id = null;
                    this.id_cliente = null;
                    this.id_marca = null;
                    this.descuento = null;
                    this.observaciones = '';
                    // that.jsonNewMarca = {};
                    this.showModalDelMXC = false;
                    // }, 1000);
                }
            },
            onCloseDelMarca() {
                this.showModalDelMXC = false;
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
                this.vtablemxcli.marcaselctd = [];
                this.formbuscarcli.loadingGetMXC = true;
                let mrcxcli = await this.$apollo.query({ query: GET_MARCAXCLIENTE_BY_IDCLI, variables: { id_cliente: this.formbuscarcli.vtableclientes.selected }, fetchPolicy: 'network-only'  });
                this.formbuscarcli.loadingGetMXC = false;
                if (typeof mrcxcli.data != 'undefined') {
                    if (mrcxcli.data.marcasxclienteId.length>0) {
                        // actualiza marcas seleccionadas del cliente
                        this.vtablemxcli.marcasxcli = mrcxcli.data.marcasxclienteId;
                        const index = this.formbuscarcli.vtableclientes.clientes.findIndex(x => x.id === this.formbuscarcli.vtableclientes.selected);
                        if (index !== undefined) this.nombrecliente = this.formbuscarcli.vtableclientes.clientes[index].nombre_completo;
                        this.bolShowModalSCli = false;
                        return;
                    }
                }
                this.vtablemxcli.marcasxcli = [];
                this.bolShowModalSCli = false;
            },
            callSaveMXCli() {
                    if (typeof this.form.id_marca == 'undefined' || this.form.id_marca==null) {
                        this.validacMsg = 'Seleccione una marca';
                        return;
                    } else { this.validacMsg = ''; }
                    if (typeof this.form.descuento == 'undefined' || this.form.descuento==null) {
                        this.validacMsg = 'Indique el descuento';
                        return;
                    } else { this.validacMsg = ''; }
                    this.showSpnrMut = true;
                    this.$refs.mutCreate.mutate();
            },
            callUpdateMXCli() {
                    if (typeof this.form.id_marca == 'undefined' || this.form.id_marca==null) {
                        this.validacMsg = 'Seleccione una marca';
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
                    this.bolShowModalUpdMrc = true;
                    this.bolShowModalCrtMrc = false;
                    this.modoEdicion = edmode;
                }
                if (edmode=='D') {
                    this.showModalDelMXC = true;
                    this.bolShowModalCrtMrc = false;
                    this.bolShowModalUpdMrc = false;
                } else {
                    if (edmode=='C') {
                        this.ttlModal = 'Nuevo vínculo';
                        this.bolShowModalCrtMrc = true;
                        this.bolShowModalUpdMrc = false;
                    }
                    if (edmode=='U') {
                        this.ttlModal = 'Editar vínculo';
                        this.bolShowModalCrtMrc = false;
                        this.bolShowModalUpdMrc = true;
                    }
                    this.modoEdicion = edmode;
                    this.showModalDelMXC = false;
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
                this.form.id_cliente = null;
                this.form.id_marca = null;
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