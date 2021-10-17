<template>
    <div>
        <b-form-group 
            label="Código del perfil" 
            label-for="codigrol">
            <b-form-input
                name="codigrol"
                v-model="codrol" 
                :disabled="esDisabled"
                required 
                autofocus>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Nombre" 
            label-for="nombrerol">
            <b-form-input
                name="nombrerol"
                v-model="nomrol" 
                :disabled="esDisabled"
                required>
            </b-form-input>
        </b-form-group>
        <b-form-group 
            label="Descripción" 
            label-for="descr">
            <b-form-input
                name="descr"
                v-model="descrrol" 
                :disabled="esDisabled">
            </b-form-input>
        </b-form-group>
	</div>
</template>
<script>
    export default {
		props: ['modoEdicion', 'bolValsRegGets', 'id', 'codigo', 'name', 'description'],
        data() {
            return {
                idrol: null,
                codrol: '',
                nomrol: '',
                descrrol: '',
            }
        },
        computed: {
            esDisabled() {
                return (this.modoEdicion==='R');
            },
        },
		watch: {
            bolValsRegGets: function(n, o) { if (n) this.syncVals(); },
            codrol: function(n, o) { this.$emit('update:codigo', n); },
            nomrol: function(n, o) { this.$emit('update:name', n); },
            descrrol: function(n, o) { this.$emit('update:description', n); },
        },
        methods: {
            syncVals() {
                this.codrol = this.codigo;
                this.nomrol = this.name;
                this.descrrol = this.description;
            },
        }
	}
</script>