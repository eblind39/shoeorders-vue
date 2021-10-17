<template>
    <div>
        <b-form-group 
            label="Producto" 
            label-for="prd">
            <b-form-select
                ref="cmbProducto"
                name="prd"
                v-model="idprd"
                :options="productos"
                required
                :disabled="esDisabled">
            </b-form-select>
        </b-form-group>
        <b-form-group 
            label="Descuento" 
            label-for="dsct">
            <b-form-input
                name="dsct"
                v-model.number="dsct"
                :disabled="esDisabled">
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Precio" 
            label-for="prc">
            <b-form-input
                name="prc"
                v-model.number="prc"
                :disabled="esDisabled">
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Observaciones" 
            label-for="bsrvcns">
            <b-form-textarea
                name="bsrvcns"
                v-model="srvb"
                rows="3"
                max-rows="6"
                :disabled="esDisabled">
            </b-form-textarea>
        </b-form-group>
	</div>
</template>
<script>
    import axios from 'axios';
    import { GET_PRODUCTOS } from '../graphql/productoGetAll.gql';

    export default {
        props: ['modoEdicion', 'bolValsRegGets', 'id', 'id_cliente', 'id_producto', 
                'descuento', 'precio', 'observaciones'],
        mounted() {
            this.getDataCatsForm();
            if (this.bolValsRegGets) this.syncVals();
        },
        data() {
            return {
                idprdxcli: null,
                idcli: this.id_cliente,
                idprd: null,
                dsct: null,
                prc: null,
                srvb: '',
                productos: [],
                validacMsg: '',
            }
        },
        computed: {
            esDisabled() {
                return (this.modoEdicion==='R');
            },
        },
		watch: {
            bolValsRegGets: function(n, o) { if (n) this.syncVals(); },
            idprd: function(n, o) { this.$emit('update:id_producto', n); },
            dsct: function(n, o) { this.$emit('update:descuento', n); },
            prc: function(n, o) { this.$emit('update:precio', n); },
            srvb: function(n, o) { this.$emit('update:observaciones', n); },
        },
        methods: {
            getDataCatsForm() {
                this.getProductos();
            },
            async getProductos() {
                let mrcsTmp = await this.$apollo.query({ query: GET_PRODUCTOS, fetchPolicy: 'network-only' } );
                if (typeof mrcsTmp.data != 'undefined') {
                    if (mrcsTmp.data.productos.length>0) {
                        this.productosTmp = mrcsTmp.data.productos;
                        this.productosTmp = JSON.parse(JSON.stringify(this.productosTmp).split('"id":').join('"value":'));
                        this.productosTmp = JSON.parse(JSON.stringify(this.productosTmp).split('"nombre":').join('"text":'));
                        this.productos = this.productosTmp;
                        this.idprd = this.id_producto;
                        return;
                    }
                }
                this.productos = [];
                this.idprd = null;
            },
            syncVals() {
                this.idprdxcli = this.id;
                this.idcli = this.id_cliente;
                // this.idprd = this.id_producto;
                this.dsct = this.descuento;
                this.prc = this.precio;
                this.srvb = this.observaciones;
            },
        }
	}
</script>