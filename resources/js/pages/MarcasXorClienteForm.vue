<template>
    <div>
        <b-form-group 
            label="Marca" 
            label-for="mrc">
            <b-form-select
                ref="cmbMarca"
                name="mrc"
                v-model="idmrc"
                :options="marcas"
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
                required
                :disabled="esDisabled">
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Observaciones" 
            label-for="bsrvcns">
            <b-form-input
                name="bsrvcns"
                v-model.number="srvb"
                :disabled="esDisabled">
            </b-form-input>
        </b-form-group>
	</div>
</template>
<script>
    import axios from 'axios';
    import { GET_MARCAS } from '../graphql/marcaGetAll.gql';

    export default {
        props: ['modoEdicion', 'bolValsRegGets', 'id', 'id_cliente', 'id_marca', 
                'descuento', 'observaciones'],
        mounted() {
            this.getDataCatsForm();
            if (this.bolValsRegGets) this.syncVals();
        },
        data() {
            return {
                idmrcxcli: null,
                idcli: null,
                idmrc: null,
                dsct: null,
                srvb: '',
                marcas: [],
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
            idmrc: function(n, o) { this.$emit('update:id_marca', n); },
            dsct: function(n, o) { this.$emit('update:descuento', n); },
            srvb: function(n, o) { this.$emit('update:observaciones', n); },
        },
        methods: {
            getDataCatsForm() {
                this.getMarcas();
            },
            async getMarcas() {
                let mrcsTmp = await this.$apollo.query({ query: GET_MARCAS, fetchPolicy: 'network-only' } );
                if (typeof mrcsTmp.data != 'undefined') {
                    if (mrcsTmp.data.marcas.length>0) {
                        this.marcasTmp = mrcsTmp.data.marcas;
                        this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"id":').join('"value":'));
                        this.marcasTmp = JSON.parse(JSON.stringify(this.marcasTmp).split('"nombre_marca":').join('"text":'));
                        this.marcas = this.marcasTmp;
                        this.idmrc = this.id_marca;
                        return;
                    }
                }
                this.marcas = [];
                this.idmrc = null;
            },
            syncVals() {
                this.idmrcxcli = this.id;
                this.idcli = this.id_cliente;
                // this.idmrc = this.id_marca;
                this.dsct = this.descuento;
                this.srvb = this.observaciones;
            },
        }
	}
</script>