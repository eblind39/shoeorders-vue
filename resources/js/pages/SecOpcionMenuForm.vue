<template>
    <div>
        <b-form-group 
            v-show="!(modoEdicion==='R' || modoEdicion==='U')"
            label="Descripción menú padre" 
            label-for="descripcion_menu_padre">
            <b-form-input
                name="descripcion_menu_padre"
                v-model="currnoddescr" 
                disabled>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Descripción" 
            label-for="descripcion">
            <b-form-input
                name="descripcion"
                v-model="descr" 
                :disabled="esDisabled"
                required 
                autofocus
                placeholder="">
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Ruta" 
            label-for="ruta">
            <b-form-input
                name="ruta"
                v-model="rut" 
                :disabled="esDisabled"
                required 
                placeholder="">
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Componente Ruta" 
            label-for="componente_ruta">
            <b-form-input
                name="componente_ruta"
                v-model="comprut" 
                :disabled="esDisabled"
                required 
                placeholder="">
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Nombre Ruta" 
            label-for="nombre_ruta">
            <b-form-input
                name="nombre_ruta"
                v-model="nombrut" 
                :disabled="esDisabled"
                required 
                placeholder="">
            </b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-checkbox 
                v-model="esfrmreg" 
                :disabled="esDisabled"
                name="es_form_registro">
                Es FormRegistro
            </b-form-checkbox>
        </b-form-group>
        <b-form-group
            label="Icon fa" 
            label-for="icon_fa">
            <b-form-input
                name="icon_fa"
                v-model="icnfa" 
                :disabled="esDisabled"
                required 
                placeholder="">
            </b-form-input>
        </b-form-group>
        <b-form-group  
            label="Imagen" 
            label-for="imagen">
            <b-form-input
                name="imagen"
                v-model="img" 
                :disabled="esDisabled"
                required 
                placeholder="">
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Tip" 
            label-for="tip">
            <b-form-input
                name="tip"
                v-model="tptp" 
                :disabled="esDisabled"
                required 
                placeholder="">
            </b-form-input>
        </b-form-group>
	</div>
</template>
<script>
    export default {
		props: ['modoEdicion', 'bolValsRegGets', 'currentNodeDesc', 'currentNodeId',
                'id_optmenu_padre','descripcion','ruta','componente_ruta','nombre_ruta',
                'es_form_registro','icon_fa','imagen','tip'],
        data() {
            return {
                idoptmnupdr: null,
                currnoddescr: this.currentNodeDesc,
                currnodid: this.currentNodeId,
                descr: '',
                rut: '',
                comprut: '',
                nombrut: '',
                esfrmreg: null,
                icnfa: '',
                img: '',
                tptp: '',
            }
        },
        computed: {
            esDisabled() {
                return (this.modoEdicion==='R');
            },
        },
		watch: {
            bolValsRegGets: function(n, o) { if (n) this.syncVals(); },
            currnoddescr: function(n, o) { this.$emit('update:currentNodeDesc', n); },
            currnodid: function(n, o) { this.$emit('update:currentNodeId', n); },
            idoptmnupdr: function(n, o) { this.$emit('update:id_optmenu_padre', n); },
            descr: function(n, o) { this.$emit('update:descripcion', n); },
            rut: function(n, o) { this.$emit('update:ruta', n); },
            comprut: function(n, o) { this.$emit('update:componente_ruta', n); },
            nombrut: function(n, o) { this.$emit('update:nombre_ruta', n); },
            esfrmreg: function(n, o) { this.$emit('update:es_form_registro', n); },
            icnfa: function(n, o) { this.$emit('update:icon_fa', n); },
            img: function(n, o) { this.$emit('update:imagen', n); },
            tptp: function(n, o) { this.$emit('update:tip', n); },
        },
        methods: {
            syncVals() {
                this.currnoddescr = this.currentNodeDesc;
                this.currnodid = this.currentNodeId;
                this.idoptmnupdr = this.id_optmenu_padre;
                this.descr = this.descripcion;
                this.rut = this.ruta;
                this.comprut = this.componente_ruta;
                this.nombrut = this.nombre_ruta;
                this.esfrmreg = this.es_form_registro;
                this.icnfa = this.icon_fa;
                this.img = this.imagen;
                this.tptp = this.tip;
            },
        }
	}
</script>