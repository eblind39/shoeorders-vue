<template>
    <div>
		<b-modal ref="modalRegister" hide-footer title="Registrar" @close="onCloseModal()"  @hidden="onCloseModal()">
			<!-- <b-form @submit="onSubmit" @reset="onReset"> -->
			<form role="form" method="POST" action="/api/register">
				<input type="hidden" name="_token" :value="form._token">
				<b-form-group 
					label="Nombre de usuario" 
					label-for="username">
					<b-form-input
						name="username"
						v-model="form.username"
						required
						autofocus
						autocomplete="off">
					</b-form-input>
				</b-form-group>
				<b-form-group
					label="Correo electrónico"
					label-for="email">
					<b-form-input
						name="email"
						v-model="form.email"
						type="email"
						required
						autocomplete="off">
					</b-form-input>
				</b-form-group>
				<b-form-group
					label="Contraseña"
					label-for="password">
					<b-input 
						type="password" 
						name="password"
						v-model="form.password"
						required
						aria-describedby="password-help-block"
						autocomplete="off">
					</b-input>
					<b-form-text id="password-help-block">
						Su contraseña debe ser de 8 a 20 caracteres, contener letras y números,
						y no debe contener espacios, caracteres especiales o emoji.
					</b-form-text>
				</b-form-group>
				<b-form-group
					label="Confirmar contraseña"
					label-for="password_confirmation">
					<b-input 
						type="password" 
						name="password_confirmation"
						v-model="form.password_confirmation"
						required
						autocomplete="off">
					</b-input>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Nombre completo" 
					label-for="nombre_completo">
					<b-form-input
						name="nombre_completo"
						v-model="form.nombre_completo">
					</b-form-input>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Teléfono fijo" 
					label-for="telefono_fijo">
					<b-form-input
						name="telefono_fijo"
						v-model="form.telefono_fijo">
					</b-form-input>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Teléfono móvil" 
					label-for="telefono_celular">
					<b-form-input
						name="telefono_celular"
						v-model="form.telefono_celular">
					</b-form-input>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Zona" 
					label-for="id_zona">
					<b-form-select
						name="id_zona"
						v-model="form.id_zona"
						:options="zonas"
						value-field="id_catalogo"
						text-field="valor">
					</b-form-select>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Ciudad" 
					label-for="id_ciudad">
					<b-form-select
						name="id_ciudad"
						v-model="form.id_ciudad"
						:options="ciudades"
						value-field="id_catalogo"
						text-field="valor">
					</b-form-select>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Dirección" 
					label-for="direccion">
					<b-form-textarea
						name="direccion"
						v-model="form.direccion"
						rows="3"
						max-rows="6">
					</b-form-textarea>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Talla de zapato" 
					label-for="talla_zapato">
					<b-form-input
						name="talla_zapato"
						v-model.number="form.talla_zapato">
					</b-form-input>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Cédula" 
					label-for="cedula">
					<b-form-input
						name="cedula"
						v-model="form.cedula">
					</b-form-input>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Tipo de pago" 
					label-for="id_tpago">
					<b-form-select
						name="id_tipo_pago"
						v-model="form.id_tipo_pago"
						:options="tipospago"
						value-field="id_catalogo"
						text-field="valor">
					</b-form-select>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Límite de cédito" 
					label-for="lim_cred">
					<b-form-input
						name="lim_cred"
						v-model.number="form.limite_credito">
					</b-form-input>
				</b-form-group>
				<b-form-group 
					v-show="!bolSimpleForm"
					label="Costo por envío" 
					label-for="cost_ship">
					<b-form-input
						name="cost_ship"
						v-model.number="form.costo_por_envio">
					</b-form-input>
				</b-form-group>

				<div class="float-right">
					<!-- <b-button type="submit" variant="primary">Enviar</b-button> -->
					<b-button @click="onSubmit()" variant="primary">
						<b-spinner type="border" small v-show="bolSaving"></b-spinner>
						{{ strAccionForm }}
					</b-button>
					<b-button @click="onCloseModal()" variant="light">Cancelar</b-button>
				</div>
				<!-- <br class="clear-float"> -->
			</form>
			<!-- </b-form> -->
			<!-- <b-card class="mt-3" header="Form Data Result">
				<pre class="m-0">{{ form }} - {{ csrf_token }}</pre>
			</b-card> -->
			
		</b-modal>
    </div>
