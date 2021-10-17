<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand>
				<img class="icon" :src="logoUrl">
			</b-navbar-brand>
			<b-navbar-brand>
				<router-link v-show="!esLoggedIn" :to="{ name: 'welcome' }">
					<h1>pedidos</h1>
				</router-link>
			</b-navbar-brand>
	
			<b-navbar-toggle target="nav-collapse">
				<!-- <font-awesome-icon icon="user-secret" size="3x" :style="{ color: 'red' }" /> -->
			</b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav v-show="esLoggedIn" id="mnuMain">
					<b-nav-item v-for="optmnu in optsmenubyrole" v-bind:key="optmnu.id_acceso">
						<div>
							<router-link :to="{ name: optmnu.nombre_ruta }">
								{{ optmnu.descripcion }}
							</router-link>
						</div>
					</b-nav-item>
				</b-navbar-nav>

				<!-- Login || Register || Profile || Logout -->
				<b-navbar-nav class="ml-auto">
					<!-- Login -->
					<b-nav-item>
						<div v-show="!esLoggedIn">
							<b-link v-responsive.sm.xs.md @click.prevent="handleShowLogin('llinform')">Entrar
								<b-modal ref="modalLogIn" hide-footer title="Entrar" @close="checkRespElem(false)" @hidden="checkRespElem(false)" @click.stop @click.prevent>
									<auth-login-form @loggedIn="fnOnLogin" :showLoginModal.sync="showLoginModal" :showLoginPopOver.sync="showLoginPopOver"></auth-login-form>
								</b-modal>
							</b-link>
							<b-link v-responsive.lg.xl @click.prevent="handleShowLogin('llinpover')" id="popover-button-event" >Entrar
								<b-popover ref="popover" target="popover-button-event" placement="bottom" triggers="click blur" title="Entrar">
									<auth-login-form @loggedIn="fnOnLogin" :showLoginModal.sync="showLoginModal" :showLoginPopOver.sync="showLoginPopOver"></auth-login-form>
								</b-popover>
							</b-link>
						</div>
					</b-nav-item>
					<!-- Register -->
					<b-nav-item v-show="false">
						<div v-show="!esLoggedIn">
							<auth-register-page :showRegModal.sync="showRegModal" :bolSimpleForm.sync="bolSimpleForm"></auth-register-page>
							<b-link @click.prevent="handleShowRegister()">Registrar</b-link>
						</div>
					</b-nav-item>
					<!-- Profile || Logout -->
					<div v-show="esLoggedIn">
						<b-nav-item-dropdown right>
							<!-- Using 'button-content' slot -->
							<template slot="button-content"><em>Usuario</em></template>
							<!-- <b-dropdown-item>Profile</b-dropdown-item> -->
							<b-dropdown-item><a @click="logout">Salir</a></b-dropdown-item>
							<!-- <b-dropdown-item><a @click="whoAmI">WhoAmI</a></b-dropdown-item> -->
						</b-nav-item-dropdown>
					</div>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>
