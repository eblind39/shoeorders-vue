<template>
    <div>
        <div class="card-header"><h4>Productos agregados al carrito</h4></div>
        <div class="card-body">
            <ApolloMutation
                ref="mutPedidoCreate"
                :mutation="require('../../../graphql/pedidoCreate.gql').default"
                @done="onDonePedidoCreate">
                <template v-slot="{mutate, loading, called , error}">
                    <b-alert v-show="error" variant="danger" show>{{ error }}</b-alert>
                    <v-app id="inspire">
                        <v-data-table
                            :headers="vtable.headers"
                            :items="vtable.productos"
                            :loading="vtable.bolLoading">
                            <template v-slot:item="{ item }">
                                <tr
                                    :class="{highlight:item.id_carrito===vtable.selected}" 
                                    @click="vtable.selected=item.id_carrito">
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
                        <div class="float-right">
                            <b-button @click="consultarRealizarPedido()" v-show="!bolPedidoRealizadoOk" class="float-right" :disabled="loading" variant="primary">
                                <b-spinner type="border" small v-show="loading"></b-spinner>
                                <span v-show="!loading" style="font-size: 1em; color: #CFFF68;">
                                    <font-awesome-icon icon="shopping-bag" />
                                </span>
                                Realizar pedido
                            </b-button>
                            <!-- <b-button @click="returnToPedidos()" v-show="bolPedidoRealizadoOk" class="float-right" variant="primary">
                                <span style="font-size: 1em; color: #CFFF68;">
                                    <font-awesome-icon icon="check" />
                                </span>
                                Aceptar
                            </b-button> -->
                        </div>
                    </v-app>
                </template>
            </ApolloMutation>
        </div>
    </div>
</template>
<script>
	import { GET_CARTPRODS_ADDED } from '../../../graphql/carritoProductosAdded.gql';

    export default {
		mounted() {
            this.traerProductosEnCarrito();
        },
        data() {
            return {
                vtable: {
                    search: '',
                    bolLoading: false,
                    headers: [
                        {text: 'Nombre', align: 'left', value: 'nombre_producto'},
                        {text: 'Imágen', sortable: false, value: 'url_imagen_lowres_uid'},
                        {text: 'Cantidad', value: 'cantidad_producto'},
                        {text: 'Precio unitario', value: 'precio_unitario'},
                        {text: 'Precio total', value: 'precio_total'},
                    ],
                    productos: [],
                    selected: null,
                    mainPropsImgTbl: { width: 50, height: 50 },
                },
                bolPedidoRealizadoOk: false,
            }
        },
        methods: {
            async traerProductosEnCarrito() {
                this.vtable.bolLoading = true;
                let prodcrt = await this.$apollo.query({ query: GET_CARTPRODS_ADDED, fetchPolicy: 'network-only' });
                this.vtable.bolLoading = false;
                if (typeof prodcrt.data != 'undefined') {
                    if (prodcrt.data.carritoProductosAdded.length>0) {
                        this.vtable.productos = prodcrt.data.carritoProductosAdded;
                        this.vtable.selected = prodcrt.data.carritoProductosAdded[0].id;
                        return;
                    }
                }
                this.vtable.productos = [];
                this.vtable.selected = null;
            },
            onDonePedidoCreate(data) {
                this.bolPedidoRealizadoOk = true;
                this.$fire({
                    text: 'Su pedido fué enviado con éxito.',
                    type: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then(r => {
                    if (r.value) {
                        this.$router.push({ path: '/vuecart' });
                    }
                });
            },
            returnToPedidos() {
                this.$router.push({ path: '/vuecart' });
            },
            consultarRealizarPedido() {
                var that = this;
                this.$fire({
                    text: '¿Está seguro que desea realizar el pedido?',
                    type: 'question',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar'
                }).then(r => {
                    if (r.value) {
                        that.$refs.mutPedidoCreate.mutate();
                    }
                });
            }
        }
    }
</script>