<template>
    <div>
        <div class="card-header"><h4>Listado de pedidos realizados</h4></div>
        <div class="card-body">
            <!-- AGREGAR FILTROS DE BUSQUEDA -->
            <!-- <b-form @submit="onSubmit" @reset="onReset"> v-model="form.email" -->
            <b-form>
                <b-form-group
                    label="Estado del pedido:"
                    label-for="estpdd">
                    <b-form-select
                        name="estpdd"
                        v-model="selectedEstPdd"
                        :options="estadosPedido"
                        value-field="id_catalogo"
                        text-field="valor">
                </b-form-select>
                </b-form-group>
                <!-- Seleccion de cliente -->
                <b-form-group
                    label="Cliente:"
                    label-for="estpdd">
                    <b-input-group prepend="" class="mt-2 mb-2">
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
                            <b-button @click="onCloseSelCliente()" variant="light" class="float-right">Cancelar</b-button>
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
                <b-form-group
                    label="Número de pedido:"
                    label-for="numpdd">
                    <b-form-input
                        name="numpdd"
                        v-model="numeropedido">
                    </b-form-input>
                </b-form-group>
            </b-form>
            <div>
                <b-button @click="onFilterPedidos()" :disabled="vtable.bolLoading" variant="primary" class="float-right mb-4 mt-2">
                    <b-spinner type="border" small v-show="vtable.bolLoading"></b-spinner>
                    <span v-show="!vtable.bolLoading" style="font-size: 1em; color: #CFFF68;">
                        <font-awesome-icon icon="filter" />
                    </span>
                    Filtrar
                </b-button>
                <br class="clear-float">
            </div>
            <br class="clear-float">
            <v-app id="inspire" class="mt-4">
                <v-data-table
                    :headers="vtable.headers"
                    :items="vtable.productos"
                    :loading="vtable.bolLoading"
                    class="elevation-1"
                    item-key="id_pedido">
                    <template v-slot:item="{ item }">
                        <tr
                            :class="{highlight:item.id_pedido===vtable.selected}" 
                            @click="vtable.selected=item.id_pedido">
                            <td>{{ item.numero_pedido }}</td>
                            <td>{{ item.estado_pedido }}</td>
                            <td>{{ item.nombre_cliente }}</td>
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
                            <td>{{ item.cantidad_producto }}</td>
                            <td v-show="item.tiene_descuento_porprod==0 && item.tiene_descuento_pormrc==0">{{ item.precio_unitario }}</td>
                            <td v-show="item.tiene_descuento_porprod==0 && item.tiene_descuento_pormrc==0">{{ item.precio_total }}</td>
                            <td v-show="item.tiene_descuento_porprod==1 && item.tiene_descuento_pormrc==0">{{ item.precio_descuento_porprod }}</td>
                            <td v-show="item.tiene_descuento_porprod==1 && item.tiene_descuento_pormrc==0">{{ item.precio_total_descuento_porprod }}</td>
                            <td v-show="item.tiene_descuento_porprod==0 && item.tiene_descuento_pormrc==1">{{ item.precio_descuento_pormrc }}</td>
                            <td v-show="item.tiene_descuento_porprod==0 && item.tiene_descuento_pormrc==1">{{ item.precio_total_descuento_pormrc }}</td>
                            <td v-show="item.tiene_descuento_porprod==1 && item.tiene_descuento_pormrc==1">{{ item.precio_descuento_porprod }}</td>
                            <td v-show="item.tiene_descuento_porprod==1 && item.tiene_descuento_pormrc==1">{{ item.precio_total_descuento_porprod }}</td>
                        </tr>
                    </template>
                </v-data-table>
                <ApolloMutation
                    ref="mutCompletarPedido"
                    :mutation="require('../../../graphql/pedidoCompletar.gql').default"
                    :variables="{ 
                                    numero_pedido: numeropedidoSelTbl 
                                }"
                    @done="onDonePedidoCompletado">
                    <template v-slot="{mutate, loading, called , error}">
                        <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                        <div class="float-right">
                            <b-button @click="verPDFReportPedido()" :disabled="numeropedidoSelPDFRpt==''" class="float-right mt-4 ml-2 mr-2" variant="outline-primary">
                                <b-spinner type="border" small v-show="bolTraerPDFReport"></b-spinner>
                                <span v-show="!bolTraerPDFReport" style="font-size: 1em; color: Tomato;">
                                    <font-awesome-icon icon="file-pdf" />
                                </span>
                                Ver pedido
                            </b-button>
                            <b-button @click="completarPedido()" class="float-right mt-4" :disabled="!bolCompletarPedido || loading" variant="primary">
                                <b-spinner type="border" small v-show="loading"></b-spinner>
                                <span v-show="!loading" style="font-size: 1em; color: #CFFF68;">
                                    <font-awesome-icon icon="cogs" />
                                </span>
                                Completar pedido
                            </b-button>
                        </div>
                    </template>
                </ApolloMutation>
            </v-app>
        </div>
	</div>