<script>
	import axios from 'axios';
	import AuthRegisterPage from '../pages/AuthRegisterPage.vue';
	import AuthLoginForm from '../pages/AuthLoginForm.vue';
	import { GET_SEC_OPTMENU_BY_ROLEID } from '../graphql/secOpcionMenuGetByRole.gql';

    export default {
		components: {
			AuthRegisterPage,
			AuthLoginForm
		},
		mounted() {
			this.defineRoutes();
			this.traerOptsMenuXRoleUsr();
		},
        computed: {
            logoUrl() {
                return `${window.cdn_url || ''}images/favicon.png`;
            },
			esLoggedIn() {
				return this.$store.getters.esLoggedIn;
			}
        },
        data() {
            return {
				csrf_token: window.csrf_token,
				optsmenubyrole: [],
				accessok: true,
				bolSimpleForm: true,
				showRegModal: false,
				showLoginModal: false,
				showLoginPopOver: false
            }
        },
	    watch: {
			'showLoginModal': function(newVal, oldVal) {
				this.checkRespElem(newVal);
			},
			'showLoginPopOver': function(newVal, oldVal) {
				this.checkRespElem(newVal);
			}
		},
        methods: {
			fnOnLogin() {
				this.traerOptsMenuXRoleUsr();
			},
			logout(evt) {
				var that = this;
				this.$store.dispatch('authLogOut')
					.then(res => { 
						if(typeof res.data != 'undefined') {
							that.optsmenubyrole = [];
							console.log(res.data.message);
							that.$router.push({ name: 'welcome' });
						}
					})
					.catch(err => { if(typeof err.data != 'undefined') console.log(err.data.message); });
			},
			whoAmI(evt) {
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token,
				};
				axios.defaults.baseURL = this.$store.getters.getBaseUrl;
				axios.defaults.headers.post['Accept'] = 'application/json';
				axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.getters.getAuthAccessToken;
				var that = this;
				axios.post('/api/whoami', this.form)
					.then(res => { 
						//console.log(res);
						that.errormsg = res.message;
						console.log(res.data);
					})
					.catch(err => { 
						console.log(err);
						that.errormsg = err.message;
					});
			},
			handleShowRegister() {
				this.showRegModal = true;
			},
			handleShowLogin(strElem) {
				if (strElem=='llinform') { this.showLoginModal = true; this.showLoginPopOver = false; }
				if (strElem=='llinpover') { this.showLoginModal = false; this.showLoginPopOver = true; }
			},
			checkRespElem(newVal) {
				if(newVal) {
					if (this.showLoginModal) this.$refs['modalLogIn'].show();
					if (this.showLoginPopOver) this.$refs.popover.$emit('open');
				} else {
					this.$refs['modalLogIn'].hide();
					this.$refs.popover.$emit('close');
					this.showLoginModal = false;
					this.showLoginPopOver = false;
				}
			},
			async traerOptsMenuXRoleUsr(roleId) {
				if (!this.esLoggedIn) return;
                var that = this;
                let optsmnutree = await this.$apollo.query({ query: GET_SEC_OPTMENU_BY_ROLEID, variables: { id_role: -1 }, fetchPolicy: 'network-only' }).then(res => {
                    if (typeof res.data != 'undefined' || res.data != null) {
						var optsmnu = res.data.optsmenuXRol;
						// var mmnu = document.getElementById('mnuMain');
						// var strMnuHTML = '';

						// this.$router.addRoutes([
						// 	{ path: "/productos", component: () => import("../pages/Productos.vue"), name: "productos" }
						// ]);

						// console.log();
						// // crear rutas dinámicamente
						// for (var i=0; i<optsmnu.length; i++) {
						// 	console.log(optsmnu[i].componente_ruta);
						// 	this.$router.addRoutes([
						// 		{ path: optsmnu[i].ruta, component: ((cmprt) => import(cmprt))(optsmnu[i].componente_ruta), name: optsmnu[i].nombre_ruta }
						// 		// { path: optsmnu[i].ruta, component: optsmnu[i].componente_ruta, name: optsmnu[i].nombre_ruta }
						// 	]);
						// 	// strMnuHTML +=  "<b-nav-item>" + 
						// 	// 					"<div>" +
						// 	// 						"<router-link :to=\"{ name: '" + optsmnu[i].nombre_ruta + "' }\">" +
						// 	// 							optsmnu[i].descripcion +
						// 	// 						"</router-link>" +
						// 	// 					"</div>" +
						// 	// 				"</b-nav-item>";
						// }
						//console.log(strMnuHTML);
						that.optsmenubyrole = res.data.optsmenuXRol;
						// mmnu.innerHTML = strMnuHTML;
                    }
                });
			},
			defineRoutes() {
				this.$router.addRoutes([
					{ path: "/regoptmnu", component: () => import("../pages/SecOpcionesMenu.vue"), name: 'regoptmnu' }
				]);
				console.log('ruta /regoptmnu agregada');

				this.$router.addRoutes([
					{ path: "/accesos", component: () => import("../pages/SecAccesos.vue"), name: 'accesos' }
				]);
				console.log('ruta /accesos agregada');

				this.$router.addRoutes([
					{ path: "/marcas", component: () => import("../pages/Marcas.vue"), name: 'marcas' }
				]);
				console.log('ruta /marca agregada');

				this.$router.addRoutes([
					{ path: "/productos", component: () => import("../pages/Productos.vue"), name: 'productos' }
				]);
				console.log('ruta /productos agregada');

				this.$router.addRoutes([
					{ path: "/catalogos", component: () => import("../pages/Catalogos.vue"), name: 'catalogos' }
				]);
				console.log('ruta /catalogos agregada');

				this.$router.addRoutes([
					{ path: "/marcasxcli", component: () => import("../pages/MarcasXCliente.vue"), name: 'marcasxcli' }
				]);
				console.log('ruta /marcasxcli agregada');

				this.$router.addRoutes([
					{ path: "/productosxcli", component: () => import("../pages/ProductosXCliente.vue"), name: 'productosxcli' }
				]);
				console.log('ruta /productosxcli agregada');

				// vuecart
				this.$router.addRoutes([
					{ path: "/vuecart", component: () => import("../pages/vue-cart/VueCart"), name: 'vuecart' }
				]);
                console.log('ruta /vuecart agregada');
                
				this.$router.addRoutes([
					{ path: "/products-incart", component: () => import("../pages/vue-cart/components/ProductosEnCarrito.vue"), name: 'products-incart' }
				]);
				console.log('ruta /products-incart agregada');

				// this.$router.addRoutes([
				// 	{ path: "/checkout", component: () => import("../pages/vue-cart/components/CartCheckout"), name: 'checkout' }
				// ]);
				// console.log('ruta /checkout agregada');

				this.$router.addRoutes([
					{ path: "/pedidoschk", component: () => import("../pages/vue-cart/components/PedidosRealizados"), name: 'pedidoschk' }
				]);
				console.log('ruta /pedidoschk agregada');
			}
        }
    }
</script>
<style>
	a, a h1 {
		color: #d8e7f3;
	}
</style>