<template>
    <div>
        <!-- <b-form-group
            id="igEsNodoRaiz">
            <b-form-checkbox 
                ref="chkNodoRaiz"
                name="esnodoraiz" 
                id="esnodoraiz" 
                v-model="esnodoraiz">
                ¿Es nodo raíz?
            </b-form-checkbox>
        </b-form-group> -->
        <b-form-group 
            v-show="!(modoEdicion==='R' || modoEdicion==='U' || bolHideCatPadre)"
            label="Catálogo padre" 
            label-for="descripcion_cat_padre">
            <b-form-input
                name="descripcion_cat_padre"
                v-model="currnodval" 
                disabled>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Código" 
            label-for="codigo">
            <b-form-input
                name="codigo"
                v-model="cod" 
                :disabled="esDisabled"
                autofocus
                required>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Valor" 
            label-for="valor">
            <b-form-input
                name="valor"
                v-model="vlr" 
                :disabled="esDisabled"
                placeholder="">
            </b-form-input>
        </b-form-group>
	</div>
</template>
<script>
    export default {
		props: ['modoEdicion', 'bolValsRegGets', 'bolHideCatPadre', 'currentNodeVal', 'currentNodeId',
                'id_catalogo_padre','codigo_catalogo','valor'],
        mounted() {
            /*this.esnodoraiz = this.bolHideCatPadre;
            if (this.bolHideCatPadre) this.$refs.chkNodoRaiz.disabled=true;
            else this.$refs.chkNodoRaiz.disabled=false;*/
            if (this.bolHideCatPadre) {
                this.idcatpdr = null;
                this.$emit('update:id_catalogo_padre', null);
            }
        },
        data() {
            return {
                idcatpdr: null,
                currnodval: this.currentNodeVal,
                currnodid: this.currentNodeId,
                //esnodoraiz: false,
                cod: '',
                vlr: '',
            }
        },
        computed: {
            esDisabled() {
                return (this.modoEdicion==='R');
            },
        },
		watch: {
            bolValsRegGets: function(n, o) { if (n) this.syncVals(); },
            currnodval: function(n, o) { this.$emit('update:currentNodeVal', n); },
            currnodid: function(n, o) { this.$emit('update:currentNodeId', n); },
            idcatpdr: function(n, o) { this.$emit('update:id_catalogo_padre', n); },
            cod: function(n, o) { this.$emit('update:codigo_catalogo', n); },
            vlr: function(n, o) { this.$emit('update:valor', n); },
            // esnodoraiz: function(n, o) {
            //     if (this.bolHideCatPadre && n) {
            //         this.$emit('update:bolHideCatPadre', false);
            //     }
            //     if (this.bolHideCatPadre && !n) {
            //         this.$emit('update:bolHideCatPadre', true);
            //     }
            // }
        },
        methods: {
            syncVals() {
                this.currnodval = this.currentNodeVal;
                this.currnodid = this.currentNodeId;
                this.idcatpdr = this.id_catalogo_padre;
                this.cod = this.codigo_catalogo;
                this.vlr = this.valor;
            },
        }
	}
</script>