</template>
<script>
	import axios from 'axios';
	import { GET_CATALOGOSHJS_BY_CODFTHR } from '../graphql/catalogoGetHijosByCod.gql';

    export default {
		props: ['showRegUsrModal', 'bolSimpleForm', 'modoEdicionUsr', 'idusr'],
        data() {
            return {
				form: {
					_token: window.csrf_token,
					id: null,
					username: '',
					email: '',
					password: '',
					password_confirmation: '',
					nombre_completo: '',
					telefono_fijo: '',
					telefono_celular: '',
					id_ciudad: null,
					id_zona: null,
					talla_zapato: null,
					cedula: '',
					direccion: '',
					id_tipo_pago: null,
					limite_credito: null,
					costo_por_envio: null,
				},
				ciudades: [],
				zonas: [],
				tipospago: [],
				show: true,
				bolSaving: false,
				strAccionForm: '',
            }
		},
	    watch: {
			'showRegUsrModal': function(newVal, oldVal) {
				if(newVal) {
					if (this.modoEdicionUsr=='C') this.onReset();
					this.$refs['modalRegister'].show();
					this.traerCatalogos();
				} else {
					this.$emit('update:showRegUsrModal', false);
					this.$refs['modalRegister'].hide();
				}
			}
		},
		methods: {
			traerCatalogos() {
				if (this.modoEdicionUsr=='C') this.strAccionForm = 'Registrar';
				if (this.modoEdicionUsr=='U') {
					this.strAccionForm = 'Actualizar';
					this.form.id = this.idusr;
					this.traerDatosUsuarioById(this.idusr);
				}
				this.getCiudades();
				this.getZonas();
				this.getTiposPago();
			},
			async traerDatosUsuarioById(idUsr) {
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token,
				};
				axios.defaults.baseURL = this.$store.getters.getBaseUrl;
				axios.defaults.headers.post['Accept'] = 'application/json';
				axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.getters.getAuthAccessToken;
				var that = this;
				axios.post(`/api/userbyid`, {id: idUsr})
					.then(res => {
						if (typeof res.data == 'undefined' || res.data == null) return;
						var usr = res.data.user[0];
						that.form.username = usr.username;
						that.form.email = usr.email;
						that.form.nombre_completo = usr.nombre_completo;
						that.form.telefono_fijo = usr.telefono_fijo;
						that.form.telefono_celular = usr.telefono_celular;
						that.form.id_ciudad = usr.id_ciudad;
						that.form.id_zona = usr.id_zona;
						that.form.talla_zapato = usr.talla_zapato;
						that.form.cedula = usr.cedula;
						that.form.direccion = usr.direccion;
						that.form.id_tipo_pago = usr.id_tipo_pago;
						that.form.limite_credito = usr.limite_credito;
						that.form.costo_por_envio = usr.costo_por_envio;
					})
					.catch(err => {
                        that.errormsg = err.message;
					});
			},
            async getCiudades() {
                let colsTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'CDDDS' }, fetchPolicy: 'network-only' });
                if (typeof colsTmp.data != 'undefined') {
                    if (colsTmp.data.catalogosHijosXCod.length>0) {
                        this.ciudades = colsTmp.data.catalogosHijosXCod;
                        // this.id_ciudad = this.id_ciudad;
                        return;
                    }
                }
                this.ciudades = [];
			},
            async getZonas() {
                let colsTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'ZNSSS' }, fetchPolicy: 'network-only' });
                if (typeof colsTmp.data != 'undefined') {
                    if (colsTmp.data.catalogosHijosXCod.length>0) {
                        this.zonas = colsTmp.data.catalogosHijosXCod;
                        // this.id_ciudad = this.id_ciudad;
                        return;
                    }
                }
                this.zonas = [];
			},
            async getTiposPago() {
                let colsTmp = await this.$apollo.query({ query: GET_CATALOGOSHJS_BY_CODFTHR, variables: { codigo_catalogo: 'TPPYMNT' }, fetchPolicy: 'network-only' });
                if (typeof colsTmp.data != 'undefined') {
                    if (colsTmp.data.catalogosHijosXCod.length>0) {
                        this.tipospago = colsTmp.data.catalogosHijosXCod;
                        // this.id_ciudad = this.id_ciudad;
                        return;
                    }
                }
                this.tipospago = [];
            },
			onCloseModal() {
				this.$emit('update:showRegUsrModal', false);
			},
			onSubmit(evt) {
				if (this.modoEdicionUsr=='C') this.crearRegistroUsuario();
				if (this.modoEdicionUsr=='U') this.actualizarRegistroUsuario();
			},
			crearRegistroUsuario() {
				this.bolSaving = true;
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token
				};
				axios.defaults.baseURL = this.$store.getters.getBaseUrl;
				axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				var that = this, endpoint = '';
				if (this.bolSimpleForm) endpoint = '/api/register';
				else endpoint = '/api/registerfull';
				axios.post(endpoint, this.form)
					.then(function (response) {
						that.bolSaving = false;
						that.onReset();
						that.$emit('update:showRegUsrModal', false);
						that.$refs['modalRegister'].hide();
						if (that.modoEdicionUsr=='C' && typeof that.$parent.getNewUsr == 'function')
                            that.$parent.getNewUsr(response.data.user);
                        
                        that.$fire({
                            text: 'El usuario se registró de manera exitosa.',
                            type: 'success',
                            showConfirmButton: true,
                            confirmButtonText: 'Aceptar',
                        }).then(r => {
                            if (r.value) {
                                console.log('Usuario guardado');
                                that.$emit('onUserCreate');
                            }
                        });

					})
					.catch(function (error) {
						that.bolSaving = false;
						console.log(error); 
					});
			},
			actualizarRegistroUsuario() {
				this.bolSaving = true;
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token
				};
				axios.defaults.baseURL = this.$store.getters.getBaseUrl;
				axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				var that = this, endpoint = '';
				endpoint = '/api/updateuser';
				axios.post(endpoint, this.form)
					.then(function (response) {
						that.bolSaving = false;
						that.onReset();
						that.$emit('update:showRegUsrModal', false);
						that.$refs['modalRegister'].hide();
						if (that.modoEdicionUsr=='U' && typeof that.$parent.getUpdtdUsr == 'function')
                            that.$parent.getUpdtdUsr(response.data.user);
                            
                        that.$fire({
                            text: 'Se actualizaron los datos del usuario de manera exitosa.',
                            type: 'success',
                            showConfirmButton: true,
                            confirmButtonText: 'Aceptar',
                        }).then(r => {
                            if (r.value) {
                                console.log('Usuario actualizado');
                                that.$emit('onUserUpdate');
                            }
                        });
					})
					.catch(function (error) {
						that.bolSaving = false;
						console.log(error); 
					});
			},
			onReset(evt) {
				if (typeof evt != 'undefined') evt.preventDefault();
				// Reset our form values
				this.form.username = '';
				this.form.email = '';
				this.form.password = '';
				this.form.password_confirmation = '';
				this.form.nombre_completo = '';
				this.form.telefono_fijo = '';
				this.form.telefono_celular = '';
				this.form.id_ciudad = null;
				this.form.id_zona = null;
				this.form.talla_zapato = null;
				this.form.cedula = '';
				this.form.direccion = '';
				this.id_tipo_pago = null;
				this.limite_credito = null;
				this.costo_por_envio = null;
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true
				})
			}
		}
    }
</script>