</template>
<script>
    import axios from 'axios';
    import { GET_PRODS_PEDIDOS } from '../../../graphql/pedidosRealizados.gql';
    import { GET_USERSTBL_BY_ID } from '../../../graphql/usersTblGetById.gql';
    import { GET_CATALOGOSHJS_BY_CODFTHR } from '../../../graphql/catalogoGetHijosByCod.gql';

    export default {
        props: ['showModalProdsInCart'],
		mounted() {
            this.traerProductosPedidos(null, null, null);
            this.getUsuariosData(null);
            this.getEstadosPedido();
        },
        data() {
            return {
                vtable: {
                    search: '',
                    bolLoading: false,
                    headers: [
                        {text: '#Pedido', align: 'left', value: 'numero_pedido'},
                        {text: 'Estado', align: 'left', value: 'estado_pedido'},
                        {text: 'Cliente', align: 'left', value: 'nombre_cliente'},
                        {text: 'Código', align: 'left', value: 'referencia_cod_prov'},
                        {text: 'Producto', align: 'left', value: 'nombre_producto'},
                        {text: 'Imágen', sortable: false, value: 'url_imagen_lowres_uid'},
                        {text: 'Cantidad', value: 'cantidad_producto'},
                        {text: 'Precio unitario', value: 'precio_unitario'},
                        {text: 'Precio total', value: 'precio_total'},
                    ],
                    productos: [],
                    selected: null,
                    mainPropsImgTbl: { width: 50, height: 50 },
                },
                idclientesel: null,
                nombrecliente: '',
                bolShowModalSCli: false,
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
                selectedEstPdd: null,
                estadosPedido: [],
                numeropedido: '',
                bolCompletarPedido: false,
                bolTraerPDFReport: false,
                numeropedidoSelTbl: '',
                numeropedidoSelPDFRpt: '',
            }
        },
        watch: {
            'bolShowModalSCli': function(newVal, oldVal) {
				if(newVal) {
                    this.$refs['modalBuscarCliente'].show();
                } else {
                    this.$refs['modalBuscarCliente'].hide();
				}
            },
            'formbuscarcli.vtableclientes.selected': function(newVal, oldVal) {
                const index = this.formbuscarcli.vtableclientes.clientes.findIndex(x => x.id === newVal);
                if (index !== undefined && index>=0) {
                    this.nombrecliente = this.formbuscarcli.vtableclientes.clientes[index].nombre_completo;
                }
            },
            'vtable.selected': function(newVal, oldVal) {
                if (typeof newVal == 'undefined') return;
                const index = this.vtable.productos.findIndex(x => x.id_pedido === newVal);
                if (index !== undefined && index>=0) {
                    this.numeropedidoSelPDFRpt = this.vtable.productos[index].numero_pedido;
                    if (this.vtable.productos[index].codigo_estado_pedido == 'PDDNVDD') {
                        this.bolCompletarPedido = true;
                        this.numeropedidoSelTbl = this.vtable.productos[index].numero_pedido;
                    } else {
                        this.bolCompletarPedido = false;
                    }
                }
            },
        },
        methods: {
            async getEstadosPedido() {
                var that = this;
                let mtrlTmp = await this.$apollo.query({ 
                                                            query: GET_CATALOGOSHJS_BY_CODFTHR, 
                                                            variables: 
                                                            { 
                                                                codigo_catalogo: 'STDPDD' 
                                                            }, 
                                                            fetchPolicy: 'network-only' 
                                                        });
                if (typeof mtrlTmp.data != 'undefined') {
                    if (mtrlTmp.data.catalogosHijosXCod.length>0) {
                        this.estadosPedido = mtrlTmp.data.catalogosHijosXCod;
                        var indexSel = that.estadosPedido.findIndex(x => x.id_catalogo === 0);
                        if (!(indexSel>=0)) {
                            that.estadosPedido.splice(0, 0, {id_catalogo: 0, valor: 'Seleccione un estado'});
                        }
                        that.selectedEstPdd = 0;
                        return;
                    }
                }
                this.estadosPedido = [];
            },
            async traerProductosPedidos(idestpdd, idcli, numpdd) {
                this.vtable.bolLoading = true;
                let prodcrt = await this.$apollo.query({ 
                                                            query: GET_PRODS_PEDIDOS, 
                                                            variables: 
                                                            { 
                                                                id_estado_pedido: idestpdd,
                                                                id_cliente: idcli,
                                                                numero_pedido: numpdd
                                                            },
                                                            fetchPolicy: 'network-only' 
                                                        });
                this.vtable.bolLoading = false;
                if (typeof prodcrt.data != 'undefined') {
                    if (prodcrt.data.pedidosRealizados.length>0) {
                        this.vtable.productos = prodcrt.data.pedidosRealizados;
                        this.vtable.selected = prodcrt.data.pedidosRealizados[0].id_pedido;
                        this.numeropedidoSelPDFRpt = prodcrt.data.pedidosRealizados[0].numero_pedido;
                        if (prodcrt.data.pedidosRealizados[0].codigo_estado_pedido == 'PDDNVDD') {
                            this.bolCompletarPedido = true;
                            this.numeropedidoSelTbl = prodcrt.data.pedidosRealizados[0].numero_pedido;
                        } else {
                            this.bolCompletarPedido = false;
                        }
                        return;
                    }
                }
                this.vtable.productos = [];
                this.vtable.selected = null;
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
            onCloseSelCliente() {
                this.formbuscarcli.vtableclientes.selected = null;
                this.idclientesel = null;
                this.nombrecliente ='';
                this.bolShowModalSCli = false;
            },
            selCliente() {
                this.idclientesel = this.formbuscarcli.vtableclientes.selected;
                this.bolShowModalSCli = false;
            },
            onFilterPedidos() {
                this.traerProductosPedidos(this.selectedEstPdd, this.idclientesel, this.numeropedido);
            },
            completarPedido() {
                var that = this;
                this.$fire({
                    text: '¿Está seguro que desea completar el pedido?',
                    type: 'question',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar'
                }).then(r => {
                    if (r.value) {
                        that.$refs.mutCompletarPedido.mutate();
                    }
                });
            },
            onDonePedidoCompletado() {
                var that = this;
                this.onFilterPedidos();
                this.$fire({
                    text: 'Su pedido fué procesado con éxito.',
                    type: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then(r => {
                    if (r.value) {
                        console.log('Pedido procesado');
                    }
                });
            },
            verPDFReportPedido() {
                    this.bolTraerPDFReport = true;
                    const fd = new FormData();
                    var that = this;
                    axios.defaults.headers.common = {
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-CSRF-TOKEN': window.csrf_token,
                    };
                    var strBaseUrl = this.$store.getters.getBaseUrl;
                    axios.defaults.baseURL = strBaseUrl;
                    axios.defaults.headers.post['Accept'] = 'application/pdf';
                    axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.getters.getAuthAccessToken;
                    fd.append('numpdd', this.numeropedidoSelPDFRpt);
                    axios({ url: strBaseUrl+'/getpdfreport', data: fd, method: 'post', responseType: 'blob' } )
                        .then(res => {
                            const url = window.URL.createObjectURL(new Blob([res.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'detalle_pedido_'+that.numeropedidoSelPDFRpt+'.pdf');
                            document.body.appendChild(link);
                            link.click();
                            that.bolTraerPDFReport = false;
                        })
                        .catch(err => {
                            console.log(err);
                            that.bolTraerPDFReport = false;
                        });
            },
        }
    }
</script>
<style>
    tr.highlight {
        background: #91B1EB;
    }
</style>